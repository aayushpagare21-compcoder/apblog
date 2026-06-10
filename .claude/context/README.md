# context/

Scratch space for **long-form, in-progress investigation notes** that are too detailed for `progress.md` but worth preserving across a session boundary.

## What goes here

- Root-cause investigation trails (hypotheses tested, what was ruled out).
- Notes for a multi-session feature: design sketches, open sub-questions, partial findings.
- Captured command output / repro steps you'll need again.

## What does NOT go here

- Final decisions → `.claude/decisions.md`.
- Feature status → `.claude/feature-list.json`.
- Current work state / next steps → `.claude/progress.md`.
- The session baton → `.claude/session-handoff.md`.

## Conventions

- One file per task/investigation: `YYYY-MM-DD-<kebab-slug>.md`.
- Start each file with a one-line goal and a status (`open` / `resolved`).
- When an investigation resolves, summarize the outcome into `decisions.md` and/or `progress.md`, then either delete the context file or mark it `resolved` and leave it for reference.
- Keep this directory small — it is working memory, not an archive.
