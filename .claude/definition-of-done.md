# Definition of Done

The completion bar for this repo. **No task is "done" until every applicable box is checked and you have pasted the real command output as evidence.** "Looks good" / "should work" is not done.

## The loop (non-negotiable)

1. **Implement** the change.
2. **Verify** — run the gates below that apply.
3. **Summarize evidence** — paste actual output (exit codes, "No ESLint warnings or errors", build "✓ Compiled"). Do not paraphrase or assume.
4. **Update state** — `progress.md` (+ `feature-list.json` / `decisions.md` if relevant).
5. **Only then** report complete.

If any gate fails: report it verbatim, fix or escalate. Never mark done on a failing gate.

## Verification gates

| Gate | Command | Pass criteria | When required |
|------|---------|---------------|---------------|
| Type-check | `npx tsc --noEmit` | exit 0, no errors | every code change |
| Lint | `npm run lint` | "✔ No ESLint warnings or errors" | every code change |
| Build | `npm run build` | build completes; all static routes generated | content-loader, routing, metadata, sitemap, or config-adjacent changes; before any ship/PR |
| Dev smoke | `npm run dev` → exercise the page | renders, no console errors, behavior correct | any UI/behavior/content-rendering change |

> There is **no automated test suite.** Do not claim "tests pass." If you add tests (see `skills/test-generation`), document the runner here and add it as a gate.

### Build is the real correctness gate

Because every post/project is statically generated via `generateStaticParams`, `npm run build` is what actually exercises the content loaders, metadata, and route generation end-to-end. A change can pass tsc + lint and still break the build (e.g. malformed frontmatter, a loader returning `undefined`). For anything touching `lib/mdx.ts`, `lib/projects.ts`, `app/**/[slug]`, `app/sitemap.ts`, or `lib/types.ts` — **run the build.**

## Smoke-test procedure (UI / behavior changes)

1. `npm run dev` (Turbopack, http://localhost:3000).
2. Load the affected route(s). Check the relevant set:
   - **Landing** `/` — sections render; latest posts / featured projects populate.
   - **Blog** `/blog` — list renders (and does not crash with zero posts); category filter works.
   - **Blog post** `/blog/<slug>` — markdown renders via `StyledContent`; metadata/title correct.
   - **Projects** `/projects` and `/projects/<slug>` — same as blog.
   - **About** `/about`.
   - **Theme** — toggle light/dark/system via `mode-toggle`; no flash, tokens apply.
   - **SEO** — `/sitemap.xml` lists expected URLs; OG/meta tags present in page source.
3. Open devtools console — **zero errors/warnings** introduced by your change.
4. Record what you exercised in the evidence block.

## Evidence block template

Paste this filled-in into your completion message and into `progress.md`:

```
### Verification — <task>
- tsc:   npx tsc --noEmit        → <exit 0 / errors>
- lint:  npm run lint            → <"No ESLint warnings or errors" / details>
- build: npm run build           → <success / route count / failure> (if applicable)
- smoke: <routes exercised, result, console clean?>           (if applicable)
- scope: <files changed count> — within boundary? protected files? (see scope.md)
```

## Done checklist

- [ ] Change implemented; matches existing patterns and conventions.
- [ ] tsc clean.
- [ ] lint clean.
- [ ] build passes (if applicable per table above).
- [ ] dev smoke test passed (if UI/behavior).
- [ ] No protected file changed without approval (`scope.md`).
- [ ] Content surfaces kept in sync if loaders/schema/routes changed (loaders ↔ routes ↔ sitemap ↔ types).
- [ ] `progress.md` updated; `feature-list.json` / `decisions.md` updated if relevant.
- [ ] Evidence block pasted with real output.
- [ ] Summary states what changed, the evidence, and what remains.
