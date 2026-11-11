import { articleRoute } from '@/components/routes';
import { DOC_PAGES } from '@/lib/content';

// Pages come from lib/content; see components/routes.tsx.
const route = articleRoute(DOC_PAGES);

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
