Replace the proposed 3-card grid with a single interactive "Featured Program" panel that uses a toggle to switch between CIT, Core5, and RAII. The panel sits directly below the three Program Highlights cards on the homepage.

### Design direction

- Layout: A full-width featured band on the existing `#F2F3F6` background. Centered content with a single prominent featured card/panel and a horizontal pill toggle above it for program selection.
- Toggle control:
  - Three pill buttons: "CIT", "Core5", "RAII".
  - Active state: navy background (`#001A4D`) with white text and a subtle teal left border or underline.
  - Inactive state: transparent with navy text and a light border.
  - Smooth transition between active states using a sliding background indicator or a simple color transition.
- Featured panel anatomy:
  - Left side: large icon, program name, and a short 2-3 sentence description.
  - Right side: 2-3 key highlights/bullets and a primary CTA button.
  - Optional: a subtle background watermark or gradient field behind the panel to separate it from the cards above.
- Color scheme by program:
  - CIT: deep navy (`#001A4D`) panel with teal accent and white text.
  - Core5: innovation blue (`#003DA5`) panel with teal/white accent.
  - RAII: teal (`#00B398`) panel with navy text for contrast.
- Typography: `Open Sans` throughout, matching the page. Program name uses uppercase, font-black, tracking-tight. Body text uses white/90 on dark panels or navy/80 on the teal panel.
- Styling details:
  - Toggle pills: `rounded-full`, `px-4 py-2`, `text-sm font-bold`.
  - Panel: `rounded-2xl`, `p-8 md:p-10`, `min-h-[320px]`, `flex flex-col md:flex-row gap-8`.
  - CTA button: `rounded-full` with the existing arrow-circle pattern, using the contrasting color for the button background.
- Responsive: Toggle pills remain horizontal on all sizes. Panel stacks vertically on mobile, with content first then bullets/CTA below.
- Motion: Use `framer-motion` `AnimatePresence` to cross-fade the panel content when toggling between programs. Keep transitions under 300ms to feel snappy.

### Content

- Section eyebrow: "Programs"
- Section headline: "Featured Pathway"
- Section subhead: "Explore one of our key programs built for tough-tech founders."

Programs:

1. Critical Industrial Technologies (CIT)
   - Icon: `Cpu`
   - Description: "Build and test mining, energy, and advanced manufacturing tech in real industrial conditions."
   - Highlights: ["Underground proving ground", "FedNor & industry partnerships", "From prototype to field trial"]
   - CTA: "Explore CIT" → `/mining/critical-industrial-tech`

2. Core5
   - Icon: `Layers`
   - Description: "A five-pillar growth framework for founders ready to move from prototype to commercial traction."
   - Highlights: ["Commercialization roadmap", "Mentor & investor network", "IP & go-to-market strategy"]
   - CTA: "Explore Core5" → `/mining/core5`

3. RAII (AI Program)
   - Icon: `Brain`
   - Description: "Accelerate applied AI/ML adoption with access to compute, data, and industry validation partners."
   - Highlights: ["Applied AI/ML focus", "Compute & data access", "Industry validation partners"]
   - CTA: "Explore RAII" → `/programs/raii` (or `/programs` if RAII page does not exist yet)

### Implementation steps

1. In `src/pages/Home2.tsx`, insert the new "Featured Program" section immediately after the closing `</section>` of the Program Highlights block (currently around line 325).
2. Add a `featuredPrograms` data array with the three program objects and a `useState` index for the active toggle.
3. Build a small inline component with the toggle buttons and the animated panel.
4. Verify the panel text contrasts correctly on each of the three color backgrounds, especially the teal RAII panel.
5. Run a quick build check and verify the toggle works in the preview on desktop and mobile.