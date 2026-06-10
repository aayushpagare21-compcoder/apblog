---
name: bug-investigation
description: Diagnose and fix a defect in the apblog app (build failures, broken rendering, wrong metadata/sitemap, theming/hydration issues, content not loading). Use when something is broken and you need to find and fix the cause, not patch a symptom.
---

# Bug Investigation

## Purpose
Find the true cause of a defect and fix it with the smallest safe change, then prove it's fixed.

## When to use
Build breaks, a page errors/renders wrong, a post/project doesn't appear, metadata/OG/sitemap is wrong, theme flicker/hydration mismatch, console errors.

## Workflow
1. **Reproduce** — get the exact failing command/route and verbatim error. For build/SSG errors: `npm run build`. For runtime: `npm run dev` + the route + console.
2. **Localize** — map the error to a surface. Common culprits:
   - Content not showing → loader (`lib/mdx.ts`/`lib/projects.ts`), bad frontmatter, or empty `content/blog/`.
   - Build fails at a `[slug]` → `generateStaticParams` / a loader returning undefined / malformed `.md`.
   - Wrong URLs/SEO → `app/sitemap.ts` or `generateMetadata` out of sync with loaders.
   - Hydration/theme → a Server/Client boundary issue or `next-themes` usage.
3. **Hypothesize → test** — change one thing, re-run the failing command. Keep a trail in `.claude/context/<date>-<bug>.md` if non-trivial. Use `skills/root-cause-analysis` for stubborn ones.
4. **Fix at the root**, not the symptom. Smallest change; match conventions.
5. **Verify** — the originally-failing command now passes, plus the full DoD gate set. Confirm no regression on the coupled surfaces.
6. **Record** — `decisions.md` if the cause was non-obvious; `progress.md`.

## Expected outputs
- Identified root cause (one sentence).
- Minimal fix.
- Evidence: the previously-failing command now green + DoD gates.

## Completion criteria
- Original repro no longer fails (shown).
- tsc/lint/build (and smoke if UI) pass.
- Root cause noted if non-obvious.
