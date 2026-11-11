---
name: AgOS Landing Page
description: The AgOS warm paper desk, with white windows floating on it and one blue for whatever is cited.
colors:
  desk: "#EDEBE7"
  desk-deep: "#E4E1DB"
  window: "#FFFFFF"
  paper: "#FBFAF9"
  paper-2: "#F5F4F1"
  paper-3: "#EFEEEA"
  track: "#F0EFEC"
  ink: "#1B1A17"
  ink-2: "#2A2823"
  ink-3: "#57534C"
  ink-4: "#6E6A63"
  ink-5: "#A5A099"
  accent: "#5B7CFA"
  accent-ink: "#4257C4"
  accent-soft: "#EEF1FF"
  moss: "#2F6B58"
  moss-bg: "#E4F2EC"
  moss-dot: "#4FA88B"
  amber: "#8A5A2B"
  amber-bg: "#FBEBD8"
  amber-dot: "#E0913F"
  brick: "#AE4237"
  brick-bg: "#FDECEA"
  violet: "#7145B8"
  violet-bg: "#F4EDFC"
  wash-peach: "#FFC49A"
  wash-pink: "#F9A8C8"
  wash-lavender: "#B7A6FF"
  wash-blue: "#9DC4FF"
  wash-apricot: "#FFD9BE"
  closing-base: "#F3ECEE"
  mark-blue: "#8FA6FF"
  mark-violet: "#C79BF2"
  mark-peach: "#FFB27A"
  face-peach: "#FFD6B8"
  face-pink: "#FBC4D8"
  face-blue: "#C8D4FF"
  ink-hover: "#34322D"
  on-ink-muted: "#CFCAC2"
  selection: "#DCE3FF"
  callout-bg: "#FDF7EE"
  callout-ink: "#7A5A34"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(40px, 5.4vw, 78px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.3vw, 58px)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.038em"
  title:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.2vw, 44px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  lede:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.45vw, 19.5px)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12.5px"
    fontWeight: 700
    lineHeight: 1.4
  ui-body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  ui-row:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13.5px"
    fontWeight: 700
    lineHeight: 1.4
  ui-meta:
    fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  tag: "5px"
  row: "12px"
  card: "16px"
  composer: "18px"
  panel: "20px"
  window: "24px"
  frame: "28px"
  field: "40px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  section: "clamp(96px, 12vw, 168px)"
  container: "1200px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.window}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "#34322D"
  button-secondary:
    backgroundColor: "{colors.window}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "48px"
    padding: "0 24px"
  button-small:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.window}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  chip:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink-3}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  chip-waiting:
    backgroundColor: "{colors.amber-bg}"
    textColor: "{colors.amber}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  cite:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.tag}"
    height: "17px"
  nav-bar:
    backgroundColor: "{colors.window}"
    rounded: "{rounded.pill}"
    height: "62px"
  window:
    backgroundColor: "{colors.window}"
    rounded: "{rounded.window}"
  composer:
    backgroundColor: "{colors.window}"
    rounded: "{rounded.composer}"
    padding: "8px 8px 8px 16px"
---

# Design System: AgOS Landing Page

## Overview

**Creative North Star: "The Warm Paper Desk"**

The page borrows the product's own physical idea: a warm paper desk (the ground) with white windows floating on it. Everything that is AgOS at work, the Ask window, the app frames, the plan card, the footer, is a white window lifted off the desk by a hairline and a long, soft shadow. Marketing type sits directly on the desk, large and dark, and never inside a box.

Density is low on the desk and high inside windows. Sections breathe; the windows are dense, specific and full of real-looking work, because the page proves the product by showing it answer, not by describing it. Colour is quiet everywhere except two places: the peach, pink, lavender and blue wash that bleeds from the top of a window, and one closing field drenched in it.

The one authored motion is the hero: a question types itself, AgOS works through visible steps, the answer streams in with citations, and the documents it cited lift and take a number.

**Key Characteristics:**
- Warm paper ground, white windows, ink text.
- One blue, reserved for what is cited or active.
- Poppins display at tight tracking; Manrope for everything read.
- Pills for every control; radius grows with the size of the container.
- Depth from hairline plus long soft shadow; no glass, no blur.
- Product illustrations drawn in HTML with sample data, always labeled.

## Colors

A restrained warm-neutral system with one working accent and a four-colour wash kept for atmosphere.

### Primary
- **Citation Blue** (`accent`): dots, bars, the Ask spark, the active rail icon, focus rings. Graphic use only.
- **Citation Blue, Text Weight** (`accent-ink`): every piece of blue text (links, citation numbers, the Talk to us link). The lighter blue fails contrast as text.
- **Citation Blue Wash** (`accent-soft`): the ground under citation chips, Task labels and the in-panel Ask answers.

### Secondary
- **Mark and face gradients** (`mark-blue` to `mark-violet` to `mark-peach`; `face-peach` to `face-pink` to `face-blue`): the agent tiles and relevance bars use the mark gradient; avatar initials sit on the lifted face gradient so ink text stays readable.
- **The Wash** (`wash-peach`, `wash-pink`, `wash-lavender`, `wash-blue`): radial gradients only, bleeding down from the top of a window at 40 to 50% opacity, behind the hero window at about 55%, and at full strength across the closing field.

### Tertiary
- **Status tones** (`moss`, `amber`, `brick`, `violet` with their `-bg` grounds): text-weight tones for chips and labels (done, waiting for approval, blocked, epic). The brighter `moss-dot` and `amber-dot` are for check marks and clock icons, never text.

### Neutral
- **Warm Paper Desk** (`desk`): the page ground.
- **Deep Desk** (`desk-deep`): the frame around an app illustration, so a window can sit on a desk that sits on the page.
- **Window White** (`window`): every window, card and primary surface.
- **Paper tints** (`paper`, `paper-2`, `paper-3`, `track`): sunken rows, chip grounds, question bubbles, segmented-control tracks.
- **Ink ramp** (`ink` to `ink-5`): headings and primary text, long answers, secondary text, meta text (the lightest tone allowed for text), and `ink-5` for empty checkboxes and dashed outlines only.
- **Hairlines**: ink at 6%, 8%, 12% and 20% alpha for dividers, card borders, control borders and dashed empty states.

- **Fixed utility tones**: `ink-hover` (primary button hover), `on-ink-muted` (secondary text on the ink tier), `selection` (text selection), `callout-bg` with `callout-ink` (the "needs review" callout), `closing-base` and `wash-apricot` (the closing field).

### Named Rules
**The One Blue Rule.** Blue means cited or active. If an element is neither, it is not blue.

**The Text-Weight Rule.** Text uses `ink-4` or darker and `accent-ink` for blue. `ink-5` and `accent` never carry text.

## Typography

**Display Font:** Poppins 500/600 (the wordmark's geometric face), self-hosted through `next/font`.
**Body Font:** Manrope, variable weight, self-hosted through `next/font`.
**Code:** the system monospace stack, used only for tool-call names.

**Character:** a geometric, slightly rounded display voice pulled tight at large sizes, over a calm humanist workhorse that stays readable down to 11px metadata.

### Hierarchy
- **Display** (600, clamp 40 to 78px, 1.03): the single hero headline.
- **Headline** (600, clamp 34 to 58px, 1.05): one per section.
- **Title** (600, clamp 30 to 44px, 1.08): story steps; plan and flow titles run smaller (20 to 34px) at -0.02 to -0.03em.
- **Lede** (400, clamp 17 to 19.5px, 1.6): the sentence under a headline, `ink-3`, 34 to 38em wide.
- **Body** (400, 16px, 1.6): FAQ answers at 16.5px/1.7 with a 68ch measure.
- **Label** (700, 11 to 13.5px): chips, meta, card keys, section labels inside product views. Numbers use tabular figures.
- **Product UI tier** (`ui-body`, `ui-row`, `ui-meta`): the product illustrations mirror AgOS's own dense scale (11 to 15px, the app's `--t-*` roles), so sizes between the page roles are expected inside a product view and nowhere else.

### Named Rules
**The Tight Display Rule.** Poppins at display sizes tracks between -0.035em and -0.04em, never tighter.

**The No Kicker Rule.** No small label sits above a marketing headline. Headlines carry themselves.

## Layout

A 1200px container with a fluid gutter (16 to 40px). Sections are separated by a fluid rhythm of 96 to 168px, always more space above a headline than below it. Headings are centered for invitation sections (Getting started, Deploy, FAQ, closing) and left-aligned where a section explains (Agents split heading, story).

The story is a two-column grid (5fr text, 7fr product view). All five product views share one sticky cell on the right and crossfade as the step nearest the middle of the viewport changes.

Breakpoints: at 1179px the hero documents move from beside the Ask window to a grid under it; at 1023px the app rail drops to icons; at 899px the nav collapses to a sheet and every multi-column layout becomes one column; at 640px product views drop their side lists and the demo thread grows taller.

## Elevation & Depth

Depth is a hairline plus a long, soft, low-opacity drop. There is no backdrop blur anywhere.

### Shadow Vocabulary
- **Control** (`0 1px 2px rgba(28,25,20,.05)`): secondary buttons, skills, cards inside boards.
- **Pill** (`0 1px 2px rgba(28,25,20,.06), 0 8px 20px -12px rgba(28,25,20,.35)`): the nav, primary buttons, the active rail row.
- **Window** (`0 1px 2px rgba(28,25,20,.04), 0 24px 50px -34px rgba(28,25,20,.35)`): cards and windows at rest.
- **Float** (`0 1px 2px rgba(28,25,20,.05), 0 34px 70px -38px rgba(28,25,20,.5)`): hero window, app frames, flow, plan card.
- **Pop** (`0 30px 70px -30px rgba(28,25,20,.55)`): menus, the mobile sheet, in-panel popovers.

### Named Rules
**The Desk and Window Rule.** The page ground is always the desk. Anything that is the product at work is a white window on it.

## Shapes

Every control is a pill. Containers round in proportion to their size: 5px tags, 12px rows, 16px cards, 18px composer, 20px panels, 24px windows, 28 to 32px frames, 40px for the closing field. Borders are 1px hairlines; dashed borders mean "empty, add something" (drop zones, the Your own skill chip, suggested edits).

## Components

### Buttons
- **Shape:** pill (999px), 48px tall, 40px in the nav.
- **Primary:** flat ink with white text, pill shadow; hover lifts 1px, lightens to #34322D and nudges its arrow 3px right.
- **Secondary:** white with a 12% hairline; hover darkens the hairline and lifts 1px.
- **Focus:** a 2px `accent-ink` outline offset 3px, on every interactive element.

### Chips
- **Style:** pill, 11.5px bold, tinted ground with the matching text-weight tone (neutral, waiting, done, blocked, accent).
- **Citation chip:** a 17px rounded square in `accent-soft` with the number in `accent-ink`, sitting 2px above the baseline.

### Cards / Containers
- **Corner Style:** by size, per Shapes.
- **Background:** window white; sunken rows in `paper`.
- **Shadow Strategy:** Window at rest, Float for hero-scale surfaces.
- **Border:** 1px hairline at 8%.
- **Internal Padding:** 14 to 16px in small cards, 22 to 44px in frames.

### Inputs / Fields
- **Style:** the composer is a white 18px-radius field with a 12% hairline and a soft under-shadow; the send button is a 38px ink circle.
- **Focus:** the whole composer takes a blue hairline and a 4px blue halo.
- **Disabled:** the send button drops to 28% opacity when the field is empty.

### Navigation
- **Style:** a floating white pill, sticky 12px from the top, 62px tall, max 920px wide. Links are 14.5px bold `ink-3` pills that fill with `paper-2` on hover.
- **Product menu:** a 590px white window listing the five places, the first spanning both columns; opens on click, closes on Escape or an outside click.
- **Mobile:** links collapse into a sheet under the bar; Create account stays in the bar.

### Plan Tier (signature)
A plan is a white window with the wash at its top: name, one line of purpose, a price band between two hairlines, a list of check-marked inclusions and one full-width button. Enterprise is the only ink window on the page, with `on-ink-muted` secondary text and peach checks. A price that is not public reads "Price shown at checkout" in bold body type rather than a display number.

### Comparison Table
One white frame, 28px radius. Group rows sit on `paper` in 13px bold `ink-4`; values are 800 weight with tabular figures; included is a `moss-dot` check, not included is an `ink-5` dash, each with screen-reader text. The header row sticks under the nav on wide screens; under 760px the frame scrolls sideways with the label column pinned.

### Meter
A window of labeled rows, each a value in tabular figures over an 8px track filled with the mark gradient. `/investors` uses it for the use of funds. `/pricing` has none: the site shows no token counts (owner, 2026-09-27).

### Ask Window (signature)
The hero demo: a white window with the wash bleeding from its top, a thread (question bubble, run steps that collapse to one line, the streamed answer with citation chips, an Answered from list), a Try row of chips and the composer. The documents it cited lift, gain a blue ring and a numbered badge.

### App Frame (signature)
A product view as the product draws itself: a deep-desk frame, a rail of the five places with the current one as a white pill, and a white window with a title bar and segmented tabs.

## Do's and Don'ts

### Do:
- **Do** put product proof inside white windows on the desk, drawn in HTML, with a visible line saying the data is a sample.
- **Do** use `accent-ink` (#4257C4) for any blue text and `ink-4` (#6E6A63) as the lightest text tone.
- **Do** keep the wash to window tops and one drenched field per page.
- **Do** make every button say what the click does (Create your account, Talk to us, Sign in).
- **Do** honour reduced motion: the demo shows its finished state and the ticker becomes a scrollable row.

### Don't:
- **Don't** fill a button with blue; primary is ink.
- **Don't** use backdrop blur or glass; depth is hairline plus shadow.
- **Don't** put a kicker or eyebrow label above a headline.
- **Don't** set text in `ink-5` or `#5B7CFA`.
- **Don't** show prices, customer names, logos or usage numbers that the product has not confirmed.
