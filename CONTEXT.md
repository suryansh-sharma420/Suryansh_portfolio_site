---
name: Portfolio Website Context
description: Domain model and decisions for Suryansh Sharma's portfolio site
type: project
---

# Portfolio Website — Domain Context

## Who This Site Is For
Dual audience: **technical engineers/hiring managers** (primary) + **executive/non-technical recruiters** (secondary).
Mode toggle: sliding pill UI — "Engineer" ↔ "Executive". Same hardcoded data, two presentation layers.

## Site Structure
- `/` — Hero, Experience, Skills
- `/projects` — Grid of 6 project cards
- `/projects/[slug]` — Drill-down per project (currently: static hardcoded data + generic HUD animation)
- `/blog` — Placeholder, not being built now

## Projects — Revised Master List
GitHub handle: `suryansh-sharma420`

| # | Name | Local Path | GitHub | Show Now? | Notes |
|---|------|-----------|--------|-----------|-------|
### Tier 1 — CORE (4-5 featured, strong, complete)
| # | Name | Local Path | Description | Status |
|---|------|-----------|-------------|--------|
| 1 | Zorvyn | `D:\Company_Specific\zorvyn` | FastAPI financial mgmt backend — RBAC (Admin/Analyst/Viewer), JWT auth, analytics engine (MoM growth, savings rate), 100% Pytest coverage, clean 3-layer arch | GitHub exists |
| 2 | Sagepilot (Order Supervisor) | `D:\Company_Specific\Sagepilot.ai\order_supervisor` | Autonomous agent system — each e-commerce order gets a dedicated Llama-3 supervisor agent, watches events (payment fail, shipment), takes actions; FastAPI + PostgreSQL + React | GitHub exists |
| 3 | Propaganda Detection | `D:\Projects\capstone\sem_7\Propaganda_detection_project` | XLM-RoBERTa sequential transfer learning, EN/HI cross-lingual, real metrics: 75.3% recall 100% specificity on 185 samples | GitHub (ipynb) |
| 4 | LLM Red Teaming Eval | `D:\Tech_Mahindra\VERTICAL_REDTEAMING\redTeamingRevamp\red-teaming-eval` | Express.js + Garak backend, React/Vite frontend, proxy orchestration, multi-route eval (run/models/chat/documents/evaluation) | Exists locally, needs fork |

### Tier 2 — EXPLORE (shown below fold, honest POC/ideation labels)
| # | Name | Status | Label |
|---|------|--------|-------|
| 5 | Scam-Proof Ordering App | local POC, untested | POC |
| 6 | Unified Billing Engine (MoveInSync) | old version, needs update | POC |
| 7 | Real-time Video Enhancement | idea only, impl broken | IDEATION |
| 8 | DSA Submissions | NeetCode → GitHub auto-push | ACTIVE |

**DSA repo**: https://github.com/suryansh-sharma420/neetcode-submissions-28x1abk4

### Project Display Architecture
- **Above fold**: 4-5 Tier 1 cards (full drill-down)
- **Below fold / scroll**: Tier 2 cards with honest `[POC]` / `[IDEATION]` / `[ACTIVE]` badges — less detail, link to repo if exists
- **Dropped from old portfolio**: billing-engine (replaced by Zorvyn), multimodal-rag (no local code), ai-pm-tool (private)

**DROP from current portfolio:** `billing-engine` (replaced by Zorvyn), `multimodal-rag` (no local code found), `video-enhancement` (impl broken)
**ADD to portfolio:** Zorvyn, Sagepilot, Scam-Proof Ordering App, DSA tracker

## "What I Learned" — to fill per project (post-grill)

## Drill-Down Page — Desired State
- Real GitHub repo link per project
- GitHub Pages/deployment link where available
- Architecture diagram (Mermaid or better — see Decisions)
- "What I learned" — 2 lines, honest, per project (to be filled after grilling)
- No fake metrics, no generic HUD circle
- Future: Docker "run locally" button (placeholder only for now)

## 3D / Animation Strategy
- Start with **one** 3D element (skills section candidate)
- Tool: Spline (design) → export React component, or React Three Fiber + Drei
- Scroll animations: Framer Motion
- Iterative — not all at once

## Backend Decision
- No backend now
- Contact form: use Resend or Formspree (external service)
- Future need: CMS-like ability to add content on deployed app without redeploy

## Versioning Strategy
- For developer's own record only, not shown on UI
- Format: `docs/versions/v1.md`, `v2.md`, etc. — snapshot of what changed each version
- Git tags align with version files

## Tech Stack
Next.js 15, TypeScript, Tailwind CSS, Material Symbols icons, Space Grotesk + body font
Deployed on Netlify. CI/CD via Netlify auto-deploy on push to main.

## V2 Scope (current, minimal time budget)
- [ ] Replace project data with Tier 1/2 real list
- [ ] Sliding pill mode toggle (text labels, localStorage persist)
- [ ] Resume link fixed ✅ DONE
- [ ] Basic drill-down for Tier 2 projects (simpler than Tier 1)
- [ ] `docs/versions/v1.md` + `v2.md` in repo
- ~~Contact form~~ — DROPPED (mailto link in hero sufficient)

## V3 Scope (deferred)
- Spline 3D element in Skills section
- Framer Motion scroll animations
- react-flow architecture diagrams per Tier 1 project
- Docker "run locally" button
- Blog (MDX)
- Deploy Propaganda Detection as live demo
- Add Scam App, Recipe Gen, Video Enhancement once ready

## Obsidian Vault
- Location: `D:\Obsidian\Portfolio_Website\`
- MCP: no connector in registry — use Claude Code to read/write files directly
- Structure: HOME.md, Decisions/, Architecture/, Learnings/, Bugs/, Versions/, Projects/, Future_Scope/
