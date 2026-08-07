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
- **Rebalanced FYP Difficulty Curve**: FYP entries reflect 400–500 level academic expectations: **16.7% Beginner, 41.7% Intermediate, and 41.7% Advanced**, featuring empirical benchmarking, non-trivial engineering, and trade-off evaluations.
- **Conceptual Understanding Prompts**: Every project includes 3-5 curated prompts to give an AI assistant to master underlying concepts without generating project code.
- **Per-Topic Supervisor Defense Reasoning**: FYP matches include problem statements, suitability rationale, supervisor approval factors, and defense talking points.
- **Proposal & Defense Guidance Commands**: Dedicated static guidance commands (`projectmatch proposal` and `projectmatch checklist`) for proposal writing and panel interview preparation.
- **Zero Setup & Zero Cost**: Works 100% offline out-of-the-box with no API key or database required.
- **Optional AI Layer**: Wire up Anthropic, OpenAI, Gemini, or local Ollama for tailored AI recommendations beyond the curated bank (`--ai` flag).

---

## Supported Project Types: SIWES vs Final Year Project (FYP)

ProjectMatch explicitly distinguishes between two major academic scoping milestones:

1. **SIWES Industrial Training (`siwes`)**:
   - Demonstrates practical engineering skills learned during industrial placement.
   - Shorter completion timeframe (4-8 weeks).
   - Centered around an end-of-placement panel defense presentation.

2. **Final Year Project (`final-year`)**:
   - Substantial academic thesis project requiring **upfront supervisor approval** via a written proposal.
   - Demands a clear problem statement, technical depth, and empirical or trade-off evaluation.
   - Rebalanced difficulty curve (16.7% Beginner, 41.7% Intermediate, 41.7% Advanced).
   - Displays four per-topic supervisor approval & defense fields during `find`:
     - **Problem Statement**: One clear sentence defining the specific problem or inefficiency addressed.
     - **Why This Suits You**: Explanation of why the topic matches your skill level and available timeframe.
     - **Why a Supervisor Might Approve This**: Convincing academic and feasibility arguments (phrased as *"likely to be viewed favorably because..."* — never a guarantee).
     - **Defending Your Choice (If Asked)**: 2-3 concrete talking points to explain to your supervisor why you selected this topic.

---

## Conceptual Understanding Prompts vs Code Generation

Every project in ProjectMatch includes a dedicated **Understanding Prompts** section. These prompts are designed for students to ask an AI assistant (like ChatGPT, Claude, or local Ollama) to master concepts required by the project.

> **CRITICAL WARNING:**
> Using AI to generate your actual project implementation code undermines the entire point of building and defending your project. Prompts must teach concepts generically, never generate project source code.

### Correct vs. Incorrect AI Prompting Patterns

| Usage Type | Prompt Example | Why |
| :--- | :--- | :--- |
| **CORRECT (Conceptual Learning)** | *"Explain how JWT authentication works and why refresh tokens matter for security"* | Teaches fundamental security concepts without generating project-specific code. |
| **CORRECT (Generic Tradeoffs)** | *"What are the tradeoffs between relational and document databases using a generic example?"* | Builds theoretical knowledge needed to defend architecture choices to supervisors. |
| **INCORRECT (Code Generation)** | *"Write a function that validates a JWT token in Express"* | **prohibited**: Generates copy-paste code that invalidates student authorship. |
| **INCORRECT (Schema Generation)** | *"Generate the database schema for my library project"* | **prohibited**: Bypasses the core design effort required for project defense. |

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
- Displays milestones, conceptual **Understanding Prompts**, and supervisor approval fields for FYP.
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
# List all Advanced Final Year Projects in Backend Development
projectmatch list --type final-year --category backend --level advanced
```

### 3. `projectmatch proposal`
Display general guidance for writing a Final Year Project proposal for supervisor approval.

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

# Set provider to local free Ollama
projectmatch config set-provider ollama
projectmatch config set-model llama3
projectmatch config set-url http://localhost:11434
```

---

## License

[MIT](LICENSE) (c) 2026 Fayol Smith
