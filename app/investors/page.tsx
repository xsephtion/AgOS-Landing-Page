import type { Metadata } from 'next';
import { Closing } from '@/components/Chrome';
import { IconActivity, IconArrow, IconCalendar, IconCheck } from '@/components/icons';
import { PITCH_DECK } from '@/lib/links';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = {
  ...pageMetadata({
    path: '/investors',
    title: 'Investors',
    description:
      'A summary of the AgOS pitch deck: the problem, how AgOS works, how it makes money and the $200,000 raise.',
  }),
  // Shared by link, like the deck it summarizes: nothing on the site links here, and search engines skip it.
  robots: { index: false },
};

// A summary of the owner's pitch deck (PITCH_DECK) and nothing else. Left out on purpose:
// the team slide (still a fill-in in the deck), market sizes (the deck gives none) and the
// talk-track notes, which are for the presenter. "Roughly 10 to 200 people" is bracketed in
// the deck. If the deck changes, this page does not follow it by itself.
const DECK_UPDATED = { iso: '2026-08-18', label: 'August 18, 2026' };

type Step = { text: string; tone?: 'key' | 'end' };

const BEFORE: Step[] = [
  { text: 'Information goes in' },
  { text: 'A chart comes out' },
  { text: 'A person decides' },
  { text: 'The software forgets', tone: 'end' },
];

const LOOP: Step[] = [
  { text: 'Something happens at work' },
  { text: 'AgOS understands it' },
  { text: 'It suggests' },
  { text: 'A person approves', tone: 'key' },
  { text: 'The work gets done' },
  { text: 'The result comes back in', tone: 'key' },
  { text: 'The next suggestion is better' },
];

const DIAL: Step[] = [
  { text: 'Watches and answers' },
  { text: 'Suggests, you decide' },
  { text: 'Prepares, you approve' },
  { text: 'Goes on its own' },
];

const WEEK: [string, string][] = [
  ['Day 1', 'A new hire asks for the current campaign playbook and gets the answer, not a link, within what her role allows.'],
  ['Day 2', 'She needs a poster. The brief is read, a draft comes back, she approves it and it ships on schedule. The stakeholder who went quiet gets chased.'],
  ['Day 3', 'She says the pilot lands Friday, and that promise becomes tracked work with a real estimate.'],
  ['Day 4', 'The deadline starts slipping, and the risk is flagged before anyone notices it in a meeting.'],
  ['Day 5', 'Leadership opens one view and sees what is done, what is waiting and who owns what.'],
];

const WHY_NOW: [string, string][] = [
  ['1', 'Models are finally good enough to make sense of messy company information, not only tidy documents.'],
  ['2', 'Teams are spread across places and tools, so knowledge is thinner and more scattered than it has ever been.'],
  ['3', 'Companies already pay for four separate tools that each hold a piece of this and do not talk to each other.'],
  ['4', 'Buyers are past wanting a chatbot. They want software that does the work, and they are looking for it.'],
];

const MOMENTS: [string, string, string][] = [
  ['Someone joins',
    'Knowledge reaches them through busy people, so their first quarter goes to collecting what already exists.',
    'They reach the company directly, including the gap between the written process and the real one.'],
  ['Someone leaves',
    'Access gets shut off, but how they did the work walks out the door.',
    'What they knew was captured while they worked, so the gaps show before their last day.'],
  ['Teams work together',
    'Different words, different tools, and decisions made in rooms the other team was not in.',
    'One source, answered in the language of whoever is asking.'],
  ['Feedback comes in',
    'Sales hears what is wrong every day, and almost none of it reaches the people who build.',
    'Patterns surface, a person approves, work gets created, and AgOS checks whether the complaints stopped.'],
];

// Question, AgOS, then ClickUp, Jira and Confluence: AgOS first so a phone shows it before the table scrolls.
const VERSUS: [string, string, string][] = [
  ['What it is for', 'Running the company and improving how it runs', 'Tracking work and files'],
  ['What it holds', 'Knowledge, decisions, feedback, results', 'Tasks, tickets, pages'],
  ['Where the AI sits', 'It is the product', 'Bolted on top'],
  ['What it remembers', 'What actually happened, as it happened', 'Whatever someone wrote down'],
  ['Who decides', 'A person, working from everything the company knows', 'A person, working from whatever they could find'],
  ['How it improves', 'From results, and from every approval and rejection', 'Manual updates'],
];

const MARKET: [string, string][] = [
  ['Where we start',
    'Fast-growing companies of roughly 10 to 200 people, plus service businesses such as agencies that bring on clients again and again. They feel the problem hardest, decide fastest and have no legacy system in the way.'],
  ['Then up',
    'Same product, bigger surface. A large company has the same problem in every department that does not talk to the others.'],
  ['The budget',
    'Companies already pay four vendors for work tracking, company documents, HR onboarding and AI assistants sold per person. AgOS asks for no new budget: it collapses budget that already exists into one system that gets better over time.'],
];

const PRICING: [string, string][] = [
  ['No seats',
    'Everyone gets in. Charging per seat would mean charging a company to let its own people reach its own knowledge.'],
  ['Credits',
    'Every plan includes a monthly credit allowance, used when AgOS does something: answering with real context, drafting work, running a workflow, chasing a stakeholder, watching a deadline. Small asks cost little and heavy work costs more.'],
  ['Input is free',
    'Documents, task updates and feedback never cost credits, so there is never a budget reason to stop putting information in.'],
  ['Volume',
    'Volume gets a better rate, and larger companies commit annually for the best one.'],
  ['Why it fits',
    'Price follows value, accounts grow without selling another seat, and the biggest cost moves with usage, so margin does not depend on guessing how hard a customer leans on a flat plan.'],
];

const TODAY: [string, string][] = [
  ['Discovery',
    'We interviewed HR teams, and the same problems came up almost word for word: scattered information, unclear ownership, people relying on busy colleagues for answers, and knowledge that gets lost or is never written down.'],
  ['Working today',
    'An MVP of the core product: Document Base, Chat, AI Agents and Organizational Knowledge.'],
  ['Building now',
    'How AgOS understands and organizes company knowledge, plus bug fixing and QA.'],
  ['Users',
    'One user is helping us test and validate the product.'],
  ['What surprised us',
    'Storing and finding knowledge was not the hard part. Connecting it across people, teams, tools and conversations, so the organization can learn from it, is.'],
];

const TO_PROVE: [string, string][] = [
  ['Input',
    'AgOS is only as good as what flows through it, so the useful thing has to be the easy thing and keeping it current cannot be extra work.'],
  ['Autonomy',
    'Companies have to be willing to turn the dial up. We would rather earn each level than assume it.'],
  ['Moving over',
    'Getting the first teams fully moved over is real work, and we plan for it rather than hoping it is quick.'],
];

const ROADMAP: [string, string][] = [
  ['Now', 'Onboarding and offboarding, shared knowledge with permissions, real answers, work tracked in one place, and a person approving anything that counts.'],
  ['Next', 'Helpers that carry routine work end to end once a team hands over the workflow, customer feedback routed to whoever can act on it, and plain summaries of what teams are doing.'],
  ['Later', 'AgOS proposing better ways of working, based on what has worked inside that company rather than a template somebody else wrote.'],
];

// The deck's split of the $200,000, in percent.
const FUNDS: [string, number][] = [
  ['Product', 45],
  ['Getting to first customers', 35],
  ['Team', 15],
  ['Everything else', 5],
];

const MILESTONES = ['A production-ready AgOS', '10 to 20 paying companies', 'A validated go-to-market process'];

function Steps({ items }: { items: Step[] }) {
  return (
    <ol className="steps">
      {items.map(({ text, tone }, i) => (
        <li key={text}>
          {i > 0 && <IconArrow size={13} />}
          <span className={tone}>{text}</span>
        </li>
      ))}
    </ol>
  );
}

function Rows({ items }: { items: [string, string][] }) {
  return (
    <ul className="inv-rows">
      {items.map(([k, v]) => <li key={k}><b>{k}</b><span>{v}</span></li>)}
    </ul>
  );
}

export default function Investors() {
  return (
    <main id="main">
      <section className="p-hero" aria-labelledby="inv-title">
        <div className="wrap">
          <h1 id="inv-title">AgOS learns how <br />a company works.</h1>
          <p className="lede">
            Not only what it knows. This page is a short summary of our pitch deck: the problem,
            how AgOS works, how it makes money and what we are raising.
          </p>
          <p className="facts">
            <span className="fact"><IconActivity size={15} /> Raising $200,000</span>
            <span className="fact"><IconCheck size={15} /> MVP working today</span>
            <span className="fact">
              <IconCalendar size={15} />
              <span>Deck updated <time dateTime={DECK_UPDATED.iso}>{DECK_UPDATED.label}</time></span>
            </span>
          </p>
          <p className="hero-actions">
            <a className="btn btn-ink" href={PITCH_DECK}>Read the full pitch deck <IconArrow size={16} className="arrow" /></a>
            <a className="btn btn-line" href="#ask">See the ask</a>
          </p>
        </div>
      </section>

      <section className="inv-sec" id="problem" aria-labelledby="problem-title">
        <div className="wrap keys-grid">
          <h2 id="problem-title">What a company knows is scattered, and it expires.</h2>
          <div className="inv-stack">
            <p className="lede">
              One person knows how something works, another knows why it was built that way, and
              someone else knows the exception nobody wrote down. When they get busy, go on leave,
              switch teams or resign, the company loses something it already paid to learn.
            </p>
            <p className="lede">
              It never shows up as a line item. The same lesson is learned four times by four people,
              new hires spend months collecting what already exists, teams rebuild what was built, and
              complaints reach nobody who can act on them. The company moves slower than it should
              for its size, and nobody can say exactly why.
            </p>
          </div>
        </div>
      </section>

      <section className="inv-sec" id="loop" aria-labelledby="loop-title">
        <div className="wrap">
          <div className="center-head">
            <h2 id="loop-title">Most software stops halfway. AgOS goes all the way around.</h2>
            <p className="lede">
              AgOS learns how work actually gets done inside a company. It holds the knowledge
              behind that work, notices what is breaking or repeating, and helps people fix and
              finish it.
            </p>
          </div>
          <div className="inv-win loop">
            <div className="loop-row">
              <p className="loop-label">Most business software</p>
              <Steps items={BEFORE} />
            </div>
            <div className="loop-row">
              <p className="loop-label">AgOS</p>
              <Steps items={LOOP} />
            </div>
          </div>
          <p className="inv-note">
            Two steps carry the business. Without a person approving, nobody adopts it. Without the
            result coming back in, it is just another assistant.
          </p>
        </div>
      </section>

      <section className="inv-sec" id="week" aria-labelledby="week-title">
        <div className="wrap keys-grid">
          <div className="inv-stack">
            <h2 id="week-title">One week with AgOS.</h2>
            <p className="lede">
              A new hire’s first week, as the deck walks through it. The point is not that AI
              answered her questions. It is that AI handled the work between the questions.
            </p>
          </div>
          <div className="inv-win">
            <p className="inv-head"><b>Week one</b><span className="chip">New hire</span></p>
            <div className="inv-body"><Rows items={WEEK} /></div>
          </div>
        </div>
      </section>

      <section className="inv-sec" id="approval" aria-labelledby="approval-title">
        <div className="wrap">
          <div className="center-head">
            <h2 id="approval-title">Human approval is the business model, not a compromise.</h2>
            <p className="lede">
              Every approval or rejection is the best signal there is about how this specific
              company works, and it makes the product better. Nobody else is collecting it, and it
              cannot be scraped or bought. The same step makes AgOS sellable to companies that cannot
              take risk, and it means AgOS never makes a call the company should be making.
            </p>
          </div>
          <div className="inv-win loop">
            <p className="inv-head"><b>Autonomy is a dial, not a switch</b></p>
            <div className="loop-row"><Steps items={DIAL} /></div>
          </div>
          <p className="inv-note">
            AgOS goes on its own only for a workflow you have watched it get right forty times, and
            any workflow can move back down a level at any time.
          </p>
        </div>
      </section>

      <section className="inv-sec" id="why-now" aria-labelledby="why-now-title">
        <div className="wrap keys-grid">
          <h2 id="why-now-title">Why now.</h2>
          <div className="inv-win"><div className="inv-body"><Rows items={WHY_NOW} /></div></div>
        </div>
      </section>

      <section className="inv-sec" id="moments" aria-labelledby="moments-title">
        <div className="wrap">
          <h2 id="moments-title" className="center-head">Four places companies feel it.</h2>
          <div className="inv-grid">
            {MOMENTS.map(([where, today, next]) => (
              <article key={where} className="inv-card">
                <h3>{where}</h3>
                <p><span className="chip">Today</span>{today}</p>
                <p><span className="chip chip-moss">With AgOS</span>{next}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="compare inv-vs" id="why-we-win" aria-labelledby="win-title">
        <div className="wrap">
          <div className="center-head">
            <h2 id="win-title">Why we win.</h2>
            <p className="lede">
              Most companies buy people, work and knowledge tools from three vendors and get AI
              bolted on as a chatbot. The layers never touch, so nothing accumulates. AgOS is one
              system: an intelligence layer that understands, suggests, acts and learns across all
              three, and a memory of the organization that makes the next action better.
            </p>
          </div>
          <div className="compare-wrap">
            <table>
              <caption className="sr-only">AgOS compared with ClickUp, Jira and Confluence</caption>
              <thead>
                <tr>
                  <th scope="col"><span className="sr-only">Question</span></th>
                  <th scope="col">AgOS</th>
                  <th scope="col">ClickUp, Jira, Confluence and the like</th>
                </tr>
              </thead>
              <tbody>
                {VERSUS.map(([q, us, them]) => (
                  <tr key={q}><th scope="row">{q}</th><td>{us}</td><td>{them}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="inv-note">
            AgOS owns the work layer on purpose. A suggestion that never becomes work is a
            notification, and work that never reports back is a to-do list. If the work happens
            where AgOS cannot see it, the loop breaks at the most important step.
          </p>
        </div>
      </section>

      <section className="inv-sec" id="moat" aria-labelledby="moat-title">
        <div className="wrap keys-grid">
          <h2 id="moat-title">It gets harder to leave every month.</h2>
          <div className="inv-stack">
            <p className="lede">
              A customer’s first month gives AgOS their documents. Their sixth month gives it how
              they actually decide: which suggestions they took, which they refused and what happened
              afterwards. None of that transfers, so a competitor arriving in year two starts at zero.
            </p>
            <p className="lede">
              The moat is not the product. It is the accumulated memory of each company, and it only
              gets deeper. An incumbent can add the features. It cannot add two years of a
              customer’s approvals.
            </p>
          </div>
        </div>
      </section>

      <section className="inv-sec" id="business" aria-labelledby="business-title">
        <div className="wrap">
          <h2 id="business-title" className="center-head">Where we start, and how we make money.</h2>
          <div className="inv-grid">
            <div className="inv-win">
              <p className="inv-head"><b>Market</b></p>
              <div className="inv-body"><Rows items={MARKET} /></div>
            </div>
            <div className="inv-win">
              <p className="inv-head"><b>Pricing</b><span className="chip">Usage and credits</span></p>
              <div className="inv-body"><Rows items={PRICING} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="inv-sec" id="traction" aria-labelledby="traction-title">
        <div className="wrap">
          <h2 id="traction-title" className="center-head">Where we are.</h2>
          <div className="inv-grid">
            <div className="inv-win">
              <p className="inv-head"><b>Today</b></p>
              <div className="inv-body"><Rows items={TODAY} /></div>
            </div>
            <div className="inv-win">
              <p className="inv-head"><b>What we still have to prove</b></p>
              <div className="inv-body"><Rows items={TO_PROVE} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="inv-sec" id="roadmap" aria-labelledby="roadmap-title">
        <div className="wrap">
          <h2 id="roadmap-title" className="center-head">Where this goes.</h2>
          <ol className="flow">
            {ROADMAP.map(([when, what], i) => (
              <li key={when} className="flow-stage">
                {i > 0 && <span className="flow-arrow" aria-hidden><IconArrow size={14} /></span>}
                <h3><span className="flow-n" aria-hidden>{i + 1}</span> {when}</h3>
                <p>{what}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="inv-sec" id="ask" aria-labelledby="ask-title">
        <div className="wrap keys-grid">
          <div className="inv-stack">
            <h2 id="ask-title">The ask.</h2>
            <p className="inv-raise">$200,000</p>
            <p className="lede">
              To turn our MVP into a production-ready product and get our first group of paying
              customers.
            </p>
            <div>
              <p><b>By June 2027, this gets us:</b></p>
              <ul className="inv-checks">
                {MILESTONES.map((m) => <li key={m}><IconCheck size={15} />{m}</li>)}
              </ul>
            </div>
            <p className="lede">That is the traction and data we need for the next round.</p>
          </div>
          <div className="meter">
            <p className="meter-head"><b>Use of funds</b></p>
            <ul className="meter-body">
              {FUNDS.map(([use, pct]) => (
                <li key={use} className="meter-row">
                  <p><b>{use}</b><span>{pct}%</span></p>
                  <span className="meter-track" aria-hidden><span className="meter-fill" style={{ width: `${pct}%` }} /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Closing
        title="A company that gets better at being itself every month."
        lede="Companies fall behind when what one person knows never reaches the person who needs it. AgOS closes that gap and keeps it closed."
        actions={<a className="btn btn-ink" href={PITCH_DECK}>Read the full pitch deck <IconArrow size={16} className="arrow" /></a>}
      />
    </main>
  );
}
