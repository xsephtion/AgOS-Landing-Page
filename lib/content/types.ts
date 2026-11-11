// The shapes every content page is written in. Text is plain strings with two marks:
// [label](/href) for a link and **words** for bold (rendered by components/Prose.tsx), so a
// page's copy stays readable data and its links can point anywhere on the site.

/** A paragraph, or a bulleted list when it is an array. */
export type Block = string | string[];

export type Section = { title: string; body: Block[] };

/** The views drawn on the home page (components/Story.tsx), reused as page illustrations. */
export type View = 'ask' | 'approvals' | 'knowledge' | 'workspaces' | 'people';

/** Product, integration, use-case, comparison and security pages. */
export type Topic = {
  slug: string;
  /** Short name for breadcrumbs and cards, such as "Slack". */
  name: string;
  /** The h1. */
  title: string;
  /** The <title>, before the layout adds "| AgOS". Written in the words people search with. */
  metaTitle: string;
  description: string;
  lede: string;
  /** What the card on index pages and in "Keep reading" says. */
  card: string;
  view?: View;
  sections: Section[];
  table?: { caption: string; head: string[]; rows: string[][]; note?: string };
  faq?: [string, string][];
  /** Other pages on the site, by href, shown under "Keep reading". */
  related: string[];
};

/** Help articles and blog posts. */
export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
  card: string;
  sections: Section[];
  related: string[];
  /** Blog posts only. */
  date?: { iso: string; label: string };
};
