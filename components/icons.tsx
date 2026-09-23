import type { ReactNode, SVGProps } from 'react';

// Glyph geometry from ai-brain/packages/agos-shell: the 16-box rail set (navIcons.tsx)
// and the 24-box UI set (uiIcons.tsx), so the page draws with the product's own icons.
// A few (arrow, mail, menu, upload, code) are drawn here to the same rules.

type P = SVGProps<SVGSVGElement> & { size?: number };

function Rail({ size = 16, children, ...rest }: P & { children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor"
      strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...rest}>
      {children}
    </svg>
  );
}

function Ui({ size = 16, w = 1.9, children, ...rest }: P & { w?: number; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" aria-hidden {...rest}>
      {children}
    </svg>
  );
}

// ── the five places (rail glyphs) ─────────────────────────────────────────────
export const IconAsk = (p: P) => (
  <Rail {...p}>
    <path d="M8 2.2l1.27 3.27L12.54 6.73 9.27 8 8 11.27 6.73 8 3.46 6.73 6.73 5.47z" />
    <path d="M12.33 10.33l.53 1.34 1.34.53-1.34.53-.53 1.34-.53-1.34-1.34-.53 1.34-.53z" />
  </Rail>
);
export const IconAgents = (p: P) => (
  <Rail {...p}><rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.4" /><circle cx="8" cy="8" r="2.2" /></Rail>
);
export const IconKnowledge = (p: P) => (
  <Rail {...p}><path d="M4.6 2.4h4.8l2.6 2.6v8.6H4.6z" /><path d="M9.4 2.4v2.6h2.6" /></Rail>
);
export const IconWorkspaces = (p: P) => (
  <Rail {...p}><rect x="1.8" y="3.6" width="12.4" height="9.4" rx="2.6" /><path d="M1.8 6.2h12.4" /></Rail>
);
export const IconPeople = (p: P) => (
  <Rail {...p}><circle cx="8" cy="6" r="2.7" /><path d="M3.2 13.2c.9-2.4 2.7-3.6 4.8-3.6s3.9 1.2 4.8 3.6" /></Rail>
);

// ── other rail glyphs ────────────────────────────────────────────────────────
export const IconApprove = (p: P) => (
  <Rail {...p}><circle cx="8" cy="8" r="6.2" /><polyline points="5.3,8.2 7.2,10 10.7,6.2" /></Rail>
);
export const IconCalendar = (p: P) => (
  <Rail {...p}>
    <rect x="2" y="3.2" width="12" height="10.4" rx="2.6" /><path d="M2 6.4h12" />
    <line x1="5.4" y1="1.9" x2="5.4" y2="4" /><line x1="10.6" y1="1.9" x2="10.6" y2="4" />
  </Rail>
);
export const IconActivity = (p: P) => (
  <Rail {...p}><polyline points="1.5,10 5,10 6.8,5.5 9.2,11.5 11,8 14.5,8" /></Rail>
);
export const IconConnected = (p: P) => (
  <Rail {...p}>
    <rect x="2" y="2" width="5" height="5" rx="1.6" /><rect x="9" y="9" width="5" height="5" rx="1.6" />
    <line x1="7" y1="4.5" x2="11.5" y2="9" />
  </Rail>
);
export const IconSources = (p: P) => (
  <Rail {...p}><ellipse cx="8" cy="4.2" rx="5.2" ry="2.2" /><path d="M2.8 4.2v7.6c0 1.2 2.3 2.2 5.2 2.2s5.2-1 5.2-2.2V4.2" /></Rail>
);
export const IconChecklist = (p: P) => (
  <Rail {...p}>
    <rect x="2.4" y="3" width="11.2" height="10" rx="2.4" />
    <line x1="5.6" y1="6" x2="10.4" y2="6" /><line x1="5.6" y1="9.4" x2="8.6" y2="9.4" />
  </Rail>
);

// ── UI glyphs ────────────────────────────────────────────────────────────────
export const IconSearch = (p: P) => <Ui {...p}><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></Ui>;
export const IconPlus = (p: P) => <Ui w={2.2} {...p}><path d="M12 5v14M5 12h14" /></Ui>;
export const IconChevron = (p: P) => <Ui w={2.4} {...p}><polyline points="6 9 12 15 18 9" /></Ui>;
export const IconClose = (p: P) => <Ui w={2} {...p}><path d="M6 6l12 12M18 6L6 18" /></Ui>;
export const IconCheck = (p: P) => <Ui w={2.2} {...p}><path d="M5 12.5l4.5 4.5L19 7.5" /></Ui>;
export const IconWarn = (p: P) => <Ui {...p}><path d="M12 4l8 14H4zM12 10v3.5M12 16h.01" /></Ui>;
export const IconDoc = (p: P) => <Ui w={1.6} {...p}><path d="M7 4h7l4 4v12H7zM14 4v4h4" /></Ui>;
export const IconSend = (p: P) => <Ui w={2.2} {...p}><path d="M12 19V5M6 11l6-6 6 6" /></Ui>;
export const IconArrow = (p: P) => <Ui w={2} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Ui>;
export const IconClock = (p: P) => <Ui {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Ui>;
export const IconLock = (p: P) => <Ui w={1.8} {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8.5 11V8a3.5 3.5 0 0 1 7 0v3" /></Ui>;
export const IconKey = (p: P) => <Ui w={1.8} {...p}><circle cx="8" cy="12" r="3.5" /><path d="M11.5 12H20M17 12v3M14 12v2.5" /></Ui>;
export const IconScope = (p: P) => (
  <Ui {...p}><path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3M4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></Ui>
);
export const IconMail = (p: P) => <Ui w={1.8} {...p}><rect x="3.5" y="5.5" width="17" height="13" rx="2.5" /><path d="M4.5 7.5l7.5 6 7.5-6" /></Ui>;
export const IconMenu = (p: P) => <Ui w={2} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Ui>;
export const IconUpload = (p: P) => <Ui w={1.8} {...p}><path d="M12 15V4M7.5 8.5 12 4l4.5 4.5M5 15v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3" /></Ui>;
export const IconCode = (p: P) => <Ui w={1.9} {...p}><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></Ui>;
export const IconMegaphone = (p: P) => <Ui w={1.8} {...p}><path d="M4 10v4h3l7 4V6l-7 4zM17.5 9.5a3.5 3.5 0 0 1 0 5" /></Ui>;
export const IconPen = (p: P) => <Ui w={1.8} {...p}><path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z" /></Ui>;
