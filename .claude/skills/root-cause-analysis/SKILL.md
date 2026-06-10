---
name: root-cause-analysis
description: Systematically find the underlying cause of a stubborn or recurring problem in apblog (intermittent build failure, hydration mismatch, content that silently doesn't render, sitemap/metadata wrong). Use when a quick fix didn't hold or the cause is non-obvious.
---

# Root-Cause Analysis

## Purpose
Get to the *real* cause instead of patching symptoms, especially when an initial fix bounced back.

## When to use
A fix didn't hold, the failure is intermittent, or the symptom is far from the cause (e.g. wrong rendered output with no error).

## Workflow
1. **Pin the symptom** — exact reproduction, verbatim output, which command/route. Reduce to the smallest repro (one content file? one route? build vs dev?).
2. **Build a hypothesis tree** in `.claude/context/<date>-<slug>.md`. List candidate causes mapped to surfaces: loader, frontmatter contract, `generateStaticParams`, Server/Client boundary, `next-themes` timing, sitemap derivation, a recent dep/config change.
3. **Bisect** — `git -C apblog/apblog log` / `git diff` to find what changed; isolate by toggling one variable at a time (remove a content file, comment a component, swap dev↔build).
4. **Confirm causation** — you must be able to *turn the bug on and off* by toggling the suspected cause. Correlation isn't enough.
5. **Fix at the root**; verify with the original repro + full DoD gates; confirm it stays fixed across build *and* dev.
6. **Capture** — write the cause + fix to `decisions.md` so it isn't rediscovered; close the `context/` note.

## Common apblog root causes
- Content not rendering → missing/misspelled frontmatter key vs `lib/types.ts`; non-`.md` file; empty `content/blog/`.
- Build fails on a slug → loader returns undefined for a field a page assumes.
- Hydration mismatch → theme/time-dependent render in a Server Component, or a client-only value rendered on the server.
- Sitemap/SEO wrong → `sitemap.ts` or `generateMetadata` not updated alongside a loader change.

## Expected outputs
- Stated root cause, demonstrated by toggling it on/off.
- Minimal fix + evidence.
- `decisions.md` entry.

## Completion criteria
- Cause proven causal (not correlated).
- Original repro passes; gates green; fix stable across dev+build.
