import type { ReactNode } from 'react';
import {
  IconActivity, IconAsk, IconCalendar, IconCheck, IconChecklist, IconClock, IconCode,
  IconConnected, IconDoc, IconMail, IconMegaphone, IconPen, IconSearch,
} from './icons';

// Agents act; skills only think and write. Roles are from ai-brain/docs/AIOS-FEATURES.md,
// skill names and one-liners from ai-brain/config/seed/zentaraios-agents.yaml. The cards'
// contents are sample work for the sample company, Northbay.

function Agent({ icon, name, role, wide, children }: {
  icon: ReactNode; name: string; role: string; wide?: boolean; children: ReactNode;
}) {
  return (
    <article className={`agent${wide ? ' agent-wide' : ''}`}>
      <header>
        <span className="agent-mark">{icon}</span>
        <span><b>{name}</b><span>{role}</span></span>
      </header>
      <div className="agent-work">{children}</div>
    </article>
  );
}

const AGENTS = (
  <>
    <Agent icon={<IconMail />} name="Drafting" role="Writes emails, proposals and reports" wide>
      <div className="mail">
        <p><span>To</span>ops@northbay.co</p>
        <p><span>Subject</span>Kickoff agenda for Thursday</p>
        <p className="mail-body">Hi Dana, here is Thursday’s agenda. We start with the milestones in the scope of work, then staging and the launch date.</p>
      </div>
      <span className="chip chip-amber"><IconClock size={12} /> Waiting for approval</span>
    </Agent>

    <Agent icon={<IconCalendar />} name="Scheduling" role="Creates and checks calendar events" wide>
      <div className="event">
        <span className="date"><small>Oct</small>2</span>
        <span className="event-text"><b>Northbay kickoff</b><span>Thu · 10:00 to 10:45</span></span>
        <span className="faces" aria-label="3 attendees"><i>DK</i><i>PS</i><i>TR</i></span>
      </div>
      <span className="chip chip-amber"><IconClock size={12} /> Needs approval</span>
    </Agent>

    <Agent icon={<IconSearch />} name="Research" role="Gathers and summarizes information">
      <ul className="reads">
        <li><IconDoc size={14} /> Churn interviews, Q2</li>
        <li><IconDoc size={14} /> Support tickets, August</li>
        <li><IconDoc size={14} /> Renewal call notes</li>
      </ul>
      <span className="chip chip-moss"><IconCheck size={12} /> Summary ready · 3 sources</span>
    </Agent>

    <Agent icon={<IconActivity />} name="Forecast" role="Answers what happens if something slips" wide>
      <p className="forecast-q">If DEL-14 slips one week</p>
      <p className="forecast-a">Two dependent issues move, and the Northbay launch moves from <b>Oct 14</b> to <b>Oct 21</b>.</p>
      <span className="chip chip-brick">Launch at risk</span>
    </Agent>

    <Agent icon={<IconChecklist />} name="Task management" role="Captures and tracks to-dos">
      <ul className="todo">
        <li className="done"><IconCheck size={12} /> Send kickoff agenda</li>
        <li className="done"><IconCheck size={12} /> Share staging link</li>
        <li><i /> Confirm SSL certificate <em>Fri</em></li>
      </ul>
    </Agent>

    <Agent icon={<IconCode />} name="Code context" role="Explains commits, pull requests and issues">
      <p className="code-line"><b>PR #184</b> merged into main</p>
      <p className="code-meta">Fixes DEL-14 · 3 files changed</p>
    </Agent>

    <Agent icon={<IconAsk />} name="Knowledge answers" role="Answers from what it can cite" wide>
      <p className="kq">What is the refund window for annual plans?</p>
      <p className="ka">30 days from the start date, then credit toward renewal.<sup className="cite">1</sup></p>
      <span className="chip"><IconDoc size={12} /> Pricing and refunds.md</span>
    </Agent>

    <Agent icon={<IconPen />} name="Lead follow-up" role="Drafts the next touch for a lead">
      <p className="lead"><b>Harbor &amp; Co</b><span>Last reply 12 days ago</span></p>
      <span className="chip chip-amber"><IconClock size={12} /> Queued for approval</span>
    </Agent>

    <Agent icon={<IconMegaphone />} name="Social publisher" role="Drafts, schedules and posts">
      <p className="post">Northbay’s new support hours start Monday.</p>
      <span className="chip"><IconCalendar size={12} /> Tue 09:00 · 2 channels</span>
    </Agent>

    <Agent icon={<IconConnected />} name="Tool caller" role="Runs a connected tool on request">
      <code className="call">github.create_issue</code>
      <p className="code-meta">Opened #212 in northbay/web</p>
    </Agent>
  </>
);

const SKILLS: [string, string, string][] = [
  ['CS', 'Chief of Staff', 'Surfaces blockers and hands work to specialists'],
  ['BD', 'BizDev Manager', 'Owns deals and partnerships. Drafts proposals, never sends'],
  ['QA', 'Email QA Manager', 'Checks a draft against your email rules before it goes out'],
  ['MM', 'Marketing Manager', 'Coordinates social, press and content. Drafts only'],
  ['FI', 'Finance', 'Runway, burn rate and fundraising readiness'],
  ['PM', 'Product Manager', 'Roadmap, priorities and pilot feedback'],
];

const SKILL_CHIPS = (
  <>
    {SKILLS.map(([initials, name, line]) => (
      <span key={name} className="skill">
        <i>{initials}</i><b>{name}</b><span>{line}</span>
      </span>
    ))}
    <span className="skill skill-own">
      <i><IconPen size={13} /></i><b>Your own skill</b><span>Describe how it should behave, in plain words</span>
    </span>
  </>
);

// Two identical tracks per row make the loop seamless; the copy is hidden from
// assistive tech and from the tab order.
function Row({ dir, label, children }: { dir: 'left' | 'right'; label: string; children: ReactNode }) {
  return (
    <div className="row" data-dir={dir} role="group" aria-label={label}>
      <div className="track">{children}</div>
      <div className="track" aria-hidden inert>{children}</div>
    </div>
  );
}

export function Agents() {
  return (
    <section className="agents" id="agents" aria-labelledby="agents-title">
      <div className="wrap split">
        <h2 id="agents-title">Agents do the work. A person approves what leaves.</h2>
        <p className="lede">
          Each agent handles one kind of work: research, drafting, scheduling, tasks, forecasts.
          Anything that sends an email, books a meeting or calls an outside tool can wait in
          Approvals until someone says yes.
        </p>
      </div>
      <div className="marquee">
        <Row dir="left" label="Agents">{AGENTS}</Row>
        <Row dir="right" label="Skills">{SKILL_CHIPS}</Row>
      </div>
      <p className="wrap marquee-note">
        Skills think and write; they never act on their own. Write a new one in a few sentences from the console.
      </p>
    </section>
  );
}
