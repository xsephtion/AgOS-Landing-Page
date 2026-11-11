// Every outbound URL on the page, in one place. Domain confirmed by the owner (agos.digital);
// the paths are the ai-brain routes (/signup/start, /login).
export const SIGN_UP = 'https://agos.digital/signup/start';
export const SIGN_IN = 'https://agos.digital/login';
export const SUPPORT_EMAIL = 'support@agos.digital';
export const CONTACT = `mailto:${SUPPORT_EMAIL}`;
// Where this site is served (owner, 2026-11-10). Canonical URLs, the sitemap, robots.txt and
// share cards are built from it, so it has to be the address search engines should list, with
// no trailing slash.
export const SITE_URL = 'https://agos.digital';
// The investor pitch deck: a public, read-only page in the Zentarai knowledge base that
// /investors summarizes. The owner can revoke that link at any time; if it changes, change it here.
export const PITCH_DECK = 'https://agos.agos.digital/public/kb/pages/43a9a7b7-c868-4228-9d76-08d6a92d33a2';
