# Scope & Change Control

Rules that keep edits bounded and prevent uncontrolled changes. The goal: every change is the smallest one that fully solves the problem, and high-blast-radius files don't change silently.

## Change-size thresholds → required process

| Change size | Examples | Required process |
|-------------|----------|------------------|
| **Trivial** | typo, copy tweak, single-component style fix, one new content `.md` | Implement → verify → done. No plan needed. |
| **Small** (1–3 files, no new surface) | add a prop, new section component, adjust a loader filter | Brief note of intent, implement, verify. |
| **Large** (>3 files, OR new dependency, OR routing/build/schema change, OR cross-cutting) | new content type, change to frontmatter contract, new route group, dep addition | **`/plan` first** — written plan, human approval, then implement in stages with verification. |
| **Protected** | anything in the protected list below | **Stop. Get explicit human approval** before editing. |

When unsure which bucket you're in, round **up**.

## Protected files (require explicit human approval to edit)

| File / glob | Why protected |
|-------------|---------------|
| `package.json` (deps/scripts) | Dependency surface + build contract. Adding deps is an explicit decision. |
| `package-lock.json` | Generated; only changes via an approved dependency change. |
| `next.config.ts` | Build/runtime behavior, blast radius across the whole app. |
| `tsconfig.json` | Type-checking + path-alias contract. |
| `eslint.config.mjs` | Lint contract — relaxing rules hides real problems. |
| `.gitignore` | Risk of committing secrets/artifacts. |
| `app/layout.tsx` — analytics/consent scripts (Cookiebot, GTM-M9FQVCPW, Vercel) | Legal/compliance + tracking; breaking these has off-site consequences. Layout structure edits OK with care; **do not touch the consent/analytics scripts** without approval. |
| `components/ui/*` | Generated shadcn primitives. Re-style via composition/`className`, not by editing primitives. |
| `public/*` (deletions) | Live assets referenced by content/metadata. |
| `content/**/*.md` (deletions/edits to existing) | Published content. Adding new files is fine; editing/removing existing needs confirmation. |

Editing a protected file without approval is a hard stop — escalate instead (see `CLAUDE.md` → Escalation).

## Modification boundaries (where work normally happens)

Default editable surface, no special process beyond verify:

- `components/**` (except `components/ui/*`) — feature/section components.
- `lib/mdx.ts`, `lib/projects.ts`, `lib/utils.ts` — content loaders + helpers (but loader contract changes are "Large").
- `app/**/page.tsx`, `app/sitemap.ts`, `app/globals.css` — pages, sitemap, tokens.
- `content/**` — adding new `.md` posts/projects.
- `.claude/**` — harness state files (keep them current; that's expected).

## Task decomposition

Break any non-trivial task into the lifecycle, one verifiable step at a time:

```
discovery  → understand the code paths involved; identify the coupled surfaces (loaders/routes/sitemap/types)
planning   → write the plan: files to touch, order, risks, verification per step  (Large tasks: get approval)
implementation → smallest coherent edits; keep the build green between steps
verification → run the DoD gates; paste evidence
handoff    → update progress.md / decisions.md / feature-list.json; write session-handoff.md
```

Map these to commands: `/discover` → `/plan` → `/implement` → `/verify` → `/handoff` (and `/review`, `/ship` for delivery).

## When to ask for approval

- A protected file must change.
- A new dependency is needed.
- The content schema (`lib/types.ts` frontmatter contract) changes.
- Routing/build/deploy behavior changes.
- The request is ambiguous and the choice is irreversible or outward-facing (publish, push, delete).
- A verification gate fails and you can't resolve it in ~2 attempts.

Default to proceeding (and stating your assumption) only when the choice is reversible and clearly low-risk.
