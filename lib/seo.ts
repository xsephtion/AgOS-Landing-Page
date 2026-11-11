import type { Metadata } from 'next';
import { SITE_URL, SUPPORT_EMAIL } from './links';

/** A site path as the full address search engines and structured data want. */
export const absoluteUrl = (path: string) => (path === '/' ? SITE_URL : `${SITE_URL}${path}`);

// Who makes AgOS, as structured data. The home page publishes it in full; other pages
// point at it by `@id` and repeat the name, so each page still reads on its own.
export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'AgOS',
  url: SITE_URL,
  logo: `${SITE_URL}/agos-mark.png`,
  email: SUPPORT_EMAIL,
};
export const ORGANIZATION_REF = { '@type': 'Organization', '@id': ORGANIZATION['@id'], name: 'AgOS', url: SITE_URL };

// What search results and share cards say about the home page. The title leads with what
// AgOS does, in the words people search with; the headline on the page stays the product's own.
export const HOME_TITLE = 'AgOS: AI answers from your company’s documents, with citations';
export const HOME_DESCRIPTION =
  'AgOS answers questions from the documents your team already writes, with citations. Agents draft, schedule and track the work, and a person approves what leaves.';

// The blog's RSS feed, app/blog/feed.xml/route.ts.
export const BLOG_FEED = '/blog/feed.xml';

// The card app/opengraph-image.tsx draws.
export const SHARE_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'AgOS: ask your company a question and get an answer.',
};

// Every page's metadata goes through here. Next merges metadata shallowly, so a page that sets
// `openGraph` replaces the layout's whole object, the inherited share image included; building
// it in one place keeps every page's canonical URL, share card and site name consistent.
// `title` is left out on the home page so the layout's default applies; elsewhere the layout's
// template adds "| AgOS". `published` (an ISO date) makes the page an article, for blog posts.
// Every page names the blog's feed, so a reader or crawler finds it from wherever it lands.
export function pageMetadata({ path, title, description, published }: {
  path: string;
  title?: string;
  description: string;
  published?: string;
}): Metadata {
  const shareTitle = title ? `${title} | AgOS` : HOME_TITLE;
  const kind = published ? { type: 'article' as const, publishedTime: published } : { type: 'website' as const };
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path, types: { 'application/rss+xml': [{ url: BLOG_FEED, title: 'The AgOS blog' }] } },
    openGraph: {
      ...kind, siteName: 'AgOS', locale: 'en_US', url: path, title: shareTitle, description, images: [SHARE_IMAGE],
    },
    twitter: { card: 'summary_large_image', title: shareTitle, description, images: [SHARE_IMAGE] },
  };
}
