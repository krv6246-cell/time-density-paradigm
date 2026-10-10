# Time Density Paradigm

This repository is the consolidation point for project documentation and its static website. The material describes a project paradigm; it is not a claim that the paradigm is established physics.

Start at [`index.html`](index.html) for the English, Italian, and Russian navigation pages. See [`site-docs/MIGRATION_MANIFEST.md`](site-docs/MIGRATION_MANIFEST.md) for inspected sources, mapped material, and remaining migration decisions.

## Structure

- `site-docs/` — ontology, knowledge-vault categories, simulator and website specifications, and migration provenance.
- `src/content/en/`, `src/content/it/`, `src/content/ru/` — localized source content.
- `src/pages/` — static pages, served directly without a build step.
- `src/components/` — shared stylesheet.
- `public/media/` — reserved for reviewed, attributed media.

The website uses plain HTML and CSS. To preview it locally, serve the repository root with a static HTTP server (for example, `python -m http.server`) and open the displayed local URL. No build or deployment configuration is required.
