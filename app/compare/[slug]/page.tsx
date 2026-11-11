import { topicRoute } from '@/components/routes';
import { COMPARE_PAGES } from '@/lib/content';

// Pages come from lib/content; see components/routes.tsx.
const route = topicRoute(COMPARE_PAGES);

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
