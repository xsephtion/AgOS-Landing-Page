import { indexRoute } from '@/components/routes';
import { PRODUCT_PAGES } from '@/lib/content';

const route = indexRoute(PRODUCT_PAGES);

export const metadata = route.metadata;
export default route.Page;
