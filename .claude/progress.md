# Progress Log

Living record of current work state. **Read this at the start of every session** (after `CLAUDE.md`). Keep the "Current state" section accurate — it is what makes resuming instant. Append to the history; don't delete it.

---

## Current state

- **Status**: Baseline. App is fully implemented and shipping on Vercel. No active feature work in flight.
- **Branch**: `main`
- **Last verified**: 2026-07-23 — `npx tsc --noEmit` ✅ (exit 0), `npm run lint` ✅ ("No ESLint warnings or errors"), `npm run build` ✅ (10/10 static pages generated).
- **In flight**: none
- **Blocked on**: nothing
- **Next up**: pick up new tasks as assigned. The blog index has zero posts (`content/blog/` holds only `.gitkeep`) — net-new posts are a content drop, not a code change.

## Active task

> When you start a task, fill this in. When you finish + verify, move it to History and clear this.

- **Task**: —
- **Lifecycle stage**: —  (discovery → planning → implementation → verification → handoff)
- **Plan**: link to the plan or `/plan` output
- **Files touched so far**: —
- **Verification run**: —
- **Open questions**: —

## History

| Date | Change | Verification | Notes |
|------|--------|--------------|-------|
| 2026-06-10 | Harness setup: added `.claude/` operating system (instructions, state, verification, scope, lifecycle, skills, commands), CLAUDE.md + AGENTS.md | tsc ✅, lint ✅ | No app code changed — docs/tooling only. |
| 2026-07-15 | Updated Optimeleon loader script ID in `app/layout.tsx` from `hFEyJiKVSmw2` to `bwzk36eUJ4ZO` (both `/b/` and `/c/` URLs). Protected-file edit, human-approved via AskUserQuestion ("Replace whole block"). | tsc ✅ (exit 0), lint ✅ ("No ESLint warnings or errors"), build ✅ (10/10 pages) | Inline anti-flicker/bootstrap code unchanged (byte-identical to pasted snippet). URLs still point at `http://localhost:8787` — dev/testing setup, will not load in production. |
| 2026-07-15 | Updated Optimeleon loader script ID in `app/layout.tsx` from `bwzk36eUJ4ZO` to `UBEQSrIlM591` (both `/b/` and `/c/` URLs). Same operation as previous row; approval carried over. | tsc ✅ (exit 0), lint ✅ ("No ESLint warnings or errors"), build ✅ (10/10 pages) | Inline code again byte-identical; only the script ID changed. |
| 2026-07-15 | Updated Optimeleon loader script ID in `app/layout.tsx` from `UBEQSrIlM591` to `pvYDpAvGIQEj` (both `/b/` and `/c/` URLs). Standing-approved snippet-paste workflow. | tsc ✅ (exit 0), lint ✅ ("No ESLint warnings or errors"), build ✅ | Inline code byte-identical; only the script ID changed. |
| 2026-07-23 | Updated Optimeleon loader URLs in `app/layout.tsx` from `http://localhost:8787/{b,c}/cdz5ubaRcEvc.js` to `https://edge-staging.optimeleon.com/{b,c}/vhuNjqRmC7LQ.js` (host + ID changed). Standing-approved snippet-paste workflow. | tsc ✅ (exit 0), lint ✅ ("No ESLint warnings or errors"), build ✅ (10/10 pages) | Inline anti-flicker/bootstrap code byte-identical to paste. Initially kept the legacy `data-consent-default="opt-in"` attribute on the `/c/` script; user corrected ("Exactly this dont add anything by yourself") — attribute removed, block now mirrors the paste exactly. Re-verified: tsc ✅, lint ✅, build ✅ (10/10). |
| 2026-07-23 | Updated Optimeleon loader URLs in `app/layout.tsx` from `https://edge-staging.optimeleon.com/{b,c}/vhuNjqRmC7LQ.js` to `http://localhost:8787/{b,c}/IVrjl9ChkvKG.js` (host + ID changed). Standing-approved snippet-paste workflow. | tsc ✅ (exit 0), lint ✅ ("No ESLint warnings or errors"), build ✅ (10/10 pages) | Inline code byte-identical; block mirrors paste exactly (no extra attributes). |

## How to update this file

- On **task start**: fill "Active task", set lifecycle stage.
- On **status change**: update "Current state" (1-2 lines) and "Active task".
- On **task done** (after verification): add a History row with real verification evidence, clear "Active task", update "Current state → Next up".
- On **session end**: ensure "Current state" reflects reality, then write `.claude/session-handoff.md`.
