# ProjectMatch (`projectmatch`)

> **SIWES Computer Science Final Project Finder & Scoping CLI**

---

### CRITICAL DESIGN PRINCIPLE & INTENDED USE STATEMENT

> **IMPORTANT NOTICE:**
> **ProjectMatch RECOMMENDS and GUIDES — it NEVER generates or builds projects for you.**
> It must never output actual project source code, scaffolded repositories, or complete implementations.
> Its job ends at: suggesting a project idea, describing its scope, suggesting a tech stack, breaking it into milestones, and helping you prepare to explain and defend your own work.
> **You are expected to design, build, and be able to explain every line of code in your final submission.**

---

## Overview

Choosing a final-year or SIWES (Students Industrial Work Experience Scheme) project under time pressure is daunting. Many Computer Science students either choose over-ambitious enterprise projects or overly trivial scripts that fail academic panel scrutiny.

**ProjectMatch** is a zero-configuration, zero-cost, offline-first CLI dev tool that matches undergraduate CS students with realistic, portfolio-worthy, and defensible project ideas based on their skill level, interests, and timeframe.

## Key Features

- **Curated Project Bank**: 160+ structured, realistic CS projects covering Web, Mobile, Backend, Data Science, Systems/Networking, and Security.
- **Zero Setup & Zero Cost**: Works 100% offline out-of-the-box with no API key or database required.
- **Optional AI Layer**: Wire up Anthropic, OpenAI, Gemini, or local Ollama for tailored AI recommendations beyond the curated bank (`--ai` flag).
- **Defence Readiness Checklist**: Interactive static checklist covering questions typically asked by university defense panels.
- **Polished UX**: Terminal interface formatted with clear milestones, tech stacks, and difficulty tiers.

---

## Using ProjectMatch at Scale (For Large Cohorts & Supervisors)

ProjectMatch works 100% offline out of the box using its curated 160+ project bank with score-based subset sampling.

For academic supervisors coordinating large student cohorts (100+ students per year) who want maximum project variety across their group:

- **`--ai` Flag for Unlimited Variety**: Passing `--ai` when running `projectmatch find --ai` queries an AI provider to synthesize additional tailored project concepts beyond the fixed bank.
- **Free Local Setup with Ollama**: Cost is never a barrier. You can configure a local, completely free LLM via [Ollama](https://ollama.com) (no API key or subscription required):
  ```bash
  projectmatch config set-provider ollama
  projectmatch config set-model llama3
  projectmatch config set-url http://localhost:11434
  ```
- **Cloud AI Providers**: Alternatively, configure OpenAI, Anthropic, or Gemini API keys. See [Command Reference: `projectmatch config`](#4-projectmatch-config-action-value) below for setup instructions.

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
- Prompts for skill level, interest area, available timeframe (weeks), and known languages/tools.
- Filters and ranks the project bank to deliver the top 3-5 matches.
- Includes `--ai` flag to fetch additional AI-generated recommendations if an LLM provider is configured.

```bash
projectmatch find
```

### 2. `projectmatch list [--category <cat>] [--level <level>]`
Browse the curated project bank directly with optional filters:
- `--category, -c`: `web`, `mobile`, `backend`, `data`, `systems`, `security`
- `--level, -l`: `beginner`, `intermediate`, `advanced`

```bash
# List all web development projects for beginners
projectmatch list --category web --level beginner
```

### 3. `projectmatch checklist`
Display the SIWES final-defence readiness checklist and self-evaluation prompts.

```bash
projectmatch checklist
```

### 4. `projectmatch config <action> [value]`
Configure optional AI provider settings (stored locally at `~/.projectmatch/config.json`).

```bash
# Show current config
projectmatch config show

# Set provider (supported: anthropic, openai, gemini, ollama)
projectmatch config set-provider gemini

# Set API key
projectmatch config set-key YOUR_API_KEY

# Set custom model or local URL (e.g. for Ollama)
projectmatch config set-model gpt-4o-mini
projectmatch config set-url http://localhost:11434
```

---

## Interactive Flow Example

```
$ projectmatch find

ProjectMatch — SIWES Project Scope & Recommendation Tool

NOTICE: ProjectMatch RECOMMENDS and GUIDES — it NEVER generates or builds code.
You are expected to design, implement, and defend your own work in your submission.

? Select your current skill level: Intermediate — Comfortable with frameworks, APIs, DBs
? Select your primary interest category: Backend & APIs
? How many weeks do you have available for SIWES project completion?: 8
? List programming languages or tools you already know: Node.js, TypeScript, PostgreSQL

Searching curated project bank for best matches...

Found 5 top-ranked project recommendations for you:

--------------------------------------------------------------------------------
#1 [Curated Bank] E-Commerce Microservices Engine with Rate Limiting (ID: backend-1)
Category: BACKEND  |  Level: intermediate  |  Timeframe: 6-8 weeks (~2 months)

A robust backend API implementing core e-commerce workflows using microservice modularity, Redis token-bucket rate limiting, and centralized error handling.

Suggested Tech Stack: Node.js, TypeScript, Express, Redis, PostgreSQL

Implementation Milestones (3-5 Steps):
  1. Design modular API endpoints for products, shopping cart, and orders.
  2. Implement Redis-based rate limiter middleware to prevent API abuse.
  3. Build database migration scripts and transactional order placement logic.
  4. Write comprehensive unit and integration tests using Vitest/Supertest.

Match highlights: Direct match for category: backend • Exact skill level match (intermediate) • Fits your timeframe • Uses technologies you know: Node.js, TypeScript, PostgreSQL
```

---

## License

[MIT](LICENSE) (c) 2026 Fayol Smith
