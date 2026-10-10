# Copilot instructions

## Project purpose and structure

This repository is the consolidation point for project documentation and a small static website. Keep theory, knowledge articles, product specifications, and media metadata distinct:

- `site-docs/01_ONTOLOGY_AND_CORE/` — project concepts and terminology.
- `site-docs/02_KNOWLEDGE_VAULT/` — articles grouped under time/perception, attention/focus, social dynamics, and practical protocols.
- `site-docs/03_GAME_SIMULATOR/` — simulator concepts and implementation notes.
- `site-docs/04_SITE_ARCHITECTURE/` — routes, navigation, and localization decisions.
- `site-docs/05_MEDIA_GALLERY/` — gallery metadata and asset provenance.
- `src/content/{en,it,ru}/` — localized source content.
- `src/pages/` — framework-free static HTML pages.
- `src/components/` — shared CSS and JavaScript.
- `public/media/` — project media and captions.

The current website is plain HTML and CSS. Keep it build-free unless a concrete feature requires a framework; do not add a package manager, dependency, or deployment workflow just for scaffolding.

## Evidence and editorial standards

- Treat Time Density as a project paradigm or hypothesis unless reliable evidence supports a stronger characterization. Clearly distinguish project definitions, interpretations, and testable claims from established scientific results.
- Do not describe `rho(x) = 1 - |x|` or a 300–500 ms perception delay as established fact without a traceable source and appropriate scientific context. If retained as a project model, label assumptions, domain, and limitations.
- Do not repeat source FAQ assertions about changing the speed of light, explaining gravity, or replacing established cosmology as demonstrated results. Attribute and qualify claims, and identify missing evidence.
- Preserve source meaning and provenance. Any removal or reframing of esoteric or mystical terminology is an editorial transformation; never imply the source omitted that language.
- Do not invent missing articles, translations, media, simulator behavior, experiments, or citations. Mark gaps as pending and record source paths and URLs in `site-docs/MIGRATION_MANIFEST.md`.
- Never delete, archive, or modify a source repository as part of work here. Do not claim a migration until the source content was actually inspected and mapped.

## Content and localization

- Use Markdown for long-form content and HTML for the current static pages. Keep language-specific content under `src/content/en/`, `src/content/it/`, and `src/content/ru/`; do not present an untranslated placeholder as a completed translation.
- Keep navigation labels and page summaries localized in all three languages. Use accessible headings, descriptive link text, semantic HTML, and a declared page language.
- When a translation is unavailable, mark it as pending rather than silently falling back to another language.
- Keep media local, documented, and accompanied by attribution/usage information when known. Do not import assets with unclear provenance.

## Changes and validation

- Prefer small, source-grounded changes. Keep the migration manifest current when adding or transforming material.
- The static website can be previewed by serving the repository root with any basic static HTTP server; no build step is currently required.
- Before finishing, inspect changed files and links, run available repository checks, and verify that no unreviewed source claims were introduced.
