# StaffUp Mockup — Developer README

> **You are Claude Code.** You're being asked to build a working HTML/CSS/JS mockup that functions as a sales presentation for a real Swiss founder named Lorraine Costa. This README orients you. The full brief is in `BRIEF.md`.

---

## What this is

This is a **mockup that doubles as a sales pitch**. Not a production app. Not a prototype to ship. A self-contained, navigable, interactive HTML walkthrough that demonstrates what a Trinity Architecture + Companion-powered platform would look like for StaffUp, a Lausanne-based hospitality staffing startup.

The mockup will be shown live to Lorraine Costa, the CEO of StaffUp, in a meeting. **It must convince her** that:

1. We deeply understand her business (specifics, not generic SaaS slop)
2. The Trinity + Companion architecture solves her actual pain points
3. We can build this for real

It is in **French**. Lorraine works in French. Her clients are in Romandie. Every word the user sees is in French.

It uses **mock data**. No real APIs. No backend. Just a beautiful, navigable HTML/CSS/JS walkthrough with realistic Swiss hospitality data baked in.

---

## Required reading (in order)

Before writing a single line of code, read these documents in this order:

1. **`../../README.md`** — What Trinity Architecture is (the parent framework)
2. **`../../PHILOSOPHY.md`** — The philosophy behind Trinity (Prompt → Tools → Software, version-locking, why this is different)
3. **`../../blackcode/README.md`** — A reference Trinity implementation for blackcode SA (the company building this) — so you understand what a Trinity module looks like in practice
4. **`../../blackcode/modules.md`** — The list of Trinity modules already in production
5. **`../../blackcode/tax-declaration-2025.md`** — A worked example of a Trinity module spec (entities, CLI verbs, UI views)
6. **`../README.md`** — The StaffUp project overview
7. **`../findings.md`** — ⭐ **The deep research dossier on StaffUp.** Confirmed business profile, Lorraine's biography, her own quoted words, brand colors, full domain map, pain points ranked by pitch resonance, proposed Trinity module map, sample agent commands in French. Read this carefully — every fact in the mockup must be consistent with what's in here.
8. **`../mockup-notes.md`** — Notes on what the mockup must communicate, what to avoid, brand colors, layout direction
9. **`./BRIEF.md`** — The complete brief for this mockup (the most important document — read it last because it builds on all the above)

---

## Where things live

```
trinity-architecture/
├── README.md                          ← Trinity overview
├── PHILOSOPHY.md                      ← Trinity philosophy
├── blackcode/                         ← Reference implementation
│   ├── README.md
│   ├── modules.md
│   └── tax-declaration-2025.md
└── staffup/
    ├── README.md                      ← Project overview
    ├── findings.md                    ← ⭐ Research dossier
    ├── mockup-notes.md                ← Visual / UX direction
    ├── Research/
    │   ├── research-brief.md
    │   └── StaffUp_ID_V0.pdf          ← Brand identity (colors, fonts)
    └── mockup/                        ← ⭐ YOU ARE HERE
        ├── README.md                  ← This file
        └── BRIEF.md                   ← The brief
```

---

## Stack

Plain HTML, CSS, JavaScript. No framework required. Tailwind via CDN is fine if you want utility classes. **No build step.** Lorraine's team will open `index.html` in a browser and click through. That's the entire deployment story.

If you want richness:
- Lucide icons via CDN
- A small JS file for state management between screens
- LocalStorage to persist demo state between page loads (optional but nice)
- Maybe Chart.js for one or two visualisations

What it must NOT have:
- npm install
- A build pipeline
- A backend
- External API calls
- Any actual authentication

It must run by double-clicking `index.html`.

---

## Output

Place all mockup files in this folder (`staffup/mockup/`). Suggested structure:

```
mockup/
├── README.md                  ← Already exists (this file)
├── BRIEF.md                   ← Already exists (the brief)
├── index.html                 ← The entry point — opens in browser
├── pages/                     ← Individual screens
│   ├── 01-cover.html
│   ├── 02-problem.html
│   ├── 03-architecture.html
│   ├── 04-platform-demo.html
│   ├── ... etc
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── nav.js             ← Cross-page navigation
│   │   ├── data.js            ← Mock data (candidates, clients, missions)
│   │   └── interactions.js    ← Demo interactions
│   └── images/                ← Any static images you generate or use
└── data/
    └── mock-data.json         ← Realistic Swiss hospitality data
```

---

## Tone

- **Confident, not salesy.** Lorraine is sharp. She's an EHL graduate doing a master's in entrepreneurship. She'll see through hype.
- **Specific, not generic.** Every example uses real Swiss hospitality context — chef de rang, Auberge du Raisin, mission Carlton, gala Genève. Never "John Doe / Acme Corp."
- **Peer-to-peer.** This is one founder pitching to another. Not a vendor pitching a customer.
- **French throughout.** Including button labels, tooltips, error states, every visible string.

---

## When you're done

Run through the entire walkthrough yourself, in a browser, as if you were Andrea presenting it to Lorraine. If any screen feels generic, fix it. If any French phrasing feels stiff, soften it. If anything looks like a "dashboard template," redesign it.

The mockup is done when it feels like Lorraine's company already exists in this software, and she just needs to log in.
