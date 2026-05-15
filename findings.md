# staffup — Research Findings

> **Agent context**: This file was written after thorough web research on staffup.ch, PME.ch, LinkedIn, swissstaffing.ch, tempservice.ch, and competitor platforms. All facts marked ✅ are confirmed from primary sources. Items marked ⚠️ are inferred or unconfirmed.
>
> Read `../README.md` and `../PHILOSOPHY.md` first. Then read this. Then update `mockup-notes.md`.

---

## 1. CONFIRMED BUSINESS PROFILE

| Field | Confirmed Data |
|-------|----------------|
| **Brand name** | StaffUp |
| **Legal entity** | Hospitality & more-COSTA (sole proprietorship / entreprise individuelle) |
| **IDE / RC number** | CHE-401.109.618 ✅ |
| **Canton** | **Vaud** (registered) ✅ |
| **Primary city** | Lausanne, 1005 ✅ |
| **Secondary city** | Zürich (listed on LinkedIn) |
| **Website** | https://staffup.ch ✅ |
| **Phone** | +41 79 92 74 631 ✅ |
| **Email** | Contact@staffup.ch ✅ |
| **LinkedIn (company)** | linkedin.com/company/hospitality-more/ ✅ |
| **LinkedIn (Lorraine)** | linkedin.com/in/lorraine-costa-staffup/ ✅ (login required) |
| **Founded** | 2024 ✅ |
| **Team size** | 1 full-time (Lorraine) + contract workers ✅ |
| **Candidate database** | 5,000+ profiles (stated in PME.ch, July 2025) ✅ |
| **Client satisfaction** | 98–98.7% (stated on website) |
| **Primary sector** | Hospitality & food service (hotels, restaurants, events) ✅ |
| **Secondary sector** | Administrative (in development, per PME.ch) |
| **Business model** | One-time matching fee per placement. ~50% cheaper than traditional agencies. Does NOT manage contracts/payroll. Client handles employment directly. ✅ |

### Key Press Coverage
- **PME.ch, July 3, 2025** — *"Recrutement hôtellerie: StaffUp bouscule l'intérim classique"* — full interview with Lorraine Costa, photo by François Wavre/lundi13. This is a Ringier publication (major Swiss business press). Significant milestone for a 2024 startup.

### Visual Identity (from StaffUp_ID_V0.pdf)
| Element | Value |
|---------|-------|
| **Primary navy** | `#151f36` (R21 G31 B54) |
| **Crimson/red** | `#c42a4e` (R196 G42 B78) |
| **Soft pink** | `#df98a6` (R223 G152 B166) |
| **Grey** | `#8b8f99` (R139 G143 B153) |
| **Font** | DM Sans |
| **Channels** | Instagram (multiple post format types designed), website (Next.js/Nuxt.js) |
| **Language** | French primary (Romandie) |

---

## 1b. WEBSITE DEEP DIVE — CONFIRMED FROM LIVE SITE EXPLORATION

### Candidate Application Form Fields (from /jobs — confirmed)
Every candidate who applies fills in exactly these fields:
- Civilité (M. / Mme / Mlle)
- Nom, Prénom, Email, Téléphone, Adresse, Ville
- Canton/Région (all 26 Swiss cantons + Autre)
- Date de naissance, Nationalité (free text), Permis de travail (CH / B / C / L / G / Aucun)
- Domaine d'activité: Service en salle / Cuisine / Bar / Accueil & Conciergerie / Housekeeping / Événementiel / Autre
- Niveau d'expérience: Débutant (0-1 an) / Intermédiaire (1-3 ans) / Expérimenté (3-5 ans) / Expert (5+ ans)
- Disponibilité: Immédiate / Dans 1 semaine / Dans 2 semaines / Dans 1 mois / Négociable
- CV upload (JPG, PNG ou PDF, max 5MB)
- Privacy consent checkbox

**This data goes into Firebase (Firestore).** This is the structured data model for every candidate in her pool.

### Live Job Listings (from /job-offers — confirmed May 2026)
Only 3 listings visible — confirms the site is not a high-volume job board, it's a window into active missions:

| Title | Type | Location | Schedule | Positions |
|-------|------|----------|----------|-----------|
| Dîner de Gala | Mission | Région Genève | 15h – 1h | 15 postes |
| Cuisinier(ère) | CDI | Buchillon (VD) | 5j/7j | 1 poste |
| Chef de rang | CDD | Buchillon (VD) | Dès que possible | 1 poste |

**Key insight**: Buchillon (VD) appears twice — this is almost certainly a named hotel client (likely a lakeside property). The Geneva gala listing (15 positions, late evening) confirms she handles large events.

### Stats as Published on Site
- **500+ profils qualifiés** (not 5,000 — significant discrepancy with PME.ch claim of 5,000+)
- **98% satisfaction clients**
- **3 cantons** (Valais, Vaud, Genève)

⚠️ **NOTE**: The site says 500+, PME.ch interview says 5,000+. Either: (a) the site is outdated, (b) the 5,000 figure includes all contacts ever gathered (not just active qualified profiles), or (c) the 500 is a conservative/verified subset. Ask Lorraine to clarify — this matters for the pitch.

### Pricing — Confirmed NOT Public
No pricing, no commission rates, no per-placement fees anywhere on the site. This is standard for Swiss staffing — fees are negotiated per client. Do not reference specific pricing in the mockup.

### Navigation Structure (complete site map)
- `/` — Homepage
- `/profiles` — Company-facing: recruit profiles (form for employers)
- `/jobs` — Candidate-facing: apply as a professional
- `/job-offers` — Active job listings
- `/agence-placement` — Agency positioning / SEO page
- `/about` — Company description (no named individuals)
- `/contact` — Contact form + phone/email
- `/privacy` — Privacy policy
- `/cgv` — Legal mentions

**No login. No candidate portal. No client dashboard. No account system.** The entire site is a one-way intake funnel. Everything after submission is managed off-platform (WhatsApp, phone, spreadsheet/Firebase).

### Language Toggle
The site has a language selector (FR flag visible). French is default. This confirms bilingual ambitions — the German version is likely in progress or partial.

### Newsletter
A newsletter signup (email field + S'inscrire button) is in the footer. Another data capture point feeding Firebase.

---

## 2. LORRAINE COSTA — FOUNDER & CEO PROFILE

### Confirmed Biography
| Period | Event |
|--------|-------|
| 2018 | Internship at Carlton Boutique Hotel, Lausanne |
| ~2019 | Enrolled at EHL (École Hôtelière de Lausanne) |
| 2022 | Worked at World Expo, Dubai |
| 2023 | Graduated EHL — BSc International Hospitality Management |
| 2023–24 | Built candidate database of 1,000+ contacts during studies |
| 2024 | Officially launched StaffUp / Hospitality & more-COSTA |
| 2025 | Won **Prix de l'innovation Jean-Pierre Nadir** at ESC Paris (entrepreneurship master's program) |
| July 2025 | Featured in PME.ch — significant press milestone |

### Her Own Words (from PME.ch interview)
> *"Cela fait plus de huit ans que je travaille dans l'hôtellerie et la restauration."*

> *"Ma grande force, c'était de savoir mettre les gens en relation, de toujours trouver la bonne personne au bon endroit."*

> *"Pendant mes années à l'école hôtelière, j'ai constitué une base de données de plus de 1000 personnes qualifiées."*

> *"Mon ambition est de continuer à **automatiser le processus de mise en relation**."* ← **This is the single most important sentence for the pitch.**

> *"Ouvrir la porte à d'éventuels investisseurs."* ← Open to investors.

### What She Cares About
- **Speed**: Core USP is "response in under 24 hours" — software that makes her faster directly strengthens this.
- **"Humain et agile"**: Her explicit brand language. Avoid anything that sounds bureaucratic.
- **Automation of matching**: Her stated ambition. This is the open door for a Trinity pitch.
- **Direct relationships**: She hates the intermediary model — so do we.
- **Disruption**: She frames herself explicitly as disrupting "agences d'intérim traditionnelles."
- **EHL network**: Proud of her hospitality school roots — quality candidates, professional culture.
- **Cost advantage**: Built her value prop on being 50% cheaper. She respects financial ROI.
- **Geographic expansion**: Vaud/Valais/Geneva → German Switzerland (Wengen already signed).

### Likely Current Tech Stack (inferred — ⚠️ unconfirmed)
- **Candidate database**: Google Sheets or Excel (5,000+ profiles with no visible ATS)
- **Client intake**: Google Forms or similar (manual forms on site)
- **Communication**: WhatsApp extensively (standard in Romandy hospitality staffing)
- **Contracts**: ⚠️ She explicitly states she does NOT manage contracts — clients handle this directly
- **Invoicing**: Simple invoicing app or manual (given sole-proprietor scale)
- **Website**: Next.js or Nuxt.js (modern JS framework, i18n partially implemented)

### Confirmed Tech Stack (from direct source inspection — May 11, 2026)

| Layer | Technology | Evidence |
|-------|-----------|----------|
| **Frontend framework** | **React 18** (with concurrent features) | `createRoot`, `StrictMode` in base64-decoded module preload source; `<div id="root">` mount point |
| **Build tool** | **Vite** | Asset filenames with content hashes: `/assets/main-DrNf7elw.js`, `/assets/vendor-Cnk7Q8sW.js`, `/assets/router-CAgLDgm0.js` — Vite's fingerprinting pattern |
| **Routing** | **React Router** (or similar) | Separate `router-CAgLDgm0.js` chunk; SPA with `/profiles`, `/jobs`, `/contact` routes |
| **Backend/Database** | **Firebase** (Firestore / Auth) | Network request to `firebase.googleapis.com/v1alpha/projects/-/apps/1:306464871609:web:...`; dedicated `firebase-naHYnyOp.js` chunk preloaded |
| **Styling** | **Tailwind CSS** | Body classes: `min-h-screen flex flex-col`, `fixed w-full z-50`, `container mx-auto px-4` — unmistakably Tailwind |
| **UI icons** | **Lucide React** | `class="lucide lucide-globe"` in source |
| **Font** | **Space Grotesk** (website), DM Sans (brand doc) | `fonts.googleapis.com/css2?family=Space+Grotesk` — note: different from what the brand PDF says; the live site uses Space Grotesk |
| **Analytics** | **Google Tag Manager** (GTM-TBWJ35HM) + **Google Analytics 4** (G-GPM6TBW0YD) | Script tags confirmed |
| **Heatmaps** | **Hotjar** (ID: 5332323) | `static.hotjar.com/c/hotjar-5332323.js` |
| **Hosting** | **Self-hosted / custom domain** (not Wix, not Vercel, not Netlify) | Assets served from `staffup.ch/assets/` directly — custom deployment |
| **Images** | Mix of **Unsplash**, **wixstatic.com CDN**, **Imgur**, **Wikipedia** | Link preloads reveal image origins — notably wixstatic.com used for logo storage only |
| **SEO** | Google Search Console verified | `meta[name="google-site-verification"]` present |
| **Performance monitoring** | Core Web Vitals observer (custom) | In the decoded source code |

**Key correction from previous assumptions**: NOT Wix (despite wixstatic.com CDN used for one logo image). NOT Next.js. NOT Nuxt. This is a **custom-built React 18 + Vite + Firebase + Tailwind SPA**, deployed on their own domain. This is a proper modern web app — someone with real development skills built it, or Lorraine used an AI tool (Bolt.new, Lovable, v0, or similar) to generate it.

**The Firebase finding is significant**: If her candidate database or client intake forms write to Firestore, she has a structured backend — not just a spreadsheet. This changes the integration story. The data exists in Firebase; the Trinity system could potentially read/migrate it rather than starting from zero.

### What She Has NOT Automated (from site analysis)
- Matching is described as "intelligent" on site but appears manual in practice
- No visible ATS or CRM integration
- No chatbot, no Calendly, no booking widget
- Candidate intake = manual form (CV/image upload, no automated screening)
- Company request = manual form → suggests manual matching workflow

---

## 3. CONFIRMED CLIENTS & GEOGRAPHY

### Named Clients
| Client | Type | Source |
|--------|------|--------|
| Auberge du Raisin, Cully (VD) | Restaurant/hotel | PME.ch |
| Carlton Boutique Hotel, Lausanne | Luxury hotel | PME.ch + website testimonial |
| Orllati Group | Construction/events | PME.ch |
| PKF Sport | Events | Website carousel |
| FC Echallens | Football club / events | Website carousel |
| MER-CH | Unconfirmed sector | Website carousel |
| Wengen hotel group (unnamed) | Mountain hotel | PME.ch (newly signed) |
| Sara Mateus, Directrice, Carlton | Named testimonial | Website |

### Geography Active/Planned
| Region | Status |
|--------|--------|
| Vaud (Lausanne, Montreux, Buchillon) | Primary ✅ |
| Valais (ski stations, seasonal) | Active ✅ |
| Geneva (gastronomic, events) | Active ✅ |
| Bern/German Switzerland (Wengen) | Just launched ✅ |
| All Swiss cantons | Accepted for candidate intake |

---

## 4. DOMAIN MAP — STAFFUP'S ACTUAL WORKFLOW

Because StaffUp operates as a **matching/introduction service** (not a traditional interim agency), its workflow differs from full-service temp agencies. StaffUp does NOT: manage employment contracts, process payroll, handle SUVA/AVS, or issue salary certificates. The client takes the worker on directly.

### StaffUp's Actual Lifecycle

```
PHASE 1 — CANDIDATE ACQUISITION
[Candidate applies via website form]
  → Filters: sector, role type, availability, experience, location
  → CV + photo upload
  → Lorraine screens manually (likely WhatsApp follow-up)
  → Profile added to database ← Currently: manual, no ATS

PHASE 2 — CLIENT ACQUISITION
[Company contacts via website form]
  → Request: role, dates, urgency, profile needed
  → Lorraine manually matches against her database ← This is the bottleneck
  → Response within 24h (her core USP)

PHASE 3 — MATCHING
[Lorraine searches her database manually]
  → Identifies suitable candidates (availability, skills, location)
  → Contacts candidates (WhatsApp, phone)
  → Presents shortlist to client
  → Client confirms → MATCH CONFIRMED

PHASE 4 — INTRODUCTION
[StaffUp facilitates the introduction]
  → Candidate contacts client (or vice versa)
  → Client confirms start date/terms directly with candidate
  → StaffUp's operational role ends here

PHASE 5 — INVOICING
[StaffUp charges one-time matching fee]
  → Fee based on: number of days + type of profile
  → Invoice sent to client
  → Client handles: employment contract, payroll, SUVA, AVS

PHASE 6 — FOLLOW-UP (implied)
  → Track placement success (98% satisfaction metric)
  → Re-engage for future missions
  → Manage candidate availability for repeat placements
```

### Key Entities in StaffUp's World

| Entity | French Term | Key Attributes |
|--------|-------------|----------------|
| **Candidate/Profile** | Candidat / Profil | Name, role, skills, experience, location, availability, contact, history, photo, EHL/Vatel/Glion flag |
| **Client/Company** | Client / Entreprise | Name, sector, contact person, location, mission history, billing info |
| **Request/Mission need** | Demande | Client, role needed, dates, urgency, required profile, status |
| **Match/Introduction** | Mise en relation | Candidate, client, request, date, outcome, fee charged |
| **Invoice** | Facture | Client, match, amount, date, paid/unpaid |
| **Placement record** | Placement | Match outcome, feedback/rating, duration |
| **Availability** | Disponibilité | Per candidate: what dates/periods they're free |
| **Role type** | Poste | Chef de rang, Barman, Réception, Service, Cuisine, etc. |

### Key Operations (Verbs)

**Candidate side:**
- `qualifier` (screen candidate) → `ajouter au pool` → `activer` / `désactiver` (availability)

**Client side:**
- `recevoir une demande` → `matcher` → `proposer` → `confirmer la mise en relation` → `facturer`

**Database management:**
- `rechercher` → `filtrer` → `relancer un profil dormant` → `mettre à jour la disponibilité`

**Follow-up:**
- `valider le placement` (was it successful?) → `collecter le feedback` → `réactiver pour futures missions`

---

## 5. PAIN POINTS — RANKED BY PITCH RESONANCE

### Pain Point #1 — The Manual Matching Bottleneck ⭐⭐⭐⭐⭐
**The problem**: 5,000+ profiles, all managed manually. When a client request arrives, Lorraine does a mental search + manual filter through her database, then contacts candidates one by one via WhatsApp. This caps her throughput. She literally cannot serve more clients without more hours in the day.

**Her own words**: *"Mon ambition est de continuer à automatiser le processus de mise en relation."*

**Trinity angle**: Natural language search + automatic shortlisting. *"Trouve-moi trois chefs de rang disponibles ce week-end dans un rayon de 20km de Lausanne avec au moins 2 ans d'expérience hôtelière."* → 30 seconds instead of 30 minutes.

**Pitch resonance**: 10/10 — she's already said the words. This is her problem.

---

### Pain Point #2 — Database Scale vs. Usability ⭐⭐⭐⭐⭐
**The problem**: 5,000 profiles that are probably managed in spreadsheets means most of the database is a graveyard. Candidates not actively engaged drift away, take other jobs, change availability — and Lorraine has no systematic way to know. She defaults to who she remembers.

**Trinity angle**: Automated re-engagement when a relevant mission opens. Availability tracking. Geo-location search. Pool health metrics ("you have 47 hospitality profiles who haven't been placed in 90 days — want to re-engage them?").

**Pitch resonance**: 9/10 — the gap between "5,000 profiles" and "actually usable database" is obvious once pointed out.

---

### Pain Point #3 — Geographic Expansion = Operational Complexity ⭐⭐⭐⭐
**The problem**: She's just entered German-speaking Switzerland (Wengen). That means bilingual operations (FR + DE), different regional dynamics, candidates and clients she doesn't know personally. Her current manual, WhatsApp-driven workflow doesn't scale across language regions.

**Trinity angle**: A single structured platform that works across languages, tracks all profiles regardless of region, and lets her operate the Bern market the same way she operates Lausanne.

**Pitch resonance**: 8/10 — timely. She's in this challenge right now.

---

### Pain Point #4 — Dormant Client Follow-Up ⭐⭐⭐⭐
**The problem**: Once a placement is done, what happens? Without systematic follow-up, satisfied clients forget to call next time and use a competitor. She has no CRM tracking which clients haven't come back in 60/90 days.

**Trinity angle**: Agent monitors placement history and flags: *"Auberge du Raisin a fait 4 missions avec vous. Leur dernière mission date de 73 jours. Voulez-vous les relancer ?"*

**Pitch resonance**: 7/10 — classic solopreneur blind spot.

---

### Pain Point #5 — Invoice Tracking & Revenue Visibility ⭐⭐⭐
**The problem**: As a sole proprietor, she likely has no live view of revenue, outstanding invoices, or which clients haven't paid. Month-end surprises are common.

**Trinity angle**: Real-time revenue dashboard. Automated payment reminders. *"3 factures ouvertes depuis plus de 30 jours pour CHF 4,200. Voulez-vous envoyer un rappel ?"*

**Pitch resonance**: 6/10 — real but less dramatic than the matching problem.

---

### Pain Point #6 — Compliance as She Grows ⭐⭐⭐
**The problem**: ⚠️ Note: StaffUp does NOT currently manage employment contracts — clients do. BUT if she ever moves to a full-service model (or adds a staffing license / LSE authorization), compliance becomes a nightmare. This is a future pain point to seed.

**Pitch resonance**: 5/10 — don't lead with this; mention as future-proofing.

---

## 6. CURRENT SOFTWARE LANDSCAPE — WHAT SHE'S COMPETING AGAINST

### Conventional Staffing Software She Might Evaluate
| Platform | Strengths | Why It's Wrong for StaffUp |
|----------|-----------|---------------------------|
| **Bullhorn** | Best-in-class ATS + CRM | Enterprise-scale, expensive, complex, no French UX depth |
| **Vincere** | Good temp staffing workflow | Designed for full-service agencies (payroll etc.), not intro-model |
| **Recruitee** | Modern UX, affordable | ATS-focused, no matching AI, no mission/placement workflow |
| **JobAdder** | Growing in Europe | No Swiss specifics, no FR native |
| **Personio** | HR-focused, Swiss market | Wrong category (internal HR, not staffing agency) |
| **Spreadsheets** | Her current state (⚠️ assumed) | No search, no automation, no scale |

### The Gap Nobody Has Filled for StaffUp's Model
No existing platform handles a **matching/introduction fee model** (as opposed to full temp agency) with:
- French-first UI for Romandy
- Hospitality/events specialization (role types, peak demand periods)
- Natural language search across candidate pool
- Availability tracking
- Simple per-introduction invoicing
- Small-team (solo founder) friendly pricing

**This is the Trinity opportunity.**

---

## 7. PROPOSED TRINITY MODULE MAP FOR STAFFUP

Based on StaffUp's actual workflow (introduction model, not full-service temp agency):

### Module 1: Candidate Pool `staffup pool` ✅ MVP
**Status**: The core asset. Must be built first.

**Key entities**: Candidate (ID, name, role types, skills, location, availability, contact, photo, EHL/school flag, history, rating)

**Key CLI verbs**:
- `staffup pool add-candidate` → structured intake, auto-ID
- `staffup pool search "chef de rang disponible ce weekend Lausanne"` → NL search
- `staffup pool update-availability --id 47 --available-from 2026-05-15 --available-to 2026-05-30`
- `staffup pool tag --id 47 --add "EHL" "gastronomie" "anglais courant"`
- `staffup pool reactivate --dormant-since 90d` → batch outreach to dormant profiles

**Read-only UI views**:
- Pool overview: total profiles, active/available now, by role type, by region
- Profile detail: full history, current availability, past placements, ratings
- Dormant alert: "47 profiles haven't been placed in 90+ days"

---

### Module 2: Client CRM `staffup clients` ✅ MVP
**Key entities**: Client (ID, company name, contact name, sector, location, placement history, billing info, status)

**Key CLI verbs**:
- `staffup clients add`
- `staffup clients log-contact --id 12 --note "Intéressés pour événement automne"`
- `staffup clients show-dormant --since 60d` → clients who haven't ordered recently

**Read-only UI views**:
- Client list with last contact / last placement / revenue generated
- Client detail: full history, invoices, contacts

---

### Module 3: Requests & Matching `staffup match` ✅ MVP
**Key entities**: Request (ID, client, role needed, dates, urgency, required profile attributes, status), Match (request → candidate, confirmed/proposed/rejected)

**Key CLI verbs**:
- `staffup match new-request --client 12 --role "chef de rang" --date 2026-05-17 --urgent true`
- `staffup match find --request 34` → NL search returns shortlist with reasoning
- `staffup match propose --request 34 --candidates 47,51,53` → notifies candidates via WhatsApp/SMS
- `staffup match confirm --request 34 --candidate 47`
- `staffup match log-outcome --match 88 --rating 5 --note "client très satisfait"`

**Read-only UI views**:
- Active requests: status board (pending match / proposed / confirmed / completed)
- Match detail: which candidates were proposed, who was selected, outcome
- "Why this candidate?" reasoning panel

---

### Module 4: Invoicing `staffup invoice` ✅ MVP
**Key entities**: Invoice (ID, client, match, amount, date, paid/unpaid/overdue)

**Key CLI verbs**:
- `staffup invoice generate --match 88` → auto-fills from match data
- `staffup invoice mark-paid --id 201 --date 2026-05-10`
- `staffup invoice remind --overdue-since 30d` → auto-send reminders

**Read-only UI views**:
- Revenue dashboard: total billed, total paid, outstanding, by client, by month
- Overdue alert: "CHF 4,200 outstanding from 3 clients for 30+ days"

---

### Module 5: Availability Tracking `staffup availability` ⏳ V2
**Key entities**: Availability record (candidate, date range, available/unavailable, notes)

**Key CLI verbs**:
- `staffup availability update --candidate 47 --available 2026-05-15 to 2026-05-25`
- `staffup availability query --role "chef de rang" --dates 2026-05-17 to 2026-05-18 --region VD`

**Read-only UI views**:
- Calendar view: who's available when, by role type
- "Available now" quick filter

---

### Module 6: Communications Log `staffup comms` ⏳ V2
**Key entities**: Communication (direction, candidate/client, channel, date, summary)

**Key CLI verbs**:
- `staffup comms log --to candidate 47 --channel whatsapp --note "Confirmé disponible vendredi"`
- `staffup comms send-batch --candidates 47,51,53 --template "nouvelle-mission"`

**Read-only UI views**:
- Communication timeline per candidate / client
- Audit trail for every contact made

---

### Module 7: Reporting `staffup report` ⏳ V2
**Key CLI verbs**:
- `staffup report monthly` → total requests, matches, revenue, satisfaction rate
- `staffup report top-clients` → by volume and revenue
- `staffup report pool-health` → active/dormant breakdown, by role, by region

**Read-only UI views**:
- Dashboard: live KPIs (requests this month, active matches, revenue MTD, satisfaction rate)

---

## 8. DIFFERENTIATORS — TRINITY vs. CONVENTIONAL SOFTWARE

### What Trinity-shaped StaffUp offers that no competitor does:

| Dimension | Conventional ATS (Bullhorn etc.) | StaffUp Trinity |
|-----------|----------------------------------|-----------------|
| **Interaction** | Navigate to Candidates → Filter → Click through profiles | *"Trouve-moi trois chefs de rang disponibles ce weekend dans 20km de Lausanne"* → shortlist in seconds |
| **Scale without headcount** | Hiring another recruiter to handle more volume | Agent handles the search, notification, and follow-up; Lorraine handles the judgment |
| **Data entry** | Lorraine fills 15 fields per candidate manually | Agent parses CV + extracts fields; Lorraine reviews |
| **Dormant pool** | Graveyard that grows | Agent proactively re-engages when relevant missions open |
| **Follow-up** | Manual reminder to call client | Agent monitors client dormancy and flags |
| **Invoice speed** | Manual creation after each placement | Auto-generated from confirmed match data |
| **Expansion** | Same tool, more work for Lorraine | Same tool, same workflow, agent handles new region |
| **Reasoning visible** | "Black box" recommendations | Shows why it suggested candidate 47 — trust is earned |

---

## 9. PITCH TALKING POINTS FOR ANDREA

### The Opening Frame
> *"Lorraine, tu vends de la vitesse et de la précision — la bonne personne au bon endroit en moins de 24h. Mais en ce moment, la vitesse vient de toi, de ta mémoire, et de tes doigts sur WhatsApp. On veut changer ça."*

### The Inversion
> *"On te propose de construire un système où l'agent IA fait la recherche, les propositions, et les relances — et toi tu fais ce que tu fais mieux que n'importe quel logiciel: le jugement. Quelle candidature est vraiment la bonne pour ce client. Quelle relation mérite d'être cultivée. C'est ça la symbiose."*

### The Wow Moment (demo in mockup)
> *"Imagine: une demande arrive d'un hôtel à Wengen à 23h. Tu dors. L'agent scanne ta base de 5,000 profils, identifie les trois meilleurs candidats disponibles ce week-end dans la région bernoise, et te présente le shortlist avec les raisons. Le matin tu approuves en 30 secondes. Le client a sa réponse avant 9h."*

### The Scale Argument
> *"Tu es à 5,000 profils aujourd'hui. Demain tu en as 15,000. Manuellement, c'est impossible à gérer. Avec Trinity, 15,000 profils et 5,000 se gèrent pareil — c'est l'agent qui cherche, pas toi."*

### The Differentiation Argument
> *"Personne n'a construit ça pour ton modèle. Les gros ATS sont faits pour les agences d'intérim classiques avec 50 recruteurs. Toi tu as un autre modèle — mise en relation, fee fixe, client gère l'emploi. On construirait un outil fait exactement pour ça, pas un Bullhorn qu'on essaie de reconfigurer."*

### The Trust-Building Argument
> *"Le système te montre son raisonnement. Il ne te dit pas juste 'candidate 47.' Il te dit: 'Marie a travaillé 3 fois avec Carlton, elle habite à 12 minutes de Wengen, elle est disponible vendredi, et son dernier retour client était 5/5.' Tu gardes le contrôle total. Tu approuves ou tu passes — le système exécute."*

### Anchor to Her Own Words
> *"Tu nous as dit que ton ambition c'est d'automatiser la mise en relation. C'est exactement ça qu'on construit."*

---

## 10. SAMPLE AGENT COMMANDS FOR THE MOCKUP (French, Hospitality Context)

These should appear as sample prompts visible in the chat surface:

**Matching:**
```
"Trouve-moi trois chefs de rang disponibles ce weekend 
dans un rayon de 20km de Lausanne avec expérience gastronomique"
```

```
"Quels candidats service sont disponibles pour le gala de 
l'Orllati Group samedi soir à Genève ?"
```

```
"Relance tous les profils cuisine qui n'ont pas travaillé 
depuis 60 jours dans notre pool Vaud"
```

**Client intelligence:**
```
"Quel est l'historique des missions avec le Carlton ces 12 derniers mois ?"
```

```
"Quels clients n'ont pas passé de commande depuis 45 jours ?"
```

**Finance:**
```
"Génère la facture pour la mise en relation de vendredi avec l'Auberge du Raisin"
```

```
"Quelles factures sont impayées depuis plus de 30 jours ?"
```

**Proactive intelligence (agent-initiated):**
```
Agent: "Marie Dumont (profil 247) est disponible la semaine prochaine. 
Elle correspond parfaitement à la demande en attente du Carlton. 
Voulez-vous que je la propose ?"
```

---

## 11. WHAT TO CONFIRM WITH ANDREA BEFORE THE PITCH

- [ ] What is the meeting format? (In person? Video? How long?)
- [ ] Does Lorraine know this is a software pitch, or does she think it's something else?
- [ ] Is Clara's mockup in French or English?
- [ ] What's the timeline — when is the meeting?
- [ ] Is there a budget range Lorraine has indicated, or is this exploratory?
- [ ] Does Andrea want to pitch a full Trinity platform build, or just a demo/MVP first?
- [ ] Should the pitch address the transition from her current tools (spreadsheets/WhatsApp)?
- [ ] Does Andrea want to position blackcode as the builder, or is this a separate product brand?

---

## SOURCES USED

| Source | Type | Date |
|--------|------|------|
| staffup.ch (homepage, /about, /profiles, /jobs, /cgv) | Primary website | Accessed May 2026 |
| PME.ch — *"Recrutement hôtellerie: StaffUp bouscule l'intérim classique"* | Press | July 3, 2025 |
| LinkedIn (company + personal) | Social | Accessed May 2026 |
| swissstaffing.ch | Industry association | Accessed May 2026 |
| tempservice.ch | CBA enforcement body | Accessed May 2026 |
| StaffUp_ID_V0.pdf | Internal brand doc | Provided |
| Bullhorn G2 reviews | User research | Accessed May 2026 |
| Vincere.io | Competitor research | Accessed May 2026 |
| Paradox.ai | Competitor research | Accessed May 2026 |
| Abacus.ch | Swiss payroll context | Accessed May 2026 |

---

*Written by Companion (Andrea's AI) — May 11, 2026. All confirmed facts are from primary sources. Inferences are marked ⚠️.*
