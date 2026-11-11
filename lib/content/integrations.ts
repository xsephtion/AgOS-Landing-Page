import type { Topic } from './types';

// What each connection does, from ai-brain/src/integrations: slack.ts (replies in the thread,
// one conversation per thread, Slack user matched to an AgOS account), gmail.ts (inbox list,
// read, send), calendar.ts (primary calendar: list, create with attendees), drive.ts (recent
// files, read content, Google Docs as plain text), github.ts and github/sync.ts (OAuth from
// Settings, per-repository docs/issues/PRs/wiki, webhooks), docs/MCP.md (AgOS as an MCP
// server: OAuth 2.1, consent screen, save_markdown and friends). Google connections are per
// person (auth/tokens.ts). Remote vs local MCP and the Team plan: PRODUCT.md.

export const INTEGRATIONS: Topic[] = [
  {
    slug: 'slack',
    name: 'Slack',
    title: 'Ask AgOS from Slack.',
    metaTitle: 'Slack AI assistant that answers from your documents',
    description:
      'Message AgOS in Slack and it answers in the thread, from your team’s documents and records, with the same permissions and sources it uses everywhere else.',
    lede:
      'Message AgOS in Slack and it answers in the thread, from the same documents and records it uses everywhere else.',
    card: 'Answers in the thread, from the same sources AgOS cites everywhere.',
    sections: [
      {
        title: 'How it works',
        body: [
          'AgOS joins your workspace as a Slack app. Send it a message and the reply comes back in Slack. Each thread is its own conversation, so a follow-up in the thread keeps the context of what was asked before.',
          'Conversations from Slack are saved like any other, so the question and the answer are there later.',
        ],
      },
      {
        title: 'Answers for the person asking',
        body: [
          'When a Slack account is linked to an AgOS account, AgOS scopes what it reads to that person. Someone who cannot open a restricted page in [Knowledge](/product/knowledge) does not get an answer from it in Slack either.',
        ],
      },
      {
        title: 'One person across every tool',
        body: [
          'The same colleague appears as a Slack user, a GitHub login and an email address. AgOS recognizes them as one person, so a promise made in Slack and an issue closed in GitHub land on the same record. Matches it is unsure of go to a person to confirm.',
        ],
      },
    ],
    related: ['/product/ask', '/integrations/gmail', '/integrations/mcp', '/docs/connecting-tools'],
  },
  {
    slug: 'gmail',
    name: 'Gmail',
    title: 'Email drafted by AgOS, sent when you say so.',
    metaTitle: 'Gmail AI assistant that drafts email for your approval',
    description:
      'Connect Gmail to AgOS and the Drafting agent writes email from your documents, then holds it in Approvals so a person reads it before it is sent.',
    lede:
      'Connect your Google account and AgOS can read your inbox, draft replies from your documents and send them, once a person has said yes.',
    card: 'Reads your inbox, drafts from your documents, sends after a yes.',
    sections: [
      {
        title: 'What AgOS can do with Gmail',
        body: [
          [
            '**Read** recent messages in your inbox and open one in full.',
            '**Draft** an email with the Drafting agent, using what your documents say.',
            '**Send** it from your account.',
          ],
          'Each person connects their own Google account, so AgOS works in your inbox, not a shared one.',
        ],
      },
      {
        title: 'Nothing sends without a yes',
        body: [
          'Sending an email can wait in [Approvals](/product/agents). The card shows the recipient, the subject, the body and why AgOS wrote it. A person approves or declines, and the decision is recorded.',
        ],
      },
      {
        title: 'Check a draft before it goes',
        body: [
          'The Email QA Manager skill checks a draft against your email rules before it goes out. Like every skill, it only reads and writes: it never sends anything itself.',
        ],
      },
    ],
    related: ['/product/agents', '/integrations/google-calendar', '/docs/approvals', '/docs/connecting-tools'],
  },
  {
    slug: 'google-calendar',
    name: 'Google Calendar',
    title: 'Meetings booked from what was agreed.',
    metaTitle: 'Google Calendar AI scheduling with approval',
    description:
      'Connect Google Calendar to AgOS and the Scheduling agent checks your events and books meetings with attendees, holding each booking for a person to approve.',
    lede:
      'The Scheduling agent checks your calendar and books the meeting, with the right people on it, after someone approves it.',
    card: 'Checks your calendar and books meetings once they are approved.',
    sections: [
      {
        title: 'What AgOS can do with Google Calendar',
        body: [
          [
            '**Check** upcoming events on your primary calendar: times, attendees, location and status.',
            '**Create** an event with a title, a start and end time and the people to invite.',
          ],
          'Each person connects their own Google account, so AgOS books on your calendar as you.',
        ],
      },
      {
        title: 'Bookings wait for a person',
        body: [
          'Creating an event can be held in [Approvals](/product/agents), showing the time, the attendees and why. Approve it and the invitation goes out; decline it and nothing is booked.',
        ],
      },
      {
        title: 'Scheduled from the record',
        body: [
          'When AgOS proposes a meeting, it can draw on the same documents and threads it answers from, and the approval card says why it is booking it. The reason can be checked like any answer.',
        ],
      },
    ],
    related: ['/product/agents', '/integrations/gmail', '/use-cases/client-delivery', '/docs/connecting-tools'],
  },
  {
    slug: 'google-drive',
    name: 'Google Drive',
    title: 'Your Drive files, read when they are needed.',
    metaTitle: 'Google Drive AI assistant',
    description:
      'Connect Google Drive to AgOS so agents can find your recent files and read them when a question or a draft needs them, with Google Docs read as text.',
    lede:
      'Connect your Google account and AgOS agents can find files in your Drive and read them when a question or a draft needs them.',
    card: 'Agents find and read your files when the work needs them.',
    sections: [
      {
        title: 'What AgOS can do with Google Drive',
        body: [
          [
            '**Find** files, most recently changed first, or with a search.',
            '**Read** a file’s contents. Google Docs are read as plain text.',
          ],
          'Each person connects their own Google account, so AgOS sees the files you can see in Drive and no others.',
        ],
      },
      {
        title: 'Drive, and what Ask cites',
        body: [
          'Answers in [Ask](/product/ask) cite what is in [Knowledge](/product/knowledge). When a Drive document is one your team relies on, such as the support policy or the current price list, add it to Knowledge so it is split into sections and every answer can point at the passage it used.',
        ],
      },
    ],
    related: ['/product/knowledge', '/docs/adding-documents', '/integrations/gmail', '/docs/connecting-tools'],
  },
  {
    slug: 'github',
    name: 'GitHub',
    title: 'Your repositories, as sources AgOS can cite.',
    metaTitle: 'GitHub AI assistant for docs, issues and pull requests',
    description:
      'Connect GitHub to AgOS to sync Markdown docs, issues, pull requests and wikis into Knowledge, kept current by webhooks, and ask about the work.',
    lede:
      'Connect GitHub and choose repositories. Their docs, issues, pull requests and wiki become sources AgOS can cite, and stay current as they change.',
    card: 'Docs, issues, pull requests and wikis, synced and cited.',
    sections: [
      {
        title: 'What syncs',
        body: [
          'Connect your GitHub account from Settings, then choose repositories. For each one, choose what to bring in:',
          [
            '**Docs:** Markdown files become pages in [Knowledge](/product/knowledge), in a folder for the repository.',
            '**Issues and pull requests:** indexed as sources AgOS can cite in answers.',
            '**Wiki:** wiki pages are indexed the same way.',
          ],
        ],
      },
      {
        title: 'Kept current',
        body: [
          'GitHub tells AgOS when something changes: a push, a wiki edit, an issue or pull request update, a new repository. The sync runs in the background and never holds up GitHub.',
        ],
      },
      {
        title: 'Ask about engineering work',
        body: [
          'The Code context agent explains commits, pull requests and issues in plain words. Ask what a pull request changed or what is blocking a release, and the answer cites the issue or the pull request it came from.',
          'The Tool caller agent can open an issue for you, and that action can wait in [Approvals](/product/agents) like any other.',
        ],
      },
      {
        title: 'Your token stays protected',
        body: [
          'The GitHub connection is stored encrypted. Sign-in with GitHub is also supported, separately from this connection.',
        ],
      },
    ],
    related: ['/product/knowledge', '/product/workspaces', '/integrations/mcp', '/docs/connecting-tools'],
  },
  {
    slug: 'mcp',
    name: 'MCP',
    title: 'Bring any tool in through MCP, and take AgOS with you.',
    metaTitle: 'MCP: connect any tool, or use AgOS from Claude',
    description:
      'AgOS works with MCP both ways: agents call tools on MCP servers you connect, and clients like Claude and ChatGPT save to and search AgOS Knowledge.',
    lede:
      'MCP works both ways in AgOS. Connect MCP servers and agents can use their tools. Connect your AI client to AgOS and it can save what it writes into Knowledge and search it back.',
    card: 'Agents use any MCP tool, and Claude or ChatGPT can save into Knowledge.',
    sections: [
      {
        title: 'MCP servers as tools for your agents',
        body: [
          'Add an MCP server and its tools are available to AgOS agents. Adding one is a setting, not a code change. Tool calls that act on the outside world can wait in [Approvals](/product/agents).',
          [
            '**Cloud:** remote MCP servers.',
            '**Isolated Cloud:** remote and local MCP servers.',
          ],
          'MCP tools start on the Team plan; see [pricing](/pricing).',
        ],
      },
      {
        title: 'AgOS as an MCP server',
        body: [
          'Claude, ChatGPT, Codex and other MCP clients can connect to AgOS. Once connected, a client can:',
          [
            'Save a Markdown document as a page in Knowledge, or append to an existing page.',
            'Search Knowledge and open a page.',
            'List spaces and create new ones.',
          ],
          'Pages a client saves go into a space named after it, such as "Claude Code", and carry the signed-in person as their author. Saving again with the same key updates the page instead of making a copy.',
        ],
      },
      {
        title: 'Sign-in with consent',
        body: [
          'Clients connect over OAuth 2.1, so there is no API key to copy around. The client opens AgOS in your browser, you sign in, and a consent screen names the client and what it is asking for. Nothing is issued until you press Allow.',
        ],
      },
      {
        title: 'Lessons that a person approves',
        body: [
          'An agent working through MCP can propose a reusable lesson, such as how this team runs its migrations. It stays inert until a person approves it. Only then is it shared with later agent work, because approving it is the moment it starts steering other agents.',
        ],
      },
    ],
    related: ['/product/agents', '/product/knowledge', '/integrations/github', '/docs/connecting-tools'],
  },
];
