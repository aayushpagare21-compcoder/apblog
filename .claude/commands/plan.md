---
description: Produce a written, staged implementation plan for a Large change and get approval before writing code.
---

# /plan

Required before any Large change (>3 files, new dependency, routing/build/schema change, or anything cross-cutting — see `.claude/scope.md`).

**Input:** the discovery brief from `/discover`.

**Steps:**
1. If structural, run `skills/architecture-review` — blast radius across surfaces + invariants, options with tradeoffs, recommendation.
2. Write the plan:
   - **Goal** + success criteria.
   - **Files to touch**, in edit order; note coupled surfaces to keep in sync.
   - **Risks** (SSG/build failures, protected files, deploy impact) + mitigations.
   - **Verification per step** (which DoD gates apply).
   - **Approval needs** (protected files / new deps).
3. If the plan requires a protected-file change or a new dependency, **get explicit human approval** before proceeding.
4. Record the chosen approach in `.claude/decisions.md`; set `progress.md` → "Active task" with lifecycle stage = planning.

**Output:** an approved, staged plan with per-step verification.

**Failure handling:** if approval is denied or the change fights the static/no-CMS model, revise or escalate. Don't start implementing an unapproved Large change.

**Next:** `/implement`.
