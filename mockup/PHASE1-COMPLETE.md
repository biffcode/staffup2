# PHASE 1 — COMPLETE

> Structural pass: all 15 screens walkable end-to-end. Functional, not pretty. Awaiting Andrea's validation before Phase 2 polish.

## Entry point

Open **`index.html`** at the mockup root (or `pages/01-cover.html` directly). Index does an instant meta-refresh to the cover. Everything runs from `file://` — no server, no build, no install.

## File tree

```
mockup/
├── index.html                       redirect → pages/01-cover.html
├── assets/
│   ├── css/styles.css               design tokens + all primitives
│   └── js/
│       ├── data.js                  12 candidates, 8 clients, 8 missions, invoices, agents, timeline, prompts
│       ├── nav.js                   topbar, progress, footer-nav, reset, deep-link select
│       └── interactions.js          chat, approve, view toggle, gallery filter, undo
├── pages/
│   ├── 01-cover.html
│   ├── 02-marche.html
│   ├── 03-cout-cache.html
│   ├── 04-bourse.html
│   ├── 05-inversion.html
│   ├── 06-tableau-bord.html
│   ├── 07-recherche-nl.html
│   ├── 08-profil-candidat.html
│   ├── 09-agent-proactif.html
│   ├── 10-acquisition.html
│   ├── 11-galerie-publique.html
│   ├── 12-journal-bord.html
│   ├── 13-architecture.html
│   ├── 14-pourquoi-maintenant.html
│   └── 15-et-apres.html
├── UNDERSTANDING.md
├── ANDREA-ANSWERS.md
└── PHASE1-COMPLETE.md               this file
```

---

## What's built — screen by screen

### Act I — Recognition

**1. Cover (`01-cover.html`)** — title, sub-tagline, "Démarrer la présentation →" CTA, Andrea's presenter line with real email + phone.

**2. Voici votre marché (`02-marche.html`)** — three-column layout: sell side (candidate role chips) → "Vous + WhatsApp + mémoire" center node → buy side (real client chips: Carlton, Auberge du Raisin, Orllati, Beau-Rivage, FC Echallens, Belvédère Wengen). Closes with "Tout passe par vous. Pour l'instant."

**3. Le coût caché (`03-cout-cache.html`)** — list of weekly manual tasks with hour estimates (4–6h, 2h, 3–4h, 2h) and explicit "0h (pas le temps)" zeros for sourcing/relance/follow-up. Total: ≈ 12 h/sem. + everything she can't do.

### Act II — Reframe (with the moat-erosion economic argument per Andrea's brief B)

**4. Votre business, c'est une bourse (`04-bourse.html`)** — two order-book tables (candidates as sell orders, clients as buy orders), then the serious economic argument: matching becomes commodity → moat shifts to judgment / EHL network / brand. Quote: "Trinity automatise la couche commodité — pour que vous puissiez compétitionner sur la couche qui est irréductiblement vôtre."

**5. L'inversion (`05-inversion.html`)** — old vs new model diagrams (ASCII), the one-liner ("Vous parlez à votre assistant…"), three structural commitments (réversibilité, transparence, décision humaine).

### Act III — Demo (the hero of the deck)

**6. Tableau de bord (`06-tableau-bord.html`)** — split layout. Left: 4 clickable prompt chips + chat stream pre-loaded with the chefs-de-rang exchange (3 candidate cards, Proposer / Modifier / Voir profils buttons) + live text input. Right: 3 panels (Demandes en cours with status dots, Pool santé, Revenus mai 2026). Top intervention controls visible (Pause / Annuler / Approuver).

**7. Recherche NL (`07-recherche-nl.html`)** — quoted query → 3-candidate shortlist grid → full "Pourquoi Marie Dumont ?" reasoning table with 87% confidence bar → "Proposer ces 3 candidats" CTA.

**8. Profil candidat (`08-profil-candidat.html`)** — Marie Dumont #247 with **3-way view toggle**: Lorraine (full name, contact, availability bar, placement history, agent notes), Client/public (anonymized C-247 — no name, no contact, request CTA back through StaffUp), Candidate (her own view, declared availability, can update). Closes with the moat-protection paragraph.

**9. Agent proactif (`09-agent-proactif.html`)** — 4 proactive suggestions (Hôtel du Lac match, BuildCo overdue invoice, dormant pool campaign, Auberge du Raisin dormant client) each with Approve / Review / Ignore. "Approuver tout" bulk action.

**10. Acquisition (`10-acquisition.html`)** — 6 always-running autonomous agents per Andrea's brief C: Instagram, EHL Pipeline, Réactivation, Veille Clients, Référencement, Veille Presse. Each card shows agent name, "il y a Nh" timestamp, recent finding, action buttons. Activity log feel.

**11. Galerie publique (`11-galerie-publique.html`)** — 12 anonymous filterable cards. Filters: rôle / région / expérience — all wired to the JS filter that hides non-matching cards and updates the live "N profils visibles" count. Each card has "Faire une demande →" routing back through StaffUp. Closes with the desintermediation-is-impossible paragraph.

**12. Journal de bord (`12-journal-bord.html`)** — vertical timeline, 3 days deep, with **working `↩ Annuler` per entry** (toggles `.undone` class — strikethrough + reduced opacity + toast). Lorraine's own decisions marked non-undoable. Closes with "La sécurité ne vient pas de la friction. Elle vient de la réversibilité."

### Act IV — Close

**13. Architecture (`13-architecture.html`)** — vertical Trinity stack: Companion (orchestration, highlighted in crimson) → Prompt → Tools → Software. Each layer has a label, title, plain-language description. Returns to the moat-erosion argument: "Trinity automatise la commodité. Vous gardez ce qui est irréductiblement vôtre."

**14. Pourquoi maintenant (`14-pourquoi-maintenant.html`)** — quote-block urgency line, two side-by-side cards (what's happening / what happens without infrastructure), the serious economic argument restated, "La fenêtre" closing.

**15. Et après (`15-et-apres.html`)** — TaskHive partnership reframe per Andrea's brief D (no fixed quote, monthly partnership, cost-of-production + maintenance). Phase 1 deliverable cards: Pool + Match + Facturation + 1 autonomous agent (probable: Réactivation). Contact card with real email/phone + mailto CTA.

---

## Interactions wired and tested

- **Cross-page nav** — every page has the topbar with progress bar (N/15 + screen name) and a sticky footer-nav with Précédent / Suivant + a `<select>` jump-to-step + Reset démo link. All page transitions are plain anchor hrefs, so back-button works.
- **Chat (screen 6)** — 4 prompt chips dispatch via `staffupSendPrompt`; free-text input also works. The reply switch in `interactions.js` covers chef-de-rang, dormant 60j, factures, dormant clients, Carlton history, and a fallback. Reply HTML is built from `data.js` candidates.
- **Approve / Reject** — every action button (chat, screen 9, screen 10, screen 11) calls `staffupApprove(btn, message)` which disables the button, marks the parent block `.undone`, and pops a toast.
- **View toggle (screen 8)** — 3 buttons swap between `data-view-only` blocks; one click switches Lorraine / Client / Candidate panes.
- **Gallery filter (screen 11)** — 3 selects (rôle / région / expérience) call `staffupFilterGallery`, which filters by `data-*` attributes and updates the live count.
- **Undo (screen 12)** — every `↩ Annuler` button toggles `.undone` on its entry (strikethrough + opacity) and pops a toast.
- **Reset demo** — footer link clears `localStorage` (currently unused but reserved) and pops a toast.
- **Toasts** — bottom-right, auto-dismiss 1.8s, used everywhere as confirmation.

---

## What to test (a 5-minute walkthrough)

1. Open `index.html`. Confirm redirect to cover.
2. Click "Démarrer la présentation →". You should land on screen 2 with the topbar showing `2/15 · Votre marché` and the progress bar at ~13%.
3. Click "Suivant" all the way to screen 15. No dead links, no JS errors in the console.
4. **Screen 6** — click each of the 4 prompt chips: each appends a user message + an agent reply tailored to that prompt. Type something into the input and press Enter — fallback reply appears. Click "Proposer les 3 →" in the pre-loaded reply: toast appears, button disables.
5. **Screen 7** — click "Proposer ces 3 candidats →" at the bottom. Toast.
6. **Screen 8** — click each of the 3 view toggle buttons. Confirm: Lorraine shows name/contact/full history; Client shows "C-247 anonymisé" with no name; Candidate shows "Mon profil — Marie Dumont".
7. **Screen 9** — click Approve on any suggestion; the suggestion greys out. Then click "Approuver tout →" — all 4 actions fire in sequence.
8. **Screen 11** — change the rôle filter to "Cuisinier" — should narrow to 3 cards. Change région to "BE" — should reduce to the Wengen-style profile only. Reset both to "Toutes" — count returns to 12.
9. **Screen 12** — click `↩ Annuler` on any undoable entry. It strikes through and fades. Click again — it restores.
10. **Footer** — use the `<select>` jump-to-step on any page to verify deep-linking. Use "Réinitialiser la démo" to confirm toast.

Things to read carefully:
- **All French copy** — read every screen aloud. Flag anything that feels stiff, AI-translated, or salesy. I tried to keep things peer-to-peer; not all phrasing is final.
- **The bourse metaphor on screens 4, 13, 14** — confirm the moat-erosion argument lands the way you want. This is the spine.
- **The close (screen 15)** — confirm the TaskHive framing reads right, that the absence of a number doesn't feel evasive.

---

## Deviations from the brief — and why

1. **No `data/mock-data.json` file.** The brief mentioned this as optional. All mock data lives in `assets/js/data.js` as a single global. No JSON fetch (would have broken `file://`-only access on some browsers due to CORS).
2. **No Chart.js, no Lucide.** Phase 1 is structure; no decorative dependencies. Numbers shown as plain text, status as colored dots / chips. Easy to add in Phase 2 if useful.
3. **No LocalStorage persistence of demo state yet.** The reset action clears a (currently unused) key; if Phase 2 wants real persistence (e.g., remembering approved/ignored proactive suggestions across page loads), the hook is in place.
4. **Profile counts.** Per Andrea's instruction A, I avoided specific numbers and used qualitative phrasing ("des centaines", "votre pool ne cesse de grandir", "à l'échelle où vous êtes/serez"). One exception I'd flag: screen 6's right-side panels show concrete numbers (43 disponibles, 12 nouveaux, 47 dormants, 8'400 CHF, 5'200 CHF). These are *internal-system* numbers a real dashboard would have, not claims about her actual business — they read as illustrative system state, not statistical claims. Confirm this is acceptable; happy to qualitative-ize the dashboard if you'd prefer.
5. **Wengen client.** Used "Hôtel Belvédère Wengen" with `// fictional` comment in `data.js` per your instruction F.
6. **Candidate name on screen 10 referral agent.** Invented "Thomas Aubert" as the referred profile. Marked in passing as an example; not stored in `data.js` as a real candidate.
7. **Intervention controls in the topbar (Pause / Annuler / Approuver)** are visible on every page, but they currently have no handlers — they're a UI promise, not an active control. The brief specified they should be "present but not dominant"; for the demo, hover-pretty-but-mute is correct. We can wire them in Phase 2 (Pause toggles an "agent paused" badge; Annuler runs a global undo on the last action).
8. **Screen 12 timeline does not yet show a "12 entries deep" full history.** It shows 3 days × ~3 entries. Felt like a good demo density without scrolling. Easy to extend if you want more.

---

## Known rough edges (intentional — Phase 2 territory)

- **No real polish.** Spacing, rhythm, and visual hierarchy are functional but uniform. Hero screens (6, 7, 8, 9, 11) are not yet distinguished visually from supporting screens.
- **Typography is one-size-most.** All H1s look the same. H2s and H3s aren't differentiated enough. Will refine.
- **No illustrations, no SVG diagrams.** Screens 2, 4, 5, 13 use text/table layouts where a custom diagram would land harder. Phase 2 candidate.
- **No hover micro-animations**, no fade-ins, no transitions other than the toast.
- **No mobile breakpoint testing.** CSS has basic `@media (max-width: 900px)` collapses but no proper review. Lorraine will see this on a laptop screen; mobile is not the priority.
- **Cover screen is plain.** No background, no atmosphere, no visual hook. It currently looks like a serious doc, not a teaser. Phase 2 will likely want to add visual weight here.
- **The chat input on screen 6 only ever appends to the visible stream.** It doesn't scroll-snap, doesn't show a thinking state, doesn't simulate delay. Pure plumbing.
- **Screen 4's order-book tables are static**, not animated. A subtle "ticker tape" feel would sell the metaphor harder.
- **Public gallery cards (screen 11) are visually identical to each other** — same chips, same structure. Phase 2 could add subtle photo silhouettes or pattern fills to break the rhythm.
- **No favicon, no `<title>` per page is consistent in case.** Cosmetic.

---

## Open questions for Phase 2

1. **Background treatment.** Plain navy throughout is honest but flat. Should we add a subtle radial gradient, a noise texture, or keep it ascetic? My instinct: keep it flat and let typography + accent crimson do the work.
2. **Cover screen visual.** Want a real visual hook (logo lockup, abstract diagram, photo treatment)? I'd suggest a typographic-only cover with one accent device — but happy to be told otherwise.
3. **Screen 4 (bourse) — could it benefit from a real "order book" animation** (ticker, time stamps, tiny scrolling effect) to make the metaphor visceral? Worth maybe 2 hours; high-leverage for the conceptual screen.
4. **Screen 5 (inversion) — the ASCII diagrams** are functional but not beautiful. Should I replace with actual SVG diagrams in Phase 2, or keep the monospace feel (which has a "system-honest" tone)?
5. **Screen 9 / 10 proactive agent UI** — currently every suggestion looks structurally identical. Worth differentiating by agent type (color-coded left border? icon prefix?) — let me know how strongly you feel about visual variety here.
6. **Public gallery card style (screen 11)** — anonymous profiles, no photos. Should we mock up an abstract "silhouette" treatment per role (chef's hat icon, service apron, etc.) or stay text-only?
7. **Mode présentation toggle** — the brief mentions a fullscreen-friendly mode. Worth doing in Phase 2? My instinct: yes, it's 30 min of work and Andrea will appreciate it in front of Lorraine.
8. **Confidence bar (screen 7)** — should it animate from 0 → 87% on page load? Cheap, high-impact.
9. **Intervention controls in topbar** — wire them up (Pause = visual paused state on the chat; Annuler = global last-action undo; Approuver = clears one pending suggestion)? Worth doing if you think Lorraine will actually click them in the demo.
10. **Realistic chat "thinking" delay** on screen 6 — when a prompt is sent, should there be a 600ms "Companion réfléchit…" pause before the reply appears? Sells the live-system feel.

---

## Status

**Walkable end-to-end. Ready for Andrea's structural review.**

Recommended next move: do the 5-minute walkthrough above, then either green-light Phase 2 with priorities, or flag structural issues that need fixing before any polish.
