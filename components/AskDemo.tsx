'use client';

import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from 'react';
import { SIGN_UP } from '@/lib/links';
import { IconArrow, IconAsk, IconCheck, IconScope, IconSend } from './icons';

// The hero demo: a sample company ("Northbay", the org name ai-brain's own tests use),
// six sample documents, and three questions whose answers cite them. Everything here is
// labeled as a sample on the page; nothing is sent anywhere.

type Kind = 'PDF' | 'DOCX' | 'PPTX' | 'MD';
type Doc = { id: string; name: string; kind: Kind; sections: number; line: string };

const DOCS: Doc[] = [
  { id: 'msa', name: 'Northbay MSA 2026.pdf', kind: 'PDF', sections: 18, line: '12.3 Fees and changes. A change that moves the fee by more than 10% needs written approval from finance.' },
  { id: 'sow', name: 'Scope of work v3.docx', kind: 'DOCX', sections: 11, line: '7. Change control. Any change to agreed scope needs a change order signed by both sides.' },
  { id: 'onb', name: 'Onboarding guide.md', kind: 'MD', sections: 9, line: 'Week one. Day one is with your manager, then your onboarding buddy.' },
  { id: 'sup', name: 'Support policy.pdf', kind: 'PDF', sections: 7, line: '4. Credits. Unused months are credited toward the next renewal.' },
  { id: 'q3', name: 'Q3 plan.pptx', kind: 'PPTX', sections: 14, line: 'Slide 6. The Northbay launch is planned for October 14.' },
  { id: 'ref', name: 'Pricing and refunds.md', kind: 'MD', sections: 6, line: 'Annual plans. Full refund within 30 days of the start date.' },
];

type Sample = {
  q: string;
  short: string;
  steps: string[];
  answer: { t: string; cite: number }[];
  sources: { n: number; doc: string; section: string }[];
};

const SAMPLES: Sample[] = [
  {
    q: 'Who has to sign off on a change to a signed scope of work?',
    short: 'Scope changes',
    steps: ['Searched Knowledge', 'Read 3 sections in 2 documents', 'Checked open commitments'],
    answer: [
      { t: 'Both sides sign a change order before the scope changes.', cite: 1 },
      { t: 'If the change moves the fee by more than 10%, finance also approves it in writing.', cite: 2 },
    ],
    sources: [
      { n: 1, doc: 'sow', section: '7. Change control' },
      { n: 2, doc: 'msa', section: '12.3 Fees and changes' },
    ],
  },
  {
    q: 'What is our refund window for annual plans?',
    short: 'Refund window',
    steps: ['Searched Knowledge', 'Read 2 sections in 2 documents', 'Checked open commitments'],
    answer: [
      { t: 'Annual plans get a full refund within 30 days of the start date.', cite: 1 },
      { t: 'After that, unused months are credited toward the next renewal instead.', cite: 2 },
    ],
    sources: [
      { n: 1, doc: 'ref', section: 'Annual plans' },
      { n: 2, doc: 'sup', section: '4. Credits' },
    ],
  },
  {
    q: 'Who does a new hire meet in their first week?',
    short: 'A new hire’s first week',
    steps: ['Searched Knowledge', 'Read 2 sections in 1 document', 'Checked People'],
    answer: [
      { t: 'Day one is with their manager, then their onboarding buddy.', cite: 1 },
      { t: 'The week closes with a Friday check-in with the same manager.', cite: 2 },
    ],
    sources: [
      { n: 1, doc: 'onb', section: 'Week one' },
      { n: 2, doc: 'onb', section: 'Check-ins' },
    ],
  },
];

type Phase = 'idle' | 'typing' | 'working' | 'writing' | 'done' | 'unknown';

const wordsOf = (s: Sample) => s.answer.map((a) => a.t.split(' '));

export function AskDemo() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [active, setActive] = useState(0);
  const [input, setInput] = useState('');
  const [asked, setAsked] = useState('');
  const [steps, setSteps] = useState(0);
  const [words, setWords] = useState(0);
  const timers = useRef<number[]>([]);
  const thread = useRef<HTMLDivElement>(null);

  const clear = () => { timers.current.forEach(clearTimeout); timers.current = []; };
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const run = (i: number) => {
    clear();
    const s = SAMPLES[i];
    const total = wordsOf(s).flat().length;
    setActive(i); setAsked(s.q); setInput('');
    if (reduced()) { setSteps(s.steps.length); setWords(total); setPhase('done'); return; }
    setSteps(0); setWords(0); setPhase('working');
    s.steps.forEach((_, k) => later(() => setSteps(k + 1), 520 * (k + 1)));
    const start = 520 * s.steps.length + 260;
    later(() => setPhase('writing'), start);
    for (let w = 1; w <= total; w++) later(() => setWords(w), start + w * 42);
    later(() => setPhase('done'), start + total * 42 + 120);
  };

  const typeThenRun = (i: number) => {
    clear();
    const q = SAMPLES[i].q;
    setPhase('typing'); setInput('');
    for (let c = 1; c <= q.length; c++) later(() => setInput(q.slice(0, c)), c * 26);
    later(() => run(i), q.length * 26 + 380);
  };

  // Play the first question once, as soon as the page settles. Any interaction cancels it.
  useEffect(() => {
    if (reduced()) run(0);
    else later(() => typeThenRun(0), 1100);
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = thread.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [steps, words, phase]);

  const submit = (e?: FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    const i = SAMPLES.findIndex((s) => s.q.toLowerCase() === text.toLowerCase());
    if (i >= 0) return run(i);
    clear();
    setAsked(text); setInput(''); setPhase('unknown');
  };

  const onKey = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); }
  };

  const s = SAMPLES[active];
  const cited = phase === 'done' ? s.sources : [];
  const citesFor = (doc: string) => cited.filter((c) => c.doc === doc).map((c) => c.n);
  const segs = wordsOf(s);
  let budget = words;
  const thinking = phase === 'working' || phase === 'writing' || phase === 'done';
  const others = SAMPLES.map((x, i) => ({ q: x.q, short: x.short, i })).filter((x) => phase === 'unknown' || x.i !== active);

  return (
    <div className="stage">
      <ul className="docs" aria-label="Sample documents Northbay has added">
        {DOCS.map((d, k) => {
          const nums = citesFor(d.id);
          return (
            <li key={d.id} className={`doc slot-${k}${nums.length ? ' is-cited' : ''}`}>
              <span className={`doc-kind k-${d.kind.toLowerCase()}`}>{d.kind}</span>
              <b className="doc-name">{d.name}</b>
              <span className="doc-line">{d.line}</span>
              <span className="doc-meta">{d.sections} sections</span>
              {nums.length > 0 && (
                <span className="doc-cites" aria-label={`Cited as source ${nums.join(' and ')}`}>
                  {nums.map((n) => <i key={n}>{n}</i>)}
                </span>
              )}
            </li>
          );
        })}
      </ul>

      <div className="ask">
        <div className="ask-head">
          <span className="ask-title"><IconAsk className="ask-spark" /> Ask AgOS</span>
          <span className="scope"><IconScope size={13} /> Northbay · 6 documents</span>
        </div>

        <div className="ask-thread" ref={thread}>
          {!thinking && phase !== 'unknown' && (
            <div className="ask-empty">
              <p className="ask-hello">Northbay is ready.</p>
              <p className="ask-sub">I read 6 documents. Ask me something.</p>
              <div className="suggs">
                {SAMPLES.map((x, i) => (
                  <button key={x.q} type="button" className="sugg" onClick={() => run(i)}>
                    <span>{x.q}</span><IconArrow size={15} />
                  </button>
                ))}
              </div>
            </div>
          )}

          {(thinking || phase === 'unknown') && <p className="bubble">{asked}</p>}

          {phase === 'done' && (
            <p className="run-done"><IconCheck size={14} /> {s.steps.join(' · ')}</p>
          )}

          {(phase === 'working' || phase === 'writing') && (
            <ul className="run" aria-label="What AgOS did">
              {s.steps.slice(0, Math.min(steps + 1, s.steps.length)).map((label, k) => (
                <li key={label} className={k < steps ? 'ok' : 'busy'}>
                  {k < steps ? <IconCheck size={14} /> : <span className="spin" aria-hidden />}
                  {label}
                </li>
              ))}
            </ul>
          )}

          {(phase === 'writing' || phase === 'done') && (
            <div className="answer">
              <p className="answer-by"><img src="/agos-mark.png" width={18} height={18} alt="" /> AgOS</p>
              <p className="answer-text">
                {segs.map((ws, k) => {
                  const shown = Math.min(budget, ws.length);
                  budget -= shown;
                  if (!shown) return null;
                  return (
                    <span key={k}>
                      {k > 0 ? ' ' : ''}{ws.slice(0, shown).join(' ')}
                      {shown === ws.length && <sup className="cite">{s.answer[k].cite}</sup>}
                    </span>
                  );
                })}
              </p>
              {phase === 'done' && (
                <div className="sources">
                  <p>Answered from</p>
                  {s.sources.map((c) => (
                    <span key={c.n} className="source">
                      <i>{c.n}</i><b>{DOCS.find((d) => d.id === c.doc)!.name}</b><span>{c.section}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {phase === 'unknown' && (
            <div className="answer">
              <p className="answer-by"><img src="/agos-mark.png" width={18} height={18} alt="" /> AgOS</p>
              <p className="answer-text">
                This preview only has Northbay’s six sample documents, so it can answer the questions below.
                Add your own documents and AgOS answers from those, with citations.
              </p>
              <a className="answer-cta" href={SIGN_UP}>Create your account <IconArrow size={14} /></a>
            </div>
          )}

        </div>

        {(phase === 'done' || phase === 'unknown') && (
          <div className="ask-next">
            <span>Try</span>
            {others.map((x) => (
              <button key={x.q} type="button" className="next-chip" title={x.q} onClick={() => run(x.i)}>{x.short}</button>
            ))}
          </div>
        )}

        <form className="compose" onSubmit={submit}>
          <textarea
            rows={1}
            value={input}
            placeholder="Ask anything"
            aria-label="Ask a question about the sample documents"
            onChange={(e) => { if (phase === 'typing') clear(); setInput(e.target.value); if (phase === 'typing') setPhase('idle'); }}
            onFocus={() => { if (phase === 'typing') { clear(); setPhase('idle'); } }}
            onKeyDown={onKey}
          />
          <button className="send" type="submit" aria-label="Ask" disabled={!input.trim()}>
            <IconSend size={16} />
          </button>
        </form>

        <p className="sr-only" aria-live="polite">
          {phase === 'done' ? `AgOS answered: ${s.answer.map((a) => a.t).join(' ')} Sources: ${s.sources.map((c) => `${DOCS.find((d) => d.id === c.doc)!.name}, ${c.section}`).join('; ')}.` : ''}
          {phase === 'unknown' ? 'This preview can only answer the sample questions.' : ''}
        </p>
      </div>

      <p className="stage-note">Northbay and its documents are samples. Your answers come from your own documents.</p>
    </div>
  );
}
