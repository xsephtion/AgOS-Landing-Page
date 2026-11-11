import Link from 'next/link';
import { Fragment, type ReactNode } from 'react';
import { LINKS } from '@/lib/content';
import type { Article, Topic } from '@/lib/content/types';
import { SIGN_UP } from '@/lib/links';
import { absoluteUrl, ORGANIZATION_REF, SHARE_IMAGE } from '@/lib/seo';
import { Closing } from './Chrome';
import { Faq } from './Faq';
import { IconArrow } from './icons';
import { JsonLd } from './JsonLd';
import { plain, rich, Sections, sectionId } from './Prose';
import { VIEWS } from './Story';

// Templates for the content pages: product areas, integrations, use cases, comparisons,
// security (TopicPage), the lists of them (IndexPage), and help articles and blog posts
// (ArticlePage). Every page carries a visible trail of where it sits, mirrored as
// BreadcrumbList data, and ends with links to related pages so nothing is a dead end.

export type Crumb = { href: string; label: string };

function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const all = [{ href: '/', label: 'Home' }, ...trail];
  return (
    <nav className="wrap crumbs" aria-label="Breadcrumb">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: absoluteUrl(c.href) })),
      }} />
      <ol>
        {all.map((c, i) => (
          <li key={c.href}>
            {i === all.length - 1 ? <span aria-current="page">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function PageHead({ kind, title, lede, children }: { kind: string; title: string; lede: string; children?: ReactNode }) {
  return (
    <header className="wrap page-head">
      <p className="eyebrow">{kind}</p>
      <h1>{title}</h1>
      <p className="lede">{lede}</p>
      {children}
    </header>
  );
}

const SignUp = () => (
  <p className="hero-actions">
    <a className="btn btn-ink" href={SIGN_UP}>Create your account <IconArrow size={16} className="arrow" /></a>
    <Link className="btn btn-line" href="/pricing">See plans</Link>
  </p>
);

export function Cards({ hrefs }: { hrefs: string[] }) {
  return (
    <div className="cards">
      {hrefs.map((href) => {
        const page = LINKS[href];
        if (!page) throw new Error(`No page at ${href}: check the related list that names it`);
        return (
          <Link key={href} className="card" href={href}>
            <small>{page.kind}</small>
            <b>{page.title}</b>
            <span>{page.card}</span>
            <IconArrow size={16} className="card-arrow" />
          </Link>
        );
      })}
    </div>
  );
}

function Related({ hrefs }: { hrefs: string[] }) {
  if (!hrefs.length) return null;
  return (
    <section className="related" aria-labelledby="related-title">
      <div className="wrap">
        <h2 id="related-title">Keep reading</h2>
        <Cards hrefs={hrefs} />
      </div>
    </section>
  );
}

const End = () => (
  <Closing title="Ask your company a question." lede="Create an account, add three to five documents, and ask." />
);

function TopicTable({ table }: { table: NonNullable<Topic['table']> }) {
  return (
    <section className="compare compare-text" aria-labelledby="table-title">
      <div className="wrap">
        <h2 id="table-title">{table.caption}</h2>
        <div className="compare-wrap">
          <table>
            <thead><tr>{table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>
              {table.rows.map(([label, ...cells]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {cells.map((c, i) => <td key={i}>{rich(c)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {table.note && <p className="table-note">{rich(table.note)}</p>}
      </div>
    </section>
  );
}

export function TopicPage({ topic, kind, trail }: { topic: Topic; kind: string; trail: Crumb[] }) {
  const view = topic.view && VIEWS[topic.view];
  return (
    <main id="main" className="topic">
      <Breadcrumbs trail={trail} />
      <PageHead kind={kind} title={topic.title} lede={topic.lede}><SignUp /></PageHead>
      {view && (
        <div className="wrap topic-figure">
          <figure role="img" aria-label={view.alt}>{view.view}</figure>
          <p className="story-note">An illustration with sample data.</p>
        </div>
      )}
      <div className="wrap topic-body"><div className="prose"><Sections sections={topic.sections} /></div></div>
      {topic.table && <TopicTable table={topic.table} />}
      {topic.faq && <Faq id="faq" title="Questions" items={topic.faq} />}
      <Related hrefs={topic.related} />
      <End />
    </main>
  );
}

export function IndexPage({ kind, title, lede, hrefs, trail }: {
  kind: string; title: string; lede: string; hrefs: string[]; trail: Crumb[];
}) {
  return (
    <main id="main" className="topic">
      <Breadcrumbs trail={trail} />
      <PageHead kind={kind} title={title} lede={lede} />
      <div className="wrap listing"><Cards hrefs={hrefs} /></div>
      <End />
    </main>
  );
}

export function ArticlePage({ article, kind, path, trail }: { article: Article; kind: string; path: string; trail: Crumb[] }) {
  const { date } = article;
  return (
    <main id="main" className="topic">
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': date ? 'BlogPosting' : 'TechArticle',
        headline: article.title,
        description: plain(article.description),
        url: absoluteUrl(path),
        image: absoluteUrl(SHARE_IMAGE.url),
        inLanguage: 'en',
        ...(date && { datePublished: date.iso, dateModified: date.iso }),
        author: ORGANIZATION_REF,
        publisher: ORGANIZATION_REF,
      }} />
      <Breadcrumbs trail={trail} />
      <PageHead kind={kind} title={article.title} lede={article.lede}>
        {date && <p className="legal-date">Published <time dateTime={date.iso}>{date.label}</time> by the AgOS team</p>}
      </PageHead>
      <div className="wrap">
        <div className="legal-grid">
          <nav className="legal-toc" aria-label="On this page">
            {article.sections.map((s) => (
              <Fragment key={s.title}><a href={`#${sectionId(s.title)}`}>{s.title}</a></Fragment>
            ))}
          </nav>
          <div className="prose"><Sections sections={article.sections} /></div>
        </div>
      </div>
      <Related hrefs={article.related} />
      <End />
    </main>
  );
}
