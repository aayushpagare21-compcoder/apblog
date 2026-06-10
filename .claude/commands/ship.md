---
description: Final release gate — confirm deploy-readiness and prepare the PR. Commit/push only when the human asks.
---

# /ship

Deliver verified work. apblog auto-deploys from `main` on Vercel, so the build gate is the production signal.

**Input:** a verified, reviewed change.

**Steps:**
1. **Release readiness** — run `skills/release-readiness`: full gate run (tsc + lint + **build**) with route-generation confirmed, SSG/SEO spot-check (`/sitemap.xml`, sample detail pages, canonical domain), protected-file audit. Produce GO/NO-GO.
2. If NO-GO, stop and return to `/implement` or `/plan`.
3. **PR prep** — run `skills/pr-preparation`: topic branch (never large work on `main`), scoped commit(s), PR description with the evidence block.
4. **Commit/push only if the user asks.** Use the required `Co-Authored-By` trailer on commits and the Claude Code footer on the PR body.
5. Update `progress.md` (History) and `feature-list.json`; then `/handoff`.

**Output:** GO/NO-GO verdict; (on request) a branch + commit + PR with evidence.

**Failure handling:** any failing gate or unapproved protected-file change ⇒ NO-GO. Never ship on a red build. Never push without an explicit request.

**Next:** `/handoff`.
