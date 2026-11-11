import type { Topic } from './types';

// Every statement is one the privacy policy already makes (app/privacy/page.tsx, "How we
// protect it"), with the same ai-brain sources, plus memory/kb/permissions.ts and
// memory/kb/approvals.ts for access. Data use is not restated here: it links to the policy.

export const SECURITY: Topic = {
  slug: 'security',
  name: 'Security',
  title: 'Your data, kept apart and accounted for.',
  metaTitle: 'Security: data isolation, access control and audit trail',
  description:
      'How AgOS keeps each organization’s data apart, answers only from what each person may read, encrypts credentials, records every action and holds risky ones.',
  lede:
    'Every row is scoped to your organization, every answer to the person asking, and every action an agent takes is recorded. Here is how.',
  card: 'Isolation, access control, encryption, approvals and the audit trail.',
  sections: [
    {
      title: 'Your organization’s data stays yours',
      body: [
        'Every row of workspace data carries your organization’s ID, and row-level security in the database enforces it on every query. A query cannot reach another organization’s rows by mistake, because the database refuses it.',
        'On [Isolated Cloud](/docs/isolated-cloud), your data also sits in a database of its own, on hostnames of your own. It runs the same code and the same migrations as Cloud.',
      ],
    },
    {
      title: 'Answers only from what you may read',
      body: [
        'Knowledge is private by default. A space is visible to its members, and a page can be restricted to named people. AgOS scopes every read to the person asking, so an answer never draws on a page the asker could not open.',
        'Approvals are private too: people see the requests they made, and only someone allowed to decide is offered Approve.',
      ],
    },
    {
      title: 'A person approves what leaves',
      body: [
        'Emails, bookings and outside tool calls that agents prepare can wait in [Approvals](/product/agents) for a person. Access changes AgOS makes, such as giving a new hire a space, are staged the same way.',
      ],
    },
    {
      title: 'Everything is recorded',
      body: [
        'Every meaningful change and action is recorded with who did it and when. Offboarding marks a person as departed instead of deleting them, so an access review can still see what they had.',
      ],
    },
    {
      title: 'Credentials and sign-in',
      body: [
        [
          'Stored connection credentials and keys are encrypted with AES-256-GCM.',
          'Passwords are stored as scrypt hashes, and sign-in locks for 15 minutes after 10 failed attempts.',
          'Password reset, email verification and invitation links are stored only as hashes. Verification links expire after a day and invitations after a week.',
          'You can sign in with Google or GitHub instead of a password.',
        ],
      ],
    },
    {
      title: 'Files and logs',
      body: [
        [
          'Uploaded files are kept in private storage and open through signed links that expire.',
          'Application logs mask email addresses and some phone and ID number formats, and hide fields that hold secrets.',
        ],
      ],
    },
    {
      title: 'Models and your own keys',
      body: [
        'To answer and draft, parts of your data go to the AI model provider AgOS runs on: Anthropic, OpenAI or a model you host with Ollama. On Isolated Cloud, AgOS uses your own model keys, so that relationship is yours.',
        'What AgOS collects, who receives it and how it is used, including for training and improving AgOS, is set out in the [privacy policy](/privacy) and on [the data we collect](/data). Questions go to [support@agos.digital](mailto:support@agos.digital).',
      ],
    },
  ],
  related: ['/docs/isolated-cloud', '/privacy', '/product/knowledge', '/product/agents'],
};
