# PHASE 2A — COMPLETE

> Structural pass for the reframed mockup. 5 narrative screens wrapping a walkable app of 11 sidebar sections plus a separate-route mission detail. Functional, not pretty. Awaiting Andrea's review before Phase 2B polish.

## Entry point

Open **`index.html`** at the mockup root, or `pres-1-cover.html` directly. Index does an instant meta-refresh to the cover. Everything runs from `file://` — no server, no build, no install.

## File tree (flat, per Andrea's confirm Q1)

```
mockup/
├── index.html                        redirect → pres-1-cover.html
├── pres-1-cover.html                 narrative 1/5
├── pres-2-marche.html                narrative 2/5 — center node respects her real tech stack
├── pres-3-comparaison.html           narrative 3/5 — two-column comparaison + entry CTA
├── pres-4-pourquoi-maintenant.html   narrative 4/5 — condensed + two-state diagram
├── pres-5-et-apres.html              narrative 5/5 — TaskHive close
├── app-tableau-bord.html             app section 1/11
├── app-pool.html                     2/11 — list / map / calendar + slide-over
├── app-clients.html                  3/11 — list + slide-over
├── app-demandes.html                 4/11 — kanban
├── app-demande-detail.html           sub-route of app-demandes (separate URL per Andrea's confirm Q2)
├── app-matching.html                 5/11 — historical matches
├── app-galerie.html                  6/11 — public gallery (reused, framed as vitrine SEO)
├── app-facturation.html              7/11 — invoice list + mini chart + generate-from-match modal
├── app-communications.html           8/11 — Brouillons default + WA + Email + Modèles + Listes
├── app-agents.html                   9/11 — management UI + library modal
├── app-journal.html                  10/11 — expanded timeline + filters
├── app-parametres.html               11/11 — profile + integrations + équipe + marque + tarifs
├── assets/
│   ├── css/styles.css                Phase-1 tokens + new app-shell layer
│   └── js/
│       ├── data.js                   expanded (candidates, clients with contacts/history, missions with proposed/confirmed, invoices, comms threads, agent config, integrations)
│       ├── nav.js                    narrative shell only (5 steps)
│       ├── app-shell.js              NEW — injects sidebar + topbar around every app-*.html
│       └── interactions.js           chat, approve, view toggle, gallery filter, pool filter, slide-over open/close, agent toggle, library modal, undo, tabs, demandes filter
└── (planning docs)                   UNDERSTANDING / ANDREA-ANSWERS / PHASE1-COMPLETE / ANDREA-FEEDBACK-PHASE1 / PHASE2A-PLAN / ANDREA-GREENLIGHT-PHASE2A / this file
```

`pages/` and all 15 Phase-1 narrative files have been deleted. Empty `data/` and `assets/images/` folders also removed.

---

## What's built — narrative side

### `pres-1-cover.html`
Light-edit of Phase 1 cover. Title, sub-tagline, "Démarrer la présentation →" CTA to `pres-2-marche.html`, presenter line with `andrea@blackcode.ch` + `+41 79 768 67 26`.

### `pres-2-marche.html`
Marché diagram kept, **center node rewritten per Andrea's feedback**:
```
Vous
Site web · Google Workspace · WhatsApp
Excel · LinkedIn · Instagram

Toutes ces couches sont génériques.
Aucune n'est conçue pour vous.
```
Closing paragraph also rewritten so it acknowledges her stack rather than condescending to it ("Vous êtes une opératrice de marché — avec un site, un Gmail, des feuilles de calcul et WhatsApp."). The "Tout passe par vous. Pour l'instant." line is kept because it lands.

### `pres-3-comparaison.html` (NEW)
The "Coût caché" lecture is gone, replaced by a clean 10-row comparison table:
Recherche · Relance des profils dormants · Suivi des clients silencieux · Sourcing actif · Facturation · Rappels de paiement · Mise à jour des disponibilités · Opérations bilingues · Mémoire des missions · Réversibilité / audit. Each row has a neutral "Aujourd'hui" column and a concrete "Avec une plateforme StaffUp" column.

Bottom of screen: big crimson **"Entrer dans l'application →"** CTA hands off to `app-tableau-bord.html`. This is the corridor entrance.

The confusing "travail invisible" quote is cut.

### `pres-4-pourquoi-maintenant.html`
Condensed. Italic urgency quote, then a **two-state visual** (Gérable → Impossible with a crimson arrow), then the moat-erosion economic argument in three sentences. No bullet lists. Roughly half the length of Phase 1's version.

### `pres-5-et-apres.html`
TaskHive close kept verbatim from Phase 1. Partnership framing, Phase-1 modules card, monthly partnership logic, contact card with the mailto CTA.

---

## What's built — app side

### App shell (every `app-*.html`)
- **Persistent left sidebar** (240px wide, `#11192c` background) with brand, 11 section items, badges (4 on Tableau de bord, 2 on Demandes, 1 on Facturation, 6 on Communications), and a "Réinitialiser" footer link. Current section is highlighted (crimson left border + tinted background).
- **Persistent top bar** (56px tall): "Mode démo" pill, full-width search input (placeholder "Rechercher un candidat, un client, une mission…" — present but inert), agent intervention controls (Pause / Annuler / Approuver — decorative), and a user chip "Lorraine Costa" (LC avatar). Clicking the user chip opens a dropdown with "Réinitialiser la démo", **"Reprendre la présentation →"** (which goes to `pres-4-pourquoi-maintenant.html` per Andrea's confirm Q3), and "Retour à la couverture".
- **Content area** scrolls independently; sidebar and top bar are fixed.

Injected by `app-shell.js` based on the page's `<meta name="section">` tag.

### `app-tableau-bord.html`
- **KPI strip (4 cards)** — exactly the four Andrea specified with sub-labels:
  - Demandes urgentes · 2 · *+ 1 depuis ce matin*
  - Profils disponibles ce w-end · 43 · *dont 12 chefs de rang*
  - Factures en attente · 3 / CHF 3'200 · *1 en retard de 32 jours*
  - Revenu MTD · CHF 8'400 · *↑ 18 % vs avril*
- **Chat surface** (left ~60%): pre-loaded chefs-de-rang exchange, 4 clickable prompt chips, free-text input with the tagline "Vous parlez à votre assistant. L'assistant travaille pour vous." as placeholder.
- **Proactive suggestions panel** (right ~40%): 4 suggestions — Hôtel du Lac match, BuildCo overdue, dormant pool campaign, Auberge du Raisin reprise — each with Approve / Ignore.
- **Activity feed** (bottom): 6 most recent journal entries, with a "Voir le journal complet →" link.

### `app-pool.html`
- **Three view tabs**: Liste / Carte / Calendrier (switchable via JS).
- **Liste**: filterable data table — Rôle / Canton / Disponibilité filters, live count. Row click opens slide-over with the rich detail (3-way view toggle: Lorraine / Client / Candidate — all three modes implemented).
- **Carte**: hand-drawn stylized Switzerland SVG (not geo-accurate per Andrea's note — "a recognizable blob with cantonal lines is enough"). 12 pin circles, positioned by candidate `lat`/`lng`, with hover tooltips and click-to-open-slide-over.
- **Calendrier**: week grid (candidates as rows, Mon–Sun as columns). Cells colored green (disponible) or grey (indisponible), data from each candidate's `week` array. Click name to open detail.

### `app-clients.html`
- 3 status KPIs (Actifs / Tièdes / Dormants).
- Status filter.
- Data table of 8 clients (name, sector, ville, mission count, revenue cumulé, last mission, status chip).
- Row click → slide-over with full detail: dormancy alert if applicable, contacts (2–3 per client), mission history with fees + ratings, invoices for that client, agent notes.

### `app-demandes.html`
- Status filter (En attente / Proposés / Confirmé / Terminé).
- Kanban-style 4-column layout, missions distributed by status.
- Each card has client + urgency chip + role + date + note. Click → navigates to `app-demande-detail.html?id=<missionId>`.

### `app-demande-detail.html`
- Separate route per Andrea's confirm Q2. Pulls mission from query string.
- Renders brief, urgency + status chips, fee.
- **If candidates already proposed**: candidate cards with reasoning (disponibilité, profil, distance, note) and a per-candidate **confidence bar** (decreasing per position: 85%, 78%, 71%). Each has a "Proposer ✓" button (or "confirmé" badge if it's the confirmed match).
- **If no candidates yet**: an embedded NL search input pre-filled with a contextual prompt, and a chat stream below that fires the reused agent reply. This is where the screen-7 NL-search feature lives, as Andrea specified.
- If a candidate is confirmed: a "Match confirmé" panel with Clôturer la mission / Générer la facture buttons.

### `app-matching.html`
- 3 historical KPIs (Matches ce mois / Note moyenne / Part de clients récurrents).
- Filters: by client, by rating.
- Flat table of every confirmed match across all clients (~10 rows), with match ID, date, client, mission, candidate, fee, rating. Row click triggers a toast (detail modal is a Phase 2B candidate).

### `app-galerie.html`
- Framed at the top with the SEO vitrine framing + the public URL `staffup.ch/profils` + a "Voir la version publique" button (mocked toast).
- The 12 anonymized cards from Phase 1, with the 3 working filters (rôle / région / expérience) and live count.
- Closing moat-protection paragraph.

### `app-facturation.html`
- 4 KPIs (Facturé MTD / Encaissé MTD / En attente / En retard).
- **Mini bar chart** built in HTML/CSS (no library) — 6 months × 2 bars (facturé in crimson, encaissé in green), with legend and month labels.
- "+ Générer depuis un match" CTA opens a modal with a mock dropdown of confirmed matches and an auto-filled invoice preview, "Confirmer la génération ✓" fires a toast.
- Status filter + invoice data table (14 invoices with status chips, sortable visually by row).
- "Rappels automatiques" config card showing the 7j / 15j / 30j rules and a "Modifier" link.

### `app-communications.html`
- 5 tabs. **Brouillons agent is the default tab** per Andrea's note.
- **Brouillons**: 6 agent-drafted messages, each with channel chip + reason chip + recipient + preview + Envoyer / Modifier / Rejeter actions.
- **WhatsApp**: split view — list of 10 threads (avatars colored, last-message preview, unread badges). Click a thread → conversation panel with bubble-style messages (`.in` left navy, `.out` right tinted crimson) and a "Réponse suggérée par Companion" draft for threads that have a matching draft.
- **Email**: same split, 8 threads, more formal tone.
- **Modèles**: 4 templates as cards (Relance dispo / Proposition mission / Rappel paiement / Suivi placement) with usage counts and body preview.
- **Listes de diffusion**: 3 broadcast lists with member counts and last-sent dates.

### `app-agents.html`
- 4 KPIs (Agents actifs / En pause / Suggestions ce mois / Approuvées).
- 6 agent management cards. Each shows:
  - Name + Actif/Pause toggle (clickable, shows toast)
  - Description
  - Config grid: Frequency dropdown, Sensitivity slider (visual, mocked), Régions chips, Rôles chips
  - Stats: dernier passage, passages ce mois, suggestions générées / approuvées / ignorées
  - Success-rate bar (approuvées / générées)
  - Activity log (3 recent findings)
- "+ Ajouter un agent depuis la bibliothèque" CTA opens a modal showing 4 not-yet-installed agents (Suivi Satisfaction / Veille Concurrents / Préparation Saison / Optimisation Tarifs — per Andrea's suggestion) each with an Activer button.

### `app-journal.html`
- 4 author filters (Toutes / Agent / Lorraine / Annulées) + "Exporter le journal" link.
- Timeline of ~22 entries across 5 days. Each entry tagged with author chip (vous / agent). Entries with `undoable: true` have a working `↩ Annuler` button that toggles `.undone` (strikethrough + opacity) and pops a toast.
- Reversibility closing paragraph.

### `app-parametres.html`
- **Profil card**: legal name, IDE/RC, brand name, address, contact, languages.
- **Intégrations card**: 7 integrations from data — Google Workspace, Google Calendar, WhatsApp Business, Stripe, Firebase (votre site existant), Instagram (lecture seule), LinkedIn (lecture seule). Each with ✓ Connecté status, contextual note, "Configurer" link.
- **Équipe card**: Lorraine Costa as sole owner, "+ Inviter un collaborateur" CTA.
- **Marque & galerie publique card**: public URL, color swatches (navy / crimson / pink rendered inline), font, "anonymisé par défaut" chip.
- **Structure tarifaire card**: per-role fee table (Chef de rang / Cuisinier / Service / Réception × Mission courte / CDD / CDI). TVA non-assujettie, devise CHF.

---

## Interactions wired

- **Cross-page nav (narrative)**: 1/5 progress bar, Précédent/Suivant footer, step jump select, "Ouvrir l'application →" link in the topbar of every narrative page.
- **App entry**: `pres-3-comparaison.html` → `app-tableau-bord.html` via the big crimson CTA.
- **App exit**: every app page's user-menu dropdown has "Reprendre la présentation →" linking to `pres-4-pourquoi-maintenant.html`.
- **Sidebar navigation**: 11 sections + the demande detail (which keeps the Demandes item highlighted because they share the `section` meta value).
- **Chat (Tableau de bord)**: 4 prompt chips dispatch via `staffupSendPrompt`, free-text input also works, replies switch covers chefs-de-rang / dormants / factures / clients / Carlton / fallback.
- **NL search inside Demande detail**: when no candidates yet, the embedded chat input fires the same reply system into a per-page chat stream.
- **Approve / Reject / Ignore**: every action button calls `staffupApprove(btn, msg)` — disables button, marks parent block `.undone`, pops toast. Works in chat, proactive panel, draft list, suggestion list, agent cards.
- **View toggle (Pool slide-over)**: 3-way Lorraine / Client / Candidate toggle, scoped to the slide-over so multiple views don't conflict.
- **Slide-over**: open via `staffupOpenCandidate(id)` or `staffupOpenClient(id)`, close via the × button. Rendered HTML built from `data.js` records.
- **Pool view switcher**: 3 tabs (Liste / Carte / Calendrier) via `staffupPoolView`.
- **Pool filters**: Rôle / Canton / Disponibilité — all live-filter the table with `data-*` attributes, update `pool-count`.
- **Map view**: SVG with circle pins, click opens the same slide-over.
- **Calendar view**: 7-column week grid populated from each candidate's `week` array.
- **Clients filter**: status filter live-updates rows + count.
- **Demandes filter**: status filter hides non-matching kanban columns.
- **Demande detail**: pre-filled candidates render with confidence bars; "no candidates" branch fires an NL search.
- **Matching filter**: client filter + rating filter, live row hide + count.
- **Gallery filter**: 3 filters from Phase 1 — works unchanged.
- **Facturation**: status filter, generate-from-match modal, mini bar chart (height computed from `chartData` max).
- **Communications**: 5 tabs (Brouillons default). Thread click loads conversation into the right panel with the suggested-draft block when applicable.
- **Agents toggle**: Actif/Pause buttons toggle visual state + toast.
- **Agents library modal**: open via the CTA, 4 library agents listed with Activer buttons.
- **Journal**: author filter (Toutes / Agent / Lorraine / Annulées) hides non-matching entries; `↩ Annuler` works per entry.
- **Reset démo**: footer link clears `localStorage` and pops a toast.
- **User menu**: clicking the avatar opens a dropdown; clicking anywhere else closes it.

---

## What to test (a 10-minute walkthrough)

1. Open `index.html`. Lands on `pres-1-cover.html`. Click "Démarrer la présentation →".
2. Page 2 — Marché. Confirm the center node says "Site web · Google Workspace · WhatsApp · Excel · LinkedIn · Instagram" with the "Toutes ces couches sont génériques" caption underneath. Click Suivant.
3. Page 3 — Comparaison. Scroll the 10-row table. Read a couple of rows. Click the big crimson **"Entrer dans l'application →"**.
4. Tableau de bord opens with the sidebar visible on the left, top bar with "Mode démo" pill and the user chip. Confirm the 4 KPI sub-labels are present. Click a prompt chip → reply appears. Click "Approuver" on a proactive suggestion → toast + suggestion greys out. Click "Voir le journal complet →" at the bottom.
5. Journal opens. Click `↩ Annuler` on one entry — it strikes through. Click the "Agent" filter — Lorraine entries disappear. Click "Toutes" to restore.
6. In the sidebar, click **Pool de candidats**. Liste view. Click a row (e.g., Marie Dumont) → slide-over opens. Click "Vue client" → anonymized view. Click "Vue candidate" → her own view. Close ×.
7. Filter Pool by Canton=BE → only Stefan Brunner. Reset. Switch to **Carte** tab → SVG with pins. Hover one for tooltip. Click a pin → slide-over.
8. Switch to **Calendrier** → 12 rows × 7 columns of green/grey cells. Click a name → slide-over.
9. Sidebar → **Clients**. Click Auberge du Raisin → slide-over shows dormancy alert, contacts, mission history, invoices, agent note.
10. Sidebar → **Demandes en cours**. Kanban with 4 columns. Click "Hôtel du Lac" (En attente) → mission detail page with the NL search input. Click "Lancer" → 3 candidates appear in the chat below.
11. Back to Demandes → click "Carlton — Service gala" (Proposés) → mission detail with 3 pre-proposed candidates and confidence bars.
12. Sidebar → **Matching & mises en relation**. Filter by client. Filter by rating 5/5.
13. Sidebar → **Galerie publique**. Filter rôle=Cuisinier, région=VD → cards narrow down.
14. Sidebar → **Facturation**. KPIs, chart, table. Click "+ Générer depuis un match" → modal opens. Click Confirmer → toast.
15. Sidebar → **Communications**. Lands on **Brouillons** tab (the default per Andrea's note). 6 drafted messages. Click "Envoyer" on one. Switch to WhatsApp tab → click a thread → conversation + draft response.
16. Sidebar → **Agents autonomes**. 6 agent cards. Click "Pause" on one → toast. Click "+ Ajouter un agent" → library modal with 4 agents including "Agent Préparation Saison" (per Andrea's suggestion).
17. Sidebar → **Paramètres**. Integrations panel shows 7 connected services. Tarifs table.
18. Top right user chip → dropdown → "Reprendre la présentation →" → lands on `pres-4-pourquoi-maintenant.html`. Two-state diagram visible. Click Suivant → Et après. Mailto link works.

Expected behavior: no broken links, no console errors, sidebar item active state stays correct as you navigate.

---

## Deviations from the plan

1. **`app-demande-detail.html` is a 17th file**, not part of the 11 sidebar sections — it's the separate-route detail for Demandes (which we agreed in Q2). It uses the same shell and keeps the "Demandes en cours" sidebar item active.
2. **Mission "Hôtel du Lac" (#88) has `clientId: null`** because it's referenced as a mission but doesn't appear in the clients list (only 8 clients but more missions reference other names). The detail page handles this gracefully. Worth tightening in Phase 2B by adding it as a 9th client, or by routing through the existing clients.
3. **The Carte view's pin positions** are hand-placed approximations on the stylized SVG — they reflect rough cantonal density (most pins around VD, one in GE, one in BE for Wengen) but they are not real geolocations. The legend says so explicitly.
4. **Search input in the top bar is inert** — no real search wired (would have required indexing across all collections). Mentioned in the Phase 2A plan as intentional.
5. **Intervention controls (Pause / Annuler / Approuver) in the top bar remain decorative** — explicitly Phase-2B territory per the plan.
6. **The mini bar chart** is HTML/CSS (no library). Heights are computed from the max value of `chartData`. No axes, no tooltips beyond `title` attributes. Functional, not pretty.
7. **Slide-over panels don't dim the background** — no overlay, just a shadow. Cleaner during a demo where Andrea wants to keep referring to the underlying data, but worth reconsidering in Phase 2B if it feels insufficiently modal.
8. **No "rich" route history within the app** — back-button works because every section is a real page, but there's no breadcrumb beyond the active sidebar item.

---

## Known rough edges (intentional — Phase 2B territory)

- **No polish.** Every section uses the same primitives (KPI cards, data tables, filter strips, slide-over). Hero sections (Tableau de bord, Pool, Demandes, Agents, Communications) are not visually distinguished from supporting ones (Matching, Parametres).
- **Typography is one-pass.** All H1s look the same. Section-internal hierarchy is functional but not refined.
- **No background atmosphere.** Flat navy everywhere. No gradients, no textures, no illustrations.
- **No hover micro-animations** beyond what's already in the toast.
- **No empty states**, no skeleton loaders, no transitions between sections.
- **No mobile testing.** Layout collapses at certain breakpoints but I haven't reviewed mobile.
- **Sidebar badges are hardcoded** in `data.js` rather than computed from data. Easy to wire properly later.
- **No keyboard shortcuts** for sidebar nav, no `/` to focus search, etc.
- **The map SVG** is geometrically primitive — a single blob path. Phase 2B could replace with a real (still simple) cantonal outline.
- **Generate-from-match modal preview** is hardcoded (always shows the Orllati Group / Marie Dumont example regardless of dropdown selection). Phase 2B could make it reactive to the dropdown.
- **Multi-line French copy hasn't been read aloud yet.** I tried to keep peer-to-peer tone but haven't done a final pass.

---

## Open questions for Phase 2B

1. **Sidebar density.** 11 items is a lot. Should we group ("Opérations" / "Données" / "Configuration") with sub-headers, or keep flat? My instinct: keep flat for the demo (Andrea clicks fast), but be open to grouping in Phase 2B.
2. **Slide-over: dim background or not?** Currently no dim, just a shadow. A subtle overlay would feel more modal. Your call.
3. **Search input in the top bar.** Should Phase 2B wire it up to do a real cross-collection search (candidates + clients + missions), or is the chat surface enough? I lean: keep search as visual prop, since the chat surface IS the search. Confirm.
4. **Intervention controls in top bar.** Phase 2B work item: Pause = visual paused state on the chat, Annuler = global last-action undo, Approuver = clears one pending suggestion. Worth wiring? Or are they fine as decorative reminders of the engagement model? I lean: wire Pause (cheap, visible), leave the other two decorative.
5. **Mission #88's missing client record.** Worth tightening by adding Hôtel du Lac as a 9th client (would let it appear in the client list with its own dormancy state, contacts, etc.)? Or keep it as a "first-time inbound" example to vary the data? I lean: add it as a client, makes the Demandes ↔ Clients linkage cleaner.
6. **Demande detail back-button.** Should "← Retour aux demandes" be a more prominent back affordance, or is the inline link enough? Currently it's small at the top.
7. **Agent activity timeline.** Each agent card shows 3 recent activities. Should that be expandable in-place to show more history, or should clicking the agent card open a full activity view? Currently no further drill-down.
8. **The `app-demande-detail.html` separate URL** uses `?id=` query string. Works on `file://`. If the demo is ever opened from a strict server (rare), query strings still work. No worry.

---

## Status

**5 narrative screens + 11 app sections + 1 detail route = 17 walkable pages.** All wired, all populated with realistic Swiss hospitality data, all in French. The corridor in (cover → marché → comparaison) hands off to the app via a single CTA; the app's user menu hands back to "Pourquoi maintenant" → "Et après".

Ready for Andrea's structural review of depth and breadth. Phase 2B kicks off only after this is validated.
