# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> **This repo runs a harness.** Before doing substantive work, read this file top to bottom, then `.claude/architecture.md` and `.claude/progress.md`. The full operating system for Claude sessions lives in `.claude/` — see [Harness Map](#harness-map) below. A new session should be able to onboard in under 5 minutes by reading this file + `.claude/session-handoff.md`.

## Commands

```bash
npm run dev          # Start dev server with Turbopack (http://localhost:3000)
npm run build        # Production build — the real type + route validation gate
npm run start        # Serve the production build
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
npx tsc --noEmit     # Standalone type-check (NOTE: there is no `typecheck` npm script)
```

There is **no test suite**. `playwright` is installed as a dependency but no test runner, config, or test files exist. Verification is done via type-check, lint, build, and a manual dev-server smoke test — see `.claude/definition-of-done.md`.

## Architecture

This is a personal portfolio + blog built with **Next.js 15 (App Router), React 19, Tailwind v4, shadcn/ui ("new-york")**. It is statically generated and deployed on **Vercel**. The git root is `apblog/apblog` (the project lives one directory deeper than the outer folder).

Full architecture detail lives in `.claude/architecture.md` — read it before any non-trivial change. Summary:

### Content is file-based, not a CMS

All blog posts and projects are Markdown files with gray-matter frontmatter:

- `content/blog/*.md` → read by `lib/mdx.ts` (`getAllPosts`, `getPostBySlug`, `getAllCategories`). `Post` frontmatter: `title`, `date`, `excerpt`, `categories[]`, optional `image`, optional `readingTime` (auto-computed from word count / 200 if absent). Posts are sorted by `date` descending.
- `content/projects/*.md` → read by `lib/projects.ts` (`getAllProjects`, `getProjectBySlug`). `Project` frontmatter: `title`, `description`, `technologies[]`, optional `image`, `liveUrl`, `githubUrl`.

To add a post or project, drop a new `.md` file in the relevant `content/` dir — the slug is the filename. The types backing both are in `lib/types.ts`.

### Routing & static generation

Dynamic routes (`app/blog/[slug]`, `app/projects/[slug]`) use `generateStaticParams` to pre-render every content file at build time, plus `generateMetadata` for per-page SEO/OpenGraph tags. Blog pages set `revalidate = 84000`. `app/sitemap.ts` generates the sitemap from the same content loaders — **keep it in sync when content loading changes.**

Markdown body content is rendered through `react-markdown`; `components/mdx-content.tsx` (`StyledContent`) supplies the Tailwind-styled element overrides.

### Conventions

- Path alias `@/*` maps to the repo root (e.g. `@/lib/mdx`, `@/components/ui/button`).
- Use `cn()` from `lib/utils.ts` to compose Tailwind class names.
- UI primitives live in `components/ui/` (shadcn). Feature components are grouped by section: `components/landing`, `components/about`, `components/blog`, `components/projects`.
- Theming via `next-themes` (`ThemeProvider` in `app/layout.tsx`, `mode-toggle.tsx`). Color tokens are CSS variables defined in `app/globals.css`.
- The canonical production domain is `https://aayushpagare.com` (hardcoded in metadata, sitemap, and OG image URLs).
- `app/layout.tsx` injects Cookiebot, Google Tag Manager (GTM-M9FQVCPW), and Vercel Analytics/Speed Insights via inline scripts in `<head>`.
- Server Components by default (App Router). Only add `"use client"` when a component needs hooks/interactivity — keep the client boundary as low in the tree as possible.

## Operating Rules

These rules are binding for every session in this repo.

### Verification is mandatory — never claim "done" without evidence

Work is **not complete** until the Definition of Done (`.claude/definition-of-done.md`) is satisfied and you have pasted the actual command output as evidence. The bar:

1. **Implement** the change.
2. **Verify**: run `npx tsc --noEmit`, `npm run lint`, and `npm run build`. For UI/behavior changes, smoke-test against `npm run dev`.
3. **Summarize evidence**: show the real command output (exit codes / "No ESLint warnings or errors" / build success). Do not paraphrase.
4. **Only then** mark complete and update `.claude/progress.md`.

Forbidden: "looks good", "this should work", "the change is complete" without step 2+3. If a command fails, report the failure verbatim — do not hide it or mark the task done.

### Decision-making principles

- **Repository is the source of truth.** Prefer evolving existing patterns over introducing new ones. Match the surrounding file's style, naming, and idioms.
- **Smallest change that fully solves the problem.** No drive-by refactors, no speculative abstractions, no new dependencies unless required and approved.
- **Keep the four content surfaces in sync**: `lib/mdx.ts` / `lib/projects.ts`, the `app/**/[slug]` routes, `app/sitemap.ts`, and `lib/types.ts`. A change to content loading usually touches several of these.
- When two reasonable approaches exist, pick the one that requires fewer files changed and less new surface area, and note the tradeoff in `.claude/decisions.md`.

### Scope & approval (see `.claude/scope.md`)

- **Plan before large changes.** Any change touching >3 files, adding a dependency, altering routing/build config, or changing the content schema requires a written plan first (use `/plan`).
- **Protected files** (do not edit without explicit human approval): `package.json` deps, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.gitignore`, `app/layout.tsx` analytics/consent scripts, `components/ui/*` (generated shadcn primitives). See `.claude/scope.md` for the full list and rationale.
- Decompose large tasks into the lifecycle: **discovery → planning → implementation → verification → handoff.**

### Forbidden actions

- Committing or pushing unless the user explicitly asks (`git commit`/`git push` are pre-approved in `settings.local.json`, but only run them on request).
- Adding npm dependencies, changing build/TS/lint config, or editing `components/ui/*` primitives without approval.
- Deleting content files (`content/**/*.md`) or `public/` assets without confirmation.
- Hardcoding a domain other than `https://aayushpagare.com`.
- Marking work complete without verification evidence.
- Running destructive git operations (`reset --hard`, force push, branch deletion) without explicit instruction.

### Ambiguity & escalation

- If the request is ambiguous and the answer changes what you build, **ask** (use `AskUserQuestion`) — don't guess on irreversible or outward-facing actions.
- If you can resolve it from the code or a sensible default, proceed and state the assumption.
- **Escalate to the human** when: a protected file must change, a verification gate fails in a way you can't fix in ~2 attempts, the task requires a new dependency, or the request conflicts with these rules.
- Record every non-obvious choice in `.claude/decisions.md`.

### Interacting with humans

- Be concise and direct. Lead with the result, not the process.
- Reference code as clickable links: [lib/mdx.ts](lib/mdx.ts).
- When done, give a short summary: what changed, the verification evidence, and what (if anything) remains.

## Harness Map

The `.claude/` directory is the operating system for sessions here:

| Path | Purpose |
|------|---------|
| `.claude/architecture.md` | Deep architecture reference — read before non-trivial work |
| `.claude/feature-list.json` | Machine-readable feature inventory + implementation status |
| `.claude/progress.md` | Current work state, what's in flight, what's next |
| `.claude/decisions.md` | Architecture/decision log (append-only) |
| `.claude/session-handoff.md` | Latest session handoff — read this first when resuming |
| `.claude/definition-of-done.md` | The completion bar + verification procedures |
| `.claude/scope.md` | Modification boundaries, protected files, change thresholds |
| `.claude/lifecycle.md` | Session start / continue / end / recovery templates |
| `.claude/context/` | Long-form scratch context for in-progress investigations |
| `.claude/skills/` | Reusable skills (feature-implementation, bug-investigation, …) |
| `.claude/commands/` | Slash-command workflows (`/discover`, `/plan`, `/implement`, `/verify`, `/review`, `/handoff`, `/continue`, `/ship`) |

`AGENTS.md` is the tool-agnostic mirror of the core rules for non-Claude agents.
