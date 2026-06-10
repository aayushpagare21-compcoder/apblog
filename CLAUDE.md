# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # ESLint (next/core-web-vitals + next/typescript)
```

There is no test suite. `playwright` is a dependency but no test runner or test files are configured.

## Architecture

This is a personal portfolio + blog built with Next.js 15 (App Router, React 19, Tailwind v4, shadcn/ui "new-york"). It is statically generated and deployed on Vercel.

### Content is file-based, not a CMS

All blog posts and projects are Markdown files with gray-matter frontmatter:

- `content/blog/*.md` → read by `lib/mdx.ts` (`getAllPosts`, `getPostBySlug`). `Post` frontmatter: `title`, `date`, `excerpt`, `categories[]`, optional `image`, optional `readingTime` (auto-computed from word count / 200 if absent). Posts are sorted by `date` descending.
- `content/projects/*.md` → read by `lib/projects.ts` (`getAllProjects`, `getProjectBySlug`). `Project` frontmatter: `title`, `description`, `technologies[]`, optional `image`, `liveUrl`, `githubUrl`.

To add a post or project, drop a new `.md` file in the relevant `content/` dir — the slug is the filename. The types backing both are in `lib/types.ts`.

### Routing & static generation

Dynamic routes (`app/blog/[slug]`, `app/projects/[slug]`) use `generateStaticParams` to pre-render every content file at build time, plus `generateMetadata` for per-page SEO/OpenGraph tags. Blog pages set `revalidate = 84000`. `app/sitemap.ts` generates the sitemap from the same content loaders — keep it in sync when content loading changes.

Markdown body content is rendered through `react-markdown`; `components/mdx-content.tsx` (`StyledContent`) supplies the Tailwind-styled element overrides.

### Conventions

- Path alias `@/*` maps to the repo root (e.g. `@/lib/mdx`, `@/components/ui/button`).
- Use `cn()` from `lib/utils.ts` to compose Tailwind class names.
- UI primitives live in `components/ui/` (shadcn). Feature components are grouped by section: `components/landing`, `components/about`, `components/blog`, `components/projects`.
- Theming via `next-themes` (`ThemeProvider` in `app/layout.tsx`, `mode-toggle.tsx`). Color tokens are CSS variables defined in `app/globals.css`.
- The canonical production domain is `https://aayushpagare.com` (hardcoded in metadata, sitemap, and OG image URLs).
- `app/layout.tsx` injects Cookiebot, Google Tag Manager (GTM-M9FQVCPW), and Vercel Analytics/Speed Insights via inline scripts in `<head>`.
