---
description: Orient on the repo and scope a task before planning. Builds an accurate model of which code paths and content surfaces are involved.
---

# /discover

Start here for any new, non-trivial task. Goal: an accurate model of what the task touches before committing to a plan.

**Input:** the task / request (`$ARGUMENTS` if provided, else the current ask).

**Steps:**
1. Load the map: `CLAUDE.md`, `.claude/architecture.md`, `.claude/feature-list.json`, `.claude/progress.md`. Use `skills/repository-discovery`.
2. Orient: `git -C apblog/apblog status` + `git log --oneline -5`. Reconcile state files with the tree; flag drift.
3. Locate the exact files the task touches; identify which of the four coupled surfaces (loaders / `[slug]` routes / `sitemap.ts` / `lib/types.ts`) are involved.
4. Classify scope per `.claude/scope.md` (Trivial / Small / Large / Protected).
5. Surface unknowns and ambiguities; if the answer is irreversible/outward-facing, prepare to ask the human.

**Output:** a short discovery brief — task restated, files involved, coupled surfaces, scope class, open questions.

**Failure handling:** if requirements are ambiguous and change what you'd build, stop and ask (`AskUserQuestion`). If the tree contradicts the state files, trust the tree and note it.

**Next:** `/plan` (Large) or `/implement` (Trivial/Small).
