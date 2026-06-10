---
description: Execute the plan in small, verifiable steps, keeping the build green and content surfaces in sync.
---

# /implement

**Input:** the approved plan (Large) or the discovery brief (Small/Trivial).

**Steps:**
1. Confirm a green baseline before starting: `npx tsc --noEmit && npm run lint`. If red, fix to green first.
2. Implement the smallest coherent edit toward the goal. Follow conventions (`cn()`, `@/*`, CSS-var tokens, Server-first / minimal `"use client"`, compose shadcn primitives — don't edit them). Use `skills/feature-implementation`, `refactoring`, or `bug-investigation` as fits.
3. After each meaningful step, re-run tsc + lint to stay green. Don't accumulate broken state.
4. If you changed content loading or the schema, update the coupled surfaces together (loaders ↔ routes ↔ `sitemap.ts` ↔ `lib/types.ts`).
5. Keep `progress.md` → "Active task" current (files touched, lifecycle stage = implementation).
6. Stay in scope: if you discover the change must touch a protected file or exceed the agreed scope, **stop and return to `/plan`**.

**Output:** the implemented change with a green tree between steps.

**Failure handling:** on a failing gate, fix or revert the last step (don't pile on). If stuck after ~2 attempts → `skills/root-cause-analysis` or escalate. Never push past scope silently.

**Next:** `/verify`.
