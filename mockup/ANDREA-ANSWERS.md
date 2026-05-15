# Andrea's Answers to UNDERSTANDING.md

> Claude — Andrea read your UNDERSTANDING.md. He says **thank you for your cleverness and diligence, especially the pushback on screen 12 (Journal de bord)**. You were right.
>
> Read this whole file before resuming. Then build Phase 1 (see end).

---

## A. Profile counts — drop hard numbers

The numbers are speculative. Site says 500+, PME.ch says 5,000+, Andrea heard 3,000 in a WhatsApp group. **We don't know.**

**Do NOT make specific claims.** Use qualitative French phrasing throughout:

- *"des centaines de profils qualifiés"*
- *"votre base ne cesse de grandir"*
- *"à l'échelle où vous êtes aujourd'hui"* / *"à l'échelle où vous serez demain"*
- *"votre pool actuel"* / *"votre pool de demain"*

Never quote a number we cannot defend in the meeting. Andrea will lose credibility if Lorraine asks "where did you get that?" and we have no answer.

---

## B. The bourse metaphor — push hard, with real economic substance

Push the metaphor firmly. But the intellectually serious version, not finance-bro decoration. The real economic argument:

> **As markets become more efficient through automation, competition stops being about access to the order book. It shifts to higher-order layers: service quality, speed, distribution, relationships, brand.**

Apply that logic to Lorraine specifically:

> **Today, Lorraine's moat is her database — because matching is manual and the database is hard to replicate.**
>
> **Once matching is automated (by anyone — her, or a competitor who builds it first), the database stops being the moat. The moat becomes what's irreducibly hers: her judgment, her EHL network, her client relationships, her taste for who fits where, her brand.**
>
> **Trinity automates the commodity layer (matching) so she can compete on the layer that's actually hers (taste, trust, relationships).**

This is the sharper version of "why now." If she doesn't automate, someone else will — and her moat erodes anyway. Better that she controls the automation and uses the freed time to deepen the layer competitors can't replicate.

Use this thinking explicitly in:
- **Screen 4 ("Votre business, c'est une bourse")** — establish the metaphor
- **Screen 13 ("Architecture")** — return to it: "Trinity automates the commodity. Vous gardez ce qui est irréductiblement vôtre."
- **Screen 14 ("Pourquoi maintenant")** — the urgency framing: this is what's coming whether or not she acts

---

## C. Companion's outside-world agents — always-running, autonomous

Yes, fully autonomous, always-running online agents. Triggered by:
- **Cron jobs** (e.g., monthly availability check on dormant candidates)
- **Event listeners** (new Instagram post matching keywords, new EHL graduation announcement, news article about a new restaurant opening, etc.)

**Important nuance**: Companion itself (the Electron app) is push-to-activate. But the agents we deploy for StaffUp — **once activated** — run autonomously in the cloud, 24/7. They surface their findings to Lorraine for one-click approval, but the monitoring/scanning/drafting work happens without her.

Show them on screen 10 as **already-running agents with realistic recent activity in the timeline**. Examples:

- "Agent Acquisition Instagram — il y a 2h — A repéré @mariesophie_chef (postage gastronomique Lausanne, 1.2k followers). Brouillon de message prêt."
- "Agent EHL Pipeline — hier — 3 nouveaux profils ajoutés à votre pool depuis l'événement carrière."
- "Agent Réactivation — il y a 4 jours — A relancé 47 profils dormants. 12 ont confirmé leur disponibilité."
- "Agent Veille Clients — il y a 6h — L'Hôtel Beau-Rivage vient d'annoncer un événement caritatif pour le 18 juin. Voulez-vous les contacter ?"

---

## D. Pricing — full reframe (this is important)

**Andrea is not selling traditional software.** He's selling **production through TaskHive**, his agentic production platform. TaskHive combines:
- blackcode-issues (the issue tracker / orchestration layer)
- Companion (the agentic supervisor)
- Skilled offshore engineers (Pakistan-based)
- A new way to produce software

The result is the lowest cost-of-production ever achieved for software of this caliber. Lorraine pays:

1. **Cost of production** — what it actually costs to build (low, because of TaskHive)
2. **Monthly maintenance** — to keep it alive, evolving, secure

**No fixed quote. No project-based pricing. Monthly recurring partnership.**

### Screen 15 ("Et après") — the pitch

Frame it as:

> **"Pas un projet à devis. Un partenariat mensuel."**
>
> **"Vous payez ce que ça coûte à produire — le plus bas jamais vu pour ce type de logiciel — plus la maintenance qui le garde vivant."**

Phase 1 deliverable suggestion (what we ship first):
- Pool module (candidate database with NL search)
- Match module (request → shortlist → confirmation)
- Basic invoicing
- One always-running agent (Andrea's pick, probably Réactivation since it has highest visible ROI)

Timeline: a few weeks. Then iterate monthly based on what Lorraine actually uses.

**No specific CHF numbers anywhere on this screen.**

---

## E. Andrea's contact details — use these

- Email: **andrea@blackcode.ch**
- Phone: **+41 79 768 67 26**

Use on cover screen (subtle, presenter attribution) and close screen (clear CTA).

---

## F. Wengen client — invented name fine

Use **"Hôtel Belvédère Wengen"** as a placeholder in mock data. Mark fictional in code comments (`// fictional — placeholder for real Wengen client whose name we don't have`).

---

## G. Reset demo affordance — your call

Implementation detail. Footer link or small ⚙ icon — whichever feels less intrusive in the visual hierarchy. The point is just that someone can reset the demo state without refreshing the browser.

---

## H. Journal de bord — load-bearing, build it properly

Agreed. Andrea says you're right. The audit timeline is the visual proof of the reversibility commitment from PHILOSOPHY.md. **Build it as a real screen**, not a stub. Every entry has a working `↩ Annuler` affordance (mocked behavior is fine — animation + state update — but it must be there).

---

## I. Visual priority — IMPORTANT REFRAME — 2 phases

Andrea wants a **two-phase build**, not a hero-vs-supporting allocation.

### Phase 1 — STRUCTURE (do this now)
- All 15 screens functionally complete
- Navigation working (Suivant / Précédent / progress indicator / deep-link to step)
- Mock data in place (data.js with all candidates, clients, missions, agent actions, invoices)
- Interactions wired up (chat prompts → canned responses, view toggle, gallery filters, approve/reject buttons, undo affordances)
- All French copy in place and reading naturally
- Brand colors and DM Sans applied via CSS tokens — **but no polish pass**
- Functional, not pretty
- Walkable end-to-end without errors

**Do NOT polish individual screens as you build them.** Resist the urge to perfect screen 6 before moving to screen 7. Ship the whole thing rough first.

### Phase 2 — POLISH (only after Phase 1 is validated by Andrea)
- Typography refinement
- Spacing and rhythm
- Illustrations / iconography
- Hover states and micro-animations
- The "feels finished" layer that makes it sales-ready
- Any visual flourishes that elevate hero screens (6, 7, 8, 9, 11) plus the conceptual screens (4, 13)

**Why this split**: Andrea wants to validate the narrative and structure before you spend hours polishing screens that might need re-architecting. It's cheaper to redo a wireframe than to redo a polished page.

---

## What to do now

1. Acknowledge you've read this file (no need to bridge back — just internalize).
2. Build **Phase 1 only**.
3. When Phase 1 is structurally complete and walkable end-to-end, write **`PHASE1-COMPLETE.md`** in this folder summarizing:
   - What's built (each screen, key interactions)
   - What to test / things Andrea should check
   - Any deviations from the brief and why
   - Open questions for Phase 2
4. Stop and wait for Andrea's review before starting Phase 2.

**Green light. Build Phase 1.**
