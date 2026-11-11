import { topicRoute } from '@/components/routes';
import { USE_CASE_PAGES } from '@/lib/content';

// Pages come from lib/content; see components/routes.tsx.
const route = topicRoute(USE_CASE_PAGES);

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
