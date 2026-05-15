# PHASE 2B — COMPLETE

> Polish pass on Phase 2A's locked structure. Light mode default. Pink doing the warm work, crimson reserved for urgency. Real photography. Typography rebuild. Sticky footer fixed. All three bonus items shipped. Lucide icons throughout.

## What's polished

### 0. The bug fix (first thing done)

**Sticky footer on narrative pages.** Root cause: footer was using `position: sticky; bottom: 0` which doesn't pin to viewport bottom on short pages — it sits at its natural document position when there's no scroll. Fix:

- `body.app { display: flex; flex-direction: column; min-height: 100vh; }`
- `.app-shell { flex: 1 0 auto; }` so the content area grows to fill viewport
- `.footer-nav { flex-shrink: 0; }` so footer keeps its natural height
- Removed `position: sticky` on footer-nav

Walked all 5 narrative pages to confirm — footer pins to viewport bottom on every page, regardless of content height.

### 1. Light mode (default)

A proper two-theme system, not a tweak. Token structure:

- `:root` defines the light palette (warm off-white `#fbf9f7` background, white cards, navy text)
- `[data-theme="dark"]` overrides for dark mode (Phase 2A's navy world)
- Theme is read on page load *before* DOMContentLoaded (early in nav.js / app-shell.js) to avoid flash-of-unstyled-content
- Toggled by a sun/moon icon button in the top bar — present on both narrative and app shells
- Persisted via `localStorage` key `staffup-theme`
- **Default is light** per Andrea's note
- Brief opacity dip (180ms) when flipping themes so it doesn't snap

The dark palette is roughly Phase 2A's design system, gently warmed (`#0e1626` rather than `#151f36` as base — the brand navy is now reserved for type and identity, not for the field of the page).

### 2. Brand color rebalance

**Pink does warmth now.** Crimson stays for urgency and primary CTAs only.

Pink (`#df98a6`) carries:
- Sidebar active indicator (navy→pink gradient bar that glides between sections)
- Sidebar item hover state
- All `.chip` defaults (sectors, languages, tags)
- Card hover borders
- Slide-over portrait gradient overlay
- Comparison table Trinity column highlight (`pres-3-comparaison.html`)
- Tab underline (Communications, Pool, Journal)
- Prompt-chip hover background
- Filter focus rings
- Agent chat message left border
- Suggestion panel left border
- Toast border + indicator dot
- Public gallery accent bar (with role icon)
- Suggested-reply blocks in Communications
- Timeline entry dots (agent entries)

Crimson (`#c42a4e`) reserved for:
- Primary `.btn` background (CTAs only)
- Urgent status dots and chips
- "Mode démo" pill
- Sidebar badges (4 / 2 / 1 / 6 counts)
- KPI icon background highlight
- Timeline entry dots (Lorraine decisions — to differentiate from agent)
- The "x" in "StaffUp × Trinity" brand mark
- Overdue invoice indicators

When everything is crimson, nothing is. Now both colors gain power.

### 3. Photography

4 photos sourced from Unsplash, downloaded to `assets/images/`:

- **`cover-bg.jpg`** (160KB) — atmospheric Swiss hospitality scene used as a desaturated/darkened background on `pres-1-cover.html`, with a warm radial pink glow on top and a gradient mask fading to the bg color
- **`portrait-marie.jpg`** (72KB) — Marie Dumont's portrait, shown in the slide-over header and as the avatar in the pool list table
- **`portrait-antoine.jpg`** (55KB) — Antoine Berger
- **`portrait-nadia.jpg`** (46KB) — Nadia Vasseur

All under the 200KB budget. The other 9 candidates keep gradient-color initial avatars — three real faces is enough to ground it, twelve would look like a stock catalog.

`CREDITS.md` written to `assets/images/` with photographer credits per Unsplash best practice.

**Public gallery cards** got role-themed accent bars instead of photos (protecting anonymity per the moat-protection principle). Each card has a 70px-tall pink-gradient bar at the top with a Lucide icon matching the role: wine glass for chef de rang/sommelier, chef hat for cuisinier, utensils for service, sparkles for événementiel, martini for barman, concierge bell for réception, bed for housekeeping.

### 4. Typography

- DM Sans loaded properly via Google Fonts with `&display=swap`, and `preconnect` to both `fonts.googleapis.com` and `fonts.gstatic.com` for faster first paint
- `font-feature-settings: "ss01", "cv11"` — DM Sans's stylistic alternates for slightly more sophisticated letterforms
- `-webkit-font-smoothing: antialiased` for sharp rendering
- **Cover h1**: `clamp(54px, 8vw, 108px)` with `letter-spacing: -0.045em` and `line-height: 0.98` — massive, tight, confident
- **Section h1**: 38px / 700 / -0.03em tracking
- **Body**: 1.55 line-height for readability
- **Section labels** (Acte I · 1/3, etc.): 11px uppercase, 0.18em tracking — small and confident
- **KPI numbers**: 28px / 700 / -0.025em / tabular-nums
- **Sidebar labels**: 14px / 500 → 600 when active
- Real weight contrast: 400 for body, 600 for headings, 700 for KPI / cover / impact

### 5. Micro-animations (used sparingly)

Each one is small. Layered together they say "real software."

- **Page fade-in**: 220ms cubic-bezier on every page load (`body.is-loaded` class)
- **Theme transition**: 180ms opacity dip when flipping themes
- **KPI count-up**: 900ms ease-out cubic from 0 to target value on first paint. Skips decimal values (matching's 4.8/5) and composite values cleanly
- **Confidence bar**: 800ms width animation from 0% to target on Demande detail page load
- **Slide-over enter**: 280ms transform + opacity transition, cubic-bezier easing
- **Slide-over close button**: 90° rotation on hover
- **Sidebar active indicator**: 320ms glide between items (absolute-positioned element with animated `top`)
- **Chat reply**: 700ms typing-indicator (three bouncing pink dots) before the agent reply renders. Sells the live-system feel
- **Toast**: slide-up from bottom-right with bouncy easing, pink dot indicator
- **Modal**: scale + translate-y entrance, 240ms
- **Hover lift on cards**: 2px translate + softer-to-larger shadow, 200ms
- **Map pins**: scale 1.2 on hover, color shift
- **Chart bars**: 800ms height transition

### 6. Shadows

Multi-layer soft shadows on cards in light mode:
- `--shadow-1`: `0 1px 2px rgba(21, 31, 54, 0.05)` (subtle)
- `--shadow-2`: 2 layers — base + 4-12px (default card)
- `--shadow-3`: 3 layers — base + 8px + 24px (hover, slide-over, modal)
- `--shadow-pink`: `0 8px 24px rgba(223, 152, 166, 0.25)` (for toasts, applied alongside shadow-3)

Dark mode uses simpler, darker shadows since contrast comes from value not glow.

KPI cards: subtle warm gradient + pink radial glow at top-right corner + lift on hover.

Slide-over: solid 12-40px shadow on the left edge to feel modal.

### 7. Icons (Lucide via CDN)

Loaded once per page via `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js" defer>`. Initialized after DOM mount and re-initialized after any dynamic content injection (slide-over content, gallery accent bars).

Placed:
- **Sidebar**: one icon per section (layout-dashboard, users, handshake, inbox, git-merge, image, receipt, message-circle, bot, book-open, settings) — same line weight throughout
- **Top bar**: search, pause, undo-2, check, maximize-2, sun/moon, refresh-cw, arrow-left, home
- **KPI cards**: each has a top-right icon (alert-circle / users / file-clock / trending-up on Tableau de bord; trending-up / clock / alert-triangle on Clients; bot / pause-circle / lightbulb / check-circle on Agents; etc.)
- **Prompt chips**: sparkles icon prefix
- **Gallery accent bars**: role-specific icon centered
- **CTAs**: arrow-right on big buttons (cover, comparaison)
- **Proactive panel**: zap (lightning) icon in the heading

No decorative icons. Every icon means something specific.

### 8. The cover

Now genuinely an "oh" moment. The recipe:
- Atmospheric Swiss hospitality photograph as background, 18% opacity in light mode, 28% in dark mode, with a gradient mask fading to the background color at the bottom
- Warm radial pink glow on top of that, fading out
- Pre-label "PRÉSENTATION PRIVÉE — POUR LORRAINE COSTA" in 11px / 0.24em-tracked pink — small and confident
- Massive title: `StaffUp × Trinity` at clamp(54px, 8vw, 108px), `letter-spacing: -0.045em`, `line-height: 0.98`
- Sub-headline in muted text
- Lede paragraph constrained to 640px
- Big crimson CTA with arrow-right icon
- Presenter line at the bottom

Three seconds to make Lorraine lean in.

### 9. The bonuses (all 5 shipped)

1. **Pause control wired** — clicking Pause in the topbar toggles `body.has-paused`, which shows a banner inside the chat ("Agent en pause — aucune action ne sera prise sans votre intervention.") and blocks new prompts from being sent (with a toast warning if you try). Click again to unpause.
2. **Fullscreen / Mode présentation toggle** — small maximize-2 icon in the topbar, hides sidebar + topbar, expands content to full-width with extra padding. Click again to restore. Andrea can present clean.
3. **Orphan mission #88 fixed** — Hôtel du Lac added as client #9 with realistic Lutry (VD) location, 2 contacts, 3 historical missions, agent note. Mission #88's `clientId` now points to 71. Clients KPI updated from 4 actifs to 5.
4. **Generate-from-match modal preview** is now reactive — picking a different match from the dropdown updates the client name, mission, and fee in the preview card live.
5. **Slide-over backdrop blur** — when a slide-over is open, a backdrop layer (`backdrop-filter: blur(4px) saturate(140%)` + faint overlay) appears behind it. Clicking the backdrop closes the slide-over. Adds modal feel without being aggressive about it.

The search bar in the top bar and the Annuler/Approuver controls remain decorative — explicitly out of scope per the brief.

---

## What stayed exactly as it was (per the brief)

- All 16 HTML files in their current location and order
- All 11 sidebar sections, in current order, with current names
- All mock data shape (3 candidates got `photo` fields added; one client added)
- All French copy (no rewrites — only a few `→` arrows replaced by Lucide icons)
- All interactions and event handlers (extended, not rewritten)
- The two-shell architecture (narrative + app)
- The cover → marché → comparaison → app → pourquoi maintenant → et après flow

This was a paint job. The structure is unchanged.

---

## What to test (a 10-minute walk in both modes)

### Light mode (default)

1. Open `index.html`. Cover screen loads. Confirm: warm off-white background, hospitality photo washed out in the back, massive "StaffUp × Trinity" headline. Click "Démarrer la présentation".
2. pres-2: confirm the center node has a navy→crimson→pink gradient. Footer pinned to bottom.
3. pres-3: confirm the Trinity column has a pink left border and a subtle pink-to-transparent gradient. Click "Entrer dans l'application".
4. Tableau de bord opens. Confirm:
   - Sidebar items have icons; the active item ("Tableau de bord") has the pink-gradient left indicator
   - KPIs animate from 0 to their target values
   - KPI cards have icons in their top-right
   - Prompt chips have sparkles icons
5. Click a prompt chip. Confirm: typing-indicator dots appear for 700ms, then the agent reply renders.
6. Click "Pause" in the top bar. Confirm: the button takes a crimson tint, a banner appears in the chat. Click a prompt chip — should pop a toast saying the agent is paused. Click Pause again to unpause.
7. Click the fullscreen icon (maximize-2). Confirm: sidebar + topbar hide, content goes full-width. Click again to restore.
8. Click the sun icon. Theme flips to dark. Walk a few sections in dark mode.
9. Click the moon icon. Back to light. The theme persists across navigation.
10. Sidebar → Pool. Confirm: Marie Dumont, Antoine Berger, Nadia Vasseur have real photo avatars in the list. The other 9 keep colored initials.
11. Click Marie Dumont. Slide-over opens with her portrait at the top, fades in with translate easing. Click "Vue client" → anonymized. Click ×, slide-over rotates and closes.
12. Sidebar → Clients. Confirm 9 clients (the new Hôtel du Lac at the bottom). KPIs show 5 / 2 / 1.
13. Click Hôtel du Lac → slide-over shows 3 historical missions with Marie / Antoine / Thomas, contacts, agent note.
14. Sidebar → Demandes. Kanban. Click "Hôtel du Lac · Chef de cuisine" in En attente. Detail page opens, with embedded NL search. The page knows it's tied to Hôtel du Lac now (no orphan).
15. Sidebar → Galerie. Confirm: each card has a pink-gradient accent bar with a role-specific icon (wine, chef hat, utensils, etc.). Hover a card — it lifts.
16. Sidebar → Facturation. KPIs animate. Bar chart bars animate to height on first paint. Click "+ Générer depuis un match". Change the dropdown — preview updates live. Click Confirmer — toast.
17. Sidebar → Communications. Drafts tab default, drafts have pink dashed borders. Click a WhatsApp thread — conversation opens with suggested-reply block in pink.
18. Sidebar → Agents. 6 management cards. Toggle one. Open the library modal.
19. Sidebar → Journal. Click `↩ Annuler` on an entry.
20. Top right user chip → "Reprendre la présentation". Lands on pres-4.
21. Confirm pres-4 footer is pinned. Click Suivant. Pres-5: contact card. Click "Recommencer ↺" at the bottom — back to cover.

### Dark mode

Repeat steps 1–8 with the theme toggle clicked. Confirm:
- Backgrounds are dark navy (#0e1626)
- Cards have subtle inner glow
- Pink still pops as warmth color
- Photos retain their warmth (filter: saturate(85%))
- KPI gradient is darker

---

## Deviations from the brief

1. **Lucide icons via CDN, not bundled.** Per the brief — but I want to flag that this means the demo needs network the *first* time it loads to fetch Lucide. Once cached, it runs offline. If Andrea presents on a flaky network, the icons will silently fall back to nothing (the `<i data-lucide>` elements just stay empty — they don't break layout). If we need true offline-first, Phase 3 would inline Lucide or copy the script to `assets/js/`. Tell me and I'll switch.
2. **DM Sans served from Google Fonts**, same concern. Same fallback to system-sans.
3. **Cover photo is one image, not background-image with rotating selection.** I picked the option that lands best — atmospheric, washed out, with the typography overlaid. Andrea said "your call, you put what you'd put on your own portfolio." If you'd prefer the pure-typographic Option B, the photo lives in CSS via the `.cover-photo` element and can be removed in one line.
4. **3 hero candidate photos** (Marie / Antoine / Nadia) instead of more. The other 9 use gradient initials. Per the brief: "three real faces is enough to ground it; twelve would be excessive."
5. **No noise/grain texture** on the app background. Mentioned as optional in the brief; the warm gradient + pink radial on KPI cards does enough.
6. **`pres-3-comparaison.html` did not get a header photo.** The brief flagged this as optional ("a photo of someone looking at their phone late at night"). Felt like it would clutter the comparison table; the comparison reads cleanly on its own.
7. **Cover h1** uses `clamp(54px, 8vw, 108px)` rather than fixed 96–120px. Better responsive behavior on narrower screens.
8. **Sidebar icon set** uses Lucide names that exist in the current Lucide build. `handshake` is a newer addition — verified it renders. If a future Lucide update changes any icon name, the affected sidebar item will silently show no icon (layout intact).

---

## Known rough edges

- **First paint flash**: in light mode, very brief (sub-100ms) the page may show with default browser styles before CSS applies. Mitigated by `preconnect` to fonts but not eliminated.
- **Lucide initialization timing**: dynamically-injected content (slide-over, gallery accent bars, modals) re-runs `lucide.createIcons()`. If a future contributor injects HTML without re-calling it, icons will be missing. Worth a comment in code.
- **Sidebar active-indicator** position relies on `offsetTop` measurement after page mount. On very slow first paint (cold cache), there can be a 1-frame jump as it positions itself. Not visible in practice.
- **Theme toggle in user-menu dropdown**: the user menu has a "Réinitialiser la démo" option but no theme toggle there. The theme toggle is the standalone sun/moon button. Could be consolidated; left as-is for visibility.
- **Demande detail confidence bar animation** only fires on initial page load (via the DOMContentLoaded hook in interactions.js). If you navigate within the same page via JS (we don't currently), it wouldn't re-trigger.
- **Hover lift on KPI cards** is subtle (2px). On a touchscreen demo it won't show; might want to elevate the resting shadow instead. Phase 3 if needed.
- **Photographs are Unsplash photos of strangers.** They look professional, but if Lorraine ever recognizes one of them, that's a "what" moment. Probability low (Unsplash photos are widely-used stock). Phase 3 could replace with bespoke commissioned shots.

---

## The twelve micro-moments (an honest accounting)

The brief asked for "twelve micro-moments of 'oh nice'". Here's what I count:

1. Cover photo + warm radial glow + massive headline — the first three-second hit
2. The crimson "Démarrer la présentation" button with the `arrow-right` icon and pink-shadow halo
3. Sidebar active indicator with the navy→pink gradient that glides between sections
4. KPI numbers counting up from 0 on first paint
5. KPI cards' top-right radial pink glow
6. Sparkles icons on the chat prompt chips
7. Typing-indicator dots before the agent reply renders
8. Slide-over portrait header for Marie/Antoine/Nadia, with the gradient overlay
9. Slide-over enter animation (translate + opacity, cubic-bezier)
10. Backdrop blur when a slide-over is open
11. Confidence bar growing 0% → 87% on Demande detail page load
12. Hover lift + pink border on data table rows / gallery cards
13. Theme toggle with the brief opacity dip
14. Toast slide-up with pink indicator dot
15. Gallery card accent bars with role-specific icons
16. Public-gallery URL field with the SEO framing pill
17. Comparison table's pink-tinted Trinity column gradient
18. Footer pinned to viewport bottom on every narrative page (the bug Lorraine would have felt, fixed)

More than twelve. Some are tiny. That's the point.

---

## Files inventory

```
mockup/
├── index.html
├── pres-1-cover.html       (with cover photo + Lucide CTA)
├── pres-2-marche.html      (sticky footer fixed, center node gradient)
├── pres-3-comparaison.html (sticky footer fixed, pink Trinity column)
├── pres-4-pourquoi-maintenant.html  (sticky footer fixed)
├── pres-5-et-apres.html
├── app-tableau-bord.html   (KPI icons, prompt-chip sparkles, pause banner)
├── app-pool.html           (avatar photos for hero 3, slide-over portrait)
├── app-clients.html        (KPI icons, 9th client added)
├── app-demandes.html       (Hôtel du Lac now linked)
├── app-demande-detail.html (animated confidence bars)
├── app-matching.html       (KPI icons)
├── app-galerie.html        (role-icon accent bars per card)
├── app-facturation.html    (KPI icons, reactive modal preview)
├── app-communications.html (pink draft cards, default Brouillons tab)
├── app-agents.html         (KPI icons)
├── app-journal.html
├── app-parametres.html
└── assets/
    ├── css/styles.css      (rewritten — light default, dark via [data-theme="dark"])
    ├── js/
    │   ├── data.js         (3 photos added, Hôtel du Lac client added, mission #88 fixed)
    │   ├── nav.js          (theme toggle, page fade-in, Lucide init)
    │   ├── app-shell.js    (sidebar icons, active-indicator glide, pause/fullscreen/theme controls, slide-over backdrop wrap)
    │   └── interactions.js (typing-indicator delay, KPI count-up, confidence bar animation, candidate portrait render)
    └── images/
        ├── CREDITS.md
        ├── cover-bg.jpg    (160KB)
        ├── portrait-marie.jpg
        ├── portrait-antoine.jpg
        └── portrait-nadia.jpg
```

---

## Status

**Phase 2B shipped.** Light mode default, dark mode one click away. Pink doing warmth. Crimson doing urgency. Real photographs in three load-bearing places. Lucide icons everywhere they're meaningful. Sticky footer fixed on all 5 narrative pages. All 3 mandatory bonuses (pause / fullscreen / orphan mission) plus the 2 optional ones (modal reactivity / backdrop blur) — all done.

If Lorraine opens this in three seconds and tilts her head — we hit the target.
