# ProjectMatch (`projectmatch`)

> **SIWES & Final Year Computer Science Project Finder, Scoping & Proposal Guidance CLI**

---

### CRITICAL DESIGN PRINCIPLE & INTENDED USE STATEMENT

> **IMPORTANT NOTICE:**
> **ProjectMatch RECOMMENDS and GUIDES — it NEVER generates or builds projects for you.**
> It must never output actual project source code, scaffolded repositories, or complete implementations.
> Its job ends at: suggesting project ideas, describing scope, suggesting tech stacks, breaking down milestones, helping you articulate supervisor approval reasoning, and preparing you to explain and defend your own work.
> **ProjectMatch does NOT write your actual proposal document or guarantee supervisor approval.**
> **You are expected to design, build, and be able to explain every line of code in your final submission.**

---

## Overview

Choosing a SIWES (Students Industrial Work Experience Scheme) or Final Year Project (FYP) under time pressure is daunting. Many Computer Science students either choose over-ambitious enterprise projects or overly trivial scripts that fail academic supervisor or defense panel scrutiny.

**ProjectMatch** is a zero-configuration, zero-cost, offline-first CLI dev tool that matches undergraduate CS students with realistic, portfolio-worthy, and defensible project ideas based on project type, skill level, interests, and timeframe.

## Key Features

- **Curated Project Bank**: 230+ structured, realistic CS projects covering Web, Mobile, Backend, Data Science, Systems/Networking, and Security.
- **Two Distinct Project Types**: Built-in support for both **SIWES** (160+ practical entries) and **Final Year Projects** (70+ academic entries with supervisor-approval reasoning).
- **Per-Topic Supervisor Defense Reasoning**: FYP matches include problem statements, suitability rationale, supervisor approval factors, and defense talking points.
- **Proposal & Defense Guidance Commands**: Dedicated static guidance commands (`projectmatch proposal` and `projectmatch checklist`) for proposal writing and panel interview preparation.
- **Zero Setup & Zero Cost**: Works 100% offline out-of-the-box with no API key or database required.
- **Optional AI Layer**: Wire up Anthropic, OpenAI, Gemini, or local Ollama for tailored AI recommendations beyond the curated bank (`--ai` flag).
- **Polished UX**: Terminal interface formatted with clear milestones, tech stacks, difficulty tiers, and structured defense guidance.

---

## Supported Project Types: SIWES vs Final Year Project (FYP)

ProjectMatch explicitly distinguishes between two major academic scoping milestones:

1. **SIWES Industrial Training (`siwes`)**:
   - Demonstrates practical engineering skills learned during industrial placement.
   - Shorter completion timeframe (4-8 weeks).
   - Centered around an end-of-placement panel defense presentation.

2. **Final Year Project (`final-year`)**:
   - Substantial academic thesis project requiring **upfront supervisor approval** via a written proposal.
   - Demands a clear problem statement and academic/technical depth.
   - Displays four per-topic supervisor approval & defense fields during `find`:
     - **Problem Statement**: One clear sentence defining the specific problem or inefficiency addressed.
     - **Why This Suits You**: Explanation of why the topic matches your skill level and available timeframe.
     - **Why a Supervisor Might Approve This**: Convincing academic and feasibility arguments (phrased as *"likely to be viewed favorably because..."* — never a guarantee).
     - **Defending Your Choice (If Asked)**: 2-3 concrete talking points to explain to your supervisor why you selected this topic.

---

## Using ProjectMatch at Scale (For Large Cohorts & Supervisors)

ProjectMatch works 100% offline out of the box using its curated 230+ project bank with score-based subset sampling.

For academic supervisors coordinating large student cohorts (100+ students per year) who want maximum project variety across their group:

- **`--ai` Flag for Unlimited Variety**: Passing `--ai` when running `projectmatch find --ai` queries an AI provider to synthesize additional tailored project concepts beyond the fixed bank.
- **Free Local Setup with Ollama**: Cost is never a barrier. You can configure a local, completely free LLM via [Ollama](https://ollama.com) (no API key or subscription required):
  ```bash
  projectmatch config set-provider ollama
  projectmatch config set-model llama3
  projectmatch config set-url http://localhost:11434
  ```
- **Cloud AI Providers**: Alternatively, configure OpenAI, Anthropic, or Gemini API keys. See [Command Reference: `projectmatch config`](#5-projectmatch-config-action-value) below for setup instructions.

---

## Installation

```bash
# Global installation via npm
npm install -g projectmatch

# Or run directly via npx without installation
npx projectmatch --help
```

---

## Command Reference

### 1. `projectmatch find [--ai]`
Launch the interactive project matching wizard:
- Prompts for **project type** (`siwes` or `final-year`), skill level, interest area, available timeframe (weeks), and known languages/tools.
- Filters and ranks the project bank to deliver top recommendations.
- For Final Year Projects, displays all 4 supervisor approval and defense fields.
- Includes `--ai` flag to fetch additional AI-generated recommendations if an LLM provider is configured.

```bash
projectmatch find
```

### 2. `projectmatch list [--type <type>] [--category <cat>] [--level <level>]`
Browse the curated project bank directly with optional filters:
- `--type, -t`: `siwes`, `final-year`
- `--category, -c`: `web`, `mobile`, `backend`, `data`, `systems`, `security`
- `--level, -l`: `beginner`, `intermediate`, `advanced`

```bash
# List all Final Year Projects in Backend Development
projectmatch list --type final-year --category backend
```

### 3. `projectmatch proposal`
Display general guidance for writing a Final Year Project proposal for supervisor approval:
- Structuring clear problem statements.
- Justifying scope and feasibility within academic timeframes.
- Avoiding common proposal rejection reasons.
- Pre-submission self-check list.

```bash
projectmatch proposal
```

### 4. `projectmatch checklist`
Display the SIWES final-defence readiness checklist and self-evaluation panel questions.

```bash
projectmatch checklist
```

### 5. `projectmatch config <action> [value]`
Configure optional AI provider settings (stored locally at `~/.projectmatch/config.json`).

```bash
# Show current config
projectmatch config show

# Set provider (supported: anthropic, openai, gemini, ollama)
projectmatch config set-provider ollama

# Set custom model or local URL (e.g. for Ollama)
projectmatch config set-model llama3
projectmatch config set-url http://localhost:11434
```

---

## Interactive Flow Example (Final Year Project)

```
$ projectmatch find

ProjectMatch — SIWES & Final Year Project Scope Finder

NOTICE: ProjectMatch RECOMMENDS and GUIDES — it NEVER generates or builds code.
You are expected to design, implement, and defend your own work in your submission.

? Select project type you are scoping for: Final Year Project (Academic focus, supervisor proposal approval, topic defense)
? Select your current skill level: Intermediate — Comfortable with web/mobile frameworks, databases, APIs
? Select your primary interest category: Web Development (Dashboards, portals, web tools)
? How many weeks do you have available for project completion?: 8
? List programming languages or tools you already know: React, Node.js, PostgreSQL

Searching curated project bank for best matches...

Found 5 top-ranked project recommendations for you:

--------------------------------------------------------------------------------
#1 [Curated Bank] Multi-Criteria Student Peer Review & Code Rubric Platform (ID: web-fyp-5)
Type: Final Year Project  |  Category: WEB  |  Level: intermediate  |  Timeframe: 6-8 weeks (~2 months)

A specialized web workspace for software engineering courses where students submit project repositories, conduct anonymous peer reviews against rubrics, and track feedback.

Problem Statement:
Manual peer code review in large programming classes lacks standardized evaluation rubrics and double-blind anonymity controls.

Why This Suits You:
Well-suited for an intermediate developer with framework experience building multi-step feedback workflows.

Why a Supervisor Might Approve This:
This topic is likely to be viewed favorably because peer assessment methodologies are well-regarded in computer science pedagogy.

Defending Your Choice (If Asked):
  1. Peer review in programming assignments is hard to manage at scale without double-blind automation.
  2. I implemented a double-blind rubric scoring engine that calibrates student evaluation scores.
  3. The platform improves feedback quality while reducing instructor grading workload.

Suggested Tech Stack: Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL

Implementation Milestones (3-5 Steps):
  1. Build assignment rubric creator supporting weighted scoring criteria.
  2. Implement double-blind peer assignment distribution engine.
  3. Create inline markdown review editor with rating validation.
  4. Compute aggregated peer grades and instructor calibration scores.
```

---

## License

[MIT](LICENSE) (c) 2026 Fayol Smith
