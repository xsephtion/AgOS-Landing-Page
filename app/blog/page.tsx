import { indexRoute } from '@/components/routes';
import { BLOG_PAGES } from '@/lib/content';

const route = indexRoute(BLOG_PAGES);

export const metadata = route.metadata;
export default route.Page;
