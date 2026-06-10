---
name: refactoring
description: Restructure existing apblog code without changing behavior — extract/simplify components, dedupe the near-identical blog/project loaders or detail routes, improve types. Use when improving structure, not adding features. Behavior must stay identical.
---

# Refactoring

## Purpose
Improve internal structure while keeping observable behavior identical and the build green.

## When to use
Duplicated logic (e.g. `lib/mdx.ts` ↔ `lib/projects.ts`, `app/blog/[slug]` ↔ `app/projects/[slug]` share a near-identical shape), over-large components, weak typing, inconsistent patterns.

## Workflow
1. **Establish the green baseline** — `npx tsc --noEmit && npm run lint && npm run build`. Don't refactor on a red tree.
2. **Scope it** (`.claude/scope.md`). Refactors easily exceed 3 files → likely Large → `/plan` first. Never bundle a refactor with a behavior change; do one, verify, then the other.
3. **Refactor in small reversible steps**, verifying after each. Preserve the public surface: loader signatures, the frontmatter contract (`lib/types.ts`), route behavior, and SSG output.
4. **No new dependencies or config changes** as part of a refactor (those are separate, approved decisions).
5. **Verify behavior unchanged** — full DoD gates; build output (static route set) should match before/after; dev smoke the affected routes.
6. **Record** — `decisions.md` for any structural choice; `architecture.md` if the structure map changed.

## Expected outputs
- Cleaner structure, identical behavior.
- Before/after note of what moved and why.
- Evidence block showing gates still green.

## Completion criteria
- Behavior provably unchanged (same routes generated, same render).
- All DoD gates green.
- No protected file touched without approval; no new deps.
