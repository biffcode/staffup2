# staffup — Mockup Notes

> Read `../README.md`, `../PHILOSOPHY.md`, and `README.md` (this folder) first.
> For full context on StaffUp and Lorraine, read `findings.md`.

This document captures notes for **Clara's mockup** of the staffup management platform.

---

## Core Principle for the Mockup

The mockup must **communicate the Trinity inversion**, not hide it.

If the mockup looks like a conventional admin dashboard — sidebar, tables with edit buttons, modal forms — we've failed to communicate what we're actually offering. Lorraine will see "another management app" and price-compare us against Personio.

The mockup should make it visceral that:
1. The **agent is the primary operator**.
2. The **human's surface is a window**, not a control panel.
3. **Speed and reversibility** are real product features, not buzzwords.

---

## Brand Colors & Typography (from StaffUp's own identity)

Use StaffUp's own visual identity to make this feel immediately theirs:

| Role | Color | Hex |
|------|-------|-----|
| **Primary / navbar / backgrounds** | Dark navy | `#151f36` |
| **Accent / active states / CTA** | Crimson | `#c42a4e` |
| **Soft highlights / tags / chips** | Soft pink | `#df98a6` |
| **Secondary text / muted elements** | Grey | `#8b8f99` |
| **Body text** | Near-white on dark | `#f5f5f5` or white |

**Font**: **DM Sans** — already their brand font. Use it throughout. Light/Regular for body, Medium/SemiBold for headings.

**Language**: All copy in **French** (Lorraine's language, Romandy context).

---

## Mockup Architecture — What to Show

The mockup should feel like a single unified view with the **agent chat front and center**, surrounded by live data panels that update as the agent operates.

### Screen 1: Main Operating View (The "Now" Screen)

**Layout concept**: Split screen or card-grid with the agent chat prominent.

#### Left/Center — The Agent Chat Surface
- Prominent, open text field labeled: *"Parlez à votre assistant staffup…"*
- NOT a small corner widget. This is the primary surface.
- Show 3–4 sample prompts already visible above the input (clickable):
  - *"Trouve-moi trois chefs de rang disponibles ce weekend dans 20km de Lausanne"*
  - *"Quels profils n'ont pas été placés depuis 60 jours ?"*
  - *"Génère la facture pour la mise en relation avec le Carlton de vendredi"*
  - *"Quels clients n'ont pas commandé depuis 45 jours ?"*

- Show a **sample exchange already in progress**:
  ```
  Lorraine: Trouve-moi trois chefs de rang disponibles ce weekend 
             dans un rayon de 20km de Lausanne avec expérience gastronomique
  
  Agent: ✓ J'ai trouvé 3 correspondances dans votre pool :
  
  ① Marie Dumont (profil #247)
     📍 Prilly · 8 min de Lausanne
     ⭐ Chef de rang, expérience gastronomique 4 ans, EHL alumni
     ✅ Disponible sam–dim · Dernier placement: Carlton (5/5)
  
  ② Antoine Berger (profil #183)
     📍 Renens · 12 min de Lausanne
     ⭐ Chef de rang, sommelier certifié, bilingue FR/DE
     ✅ Disponible à partir de samedi matin
  
  ③ Nadia Vasseur (profil #312)
     📍 Morges · 18 min de Lausanne
     ⭐ Chef de rang, expérience événementiel (galas, cocktails)
     ✅ Disponible tout le weekend
  
  Voulez-vous proposer ces trois candidats au client, 
  ou modifier la sélection ?
  
  [Proposer les 3 →]  [Modifier]  [Voir les profils complets]
  ```

#### Right side — Live Status Panels (read-only)

**Panel 1: Demandes en cours** (Active requests)
```
🔴 URGENT  Hôtel du Lac   Chef de cuisine · Samedi 17 mai   → En attente de match
🟡 En cours  Carlton       Service gala · Dimanche 18 mai    → 3 candidats proposés
🟢 Confirmé  Orllati       Buffet · Vendredi 16 mai          → Marie Dumont ✓
```

**Panel 2: Pool Santé** (Pool health)
```
Candidats actifs ce mois    ●●●●○  127 / 312 profils
Disponibles ce weekend             43 profils
Profils dormants (60j+)     ⚠️    47 profils sans mission
Nouveaux inscrits ce mois          12 nouveaux
```

**Panel 3: Revenus** (Revenue — simple)
```
Mai 2026 (en cours)
Facturé           CHF 8,400
Encaissé          CHF 5,200
En attente                3 factures
```

---

### Screen 2: Timeline / Audit Feed

A persistent vertical timeline showing what the agent has done — not a log page, but a live feed visible alongside the main screen or accessible with one click.

```
Aujourd'hui
  14:23  ✓ Contrat-type envoyé à Marie Dumont (profil #247) pour mission Carlton
  13:45  ✓ Facture #201 générée — Auberge du Raisin — CHF 1,200
  11:12  ✓ 3 candidats proposés à Hôtel du Lac pour mission cuisine samedi
  09:31  ⚡ Lorraine a approuvé le match #88 (Antoine Berger → Orllati)

Hier
  17:05  💬 Relance automatique envoyée à 47 profils dormants
  14:30  ✓ Pool mis à jour: 12 nouvelles disponibilités reçues
  10:15  ✓ Rappel de paiement envoyé à BuildCo SARL (facture #189, 32j de retard)
```

Each entry has a subtle `↩ Annuler` (undo) affordance.

---

### Screen 3: Profile Detail (Read-only, drill-in)

When Lorraine clicks on a candidate from the chat response:

```
Marie Dumont   #247                                  [Marquer indisponible]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Prilly, VD · ☎ +41 79 ••• •••• · 📧 m.dumont@...

Rôles          Chef de rang · Maître d'hôtel · Événementiel
Compétences    Gastronomie · Sommellerie · FR/EN · EHL 2022
Permis         🇨🇭 Suissesse · Permis non requis

Disponibilité (Mai)
  ▓▓▓░░▓▓░░▓▓▓▓░░▓▓░░▓▓▓▓░░░░
  Disponible     Indisponible     À confirmer

Historique des placements (5 missions)
  Mai 2026    Orllati Group · Gala Lausanne · ⭐⭐⭐⭐⭐
  Avr 2026    Carlton Hotel · Service dîner · ⭐⭐⭐⭐⭐
  Fév 2026    Auberge du Raisin · Service · ⭐⭐⭐⭐☆
  Déc 2025    Carlton Hotel · Réveillon · ⭐⭐⭐⭐⭐
  Nov 2025    FC Echallens · Événement · ⭐⭐⭐⭐⭐

Notes agent    "Client Carlton demande en priorité pour futurs galas"
```

No edit buttons. Only: `[Proposer pour une mission →]` which opens the agent chat with a pre-filled prompt.

---

### Screen 4: The "Why" Panel (Agent Reasoning — Build Trust)

When the agent proposes candidates, show a reasoning panel. This is the **trust-builder** — Lorraine needs to understand why before she'll delegate judgment.

```
Pourquoi Marie Dumont pour ce client ?

✓ Expérience gastronomique     4 ans de service haut de gamme
✓ Historique Carlton           3 missions, toutes 5/5 — client l'a demandée nommément
✓ Proximité                    Prilly → Lausanne: 8 minutes, pas de voiture nécessaire
✓ Disponibilité confirmée      Répondu "disponible" par WhatsApp il y a 2 jours
✓ Aucun conflit                Pas d'autre mission ce weekend dans le système

Risques identifiés             Aucun
Confiance de l'agent           ████████░░  87%
```

---

## Intervention Controls (Minimal but Visible)

Place these in the top-right corner of the screen — present but not dominant:

```
[⏸ Pause l'agent]  [↩ Annuler la dernière action]  [✓ Approuver action en attente]
```

---

## Proactive Agent Messages (Agent-Initiated)

Show the agent initiating — not just responding. This communicates the "the agent works for you even when you're not there" promise.

```
Agent: ⚡ J'ai détecté 3 situations qui nécessitent votre attention :

1. Marie Dumont (profil #247) est disponible la semaine prochaine. 
   Elle correspond à la demande en attente de l'Hôtel du Lac. 
   → Voulez-vous que je la propose ?

2. Facture #189 (BuildCo SARL, CHF 2,400) est impayée depuis 32 jours.
   → Envoyer un rappel automatique ?

3. 47 profils cuisine n'ont pas été placés depuis 60+ jours.
   → Lancer une campagne de réactivation ?

[Approuver tout →]  [Revoir un par un]  [Ignorer]
```

---

## What NOT to Include

- ❌ A traditional sidebar with 12 entity types ("Candidats," "Offres," "Placements," "Factures"…)
- ❌ Tables with row-level edit buttons
- ❌ "+ Nouveau candidat" buttons everywhere
- ❌ Multi-step form wizards
- ❌ Settings pages with 40 toggles
- ❌ Anything that says "glisser-déposer pour assigner"
- ❌ Kanban board for candidates
- ❌ Calendar as primary view
- ❌ "Dashboard" with 12 donut charts

These are the **old paradigm**. They communicate "we built you another conventional app."

---

## Visual Tone

- **Dark navy background** (`#151f36`) — premium, focused, not generic SaaS-blue
- **Crimson accents** (`#c42a4e`) — for active states, CTAs, urgent alerts
- **Soft pink** (`#df98a6`) — for tags, chips, candidate badges
- **DM Sans** throughout — their font, already theirs
- Spacious, high-contrast, type-forward — not icon-soup
- The chat feels like iMessage or Slack with a smart colleague — not a chatbot bubble widget
- Numbers and live state everywhere — this is a live system, not a filing cabinet
- **Everything in French** — Lorraine is Romandie-based and this should feel native

---

## The One Sentence the Mockup Must Land

**"Vous parlez à votre assistant. L'assistant travaille pour vous. Vous supervisez. Vous décidez."**

If someone looks at the mockup for 10 seconds and gets that sentence, the mockup worked.

---

## Updated Notes (Post-Research — May 11, 2026)

Updated with confirmed data from web research:
- StaffUp is a **matching/introduction fee** model — NOT a full temp agency. She does NOT manage payroll, SUVA, or employment contracts. The Trinity MVP should focus on: pool management, client CRM, request/match workflow, and invoicing.
- Lorraine's primary language is **French**. All copy in the mockup should be French.
- Her explicit stated goal: *"automatiser le processus de mise en relation."* Use these exact words in the pitch.
- The business has 5,000+ profiles managed manually — this is the core pain point to visualize.
- She's actively expanding into German-speaking Switzerland — show the platform handles multiple regions.
- Her brand font is DM Sans (per identity PDF). The **live website uses Space Grotesk** — same feel, slightly different. Either works for the mockup; DM Sans is closer to brand intent.
- **The website is NOT Wix.** It's a custom React 18 + Vite + Firebase + Tailwind SPA. Someone built this properly — either a developer she hired, or she used an AI tool (Bolt/Lovable/v0). This means she's technically sophisticated enough to have commissioned real software, and that Firebase is likely already holding her candidate/client data. The Trinity mockup should acknowledge this: we're not replacing a spreadsheet, we may be building on top of or migrating from Firebase.
- She has a PME.ch feature (July 2025) — she's a credible, recognized founder. Don't patronize. Pitch peer-to-peer.
- She's doing a master in entrepreneurship at ESC Paris — she understands startups and growth. Speak that language.
