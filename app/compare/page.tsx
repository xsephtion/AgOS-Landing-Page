import { indexRoute } from '@/components/routes';
import { COMPARE_PAGES } from '@/lib/content';

const route = indexRoute(COMPARE_PAGES);

export const metadata = route.metadata;
export default route.Page;
