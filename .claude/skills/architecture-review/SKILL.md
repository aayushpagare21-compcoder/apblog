---
name: architecture-review
description: Evaluate a proposed structural change to apblog (new content type, new route group, shared abstraction over the loaders, adding a data source or test infra) for fit, blast radius, and invariant impact before implementation. Use during /plan for Large changes.
---

# Architecture Review

## Purpose
Pressure-test a structural decision before code is written, so Large changes don't drift the architecture or break invariants.

## When to use
New content type/schema, new route group, abstracting the duplicated blog/project loaders + detail routes, introducing a DB/API/CMS or test infra, anything cross-cutting.

## Workflow
1. **Restate the change** and the problem it solves in 2–3 lines.
2. **Map blast radius** against `architecture.md` — which of the four coupled surfaces (loaders / `[slug]` routes / `sitemap.ts` / `lib/types.ts`) and which invariants (canonical domain, SSG model, Server-first, token system) does it touch?
3. **Check fit** — does it extend the existing file-based, statically-generated, no-CMS model, or fight it? Prefer extending. A change that requires a runtime DB/API contradicts the static model — flag loudly.
4. **Evaluate options** — at least two, with tradeoffs (files touched, new surface area, reversibility, new deps). Favor fewer files + less new surface.
5. **Identify risks** — SSG correctness, build-time failures on bad content, protected-file impact, deploy implications on Vercel.
6. **Recommend** — one option, staged implementation plan, verification per stage.

## Expected outputs
- Blast-radius map (surfaces + invariants affected).
- Options table with tradeoffs and a recommendation.
- A `decisions.md` entry capturing the choice.

## Completion criteria
- Recommendation is justified against alternatives.
- Invariant/blast-radius impact explicit.
- Feeds a concrete `/plan`.
