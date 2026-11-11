import { indexRoute } from '@/components/routes';
import { INTEGRATION_PAGES } from '@/lib/content';

const route = indexRoute(INTEGRATION_PAGES);

export const metadata = route.metadata;
export default route.Page;
