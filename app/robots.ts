import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/links';

// Everything is open to crawlers, /investors included: a crawler has to fetch that page to see
// its noindex, and blocking it here would let its URL be listed from outside links anyway.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
