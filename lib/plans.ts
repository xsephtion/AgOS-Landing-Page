import { CONTACT, SIGN_UP } from './links';

// Mirrors ai-brain/src/platform/plans.ts, the entitlement table the product enforces.
// Keep the two in step: if a plan changes there, change it here.
//
// Amounts are not public, so paid tiers show "Price shown at checkout" until `price` is set
// here, e.g. price: '$29', note: 'per month'. The Stripe code in ai-brain is not in use and
// Dodo Payments is planned (owner, 2026-09-24): name no processor until one is live.
// Trial length (14 days) confirmed by the owner, 2026-09-23.
// No token counts on the site (owner, 2026-09-27): the bundled model's caps (200K, 1M, 5M a
// month in ai-brain) read as an allowance, larger, largest, no cap. If a cap in ai-brain stops
// growing tier by tier, change the words.

export type Tier = {
  id: 'trial' | 'starter' | 'team' | 'enterprise';
  name: string;
  line: string;
  price: string | null;
  note: string;
  highlights: string[];
  cta: { label: string; href: string; style: 'ink' | 'line' };
};

export const TIERS: Tier[] = [
  {
    id: 'trial',
    name: 'Trial',
    line: 'Every workspace starts here, on your own documents.',
    price: 'Free',
    note: 'for 14 days, no card to sign up',
    highlights: [
      'Research, Drafting and Knowledge answers',
      'Up to 5 people',
      'An allowance on the bundled model',
      'Your own model keys, never metered',
    ],
    cta: { label: 'Start your trial', href: SIGN_UP, style: 'ink' },
  },
  {
    id: 'starter',
    name: 'Starter',
    line: 'For a small team getting answers from its documents.',
    price: null,
    note: 'Choose it from Billing inside AgOS',
    highlights: [
      'Everything in Trial',
      'Task management agent',
      'Up to 10 people',
      'A larger allowance on the bundled model',
    ],
    cta: { label: 'Create your account', href: SIGN_UP, style: 'line' },
  },
  {
    id: 'team',
    name: 'Team',
    line: 'The whole product: every agent, MCP and background agents.',
    price: null,
    note: 'Choose it from Billing inside AgOS',
    highlights: [
      'Every agent',
      'Connect MCP servers, or expose AgOS as one',
      'Background agents on Workspaces',
      'Up to 50 people',
      'The largest allowance on the bundled model',
    ],
    cta: { label: 'Create your account', href: SIGN_UP, style: 'line' },
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    line: 'For organizations that need Isolated Cloud.',
    price: 'Talk to us',
    note: 'Set up with our team',
    highlights: [
      'Everything in Team',
      'Isolated Cloud: your own database',
      'No seat limit',
      'No cap on the bundled model',
    ],
    cta: { label: 'Talk to us', href: CONTACT, style: 'line' },
  },
];

// true = included, false = not included, string = the value itself.
export type Cell = boolean | string;
export const COMPARE: { group: string; rows: [string, Cell, Cell, Cell, Cell][] }[] = [
  {
    group: 'Product',
    rows: [['Ask AgOS, Knowledge, Workspaces and People', true, true, true, true]],
  },
  {
    group: 'Agents',
    rows: [
      ['Research, Drafting and Knowledge answers', true, true, true, true],
      ['Task management', false, true, true, true],
      ['Scheduling, Code context, Forecast, Lead follow-up, Social publisher and Tool caller', false, false, true, true],
    ],
  },
  {
    group: 'Connections and background work',
    rows: [
      ['Connect MCP servers, or expose AgOS as one', false, false, true, true],
      ['Hourly delay watch on Workspaces', false, false, true, true],
      ['Team memory distilled from project comments', false, false, true, true],
    ],
  },
  {
    group: 'People',
    rows: [['Seats (guidance, never a block)', '5', '10', '50', 'No limit']],
  },
  {
    group: 'Bundled model, on our keys',
    rows: [
      ['Allowance (resets every 5 hours, 7 days and month)', 'Included', 'Larger', 'Largest', 'No cap'],
    ],
  },
  {
    group: 'Your model keys',
    rows: [['Anthropic, OpenAI or Ollama key, never metered or capped', true, true, true, true]],
  },
  {
    group: 'Where it runs',
    rows: [
      ['Cloud', true, true, true, true],
      ['Isolated Cloud, on your own database', false, false, false, true],
    ],
  },
];
