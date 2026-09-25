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
| `lib/links.ts` | Sign-up, sign-in and contact URLs |
| `lib/plans.ts` | Plan data, mirrored from `ai-brain/src/platform/plans.ts` |
| `PRODUCT.md`, `DESIGN.md` | Product facts and design system |

## Content rules

- Every product claim comes from `ai-brain` (sources are named in code comments).
- Product views use a sample company, Northbay, and the page says so.
- No prices, customers, logos or usage numbers until real ones exist.

## Before launch

- Confirm `https://agos.digital/signup/start` and `https://agos.digital/login` resolve (set in `lib/links.ts`).
- Confirm `support@agos.digital` receives mail.
- When prices are public, set `price` and `note` per tier in `lib/plans.ts` (paid tiers show "Price shown at checkout" until then).
- If a plan changes in `ai-brain/src/platform/plans.ts`, update `lib/plans.ts` to match.
- Have `/privacy` and `/data` reviewed by counsel, and add the legal entity that operates AgOS and its address.
- Build the anonymization step in ai-brain before any data is sold; the privacy policy promises it and it does not exist yet.
- When the payment processor (Dodo Payments, planned) is live, name it in `/privacy` and `/data`.
- If ai-brain changes what it collects, where it sends data or how long it keeps it, update `/privacy` and `/data` and their date.

## Deploy

Vercel: import the repo with defaults. Railway or any Node host: build with `npm run build`, start with `npm start`.
