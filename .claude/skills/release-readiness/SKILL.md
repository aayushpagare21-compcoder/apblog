---
name: release-readiness
description: Confirm apblog is safe to deploy to Vercel. Use before merging/shipping to verify the production build, SSG output, SEO/sitemap, analytics, and that no protected files regressed. Produces a go/no-go with evidence.
---

# Release Readiness

## Purpose
Gate deployment. apblog auto-deploys from `main` on Vercel as a static build — so a green local `npm run build` is the core signal that production will be healthy.

## When to use
Before merging to `main` / before a deploy / when asked "is this shippable?".

## Workflow
1. **Clean baseline** — confirm working tree state (`git status`); know what's changing.
2. **Full gate run** (paste real output):
   - `npx tsc --noEmit` → exit 0
   - `npm run lint` → no warnings/errors
   - `npm run build` → completes; **all expected static routes generated** (blog/projects slugs, sitemap). Scan build output for failures or unexpectedly missing routes.
3. **SSG/SEO spot-check** — `npm run start` (or dev): each top route renders; `/sitemap.xml` lists expected URLs; a sample post/project detail renders; canonical domain `https://aayushpagare.com` intact in metadata/OG.
4. **Protected-file audit** — diff against `scope.md`: analytics/consent (Cookiebot, GTM-M9FQVCPW, Vercel), config, deps unchanged unless explicitly approved.
5. **Content sanity** — new `.md` files have valid frontmatter (build would fail otherwise); no broken `image`/`liveUrl`/`githubUrl` references.
6. **Verdict** — GO / NO-GO with the evidence block and any caveats.

## Expected outputs
- Filled evidence block (tsc/lint/build/smoke).
- Route-generation confirmation.
- GO/NO-GO verdict + caveats.

## Completion criteria
- All gates green with pasted evidence.
- Static route set verified.
- No unapproved protected-file change.
- Explicit verdict given.
