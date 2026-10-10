# Migration manifest

This manifest records what was accessible, inspected, and mapped during the initial consolidation. The source repositories have not been changed.

## Source review

| Source | Inspected material | Mapping and status |
| --- | --- | --- |
| [`TimeDensity-Core`](https://github.com/krv6246-cell/TimeDensity-Core) | Root tree (README, `docs/`, `index.html`); `docs/concepts.md` and `docs/overview.md` | The concepts document informed the carefully qualified working vocabulary in [ontology.md](01_ONTOLOGY_AND_CORE/ontology.md) and the three localized overview summaries. No scientific validation was inferred from the source's conceptual language. The core document was available and inspected; unrelated root-page content was not migrated. |
| [`timedensity-faq`](https://github.com/krv6246-cell/timedensity-faq) | Root tree; `FAQ.html`, `README.md`, and `script.js` FAQ data | The FAQ data was inspected. It contains assertions about gravity, light speed, cosmology, and experimental predictions without supporting evidence in that file. Those assertions were not copied as facts; the ontology records their unverified status. No FAQ article has been migrated verbatim. |
| [`timedensity-site`](https://github.com/krv6246-cell/timedensity-site) | Root tree and `index.html` navigation page | The landing page exposes links to a wider site. Individual linked pages, styles, scripts, and media have not been comprehensively reviewed or migrated. The target instead starts with a small, new static language selector and navigation. |

## Editorial decisions and limits

- The target begins with plain HTML/CSS and no build or third-party dependencies because the repository had only a README and no existing framework or test setup.
- Source concepts are attributed as project vocabulary, not presented as physical facts. The reviewed files did not establish `rho(x) = 1 - |x|` or a 300–500 ms perception delay as scientific results; neither is asserted here.
- The source FAQ's claims are reframed as unverified proposals. This is an editorial transformation, not a claim that the source never contained those assertions.
- Attention/focus, social-dynamics, and practical-protocol folders are placeholders; no unsupported articles were invented. The time/perception folder only records an evidence caveat.
- No source-site media or implementation has been copied. The presence of an image directory in the site tree does not establish individual asset provenance or reuse permission.
- Italian and Russian pages and overview summaries are initial editorial translations. More extensive localization remains a review task.

## Remaining manual work

1. Review remaining pages and documents in each source repository and decide, item by item, what is current and appropriate to migrate.
2. For each proposed scientific or psychological claim, supply primary/reliable sources, precise definitions, and limitations before making stronger statements.
3. Review source assets and licensing; add approved media with attribution and metadata.
4. Confirm the intended game/simulator mechanics and whether a Canvas implementation is warranted.
5. Expand and review Italian and Russian translations. No GitHub Pages workflow was added; enable Pages only after checking repository settings and desired URLs.
