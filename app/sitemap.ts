import type { MetadataRoute } from 'next';
import { CONTENT_PATHS } from '@/lib/content';
import { absoluteUrl } from '@/lib/seo';

// Every page search engines should list. Content pages come from lib/content, so a page added
// there is listed here without another edit. /investors is left out on purpose: it is shared
// by link and marked noindex.
const PAGES = ['/', '/pricing', '/privacy', '/data', ...CONTENT_PATHS];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((path) => ({ url: absoluteUrl(path) }));
}
