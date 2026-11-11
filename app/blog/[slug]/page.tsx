import { articleRoute } from '@/components/routes';
import { BLOG_PAGES } from '@/lib/content';

// Pages come from lib/content; see components/routes.tsx.
const route = articleRoute(BLOG_PAGES);

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
