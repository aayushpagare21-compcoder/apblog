---
name: test-generation
description: Add or extend tests for the apblog app. NOTE there is currently NO test runner configured (playwright is installed but unused). Use this skill to either bootstrap test infra (a planned, approved change) or, more commonly, define manual smoke verification for a change.
---

# Test Generation

## Purpose
Provide repeatable verification. Today that means **manual smoke procedures**; introducing an automated runner is a planned, approved change.

## Important context
- No test runner, config, or test files exist. `playwright` is a dependency but unconfigured.
- The default verification gate is type-check + lint + build + dev smoke (`.claude/definition-of-done.md`).

## Workflow

### A. Default — author a smoke procedure (no infra change)
1. Identify the behavior to protect (route renders, filter works, metadata correct, zero-post safety).
2. Write a concrete step list using the smoke template in `definition-of-done.md`: route, action, expected result, console-clean check.
3. Attach it to the task evidence and, if reusable, the relevant `feature-list.json` entry's `verifiedBy`.

### B. Bootstrap automated tests (Large — requires approval first)
1. `/plan` it. This adds a dependency/config → protected territory (`package.json`).
2. Recommended: Playwright (already installed) for route-level smoke + a config. Propose: `playwright.config.ts`, a `test`/`test:e2e` script, a `tests/` dir, CI note.
3. Start with high-value smoke tests: each top route returns 200 and renders key content; blog/projects detail for a known slug; empty-content safety.
4. After approval + implementation: document the runner + command as a new gate in `definition-of-done.md`, update `feature-list.json` (`test-infrastructure` → implemented), and log it in `decisions.md`.

## Expected outputs
- (A) A concrete, repeatable smoke procedure tied to the change.
- (B) Approved plan + runner/config/tests + updated DoD gate + decision entry.

## Completion criteria
- (A) Procedure is specific and reproducible.
- (B) Tests run green via a documented command; DoD updated.
