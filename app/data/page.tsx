import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { LegalPage, type LegalPart, type LegalSection } from '@/components/Legal';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/data',
  title: 'Data we collect and how we use it',
  description:
    'Everything AgOS collects, where it comes from and what it is used for, taken from how the product works.',
});

// Taken from ai-brain, same sources as app/privacy/page.tsx, plus: onboarding/screens.ts and
// seedIndex.ts (file types), memory/kb/queryLog.ts (question log, "safe to show" pass, gap
// clusters), kb_chat_memory and team_memory migrations, services/normalizer (people, events,
// commitments), packages/agos-shell/src/FeedbackFab.tsx (report context), agents/workers/rag.ts
// (sections plus tool records, "say so" when the sources are silent), llm_usage_hourly and
// credit_metering (allowances), email_routes (what AgOS emails).
const COLLECT: (LegalPart & { items: [string, ReactNode][] })[] = [
  {
    id: 'account',
    title: 'Your account',
    items: [
      ['Email address, name and profile picture.',
        'From sign-up, or from the service you sign in with, such as Google or GitHub. Used to sign you in, show who did what and send you account email.'],
      ['Password.',
        'If you sign up with one. Stored only as a scrypt hash and used to check your sign-in.'],
      ['Sign-in records.',
        'The sign-in methods your account uses, when you last signed in and were last active, and each successful or failed sign-in. Used to lock sign-in after repeated failures and to show activity.'],
    ],
  },
  {
    id: 'organization',
    title: 'Your organization',
    items: [
      ['Workspace name, web address and email domain.',
        'Set at sign-up. The domain lets colleagues with the same business email ask to join; a workspace created from a personal address is invitation only.'],
      ['Members, roles, invitations and join requests.',
        'Managed by owners and admins, and used to decide who can see and change what. An invitation stores the invited email address and role.'],
    ],
  },
  {
    id: 'content',
    title: 'What your team adds',
    items: [
      ['Documents.',
        'PDF, DOCX, PPTX, Markdown and text files. Split into sections and indexed, so answers can cite the exact passage.'],
      ['Knowledge pages.',
        'Pages your team writes, with their earlier versions. Used for answers and shown to the people allowed to read them.'],
      ['Work.',
        'Issues, boards, comments and attachments in Workspaces. Used to track delivery and to suggest what to do about delays.'],
      ['People records.',
        'Names, titles, managers, teams, start and end dates and onboarding steps in People. Used for the directory, the org chart and onboarding checklists.'],
    ],
  },
  {
    id: 'questions',
    title: 'What you ask',
    items: [
      ['Questions and answers.',
        'Your chats with AgOS, with the sources each answer cites. Used to answer follow-ups and to keep your chat history.'],
      ['Question log.',
        'Each question asked in the workspace and whether it got a cited answer. Used to show new teammates what the team has been asking, limited to questions a check has marked safe to show, and to point out topics your documents do not cover yet.'],
      ['Personal memory.',
        'A short summary AgOS keeps for each person, rewritten from their chats. Used only in that person’s answers.'],
      ['Team memory.',
        'A project’s glossary, conventions and recurring decisions, distilled from its comments. Used in suggestions for that project. It holds team-level facts only, nothing about individual people.'],
    ],
  },
  {
    id: 'tools',
    title: 'Connected tools',
    items: [
      ['Messages, emails, calendar events, files and repository activity.',
        'From the tools your workspace connects: Slack, Gmail, Google Calendar, Google Drive, GitHub and MCP servers. AgOS records the people, events and open commitments in this activity, so it can answer questions such as what is due and who promised it, and forecast.'],
      ['Connection credentials.',
        'Created when someone connects a tool. Encrypted, and used only to reach that tool for your workspace.'],
    ],
  },
  {
    id: 'feedback',
    title: 'Feedback',
    items: [
      ['Ratings.',
        <>A thumbs up or down on an answer or a suggestion, with an optional reason and comment. Used to train and improve AgOS, as described in <a href="#training">Training and improving AgOS</a>.</>],
      ['Feedback reports.',
        'A bug, feature request or design issue sent with the feedback button: a title, a description, an optional screenshot, and the page address, app, window size, screen density, browser, language, time zone and time. Used to reproduce and fix what you report. Screenshots are never added to what AgOS searches.'],
    ],
  },
  {
    id: 'usage',
    title: 'Usage and billing',
    items: [
      ['Model usage.',
        'Tokens and requests on the bundled model, per workspace and per person, by hour and by month. Used for the 5-hour, 7-day and monthly allowances and to show each person their share. A workspace’s own model key is never metered.'],
      ['Plan and payments.',
        'Your plan, subscription status and trial end date, and the references a payment processor gives your account and subscription. Payment details go to the payment processor; AgOS does not store card numbers.'],
    ],
  },
  {
    id: 'activity',
    title: 'Activity records',
    items: [
      ['Changes and actions.',
        'Who changed what and when, what agents did and what waited for approval. Used for the audit trail, the Activity page and Approvals.'],
      ['Decision records.',
        'Only if the decision layer is switched on: which choice was made and how confident it was. The task data it judged is not stored.'],
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies',
    items: [
      ['Sign-in cookies.',
        <>The AgOS apps use cookies only to sign you in. The details are in <Link href="/privacy#cookies">Cookies and this website</Link>.</>],
      ['Website analytics.',
        <>Only if you accept: Google Analytics cookies on this website, used to count visits and see which pages and links people use. See <Link href="/privacy#cookies">Cookies and this website</Link>.</>],
    ],
  },
];

const USE: (LegalPart & { body: ReactNode })[] = [
  {
    id: 'answering',
    title: 'Answering with citations',
    body: (
      <p>
        When you add a document, AgOS splits it into sections and sends their text to an embedding
        provider, which returns a numeric fingerprint of each section&rsquo;s meaning. When you ask
        a question, AgOS fingerprints it the same way, finds the closest sections, adds related
        records from your connected tools, and sends them with your question to the language model.
        The answer lists the sections it used. If they do not hold the answer, AgOS says so instead
        of guessing.
      </p>
    ),
  },
  {
    id: 'agents',
    title: 'Agents and approvals',
    body: (
      <p>
        Agents use the same data to research, draft, schedule, track tasks and forecast. An agent
        that researches the web sends its search queries to a web search provider. Sending an email,
        booking something or calling an outside tool can wait in Approvals, where a person sees what
        AgOS will do and why, then approves or declines.
      </p>
    ),
  },
  {
    id: 'memory',
    title: 'Memory',
    body: (
      <p>
        AgOS keeps the recent turns of a conversation so follow-ups work, a short private memory for
        each person, and a shared memory for each project. A project&rsquo;s memory is shown on its
        summary page, where the team can read and correct it.
      </p>
    ),
  },
  {
    id: 'training',
    title: 'Training and improving AgOS',
    body: (
      <p>
        We use the data collected through AgOS to train and improve AgOS. Today that happens without
        retraining a model: a rating is kept as a lesson, and when AgOS meets a similar situation it
        looks those lessons up and shows the model what worked and what did not. Lessons from your
        chats stay in your chats, and lessons from a project stay in that project. Conversations are
        stored with their ratings so they can also be used as training data. The policy is
        in <Link href="/privacy#training">Training and improving AgOS</Link>.
      </p>
    ),
  },
  {
    id: 'vendors',
    title: 'Anonymized data and third-party vendors',
    body: (
      <p>
        We may sell data collected through AgOS to third-party vendors. Before any data is sold, we
        anonymize it by removing names, email addresses and other details that identify a person or
        an organization. The policy is
        in <Link href="/privacy#vendors">Anonymized data and third-party vendors</Link>.
      </p>
    ),
  },
  {
    id: 'billing',
    title: 'Usage, limits and billing',
    body: (
      <p>
        Usage records set the bundled model&rsquo;s allowances and show each person their share.
        When an allowance runs out, requests on the bundled model pause until its window resets. A
        payment processor handles checkout and payment.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        Sign-in records lock sign-in after repeated failed passwords, and activity records show who
        did what and when. The safeguards are listed in <Link href="/privacy#security">How we
        protect it</Link>.
      </p>
    ),
  },
  {
    id: 'email',
    title: 'Email',
    body: (
      <p>
        AgOS sends sign-up verification, password resets and invitations. When your workspace sets
        it up, it also sends onboarding reminders and emails that agents prepare.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'Who else receives data',
    body: (
      <p>
        The services AgOS runs on, and what each one receives, are listed
        in <Link href="/privacy#sharing">Who else receives data</Link>.
      </p>
    ),
  },
];

const SECTIONS: LegalSection[] = [
  {
    id: 'collect',
    title: 'Data we collect',
    parts: COLLECT,
    body: COLLECT.map((g) => (
      <Fragment key={g.id}>
        <h3 id={g.id}>{g.title}</h3>
        <ul>
          {g.items.map(([k, v]) => <li key={k}><b>{k}</b> {v}</li>)}
        </ul>
      </Fragment>
    )),
  },
  {
    id: 'use',
    title: 'How we use data',
    parts: USE,
    body: USE.map((u) => (
      <Fragment key={u.id}>
        <h3 id={u.id}>{u.title}</h3>
        {u.body}
      </Fragment>
    )),
  },
];

export default function DataUse() {
  return (
    <LegalPage
      title="Data we collect and how we use it"
      lede="Everything AgOS collects, where it comes from and what it is used for, taken from how the product works. This page is part of our privacy policy."
      updated={{ iso: '2026-11-10', label: 'November 10, 2026' }}
      sections={SECTIONS}
    />
  );
}
