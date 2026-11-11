import { notFound } from 'next/navigation';
import type { Collection } from '@/lib/content';
import type { Article, Topic } from '@/lib/content/types';
import { pageMetadata } from '@/lib/seo';
import { ArticlePage, IndexPage, TopicPage } from './Topic';

// What each content route exports, built from its collection (lib/content/index.ts). The
// route files under app/ only pick a collection; every page is generated at build time, and
// a slug that is not in the collection is a 404.

type Params = { params: Promise<{ slug: string }> };

function find<T extends { slug: string }>(c: Collection<T>, slug: string): T {
  const item = c.items.find((i) => i.slug === slug);
  if (!item) notFound();
  return item;
}

const trail = (c: Collection<unknown>, slug: string, label: string) =>
  [{ href: c.base, label: c.label }, { href: `${c.base}/${slug}`, label }];

export function indexRoute(c: Collection<Topic | Article>) {
  return {
    metadata: pageMetadata({ path: c.base, title: c.metaTitle, description: c.description }),
    Page: () => (
      <IndexPage
        kind={c.label}
        title={c.title}
        lede={c.lede}
        hrefs={c.items.map((i) => `${c.base}/${i.slug}`)}
        trail={[{ href: c.base, label: c.label }]}
      />
    ),
  };
}

export function topicRoute(c: Collection<Topic>) {
  return {
    generateStaticParams: () => c.items.map((i) => ({ slug: i.slug })),
    generateMetadata: async ({ params }: Params) => {
      const t = find(c, (await params).slug);
      return pageMetadata({ path: `${c.base}/${t.slug}`, title: t.metaTitle, description: t.description });
    },
    Page: async ({ params }: Params) => {
      const t = find(c, (await params).slug);
      return <TopicPage topic={t} kind={c.label} trail={trail(c, t.slug, t.name)} />;
    },
  };
}

export function articleRoute(c: Collection<Article>) {
  return {
    generateStaticParams: () => c.items.map((i) => ({ slug: i.slug })),
    generateMetadata: async ({ params }: Params) => {
      const a = find(c, (await params).slug);
      return pageMetadata({ path: `${c.base}/${a.slug}`, title: a.metaTitle, description: a.description, published: a.date?.iso });
    },
    Page: async ({ params }: Params) => {
      const a = find(c, (await params).slug);
      const path = `${c.base}/${a.slug}`;
      return <ArticlePage article={a} kind={c.label} path={path} trail={trail(c, a.slug, a.title)} />;
    },
  };
}
