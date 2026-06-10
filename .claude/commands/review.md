---
description: Review the current diff for correctness, conventions, and the content-surface invariants before shipping.
---

# /review

**Input:** the current diff (verified change).

**Steps:**
1. `git -C apblog/apblog diff` + `--stat`. Run `skills/code-review`.
2. Check conventions (`CLAUDE.md`): `cn()`, `@/*`, CSS-var tokens, Server-first, shadcn composed not edited; canonical domain intact.
3. Check invariants: coupled surfaces in sync (loaders ↔ routes ↔ sitemap ↔ types); no unapproved protected-file edits; smallest-change (no stray refactors/deps).
4. Check correctness: empty-content safety, `generateStaticParams` covers all slugs, metadata/OG correct, no Server/Client mistakes.
5. Confirm verification evidence exists; if not, run `/verify`.
6. Report findings by severity (blocking / should-fix / nit) with `file:line` and a fix; give a verdict.

**Output:** findings list + verdict (ship / fix-then-ship / rework).

**Failure handling:** blocking findings ⇒ back to `/implement`. For a deeper independent pass, the human can run `/code-review ultra` (cloud, multi-agent) — you cannot launch it yourself.

**Next:** `/handoff` or `/ship`.
