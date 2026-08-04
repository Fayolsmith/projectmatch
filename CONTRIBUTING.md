# Contributing to ProjectMatch

Thank you for your interest in contributing to **ProjectMatch**!

## Essential Principle

ProjectMatch **recommends and guides** students — it **never** generates source code or builds projects for them. All contributions must preserve this boundary.

## How to Contribute Project Ideas to the Curated Bank

1. Open `src/data/projects.ts`.
2. Add a new `Project` object following the strict schema:
   - `id`: unique string slug (e.g. `web-6`, `security-6`)
   - `title`: descriptive project name
   - `description`: 1 paragraph overview of the problem & scope
   - `category`: `web`, `mobile`, `backend`, `data`, `systems`, `security`
   - `skillLevel`: `beginner`, `intermediate`, `advanced`
   - `suggestedStack`: 2-4 technologies
   - `estimatedTimeframeWeeks`: integer
   - `timeframeLabel`: human readable string
   - `milestones`: 3-5 high-level implementation steps
3. Run tests (`npm test`) and build (`npm run build`).
4. Submit a Pull Request.

## Local Development Workflow

```bash
git clone https://github.com/your-username/projectmatch.git
cd projectmatch
npm install
npm run build
npm test
```
