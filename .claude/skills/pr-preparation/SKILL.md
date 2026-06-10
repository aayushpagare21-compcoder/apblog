---
name: pr-preparation
description: Prepare a clean, reviewable pull request for apblog — branch, scoped commits, and a PR description with verification evidence. Use when changes are done+verified and ready to propose. Only commit/push when the human asks.
---

# PR Preparation

## Purpose
Turn verified work into a reviewable PR with clear intent and evidence.

## Preconditions
- Work passes the Definition of Done (gates green, evidence captured).
- **Do not commit/push unless the user asks** (`git commit`/`git push` are pre-approved in `settings.local.json`, but run them only on request).

## Workflow
1. **Review the diff yourself first** → use `skills/code-review`. Fix nits before proposing.
2. **Branch** — if on `main`, create a topic branch (`git -C apblog/apblog checkout -b <type>/<short-desc>`). Never develop large changes directly on `main`.
3. **Stage intentionally** — only the files for this change; verify no stray edits, no protected files, no build artifacts (`.next/`), no `.DS_Store`.
4. **Commit** (on request) — concise imperative subject + body explaining *why*. End the message with:
   ```
   Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>
   ```
5. **PR description** — use the template below. Push (on request) and open via `gh pr create`. End the PR body with:
   ```
   🤖 Generated with [Claude Code](https://claude.com/claude-code)
   ```

## PR description template
```
## What
<one-paragraph summary of the change>

## Why
<motivation / linked task>

## Surfaces touched
<loaders / routes / sitemap / types / components — note if coupled surfaces were kept in sync>

## Verification
- tsc:   <output>
- lint:  <output>
- build: <output / route generation>
- smoke: <routes exercised, result>

## Risk / scope
<files changed count, protected files (none expected), rollback note>
```

## Expected outputs
- Topic branch, scoped commit(s), PR description with evidence.

## Completion criteria
- Diff self-reviewed and clean.
- Description complete with real verification evidence.
- No protected/unrelated files included.
- Commit/push only performed if the user asked.
