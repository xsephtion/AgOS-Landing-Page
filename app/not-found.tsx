import type { Metadata } from 'next';
import Link from 'next/link';
import { Cards } from '@/components/Topic';

// Any address that is not a page. Next marks it noindex on its own; the links put a reader
// who followed an old or mistyped link back on the pages most people come for.

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main id="main" className="topic not-found">
      <header className="wrap page-head">
        <p className="eyebrow">404</p>
        <h1>There is no page here.</h1>
        <p className="lede">The link may be old, or the address mistyped. These are the pages most people come for.</p>
        <p className="hero-actions">
          <Link className="btn btn-ink" href="/">Go to the home page</Link>
        </p>
      </header>
      <div className="wrap listing"><Cards hrefs={['/product', '/docs', '/pricing']} /></div>
    </main>
  );
}
