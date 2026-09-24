import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage, type LegalSection } from '@/components/Legal';
import { CONTACT } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Privacy policy',
  description:
    'What AgOS collects, how it uses it, who else receives it and how long it is kept. It applies to everyone who uses AgOS.',
};

// Every statement is taken from ai-brain, not from general practice:
// supabase/migrations (users, auth_identities, query_log, kb_chat_feedback, learning_signals,
// product_feedback, tenant_llm_usage_hourly, tenant_billing, kb_page_public, kb_space_public),
// src/auth/password.ts (scrypt; 10 misses lock sign-in for 15 minutes), src/platform/signup.ts
// and invites.ts (1-day verification, 7-day invitations), src/lib/encryption.ts (AES-256-GCM),
// src/lib/logger.ts (log masking), src/lib/storage.ts (private bucket, signed links),
// src/platform/tenants.ts (a deleted workspace is marked, not purged), src/api/routes/org.ts
// (removing a member keeps the account), src/config/defaults.ts (bundled model, Hugging Face
// embeddings), src/research (web search), src/providers/decision/jev.ts (TypeSafe, off by
// default, size-capped), src/index.ts, src/auth/login.ts and
// packages/agos-server/src/session.ts (cookies), loginPage.ts and publicDoc.ts (Google Fonts).
// Payments: ai-brain has Stripe code, but Stripe is not in use; Dodo Payments is planned
// (owner, 2026-09-24). Name the processor here once it is live, not before.
// Selling anonymized data and training on collected data are the owner's policy (2026-09-24).
// ai-brain has no anonymization step yet: one has to exist before any data is sold.
const SECTIONS: LegalSection[] = [
  {
    id: 'short',
    title: 'In short',
    body: (
      <ul>
        <li>Anyone who uses AgOS is subject to this policy.</li>
        <li>
          AgOS collects your account details, what your team adds and asks, activity from the tools
          you connect, feedback and usage.
        </li>
        <li>We use that data to run AgOS and to train and improve it.</li>
        <li>We may sell data to third-party vendors. Before any data is sold, we anonymize it.</li>
        <li>
          Parts of your data go to the services AgOS runs on, such as AI model providers, to do the
          work you ask for.
        </li>
      </ul>
    ),
  },
  {
    id: 'scope',
    title: 'Who this policy applies to',
    body: (
      <>
        <p>
          This policy covers AgOS (&ldquo;we&rdquo;, &ldquo;us&rdquo;): the AgOS apps, AgOS Cloud,
          Isolated Cloud and this website.
        </p>
        <p>
          Anyone who uses AgOS is subject to this policy. That includes people who create an account,
          people invited into a workspace and people who visit this website. By using AgOS, you
          agree to how it collects and uses data as this policy describes.
        </p>
      </>
    ),
  },
  {
    id: 'collect',
    title: 'What we collect',
    body: (
      <>
        <ul>
          <li>
            <b>Account details:</b> your email address, name and profile picture, how you sign in,
            and when you last signed in and were active. A password is stored only as a hash.
          </li>
          <li>
            <b>Your organization:</b> the workspace name, its email domain, members and their roles,
            invitations and requests to join.
          </li>
          <li>
            <b>What your team adds:</b> documents, Knowledge pages and their history, issues,
            comments, attachments and people records.
          </li>
          <li><b>What you ask:</b> your questions, the answers and the sources they cite.</li>
          <li>
            <b>Connected tools:</b> messages, emails, calendar events, files and repository activity
            from the tools your workspace connects.
          </li>
          <li>
            <b>Feedback:</b> ratings on answers and suggestions, and reports sent with the feedback
            button, which can include a screenshot.
          </li>
          <li>
            <b>Usage and billing:</b> how many model tokens your workspace and each person use, and
            your plan and subscription status.
          </li>
          <li><b>Activity records:</b> sign-ins, changes and agent actions, with who did them and when.</li>
        </ul>
        <p>
          Each item, where it comes from and what it is used for is listed
          on <Link href="/data#collect">Data we collect</Link>.
        </p>
      </>
    ),
  },
  {
    id: 'use',
    title: 'How we use it',
    body: (
      <>
        <ul>
          <li>
            To run AgOS: index your documents, answer questions with citations, and run agents,
            which can hold emails, bookings and outside tool calls until a person approves them.
          </li>
          <li>
            To keep context: your recent conversation, a private memory for each person and a shared
            memory for each project.
          </li>
          <li>To train and improve AgOS, as described <a href="#training">below</a>.</li>
          <li>To meter usage against your plan&rsquo;s allowances and to bill for it.</li>
          <li>To keep accounts safe: lock sign-in after repeated failed passwords and record who did what.</li>
          <li>To send service email: sign-up verification, password resets, invitations and workspace notices.</li>
        </ul>
        <p>How each of these works is on <Link href="/data#use">How we use data</Link>.</p>
      </>
    ),
  },
  {
    id: 'training',
    title: 'Training and improving AgOS',
    body: (
      <>
        <p>We use the data collected through AgOS to train and improve AgOS.</p>
        <p>
          Today, AgOS improves without retraining a model. When you rate an answer or a suggestion,
          the rating is kept as a lesson, together with the situation it judged. When AgOS meets a
          similar situation later, it looks those lessons up and shows the model what worked and what
          did not. Lessons from your chats are used only in your chats, and lessons from a project
          only in that project.
        </p>
        <p>
          Ratings are also stored with the conversations they belong to, so that conversations and
          their ratings can be used as training data. Reports sent with the feedback button are read
          to find and fix problems.
        </p>
      </>
    ),
  },
  {
    id: 'vendors',
    title: 'Anonymized data and third-party vendors',
    body: (
      <>
        <p>We may sell data collected through AgOS to third-party vendors.</p>
        <p>
          Before any data is sold, we anonymize it. We remove names, email addresses and other
          details that identify a person or an organization, so that the data a vendor receives no
          longer identifies you, your colleagues or your organization.
        </p>
      </>
    ),
  },
  {
    id: 'sharing',
    title: 'Who else receives data',
    body: (
      <>
        <p>AgOS runs on services from other companies. Each receives data to do its part of the work:</p>
        <ul>
          <li>
            <b>AI model providers.</b> To answer a question or run an agent, AgOS sends the request,
            with the relevant sections of your documents and records, to a language model. On Cloud
            that is the bundled model, or the Anthropic, OpenAI or Ollama account your workspace adds
            its own key for. Isolated Cloud uses your own keys.
          </li>
          <li>
            <b>An embedding provider,</b> Hugging Face by default, receives the text of your
            documents and questions to make them searchable.
          </li>
          <li><b>Supabase</b> hosts the database and the private file storage that hold your workspace data.</li>
          <li>
            <b>A payment processor</b> handles payment when you pay for a plan, and receives your
            payment details. AgOS does not store card numbers.
          </li>
          <li><b>An email delivery service</b> sends sign-up, password reset, invitation and workspace email.</li>
          <li><b>Web search providers</b> receive the search queries of agents that research the web.</li>
          <li>
            <b>The tools your workspace connects,</b> such as Slack, Gmail, Google Calendar, Google
            Drive, GitHub and MCP servers, receive what agents send to them, such as an email a
            person approved.
          </li>
          <li>
            <b>TypeSafe,</b> only if the decision layer is switched on, receives a small,
            size-limited part of the task at hand to help choose an agent or a tool. It is off
            unless it is configured.
          </li>
        </ul>
        <p>
          A Knowledge page or space that someone with edit rights publishes can be read by anyone
          with its link. Pages are private until published, drafts stay private, and a page
          restricted to named people is never public.
        </p>
        <p>
          Anonymized data may be sold to third-party vendors, as described
          in <a href="#vendors">Anonymized data and third-party vendors</a>.
        </p>
      </>
    ),
  },
  {
    id: 'security',
    title: 'How we protect it',
    body: (
      <ul>
        <li>
          Every row of workspace data carries its organization&rsquo;s ID, and row-level security in
          the database enforces it on every query. On Isolated Cloud, your data also sits in a
          database of its own.
        </li>
        <li>Stored connection credentials and keys are encrypted with AES-256-GCM.</li>
        <li>Passwords are stored as scrypt hashes, and sign-in locks for 15 minutes after 10 failed attempts.</li>
        <li>
          Password reset, email verification and invitation links are stored only as hashes.
          Verification links expire after a day and invitations after a week.
        </li>
        <li>Uploaded files are kept in private storage and open through signed links that expire.</li>
        <li>
          Application logs mask email addresses and some phone and ID number formats, and hide
          fields that hold secrets.
        </li>
        <li>Emails, bookings and outside tool calls that agents prepare can wait in Approvals for a person.</li>
      </ul>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep it',
    body: (
      <ul>
        <li>Workspace data is kept for as long as the workspace exists.</li>
        <li>
          Ending a trial or canceling a plan deletes nothing. The workspace stays readable and can
          be exported, and new changes pause until a plan is active.
        </li>
        <li>
          Deleting a workspace closes it to everyone at once. Its data is kept, so the deletion can
          be undone; removing the data for good is a separate step. To ask for it,
          email <a href={CONTACT}>support@agos.digital</a>.
        </li>
        <li>
          Removing a person from a workspace ends their access to it. Their AgOS account stays,
          because one account can belong to several workspaces.
        </li>
        <li>
          Some records outlast what they describe. Usage records, ratings kept as lessons, feedback
          reports and activity records stay after the message, account or item they refer to is
          deleted.
        </li>
        <li>Hourly usage records are deleted after 8 days.</li>
      </ul>
    ),
  },
  {
    id: 'choices',
    title: 'Your choices',
    body: (
      <ul>
        <li>
          <b>Use your own model key.</b> A workspace can send its model requests to its own
          Anthropic, OpenAI or Ollama account instead of the bundled model.
        </li>
        <li><b>Choose what to connect.</b> Your workspace decides which tools AgOS connects to.</li>
        <li><b>Keep actions for a person.</b> Emails, bookings and outside tool calls can wait in Approvals.</li>
        <li>
          <b>Keep pages private.</b> Nothing in Knowledge is public until someone with edit rights
          publishes it, and publishing can be turned off at any time.
        </li>
        <li><b>Export pages.</b> Knowledge pages you can read can be exported.</li>
        <li>
          <b>Ask us.</b> To see, correct or delete data about you, or to delete your account,
          email <a href={CONTACT}>support@agos.digital</a>.
        </li>
      </ul>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies and this website',
    body: (
      <>
        <p>
          This website sets no cookies, runs no analytics or advertising scripts, and serves its own
          fonts. The question box on the home page is a demo: it answers from sample data in your
          browser and sends nothing.
        </p>
        <p>The AgOS apps use cookies only to sign you in:</p>
        <ul>
          <li><b>Session:</b> keeps you signed in, for up to 7 days.</li>
          <li><b>App session:</b> keeps you signed in to the AgOS web apps, for up to 8 hours.</li>
          <li>
            <b>Last sign-in option:</b> remembers which way you signed in, so the sign-in page can
            mark it, for 180 days.
          </li>
        </ul>
        <p>
          The apps also remember, in your browser, whether you collapsed the side navigation. The
          AgOS sign-in page and published Knowledge pages load fonts from Google Fonts, so your
          browser requests them from Google.
        </p>
        <p>
          The services that host this website and AgOS may record standard request details, such as
          IP address and browser type, to deliver pages.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: <p>When this policy changes, we update this page and the date at the top of it.</p>,
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        Questions about this policy or about your data go
        to <a href={CONTACT}>support@agos.digital</a>.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      lede="What AgOS collects, what it does with it, who else receives it and how long it is kept."
      updated={{ iso: '2026-09-24', label: 'September 24, 2026' }}
      sections={SECTIONS}
    />
  );
}
