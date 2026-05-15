# PHASE 2A — Plan

> Structural pass for the reframed mockup. Builds the walkable app + 5 narrative screens, no polish. Awaiting Andrea's green light before any code.

---

## 1. What I internalized from the feedback

The center of gravity moves from **deck-with-demo-fragments** to **app-with-deck-wrapping**. The app is the firepower proof. The narrative is a thin corridor in and out of it. The standard is "twelve ohs in fifteen minutes" — each sidebar section must feel like a real product surface, not a slide pretending to be one.

I'm not starting over. I'm reusing the candidate data, the 3-way view toggle, the proactive suggestion format, the agent cards, the gallery filter, the journal timeline, the TaskHive close, the design tokens, and the interactions plumbing. The container changes, the pieces stay.

The change I want to flag explicitly so Andrea can correct me before I commit: **the new "Comparaison manuel / Trinity" screen replaces the "Coût caché" lecture entirely** (not amends it). And the **bourse / inversion / architecture screens are gone from the deck file tree**, not just hidden — Phase 1's `04-bourse.html`, `05-inversion.html`, and `13-architecture.html` will be deleted from `pages/`. Andrea keeps these arguments verbally and can resurface them in conversation; we don't need a hidden screen rotting in the repo.

---

## 2. Final structure (matches Andrea's spec)

```
mockup/
├── index.html                              redirect → pres-1-cover.html
├── pres-1-cover.html                       (kept, light edits)
├── pres-2-marche.html                      (kept, fix center node)
├── pres-3-comparaison.html                 (NEW — replaces coût caché)
├── pres-4-pourquoi-maintenant.html         (kept, condensed)
├── pres-5-et-apres.html                    (kept verbatim)
├── app-tableau-bord.html                   (the demo entry — sidebar item 1 of 11)
├── app-pool.html
├── app-clients.html
├── app-demandes.html
├── app-matching.html
├── app-galerie.html
├── app-facturation.html
├── app-communications.html
├── app-agents.html
├── app-journal.html
├── app-parametres.html
├── assets/
│   ├── css/styles.css                      (kept tokens, add app-shell rules)
│   └── js/
│       ├── data.js                         (expanded — see §4)
│       ├── nav.js                          (rewritten — see §3)
│       ├── app-shell.js                    (NEW — injects sidebar + topbar)
│       └── interactions.js                 (kept, extended for new sections)
```

**Total files: 5 narrative + 11 app = 16 HTML files.** Same order of magnitude as Phase 1, very different shape.

I'll delete `pages/` entirely and move everything to the mockup root. Reason: with the deck/app split, the old `pages/` prefix is no longer meaningful, and flat URLs read better in the address bar during a live demo (`…/app-pool.html` vs `…/pages/app-pool.html`). Phase 1's `01-…`..`15-…` pages get removed in the same pass.

---

## 3. Navigation model

Two distinct shells:

**Narrative shell** (5 screens, `pres-N-*.html`):
- Same topbar style as Phase 1 but the progress bar shows 1/5..5/5, not 1/15.
- Step 3/5 (Comparaison) has a "Entrer dans l'application →" CTA that hands off to `app-tableau-bord.html`.
- The app's "Reprendre la présentation →" exit hands off to step 4/5 (`pres-4-pourquoi-maintenant.html`).
- Footer-nav with Précédent/Suivant remains.

**App shell** (11 sections, `app-*.html`):
- Persistent **left sidebar** (240px) listing the 11 sections, highlighting the current one, injected by `app-shell.js`.
- Persistent **top bar**: StaffUp brand on the left, search input in the middle (placeholder "Rechercher un candidat, un client, une mission…", non-functional in 2A but visibly present), agent intervention controls (Pause / Annuler / Approuver) on the right, then a user menu chip (avatar circle + "Lorraine Costa") that opens a small dropdown with "Reprendre la présentation →".
- No N/15 counter. Instead a discreet "Mode démo" pill in the top bar.
- Content area scrolls; sidebar and top bar are fixed.

This means each `app-*.html` file is small: it declares which section it is (via a `<meta name="section">` tag), and contains only that section's content. `app-shell.js` reads the meta and builds the sidebar/topbar around it. DRY.

I'll keep the existing nav.js for narrative pages, and add a separate `app-shell.js` for the application pages. Cleaner than overloading one script with two modes.

---

## 4. Data model — what gets expanded

Phase 1's `data.js` had: candidates (12), clients (8), missions (8), invoices (6), proactive suggestions (4), agents (6), timeline (3 days), prompts (4).

For Phase 2A I'll keep all of those (renaming nothing — same IDs, same names, same shape) and add:

- **Candidate** records get: avatar initials, photo placeholder color, lat/lng (approx, for the map view — illustrative, not exact geo), week-grid availability (7 booleans per candidate for the calendar view), referrals (who referred them), tags (free-form chips).
- **Client** records get: 2–3 contact people per client (name, role, email/phone partially masked), full mission history (5–10 per client across the active ones), agent notes (short), dormancy status with a "last contact" date, primary location coords.
- **Missions** expand from 8 → 12; each with: brief text, proposed candidates with reasoning blurbs (reusable from screen 7), confirmed candidate (or null), outcome rating (or null), status, dates, fee charged.
- **Invoices** expand from 6 → 14; each linked to a match, with: amount, date sent, date paid, status, days overdue if any, reminder history.
- **Communications** (NEW): ~20 mock threads — WhatsApp and Email mixed, candidate-bound and client-bound, some recent, some old. Each thread has 3–8 messages, the most recent visible inline. A subset are "drafted by agent, awaiting approval" — these are the operational hot list.
- **Broadcast lists & templates** (NEW): 4 templates (relance disponibilité, proposition mission, rappel paiement, suivi placement) shown as cards with "Utilisé 23 fois ce mois" stats; 3 broadcast lists (Pool VD chefs de rang / Pool événementiel GE / Clients dormants).
- **Agent config** (NEW): each of the 6 agents gets: active/paused state, scan frequency, scope (regions + roles), sensitivity threshold, last run, runs this month, suggestions generated, suggestions approved, suggestions ignored.
- **Integrations status** (NEW): Google Workspace ✓, Google Calendar ✓, WhatsApp Business ✓, Stripe ✓, Firebase (her existing data) ✓, Instagram (lecture seule) ✓ — for the Paramètres section.
- **Journal entries** expand from ~10 → ~25, spread across 5 days, mixing agent actions and Lorraine decisions.
- **Public gallery** stays as-is (12 anonymous cards) — already correct.

Total file size of `data.js` will roughly triple. Still a single file, still a single `window.STAFFUP_DATA` global, no fetching, runs from `file://`.

---

## 5. The 5 narrative screens — what each contains

### `pres-1-cover.html` — Couverture
Phase 1 cover, basically unchanged. Title, sub-tagline, "Démarrer la présentation →" pointing to `pres-2-marche.html`. Andrea's email + phone in the presenter line.

### `pres-2-marche.html` — Le marché
Phase 1 marketplace diagram **with the center node fixed** per Andrea's instruction. The "Vous + WhatsApp + mémoire" becomes:

> **Vous**
> Site web · Google Workspace · WhatsApp · Excel · LinkedIn · Instagram
> *Toutes ces couches sont génériques. Aucune n'est conçue pour vous.*

Same three-column layout. Same sell-side / buy-side framing. Closing sentence kept ("Tout passe par vous. Pour l'instant.") because it lands.

### `pres-3-comparaison.html` — Aujourd'hui / Avec Trinity (NEW, replaces coût caché)
A clean two-column table, ~10 rows. Each row is one operation. Left column "Aujourd'hui (manuel)" — what it looks like today, neutral tone, no condescension. Right column "Avec une plateforme StaffUp" — what it looks like with the system. Concrete, tactile, 30-second read.

Draft rows (final wording during build):

| Opération | Aujourd'hui | Avec une plateforme StaffUp |
|---|---|---|
| Recherche de candidats | Recherche mentale + WhatsApp + Excel | Recherche en langage naturel sur tout le pool |
| Relance des profils dormants | Quand vous y pensez | Cycle mensuel automatique, vous validez |
| Suivi des clients silencieux | À l'instinct, en fin de semaine | Alerte automatique à 45/60/90 jours |
| Sourcing actif (Instagram, EHL, LinkedIn) | Quand vous avez du temps | Agent dédié, 24/7, brouillons prêts |
| Facturation après mise en relation | Manuelle, parfois oubliée | Générée automatiquement depuis le match |
| Rappels de paiement | À l'œil nu | Auto-envoyés selon vos règles |
| Mise à jour des disponibilités | Refaite à chaque demande | Stockée, consultable, à jour |
| Opérations bilingues (FR/DE) | Vous ralentit | Même flux, deux langues |
| Mémoire des missions passées | Vous, et seulement vous | Historique structuré, consultable |
| Réversibilité / audit | Inexistant | Chaque action tracée, annulable |

Bottom of screen: "Entrer dans l'application →" CTA, big and crimson. This is the handoff.

Cut the confusing « travail invisible » quote per feedback.

### `pres-4-pourquoi-maintenant.html` — Pourquoi maintenant
Condensed version. Drop the bullet lists. Keep:
- The italic urgency line ("À l'échelle où vous êtes aujourd'hui, c'est gérable. À l'échelle où vous serez demain, vous serez le goulot.")
- One visual: a simple two-state diagram (current scale → future scale) using two cards, one labeled "gérable manuellement" with a small green dot, one labeled "impossible manuellement" with a crimson dot, arrow between them.
- The serious economic argument restated in ~3 sentences (no bullets): "L'automatisation du matching va arriver. Soit elle vient de vous, soit elle vient d'un concurrent qui la construit pendant que vous travaillez la nuit. Mieux vaut la déployer sous votre marque, avec votre goût."

Half the length of Phase 1's version.

### `pres-5-et-apres.html` — Et après
Phase 1 Et après, kept verbatim. TaskHive partnership framing, modules in Phase 1 delivery, contact card with real email + phone, mailto CTA.

---

## 6. The walkable app — what each section contains

The depth bar: a section is done when clicking through it for two minutes turns up real-looking content, not stubs. I'm aiming for **each section feeling like one well-built screen of a real product**.

### `app-tableau-bord.html` — Tableau de bord (entry view)

- **KPI strip** (4 cards, top): "Demandes urgentes" (2), "Profils disponibles ce w-end" (43), "Factures en attente" (3 / CHF 3'200), "Revenu MTD" (CHF 8'400).
- **Agent chat surface** (middle, left ~60%): the chat from Phase 1 screen 6, with pre-loaded chefs-de-rang exchange and the 4 prompt chips. Reused interactions.
- **Proactive suggestions panel** (middle, right ~40%): the 4 suggestions from Phase 1 screen 9 — Hôtel du Lac, BuildCo overdue, dormant pool, Auberge du Raisin. Each with Approve / Review / Ignore.
- **Activity feed** (bottom): 6 most recent journal entries with relative timestamps and links into the Journal section.

### `app-pool.html` — Pool de candidats

- **View toggle** at top: Liste / Carte / Calendrier (three tabs).
- **Liste (default)**: filterable table of 12+ candidates. Columns: avatar initials, name, role chips, location, experience, availability indicator (dot), last placement, rating. Filters above: rôle, canton, disponibilité, expérience. Click a row → opens a slide-over panel (or expands inline — TBD during build, leaning slide-over) with the Marie Dumont detail layout + 3-way view toggle from Phase 1 screen 8.
- **Carte**: stylized Switzerland outline (SVG, hand-drawn lines, no real geo library) with pins positioned per candidate. Pins clustered by canton. Hover a pin → name + role tooltip. Click → opens the same detail panel as in Liste.
- **Calendrier**: a week grid (rows = candidates, cols = next 7 days). Cells colored: green = disponible, grey = indisponible, amber = à confirmer. Click a candidate row → detail panel.

### `app-clients.html` — Clients

- **List view (top)**: 8 clients in a table. Columns: name, sector, ville, last mission ago, total revenue generated, status chip (actif / tiède / dormant). Filter by status.
- **Client detail (slide-over on click)**: 
  - Header: name, sector, location, "Reprendre contact" CTA.
  - **Mission history** (5–10 missions): date, role, candidate, fee, rating.
  - **Contacts** (2–3 people): name, role, phone/email partially masked.
  - **All invoices**: status, amount, date.
  - **Agent notes**: short free-form notes ("Préfère être contactée par WhatsApp", "Demande Marie en priorité pour les galas").
  - Dormancy warning if applicable.

### `app-demandes.html` — Demandes en cours

This is where the matching engine lives. Per Andrea's feedback, the NL search + reasoning (Phase 1 screen 7) becomes a feature here.

- **Status columns or filter chips at top**: En attente de match / 3+ candidats proposés / Confirmé / Terminé.
- **List of requests** (12 missions): each card shows client, role needed, dates, urgency chip, status. Click → opens detail.
- **Request detail (slide-over)**:
  - Brief from the client.
  - **NL search box** with the pre-filled prompt for this request (e.g., "Trouve-moi trois chefs de rang…"). Click "Lancer" → triggers the existing chat reply showing the 3-candidate shortlist with reasoning (reused from Phase 1 screen 7).
  - **Why each candidate?** panel — collapsible per candidate, reusing the 87% confidence bar pattern.
  - **Propose / Confirm** workflow buttons.

### `app-matching.html` — Matching & Mises en relation

Historical record of confirmed matches.

- Filterable list (by client, by candidate, by date range, by rating). Columns: match ID, candidate, client, mission, date, fee, client rating.
- Click a row → small modal/slide-over with the full match story: brief, candidates proposed, who was chosen, why, outcome, client feedback, invoice link.
- Top stats: total matches this month, average rating, repeat-client share.

### `app-galerie.html` — Galerie publique

Phase 1 screen 11, reused. Framed at the top as: "Votre vitrine SEO publique — anonymisée par défaut, indexable par Google, désirable par les clients potentiels." With a "Voir la version publique" button that visually mocks a new-tab open (no real new tab in 2A — just a toast). The filterable gallery itself is unchanged.

### `app-facturation.html` — Facturation

- **Top stats row**: Facturé MTD, Encaissé MTD, En attente, En retard. Plus YTD totals to the right.
- **Mini bar chart** (HTML/CSS, no library): 6 months of facturé vs encaissé. Each month is two stacked bars, labeled, no axes — illustrative.
- **Invoice list** (14 invoices): table with status chips, amounts, dates, days overdue. Filter by status. Click → invoice detail panel showing the originating match, the line items, the reminder history, payment status.
- **"Générer facture depuis match" CTA**: opens a small mock workflow — pick a confirmed match from a dropdown, see auto-filled invoice draft, "Confirmer la génération" button (toast on confirm).
- **Automatic reminders config**: a small card showing "Rappel à 7j, 15j, 30j · ton cordial puis ferme" with a "Modifier les règles" link.

### `app-communications.html` — Communications

Critical per Andrea — she lives in WhatsApp; the app must show it plugs in, not replaces.

- **Tabs at top**: WhatsApp / Email / Brouillons agent / Modèles / Listes de diffusion.
- **WhatsApp**: list of ~12 recent threads (mix of candidates and clients). Each row: avatar, name, last message preview, time, unread badge. Click → opens conversation panel with the last 3–8 messages visible, plus a "Réponse suggérée par Companion" pre-drafted reply with Approve / Edit / Reject.
- **Email**: same structure, ~8 threads, slightly more formal.
- **Brouillons agent**: the hot list — 5–6 agent-drafted messages awaiting Lorraine's approval. Each shows: recipient, channel, preview, "why" tag (e.g., "réponse à demande client", "relance dormante", "remerciement post-mission"), Approve / Edit / Reject.
- **Modèles**: 4 message templates as cards. Each with title, preview, usage stats, "Modifier" link.
- **Listes de diffusion**: 3 broadcast lists with member counts and "Envoyer un message à cette liste" CTA.

### `app-agents.html` — Agents autonomes

Management UI per Andrea. Each of the 6 agents from Phase 1 screen 10 becomes a card with full controls.

- **Top summary**: "6 agents actifs · 2 en pause · 47 suggestions générées ce mois · 31 approuvées".
- **Agent cards** (6, two-column grid):
  - Header: name + status toggle (Actif / Pause).
  - **Description**: what this agent does.
  - **Config form** (editable in-page, change is mocked): scan frequency (dropdown), scope (regions + roles checkboxes), sensitivity (slider — visual only).
  - **Stats**: last run, runs this month, suggestions generated / approved / ignored, with a tiny success-rate bar.
  - **Recent activity log** (3 latest findings, collapsed). Expand to see more.
- **+ Ajouter un agent** card at the bottom (mocked — opens a "Bibliothèque d'agents" modal showing 4 not-yet-installed agents like "Agent Suivi Satisfaction" and "Agent Veille Concurrents" with "Activer" buttons).

### `app-journal.html` — Journal de bord

Phase 1 screen 12, reused, expanded. ~25 entries across 5 days. Per-entry `↩ Annuler` works as before. Add at top: a filter strip (Toutes / Agent / Lorraine / Annulées) and a "Exporter le journal" link (mocked).

### `app-parametres.html` — Paramètres

Light per Andrea.

- **Profil** card: Lorraine Costa, sole proprietor, IDE/RC number, address, primary language FR, secondary DE/EN.
- **Intégrations** card (the key one): a list of connected services, each with ✓ icon and "Connecté" status — Google Workspace, Google Calendar, WhatsApp Business, Stripe, Firebase (votre site existant), Instagram (lecture seule), LinkedIn (lecture seule). Each has a "Configurer" link (mocked).
- **Équipe** card: just Lorraine (with "Ajouter un collaborateur" CTA, mocked).
- **Marque** card: logo, brand colors, public gallery URL.
- **Structure tarifaire** card: per-introduction fee defaults by role type, currency, VAT settings.

---

## 7. Reused vs new — inventory

| Phase 1 asset | Reused as-is | Lifts into | Notes |
|---|---|---|---|
| Candidate data (12) | ✓ | data.js | Expanded with avatar, geo, week-availability |
| Client data (8) | ✓ | data.js | Expanded with contacts, history, agent notes |
| Mission data (8) | partial | data.js | Expanded to 12 with proposed candidates + outcomes |
| Invoices (6) | partial | data.js | Expanded to 14 |
| Proactive suggestions (4) | ✓ | Tableau de bord panel |  |
| Acquisition agents (6) | ✓ | Agents autonomes section | Becomes management UI |
| Gallery cards (12) | ✓ | Galerie section | Unchanged |
| Journal entries (~10) | partial | Journal section | Expanded to ~25 |
| Chat surface | ✓ | Tableau de bord | Reused component |
| 3-way view toggle | ✓ | Pool detail panel |  |
| 87% confidence bar | ✓ | Demandes detail |  |
| Approve / Reject toast pattern | ✓ | Everywhere |  |
| CSS tokens (colors, font, primitives) | ✓ | styles.css | Add app-shell layer |
| French copy that works | ✓ | Throughout |  |
| TaskHive close (screen 15) | ✓ | pres-5-et-apres.html | Verbatim |
| Cover (screen 1) | partial | pres-1-cover.html | Light edits |
| Marché diagram (screen 2) | partial | pres-2-marche.html | Center node rewritten |
| Coût caché (screen 3) | ✗ | — | Replaced by Comparaison |
| Bourse (screen 4) | ✗ | — | Dropped from deck |
| Inversion (screen 5) | ✗ | — | Dropped from deck |
| NL search (screen 7) | ✓ | Demandes detail | Becomes a feature, not a page |
| Profile detail (screen 8) | ✓ | Pool detail panel |  |
| Architecture (screen 13) | ✗ | — | Dropped from deck |
| Pourquoi maintenant (screen 14) | partial | pres-4-pourquoi-maintenant.html | Condensed |

---

## 8. Build order

Same discipline as Phase 1 — bottom-up, structure first, no per-section polish.

1. **App shell foundation** — CSS for sidebar + topbar + content area, `app-shell.js` that injects them. Test on one stub `app-tableau-bord.html` to confirm the layout works before duplicating to 10 more files.
2. **Data expansion** — extend `data.js` with the new shapes (clients-with-contacts, missions-with-candidates, comms threads, agent configs, integrations).
3. **Narrative screens** — `pres-1` through `pres-5`. Smaller wins, gets the deck side done early.
4. **App sections in priority order**:
   1. Tableau de bord
   2. Pool de candidats (Liste view first, then Carte + Calendrier)
   3. Demandes en cours (with reused NL search)
   4. Clients
   5. Agents autonomes
   6. Communications
   7. Facturation
   8. Galerie publique (reused)
   9. Matching & Mises en relation
   10. Journal (reused)
   11. Paramètres
5. **Cleanup** — delete the old `pages/` directory and the 15 Phase-1 narrative HTMLs, keep `UNDERSTANDING.md` / `ANDREA-ANSWERS.md` / `ANDREA-FEEDBACK-PHASE1.md` / `PHASE1-COMPLETE.md` / `PHASE2A-PLAN.md` as the trail.
6. **End-to-end walk** — open `index.html`, click through deck, enter app, click every sidebar item, exit app, finish deck. Verify no broken links, no console errors.
7. **Write `PHASE2A-COMPLETE.md`** — same shape as Phase 1's: what's built, what to test, deviations, rough edges, open Phase-2B questions.

Estimated rough order of magnitude: roughly the same total effort as Phase 1, maybe slightly more due to the data expansion, but each section is smaller in scope than a full narrative screen, so it's compositional.

---

## 9. Things I'm not doing in 2A (Phase 2B territory)

To be explicit so we don't drift:
- No hover animations beyond the existing toast.
- No real chart library — Facturation MTD/YTD will be a static HTML/CSS bar chart.
- No real Switzerland geo — Pool's Carte view will be a stylized SVG outline with pin positions hand-placed.
- No typography hierarchy refinement — H1s still all look the same.
- No background gradients, no textures, no illustrations.
- No mobile breakpoints (will rely on Phase 1's basic collapses).
- No real integration with anything (Stripe, WhatsApp, Firebase) — all "Connecté ✓" badges are mock.
- No keyboard shortcuts.
- No "Mode présentation" fullscreen toggle.
- No animations on the confidence bar, KPI counters, or sidebar transitions.
- Search bar in the topbar is visible but inert.
- Intervention controls (Pause / Annuler / Approuver) in the topbar remain decorative.

---

## 10. Three things I want to confirm with Andrea before I touch code

1. **File location** — am I right to flatten everything to the mockup root (delete `pages/`, all HTMLs at top level)? Or do you prefer the structure `narrative/pres-N-*.html` + `app/app-*.html`? I lean flat for demo-URL aesthetics; tell me if subfolders are better for your repo hygiene.
2. **Slide-over vs in-page detail** — for Pool/Clients/Demandes, when Lorraine clicks a row, do you prefer a right-side slide-over panel (overlays content, no navigation), or an in-page expand (the row opens, surrounding rows stay), or a separate route (`app-pool-247.html`)? My default: **slide-over for Pool and Clients, separate route for Demandes** (because the request detail is meaty enough to deserve its own URL and back-button). Confirm or correct.
3. **"Reprendre la présentation →" exit point from the app** — should it always return to `pres-4-pourquoi-maintenant.html` (the natural post-demo step), or should it remember which deck step Andrea entered from and return there? Mine: always to `pres-4`. The deck flow is linear; entering and exiting always at the same boundary keeps it simple. Confirm.

---

## 11. Status

Phase 2A plan complete. Standing by for green light, corrections, or answers to the three confirms above. No code until you say go.
