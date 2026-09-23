import { Fragment, type ReactNode } from 'react';
import {
  IconAgents, IconAsk, IconCalendar, IconCheck, IconClock, IconConnected, IconKnowledge,
  IconMail, IconPeople, IconSearch, IconSend, IconWarn, IconWorkspaces,
} from './icons';
import { StoryScroll } from './StoryScroll';

// Five steps on the left; on wide screens their app views stack in one sticky column
// on the right and StoryScroll shows whichever step is mid-viewport. On narrow screens
// each view simply follows its step. Every view is an illustration with sample data.

type Place = 'ask' | 'agents' | 'knowledge' | 'workspaces' | 'people';

const RAIL: { key: Place; label: string; Icon: typeof IconAsk }[] = [
  { key: 'ask', label: 'Ask AgOS', Icon: IconAsk },
  { key: 'agents', label: 'Agents', Icon: IconAgents },
  { key: 'knowledge', label: 'Knowledge', Icon: IconKnowledge },
  { key: 'workspaces', label: 'Workspaces', Icon: IconWorkspaces },
  { key: 'people', label: 'People', Icon: IconPeople },
];

function App({ place, title, tools, children }: { place: Place; title: string; tools?: ReactNode; children: ReactNode }) {
  return (
    <div className="app">
      <div className="app-rail">
        <span className="app-brand"><img src="/agos-mark.png" width={20} height={20} alt="" /> AgOS</span>
        {RAIL.map(({ key, label, Icon }) => (
          <span key={key} className={`app-row${key === place ? ' on' : ''}`}>
            <Icon size={15} /><span>{label}</span>{key === 'agents' && <em>3</em>}
          </span>
        ))}
      </div>
      <div className="app-win">
        <div className="app-bar"><b>{title}</b>{tools}</div>
        <div className="app-body">{children}</div>
      </div>
    </div>
  );
}

const Tabs = ({ items, on }: { items: string[]; on: string }) => (
  <span className="seg">{items.map((t) => <span key={t} className={t === on ? 'on' : undefined}>{t}</span>)}</span>
);

const AskView = (
  <div className="v-ask">
    <div className="v-thread">
      <p className="v-q">What did we promise Northbay about the Q4 launch?</p>
      <ul className="v-steps">
        <li><IconCheck size={13} /> Searched Knowledge and Workspaces</li>
        <li><IconCheck size={13} /> Read 4 sections</li>
        <li><IconCheck size={13} /> Checked open commitments</li>
      </ul>
      <div className="v-a">
        <p className="v-by"><img src="/agos-mark.png" width={16} height={16} alt="" /> AgOS</p>
        <p>
          Staging by <b>October 3</b> and launch on <b>October 14</b>.<sup className="cite">1</sup> The
          launch depends on DEL-14, which is waiting on the vendor.<sup className="cite">2</sup>
        </p>
      </div>
      <p className="v-compose">Ask a follow-up <span><IconSend size={13} /></span></p>
    </div>
    <div className="v-sources">
      <b>Sources</b>
      {[['1', 'Kickoff notes', 'Commitments', 92], ['2', 'DEL-14', 'Comment thread', 78], ['3', 'Scope of work v3', 'Milestones', 61]].map(([n, t, s, w]) => (
        <span key={n} className="v-src">
          <i>{n}</i><span><b>{t}</b><small>{s}</small></span>
          <span className="v-bar" style={{ width: `${w}%` }} />
        </span>
      ))}
    </div>
  </div>
);

const KnowledgeView = (
  <div className="v-kb">
    <div className="v-spaces">
      <b>Spaces</b>
      {[['General', 24], ['Sales', 12], ['Delivery', 31], ['People', 9]].map(([n, c]) => (
        <span key={n} className={n === 'Delivery' ? 'on' : undefined}><i>{String(n)[0]}</i>{n}<small>{c}</small></span>
      ))}
    </div>
    <div className="v-page">
      <p className="v-crumb">Delivery / Policies</p>
      <p className="v-title">Support policy</p>
      <p className="v-meta">7 sections · updated 8 months ago</p>
      <p className="v-callout"><IconWarn size={14} /> Needs review. Nobody has changed this page in 8 months.</p>
      <ol className="v-sections">
        <li>Scope</li>
        <li>Hours of cover</li>
        <li>Severity levels</li>
        <li className="on">Credits <span className="chip chip-amber">Suggested edit</span></li>
      </ol>
      <div className="v-diff">
        <del>Unused months expire after 6 months.</del>
        <ins>Unused months expire after 12 months.</ins>
        <small>From the renewal terms signed in August. Waiting for review.</small>
      </div>
    </div>
  </div>
);

const card = (key: string, title: string, label: 'Task' | 'Bug' | 'Epic', who: string, flag?: string) => (
  <span className={`v-card${flag ? ' flagged' : ''}`} key={key}>
    <span className="v-card-top"><small>{key}</small>{flag && <span className="chip chip-brick">{flag}</span>}</span>
    <b>{title}</b>
    <span className="v-card-foot">
      <span className={`label label-${label.toLowerCase()}`}>{label}</span>
      <i>{who}</i>
    </span>
  </span>
);

const WorkspacesView = (
  <div className="v-board">
    <div className="v-col"><p>To do <small>2</small></p>{card('DEL-17', 'Draft the launch checklist', 'Task', 'DK')}{card('DEL-19', 'Invite Northbay admins', 'Task', 'TR')}</div>
    <div className="v-col"><p>In progress <small>2</small></p>{card('DEL-14', 'Staging SSL certificate', 'Bug', 'PS', 'Blocked')}{card('DEL-15', 'Import support macros', 'Task', 'DK')}</div>
    <div className="v-col"><p>Done <small>2</small></p>{card('DEL-9', 'Northbay onboarding', 'Epic', 'PS')}{card('DEL-12', 'Staging environment', 'Task', 'TR')}</div>
    <div className="v-pop">
      <p className="v-pop-q"><IconAsk size={13} /> What’s going on with DEL-14?</p>
      <p>Waiting on the vendor for the SSL certificate. Priya asked for a date 9 days ago and has had no reply.</p>
      <span className="chip">DEL-14 · 6 comments</span>
    </div>
  </div>
);

const task = (label: string, who: string, state: 'done' | 'due' | 'next', when: string) => (
  <li className={state} key={label}>
    {state === 'done' ? <IconCheck size={12} /> : state === 'due' ? <IconClock size={12} /> : <i />}
    <span><b>{label}</b><small>{who}</small></span>
    <em>{when}</em>
  </li>
);

const PeopleView = (
  <div className="v-people">
    <div className="v-person">
      <i>TR</i>
      <span><b>Tomás Rivera</b><small>Account manager · Delivery</small></span>
      <span className="chip chip-accent">Week one</span>
    </div>
    <ul className="v-check">
      {task('Laptop and accounts ready', 'IT', 'done', 'Done')}
      {task('Meet your manager', 'Priya Shah', 'done', 'Done')}
      {task('Read the support policy', 'Knowledge', 'due', 'Wed')}
      {task('Shadow a Northbay call', 'Dana Kim', 'next', 'Thu')}
      {task('Friday check-in', 'Priya Shah', 'next', 'Fri')}
    </ul>
    <div className="v-mini">
      <p className="v-pop-q"><IconAsk size={13} /> Who is my manager?</p>
      <p>Priya Shah, the delivery lead. Your Friday check-in is with her.</p>
    </div>
  </div>
);

const ApprovalsView = (
  <div className="v-appr">
    <ul className="v-queue">
      <li className="on"><IconMail size={15} /><span><b>Send email</b><small>Drafting · 2 min ago</small></span></li>
      <li><IconCalendar size={15} /><span><b>Create event</b><small>Scheduling · 5 min ago</small></span></li>
      <li><IconConnected size={15} /><span><b>Open GitHub issue</b><small>Tool caller · 12 min ago</small></span></li>
    </ul>
    <div className="v-detail">
      <p className="v-title">Send “Kickoff agenda for Thursday”</p>
      <p className="v-label">What AgOS will do</p>
      <div className="mail">
        <p><span>To</span>ops@northbay.co</p>
        <p><span>Subject</span>Kickoff agenda for Thursday</p>
        <p className="mail-body">Hi Dana, here is Thursday’s agenda. We start with the milestones in the scope of work, then staging and the launch date.</p>
      </div>
      <p className="v-label">Why</p>
      <p className="v-why">You asked to confirm Thursday’s kickoff. The agenda follows the milestones in Scope of work v3.<sup className="cite">1</sup></p>
      <p className="v-actions"><span className="mini mini-line">Decline</span><span className="mini mini-ink">Approve</span></p>
    </div>
  </div>
);

const STEPS: { id: string; title: string; body: string; alt: string; view: ReactNode }[] = [
  {
    id: 'ask',
    title: 'Ask it the way you would ask a colleague.',
    body: 'Type the question in plain words. AgOS searches Knowledge, reads the sections that matter and writes an answer that cites each one. If the sources do not contain the answer, it says so instead of guessing.',
    alt: 'Ask AgOS answering a question about the Northbay launch, with three cited sources.',
    view: <App place="ask" title="Ask AgOS" tools={<span className="app-meta">Northbay</span>}>{AskView}</App>,
  },
  {
    id: 'knowledge',
    title: 'Everything it answers from, in one place.',
    body: 'Knowledge keeps the documents your team relies on in spaces: contracts, scopes of work, onboarding guides, decks. Long documents are split into sections, so an answer points at the exact passage instead of the whole file.',
    alt: 'The Knowledge view with a support policy page flagged for review and a suggested edit waiting for approval.',
    view: <App place="knowledge" title="Knowledge" tools={<span className="app-search"><IconSearch size={13} /> Search pages</span>}>{KnowledgeView}</App>,
  },
  {
    id: 'workspaces',
    title: 'Answers turn into tracked work.',
    body: 'Workspaces keep boards and issues next to the documents they came from. Ask what is going on with a task and AgOS reads the comment thread, not only the status: who said what, and how long ago.',
    alt: 'A Workspaces board with an Ask panel explaining why issue DEL-14 is blocked.',
    view: <App place="workspaces" title="Delivery" tools={<Tabs items={['Board', 'List', 'Summary']} on="Board" />}>{WorkspacesView}</App>,
  },
  {
    id: 'people',
    title: 'The org chart is part of the answer.',
    body: 'People holds the directory, the org chart and onboarding checklists. Ask who someone reports to or who a new hire should meet, and the answer comes from the same record your team keeps up to date.',
    alt: 'A new hire’s week-one onboarding checklist, with an answer naming their manager.',
    view: <App place="people" title="People" tools={<Tabs items={['Directory', 'Onboarding', 'Org chart']} on="Onboarding" />}>{PeopleView}</App>,
  },
  {
    id: 'approvals',
    title: 'Nothing leaves without a yes.',
    body: 'Agents draft the email, book the meeting or call a connected tool. Those actions can wait in Approvals, showing what AgOS will do and why, until a person approves or declines. Each one is recorded with who did it and when.',
    alt: 'The Approvals queue showing an email AgOS drafted, with Approve and Decline buttons.',
    view: <App place="agents" title="Agents" tools={<Tabs items={['Agents', 'Skills', 'Approvals']} on="Approvals" />}>{ApprovalsView}</App>,
  },
];

export function Story() {
  return (
    <section className="story" id="how-it-works" aria-labelledby="story-title">
      <div className="wrap">
        <div className="story-head">
          <h2 id="story-title">From a question to a yes.</h2>
          <p className="lede">
            Ask, Knowledge, Workspaces, People and Agents are one product, so a question in one
            can draw on all the others.
          </p>
        </div>
        <div className="story-grid" data-story>
          {STEPS.map((s, i) => (
            <Fragment key={s.id}>
              <div className={`step${i === 0 ? ' is-active' : ''}`} id={s.id} data-step={i}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <figure className={`panel${i === 0 ? ' is-active' : ''}`} data-panel={i} role="img" aria-label={s.alt}>
                {s.view}
              </figure>
            </Fragment>
          ))}
        </div>
        <p className="story-note">Product views on this page are illustrations with sample data.</p>
      </div>
      <StoryScroll />
    </section>
  );
}
