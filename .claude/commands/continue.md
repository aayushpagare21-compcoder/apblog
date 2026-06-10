---
description: Resume interrupted work from the harness state files with minimal re-discovery.
---

# /continue

Resume where the last session left off.

**Input:** none (reads harness state).

**Steps (per `.claude/lifecycle.md` §2):**
1. Read `.claude/session-handoff.md` → "Latest handoff", then `.claude/progress.md` → "Active task", then any `.claude/context/<task>.md`.
2. Orient: `git -C apblog/apblog status` + `git log --oneline -5`. If the tree contradicts the handoff, trust the tree and flag it. If "Active task" is empty but the tree is dirty, reconstruct intent from `git diff` and record it.
3. Re-establish the baseline: `npx tsc --noEmit && npm run lint`. If red, restoring green is step one.
4. State in one line: *"Resuming X; verified Y passed; next step is Z."*
5. Continue from the documented next step — don't redo finished work.

**Output:** a one-line resume statement + continuation into `/implement` or `/verify`.

**Failure handling:** if the baseline is broken on arrival → `/lifecycle` recovery (`skills/root-cause-analysis`); fix to green before adding new work. If state files are missing/stale, rebuild context via `/discover`.

**Next:** `/implement` or `/verify` depending on the stage.
