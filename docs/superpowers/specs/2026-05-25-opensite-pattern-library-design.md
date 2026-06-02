# OpenSite-Aligned Pattern Library Design

## Goal

Replace the simplified toolkit pattern showcase with a source-aligned OpenSite pattern library while retaining the toolkit grayscale palette.

## Reference

- Visual behavior: `https://ui.opensite.dev/patterns`
- Source package: `@opensite/ui@3.7.5` extracted locally in `C:\Users\lower\AppData\Local\Temp\opensite-ui-source\package\dist`
- License handling: keep attribution in `THIRD_PARTY_NOTICES.md`.

## Catalog

The demo presents the same 52 pattern choices exposed by OpenSite:

- 12 asset patterns: `squareAltGrid`, `grid1`, `noise`, `dots`, `dotPattern`, `dotPattern2`, `circles`, `waves`, `crossPattern`, `architect`, `tinyCheckers`, `p6`.
- 32 directional overlays: eight variants each for `circuitBoard`, `dashedGrid`, `diagonalCross`, and `grid`.
- 2 `gridDots` variants.
- 4 light effects: `gradientGlowTop`, `gradientGlowBottom`, `spotlightLeft`, `spotlightRight`.
- 2 inline gradients: `radialGradientTop`, `radialGradientBottom`.

## Page Behavior

- Keep the existing Toolkit header.
- Replace grouped editorial sections with an OpenSite-like `Pattern Library` screen.
- Provide global background and opacity controls plus a reset action.
- Render each pattern in a preview card with its name, local background choice, local opacity, and a Copy action.
- Search filters cards by exact pattern names.

## Styling

- Reproduce OpenSite geometry, spacing, masks, grid densities, and effects.
- Remap color tokens to the toolkit palette: graphite ink and cool gray highlights instead of OpenSite green.
- Use local copies of texture assets where asset patterns are required, so the toolkit remains locally viewable.

## About Integration

- Introduce the same named pattern primitives for About backgrounds.
- Replace hand-drawn About backgrounds with mapped OpenSite primitives where a background pattern exists.
- Keep layout, text, imagery, and interactions unchanged.

## Verification

- Contract test requires 52 pattern definitions, controls, and shared About integration.
- Browser-check `Patterns` on desktop/mobile, global and local controls, search and dark/light page theme.
- Spot-check patterned About cards and detail preview without overflow or scrollbar regressions.
