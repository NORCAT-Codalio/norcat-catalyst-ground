## Goal
Apply the AODA audit's Part 2 markup fixes across the site without touching styling/copy, and add the Part 3 floating accessibility widget.

## Part 2 — Markup compliance (non-visual changes only)

**1. Metadata (`index.html`)**
- Keep `<html lang="en">` (already correct).
- Fix viewport to `content="width=device-width, initial-scale=1"` (drop `.0`).
- Per-page titles: add a small `<PageTitle title="…" />` helper (uses `useEffect` to set `document.title`) and drop it into every page in `src/pages/**` with a unique, location-specific title (e.g., "About — NORCAT Innovation", "Innovation Acceleration Program — NORCAT Innovation"). Default fallback stays in `index.html`.

**2. Alt text / decorative images**
- Sweep `src/**/*.tsx` for `<img>` tags. Replace placeholder/filename alts (e.g. `alt="image-v2.png"`, alt equal to a logo filename) with intent-describing text.
- Mark purely decorative imagery (signature lines, teal lines, divider graphics, icon-only `<img>`s) with `alt=""` and `aria-hidden="true"`.
- For lucide-react icons used decoratively next to labelled text, add `aria-hidden="true"`.
- CSS background images that carry meaning: wrap with a sibling `<span class="sr-only">` descriptive text node. Add a `.sr-only` utility in `src/index.css` if not already present.

**3. Visibility safeguards**
- Audit `aria-hidden="true"` usages so none wrap focusable content. Loader/overlay components: ensure they receive `aria-hidden="true"` and `inert` (or `pointer-events-none` + removed from tab order) when not active.

**4. Links & action targets**
- Icon-only buttons (footer social links already labelled; check Navigation menu toggles, close buttons in modals, carousel arrows, theme toggles, mentor card expanders) → add `aria-label`.
- Anchor tags that open menus/modals instead of navigating → switch to `<button>` where trivially possible, otherwise add `role="button"` + `aria-expanded` + `aria-controls`. Targets: `Navigation.tsx` dropdown triggers, mobile menu trigger, any `<a>` used as accordion/modal trigger.
- "Learn more" / "Read more" / "View" style links: add contextual `aria-label` derived from the adjacent heading.

**5. Semantic regions**
- Wrap page body content in `<main>` inside `src/components/Layout.tsx` (verify it isn't already) — single `<main>` per page.
- `Navigation.tsx`: ensure `<nav aria-label="Main Menu">`; mobile nav gets its own label; `Footer.tsx` nav columns get `<nav aria-label="Footer Menu">`.
- `Footer.tsx`: ensure it renders as `<footer>` (already does) — confirm no duplicate `role="contentinfo"`.

Scope: changes are attribute/wrapper-only. No class names, colors, layout, or copy will change.

## Part 3 — Accessibility widget

New component `src/components/accessibility/AccessibilityWidget.tsx` mounted once in `src/App.tsx` (inside `BrowserRouter`, outside `<Routes>`).

**Trigger**
- Fixed floating button bottom-right (z-index above app chrome), circular, accessibility icon (lucide `Accessibility`), `aria-label="Open accessibility menu"`, `aria-expanded`, `aria-controls="aoda-panel"`.

**Panel**
- Slide-in panel (role="dialog", aria-modal="false", aria-labelledby), focus-trapped while open, ESC closes, click-outside closes.
- Sections with toggle buttons (each `aria-pressed`):
  - Contrast: Dark Contrast, Light Contrast, Monochrome (mutually exclusive within Contrast group).
  - Typography: Larger Text (cycles 100/125/150/175/200%), Readable Font.
  - Visual: Highlight Links, Highlight Headings.
  - Keyboard: Enhanced Focus Indicators.
  - Reset All.

**State persistence**
- React state + `localStorage` key `aoda-prefs`. On mount, apply saved prefs by toggling classes on `document.documentElement`.

**Styling**
- New stylesheet `src/styles/aoda.css` imported from `src/main.tsx`. Contains:
  - The reference classes from the spec (`.aoda-high-contrast`, `.aoda-monochrome`, `.aoda-large-text*`, `.aoda-readable-font`, `.aoda-highlight-links`) plus `.aoda-dark-contrast` (#121212/#FFFFFF), `.aoda-light-contrast` (#FFFFFF/#000000), `.aoda-highlight-headings`, `.aoda-text-scale-{125,150,175,200}` (font-size via root `--aoda-text-scale`).
  - `.aoda-focus-ring :focus-visible { outline: 3px solid #2B6CB0 !important; outline-offset: 2px; }`.
- Widget's own UI uses Tailwind utilities consistent with existing design tokens; it is the only new visual element added.

## Out of scope
- No content rewrites.
- No design token changes.
- No backend/auth/database changes.

## Verification
- Build passes.
- Spot-check via Playwright: open homepage, toggle each widget option, screenshot to confirm classes apply and revert on Reset.
- Keyboard tab through nav + widget to confirm focus rings and aria-expanded states.
