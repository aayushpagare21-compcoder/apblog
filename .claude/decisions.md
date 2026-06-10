# Decision Log

Append-only record of architectural and non-obvious engineering decisions. One entry per decision. Never rewrite history — if a decision is reversed, add a new entry that supersedes the old one and link back.

**When to add an entry:** you chose between two reasonable approaches; you deviated from an existing pattern; you added/avoided a dependency; you changed a cross-cutting invariant; you made a tradeoff a future reader would question.

**Format:**

```
## YYYY-MM-DD — <short title>
- **Context**: what prompted the decision
- **Options**: the alternatives considered
- **Decision**: what was chosen
- **Why**: the reasoning / tradeoff
- **Consequences**: what this constrains or enables; what to watch for
- **Supersedes**: (optional) link to an earlier entry this replaces
```

---

## 2026-06-10 — Adopt a `.claude/` harness as the session operating system
- **Context**: Repo needed to be reliably developed with Claude Code over months without context drift between sessions.
- **Options**: (a) keep only CLAUDE.md; (b) add full harness (state/verification/scope/lifecycle/skills/commands).
- **Decision**: (b) — build the full five-layer harness under `.claude/`, evolving the existing strong CLAUDE.md rather than replacing it.
- **Why**: Consistency, verifiable completion, and instant resume outweigh the upfront setup cost for a long-lived project.
- **Consequences**: Sessions must keep `progress.md`, `decisions.md`, `feature-list.json`, and `session-handoff.md` current. Verification (tsc/lint/build) is now a hard gate. No app code was changed.

## 2026-06-10 — Type-check via `npx tsc --noEmit`, not an npm script
- **Context**: `package.json` has no `typecheck` script; harness docs reference type-checking.
- **Decision**: Standardize on `npx tsc --noEmit` for the type-check gate and document it everywhere.
- **Why**: Avoid editing `package.json` (a protected file) just to add a convenience alias; `tsc` is already a dependency and works (verified exit 0).
- **Consequences**: If a `typecheck` script is later added, update CLAUDE.md, AGENTS.md, and `definition-of-done.md` together.
