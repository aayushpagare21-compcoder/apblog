---
name: code-review
description: Review a diff in the apblog repo for correctness, convention adherence, and the content-surface invariants before it ships. Use before committing/PR, or to review proposed changes. For deep multi-agent review the human can run /code-review ultra.
---

# Code Review

## Purpose
Catch bugs, convention drift, and broken invariants before a change ships.

## When to use
Before committing/opening a PR, or when asked to review changes.

## Workflow
1. **Get the diff** — `git -C apblog/apblog diff` (and `git diff --stat` for blast radius).
2. **Check against the repo's rules** (`CLAUDE.md`, `scope.md`):
   - Conventions: `cn()` for classes, `@/*` aliases, CSS-var tokens (no hardcoded colors), Server-first / minimal `"use client"`, shadcn primitives composed not edited.
   - **Coupled surfaces in sync**: if loaders/schema/routes changed, did `sitemap.ts` and `lib/types.ts` follow?
   - Protected files untouched (or approved).
   - Canonical domain not duplicated/changed.
   - Smallest-change principle; no stray refactors/deps.
3. **Correctness** — null/empty handling (e.g. empty `content/blog/`), `generateStaticParams` covers all slugs, metadata/OG correct, no obvious hydration/Server-Client mistakes.
4. **Verification present** — does the change come with real tsc/lint/build evidence? If not, run them.
5. **Report** — findings grouped by severity (blocking / should-fix / nit), each with `file:line` and a concrete suggestion.

## Expected outputs
- Findings list (severity, location, fix).
- A clear verdict: ship / fix-then-ship / needs-rework.

## Completion criteria
- Diff fully reviewed against conventions + invariants.
- Verification status confirmed (run if missing).
- Verdict given with actionable items.
