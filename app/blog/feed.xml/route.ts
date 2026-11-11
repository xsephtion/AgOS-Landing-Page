import { BLOG_PAGES } from '@/lib/content';
import { absoluteUrl, BLOG_FEED } from '@/lib/seo';
import { plain } from '@/components/Prose';

// The blog as RSS, so feed readers and search engines pick up a new post without a crawl.
// Built from lib/content/blog.ts at build time; every page links to it (lib/seo.ts).

export const dynamic = 'force-static';

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function GET() {
  const posts = BLOG_PAGES.items.filter((p) => p.date);
  const items = posts.map((p) => {
    const url = absoluteUrl(`${BLOG_PAGES.base}/${p.slug}`);
    return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(p.date!.iso).toUTCString()}</pubDate>
      <description>${escape(plain(p.description))}</description>
    </item>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The AgOS blog</title>
    <link>${absoluteUrl(BLOG_PAGES.base)}</link>
    <atom:link href="${absoluteUrl(BLOG_FEED)}" rel="self" type="application/rss+xml" />
    <description>${escape(BLOG_PAGES.description)}</description>
    <language>en</language>
${items.join('\n')}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
