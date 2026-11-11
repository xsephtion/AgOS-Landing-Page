import type { Topic } from './types';

// Each use case is a path through features the product pages already ground. No customer
// stories: none exist yet (PRODUCT.md, Evidence on Hand). Examples use the sample company,
// Northbay, and say so.

export const USE_CASES: Topic[] = [
  {
    slug: 'new-hire-onboarding',
    name: 'New hire onboarding',
    title: 'A new hire’s first week, answered.',
    metaTitle: 'AI for employee onboarding: checklists, answers and access',
    description:
      'Use AgOS to onboard new hires: a checklist with owners and reminders, answers from your own handbook with citations, and access granted through Approvals.',
    lede:
      'New hires ask the same questions every week. With AgOS they ask the documents instead, and the checklist keeps everyone else on time.',
    card: 'Checklists, reminders, cited answers and access that waits for a yes.',
    view: 'people',
    sections: [
      {
        title: 'The questions a new hire actually asks',
        body: [
          'Who is my manager? Where is the support policy? How do refunds work? A new hire can ask [Ask AgOS](/product/ask) in plain words and get an answer that cites the page it came from, instead of waiting for someone to reply.',
          'When the handbook does not cover something, AgOS says so. That question then shows up as a suggestion for a page worth writing, so the next hire does not have to ask.',
        ],
      },
      {
        title: 'A checklist everyone can see',
        body: [
          'In [People](/product/people), each new hire gets a checklist: laptop and accounts, meeting their manager, reading the policies, shadowing a call. Every step has an owner and a due date, and owners get an email reminder when a step is coming up or overdue.',
        ],
      },
      {
        title: 'Access, given on purpose',
        body: [
          'Giving the new hire access to the right spaces is staged as an approval. Someone says yes, the change is made and it is recorded. When someone leaves, removing access works the same way, and their record is kept.',
        ],
      },
      {
        title: 'How to start',
        body: [
          [
            'Add your handbook, policies and onboarding guide to [Knowledge](/product/knowledge). Three to five documents is enough to start.',
            'Set up the onboarding steps in People.',
            'Invite the new hire, and point them at Ask on day one.',
          ],
        ],
      },
    ],
    related: ['/product/people', '/product/knowledge', '/docs/inviting-your-team', '/use-cases/policy-answers'],
  },
  {
    slug: 'client-delivery',
    name: 'Client delivery',
    title: 'Keep every client promise in view.',
    metaTitle: 'AI for client delivery and project management',
    description:
      'Run client delivery with AgOS: promises picked out of messages, late issues flagged early, cited status answers and client emails drafted for approval.',
    lede:
      'What was promised, what it depends on and what is late. AgOS keeps the answer to all three in one place, with sources.',
    card: 'Promises tracked, late work flagged, updates drafted for approval.',
    view: 'workspaces',
    sections: [
      {
        title: 'Ask what was promised',
        body: [
          'Ask "what did we promise the client about the launch?" and AgOS answers from the kickoff notes, the scope of work and the open commitments, citing each. Commitments are picked out of your messages and notes automatically, with a due date and a confidence.',
        ],
      },
      {
        title: 'See what is running late, early',
        body: [
          'In [Workspaces](/product/workspaces), an issue that has been in progress longer than 85% of comparable work your team has finished is flagged before its due date passes. Ask what is going on with it and AgOS reads the comment thread: who is waiting on whom, and since when.',
          'If it does slip, the Forecast agent answers what else moves.',
        ],
      },
      {
        title: 'Send the update, after a yes',
        body: [
          'The Drafting agent writes the status email from the same sources. It waits in [Approvals](/product/agents), showing the recipient, the text and why, until someone approves it. The Scheduling agent books the follow-up call the same way.',
        ],
      },
      {
        title: 'Requests that do not jump the queue',
        body: [
          'Client requests arrive as intake, not as issues. A product owner edits and approves each one before it joins the board, and the client can see issues without changing them.',
        ],
      },
    ],
    related: ['/product/workspaces', '/integrations/gmail', '/integrations/google-calendar', '/product/agents'],
  },
  {
    slug: 'policy-answers',
    name: 'Policy answers',
    title: 'Answer internal questions from your own policies.',
    metaTitle: 'AI answers from your company policies and handbook',
    description:
      'Answer questions about your policies, handbook and contracts with AgOS, cited to the exact section, in the app or in Slack, and find the missing pages.',
    lede:
      'Support policy, refund rules, travel policy, contract terms. AgOS answers from the document and points at the section, so nobody has to take its word for it.',
    card: 'Cited answers from the handbook, in AgOS or in Slack.',
    view: 'ask',
    sections: [
      {
        title: 'Cited to the section',
        body: [
          'Long policies are split into sections when they are added to [Knowledge](/product/knowledge). An answer about refund windows cites the refund clause, not the whole forty-page document, so checking it takes seconds.',
        ],
      },
      {
        title: 'No answer is better than a wrong one',
        body: [
          'If the policy does not cover the question, AgOS says so instead of guessing. For policy questions that matters more than anywhere else: a confident wrong answer about refunds or leave costs more than "the documents do not say".',
        ],
      },
      {
        title: 'Where people already ask',
        body: [
          'Ask in AgOS, or in [Slack](/integrations/slack), where most of these questions get asked today. The answer and its sources are the same in both places.',
        ],
      },
      {
        title: 'The right people see the right policies',
        body: [
          'A space can be limited to its members and a page to named people. AgOS answers each person only from what they can read, so the board pack and the HR casework stay where they belong.',
        ],
      },
      {
        title: 'Keep the policies true',
        body: [
          'Questions nobody could answer are grouped into suggestions for pages to write. Improve with AI can tidy a page’s wording without changing a single fact, and every saved change keeps the version before it.',
        ],
      },
    ],
    related: ['/product/ask', '/product/knowledge', '/integrations/slack', '/blog/why-agos-says-it-does-not-know'],
  },
];
