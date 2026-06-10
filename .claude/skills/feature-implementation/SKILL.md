---
name: feature-implementation
description: Implement a new feature or enhancement in the apblog Next.js portfolio/blog. Use when adding a page, section component, content type, or extending the content loaders. Enforces plan→implement→verify with the repo's content-surface invariants.
---

# Feature Implementation

## Purpose
Ship a feature correctly the first time, matching existing patterns and keeping the four coupled content surfaces (loaders ↔ `[slug]` routes ↔ `sitemap.ts` ↔ `lib/types.ts`) in sync.

## When to use
Adding/extending: a page or route, a landing/section component, a content type or frontmatter field, a loader function, SEO/metadata.

## Workflow
1. **Discover** — read `.claude/architecture.md`. Find the closest existing example (e.g. mirror `app/blog/[slug]` for a new detail route). Identify every coupled surface the change touches.
2. **Classify scope** (`.claude/scope.md`). If Large (>3 files / new dep / schema / routing), run `/plan` and get approval first.
3. **Implement** — smallest coherent edits. Server Components by default; `"use client"` only when needed. Use `cn()`, `@/*` aliases, CSS-variable tokens, shadcn primitives via composition. Keep the build green between steps.
4. **Sync surfaces** — if you changed content loading or the schema, update loaders, both index + `[slug]` routes, `sitemap.ts`, and `lib/types.ts` together.
5. **Verify** — `.claude/definition-of-done.md`: tsc + lint + build + dev smoke. Build is mandatory for any content/route/metadata change.
6. **Record** — update `progress.md`, `feature-list.json` (add/move the feature), and `decisions.md` if you made a tradeoff.

## Expected outputs
- Working feature matching repo conventions.
- Evidence block (real tsc/lint/build/smoke output).
- Updated state files.

## Completion criteria
- All applicable DoD gates pass with pasted evidence.
- No protected file changed without approval.
- Coupled content surfaces consistent.
- `feature-list.json` reflects the new/updated feature.
