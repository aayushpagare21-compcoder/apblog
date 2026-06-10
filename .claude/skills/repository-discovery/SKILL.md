---
name: repository-discovery
description: Quickly build an accurate mental model of the apblog repo at the start of a task or session. Use to orient before implementing, to locate the right files, and to confirm the harness state files still match the code.
---

# Repository Discovery

## Purpose
Onboard fast and locate the exact code paths a task touches — without re-reading the whole codebase.

## When to use
Start of a session/task; when unsure where something lives; to validate that state files match reality.

## Workflow
1. **Read the map first** — `CLAUDE.md`, `.claude/architecture.md`, `.claude/feature-list.json`. These should answer "where does X live" before you grep.
2. **Confirm freshness** — quick orient:
   ```bash
   git -C apblog/apblog status && git -C apblog/apblog log --oneline -5
   ```
   If the tree contradicts the state files, trust the tree and note the drift.
3. **Locate task-relevant code** — use the directory map in `architecture.md`. Typical anchors: loaders `lib/mdx.ts`/`lib/projects.ts`, types `lib/types.ts`, routes `app/**`, sitemap `app/sitemap.ts`, MD rendering `components/mdx-content.tsx`, section components by folder.
4. **Trace the coupled surfaces** for the task: which of loaders / routes / sitemap / types are involved?
5. **Read on demand**, scoped — open only the files you'll touch plus their nearest neighbors.

## Expected outputs
- A one-paragraph model: stack, where the task lives, which surfaces it touches.
- A short file list to read/edit.
- Any state-vs-code drift flagged.

## Completion criteria
- You can name the exact files to change and why.
- Coupled surfaces for the task identified.
- Drift (if any) recorded.
