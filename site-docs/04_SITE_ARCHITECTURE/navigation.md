# Navigation and localization

## Current static routes

- `/index.html` — language selector.
- `/src/pages/en/index.html` — English overview and topic links.
- `/src/pages/it/index.html` — Italian overview and topic links.
- `/src/pages/ru/index.html` — Russian overview and topic links.

The localized source summaries live in `src/content/{en,it,ru}/overview.md`. The pages link to Markdown project documentation directly; they do not currently transform Markdown into styled article pages.

## Shared assets

- `src/components/site.css` — shared page styles.
- `src/components/navigation.js` — reserved for shared navigation behavior; not currently needed by the static pages.
- `public/media/` — reserved for media with reviewed provenance and usage information.

## Publishing

The current site is static and has no build step. GitHub Pages can serve a repository-root static site, but no deployment workflow is configured. Confirm the repository's Pages settings and final public paths before enabling deployment.
