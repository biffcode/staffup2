# Phase 2B — Polish Brief from Andrea

> Claude — Phase 2A is, in Andrea's words, **"basically perfect and amazing in every way."** That's the highest praise he gives. He sat with the walkthrough and called the work fabulous. The structure is locked. Everything you built stays exactly where it is. This phase is about making it **look as expensive as it actually is.**

---

## Andrea's exact direction (verbatim where it matters)

> "We can now just do a UI pass. The dashboard the colors you know it's it's very dark right now. We definitely told them to do it this way. So if we can now make it look nice somehow. Maybe grab some photos from Unsplash, find some cheat codes to make it look like we spend more time than we actually did, but and have a light mode. Yeah, you know what I'll trust you guys to figure out how to make the UI pop better, but right now it's fabulous."

> "She likes her pinks. And bolds. Font is DM Sans."

> One bug to fix: "the bottom bar where we have the next and previous buttons on page two jumps up. On page four as well. If there's not enough content it goes up, it doesn't stay put at the bottom."

That's the entire scope. Polish. Pop. Light mode. Pinks. Photos. Stickier footers. Then ship.

---

## The standard for Phase 2B

When Andrea opens this in front of Lorraine on Lorraine's laptop, the first three seconds should make her tilt her head and lean in. Not because of animations. Because the **typography breathes**, the **colors feel intentional**, and there's a **photograph of a real Swiss hospitality scene** somewhere visible that says "these people get my world."

The number to beat: **twelve micro-moments of "oh, nice"** across the full walkthrough. A typography flourish on the cover. The pink tagline that pops off the navy background. The KPI numbers that count up on first paint. The candidate slide-over that slides in with the right easing. The sidebar active-state that glides between items. The agent chat that shows a brief "typing..." before replying. The light-mode toggle that flips the whole world. Each one is small. Together they say: **this is real software, built by people who care.**

---

## 1. The bug fixes (do these first, they're cheap)

### 1a. Sticky footer on short narrative pages
On `pres-2-marche.html` and `pres-4-pourquoi-maintenant.html` (and probably others — check all five), the footer-nav with Précédent/Suivant **does not stay pinned to the bottom of the viewport when the page content is short.** It floats up under the content.

Fix: flex-column layout on `<body>`, `min-height: 100vh`, content area `flex: 1`, footer naturally pinned to viewport bottom. Or `position: sticky; bottom: 0` if simpler. Whichever lands the cleanest result. Walk all 5 narrative pages after the fix and confirm.

### 1b. Anything else you spot during the final walkthrough
You're allowed to fix small things. Truncated text, awkward wrapping, missing alt text, broken hover states. Use judgment.

---

## 2. The brand identity (reaffirmed and sharpened)

From `Research/StaffUp_ID_V0.pdf`, here are her colors:

| Role | Hex | RGB |
|------|-----|-----|
| **Navy (primary dark)** | `#151f36` | 21, 31, 54 |
| **Crimson (CTA / urgency)** | `#c42a4e` | 196, 42, 78 |
| **Soft pink (warmth, success, friendly)** | `#df98a6` | 223, 152, 166 |
| **Grey (secondary)** | `#8b8f99` | 139, 143, 153 |
| **Near-white (body text on dark)** | `#f5f5f5` | 245, 245, 245 |

**Font**: **DM Sans**, all weights 300 / 400 / 500 / 600 / 700. Load from Google Fonts properly (with `font-display: swap`). She uses DM Sans on her own brand materials. Confirm it's actually loading and not falling back to system sans.

### Andrea's specific direction: "She likes her pinks. And bolds."

This is the most important note in the brief. Right now soft pink (`#df98a6`) is barely used. Crimson is doing all the accent work. **Pink should carry the warmth in the design**:
- Hover states on candidate / client rows
- Tags and chips for sectors, languages, soft attributes
- Success toasts (currently neutral)
- Suggested-reply blocks in Communications
- Gallery card accents
- The "Brouillons agent" tab indicator
- Subtle dividers and decorative elements
- Hover lift highlights

Crimson stays restrained for **primary CTAs and urgent states only**. When everything is crimson, nothing is. When pink does the warm work and crimson does the urgent work, both gain power.

**Bold weights**: don't be shy with `font-weight: 700`. Headlines, KPI numbers, sidebar active item, candidate names in slide-overs. Bold says "this matters."

---

## 3. Light mode

Andrea wants a light mode. Build it as a **proper theme**, not a tweak.

### Light mode palette
| Role | Hex |
|------|-----|
| **Background** | `#fbf9f7` (warm off-white, NOT pure `#ffffff`) |
| **Card surface** | `#ffffff` with subtle warm shadow |
| **Primary text** | `#151f36` (the navy becomes text color) |
| **Secondary text** | `#5a6275` (warmer grey) |
| **Borders / dividers** | `#e8e3dd` (warm sand) |
| **Crimson** | unchanged `#c42a4e` |
| **Pink** | unchanged `#df98a6` (still warm on white) |
| **Soft pink tints for backgrounds** | `#fdf2f4` (very pale pink for hover states, suggested reply blocks) |

### Toggle
Top bar, top-right corner, small sun/moon icon (Lucide). One click flips the whole world. Persists via `localStorage` (key: `staffup-theme`).

### Default
**Default to light mode for the demo.** Reasoning: dark mode is the "we built this for you to use" mode (operator focus). Light mode is the "we're showing you what we built" mode (presentation freshness). Lorraine will see this in a meeting in a probably-bright room. Light mode also showcases breadth — "look, this works in both registers."

The dark mode is fully built already. You just need to invert the variables and add the toggle.

### Implementation hint
Do this with CSS custom properties on `:root` and a `[data-theme="light"]` selector that overrides them on `<html>` or `<body>`. Both narrative pages and app pages must respect the toggle. Toggle injected by `app-shell.js` (and added to narrative shell by extending `nav.js`).

---

## 4. Photography from Unsplash (the cheat code)

The fastest way to make a mockup look expensive is one well-chosen photograph. Andrea is right — go grab a few.

### Where photos go

**Cover screen (`pres-1-cover.html`)**:
Two options, your call:
- **Option A**: Atmospheric Swiss hospitality photo as a darkened/desaturated background image, with the typography overlaid. Search Unsplash for: "lake geneva restaurant", "swiss alps hotel", "hospitality service", "fine dining gastronomy". Look for warm natural light, no faces (or back-of-head only). Apply a 60–80% navy/black overlay so text remains the hero.
- **Option B**: Pure typographic cover with one accent — a soft pink decorative element (geometric shape, large letter, abstract gradient blob). Cleaner, more "luxury brand."
- Andrea has not committed. **Pick what you'd put on your own portfolio** and ship it. He trusts your taste.

**Gallery cards (`app-galerie.html`)**:
The 12 anonymous cards currently look identical. Per Phase 2A's open question: differentiate them with **role-themed accent imagery**. Options (you pick what works):
- A small photographic detail visible on each card (a wine glass for service, a chef's hand on a plate for cuisine, a hotel lobby for accueil) — heavily desaturated and tinted with soft pink gradient overlay
- Or abstract role icons (chef hat, wine glass, bell, suitcase) on soft pink gradient backgrounds, no photos
- Goal: visual rhythm across the grid, not literal portraits (we're protecting anonymity, remember)

**Hero candidates in the Pool slide-over** (Marie Dumont #247, Antoine Berger #183, Nadia Vasseur #312):
These three are the candidates Lorraine actually meets in the demo. Give them **real Unsplash portraits** — search "hospitality professional portrait", "restaurant staff portrait", "service portrait", "swiss hotel staff". Look for warm natural light, professional but human. The other 9 candidates can keep gradient initials. Three real faces is enough to ground it; twelve would be excessive and start to look like a stock-photo catalog.

**Cover for `pres-3-comparaison.html`**:
Optional — a small photograph at the top of the narrative could anchor the comparison emotionally (a photo of someone looking at their phone late at night, warm tone). Not required. Use judgment.

### Sourcing rules
- Unsplash only (free, license-clear)
- Warm natural light, no harsh studio lighting
- No corporate stock-photo vibes
- No faces of people who look like obvious models
- Download to `assets/images/` so the demo runs offline
- Compress to reasonable size (under 200KB each ideally) — this still has to run from `file://`
- Credit photographers in a small `assets/images/CREDITS.md` file (Unsplash's license doesn't strictly require it but it's good practice)

### How many photos total?
4 to 8. Quality over quantity. Andrea said "photos" plural, not "photos everywhere." A handful of well-placed images is the cheat code; flooding the design with stock photos is the opposite.

---

## 5. Pop tactics — specific and prescriptive

Apply these systematically. They're cheap and they compound.

### Typography
- **Tighten letter-spacing** on big text (h1, KPI numbers): `letter-spacing: -0.02em` to `-0.04em` for sizes 32px+
- **Increase size jumps**: cover h1 should be massive (96–120px), narrative section labels should be small (12–13px uppercase tracked +0.1em). Bigger contrast = more confident design.
- **Real weight contrast**: 300 for elegant body, 700 for impact headlines. Don't live in the 400–500 middle.
- **Line-height**: 1.5 for body, 1.1 for headlines. Loosen body for readability, tighten headlines for density.

### Micro-animations (use sparingly, but use them)
- Page fade-in on load (200ms)
- Hover lift on candidate / client cards (`translateY(-2px)` + softer shadow on hover, 150ms ease)
- Animated confidence bar 0→87% on Demande detail load (800ms cubic-bezier)
- KPI counters counting up on Tableau de bord first paint (1000ms)
- Slide-over enters with `translateX(20%)` + opacity 0 → 0 + 1, cubic-bezier easing (250ms)
- Sidebar active indicator: a small crimson bar on the left of the active item that **glides between items** when navigating (use a single element absolutely positioned, animate its `top`)
- Chat reply: 600ms "Companion réfléchit..." dots before the reply renders (sells the live-system feel)
- Toast slide-up from bottom-right with bounce easing
- Theme toggle: brief (300ms) opacity dip on body during the swap so it doesn't snap

**Restraint principle**: any one of these in isolation should feel right. All of them together at the same time should never play. Layer carefully.

### Shadows
- **Multi-layer soft shadows on cards**: `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06), 0 16px 32px rgba(0,0,0,0.04)` (in light mode). In dark mode, a faint inner glow + outer shadow for depth.
- KPI cards: slightly stronger shadow on hover, "lifting" them visually.
- Slide-over: solid drop shadow on the left edge to feel modal.

### Icons
- **Lucide icons via CDN** — one per UI element max, never decorative for its own sake.
- Sidebar: each section gets one icon (briefcase / users / inbox / handshake / list / image / receipt / message-circle / bot / book-open / settings). Same line weight throughout.
- KPI cards: small icon top-right (trending-up, calendar, file-warning, dollar-sign).
- Chat prompts: small sparkle icon on each chip.
- Status dots can be simple circles or use icons (check-circle for confirmed, alert-circle for urgent, etc.).

### Subtle backgrounds (light mode)
- Cover: warm radial gradient from very pale pink center fading to off-white
- App background: barely-perceptible warm tint, almost invisible
- Optional: a faint noise/grain texture (1–2% opacity) to add tactile feel

### Status dots & active states
- Status dots: 8px circle + soft outer glow in their color (`box-shadow: 0 0 8px currentColor`)
- Sidebar active item: navy/pink gradient left border + warm tinted background
- Active tab: pink underline that slides between tabs

### KPI cards
Currently they're plain. Make them feel like dashboard widgets:
- Subtle gradient from one corner (very light pink to white in light mode, navy to slightly-lighter-navy in dark mode)
- Icon top-right, color-coded
- Sub-label in soft pink for positive trends, grey for neutral, crimson for warning
- Hover: gentle lift

### The agent chat surface
- User message: navy bubble, right-aligned
- Companion message: white card with soft pink left border (or pink-tinted background in light mode), left-aligned
- Companion avatar: a simple geometric mark, pink fill
- "Companion réfléchit..." with three animated dots

---

## 6. What stays exactly as it is

**Do not touch the structure.** No new sections, no removed sections, no renamed files, no rewritten copy (except in the bug-fix areas if a wrap looks awful). The information architecture is locked.

Specifically untouched:
- All 17 HTML files stay where they are
- The 11 sidebar sections, in current order
- All mock data in `data.js`
- All French copy
- All interactions and event handlers
- The two-shell architecture (narrative + app)
- The cover → marché → comparaison → app → pourquoi maintenant → et après flow

**This phase is purely a paint job.** Best paint job ever, but a paint job.

---

## 7. The optional bonuses (only if Phase 2B has time)

These were Phase 2B questions in PHASE2A-COMPLETE.md. Andrea's calls:

1. **Wire the Pause control** in the topbar to toggle a "Agent en pause" banner on the chat. Cheap, visible, sells the engagement model. **Yes, do it.**
2. **Fullscreen / "Mode présentation" toggle**. Hides the topbar, expands content. **Yes, do it** if it's 30 minutes of work. Andrea will absolutely use this in front of Lorraine.
3. **Fix orphan mission #88** (Hôtel du Lac with no client record): add Hôtel du Lac as a 9th client with realistic history. Tightens the data linkage. **Yes, do it.**
4. **Make the generate-from-match modal preview reactive** to the dropdown selection. Polish detail. **Optional, only if you have time.**
5. **Slide-over backdrop blur**: add `backdrop-filter: blur(4px) saturate(140%)` on the body when a slide-over is open, with a faint overlay. **Yes, do it** — it's two lines of CSS and adds a lot of polish.

Leave the search bar inert and the intervention controls (other than Pause) decorative. Those are out of scope.

---

## 8. Process — same discipline as Phases 1 and 2A

1. **Read this brief in full.** Twice.
2. **Walk the current Phase 2A build end-to-end first** so you have it fresh.
3. **No PLAN.md needed this time.** The scope is concrete enough. Just go. But if you encounter a real fork in the road that warrants Andrea's input, write a note and bridge it via the file pattern.
4. **Build in this order**:
   - Sticky footer fix (verify on all 5 narrative pages)
   - DM Sans loading properly + light mode CSS variables + toggle
   - Brand color rebalance (pink does warmth, crimson does urgency only)
   - Photography sourced and integrated
   - Typography pass (sizes, weights, tracking)
   - Shadows and micro-animations
   - Icons via Lucide
   - Optional bonuses if time permits
5. **Walk it again in both light and dark mode** before declaring done.
6. **Write `PHASE2B-COMPLETE.md`** following the same shape as Phase 2A's: what's polished, what to test, deviations, anything you'd flag.

---

## 9. The standard, restated

Andrea will be sitting next to Lorraine. Lorraine will look at the screen. The first three seconds decide the meeting.

If the cover makes her say "ah, ok" — we lost her.
If the cover makes her say "oh" — we have her.

The difference between those two reactions is everything in this brief.

**You earned the right to do this polish pass by building Phase 2A so cleanly. Now go and make it pop.**

— Andrea
