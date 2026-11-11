import { indexRoute } from '@/components/routes';
import { DOC_PAGES } from '@/lib/content';

const route = indexRoute(DOC_PAGES);

export const metadata = route.metadata;
export default route.Page;
