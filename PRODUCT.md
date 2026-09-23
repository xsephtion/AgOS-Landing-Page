# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (user's choice, 2026-09-23). App Router, React 19, TypeScript, matching the AgOS services in `ai-brain/services/*`.

## Users

Primary: self-serve teams deciding whether to try AgOS for their organization (confirmed 2026-09-23). The page converts them with "Create your account" (Cloud).

Secondary: organizations that need AgOS on their own database (Isolated Cloud). They are reached through "Talk to us".

## Product Purpose

AgOS, by Zentarai Labs, is an AI operating system for an organization. It reads the documents a team already writes and answers questions from them with citations. Agents research, draft, schedule, track tasks and forecast; actions that leave the building can wait for a person to approve them.

Success for this page: a visitor understands that AgOS answers from their own documents, and creates an account.

## Positioning

- Answers are written only from pages AgOS can cite. If the sources do not contain the answer, it says so instead of guessing (`ai-brain/src/agents/workers/rag.ts`).
- Agents act, but risky actions (sending an email, booking something, calling an outside tool) can be parked in Approvals until a person says yes.
- One codebase, one schema, one migration path for both shared and isolated deployments: "a silo is a pool of one" (`ai-brain/docs/DEPLOYMENT_MODES.md`).

## Operating Context

- Sign-up flow (`ai-brain/src/api/routes/onboarding/screens.ts`): work email, then join or create the organization (a business domain lets colleagues request to join; a personal address means invitation only), then upload documents, then indexing in the open, then the first question and a cited answer.
- Seed upload: PDF, DOCX, PPTX, MD, TXT. Up to 20 files, 25 MB each. Three to five documents is enough to start. The step has no skip.
- The five places people work: Ask AgOS, Agents, Knowledge, Workspaces, People (`ai-brain/packages/agos-shell/src/nav.ts`).
- Connected tools in the codebase: Slack, Gmail, Google Calendar, Google Drive, GitHub, plus MCP servers as channels in and tools out.

## Capabilities and Constraints

- Language models: Anthropic, OpenAI, Ollama. Embeddings: Voyage, OpenAI, Hugging Face. Data: Postgres with pgvector (Supabase). Sign-in: Google, GitHub, Zentarai identity.
- Cloud (pool): self-serve sign-up, shared database with every row scoped to the organization by row-level security, bundled AI keys with a monthly cap, remote MCP tools only.
- Isolated Cloud (silo): provisioned by Zentarai staff, the customer's own database, own hostnames, bring-your-own AI keys with no monthly cap, local (stdio) MCP servers available.
- Undecided: price amounts for either plan. Do not show numbers until the user supplies them.
- Links (domain confirmed by user 2026-09-23, paths taken from the ai-brain routes): sign-up `https://agos.digital/signup/start`, sign-in `https://agos.digital/login`, contact `support@agos.digital`. All defined once in `lib/links.ts`.

## Brand Commitments

- Name: AgOS. Maker: Zentarai Labs.
- Mark: `public/agos-mark.png`, copied from `ai-brain/packages/agos-shell/src/agos-mark.png`.
- Palette and type are pinned by the user: the AgOS palette and faces from `ai-brain/packages/agos-shell/src/globals.css`.
- Voice, from the onboarding copy tests: no emoji, no em dashes, no marketing verbs, and every button says what the click does. Headline already in product: "Ask your company a question and get an answer."
- Layout reference named by the user: the section flow of tryclico.com. Structure only; no copy, imagery or code from that site is reused.

## Evidence on Hand

- None of these exist yet, so none may be shown: customers, logos, testimonials, usage numbers, benchmarks, press, prices.
- No product screenshots are on hand. Product views on the page are drawn in HTML/CSS with sample data and labeled as samples.

## Product Principles

- Cite it or say you do not know.
- A person approves what leaves.
- Say what the click does.
- Same product wherever it runs.
