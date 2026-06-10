---
description: Capture end-of-session state into the harness files and write the session-handoff baton.
---

# /handoff

Run at session end or when parking work. Uses `skills/session-handoff`.

**Input:** the session's work (done + unfinished).

**Steps:**
1. Settle the working tree — each task done+verified or clearly parked. Note uncommitted changes (don't commit unless asked).
2. Update `.claude/progress.md` — "Current state", move finished work to "History" with evidence, set/clear "Active task".
3. Update `.claude/feature-list.json` (statuses + `lastUpdated`) and `.claude/decisions.md` (any decisions made).
4. Park mid-flight investigations into `.claude/context/<task>.md`.
5. Write `.claude/session-handoff.md` — archive the previous "Latest handoff" (keep ~5), write a new one via the template: single most useful next action, what's half-done + where, gotchas, open questions.
6. Sanity-check: could a fresh session continue from CLAUDE.md + session-handoff.md alone?

**Output:** updated state files + a fresh handoff block.

**Failure handling:** if work is broken/blocked, say so explicitly in the handoff with the verbatim error and best hypothesis — never hand off a hidden failure.

**Next:** end session, or `/ship` if delivering.
