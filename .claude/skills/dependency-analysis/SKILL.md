---
name: dependency-analysis
description: Analyze apblog's npm dependencies — what's used vs unused, version/upgrade risk, and whether a proposed new dependency is justified. Use before adding a dep (a protected/approval-gated action) or when auditing the dependency surface.
---

# Dependency Analysis

## Purpose
Keep the dependency surface minimal and intentional. Adding a dependency is a protected action (`scope.md`) — this skill produces the justification or the rejection.

## Context (current deps of note)
- Core: `next@15.3.6`, `react@19`, `tailwindcss@4`, `typescript@5`.
- UI: `@radix-ui/*`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `react-icons`, `framer-motion`, `react-intersection-observer`, `next-themes`, `tw-animate-css`.
- Content: `gray-matter`, `react-markdown`, `date-fns`.
- Analytics: `@vercel/analytics`, `@vercel/speed-insights`.
- **`playwright`** — installed but unused (no test config). Candidate for either adoption (test infra) or removal.

## Workflow
### Auditing existing deps
1. List declared deps (`package.json`) and grep for actual imports to find unused ones.
2. Flag mismatches (e.g. `playwright` unused; `eslint-config-next@15.3.0` vs `next@15.3.6`).
3. Note major-version upgrade risk for the core (Next/React/Tailwind move fast).

### Evaluating a NEW dependency (before adding)
1. **Justify need** — can it be done with existing deps or a small local util? (We already have clsx+tailwind-merge, radix, framer-motion, date-fns.)
2. **Assess cost** — bundle size, maintenance, transitive deps, SSG/Server-Component compatibility, license.
3. **Compatibility** — works with React 19 + Next 15 App Router + static export?
4. **Decision** — recommend add/avoid with reasoning. If add: it requires human approval (`package.json` is protected) and a `decisions.md` entry.

## Expected outputs
- Audit: used / unused / risky deps.
- For a new dep: a justification table (need, cost, compatibility) + recommendation.

## Completion criteria
- Claims verified against actual imports / `package.json`, not memory.
- New-dep recommendations explicitly flag the approval requirement.
