# staffup — Research Brief

> **For the agent picking this up in a fresh conversation:**
> 1. Read `../README.md` (root touchstone).
> 2. Read `../PHILOSOPHY.md`.
> 3. Read `README.md` (this folder).
> 4. Then proceed with the research tasks below.

---

## Goal

Build enough understanding of **staffup** (Lorraine's business) to:
1. Inform Clara's mockup design.
2. Inform Andrea's Trinity Architecture pitch.
3. Sketch what Trinity-shaped modules a staffup management platform would need.

---

## Research Tasks

### 1. Identify the business
- Search for "staffup" / "staff up" / "StaffUp" — likely based in Switzerland or Europe
- Find their website if it exists
- Confirm the domain: staffing agency? recruitment platform? HR services?
- Confirm geography (Switzerland? Vaud? broader EU?)
- Confirm size (solo founder? team? client list?)

**Note**: Andrea may need to provide Lorraine's last name or a website URL to disambiguate. If web search returns nothing useful, **stop and ask Andrea** rather than guessing.

### 2. Map the domain
Once the business is identified, understand the standard workflows of that domain:
- For a recruitment agency: candidate intake → screening → matching → placement → invoicing → follow-up
- For a temp staffing platform: shift posting → worker assignment → time tracking → payroll → client billing
- For HR services: contracts → onboarding → payroll → compliance → offboarding

Identify the **entities** (candidates, clients, jobs, placements, shifts, contracts, invoices, etc.) and the **operations** (the verbs the business runs on).

### 3. Identify the pain points
Standard pains in staffing/recruitment software:
- Data scattered across spreadsheets, email, ATS, accounting
- Candidate search is slow and not actually intelligent
- Communication with candidates/clients is manual and easy to drop
- Compliance (Swiss labor law, work permits, social insurance) is a minefield
- Invoicing and revenue tracking is disconnected from the placement workflow

Surface the ones most likely to resonate with Lorraine.

### 4. Sketch Trinity modules for staffup
Translate the domain into a Trinity-shaped module map (parallel to `../blackcode/modules.md`):
- Candidate management (CRUD, search, tagging, history)
- Client / company management
- Job / role management
- Placements / shifts
- Communication log (emails, calls, SMS)
- Contracts & documents
- Invoicing
- Compliance (work permits, social insurance, etc.)
- Reporting / dashboards (read-only UI)

For each module, sketch:
- Key entities
- Key CLI verbs (e.g., `staffup add-candidate`, `staffup match-job`, `staffup send-contract`)
- What read-only UI views the human supervisor needs

### 5. Identify the differentiator
What does a **Trinity-shaped** staffup platform offer that conventional staffing software (Bullhorn, Recruitee, JobAdder, Personio, etc.) doesn't?

Likely answers:
- Natural language operation — "find me three welders available next week within 30 minutes of Lausanne"
- Bulk operations done conversationally instead of in batch-edit modals
- Compliance automation — agent reads the regulations and applies them
- Audit trail by default — defensive when authorities or clients ask
- The human spends time on **judgment** (which candidate, which client, which strategy) and not on **operation** (clicking through screens)

---

## Output

When research is done, write findings into a new file: `staffup/findings.md` with:
- Confirmed business profile
- Domain map (entities + operations)
- Pain points (ranked by pitch-resonance)
- Proposed Trinity module map for staffup
- Recommended differentiation talking points for Andrea's pitch

Then update `mockup-notes.md` with concrete suggestions for what Clara should put in the mockup.

---

## Constraints

- **Do not invent facts about Lorraine or staffup.** If you can't confirm something, mark it as unconfirmed and ask Andrea.
- **Do not assume Lorraine has already agreed to anything.** The pitch hasn't happened yet.
- **Respect the Trinity philosophy.** The pitch isn't "we'll build you a conventional app" — it's "we'll build you symbiotic software." If research reveals staffup is fundamentally incompatible with that frame, surface that finding.
