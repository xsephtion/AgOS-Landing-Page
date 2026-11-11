import type { Article } from './types';

// Blog posts: why the product works the way it does, written from the code that makes it so.
// Sources: agents/workers/rag.ts (never invent), memory/kb/gaps.ts (misses as demand),
// memory/kb/improvePage.ts (facts kept), decisions/layer.ts (the model never authorizes),
// memory/hr/lifecycle.ts (one path for privileged changes), memory/kb/approvals.ts.
// Newest first. Add a post at the top with today's date.

export const BLOG: Article[] = [
  {
    slug: 'why-our-agents-wait-for-a-yes',
    date: { iso: '2026-11-11', label: 'November 11, 2026' },
    title: 'Why our agents wait for a yes',
    metaTitle: 'Why our AI agents wait for human approval',
    description:
      'AgOS agents draft the email and book the meeting, then wait for a person. Why approval is part of the design, and why a model never decides what is allowed.',
    lede: 'An agent that can send email on its own will, sooner or later, send the wrong one. So ours ask first.',
    card: 'Approval is part of the design, and the model never decides what is allowed.',
    sections: [
      {
        title: 'Drafting is cheap. Sending is not.',
        body: [
          'Most of the value of an agent is in the preparation: reading the thread, finding the agreed date, writing the email. Most of the risk is in one moment, when the email leaves. A wrong draft costs a minute. A wrong email to a client costs a lot more, and cannot be taken back.',
          'So AgOS splits the two. Agents do the preparation on their own. Sending an email, booking something or calling an outside tool can wait in [Approvals](/product/agents), where a person sees exactly what will happen and why, and says yes or no.',
        ],
      },
      {
        title: 'The model is never the authorization',
        body: [
          'There is a rule in the AgOS code that is easy to state and easy to break: what an agent is allowed to do, and what has to wait for a person, is decided by ordinary, deterministic code. A model can flag that an action looks wrong and hold it back. It is structurally unable to answer "is this allowed?".',
          'That matters because models are persuadable. A document, an email or a web page can contain text that looks like an instruction. If a model decided what was permitted, that text could talk it into something. Here, the most a model can do is make AgOS more careful.',
        ],
      },
      {
        title: 'One path for every privileged change',
        body: [
          'Approvals are not only for agents. When AgOS itself needs to make a privileged change, such as giving a new hire access to a space, it stages that change as an approval too. There is one queue, one way to approve, stop or retry, and one record, instead of a separate mechanism for every feature.',
          'It also means the record is complete. Every decision is kept with who made it and when, so "who gave them access?" has an answer.',
        ],
      },
      {
        title: 'Private by default',
        body: [
          'A queue of pending actions is sensitive: it holds recipients, subjects and the reasons behind them. So Approvals are not public inside the company. People see the requests they made, and only someone allowed to decide a request is offered Approve.',
        ],
      },
      {
        title: 'What this costs',
        body: [
          'Waiting for a person is slower than not waiting. We think that is the right trade for anything that leaves the building, and the wrong one for everything else, which is why research, drafting and answering do not wait at all.',
          'If you want to see it, [create an account](/docs/getting-started), ask an agent for an email, and look at the card before you press Approve.',
        ],
      },
    ],
    related: ['/product/agents', '/docs/approvals', '/security', '/blog/why-agos-says-it-does-not-know'],
  },
  {
    slug: 'why-agos-says-it-does-not-know',
    date: { iso: '2026-11-11', label: 'November 11, 2026' },
    title: 'Why AgOS says it does not know',
    metaTitle: 'Why our AI says "I don’t know" instead of guessing',
    description:
      'AgOS answers only from sources it can cite, and says so when they are silent. Why a plain “the documents do not say” beats a confident guess.',
    lede: 'A confident wrong answer about your refund policy is worse than no answer. So AgOS is built to give no answer.',
    card: 'A plain "the documents do not say" beats a confident guess.',
    sections: [
      {
        title: 'The cost of a confident guess',
        body: [
          'Language models are good at producing answers that sound right. For general questions that is often fine. For questions about your own company, it is the worst failure there is: a made-up refund window, an invented deadline or a policy that was never written, delivered in the same calm voice as a correct answer.',
          'Once people catch an assistant doing that, they stop trusting it, including on the answers it got right. Every answer has to be checked, and an assistant whose every answer must be checked is not saving anyone time.',
        ],
      },
      {
        title: 'Cite it, or say you do not know',
        body: [
          'AgOS answers only from what it can cite: the documents and pages in [Knowledge](/product/knowledge), and what it has recorded from your connected tools. Every answer lists the sections it used. If nothing it can cite answers the question, it says so, plainly.',
          'Citations do two jobs. They let anyone check an answer in seconds. And they hold the answer to its sources: a claim that cannot point at a passage does not belong in the answer.',
        ],
      },
      {
        title: 'A miss is a signal',
        body: [
          'When AgOS cannot answer, or a search turns up nothing, the question is recorded rather than thrown away. Questions that keep coming up unanswered are grouped together, and each group becomes a suggestion: this is the page your team should write.',
          'That turns the assistant’s weak spots into a to-do list. The fifth person to ask about the travel policy is the reason it finally gets written down, and from then on everyone gets an answer.',
        ],
      },
      {
        title: 'The same rule for edits',
        body: [
          'The rule holds when AgOS edits a page, too. Improve with AI can make a page read better but may not add, drop or change a fact. If any number, link or code block from the original goes missing or changes, the rewrite is rejected. A page is the record, so the record does not get rewritten by accident.',
        ],
      },
      {
        title: 'Try it',
        body: [
          'Add three to five documents, ask something they answer, then ask something they do not. The second answer is the one to judge an assistant by. [Get started](/docs/getting-started).',
        ],
      },
    ],
    related: ['/product/ask', '/docs/asking-questions', '/use-cases/policy-answers', '/blog/why-our-agents-wait-for-a-yes'],
  },
];
