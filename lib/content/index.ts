import { BLOG } from './blog';
import { COMPARE } from './compare';
import { DOCS } from './docs';
import { INTEGRATIONS } from './integrations';
import { PRODUCT } from './product';
import { SECURITY } from './security';
import type { Article, Topic } from './types';
import { USE_CASES } from './use-cases';

// Every content collection, its index page, and a lookup of every linkable page on the site
// by href. Routes (app/<base>/...), the sitemap and the "Keep reading" cards all read from
// here, so a new page is added once, in its collection's file.

export type Collection<T> = {
  base: string;
  /** The breadcrumb label and the small line on each card. */
  label: string;
  /** The index page. */
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
  items: T[];
};

export const PRODUCT_PAGES: Collection<Topic> = {
  base: '/product', label: 'Product', items: PRODUCT,
  title: 'Five places, one product.',
  metaTitle: 'Product: Ask, Agents, Knowledge, Workspaces and People',
  description: 'AgOS is five places in one product: cited answers in Ask, Agents with Approvals, Knowledge, Workspaces for tracked work, and People for onboarding.',
  lede: 'Ask, Agents, Knowledge, Workspaces and People are one product, so a question in one can draw on all the others.',
};

export const INTEGRATION_PAGES: Collection<Topic> = {
  base: '/integrations', label: 'Integrations', items: INTEGRATIONS,
  title: 'Connect the tools your team already uses.',
  metaTitle: 'Integrations: Slack, Gmail, Google, GitHub and MCP',
  description: 'AgOS connects to Slack, Gmail, Google Calendar, Google Drive, GitHub and any MCP server. Connections bring activity in and let agents act, after a yes.',
  lede: 'Connections bring activity in and let agents act out. Adding one is a setting, not a code change.',
};

export const USE_CASE_PAGES: Collection<Topic> = {
  base: '/use-cases', label: 'Use cases', items: USE_CASES,
  title: 'What teams use AgOS for.',
  metaTitle: 'Use cases: onboarding, client delivery and policy answers',
  description: 'How teams use AgOS: onboarding new hires with checklists and cited answers, keeping client promises in view, and answering questions from their policies.',
  lede: 'Three jobs AgOS does well today, each built from the same five places.',
};

export const COMPARE_PAGES: Collection<Topic> = {
  base: '/compare', label: 'Compare', items: COMPARE,
  title: 'How AgOS compares.',
  metaTitle: 'AgOS vs Glean, Notion AI and ChatGPT Enterprise',
  description: 'Honest comparisons of AgOS with Glean, Notion AI and ChatGPT Enterprise, including where each of them may be the better fit.',
  lede: 'Side by side with the tools teams usually weigh it against, including where they may be the better choice.',
};

export const DOC_PAGES: Collection<Article> = {
  base: '/docs', label: 'Docs', items: DOCS,
  title: 'AgOS help center.',
  metaTitle: 'Help center: guides for setting up and using AgOS',
  description: 'Guides for AgOS: getting started, adding documents, asking questions, approvals, connecting tools, inviting your team, plans and billing, and Isolated Cloud.',
  lede: 'How to set up AgOS, fill Knowledge, ask well, and run it for your team.',
};

export const BLOG_PAGES: Collection<Article> = {
  base: '/blog', label: 'Blog', items: BLOG,
  title: 'The AgOS blog.',
  metaTitle: 'Blog: how and why AgOS works the way it does',
  description: 'Posts from the AgOS team on how the product works and why: cited answers, approvals, and running AI on your company’s own documents.',
  lede: 'How AgOS works, and why it works that way.',
};

export const SECURITY_PAGE = SECURITY;

export type PageLink = { kind: string; title: string; card: string };

const entries = (c: Collection<Topic | Article>) => c.items.map((item): [string, PageLink] => [
  `${c.base}/${item.slug}`,
  { kind: 'date' in item && item.date ? item.date.label : c.label, title: 'name' in item ? item.name : item.title, card: item.card },
]);

const COLLECTIONS = [PRODUCT_PAGES, INTEGRATION_PAGES, USE_CASE_PAGES, COMPARE_PAGES, DOC_PAGES, BLOG_PAGES] as Collection<Topic | Article>[];

/** Every page a "Keep reading" card can point at. */
export const LINKS: Record<string, PageLink> = Object.fromEntries([
  ...COLLECTIONS.flatMap(entries),
  ...COLLECTIONS.map((c): [string, PageLink] => [c.base, { kind: c.label, title: c.title, card: c.lede }]),
  ['/security', { kind: 'Security', title: SECURITY.name, card: SECURITY.card }],
  ['/pricing', { kind: 'Pricing', title: 'One price per plan.', card: 'Plans, the 14-day trial and what each plan includes.' }],
  ['/privacy', { kind: 'Privacy', title: 'Privacy policy', card: 'What AgOS collects, how it uses it and who else receives it.' }],
]);

/** Every content page, for the sitemap. */
export const CONTENT_PATHS = [...COLLECTIONS.flatMap((c) => [c.base, ...c.items.map((i) => `${c.base}/${i.slug}`)]), '/security'];
