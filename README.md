# AgOS landing page

Marketing page for AgOS by Zentarai Labs. Next.js 16 (App Router), React 19, TypeScript, one global stylesheet, no UI libraries.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Where things live

| Path | What |
| --- | --- |
| `app/layout.tsx` | Shell on every page: announcement, nav, footer |
| `app/page.tsx` | Home: hero, sections, FAQ |
| `app/pricing/page.tsx` | Pricing: plans, bundled-model allowances, comparison, pricing FAQ |
| `app/privacy/page.tsx` | Privacy policy |
| `app/data/page.tsx` | Data we collect and how AgOS uses it (part of the privacy policy) |
| `app/investors/page.tsx` | Investors: a summary of the pitch deck (`PITCH_DECK` in `lib/links.ts`). Not linked from the site, `noindex`; share the URL |
| `components/Legal.tsx` | Layout shared by the two legal pages |
| `components/AskDemo.tsx` | Hero demo: sample questions, answers, cited documents |
| `components/Agents.tsx` | Agents and skills ticker |
| `components/Story.tsx` | Five-step product story and its app views (`StoryScroll.tsx` syncs them) |
| `components/Onboarding.tsx` | Sign-up flow in three steps |
| `components/DeployCard.tsx` | Cloud vs Isolated Cloud |
| `app/globals.css` | Tokens (AgOS palette) and all styles |
| `lib/links.ts` | Sign-up, sign-in and contact URLs, and `SITE_URL`, the address this site is served from |
| `lib/seo.ts` | Home title and description, and `pageMetadata`, which every page uses for its canonical URL and share card |
| `app/sitemap.ts`, `app/robots.ts` | `/sitemap.xml` and `/robots.txt`. Add new pages to the sitemap's list |
| `app/opengraph-image.tsx` | The share card for every page, drawn at build time |
| `components/JsonLd.tsx` | Structured data for search engines. `Faq` emits FAQPage data from its own questions |
| `lib/content/*.ts` | Copy for the content pages: product areas, integrations, use cases, comparisons, security, docs and blog. `index.ts` lists the collections |
| `app/{product,integrations,use-cases,compare,docs,blog}/` | Routes for those pages, built from `lib/content` by `components/routes.tsx`; `app/security` is a single page |
| `components/Topic.tsx` | Templates for the content pages: breadcrumbs, related links, comparison tables, articles |
| `components/Prose.tsx` | Renders content copy: `[label](/href)` links and `**bold**` |
| `lib/plans.ts` | Plan data, mirrored from `ai-brain/src/platform/plans.ts` |
| `PRODUCT.md`, `DESIGN.md` | Product facts and design system |

## Content rules

- Every product claim comes from `ai-brain` (sources are named in code comments).
- Product views use a sample company, Northbay, and the page says so.
- No prices, customers, logos or usage numbers until real ones exist.
- To add a content page, add an entry to its file in `lib/content`. The route, the sitemap entry, the index card and the breadcrumbs follow from it. A blog post goes at the top of `blog.ts` with its date.
- Comparison pages (`lib/content/compare.ts`) describe other products only as they publish themselves. Re-check them before editing, and update `COMPARED_ON`.

## Before launch

- Confirm `https://agos.digital/signup/start` and `https://agos.digital/login` resolve (set in `lib/links.ts`).
- Confirm `support@agos.digital` receives mail.
- Serve the site at `https://agos.digital` (`SITE_URL` in `lib/links.ts`, confirmed by the owner). Canonical URLs, the sitemap and share cards point there; if the host ever changes, change it there.
- Set `NEXT_PUBLIC_GA_ID` to the GA4 measurement ID (`G-…`) in the host's environment. Without it no analytics loads and no consent banner shows. In GA, mark `sign_up_click` as a key event.
- Add the site to Google Search Console and Bing Webmaster Tools and submit `/sitemap.xml`.
- When prices are public, set `price` and `note` per tier in `lib/plans.ts` (paid tiers show "Price shown at checkout" until then).
- If a plan changes in `ai-brain/src/platform/plans.ts`, update `lib/plans.ts` to match.
- Have `/privacy` and `/data` reviewed by counsel, and add the legal entity that operates AgOS and its address.
- Build the anonymization step in ai-brain before any data is sold; the privacy policy promises it and it does not exist yet.
- When the payment processor (Dodo Payments, planned) is live, name it in `/privacy` and `/data`.
- If ai-brain changes what it collects, where it sends data or how long it keeps it, update `/privacy` and `/data` and their date.

## Deploy

Vercel: import the repo with defaults. Railway or any Node host: build with `npm run build`, start with `npm start`.
