import type { Section, Topic } from './types';

// Comparisons. AgOS facts come from the same sources as the product pages. Claims about
// the other products are kept to what their makers publish and is widely reported, checked
// on COMPARED_ON; anything less settled is phrased as something to ask the vendor. Each
// page says when the other product is the better fit. Re-check these when they are edited:
// these products change often, and a wrong claim about a competitor is worse than none.

export const COMPARED_ON = 'November 11, 2026';

const AGOS = {
  what: 'One product for answers, agents, documents, work tracking and people, built around answers that cite their sources.',
  silent: 'Says the documents do not say, and records the question as a page worth writing.',
  actions: 'Emails, bookings and outside tool calls can wait in Approvals until a person says yes. Every decision is recorded.',
  work: 'Boards, issues, sprints, a directory, an org chart and onboarding checklists, in the same product as the answers.',
  models: 'Anthropic, OpenAI or Ollama. Bring your own keys and they are never metered.',
  runs: 'Cloud, or Isolated Cloud on a database and hostnames of your own.',
  price: 'One price per plan, not per token. Seat counts are guidance, not a hard limit.',
  start: 'Self-serve: sign up with a work email, 14-day trial, no card.',
};

const trial = (other: string): Section => ({
  title: 'How to compare them yourself',
  body: [
    `Run the same test on AgOS and ${other}, with your own documents:`,
    [
      'Ask five questions you already know the answers to, and check every citation.',
      'Ask two questions your documents do not cover, and see whether you get a guess or a plain "the documents do not say".',
      'Restrict a page to one person, then ask about it as someone else.',
      'Ask for an action, such as an email to a client, and see what happens before it is sent.',
    ],
    'AgOS takes a few minutes to set up: [create an account](/docs/getting-started), add three to five documents and ask.',
  ],
});

export const COMPARE: Topic[] = [
  {
    slug: 'glean',
    name: 'AgOS vs Glean',
    title: 'AgOS vs Glean',
    metaTitle: 'AgOS vs Glean: an honest comparison',
    description:
      'AgOS vs Glean for answering from company knowledge: cited answers, agents with approvals, built-in work tracking, deployment, pricing and setup.',
    lede:
      'Glean searches across the many apps a company already uses. AgOS is one product where the documents, the answers, the agents and the work live together. Here is how that plays out.',
    card: 'Enterprise search across your apps, or one product built around cited answers.',
    sections: [
      {
        title: 'The short version',
        body: [
          'Glean is enterprise AI search and an agents platform that connects to the apps a company already uses, sold to larger organizations through its sales team. AgOS is a self-serve product that keeps documents, answers, agents, work and people in one place, and answers only from what it can cite.',
        ],
      },
      {
        title: 'Where AgOS is different',
        body: [
          [
            '**It says when it does not know.** AgOS is built never to answer beyond its sources, and turns those misses into suggestions for pages to write.',
            '**Actions wait for a yes.** Emails, bookings and tool calls can be held in [Approvals](/product/agents), with what AgOS will do and why.',
            '**The work lives here too.** [Workspaces](/product/workspaces) and [People](/product/people) are part of the product, so a question about a late task reads its comment thread directly.',
            '**You can start today.** Sign up, add a few documents and ask, without a sales call.',
          ],
        ],
      },
      {
        title: 'Where Glean may fit better',
        body: [
          'If your knowledge is spread across many apps that AgOS does not connect to today, Glean’s large catalog of connectors is a real advantage. AgOS connects to Slack, Gmail, Google Calendar, Google Drive and GitHub, plus any tool with an [MCP](/integrations/mcp) server. Large enterprises that want a vendor with a long list of deployments will also find Glean further along.',
        ],
      },
      trial('Glean'),
    ],
    table: {
      caption: 'Side by side',
      head: ['', 'AgOS', 'Glean'],
      rows: [
        ['What it is', AGOS.what, 'Enterprise AI search and agents across the apps a company already uses.'],
        ['Sources', 'Knowledge, plus Slack, Gmail, Google Calendar, Google Drive, GitHub and MCP servers.', 'A large catalog of connectors to workplace apps.'],
        ['When the sources are silent', AGOS.silent, 'Ask Glean how its assistant handles questions your sources do not answer.'],
        ['Actions', AGOS.actions, 'Agents can act in connected apps. Ask how actions are reviewed before they run.'],
        ['Work tracking and people', AGOS.work, 'Searches the trackers and directories you already use.'],
        ['Where it runs', AGOS.runs, 'Ask Glean about its deployment options.'],
        ['Pricing', AGOS.price, 'Not published. Quoted by Glean’s sales team.'],
        ['Getting started', AGOS.start, 'Through Glean’s sales team.'],
      ],
      note: `Compared on ${COMPARED_ON} from public information. Glean changes often: check [glean.com](https://www.glean.com) for what is current.`,
    },
    related: ['/product/ask', '/product/agents', '/security', '/compare/chatgpt-enterprise'],
  },
  {
    slug: 'notion-ai',
    name: 'AgOS vs Notion AI',
    title: 'AgOS vs Notion AI',
    metaTitle: 'AgOS vs Notion AI: an honest comparison',
    description:
      'AgOS vs Notion AI for answering from company documents: where your docs live, cited answers, agents with approvals, work tracking and pricing.',
    lede:
      'Notion AI is the AI inside Notion. AgOS reads documents from wherever your team keeps them and answers with citations. The right one depends mostly on where your documents live today.',
    card: 'AI inside your Notion workspace, or answers from documents wherever they live.',
    sections: [
      {
        title: 'The short version',
        body: [
          'If your team already writes everything in Notion, Notion AI works where you already are. AgOS is for teams whose knowledge lives in PDFs, decks, Word files, GitHub and Slack as much as in a wiki, and who want answers that cite the exact section, agents whose actions wait for approval, and work tracking in the same place.',
        ],
      },
      {
        title: 'Where AgOS is different',
        body: [
          [
            '**Your files as they are.** Add PDF, DOCX, PPTX, Markdown and text files without rewriting them as pages. Long ones are split into sections, so answers point at the passage.',
            '**It says when it does not know,** and records the question as a page worth writing.',
            '**Actions wait for a yes** in [Approvals](/product/agents), with what AgOS will do and why.',
            '**Onboarding and access,** in [People](/product/people), with access changes that go through approval.',
            '**Your own database** on [Isolated Cloud](/docs/isolated-cloud), when your data has to live apart.',
          ],
        ],
      },
      {
        title: 'Where Notion AI may fit better',
        body: [
          'If your docs, projects and notes already live in Notion and your team is happy there, Notion AI needs no move and no new tool. Notion is also a full writing and database tool in its own right, which AgOS does not try to be.',
          'You can use both: export Notion pages as Markdown and add them to AgOS Knowledge.',
        ],
      },
      trial('Notion AI'),
    ],
    table: {
      caption: 'Side by side',
      head: ['', 'AgOS', 'Notion AI'],
      rows: [
        ['What it is', AGOS.what, 'AI built into Notion, the docs, wiki and database workspace.'],
        ['Where your documents live', 'Anywhere: uploaded files, pages in Knowledge, GitHub, and connected tools.', 'In Notion, plus connected apps such as Slack and Google Drive, depending on the plan.'],
        ['When the sources are silent', AGOS.silent, 'Ask Notion how its AI handles questions your pages do not answer.'],
        ['Actions', AGOS.actions, 'Works mainly inside Notion pages and databases.'],
        ['Work tracking and people', AGOS.work, 'Projects and tasks as Notion databases your team sets up.'],
        ['Where it runs', AGOS.runs, 'Notion’s cloud.'],
        ['Pricing', AGOS.price, 'Per member, per month. Check Notion’s pricing page for which plans include AI.'],
        ['Getting started', AGOS.start, 'Self-serve.'],
      ],
      note: `Compared on ${COMPARED_ON} from public information. Notion changes often: check [notion.com](https://www.notion.com/product/ai) for what is current.`,
    },
    related: ['/product/knowledge', '/docs/adding-documents', '/product/workspaces', '/compare/glean'],
  },
  {
    slug: 'chatgpt-enterprise',
    name: 'AgOS vs ChatGPT Enterprise',
    title: 'AgOS vs ChatGPT Enterprise',
    metaTitle: 'AgOS vs ChatGPT Enterprise: an honest comparison',
    description:
      'AgOS vs ChatGPT Enterprise for company knowledge: cited answers, agents that wait for approval, built-in work tracking, model choice and pricing.',
    lede:
      'ChatGPT Enterprise is a general-purpose assistant that can also search company apps. AgOS is built for one job: answering from your company’s own documents, and acting only after a person says yes.',
    card: 'A general assistant for everything, or a product built for company answers.',
    sections: [
      {
        title: 'The short version',
        body: [
          'ChatGPT Enterprise is OpenAI’s assistant for companies: writing, analysis, research and coding on OpenAI’s models, with company knowledge that can search apps such as Slack, Google Drive, SharePoint and GitHub. AgOS is narrower on purpose. It answers from what it can cite, says so when it cannot, and keeps the work that follows, the boards, the onboarding and the approvals, in the same product.',
        ],
      },
      {
        title: 'Where AgOS is different',
        body: [
          [
            '**Built to cite or decline.** Every answer lists its sources, and when the documents are silent AgOS says so instead of filling the gap.',
            '**Actions wait for a yes** in [Approvals](/product/agents). Approvals are private, and every decision is recorded.',
            '**The work lives here too:** [Workspaces](/product/workspaces) for boards and issues, [People](/product/people) for the directory and onboarding.',
            '**Your choice of model:** Anthropic, OpenAI or Ollama, and your own keys are never metered.',
            '**Your own database** on [Isolated Cloud](/docs/isolated-cloud).',
          ],
        ],
      },
      {
        title: 'Where ChatGPT Enterprise may fit better',
        body: [
          'If what your team needs most is one assistant for everything, drafting, analysis, coding, images and general research, ChatGPT is far broader than AgOS and does not need your documents to be useful.',
          'You can use both. ChatGPT can connect to AgOS through [MCP](/integrations/mcp), save what it writes into Knowledge and search it back.',
        ],
      },
      trial('ChatGPT Enterprise'),
    ],
    table: {
      caption: 'Side by side',
      head: ['', 'AgOS', 'ChatGPT Enterprise'],
      rows: [
        ['What it is', AGOS.what, 'OpenAI’s general-purpose assistant for companies.'],
        ['Sources', 'Knowledge, plus Slack, Gmail, Google Calendar, Google Drive, GitHub and MCP servers.', 'Company knowledge connects apps such as Slack, Google Drive, SharePoint and GitHub, within each person’s permissions.'],
        ['When the sources are silent', AGOS.silent, 'A general assistant: it can also answer from its own training and the web.'],
        ['Actions', AGOS.actions, 'Agents can carry out tasks in connected apps. Ask what needs confirmation first.'],
        ['Work tracking and people', AGOS.work, 'Works with the trackers and directories you already use.'],
        ['Models', AGOS.models, 'OpenAI’s models.'],
        ['Pricing', AGOS.price, 'Per seat, quoted by OpenAI’s sales team.'],
        ['Getting started', AGOS.start, 'Enterprise through OpenAI’s sales team. Smaller teams can start on ChatGPT Business.'],
      ],
      note: `Compared on ${COMPARED_ON} from public information. ChatGPT changes often: check [openai.com](https://openai.com/chatgpt/enterprise/) for what is current.`,
    },
    related: ['/product/ask', '/integrations/mcp', '/security', '/compare/notion-ai'],
  },
];
