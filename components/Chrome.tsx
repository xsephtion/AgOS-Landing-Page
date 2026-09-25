import Link from 'next/link';
import type { ReactNode } from 'react';
import { CONTACT, SIGN_IN, SIGN_UP } from '@/lib/links';
import { IconArrow } from './icons';

// Site-wide pieces: the announcement above the nav, the closing call to action and the footer.

export function Announcement() {
  return (
    <p className="announce" id="top">
      <img src="/agos-mark.png" width={16} height={16} alt="" />
      <span>Isolated Cloud: AgOS on your own database.</span>
      <a href={CONTACT}>Talk to us <IconArrow size={13} /></a>
    </p>
  );
}

// `actions` replaces the sign-up pair on pages whose reader is not signing up (investors).
export function Closing({ title, lede, actions }: { title: string; lede: string; actions?: ReactNode }) {
  return (
    <section className="closing" aria-labelledby="closing-title">
      <span className="closing-mark"><img src="/agos-mark.png" width={64} height={64} alt="" /></span>
      <h2 id="closing-title">{title}</h2>
      <p className="lede">{lede}</p>
      <p className="hero-actions">
        {actions ?? (
          <>
            <a className="btn btn-ink" href={SIGN_UP}>Create your account <IconArrow size={16} className="arrow" /></a>
            <a className="btn btn-line" href={CONTACT}>Talk to us</a>
          </>
        )}
      </p>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Link className="brand brand-lg" href="/"><img src="/agos-mark.png" width={36} height={36} alt="" /> AgOS</Link>
        <p>Ask your company a question and get an answer.</p>
        <p className="footer-by">Made by AgOS</p>
      </div>
      <nav className="footer-cols" aria-label="Footer">
        <div>
          <h2>Product</h2>
          <Link href="/#ask">Ask AgOS</Link>
          <Link href="/#agents">Agents</Link>
          <Link href="/#knowledge">Knowledge</Link>
          <Link href="/#workspaces">Workspaces</Link>
          <Link href="/#people">People</Link>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#start">Getting started</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <div>
          <h2>Get started</h2>
          <a href={SIGN_UP}>Create your account</a>
          <a href={SIGN_IN}>Sign in</a>
          <a href={CONTACT}>support@agos.digital</a>
        </div>
      </nav>
      <div className="footer-base">
        <span>© {new Date().getFullYear()} AgOS</span>
        <nav className="footer-legal" aria-label="Legal">
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/data#collect">Data we collect</Link>
          <Link href="/data#use">How we use data</Link>
        </nav>
        <span>Product views on this site are illustrations with sample data.</span>
      </div>
    </footer>
  );
}
