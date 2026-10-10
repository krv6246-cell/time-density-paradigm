# Migration manifest

This manifest records what was accessible, inspected, and mapped during the initial consolidation. The source repositories have not been changed.

## Source review

| Source | Inspected material | Mapping and status |
| --- | --- | --- |
| [`TimeDensity-Core`](https://github.com/krv6246-cell/TimeDensity-Core) | Root tree (README, `docs/`, `index.html`); `docs/concepts.md` and `docs/overview.md` | The concepts document informed the carefully qualified working vocabulary in [ontology.md](01_ONTOLOGY_AND_CORE/ontology.md) and the three localized overview summaries. No scientific validation was inferred from the source's conceptual language. The core document was available and inspected; unrelated root-page content was not migrated. |
| [`timedensity-faq`](https://github.com/krv6246-cell/timedensity-faq) | Root tree; `FAQ.html`, `README.md`, and `script.js` FAQ data | The FAQ data was inspected. Its self-description of TimeDensity as an evolving framework is summarized in [FAQ status](02_KNOWLEDGE_VAULT/faq-status.md). Assertions about gravity, light speed, cosmology, and experimental predictions were not copied as facts; the ontology records their unverified status. No FAQ article has been migrated verbatim. |
| [`timedensity-site`](https://github.com/krv6246-cell/timedensity-site) | Root tree and `index.html` navigation page | The landing page exposes links to a wider site. Individual linked pages, styles, scripts, and media have not been comprehensively reviewed or migrated. The target instead starts with a small, new static language selector and navigation. |

## Knowledge-vault source audit (2026-10-10)

The repository inventory (`git ls-files`) and a repository-wide text and filename search (excluding `.git`) checked for `Documento VI`, `Italian Collection`, `Knowledge Base 7.0`, `Knowledge Vault 7.0`, `attention hygiene`, `Steel Quenching`, `Zero Point`, `Punto Zero`, and `нулев`. No matching source document was found; text-search matches for these terms are limited to this audit entry. The focused review covered:

- `docs/proposals/time-density-paradigm-system-specification.md`
- `site-docs/02_KNOWLEDGE_VAULT/README.md`
- `site-docs/02_KNOWLEDGE_VAULT/01_TIME_AND_PERCEPTION/README.md`
- `site-docs/02_KNOWLEDGE_VAULT/02_ATTENTION_AND_FOCUS/README.md`
- `site-docs/02_KNOWLEDGE_VAULT/03_SOCIAL_DYNAMICS/README.md`
- `site-docs/02_KNOWLEDGE_VAULT/04_PRACTICAL_PROTOCOLS/README.md`
- `site-docs/02_KNOWLEDGE_VAULT/faq-status.md`
- `site-docs/04_SITE_ARCHITECTURE/README.md` and `site-docs/04_SITE_ARCHITECTURE/navigation.md`

The system specification is an explicitly unapproved project proposal. It distinguishes project definitions, hypotheses, qualified research summaries, and proposed heuristics; it is not one of the missing collections. The site-architecture files describe the static site and routes, not attention practices. The four category READMEs are scaffolds. The existing FAQ summary concerns only the source FAQ's description of TimeDensity as an evolving framework.

One limited item was mapped to `01_TIME_AND_PERCEPTION`: three `NEEDS_REVIEW` language versions summarize only the proposal's qualified descriptions of Cowan (2001) and Libet et al. (1983), with its exact repository path and the cited papers' DOI URLs in each article's provenance. The Libet result is explicitly not presented as a general perception delay or as evidence for TDP. These articles do not migrate or substitute for the missing collections.

**Pending source provision:** No source material was found for the requested “Italian Collection / Documento VI”, “Knowledge Base/Vault 7.0”, separate website technical specifications, or attention-hygiene protocols. Consequently, substantive material remains blocked for:

- `01_TIME_AND_PERCEPTION`: requested collection-based articles beyond the limited, proposal-based item above.
- `02_ATTENTION_AND_FOCUS`: all requested material, including “Steel Quenching” and “Zero Point”.
- `03_SOCIAL_DYNAMICS`: all requested material, including social resonance, asynchronous communication, and emotional stability.
- `04_PRACTICAL_PROTOCOLS`: all requested attention-hygiene, morning, and daytime protocols.

No English, Italian, or Russian article versions of those missing-source topics were invented. To continue, provide the named files or accessible URLs (including the specific website technical specifications and protocols), plus any intended source-language/translation guidance. Inspect and map each source before drafting parallel `en`, `it`, and `ru` versions; retain `NEEDS_REVIEW` status and exact provenance.

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
