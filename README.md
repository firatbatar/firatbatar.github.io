# Personal Website

My personal website — [firatbatar.com](https://firatbatar.com/) — showcasing my portfolio and background. Built with the [Hugo](https://gohugo.io/) static site generator and deployed to GitHub Pages.

## Local development

Requires **Hugo 0.160.1 extended** (matches CI — see [.github/workflows/hugo.yml](.github/workflows/hugo.yml)).

```sh
hugo server       # dev server at http://localhost:1313
hugo server -D    # include drafts
hugo --gc --minify  # production build into public/
```

Deployment is automatic: pushes to `main` trigger [.github/workflows/hugo.yml](.github/workflows/hugo.yml), which builds and publishes to GitHub Pages.

## Repository structure

```
.
├── config.toml          # site config, menu, project status labels
├── archetypes/          # front-matter templates for `hugo new`
├── content/             # Markdown content — the site's actual copy
│   ├── about/             # singleton "about me" page
│   ├── blog/              # blog posts (page bundles)
│   └── project/           # one page bundle per project (index.md + images)
├── layouts/             # Hugo templates (custom theme — no external theme)
│   ├── _default/          # baseof.html and fallbacks
│   ├── about/             # section.html (list) + single.html (detail)
│   ├── blog/
│   ├── project/
│   ├── index.html         # homepage
│   └── partials/
│       ├── components/      # card, jumbotron, blog post card, …
│       ├── sections/        # homepage sections
│       └── util/
├── assets/              # images processed via Hugo's asset pipeline
│   └── images/
└── static/              # served as-is at site root
    ├── bootstrap-5/
    ├── jquery/
    ├── css/               # custom styles
    └── js/                # custom scripts
```

## Managing content

Scaffold new content with `hugo new`; both project and blog entries are page bundles, so keep each entry's images next to its `index.md`.

```sh
hugo new project/<name>/index.md
hugo new blog/<name>/index.md
```

Project front matter includes a `status` field (`active` / `complete` / `inprogress`). The tooltip text for each value is defined centrally under `[params.status]` in [config.toml](config.toml) — edit it there, not in templates.

The top navigation is declared in `[menu]` blocks in [config.toml](config.toml), not via page front matter.

`*.png`, `*.jpg`, `*.jpeg` are tracked via Git LFS (see [.gitattributes](.gitattributes)). If you add a new binary asset type, update `.gitattributes` and confirm it pulls in CI.

## Managing styling

- **Custom CSS / JS** live under [static/css/](static/css/) and [static/js/](static/js/) and are referenced directly from the base layout.
- **Bootstrap 5** and **jQuery** are vendored under [static/](static/) rather than pulled from a CDN.
- **Layout-level changes** (markup, structure, component composition) go in [layouts/](layouts/) — start from [layouts/_default/baseof.html](layouts/_default/baseof.html) and the relevant partial under [layouts/partials/](layouts/partials/).
- **Content-pipeline images** (homepage, about, shared illustrations) live in [assets/images/](assets/images/); images tied to a specific project or post live inside that page bundle.

## License

Licensed under the [MIT License](LICENSE).
