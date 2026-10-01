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

## 2026-10-01 — Replace GTM + Optimeleon with etracker; remove their supporting code
- **Context**: User asked to remove the GTM code and any Optimeleon-related website code, and add the etracker 6.0 snippet.
- **Options**: (a) strip only the `<head>`/`<noscript>` tags in `app/layout.tsx`; (b) also remove the code that only existed to serve those tools.
- **Decision**: (b) — besides the layout scripts, removed the `window.optimeleon("track", …)` effect in `components/about/index.tsx`, deleted `types/global.d.ts` (its only content was the `window.optimeleon` type), and dropped the `data-gtm="view-github"` attribute in `components/landing/hero.tsx`. etracker is added as plain `<script>` tags in `<head>` mirroring the pasted snippet attribute-for-attribute (including the comment-only `et_pagename`/`et_areas` script and the deprecated `charSet`).
- **Why**: Leftover hooks for removed tools are dead code; mirroring the vendor snippet exactly follows the standing "don't add anything by yourself" feedback.
- **Consequences**: No GTM container means any tags configured inside GTM-M9FQVCPW no longer fire. etracker runs cookieless (`data-block-cookies="true"`), so no consent banner was added. The unrelated `console.log` head scripts were left in place.
