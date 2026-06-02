# Patterns And About Polish Design

## Scope

This pass improves only three surfaces:

- `demo/patterns.html` becomes a usable background-pattern catalog based on the pattern family logic visible in OpenSite source.
- shared interaction behavior becomes consistent across the demo and the already implemented `About` examples.
- the existing 23 `About` blocks receive a final consistency pass, without adding or replacing block concepts.

No new component category is implemented in this pass. No GitHub publication work is performed.

## Pattern Library

The pattern catalog represents reusable background primitives rather than decorative one-off samples. It contains six local CSS/SVG-free families:

- `grid`
- `dashed-grid`
- `diagonal-cross`
- `circuit-board`
- `grid-dots`
- `radial-gradient`

The first five families expose `basic`, `fade-top`, `fade-center`, and `fade-bottom` where the mask is useful; `radial-gradient` exposes top and bottom placement. Every card displays a live pattern preview and the portable class names that can be copied into a future block implementation. The toolkit uses its gray palette, not OpenSite green.

Reusable implementation lives in `snippets/patterns.css`. The demo consumes the same CSS it advertises, so a pattern verified in the catalog is the same pattern available for future blocks.

## Interaction System

Interactions follow a small explicit contract:

- `180ms ease` for color, background, border and shadow transitions.
- primary controls darken slightly on hover and press without changing geometry.
- secondary controls gain a clearer border and subtle surface on hover.
- tabs use quiet neutral inactive states and a readable active state.
- card links change border, title/icon color and subtle shadow on hover; no oversized motion.
- all actionable controls have visible `:focus-visible` states in light and dark themes.

The public reusable button rules live in `snippets/buttons.css`; demo controls and standalone About pages mirror the same contract locally so each copied example remains portable.

## About Quality Pass

All 23 About entries remain source-derived, directly openable examples. The pass checks:

- background pattern strength and positioning;
- CTA/button hover, active and focus states;
- tab, expandable and gallery control states;
- image radii and border/shadow consistency where the source uses framed media;
- no horizontal overflow at narrow widths;
- Live Preview cards and detail viewer keep hidden iframe scrollbars.

The pass does not normalize every About block into one look. Source-specific differences, such as sharp panels versus warm rounded profile cards, are preserved.

## Future Category Transfer

The next category should be `Hero`, because it exercises the new pattern catalog, CTA interaction states, responsive preview, and dark/light surfaces.

For each future OpenSite category:

1. read package exports and catalog metadata for that category;
2. list the exact blocks to implement and retain BSD-3-Clause attribution;
3. inspect source plus live preview for each block;
4. map pattern usage and interactions to local portable primitives;
5. implement one standalone HTML/CSS/JS folder per block;
6. wire entries into the demo only after direct-page verification;
7. verify catalog thumbnails, detail viewport modes and mobile overflow before moving on.

This process deliberately avoids bulk approximation: each block must be traceable to its source structure and live render.

## Verification

- automated static checks confirm expected pattern families, interaction selectors, About routes, and clean ASCII text;
- `agent-browser` checks Patterns, About category, representative detail previews, interactive About blocks and mobile/desktop overflow;
- screenshots are written only to the temporary directory.

