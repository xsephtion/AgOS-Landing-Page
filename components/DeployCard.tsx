'use client';

import Link from 'next/link';
import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { CONTACT, SIGN_UP } from '@/lib/links';
import {
  IconArrow, IconAsk, IconClock, IconCode, IconConnected, IconKey, IconPeople, IconSources, IconWorkspaces,
} from './icons';

// Pool vs silo, from ai-brain/docs/DEPLOYMENT_MODES.md. No prices: none exist yet.

type Plan = {
  id: 'cloud' | 'isolated';
  tab: string;
  title: string;
  line: string;
  big: string;
  bigLine: string;
  rows: [ReactNode, string, string][];
  note: string;
  cta: { label: string; href: string };
};

const PLANS: Plan[] = [
  {
    id: 'cloud',
    tab: 'Cloud',
    title: 'Cloud',
    line: 'For teams that want to start today. Nothing to install and no sales call.',
    big: 'Self-serve',
    bigLine: 'Sign up with a work email',
    rows: [
      [<IconWorkspaces key="i" />, 'Workspace', 'Your organization on its own subdomain'],
      [<IconAsk key="i" />, 'Models', 'Bundled, with a monthly usage cap'],
      [<IconSources key="i" />, 'Data', 'Shared database, every row scoped to your organization'],
      [<IconConnected key="i" />, 'Tools', 'Remote MCP servers'],
      [<IconKey key="i" />, 'Billing', 'A subscription for your organization'],
      [<IconClock key="i" />, 'Setup', 'Ready as soon as your first documents are indexed'],
    ],
    note: 'Create the account, add your documents, invite your team.',
    cta: { label: 'Create your account', href: SIGN_UP },
  },
  {
    id: 'isolated',
    tab: 'Isolated Cloud',
    title: 'Isolated Cloud',
    line: 'For organizations whose data has to live in a database of their own.',
    big: 'Your database',
    bigLine: 'Comes with the Enterprise plan',
    rows: [
      [<IconSources key="i" />, 'Data', 'Your own database, not shared with anyone'],
      [<IconWorkspaces key="i" />, 'Hostnames', 'One per app, on your own domain'],
      [<IconKey key="i" />, 'Models', 'Your own keys, with no monthly cap'],
      [<IconConnected key="i" />, 'Tools', 'Local and remote MCP servers'],
      [<IconPeople key="i" />, 'Setup', 'Provisioned by the AgOS team'],
      [<IconCode key="i" />, 'Code', 'The same code and migrations as Cloud'],
    ],
    note: 'Tell us about your organization and we will set it up with you.',
    cta: { label: 'Talk to us', href: CONTACT },
  },
];

const PROVIDERS: [string, string[]][] = [
  ['Models', ['Anthropic', 'OpenAI', 'Ollama']],
  ['Embeddings', ['Voyage', 'OpenAI', 'Hugging Face']],
  ['Sign-in', ['Google', 'GitHub']],
];

export function DeployCard() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const plan = PLANS[active];

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + PLANS.length) % PLANS.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="plan">
      <div className="plan-top">
        <div className="seg seg-lg" role="tablist" aria-label="Where AgOS runs" onKeyDown={onKey}>
          {PLANS.map((p, i) => (
            <button
              key={p.id}
              ref={(el) => { tabs.current[i] = el; }}
              type="button"
              role="tab"
              id={`tab-${p.id}`}
              aria-selected={i === active}
              aria-controls={`panel-${p.id}`}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? 'on' : undefined}
              onClick={() => setActive(i)}
            >
              {p.tab}
            </button>
          ))}
        </div>
        <span className="plan-same">Same product either way</span>
      </div>

      <div className="plan-body" role="tabpanel" id={`panel-${plan.id}`} aria-labelledby={`tab-${plan.id}`} key={plan.id}>
        <div className="plan-head">
          <div>
            <h3>{plan.title}</h3>
            <p>{plan.line}</p>
          </div>
          <p className="plan-big"><b>{plan.big}</b><span>{plan.bigLine}</span></p>
        </div>

        <ul className="plan-rows">
          {plan.rows.map(([icon, k, v]) => (
            <li key={k}><span className="plan-icon">{icon}</span><span><b>{k}</b><span>{v}</span></span></li>
          ))}
        </ul>

        <div className="providers">
          <p>Supported providers</p>
          <div>
            {PROVIDERS.map(([group, names]) => (
              <span key={group} className="provider-group">
                <small>{group}</small>
                {names.map((n) => <span key={n} className="provider">{n}</span>)}
              </span>
            ))}
          </div>
        </div>

        <div className="plan-foot">
          <p>{plan.note}</p>
          <span className="plan-actions">
            <Link className="plan-link" href="/pricing">Compare plans</Link>
            <a className="btn btn-ink" href={plan.cta.href}>{plan.cta.label} <IconArrow size={16} className="arrow" /></a>
          </span>
        </div>
      </div>
    </div>
  );
}
