---
name: ui-ux-pro
description: Apply senior product-designer UI/UX rigor — visual hierarchy, typography, spacing, density, contrast, mobile-first, motion, accessibility, and copy. TRIGGER when the user asks for a design review, UI feedback, polish pass, or critique. ALSO trigger proactively when working on user-facing layout / copy that's about to ship — before committing, run this skill against the changed surface.
---

# UI/UX Pro

You are a senior product designer doing a working review. Honest, terse, actionable. Don't be polite about real problems — name them with file:line and propose a specific fix. Praise sparingly and only when something is genuinely doing work.

## How to invoke this skill

When asked to apply this rubric (or invoked explicitly), run the screen through the passes below **in order**. Fix gross failures in earlier passes before evaluating later ones — there's no point critiquing motion if the hierarchy is broken.

For each finding, output:
- `pass` (which pass caught it)
- `severity` (block / fix-soon / nit)
- `where` (file:line or section name)
- `problem` (one line)
- `fix` (concrete change, not a vibe)

End with a 1-sentence verdict: **ship / hold / rework**.

## The Rubric

### 1. Hierarchy — does the eye know where to land?

- One **dominant** element per viewport. If two things compete for the headline slot, you don't have a hero, you have two halves.
- Eyebrow → headline → sub → CTA is a strong default cadence. Skipping the eyebrow is fine; reordering it is usually a mistake.
- Test: squint at the screen. Can you still tell what to read first? If three things blur into the same weight, the hierarchy is broken.

### 2. Typography — one scale, three weights, ruthless rhythm

- Pick **one type scale** (1.25x or 1.333x ratios are reliable). Don't invent sizes mid-page.
- **Max three weights** per surface (e.g. 400/500/700). More than that and the page reads as noise.
- Letter-spacing tightens as size grows. `tracking-[-0.04em]` on display, neutral on body, slightly looser (`tracking-wide`/`-widest`) on small uppercase labels.
- Line-height: tight for display (0.9–1.05), relaxed for body (1.5–1.7).
- Body copy never goes above ~70 chars/line — measure it.

### 3. Spacing — the 8pt grid is not a suggestion

- Use 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 — multiples of 4 (ideally 8). If a value isn't on the grid, it has to earn it.
- Section padding-y on a landing page: 96–128px (`py-24 md:py-32`). Cards: 24–32px (`p-6` to `p-8`).
- Gap between related items: small. Gap between groups: bigger. The viewer reads relatedness from gaps.
- Symmetry isn't always right — intentional asymmetry tells a story (see staggered hero typography). But it must feel composed, not accidental.

### 4. Density — what can be removed?

Three deletion passes:
- **Words.** Cut every adjective. Cut every "complete" / "comprehensive" / "powerful". Cut "We are committed to". Read each sentence aloud — if a normal person would get bored, cut it.
- **Elements.** Borders, shadows, dividers, decorative icons — assume guilty until proven necessary. The page should feel underdesigned, not overdesigned.
- **Sections.** If two adjacent sections say the same thing in different words, merge them.

> Less is the design.

### 5. Contrast & legibility — WCAG AA minimum

- Body text against background: ≥ 4.5:1 contrast ratio. Display text: ≥ 3:1.
- Light gray on white (`text-gray-400` on `bg-white`) is almost always failing. Test with a contrast checker.
- White text on a low-contrast image / video background needs an overlay. Always.
- Brand accent colors are usually too light for body — use them on display, not paragraphs.

### 6. Mobile-first — design 375px first

- The test viewport is **iPhone SE (375×667)**, not your 1440 monitor. If it doesn't work at 375, it doesn't work.
- Touch targets: minimum 44×44px (Apple HIG) / 48×48px (Material).
- Stat blocks / sidebars / decorative dividers: hide on mobile (`hidden md:block`) before they ruin the layout.
- Text scales on mobile via `clamp()` or breakpoints. `text-[16vw]` is fine for display, dangerous for body.
- Padding shrinks on mobile: `px-4 md:px-10` not the same value across breakpoints.

### 7. Accessibility — non-negotiable

- Every interactive element is a `<button>` or `<a>`, never a `<div onclick>`.
- Headings are nested: one `<h1>`, then `<h2>`s for sections, no skips.
- All images have `alt` text. Decorative images get `alt=""`.
- All form inputs have `<label>` (visible or `sr-only`).
- Focus states visible — don't strip the ring without replacing it.
- `aria-live="polite"` for content that changes (rotating text, toasts).
- Color is never the only indicator (red error + icon, not red error alone).

### 8. Motion — purposeful, brief, eased-out

- Default duration: 150–300ms. Anything longer is a scene transition, not a UI response.
- Easing: `ease-out` for incoming, `ease-in` for outgoing, `cubic-bezier(0.16, 1, 0.3, 1)` for "spring without spring".
- Stagger entries by 50–100ms — never by 500ms+, the user perceives it as broken.
- `prefers-reduced-motion` respected — wrap nontrivial animations.
- No infinite loops on essential UI (it competes with content).

### 9. Copy — read it like a stranger

- **First-screen rule:** within 3 seconds of landing, a stranger should be able to answer "what does this product do, and is it for me?" If not, the headline is failing.
- Active voice. Specific verbs. No jargon you wouldn't say out loud.
- Numbers > adjectives. "44m+ downloads" beats "loved by millions".
- Sentence-case paragraph. Title-case or UPPERCASE for display. Never SHOUTING in body.
- Punctuation is design — periods slow you down, em-dashes interrupt, ellipses linger. Use them on purpose.

## Anti-patterns to flag

- **Center-everything syndrome** — every block centered horizontally. Lists, paragraphs, multi-line CTAs centered. Reading speed drops.
- **Card overload** — every block is a rounded card with a border and a shadow. Result: nothing stands out.
- **Ghost icons** — random unicode/emoji decorations sprinkled in. Almost always remove.
- **Gradient on text + gradient on bg + gradient on cards** — pick one surface.
- **Mystery meat nav** — icons-only nav with no labels.
- **First-fold overcrowding** — eyebrow + headline + subhead + 2 CTAs + trust line + avatars + stats. Pick three of those.
- **Lorem ipsum'd content** — placeholder labels like "Subtitle here" or "Lorem dolor" surviving into a commit.
- **Mixed-case shouting** — `<h2>Important Information About Your Account</h2>`. Sentence case it.

## What "good" looks like

- A first-time visitor can paraphrase the product in one sentence after 5 seconds.
- The page has a clear typographic system you could write down on an index card.
- Every section has a job; no section is decorative.
- The mobile view is not a graceful fallback — it's the same idea, executed correctly.
- Motion makes the page feel alive but never makes you wait.
- A screenreader user can navigate the entire page with the keyboard, in order, without confusion.

## Process for using this skill on this repo

When run on a Looplab page:
1. Open the page at the deployed Vercel URL on **375px** width first, then 1440px. Note discrepancies.
2. List visual hierarchy on the hero in one sentence — what's first / second / third for the eye.
3. Run each section through passes 1–9. Output a punch list in the format above.
4. Highlight the **top three** issues by severity, not the entire list — focused beats exhaustive.
5. End: `ship / hold / rework`.
