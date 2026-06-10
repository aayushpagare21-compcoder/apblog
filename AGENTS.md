# AGENTS.md

Tool-agnostic operating guide for AI coding agents in this repository. Claude Code users: `CLAUDE.md` is the canonical source and contains the full harness map; this file mirrors the essentials for other agents.

## Project

Personal portfolio + blog. **Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind v4 · shadcn/ui · deployed on Vercel.** Statically generated; content is file-based Markdown, not a CMS. The git root is `apblog/apblog`.

## Commands

```bash
npm run dev          # Dev server (Turbopack) at http://localhost:3000
npm run build        # Production build — primary correctness gate
npm run lint         # ESLint (next/core-web-vitals + next/typescript)
npx tsc --noEmit     # Type-check (no `typecheck` npm script exists)
```

There is no test suite. Verify with type-check + lint + build + a manual dev smoke test.

## Architecture (essentials)

- **Content**: `content/blog/*.md` and `content/projects/*.md` with gray-matter frontmatter. Loaders: `lib/mdx.ts`, `lib/projects.ts`. Types: `lib/types.ts`. Slug = filename.
- **Routing**: App Router. `app/blog/[slug]` and `app/projects/[slug]` use `generateStaticParams` + `generateMetadata`. `app/sitemap.ts` derives from the same loaders — keep it in sync.
- **Rendering**: `react-markdown` + `components/mdx-content.tsx` for styled MD.
- **Conventions**: `@/*` path alias → repo root; `cn()` from `lib/utils.ts` for class merging; shadcn primitives in `components/ui/`; feature components grouped by section folder; theming via `next-themes`; CSS variable tokens in `app/globals.css`. Canonical domain: `https://aayushpagare.com`. Server Components by default — add `"use client"` only when needed.

## Rules

1. **Verify before claiming done.** Implement → run `npx tsc --noEmit`, `npm run lint`, `npm run build` (+ dev smoke test for UI) → paste real output as evidence → then mark complete. No "looks good" without evidence.
2. **Smallest change that fully solves it.** Match existing patterns. No new dependencies, no config/schema changes, no edits to `components/ui/*` without explicit approval.
3. **Protected files** (need human approval to change): `package.json`/`package-lock.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `.gitignore`, analytics/consent scripts in `app/layout.tsx`, `components/ui/*`.
4. **Keep content surfaces in sync**: loaders ↔ `[slug]` routes ↔ `sitemap.ts` ↔ `lib/types.ts`.
5. **Plan large changes first** (>3 files / new dep / config / schema). Decompose into discovery → planning → implementation → verification → handoff.
6. **Don't commit/push** unless asked. **Ask** when ambiguous and the answer is irreversible or outward-facing; otherwise proceed and state assumptions.
7. **Record decisions** in `.claude/decisions.md`; update `.claude/progress.md` when work state changes.

State and workflows live in `.claude/` (`progress.md`, `decisions.md`, `session-handoff.md`, `architecture.md`, `definition-of-done.md`, `scope.md`, `lifecycle.md`, `skills/`, `commands/`).
