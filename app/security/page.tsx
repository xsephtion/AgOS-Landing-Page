import { TopicPage } from '@/components/Topic';
import { SECURITY_PAGE } from '@/lib/content';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/security',
  title: SECURITY_PAGE.metaTitle,
  description: SECURITY_PAGE.description,
});

export default function Security() {
  return <TopicPage topic={SECURITY_PAGE} kind="Security" trail={[{ href: '/security', label: 'Security' }]} />;
}
