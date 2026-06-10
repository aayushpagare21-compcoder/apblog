# Session Lifecycle

Templates for every stage of a session. The aim: any session onboards in <5 minutes and resumes prior work with no lost context.

---

## 1. Start of session

**Read, in order (≈3 min):**
1. `CLAUDE.md` — rules, commands, conventions.
2. `.claude/session-handoff.md` → "Latest handoff" — where the last session left off.
3. `.claude/progress.md` → "Current state" + "Active task".
4. If touching architecture/content/routing: `.claude/architecture.md`.

**Orient (≈1 min):**
```bash
git -C apblog/apblog status      # working tree state
git -C apblog/apblog log --oneline -5
```

Then state your understanding in one line: *"Resuming X; next step is Y"* (or *"New task: Z"*). If the handoff and the working tree disagree, trust the working tree and flag the discrepancy.

→ Use `/continue` (resume) or `/discover` (new task).

---

## 2. Continuing interrupted work

1. Open `.claude/progress.md` → "Active task" and any `.claude/context/<task>.md`.
2. Reconstruct: what was done, what verification (if any) passed, what's next.
3. Re-establish the baseline before adding to it: `npx tsc --noEmit && npm run lint`. If the tree is already red, fixing it back to green is step one.
4. Continue from the documented next step. Don't restart finished work.

If "Active task" is empty but the working tree is dirty: reverse-engineer intent from the diff (`git diff`), write it into "Active task", then proceed.

---

## 3. End of session

Before stopping:
1. Make sure each task you touched is either **done + verified** or **clearly parked** with its exact state.
2. Update `.claude/progress.md` ("Current state", "History", clear/keep "Active task").
3. Update `.claude/feature-list.json` and `.claude/decisions.md` if anything changed.
4. Write `.claude/session-handoff.md` (archive the old "Latest handoff", write the new one). → `/handoff`
5. Leave the working tree in a known state: either committed (only if asked) or with uncommitted changes described in the handoff.

Never end a session with an unexplained dirty tree or a task silently abandoned.

---

## 4. Preparing a handoff

Use the template in `.claude/session-handoff.md`. A good handoff answers, without the reader opening any code:
- What is the single most useful next action?
- What's half-done and exactly where does it stand?
- What will bite the next session (gotchas, fragile spots)?
- What decisions are pending from a human?

→ `/handoff`

---

## 5. Recovery after failure

When a gate fails, the build breaks, or you're lost:

1. **Stop changing things.** Capture the exact error output.
2. **Reduce to a known-good state**: `git -C apblog/apblog stash` or `git diff` to see what you changed; revert the suspect edit. Confirm green: `npx tsc --noEmit && npm run lint`.
3. **Re-introduce changes in smaller steps**, verifying after each.
4. **Root-cause** rather than patch symptoms → `skills/root-cause-analysis`.
5. If stuck after ~2 honest attempts, **escalate** (see `CLAUDE.md`) with: what you tried, the verbatim error, and your best hypothesis.
6. Record what broke and the fix in `.claude/decisions.md` (or a `context/` note) so it isn't rediscovered later.

---

## 6. Efficient context resumption

- Prefer the `.claude/` state files over re-reading the whole codebase. They exist so you don't have to rebuild context from scratch.
- Read code on demand, scoped to the task — don't pre-load files you won't edit.
- Trust but verify: a recalled fact or a state-file claim that names a file/function should be confirmed against the current tree before you rely on it (files move).
- One line of orientation beats a paragraph of re-discovery: *"handoff says X done, Y next; tree confirms; starting Y."*
