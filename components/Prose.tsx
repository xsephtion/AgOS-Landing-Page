import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Block, Section } from '@/lib/content/types';

// Renders content written in lib/content: [label](href) becomes a link (a site path through
// next/link), **words** become bold. `plain` strips the marks for metadata and structured data.

const MARKS = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

export function rich(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(MARKS)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href, bold] = m;
    if (bold) out.push(<b key={m.index}>{bold}</b>);
    else if (href.startsWith('/')) out.push(<Link key={m.index} href={href}>{label}</Link>);
    else out.push(<a key={m.index} href={href}>{label}</a>);
    last = m.index + m[0].length;
  }
  out.push(text.slice(last));
  return out;
}

export const plain = (text: string) => text.replace(MARKS, (_, label, _href, bold) => label ?? bold);

export const sectionId = (title: string) =>
  title.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function BlockView({ block }: { block: Block }) {
  if (typeof block === 'string') return <p>{rich(block)}</p>;
  return <ul>{block.map((item) => <li key={item}>{rich(item)}</li>)}</ul>;
}

export function Sections({ sections }: { sections: Section[] }) {
  return sections.map((s) => {
    const id = sectionId(s.title);
    return (
      <section key={id} id={id} aria-labelledby={`${id}-title`}>
        <h2 id={`${id}-title`}>{s.title}</h2>
        {s.body.map((b, i) => <BlockView key={i} block={b} />)}
      </section>
    );
  });
}
