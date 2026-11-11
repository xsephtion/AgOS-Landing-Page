import type { Topic } from './types';

// The five places, in the product rail's order (ai-brain/packages/agos-shell/src/nav.ts).
// Sources, beyond what the home page already cites: agents/workers/rag.ts (never invent),
// memory/kb/permissions.ts (private by default, page restrictions), memory/kb/gaps.ts
// (unanswered questions), memory/kb/improvePage.ts (tone only, facts kept), memory/kb/pageStats.ts
// (cited pages and ratings), memory/kb/approvals.ts (who sees which approval),
// memory/pm/{breakdown,delay,intake,daily,sprints}.ts, services/normalizer (commitments,
// one person across tools), memory/hr/{lifecycle,tick}.ts (staged access, reminders, departed).

export const PRODUCT: Topic[] = [
  {
    slug: 'ask',
    name: 'Ask AgOS',
    title: 'Ask a question. Get an answer you can check.',
    metaTitle: 'Ask AgOS: cited answers from your company’s documents',
    description:
      'Ask AgOS answers in plain words from your team’s documents and connected tools, cites every section it used, and says so when the sources are silent.',
    lede:
      'Type the question the way you would ask a colleague. AgOS reads the sections that matter and writes an answer that cites each one.',
    card: 'Answers written only from what AgOS can cite, with every source listed.',
    view: 'ask',
    sections: [
      {
        title: 'Where the answer comes from',
        body: [
          'AgOS answers from what it can cite: the documents and pages in [Knowledge](/product/knowledge), plus what it has recorded from your [connected tools](/integrations), such as issues, open commitments and recent messages.',
          'Each answer lists the sections it used. Anyone can open a source and check the answer against it, which is the point: an answer you cannot check is a guess you have to trust.',
        ],
      },
      {
        title: 'When the documents do not say',
        body: [
          'AgOS is built never to invent an answer the sources do not support. If nothing it can cite answers the question, it says so plainly, so a gap in your documents shows up as a gap and not as a confident guess.',
          'Those misses are not thrown away. Questions that keep going unanswered are grouped into suggestions for the page your team should write next. Read more in [why AgOS says it does not know](/blog/why-agos-says-it-does-not-know).',
        ],
      },
      {
        title: 'Answers that respect who is asking',
        body: [
          'Knowledge is private by default. Spaces have members, pages can be restricted to named people, and AgOS scopes every read to the person asking. Two colleagues can ask the same question and each gets an answer from what they are allowed to see.',
        ],
      },
      {
        title: 'From an answer to the next step',
        body: [
          [
            '**Follow up** in the same thread, and AgOS keeps the context.',
            '**Turn it into work.** AgOS proposes the steps a task should be broken into, and a person reviews them before anything lands on a [Workspaces](/product/workspaces) board.',
            '**Send it on.** If the next step is an email or a meeting, an [agent](/product/agents) drafts it, and it can wait in Approvals until someone says yes.',
          ],
        ],
      },
      {
        title: 'See which pages do the work',
        body: [
          'Every answer records the pages it cited, and readers can rate answers. Over time that shows which pages answer questions and which ones need attention.',
        ],
      },
    ],
    faq: [
      ['Which models write the answers?',
        'AgOS works with Anthropic, OpenAI and Ollama models. Cloud includes a bundled model with a monthly allowance. Isolated Cloud runs on your own keys with no cap.'],
      ['Can I ask from Slack?',
        'Yes. Message AgOS in Slack and it answers in the thread, from the same sources it uses everywhere else.'],
      ['Does AgOS look things up on the web?',
        'Answers in Ask come from your own sources. The Research agent can search the web when you ask it to research something, and its search queries go to a web search provider.'],
    ],
    related: ['/product/knowledge', '/product/agents', '/integrations/slack', '/docs/asking-questions'],
  },
  {
    slug: 'agents',
    name: 'Agents and Approvals',
    title: 'Agents do the work. A person approves what leaves.',
    metaTitle: 'AI agents with human approval',
    description:
      'AgOS agents research, draft, schedule, track tasks and forecast. Emails, bookings and tool calls wait in Approvals until a person says yes.',
    lede:
      'Each agent handles one kind of work. Anything that sends an email, books a meeting or calls an outside tool can wait in Approvals until someone says yes.',
    card: 'Agents that draft, schedule and track, and an Approvals queue for what leaves.',
    view: 'approvals',
    sections: [
      {
        title: 'The agents',
        body: [
          [
            '**Research:** gathers and summarizes information.',
            '**Drafting:** writes emails, proposals and reports.',
            '**Scheduling:** creates and checks calendar events.',
            '**Task management:** captures and tracks to-dos.',
            '**Code context:** explains commits, pull requests and issues.',
            '**Forecast:** answers what happens if something slips.',
            '**Knowledge answers:** answers from what it can cite.',
            '**Lead follow-up:** drafts the next touch for a lead and queues it for approval.',
            '**Social publisher:** drafts, schedules and posts.',
            '**Tool caller:** runs a connected tool on request.',
          ],
        ],
      },
      {
        title: 'Skills think and write. They never act.',
        body: [
          'Skills are roles you consult: Chief of Staff, BizDev Manager, Email QA Manager, Marketing Manager, Finance and Product Manager. They draft and advise, and they never take an action on their own.',
          'You can write your own skill by describing how it should behave, in plain words.',
        ],
      },
      {
        title: 'How Approvals works',
        body: [
          'When an agent wants to send an email, book something or run an outside tool, the action can be held in Approvals. The card shows what AgOS will do and why. A person approves or declines, and the decision is recorded with who made it and when.',
          'Approvals are not public inside the company. People see the requests they made, and only someone allowed to decide is offered Approve.',
        ],
      },
      {
        title: 'One path for every privileged change',
        body: [
          'Changes AgOS makes on its own behalf go through the same queue. When a new hire needs access to a space, for example, the grant is staged as an approval rather than applied directly. There is one place to see what changed, who said yes and why.',
          'Read more in [why our agents wait for a yes](/blog/why-our-agents-wait-for-a-yes).',
        ],
      },
      {
        title: 'Connect more tools',
        body: [
          'Agents act through your [connected tools](/integrations): Gmail, Google Calendar, Google Drive, GitHub and Slack, plus any tool you add through [MCP](/integrations/mcp). MCP tools and background agents start on the Team plan; see [pricing](/pricing).',
        ],
      },
    ],
    faq: [
      ['Can an agent send email without asking?',
        'Sending an email, booking something or running an outside tool can be held in Approvals, where a person sees what AgOS will do and why, then approves or declines.'],
      ['What is the difference between an agent and a skill?',
        'Agents do things, such as drafting and sending an email or creating a calendar event. Skills only think and write. You consult a skill, or an agent uses one, but a skill never acts on its own.'],
    ],
    related: ['/docs/approvals', '/integrations/gmail', '/integrations/google-calendar', '/use-cases/client-delivery'],
  },
  {
    slug: 'knowledge',
    name: 'Knowledge',
    title: 'Everything AgOS answers from, in one place.',
    metaTitle: 'AI knowledge base with cited answers',
    description:
      'Knowledge keeps your team’s documents in private spaces, split into sections so every AgOS answer cites the exact passage. AI edits never change a fact.',
    lede:
      'Contracts, scopes of work, onboarding guides, decks. Knowledge keeps the documents your team relies on in spaces, split into sections so an answer points at the exact passage.',
    card: 'Spaces, pages and files, private by default and cited by section.',
    view: 'knowledge',
    sections: [
      {
        title: 'Spaces, pages and files',
        body: [
          'Organize Knowledge in spaces. Each space has its own members, who can view, edit or administer it. Inside a space, write pages or upload files: PDF, DOCX, PPTX, Markdown and plain text.',
          'Pages keep their earlier versions, so any change can be undone.',
        ],
      },
      {
        title: 'Split into sections, cited by section',
        body: [
          'Long documents are split into sections when they are indexed. That is what lets an answer in [Ask](/product/ask) point at the clause, step or paragraph it came from instead of the whole file.',
        ],
      },
      {
        title: 'Private by default',
        body: [
          'A space is visible only to its members. A page can be restricted further to named people, and the restriction carries down to the pages beneath it. AgOS answers each person only from what they are allowed to read.',
        ],
      },
      {
        title: 'AI edits that keep every fact',
        body: [
          'Improve with AI can fix tone, flow, wordiness and grammar on a page. It may not add, drop or change a fact. If any number, link, tag or code block from the original is missing or altered, the rewrite is rejected and the page stays as it was.',
          'You see the change as a diff and choose whether to apply it. Saving keeps the previous version, so even an applied edit can be reverted.',
        ],
      },
      {
        title: 'The page you should write next',
        body: [
          'When AgOS cannot answer a question, or a search finds nothing, that miss is recorded. Questions that keep coming up unanswered are grouped into suggestions for the page that should exist.',
        ],
      },
      {
        title: 'Bring documents in from where they live',
        body: [
          [
            '**Upload** files directly, three to five is enough to start.',
            '**Sync from [GitHub](/integrations/github):** Markdown docs in a repository become pages, and issues, pull requests and wiki pages become sources AgOS can cite.',
            '**Save from your AI tools through [MCP](/integrations/mcp):** Claude, ChatGPT and other MCP clients can save the Markdown they write straight into Knowledge.',
          ],
        ],
      },
    ],
    faq: [
      ['Which files can I add?',
        'PDF, DOCX, PPTX, Markdown and plain text. During sign-up you can add up to 20 files of up to 25 MB each, and three to five is enough to start.'],
      ['Who can see a page?',
        'Members of its space, and only the named people if the page is restricted. A restriction also applies to the pages beneath it.'],
    ],
    related: ['/docs/adding-documents', '/integrations/github', '/use-cases/policy-answers', '/product/ask'],
  },
  {
    slug: 'workspaces',
    name: 'Workspaces',
    title: 'Answers turn into tracked work.',
    metaTitle: 'Project tracking with AI: boards, issues and delay alerts',
    description:
      'Boards and issues beside the documents they came from. AgOS reads the comment thread, flags late work against your team’s history and proposes plans you review.',
    lede:
      'Workspaces keep boards and issues next to the documents they came from. Ask what is going on with a task and AgOS reads the comment thread, not only the status.',
    card: 'Boards and issues that AgOS can read, explain and flag before they slip.',
    view: 'workspaces',
    sections: [
      {
        title: 'Boards, lists and summaries',
        body: [
          'Each workspace has a board, a list and a summary. Issues carry comments and attachments, and work can be planned in sprints. When a sprint is completed, unfinished issues move out and the sprint keeps the numbers it ended with.',
        ],
      },
      {
        title: 'Ask about a task, get the thread',
        body: [
          'Ask what is going on with an issue and AgOS reads its comments: who said what, what it is waiting on and how long ago anyone replied. The answer cites the issue, like any other source in [Ask](/product/ask).',
        ],
      },
      {
        title: 'Late work, flagged while there is still time',
        body: [
          'An issue that has been in progress longer than 85% of comparable work your team has finished gets flagged, before its due date passes. The finding is checkable: how long the issue has been open, against your own team’s history, not a model’s hunch.',
          'When something does slip, the Forecast agent answers what else moves with it.',
        ],
      },
      {
        title: 'From an answer to a plan',
        body: [
          'Turn an answer into a task and AgOS proposes the steps to break it into. A person reviews the list and unchecks what is not needed before anything is created. Creating none is a valid outcome.',
        ],
      },
      {
        title: 'Promises become tracked commitments',
        body: [
          'AgOS reads messages and notes from your connected tools and picks out commitments, like "we will ship by Friday", each with a due date and a confidence. Nobody has to type them in, and they show up when someone asks what is outstanding.',
        ],
      },
      {
        title: 'Requests from clients, and a daily report',
        body: [
          [
            '**Client requests** arrive as intake, not as issues. A product owner edits and approves each one before it joins the board, and outside people can read issues but not change them.',
            '**The daily report** shows what each person you oversee did on a given day and what is waiting on them now.',
          ],
        ],
      },
    ],
    related: ['/use-cases/client-delivery', '/integrations/github', '/product/agents', '/product/ask'],
  },
  {
    slug: 'people',
    name: 'People',
    title: 'The org chart is part of the answer.',
    metaTitle: 'Employee directory, org chart and onboarding checklists',
    description:
      'Your directory, org chart and onboarding checklists in AgOS. Ask who reports to whom, remind owners of due steps, and approve every access change.',
    lede:
      'People holds the directory, the org chart and onboarding checklists. Ask who someone reports to or who a new hire should meet, and the answer comes from the record your team keeps.',
    card: 'Directory, org chart and onboarding, with access changes that wait for a yes.',
    view: 'people',
    sections: [
      {
        title: 'Directory and org chart',
        body: [
          'People keeps names, titles, managers, teams and start and end dates. The org chart is drawn from the same record, so it changes when the record does.',
        ],
      },
      {
        title: 'Onboarding checklists',
        body: [
          'Each new hire gets a checklist of steps, each with an owner and a due date. When a step is coming up or overdue, its owner gets a reminder by email.',
        ],
      },
      {
        title: 'Access changes go through Approvals',
        body: [
          'Giving a new hire access to a space, or taking it away when someone leaves, is staged as an approval. A person says yes before it happens, and the change is recorded like any other. See [how Approvals works](/product/agents).',
        ],
      },
      {
        title: 'Leaving keeps the record',
        body: [
          'Offboarding marks a person as departed instead of deleting them. The record of what they had access to stays, which is exactly what an access review needs.',
        ],
      },
      {
        title: 'Ask about people',
        body: [
          'Ask who someone reports to, who owns a process or who a new hire should meet in week one. [Ask](/product/ask) answers from People the same way it answers from documents, and cites it.',
        ],
      },
    ],
    related: ['/use-cases/new-hire-onboarding', '/product/agents', '/security', '/product/ask'],
  },
];
