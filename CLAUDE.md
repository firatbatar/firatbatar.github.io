# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website for Fırat Batar (firatbatar.com), built with the [Hugo](https://gohugo.io/) static site generator and deployed to GitHub Pages. The theme is custom — there is no external Hugo theme; all layouts live in [layouts/](layouts/).

## Commands

- `hugo server` — run local dev server at `http://localhost:1313` with live reload.
- `hugo server -D` — include draft content (new archetypes create posts with `draft: true`).
- `hugo --gc --minify` — production build into [public/](public/) (matches CI flags).
- `hugo new project/<name>/index.md` — scaffold a project page from [archetypes/project.md](archetypes/project.md) (page bundle; keep images alongside `index.md`).
- `hugo new blog/<name>/index.md` — scaffold a blog post from [archetypes/blog.md](archetypes/blog.md).

Hugo version pinned in CI is **0.120.4 extended** (Dart Sass required) — see [.github/workflows/hugo.yml](.github/workflows/hugo.yml).

## Deployment

Pushes to `main` trigger [.github/workflows/hugo.yml](.github/workflows/hugo.yml), which builds with Hugo and deploys to GitHub Pages. No manual publish step.

## Architecture notes

- **Content model** — three section types under [content/](content/): `about` (singleton), `project` (page bundles, one per project, each with its own images), and `blog`. `disableKinds = ['taxonomy', 'term']` in [config.toml](config.toml) means tag/category listing pages don't render even though front matter includes `tags`/`keywords`.
- **Project status field** — project front matter has a `status` of `active`/`complete`/`inprogress`; the human-readable tooltip text for each value is defined centrally in `[params.status]` in [config.toml](config.toml), not in templates.
- **Layouts** — section list pages live in `layouts/<section>/section.html`, detail pages in `layouts/<section>/single.html`. Reusable UI is split between [layouts/partials/components/](layouts/partials/components/) (card, jumbotron, blogPostCard) and [layouts/partials/sections/](layouts/partials/sections/) (homepage sections). [layouts/_default/baseof.html](layouts/_default/baseof.html) is the root template.
- **Static assets** — Bootstrap 5, jQuery, and custom CSS/JS are vendored under [static/](static/) (served as-is at site root). Images under [assets/](assets/) go through Hugo's asset pipeline; images inside content page bundles are referenced by relative path.
- **Menu** — top nav is declared in `[menu]` blocks in [config.toml](config.toml), not via front-matter.

## Git LFS

`*.png`, `*.jpg`, `*.jpeg` are tracked via Git LFS ([.gitattributes](.gitattributes)). The Pages workflow sets `lfs: true` on checkout — if you add a new binary asset type, update both the `.gitattributes` filter and verify it pulls in CI.
