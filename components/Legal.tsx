import { Fragment, type ReactNode } from 'react';

// Shared layout for the privacy policy and the data page: a headline on the desk, a
// sticky list of sections (and their parts, when a section has h3s), and the text at a
// reading measure.

export type LegalPart = { id: string; title: string };
export type LegalSection = LegalPart & { body: ReactNode; parts?: LegalPart[] };

export function LegalPage({ title, lede, updated, sections }: {
  title: string;
  lede: string;
  updated: { iso: string; label: string };
  sections: LegalSection[];
}) {
  return (
    <main id="main" className="legal">
      <div className="wrap">
        <header className="legal-head">
          <h1>{title}</h1>
          <p className="lede">{lede}</p>
          <p className="legal-date">Last updated <time dateTime={updated.iso}>{updated.label}</time></p>
        </header>
        <div className="legal-grid">
          <nav className="legal-toc" aria-label="On this page">
            {sections.map((s) => (
              <Fragment key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
                {s.parts?.map((p) => <a key={p.id} className="legal-toc-sub" href={`#${p.id}`}>{p.title}</a>)}
              </Fragment>
            ))}
          </nav>
          <div className="legal-body">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`}>
                <h2 id={`${s.id}-title`}>{s.title}</h2>
                {s.body}
              </section>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
