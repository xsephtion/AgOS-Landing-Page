import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Poppins } from 'next/font/google';
import { Analytics } from '@/components/Analytics';
import { Announcement, Footer } from '@/components/Chrome';
import { Nav } from '@/components/Nav';
import { SITE_URL } from '@/lib/links';
import { HOME_DESCRIPTION, HOME_TITLE } from '@/lib/seo';
import './globals.css';

// AgOS type: Manrope for everything a person reads, Poppins (the wordmark's geometric
// face) for display. Same pairing as ai-brain/packages/agos-shell/src/globals.css.
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-poppins', display: 'swap' });

// Pages set their own canonical URL and share card through pageMetadata (lib/seo.ts). What is
// here covers anything that does not, such as the 404 page.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: HOME_TITLE, template: '%s | AgOS' },
  description: HOME_DESCRIPTION,
  applicationName: 'AgOS',
  openGraph: { type: 'website', siteName: 'AgOS', locale: 'en_US', title: HOME_TITLE, description: HOME_DESCRIPTION },
  twitter: { card: 'summary_large_image', title: HOME_TITLE, description: HOME_DESCRIPTION },
};

export const viewport: Viewport = { themeColor: '#EDEBE7' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Announcement />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
