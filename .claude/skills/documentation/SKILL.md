---
name: documentation
description: Write or update documentation for apblog — CLAUDE.md/AGENTS.md, the .claude harness state files, architecture.md, or content-authoring guides. Use to keep docs in sync with code and to document how to add posts/projects.
---

# Documentation

## Purpose
Keep the harness and project docs accurate so future sessions trust them. Stale docs are worse than none.

## When to use
After a change alters architecture/conventions/commands; when onboarding info is missing; to document the content-authoring flow.

## Workflow
1. **Find the right home** — don't scatter:
   - Rules/commands/conventions → `CLAUDE.md` (+ mirror essentials in `AGENTS.md`).
   - Architecture/structure/data-flow → `.claude/architecture.md`.
   - Feature status → `feature-list.json`. Decisions → `decisions.md`. Work state → `progress.md`.
   - Content authoring (frontmatter fields, slug = filename) → a short section in `architecture.md` or a `content/README`.
2. **Verify against the code** — every documented file/function/command must exist. Run commands you document (e.g. confirm `npx tsc --noEmit` / `npm run lint`). Don't document aspirations as facts.
3. **Match the existing voice** — concise, opinionated, example-driven; clickable `path:line` links.
4. **Cross-link** — keep CLAUDE.md ↔ AGENTS.md ↔ architecture.md consistent; if you change a command/gate, update all places it appears.
5. **Date state files** (`lastUpdated`, decision dates) using the real current date.

## Expected outputs
- Updated docs that match reality, in the correct file.
- Cross-references consistent.

## Completion criteria
- No documented command/path/function is fictional (spot-check).
- Related docs updated together (no contradictions).
- Voice and formatting match the repo.
