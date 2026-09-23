import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Poppins } from 'next/font/google';
import './globals.css';

// AgOS type: Manrope for everything a person reads, Poppins (the wordmark's geometric
// face) for display. Same pairing as ai-brain/packages/agos-shell/src/globals.css.
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = {
  title: 'AgOS: ask your company a question and get an answer',
  description:
    'AgOS reads the documents your team already writes and answers from them with citations. Agents draft, schedule and track the work, and a person approves what leaves.',
};

export const viewport: Viewport = { themeColor: '#EDEBE7' };

// Direction contract. Emitted as an HTML comment so it survives the production build.
const CONTRACT = `<!--
THESIS: The page is the product answering. A question goes in, a cited answer comes out, and the documents it came from light up. Refuses the gradient-blob hero with a screenshot and a logo wall.
OWN-WORLD: AgOS warm paper desk (#EDEBE7), white windows floating on it, hairlines, long soft shadows, the peach-pink-lavender-blue wash bleeding from window tops. Ink pill buttons. Poppins display, Manrope for the rest. Blue only where something is cited or active.
STORY: See a cited answer, meet the agents, walk Ask to Knowledge to Workspaces to People to Approvals, learn sign-up takes a few documents, pick Cloud or Isolated Cloud, create an account.
FIRST VIEWPORT: Floating pill nav. Centered two-line headline, lede, Create your account plus How it works. Below, the Ask window on the desk with sample documents around it.
FORM: Pinned by the brief (AgOS palette, reference page flow); no roll. Key: pinned-agos-desk.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        {children}
      </body>
    </html>
  );
}
