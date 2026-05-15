# UNDERSTANDING — StaffUp Mockup

> Written by Claude Code after reading: trinity-architecture/README.md, PHILOSOPHY.md, blackcode/README.md, blackcode/modules.md, blackcode/tax-declaration-2025.md, staffup/README.md, staffup/findings.md, staffup/mockup-notes.md, and mockup/BRIEF.md.

This document records what I understood from the brief before writing any code. Andrea, please correct anything wrong before I start building.

---

## 1. What the mockup needs to accomplish

A **self-contained interactive HTML walkthrough** (no build step, no backend, double-click `index.html`) that simultaneously functions as:

1. **A sales presentation** for Lorraine Costa, founder of StaffUp / Hospitality & more-COSTA, in a live meeting with Andrea.
2. **A working-feeling product demo** of a Trinity + Companion platform built specifically for her business, populated with realistic Swiss hospitality mock data (Carlton Lausanne, Auberge du Raisin, Orllati Group, chefs de rang, galas Genève, Wengen — never "John Doe / Acme Corp").
3. **A closer**, ending with a concrete low-commitment first step she can say yes to.

It must prove three claims to Lorraine:
- We deeply understand her business in specifics.
- The Trinity + Companion architecture solves her actual stated pain (manual matching at scale).
- We can ship this for real.

**Hard constraints I will respect:**
- Stack: plain HTML/CSS/JS, Tailwind via CDN OK, Lucide icons OK, optional Chart.js, optional LocalStorage. No npm, no build pipeline, no backend, no API calls, no auth.
- Language: **French throughout** — every button, tooltip, error string, label.
- Brand: navy `#151f36`, crimson `#c42a4e`, soft pink `#df98a6`, grey `#8b8f99`, near-white `#f5f5f5`, DM Sans.
- Tone: confident, peer-to-peer, founder-to-founder. Not salesy, not patronising. Lorraine is sharp (EHL, ESC Paris master's, innovation prize, PME.ch feature).
- Forbidden surfaces: 12-entity sidebar, row-edit tables, "+ Nouveau" buttons everywhere, multi-step wizards, kanban for candidates, dashboard with 12 donut charts, "powered by AI" without showing the AI work. These signal "generic admin app" and would kill the pitch.

---

## 2. The narrative arc (15 screens, 4 acts)

The walkthrough is structured as a guided story with `Suivant →` / `← Précédent` and a progress indicator showing N/15.

### Act I — Recognition (she sees her own business)
1. **Cover** — StaffUp × Trinity, big confident title, "Démarrer la présentation".
2. **Voici votre marché** — StaffUp as marketplace: sell side (500+ profils) vs buy side (clients) with all arrows converging through Lorraine's phone. Tagline: *"Tout passe par vous. Pour l'instant."*
3. **Le coût caché** — list of weekly manual work with hour estimates, summing to ~12h/week + everything she can't do.

### Act II — Reframe (the OTC → algorithmic trading metaphor)
4. **Votre business, c'est une bourse** — her business as a financial market still trading OTC. Carnet d'ordres held in her head, on WhatsApp.
5. **L'inversion** — Trinity + Companion introduced. The one-liner: *"Vous parlez à votre assistant. L'assistant travaille pour vous. Vous supervisez. Vous décidez."*

### Act III — Demo (this is where the mockup earns its keep)
6. **Tableau de bord** — main operating view: agent chat front and center with the sample exchange (*"Trouve-moi trois chefs de rang…"* → 3 candidates with rich cards) + right-side panels (Demandes en cours, Pool santé, Revenus) + intervention controls (Pause / Annuler / Approuver).
7. **Recherche en langage naturel** — NL search results with the "Why this candidate?" reasoning panel ("Confiance de l'agent: 87%"), three candidates side-by-side.
8. **Profil candidat** — read-only Marie Dumont #247 with the **Lorraine view ↔ public/client view toggle** that protects the moat (no name/contact in public view).
9. **Agent proactif** — Companion-initiated suggestions ("J'ai détecté 3 situations…") with Approve / Review / Ignore.
10. **Acquisition automatique** — Companion beyond Trinity: Instagram/LinkedIn monitoring, EHL graduation pipeline, referral tracking. "Pendant que vous travaillez, votre pool grandit tout seul."
11. **Galerie publique** — anonymous filterable cards (role × region × experience × availability), no names/contact, "Faire une demande pour ce profil →" routes back through StaffUp. Filters must actually filter.
12. **Journal de bord** — vertical audit timeline of every agent action + Lorraine decision, with `↩ Annuler` per entry.

### Act IV — Close
13. **Architecture** — Trinity (Prompt → Tools → Software) + Companion as the orchestration layer, one clean visual.
14. **Pourquoi maintenant** — the window argument: 500 profils is manageable, 5,000 is not. She's expanding into Wengen / German Switzerland right now.
15. **Et après** — concrete next step (e.g., Phase 1: Pool + Match modules in 4 weeks, fixed price), Andrea's contact details, signature CTA.

**The governing metaphor** (OTC → algorithmic trading) is structural backbone, not a recurring drumbeat — used in screens 4, 13, and lightly in 15.

**The moat-protection thread** (permission tiers, disintermediation prevention) is carried by screens 8 and 11.

---

## 3. Concerns and clarifying questions for Andrea

Most of these I can default-decide and proceed if you'd rather not pre-answer — but each affects the result, so I'd rather ask once than guess wrong.

### A. Data discrepancy to resolve
- **500+ vs 5,000+ profiles** — `findings.md` flags this (website says 500+, PME.ch interview says 5,000+). The narrative uses both numbers in different places (screen 2 says "500+", screen 14 says "À 5,000, vous êtes le goulot"). My plan: lead with "500+ profils qualifiés" as the current visible state (it's what's on her own site) and use "5,000" as the forward-looking scale argument in screen 14, framed as "demain 5,000". Does that match how you want to handle it?

### B. The OTC → algorithmic trading metaphor
- Lorraine is doing a master's in entrepreneurship, so she'll get it — but the metaphor could land flat if she's allergic to finance framing. My plan is to use it firmly in screen 4 (the screen literally titled "Votre business, c'est une bourse") and lightly in screens 13/15. **Should I dial it down to a single mention if you're worried she'll find it cold?** Or push it harder because it's distinctive?

### C. Companion's scope beyond Trinity (screen 10)
- The brief says Companion does **Instagram/LinkedIn monitoring, news/event detection, EHL/Vatel graduation pipeline, referral chasing**. These cross into "things that talk to the outside internet" territory and need to be shown believably without overpromising. **How aggressive should I be?** Option A: show them all as already-running agents with realistic recent activity. Option B: show them as "agents you can activate" with one example actually running. I lean A (more impressive, matches "the system works while you sleep"). Confirm?

### D. Pricing / commercial close (screen 15)
- The brief gives an example: "Phase 1 (4 semaines, prix fixe): Module Pool + Module Match en production." **Do you want me to put a placeholder price (e.g., CHF X'XXX) or leave it as "prix fixe — discutons" without a number?** A number is more decisive in a live demo; an absent number gives you negotiation room. Default if you don't say: leave the number out, but include the scope and timeline.

### E. Andrea's contact details on the cover and close screens
- I'll write `Andrea Edelman — blackcode SA` with placeholder email/phone unless you give me the real ones. **Confirm what to put** (or say "use placeholders, you'll fill in later").

### F. The Wengen client
- `findings.md` says she just signed a Wengen hotel group, unnamed. I'll invent a plausible name (e.g., "Hôtel Belvédère Wengen") for mock missions and label it clearly fictional in code comments. **OK?** Or do you have a real client name you'd rather I use / would rather I keep it unnamed?

### G. The reset demo affordance
- I'll put it in a footer or under a discreet `⚙ Démo` menu so it doesn't visually clutter the pitch. **OK?**

### H. One thing I'd push back on slightly
- Screen 12 (Journal de bord) is marked "optional but high-value" in the brief. **I think it's load-bearing**: it's the only place where reversibility (a core Trinity commitment from PHILOSOPHY.md) gets visualised. I'd build it as a real screen, not skip it. Confirming you agree before I commit the hours.

### I. Scope sanity check
- 15 screens is a lot for a mockup. To keep quality high, I'd suggest building all 15 but treating screens 6, 7, 8, 9, 11 as the "hero" screens (where I spend the most polish budget) and screens 2–5, 10, 12–15 as supporting (cleaner but lighter). **Confirm that ordering** — I don't want to under-invest in a screen you consider critical.

---

## What I'll do once green-lit

1. Set up folder structure (`pages/`, `assets/css`, `assets/js`, `data/`).
2. Build `styles.css` (brand system, DM Sans, base typography, button/chip primitives).
3. Build `data.js` with 12+ candidates, 6+ clients, 8+ missions, agent actions, invoices — all plausibly Swiss-hospitality.
4. Build `nav.js` (progress bar, prev/next, deep-link to step).
5. Build Act I → Act IV in order, walking the deck end-to-end before declaring done.
6. Final pass: read every French string aloud (mentally), kill anything that sounds like generic SaaS, verify all interactions work in a clean browser session.

**Standing by for green light or corrections.**
