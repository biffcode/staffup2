# StaffUp Mockup — Complete Brief for Claude Code

> Read `README.md` first. Read all the linked Trinity and StaffUp docs it points to. Then come back here.
>
> This brief contains: the full intent, the audience, the narrative arc, the screens to build, the mock data direction, the brand system, and a working to-do list.

---

## 0. THE BIG PICTURE

You are building an **interactive sales presentation in HTML**, structured as a walkthrough of a software platform that **does not yet exist**, but which we want Lorraine Costa to commission.

The mockup must do three things at once:

1. **Tell a story** — explain Lorraine's current situation, the pain points, and the solution, in a way that builds inevitability.
2. **Demo the product** — show what the actual platform would look and feel like, with realistic data.
3. **Close the deal** — end with a clear "what happens next" that gives her a reason to say yes.

It's a sales presentation, but the form factor is a working software walkthrough. That's the unique angle. We're not pitching with slides. We're pitching with **a fake-but-feels-real version of the product**.

---

## 1. WHO IT'S FOR

### The audience in the room: Lorraine Costa
- 20s, EHL graduate (Class of 2023), founder of StaffUp / Hospitality & more-COSTA
- Solo founder. Sole proprietor. Based in Lausanne.
- Speaks French primary, English fluently, some German.
- Sharp. Strategic. Doing a master's in entrepreneurship at ESC Paris. Won an innovation prize.
- Featured in PME.ch (Ringier press) in July 2025.
- Built a 5,000+ contact database manually over years.
- Stated her own ambition: ***"Mon ambition est de continuer à automatiser le processus de mise en relation."*** Use this exact quote in the mockup.
- Open to investors. Not desperate. Not naive.

### The salesperson: Andrea Edelman
- CEO of blackcode SA, builder of Trinity Architecture.
- He's the one demoing this to her.
- He's pitching peer-to-peer, founder-to-founder.

### The relationship
This is a first or second meeting. She knows blackcode exists. She doesn't yet know what Trinity is or why it matters for her. The mockup is the artifact that makes it click.

---

## 2. THE BUSINESS BEING DEMOED

**Read `../findings.md` for full detail.** Summary:

StaffUp matches hospitality professionals (chefs de rang, cuisiniers, service, événementiel) with clients (hotels, restaurants, event organisers) in Romandie and now German-speaking Switzerland. She charges a one-time matching fee per successful placement. **She does NOT manage employment contracts, payroll, or compliance** — the client takes the worker on directly.

Her current operations:
- Candidate intake: a Firebase-backed form on staffup.ch
- Client requests: a similar form
- Database: 500+ qualified profiles (publicly stated), 5,000+ total contacts (per her PME interview)
- Matching: entirely manual, in her head, via WhatsApp and phone
- Invoicing: manual, ad hoc

The painful truth she may not yet have articulated to herself: **she is the bottleneck in every single workflow**. Acquisition, qualification, matching, follow-up, invoicing — all dependent on her hours and her memory.

---

## 3. THE GOVERNING METAPHOR

Andrea (the salesperson) realised during research that her business is structurally identical to **a financial market that's still operating Over-The-Counter**. Use this metaphor as the spine of the narrative:

- **Sell side** = candidates (supply of labour) — each profile is a sell order
- **Buy side** = client companies (demand for labour) — each mission request is a buy order
- **The order book** = her database
- **The matching engine** = currently her brain. Should be automated.
- **OTC trades** = today's manual matches via WhatsApp
- **Algorithmic trading** = what Trinity + Companion enables

This metaphor is powerful for Lorraine specifically because she's doing a master's in entrepreneurship and will recognise the framing. Don't beat the audience over the head with it. Use it as a structural backbone in maybe 2-3 screens — once to introduce the framing, once at the architecture reveal, once at the close.

---

## 4. WHAT WE'RE SELLING

### Trinity (the structural backbone)
A version-locked architecture: **Prompt → Tools → Software**. Read `../../README.md` and `../../PHILOSOPHY.md`. For StaffUp, Trinity provides:

- **Pool** module — candidate database with structured data, NL search, availability tracking
- **Clients** module — company CRM with dormancy alerts
- **Match** module — request intake → shortlisting → confirmation → outcome logging
- **Invoice** module — auto-generated from confirmed matches, payment tracking
- **Public profile gallery** module — anonymous browsable profiles for SEO and lead generation (no contact info exposed — moat protection)

### Companion (the agentic layer)
The AI layer that operates **across Trinity and beyond it**. This is the magic. Trinity gives structure. Companion gives agency.

Specifically for StaffUp:
- **Acquisition agent** — monitors Instagram/LinkedIn/EHL for potential candidates, drafts outreach
- **Database maintenance agent** — pings dormant candidates monthly via WhatsApp to refresh availability
- **Re-engagement agent** — detects dormant clients and drafts reactivation messages
- **News/event agent** — spots openings (new restaurant, gala announcement) and surfaces them as opportunities
- **Referral agent** — automatically asks placed candidates for referrals
- **School pipeline agent** — monitors EHL/Vatel/HES-SO graduation calendars

Each agent surfaces actions for Lorraine to approve with one click. **She's always the decision-maker. The agents do the running around.**

### The pitch one-liner
> **"Vous parlez à votre assistant. L'assistant travaille pour vous. Vous supervisez. Vous décidez."**

---

## 5. THE NARRATIVE ARC (the walkthrough structure)

The mockup is structured as a guided walkthrough. There's a "Suivant →" button on every screen. There's also a sidebar / progress indicator showing where you are in the story.

### Act I — Recognition (3 screens)
*Goal: Lorraine sees her own business reflected back perfectly. She thinks "they actually understand."*

1. **Cover screen**
   - Big, confident, beautiful. Brand colors. DM Sans.
   - Title: something like *"StaffUp × Trinity — La plateforme qui fait votre travail invisible"*
   - Subtitle: a short line teasing the reveal
   - "Démarrer la présentation →" button
   - Andrea's name + blackcode logo as the presenter

2. **"Voici votre marché"** (Here is your market)
   - Visualises StaffUp as a marketplace: sell side (candidates) on the left, buy side (clients) on the right, Lorraine in the middle holding it together with WhatsApp messages.
   - Real numbers: "500+ profils qualifiés · 3 cantons actifs · 98% satisfaction · 1 fondatrice."
   - The visual punch: arrows from clients and candidates all converging through Lorraine's phone. The bottleneck made visible.
   - Tagline: *"Tout passe par vous. Pour l'instant."*

3. **"Le coût caché"** (The hidden cost)
   - A list of things Lorraine does manually, with rough time estimates per week.
   - Examples: "Recherche manuelle de candidats pour chaque demande — 4–6h/sem.", "Relance des profils dormants — 0h (pas le temps)", "Suivi des clients silencieux — 0h (pas le temps)", "Saisie des nouveaux candidats — 2h/sem."
   - Total at the bottom: "≈ 12h/semaine d'opérations manuelles. Et tout ce que vous ne faites pas par manque de temps."

### Act II — The Reframe (2 screens)
*Goal: Introduce the OTC → algorithmic trading metaphor. She sees her business in a new light.*

4. **"Votre business, c'est une bourse"** (Your business is an exchange)
   - The financial market metaphor visualised cleanly.
   - "Sell side: 500+ profils. Buy side: 50+ entreprises. Et au milieu : un carnet d'ordres tenu manuellement, dans votre tête, sur WhatsApp."
   - "Tous les marchés financiers sont passés du gré-à-gré à l'automatisation quand le volume a dépassé une certaine taille. C'est de la physique, pas un choix."

5. **"L'inversion"** (The inversion)
   - The Trinity + Companion idea introduced.
   - Visual: instead of Lorraine in the middle holding everything, show an agent in the middle, with Lorraine above as the supervisor / decision-maker.
   - The one-liner: *"Vous parlez à votre assistant. L'assistant travaille pour vous. Vous supervisez. Vous décidez."*

### Act III — The Demo (5–7 screens)
*Goal: Show the actual product. Make it feel real. This is where the mockup earns its keep.*

These are the live, interactive product screens. They use mock data. They are designed to feel like a working tool.

6. **"Votre tableau de bord"** (The main operating view)
   - Agent chat surface front and center.
   - Sample prompt already typed: *"Trouve-moi trois chefs de rang disponibles ce weekend dans 20km de Lausanne avec expérience gastronomique"*
   - Agent response showing 3 mock candidates with the rich card format from `../mockup-notes.md`
   - Right sidebar with "Demandes en cours", "Pool santé", "Revenus" panels
   - Top bar: agent intervention controls (Pause, Annuler, Approuver)

7. **"La recherche en langage naturel"** (NL search)
   - Click into the matching flow. Show the "Why this candidate?" reasoning panel.
   - Show three candidates side-by-side with reasoning.
   - "Confiance de l'agent: 87%" indicator.
   - One-click "Proposer ces 3 candidats" button.

8. **"Le profil candidat"** (Candidate profile detail)
   - Read-only view of one candidate (e.g., Marie Dumont, profil #247).
   - Shows availability calendar, placement history, ratings, agent notes.
   - The full rich profile from the mockup-notes spec.
   - **Key**: the public version (anonymised) is visible via a toggle. Show how the same data renders for an external client viewer — no name, no contact, just role/region/experience/rating.

9. **"L'agent proactif"** (The agent acts on its own)
   - Show Companion-initiated messages.
   - "⚡ J'ai détecté 3 situations qui nécessitent votre attention" — with the sample list from mockup-notes.
   - Each item has Approve / Review / Ignore. One-click decision making.
   - This is the "the system works while you sleep" wow moment.

10. **"L'acquisition automatique"** (Automated acquisition)
    - The Companion piece that goes beyond Trinity.
    - Show: Instagram monitoring (Companion spotted a hospitality post in Lausanne, drafted outreach), LinkedIn alert (new EHL graduate available), referral tracking (Marie referred Thomas, who registered).
    - "Pendant que vous travaillez sur les missions du jour, votre pool grandit tout seul."

11. **"La galerie publique"** (Public profile gallery)
    - The anonymous, SEO-friendly profile browsing experience.
    - Filterable cards: role, region, experience, availability.
    - No names, no contact info — just enough to create desire.
    - CTA on each card: "Faire une demande pour ce profil →"
    - The pitch-within-the-pitch: "Votre base de données devient un canal d'acquisition de clients."

12. **"Le journal de bord"** (Audit timeline)
    - Optional: a vertical timeline of every agent action, every Lorraine decision, every match — the audit trail.
    - Each entry has an undo affordance.
    - "Tout est traçable. Tout est réversible. Vous gardez le contrôle absolu."

### Act IV — The Close (2–3 screens)
*Goal: Make the path forward clear. Give her a reason to say yes today.*

13. **"L'architecture"** (The architecture)
    - One clean visual explaining Trinity + Companion as a system.
    - Three layers: Prompt (your intentions) → Tools (the agent's capabilities) → Software (the platform).
    - Companion is the layer that orchestrates them.
    - "Le tout sous votre contrôle, version par version, jamais de surprise."

14. **"Pourquoi maintenant"** (Why now)
    - The case for moving now: she's at 500 profiles, expanding into Bern, taking press meetings, doing a master's. The window to put infrastructure under her business is now, before scale forces a worse decision.
    - "À 500 profils c'est gérable. À 5,000, vous êtes le goulot d'étranglement."

15. **"Et après ?"** (What happens next)
    - The path forward. Concrete, simple, low-commitment first step.
    - Example: "Phase 1 (4 semaines, prix fixe): Module Pool + Module Match en production. Vous testez. Si vous validez, on continue."
    - A signature line / contact CTA.
    - Andrea's contact details.

---

## 6. THE BRAND SYSTEM (mandatory — these are her colors)

From `../Research/StaffUp_ID_V0.pdf`:

| Role | Color | Hex |
|------|-------|-----|
| **Primary background** | Dark navy | `#151f36` |
| **Accent / CTA / urgency** | Crimson | `#c42a4e` |
| **Soft highlight / chips / tags** | Soft pink | `#df98a6` |
| **Muted / secondary text** | Grey | `#8b8f99` |
| **Body text on dark** | Near-white | `#f5f5f5` |

**Font**: DM Sans (Google Fonts, free). Use weights 300 / 400 / 500 / 600 / 700.

**Visual tone**:
- Dark navy backgrounds — premium, focused, not generic SaaS-blue
- Generous whitespace
- Type-forward, not icon-soup
- The agent chat surface should feel like Slack-with-a-smart-colleague, not a chatbot widget
- Numbers and live state visible everywhere — this is a live system, not a filing cabinet

---

## 7. MOCK DATA REQUIREMENTS

All data must feel **plausibly Swiss hospitality**. No "John Doe / Acme Corp." Use realistic names, real Swiss locations, real role types, plausible client names.

### Sample candidates (build at least 12, mix of roles/regions/experience):
- Marie Dumont, chef de rang, Prilly (VD), 4 ans gastronomie, EHL alumna, ⭐⭐⭐⭐⭐
- Antoine Berger, chef de rang, Renens (VD), bilingue FR/DE, sommelier certifié
- Nadia Vasseur, événementiel, Morges (VD), galas et cocktails
- Thomas Müller, cuisinier, Lausanne, Vatel alumnus
- Sara Henriques, housekeeping, Vevey (VD)
- ...etc. Make them feel real — Swiss-French names, Portuguese names common in Romandie hospitality, occasional German-Swiss names, mix of permits (Suisse, B, C).

### Sample clients (build at least 6):
- Auberge du Raisin, Cully (VD) — restaurant gastronomique
- Carlton Boutique Hotel, Lausanne — hôtel de luxe
- Orllati Group, Vaud — événements
- FC Echallens, Echallens (VD) — événementiel sportif
- Hôtel Beau-Rivage, Genève — luxe
- Hôtel-Restaurant de Wengen (BE) — montagne, saisonnier
- (use realistic Swiss hospitality names, optionally invent if you must)

### Sample missions (build 8–10):
- "Dîner de Gala — Genève — 15 postes — 15h-1h — 22 mai"
- "Chef de rang — Buchillon (VD) — CDD — démarrage immédiat"
- "Cuisinier(e) — Lausanne — CDI — 5j/7"
- "Service événement — Carlton Lausanne — samedi 17 mai — 8 personnes"
- ... mix of urgencies, durations, regions

### Sample agent actions (proactive messages):
- "Marie Dumont est disponible la semaine prochaine. Elle correspond à la demande Hôtel du Lac."
- "Facture #189 (BuildCo SARL, CHF 2,400) impayée depuis 32 jours."
- "47 profils cuisine n'ont pas été placés depuis 60+ jours. Lancer une campagne de réactivation ?"
- "L'Auberge du Raisin n'a pas commandé depuis 73 jours. Envoyer un message de reprise ?"

### Sample invoices/revenue (for the dashboard):
- Realistic CHF amounts (CHF 800–3,500 per mission is plausible)
- Mix of paid / pending / overdue
- "Mai 2026 (en cours): CHF 8,400 facturé · CHF 5,200 encaissé · 3 factures en attente"

---

## 8. WHAT MUST NOT BE IN THE MOCKUP

(From `../mockup-notes.md` — these are forbidden because they signal "generic admin app":)

- ❌ Sidebar with 12 entity types
- ❌ Tables with row-level edit buttons
- ❌ "+ Nouveau candidat" buttons everywhere
- ❌ Multi-step form wizards
- ❌ Settings pages with 40 toggles
- ❌ Drag-and-drop kanban boards for candidates
- ❌ Calendar as primary view
- ❌ Dashboard with 12 donut charts
- ❌ Anything that says "powered by AI" without showing what the AI actually does
- ❌ "John Doe / Acme Corp" placeholder data
- ❌ English copy anywhere visible to the user

---

## 9. PROTECTING HER MOAT — A KEY ARCHITECTURAL POINT

Lorraine's moat is her database. Her threat is disintermediation — a client gets the names, calls candidates directly, cuts her out. **The mockup must visibly demonstrate that the architecture protects this.**

Two screens carry this:

- **Permission tiers visible**: When showing the candidate profile, include a toggle or tab showing how the same profile renders for different audiences:
  - **Lorraine's view**: full name, contact, history, notes, everything
  - **Client's view (in the public gallery)**: role, region, experience, rating, availability indicator — no name, no contact
  - **Candidate's own view**: their own profile, their availability, their placement history

- **Public gallery screen**: explicitly framed as "your database becomes a marketing asset, without ever being exposed." Show the anonymous cards, the filter UI, and the request CTA that routes through StaffUp (not to the candidate directly).

This is a **differentiator** versus conventional ATS software, which is built for transparency and would disintermediate her.

---

## 10. INTERACTION REQUIREMENTS

The mockup is interactive. Required interactions:

- **Cross-page navigation**: Sidebar or progress bar showing 1/15, 2/15, etc. Click any step to jump. "Suivant →" / "← Précédent" buttons on each screen.
- **Sample prompts in the chat surface**: clickable, loads a pre-canned response.
- **Approve / Reject buttons on agent suggestions**: clicking shows a brief confirmation animation and updates state.
- **Toggle between Lorraine's view and client's view** on the candidate profile screen.
- **Filter the public profile gallery**: at least role and region filters that actually filter the cards.
- **Hover states on cards** showing additional detail.
- **A "Reset demo" button** somewhere (footer?) that resets to initial state.

Optional but valuable:
- LocalStorage to persist demo progress between page loads
- A "Mode présentation" toggle that hides the dev controls and goes full-screen-friendly

---

## 11. DELIVERABLE — WHAT "DONE" LOOKS LIKE

When you've finished, the folder structure should look like:

```
staffup/mockup/
├── README.md                     ← already exists
├── BRIEF.md                      ← this file
├── index.html                    ← the entry point — opens the cover screen
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
├── assets/
│   ├── css/styles.css
│   ├── js/
│   │   ├── nav.js
│   │   ├── data.js               ← all mock data lives here
│   │   └── interactions.js
│   └── images/                   ← any logos, illustrations
└── data/
    └── mock-data.json            ← optional: structured mock data
```

Acceptance criteria:
- [ ] All 15 screens render without errors
- [ ] Navigation works between all screens
- [ ] All copy is in French and reads naturally
- [ ] Brand colors and DM Sans applied consistently
- [ ] Mock data is realistic Swiss hospitality (not generic)
- [ ] Agent chat surface is interactive (clickable prompts → canned responses)
- [ ] Candidate profile has the Lorraine/client view toggle
- [ ] Public gallery is filterable
- [ ] Agent proactive messages have working Approve/Reject buttons
- [ ] Opening `index.html` in a browser works on a fresh machine — no install, no build
- [ ] The whole thing feels like a Lorraine-specific product, not a template

---

## 12. WORKING TO-DO LIST

Suggested order of execution. Don't move to a new task until the previous is solid.

### Phase 1 — Foundation
- [ ] Read all required documents (see README.md)
- [ ] Set up folder structure
- [ ] Build `assets/css/styles.css` with the brand system (colors, DM Sans, base typography, button styles)
- [ ] Build `assets/js/nav.js` (cross-page navigation, progress indicator)
- [ ] Build `assets/js/data.js` with all mock data (12+ candidates, 6+ clients, 8+ missions, agent actions, invoices)
- [ ] Build a shared header / progress bar component used on every page

### Phase 2 — Act I (Recognition)
- [ ] `01-cover.html` — title screen
- [ ] `02-marche.html` — the marketplace visual
- [ ] `03-cout-cache.html` — the hidden cost list

### Phase 3 — Act II (Reframe)
- [ ] `04-bourse.html` — the OTC trading metaphor
- [ ] `05-inversion.html` — the Trinity + Companion intro

### Phase 4 — Act III (Demo) — most important
- [ ] `06-tableau-bord.html` — main operating view with chat
- [ ] `07-recherche-nl.html` — NL search results with reasoning
- [ ] `08-profil-candidat.html` — candidate detail with view toggle
- [ ] `09-agent-proactif.html` — proactive agent messages
- [ ] `10-acquisition.html` — Companion acquisition agents
- [ ] `11-galerie-publique.html` — public anonymous gallery
- [ ] `12-journal-bord.html` — audit timeline (optional but high-value)

### Phase 5 — Act IV (Close)
- [ ] `13-architecture.html` — Trinity + Companion architecture
- [ ] `14-pourquoi-maintenant.html` — why now
- [ ] `15-et-apres.html` — what's next / contact

### Phase 6 — Polish
- [ ] Walk through the entire deck yourself
- [ ] Check every French phrase reads naturally
- [ ] Verify all interactions work
- [ ] Add a "Reset demo" affordance
- [ ] Test in a clean browser session
- [ ] Make sure the cover screen makes you want to click "Suivant"

---

## 13. THE STANDARD

When Andrea opens this in front of Lorraine, the mockup should make her lean forward. Not because of animations or graphics, but because she sees her own business in it — specifically, intelligently, with a clear path from where she is to where she wants to be.

If she says, in the meeting, *"This is exactly my problem"* — you've succeeded.

If she says, *"How quickly can you build this?"* — you've over-succeeded.

Don't make a generic SaaS demo. Make **her** product. The one she'd commission if she could see it.

That's the standard.
