import type { Article } from './types';

// Help articles. Steps follow the product as it runs: onboarding/screens.ts (sign-up order,
// join rules, seed upload caps, no skip), seedIndex.ts (file types), memory/kb/* (spaces,
// versions, restrictions), memory/kb/approvals.ts (who sees what), integrations/* and
// github/sync.ts (connections), platform/invites.ts and signup.ts (7-day invitations,
// 1-day verification), api/routes/org.ts (removing a member keeps the account),
// entitlements.ts (soft seats), lib/plans.ts and the pricing page (plans, allowances, trial,
// what lapses keep), DEPLOYMENT_MODES.md (Isolated Cloud). Where the product's exact screen
// labels are not on hand, the steps name the place, not the button.

export const DOCS: Article[] = [
  {
    slug: 'getting-started',
    title: 'Get started with AgOS',
    metaTitle: 'Get started with AgOS',
    description:
      'Create your AgOS account, set up your organization, add your first documents and ask your first question. It takes a work email and three to five documents.',
    lede: 'You need a work email and three to five documents your team already uses. The rest takes a few minutes.',
    card: 'Create your account, add your first documents and ask.',
    sections: [
      {
        title: 'Create your account',
        body: [
          '[Create your account](https://agos.digital/signup/start) with your work email, or sign in with Google or GitHub. If you sign up with a password, AgOS sends a verification link that expires after a day.',
        ],
      },
      {
        title: 'Join or create your organization',
        body: [
          'If someone at your company already set up AgOS with the same business email domain, you can ask to join their organization, and its owner decides. Otherwise you create a new one and become its owner.',
          'If you sign up with a personal address, such as Gmail, your organization is invitation only: teammates join when you invite them.',
        ],
      },
      {
        title: 'Add your first documents',
        body: [
          'AgOS has nothing to answer from until something is indexed, so this step has no skip. Add documents your team relies on: contracts, scopes of work, onboarding guides, policies, decks.',
          [
            'File types: PDF, DOCX, PPTX, Markdown and plain text.',
            'Up to 20 files during sign-up, each up to 25 MB.',
            'Three to five documents is enough to start.',
            'One file that fails does not stop the rest.',
          ],
          'See [adding documents](/docs/adding-documents) for what makes a good source.',
        ],
      },
      {
        title: 'Ask your first question',
        body: [
          'When indexing finishes, ask something you already know the answer to, so you can check it. The answer lists the documents and sections it came from. Read [asking questions](/docs/asking-questions) for how to get the most out of Ask.',
        ],
      },
      {
        title: 'Invite your team',
        body: [
          'Invite colleagues by email, or let people on your business domain ask to join. See [inviting your team](/docs/inviting-your-team).',
        ],
      },
    ],
    related: ['/docs/adding-documents', '/docs/asking-questions', '/docs/inviting-your-team', '/docs/plans-and-billing'],
  },
  {
    slug: 'adding-documents',
    title: 'Add documents to Knowledge',
    metaTitle: 'Add documents to AgOS Knowledge',
    description:
      'Which files AgOS can read, how spaces and pages work, syncing from GitHub or saving from MCP clients, and what makes a document a good source.',
    lede: 'Everything AgOS answers from lives in Knowledge. Here is how to fill it, and what makes a document easy to answer from.',
    card: 'File types, spaces, GitHub sync and what makes a good source.',
    sections: [
      {
        title: 'What AgOS can read',
        body: [
          'Upload PDF, DOCX, PPTX, Markdown and plain text files, or write pages directly in Knowledge. Long documents are split into sections when they are indexed, so answers can cite the exact passage.',
        ],
      },
      {
        title: 'Spaces and pages',
        body: [
          'Knowledge is organized in spaces. Each space has members who can view, edit or administer it, and only members can see what is inside. A page can be restricted to named people, and the restriction carries down to the pages beneath it.',
          'Pages keep their earlier versions. If a change turns out wrong, go back to the version before it.',
        ],
      },
      {
        title: 'Other ways in',
        body: [
          [
            '**[GitHub](/integrations/github):** connect a repository and its Markdown docs become pages, while issues, pull requests and wiki pages become sources AgOS can cite.',
            '**[MCP clients](/integrations/mcp):** Claude, ChatGPT and other MCP clients can save Markdown straight into Knowledge.',
            '**From Notion or a wiki:** export pages as Markdown and upload them.',
          ],
        ],
      },
      {
        title: 'What makes a good source',
        body: [
          'AgOS answers from what a document says, so documents that say things plainly give better answers:',
          [
            'One topic per document or page, with headings for each part.',
            'Facts written out: "refunds within 30 days of the start date", not "see the usual terms".',
            'A date or version on anything that changes, such as price lists and policies.',
            'The current version only. When a policy changes, update the page rather than adding a second one.',
          ],
          'When AgOS cannot answer a question, the question is recorded. The ones that keep coming up are grouped into suggestions for the page your team should write next.',
        ],
      },
    ],
    related: ['/product/knowledge', '/docs/asking-questions', '/integrations/github', '/integrations/mcp'],
  },
  {
    slug: 'asking-questions',
    title: 'Ask questions and read the citations',
    metaTitle: 'How to ask AgOS questions and check citations',
    description:
      'How to ask AgOS questions, read the citations on every answer, follow up, and what it means when AgOS says the documents do not have the answer.',
    lede: 'Ask in plain words, check the sources, and follow up. Here is what to expect from an answer.',
    card: 'Asking well, reading citations and what "I do not know" means.',
    sections: [
      {
        title: 'Ask the way you would ask a colleague',
        body: [
          'There is no special syntax. Name the thing you mean, such as the client, the policy or the issue key, and AgOS searches Knowledge and your connected tools for the sections that matter.',
          [
            'Good: "What did we promise Northbay about the Q4 launch?"',
            'Good: "What is the refund window for annual plans?"',
            'Harder: "What is going on?" (going on with what?)',
          ],
        ],
      },
      {
        title: 'Read the citations',
        body: [
          'Each claim in an answer is numbered, and the numbers match the sources listed with it: the document or issue, and the section. Open a source to check the passage. If an answer matters, check it; that is what the citations are for.',
        ],
      },
      {
        title: 'When AgOS says it does not know',
        body: [
          'If nothing AgOS can cite answers the question, it says so instead of guessing. That usually means one of three things:',
          [
            'The document is not in Knowledge yet. [Add it](/docs/adding-documents).',
            'The document is in a space or page you cannot read.',
            'Nobody has written it down. The question is recorded, and repeated misses become suggestions for pages to write.',
          ],
        ],
      },
      {
        title: 'Follow up, rate, and act',
        body: [
          'Ask a follow-up in the same thread and AgOS keeps the context. Rate an answer to help your team see which pages answer questions well. To act on an answer, turn it into a task, or ask an agent to draft the email; see [approvals](/docs/approvals).',
          'You can also ask from [Slack](/integrations/slack), in a thread.',
        ],
      },
    ],
    related: ['/product/ask', '/docs/approvals', '/integrations/slack', '/blog/why-agos-says-it-does-not-know'],
  },
  {
    slug: 'approvals',
    title: 'Review and approve agent actions',
    metaTitle: 'How Approvals works in AgOS',
    description:
      'What waits in AgOS Approvals, what an approval card shows, who can see and decide each request, and how decisions are recorded.',
    lede: 'Agents prepare the work. Anything that leaves the building can wait here for a person.',
    card: 'What waits for a yes, who decides, and what gets recorded.',
    sections: [
      {
        title: 'What waits in Approvals',
        body: [
          [
            'Sending an email.',
            'Creating a calendar event or booking something.',
            'Running an outside tool, such as opening a GitHub issue or calling an MCP tool.',
            'Access changes AgOS makes, such as giving a new hire a space.',
          ],
        ],
      },
      {
        title: 'What a card shows',
        body: [
          'Each request shows what AgOS will do, exactly: for an email, the recipient, the subject and the body. It also shows why, with the sources the reason came from. Approve it and it runs; decline it and nothing happens.',
        ],
      },
      {
        title: 'Who sees what',
        body: [
          'Approvals are not public inside the company. You see the requests you made. Only people allowed to decide a request are offered Approve, and admins can see the whole queue.',
        ],
      },
      {
        title: 'What gets recorded',
        body: [
          'Every decision is recorded with who made it and when, alongside every other meaningful change in AgOS. See [security](/security) for the audit trail.',
        ],
      },
    ],
    related: ['/product/agents', '/blog/why-our-agents-wait-for-a-yes', '/integrations/gmail', '/security'],
  },
  {
    slug: 'connecting-tools',
    title: 'Connect your tools',
    metaTitle: 'Connect your tools to AgOS',
    description:
      'How to connect Slack, Gmail, Google Calendar, Google Drive, GitHub and MCP servers to AgOS, what each connection brings in, and what agents can do with it.',
    lede: 'Connections bring activity in and let agents act out. Adding one is a setting, not a code change.',
    card: 'Google, GitHub, Slack and MCP: what each connection does.',
    sections: [
      {
        title: 'Google: Gmail, Calendar and Drive',
        body: [
          'Each person connects their own Google account, so AgOS works in your inbox, on your calendar and with the Drive files you can see.',
          [
            '**[Gmail](/integrations/gmail):** read recent messages, draft and send.',
            '**[Google Calendar](/integrations/google-calendar):** check upcoming events and create new ones with attendees.',
            '**[Google Drive](/integrations/google-drive):** find recent files and read them.',
          ],
          'Sending and booking can wait in [Approvals](/docs/approvals).',
        ],
      },
      {
        title: 'GitHub',
        body: [
          'Connect your GitHub account from Settings, then choose repositories and, for each, whether to sync docs, issues, pull requests and the wiki. Changes on GitHub reach AgOS as they happen. See [GitHub](/integrations/github).',
        ],
      },
      {
        title: 'Slack',
        body: [
          'Add the AgOS app to your Slack workspace, then message it. It answers in the thread, and each thread is its own conversation. Link your Slack account to your AgOS account so answers are scoped to what you can read. See [Slack](/integrations/slack).',
        ],
      },
      {
        title: 'MCP servers and clients',
        body: [
          'Add an MCP server and its tools become available to agents: remote servers on Cloud, and local ones too on Isolated Cloud. MCP tools start on the Team plan. MCP clients such as Claude and ChatGPT can also connect to AgOS, after you sign in and allow them. See [MCP](/integrations/mcp).',
        ],
      },
    ],
    related: ['/integrations', '/integrations/mcp', '/docs/approvals', '/security'],
  },
  {
    slug: 'inviting-your-team',
    title: 'Invite your team',
    metaTitle: 'Invite your team to AgOS',
    description:
      'How colleagues join your AgOS organization by invitation or email domain, how long invitations last, how seats work and what happens when someone leaves.',
    lede: 'Colleagues join by invitation, or by asking to join when they share your business email domain.',
    card: 'Invitations, join requests, seats and removing someone.',
    sections: [
      {
        title: 'Two ways in',
        body: [
          [
            '**Invite by email.** An invitation is good for a week. If it expires, send another.',
            '**Join requests.** If your organization was created with a business email, colleagues on the same domain can ask to join, and the owner decides.',
          ],
          'An organization created with a personal address is invitation only.',
        ],
      },
      {
        title: 'Roles',
        body: [
          'Owners and admins manage members, roles, invitations and join requests. What each person can read in Knowledge is set per space and per page; see [adding documents](/docs/adding-documents).',
        ],
      },
      {
        title: 'Seats are guidance',
        body: [
          'Each plan includes a number of seats, but nothing breaks if you go over. An admin sees a warning, and the invitation still goes through. See [plans and billing](/docs/plans-and-billing).',
        ],
      },
      {
        title: 'When someone leaves',
        body: [
          'Removing someone from your organization takes away their access and keeps their account. If you use [People](/product/people), offboarding marks them as departed and keeps the record of what they had.',
        ],
      },
    ],
    related: ['/docs/getting-started', '/docs/plans-and-billing', '/product/people', '/use-cases/new-hire-onboarding'],
  },
  {
    slug: 'plans-and-billing',
    title: 'Plans, allowances and billing',
    metaTitle: 'AgOS plans, trial, model allowances and billing',
    description:
      'How the AgOS 14-day trial and plans work, when the bundled model allowance resets, why your own keys are never metered, and what happens when a plan ends.',
    lede: 'One price per plan, a trial with no card, and an allowance only on the model we run for you.',
    card: 'The trial, the bundled allowance, your own keys and what lapses keep.',
    sections: [
      {
        title: 'The trial',
        body: [
          'Every organization starts with a 14-day trial, and sign-up asks for no card. Billing only comes up when you choose a paid plan, from Billing inside AgOS.',
          'When the trial ends, choose a plan. Until you do, your workspace stays readable and you can export what is in it, but new changes are paused.',
        ],
      },
      {
        title: 'Plans',
        body: [
          'The plans are Trial, Starter, Team and Enterprise, with one price per plan rather than per token. MCP tools and background agents start on Team, and [Isolated Cloud](/docs/isolated-cloud) comes with Enterprise. Compare them on the [pricing page](/pricing).',
        ],
      },
      {
        title: 'The bundled allowance',
        body: [
          'AgOS includes a bundled model, so you can start without setting anything up. It runs on our keys, so it has an allowance on every plan, with larger allowances on higher plans and no cap on Enterprise.',
          'The allowance has three windows: five hours, seven days and the calendar month. When one runs out, requests on the bundled model pause until that window resets.',
        ],
      },
      {
        title: 'Your own keys',
        body: [
          'Bring your own model key and AgOS never meters it. A workspace that runs on its own key has no allowance to run out of.',
        ],
      },
      {
        title: 'Changing, failed payments and canceling',
        body: [
          [
            'Upgrade, change or cancel from Billing inside AgOS.',
            'If a payment fails and the subscription lapses, your organization falls back to the trial features.',
            'If you cancel, your organization goes read-only until a plan is active again. Your documents stay readable either way.',
          ],
        ],
      },
    ],
    related: ['/pricing', '/docs/isolated-cloud', '/docs/inviting-your-team', '/docs/getting-started'],
  },
  {
    slug: 'isolated-cloud',
    title: 'Isolated Cloud',
    metaTitle: 'AgOS Isolated Cloud: your own database and hostnames',
    description:
      'AgOS Isolated Cloud: your own database and hostnames, your own model keys with no cap and local MCP servers, set up by our team on Enterprise.',
    lede: 'AgOS on a database of your own. The same code, the same schema and the same migrations as Cloud.',
    card: 'Your own database and hostnames, your own keys, the same product.',
    sections: [
      {
        title: 'What changes',
        body: [
          [
            '**Data:** your own database, not shared with anyone.',
            '**Hostnames:** one per app, on your own domain.',
            '**Models:** your own keys, with no monthly cap.',
            '**Tools:** local and remote MCP servers.',
          ],
        ],
      },
      {
        title: 'What stays the same',
        body: [
          'Isolated Cloud runs the same code and migrations as Cloud. A silo is a pool of one: what changes is where your data lives and whose model keys it uses, not what the product does.',
        ],
      },
      {
        title: 'How to start',
        body: [
          'Isolated Cloud comes with the Enterprise plan and is provisioned by the AgOS team. Email [support@agos.digital](mailto:support@agos.digital) with a little about your organization and we will set it up with you.',
        ],
      },
    ],
    related: ['/security', '/docs/plans-and-billing', '/pricing', '/integrations/mcp'],
  },
];
