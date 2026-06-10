---
name: session-handoff
description: Capture the end-of-session state so the next Claude session resumes instantly. Use when wrapping up, running low on context, or parking work. Writes the harness state files and the session-handoff baton.
---

# Session Handoff

## Purpose
Preserve work state so the next session onboards in <5 minutes with zero lost context.

## When to use
End of session, context running low, or parking partially-done work.

## Workflow
1. **Settle the tree** — each touched task is either done+verified or clearly parked. Note any uncommitted changes (don't commit unless asked).
2. **Update `progress.md`** — refresh "Current state" (status, branch, last-verified, next-up); move finished work to "History" with evidence; keep/clear "Active task".
3. **Update `feature-list.json`** — move any feature whose status changed; bump `lastUpdated`.
4. **Update `decisions.md`** — append any decision/tradeoff made this session.
5. **Park investigations** — if a debug/feature trail is mid-flight, ensure `.claude/context/<task>.md` captures hypotheses tested + next step.
6. **Write the baton** — in `session-handoff.md`: move the old "Latest handoff" into Archive (keep ~5), write a new "Latest handoff" using the template. Answer: single most useful next action, what's half-done + exactly where, gotchas, open questions for the human.
7. **Verify the handoff is self-sufficient** — a fresh session reading CLAUDE.md + session-handoff.md should know what to do without re-deriving it.

## Expected outputs
- Updated `progress.md`, `feature-list.json`, `decisions.md` (as relevant).
- A fresh "Latest handoff" block + archived previous one.

## Completion criteria
- State files reflect reality (match the working tree).
- Handoff names a concrete next action and all unfinished work with its exact state.
- No silent abandonment; no unexplained dirty tree.
