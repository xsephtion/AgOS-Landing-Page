import { IconPlus } from './icons';
import { JsonLd } from './JsonLd';

// One accordion, open one item at a time (the shared `name` on <details>). The same questions
// go out as FAQPage structured data, so each page should have one Faq at most.
export function Faq({ id, title, items }: { id: string; title: string; items: [string, string][] }) {
  return (
    <section className="faq" id={id} aria-labelledby={`${id}-title`}>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      }} />
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
