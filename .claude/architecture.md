# Architecture Reference

Deep architecture map for `apblog`. Read this before any non-trivial change. The one-paragraph summary is in `CLAUDE.md`; this file is the source of truth for *how the pieces fit*.

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js 15.3.6 (App Router) | `next dev --turbopack` in dev |
| UI runtime | React 19 | Server Components by default |
| Language | TypeScript 5, `strict: true` | `noEmit`, bundler resolution |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) | tokens as CSS vars in `app/globals.css` |
| Components | shadcn/ui "new-york" | primitives in `components/ui/` |
| Content | Markdown + `gray-matter` | file-based, no CMS or DB |
| MD render | `react-markdown` | styled via `components/mdx-content.tsx` |
| Animation | `framer-motion`, `react-intersection-observer` | reveal-on-scroll |
| Theming | `next-themes` | light/dark, system |
| Analytics | Vercel Analytics + Speed Insights, GTM, Cookiebot | injected in `app/layout.tsx` |
| Deploy | Vercel | static export of content at build time |

No database, no API routes, no auth, no server actions. Everything renders from the filesystem at build time.

## Directory map

```
app/                      # App Router pages (Server Components)
  layout.tsx              # Root layout: ThemeProvider, navbar, footer, analytics/consent scripts, fonts
  page.tsx                # Landing page (composes components/landing/*)
  globals.css             # Tailwind v4 + CSS variable design tokens
  about/page.tsx
  blog/page.tsx           # Blog index (list + category filter)
  blog/[slug]/page.tsx    # Post detail: generateStaticParams + generateMetadata, revalidate=84000
  projects/page.tsx       # Projects index
  projects/[slug]/page.tsx# Project detail: generateStaticParams + generateMetadata
  sitemap.ts              # Sitemap derived from content loaders

lib/
  mdx.ts                  # getAllPosts, getPostBySlug, getAllCategories (content/blog)
  projects.ts             # getAllProjects, getProjectBySlug (content/projects)
  types.ts                # Post, Project interfaces (frontmatter contract)
  utils.ts                # cn() — clsx + tailwind-merge

components/
  ui/                     # shadcn primitives (avatar, badge, button, card, dropdown-menu, tabs)
  landing/                # hero, clients, featured-projects, freelance, hero-image, latest-posts, skills, index
  about/ blog/ projects/  # section feature components (index.tsx each)
  navbar.tsx footer.tsx mode-toggle.tsx
  mdx-content.tsx         # StyledContent — Tailwind overrides for react-markdown elements
  post-card.tsx project-card.tsx category-filter.tsx reveal-section.tsx slider.tsx

content/
  blog/*.md               # blog posts (frontmatter: title,date,excerpt,categories[],image?,readingTime?)
  projects/*.md           # projects (frontmatter: title,description,technologies[],image?,liveUrl?,githubUrl?)

types/global.d.ts         # global ambient types
public/                   # static assets (images, og)
```

## Data flow

```
content/blog/*.md ──gray-matter──► lib/mdx.ts ──► app/blog/page.tsx (list)
                                              └──► app/blog/[slug]/page.tsx (detail, react-markdown)
                                              └──► app/sitemap.ts (urls)
content/projects/*.md ─────────────► lib/projects.ts ──► app/projects/* (same pattern)
lib/types.ts  defines the frontmatter contract consumed by both loaders + all pages.
```

**The four coupled surfaces** — a change to content loading or schema usually ripples through all of them:

1. `lib/mdx.ts` / `lib/projects.ts` (loaders)
2. `app/blog/[slug]` / `app/projects/[slug]` + index pages (consumers)
3. `app/sitemap.ts` (derives URLs from the loaders)
4. `lib/types.ts` (the type contract)

If you touch one, check whether the other three need to follow.

## Rendering & SSG model

- Both detail routes call `generateStaticParams()` to enumerate slugs at build → every post/project is pre-rendered to static HTML.
- `generateMetadata()` produces per-page `<title>`, description, and OpenGraph tags. OG image URLs are absolute against the canonical domain.
- Blog detail sets `export const revalidate = 84000` (ISR window ≈ 23.3h).
- Adding/removing a `.md` file changes the static route set on the next build — no code change required for a normal new post.

## Cross-cutting invariants

- **Canonical domain** `https://aayushpagare.com` is hardcoded in metadata, sitemap, and OG URLs. Do not introduce a second domain literal — if it must be configurable, that's a planned change (and a decision log entry).
- **`cn()` everywhere** for conditional Tailwind classes; never string-concatenate class names.
- **Design tokens** are CSS variables in `app/globals.css`; reference them via Tailwind, don't hardcode hex colors in components.
- **Client boundary**: `app/layout.tsx` is where providers and third-party scripts live. Most pages/components are Server Components; interactive ones (`mode-toggle`, `category-filter`, sliders, reveal sections) are client components.
- **Analytics/consent** (Cookiebot, GTM-M9FQVCPW, Vercel) live in `app/layout.tsx` — treat as protected (see `.claude/scope.md`).

## Known gaps / sharp edges

- **No tests.** `playwright` is installed but unconfigured. Verification relies on type-check/lint/build + manual smoke. If tests are introduced, that's a planned change — see `.claude/skills/test-generation`.
- **`content/blog/` is empty** (only `.gitkeep`). The blog list/sitemap must not break on zero posts — verify after content-loader changes.
- `lib/mdx.ts` reads the directory synchronously at module load paths; non-`.md` files are filtered, but a malformed frontmatter file will surface at build.
- The outer folder (`apblog/`) is **not** the git root; the project is `apblog/apblog`. Run all commands from there.

## When this file changes

Update this file whenever you change: the content schema, the loader contract, the routing structure, the build/deploy model, or a cross-cutting invariant. Pair the update with a `.claude/decisions.md` entry.
