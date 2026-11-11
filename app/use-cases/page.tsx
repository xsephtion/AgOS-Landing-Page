import { indexRoute } from '@/components/routes';
import { USE_CASE_PAGES } from '@/lib/content';

const route = indexRoute(USE_CASE_PAGES);

export const metadata = route.metadata;
export default route.Page;
