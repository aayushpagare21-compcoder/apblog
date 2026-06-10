---
description: Run the Definition of Done gates and produce an evidence block. Nothing is "done" without this.
---

# /verify

**Input:** an implemented change.

**Steps (per `.claude/definition-of-done.md`):**
1. `npx tsc --noEmit` → expect exit 0.
2. `npm run lint` → expect "No ESLint warnings or errors".
3. `npm run build` → if the change touches content loaders, routing, metadata, sitemap, types, or config. Confirm all expected static routes generate.
4. **Dev smoke** (`npm run dev`) for any UI/behavior/content-rendering change — exercise affected routes, check console is clean. Follow the smoke procedure in `definition-of-done.md`.
5. **Scope audit** — files-changed count, no unapproved protected-file edits, coupled surfaces in sync.
6. Fill the **evidence block** with real output and paste it.

**Output:** the completed evidence block; a clear pass/fail per gate.

**Failure handling:** any failing gate ⇒ **not done**. Report the failure verbatim, fix (or escalate after ~2 attempts). Do not mark complete or proceed to `/ship` on a failing gate. Never substitute "looks good" for real output.

**Next:** `/review` then `/handoff` or `/ship`.
