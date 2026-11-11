import type { MetadataRoute } from 'next';
import { BLOG_PAGES, CONTENT_PATHS } from '@/lib/content';
import { absoluteUrl } from '@/lib/seo';

// Every page search engines should list. Content pages come from lib/content, so a page added
// there is listed here without another edit. /investors is left out on purpose: it is shared
// by link and marked noindex.
const PAGES = ['/', '/pricing', '/privacy', '/data', ...CONTENT_PATHS];

// Only blog posts carry a date they were written; a guessed date on the other pages would be
// worse than none, since search engines stop trusting a sitemap whose dates are wrong.
const DATED = Object.fromEntries(BLOG_PAGES.items.map((p) => [`${BLOG_PAGES.base}/${p.slug}`, p.date?.iso]));

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({ url: absoluteUrl(path), ...(DATED[path] && { lastModified: DATED[path] }) }));
}
