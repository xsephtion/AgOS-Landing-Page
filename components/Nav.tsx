'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { SIGN_IN, SIGN_UP } from '@/lib/links';
import {
  IconAgents, IconAsk, IconChevron, IconClose, IconKnowledge, IconMenu, IconPeople, IconWorkspaces,
} from './icons';

// The five places, in the product rail's order, with the rail's own descriptions
// (ai-brain/packages/agos-shell/src/nav.ts). Each links to where the home page shows it.
const PLACES = [
  { href: '/#ask', label: 'Ask AgOS', desc: 'Answers written only from pages AgOS can cite', Icon: IconAsk },
  { href: '/#agents', label: 'Agents', desc: 'Orchestrator, workers, skills and the approval queue', Icon: IconAgents },
  { href: '/#knowledge', label: 'Knowledge', desc: 'Spaces, pages and everything AgOS can cite', Icon: IconKnowledge },
  { href: '/#workspaces', label: 'Workspaces', desc: 'Boards, issues and delivery', Icon: IconWorkspaces },
  { href: '/#people', label: 'People', desc: 'Directory, onboarding, org chart and checklists', Icon: IconPeople },
];

const LINKS = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#faq', label: 'FAQ' },
];

export function Nav() {
  const [menu, setMenu] = useState(false);
  const [sheet, setSheet] = useState(false);
  const root = useRef<HTMLElement>(null);
  const path = usePathname();
  const close = () => { setMenu(false); setSheet(false); };

  useEffect(() => {
    if (!menu && !sheet) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    const onDown = (e: PointerEvent) => { if (!root.current?.contains(e.target as Node)) close(); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [menu, sheet]);

  return (
    <header className="nav" ref={root}>
      <nav className="nav-bar" aria-label="Main">
        <Link className="brand" href="/" onClick={close}>
          <img src="/agos-mark.png" width={30} height={30} alt="" />
          AgOS
        </Link>

        <div className="nav-links">
          <div className="nav-drop">
            <button
              type="button"
              className="nav-link"
              aria-expanded={menu}
              aria-controls="product-menu"
              onClick={() => setMenu((v) => !v)}
            >
              Product <IconChevron size={12} className="chev" />
            </button>
            <div id="product-menu" className="menu" data-open={menu}>
              {PLACES.map(({ href, label, desc, Icon }) => (
                <Link key={href} className="menu-item" href={href} onClick={close}>
                  <span className="menu-icon"><Icon /></span>
                  <span><b>{label}</b><span>{desc}</span></span>
                </Link>
              ))}
            </div>
          </div>
          {LINKS.map((l) => (
            <Link key={l.href} className="nav-link" href={l.href} aria-current={path === l.href ? 'page' : undefined}>{l.label}</Link>
          ))}
        </div>

        <div className="nav-actions">
          <a className="nav-link nav-signin" href={SIGN_IN}>Sign in</a>
          <a className="btn btn-ink btn-sm" href={SIGN_UP}>Create account</a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={sheet}
            aria-controls="nav-sheet"
            aria-label={sheet ? 'Close menu' : 'Open menu'}
            onClick={() => setSheet((v) => !v)}
          >
            {sheet ? <IconClose size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </nav>

      <div id="nav-sheet" className="sheet" data-open={sheet}>
        {PLACES.map(({ href, label, Icon }) => (
          <Link key={href} href={href} onClick={close}><Icon /> {label}</Link>
        ))}
        <hr />
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={close} aria-current={path === l.href ? 'page' : undefined}>{l.label}</Link>
        ))}
        <a href={SIGN_IN}>Sign in</a>
      </div>
    </header>
  );
}
