import { IconPlus } from './icons';

// One accordion, open one item at a time (the shared `name` on <details>).
export function Faq({ id, title, items }: { id: string; title: string; items: [string, string][] }) {
  return (
    <section className="faq" id={id} aria-labelledby={`${id}-title`}>
      <div className="wrap">
        <h2 id={`${id}-title`}>{title}</h2>
        <div className="faq-list">
          {items.map(([q, a]) => (
            <details key={q} name={id}>
              <summary>{q}<span className="faq-icon"><IconPlus size={18} /></span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
