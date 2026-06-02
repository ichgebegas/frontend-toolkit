# React OpenSite Category Transfer Gate

## Purpose

The React showcase imports the real `@opensite/ui` components and uses the OpenSite showcase wrappers as the source of example data. This avoids manually rebuilding copy, icons, media, interactions, responsive behavior, and pattern opacity.

## One Category Workflow

1. Confirm that the category exists in both upstream sources:
   - `opensite-ai/opensite-ui/components/blocks/<category>/`
   - `opensite-ai/ui-library/src/blocks/<category>/`
2. Copy the `ui-library` wrapper TSX files into `showcase/src/blocks/<category>/` without visually approximating their JSX props.
3. Keep the original text, image URLs, `DynamicIcon` usage, actions, background, `pattern`, and `patternOpacity` values until parity is verified.
4. Create a typed catalog module in `showcase/src/data/<category>-blocks.ts` using official block IDs, titles, descriptions, and thumbnail URLs from `registry.generated.json`.
5. Add a failing test asserting official IDs, loaders, and category routing before registering the new category.
6. Register the category in the React catalog and reuse the existing Live Preview viewer; do not create category-specific iframe sizing.
7. Check desktop, tablet, and mobile previews against OpenSite before applying any Toolkit adaptation.
8. Adapt only shared theme tokens and catalog chrome after source parity passes. Do not replace component spacing, iconography, photography, copy, or pattern values unless explicitly requested.

## Toolkit Shell Invariants

- The catalog shell keeps Toolkit typography, neutral palette, header layout, category cards, and Live Preview frame controls already approved in `About` and `Article`.
- The iframe renders the OpenSite wrapper unchanged. Shell dark mode must never set theme classes, tokens, or pattern overrides inside the iframe document.
- The home category grid is four columns on desktop, three on compact desktop, two through tablet widths, and one only on phone widths below `520px`.
- Category pages keep `16:9` official thumbnails, official descriptions clamped to two lines, and no category-specific replacement layout.
- The detail viewer uses the same fixed desktop frame and equal-height tablet/mobile device frames for every category.

## Source And Runtime Rules

- Use `ui-library/src/blocks/<category>/*.tsx` as the composition source and `registry.generated.json` as the metadata source. Do not reproduce screenshots by eye.
- Preserve original text, images, icons, interactions, sticky elements, background patterns, and `patternOpacity` until visual and behavioral parity is confirmed.
- When dependencies are installed or updated while Vite is running, restart the showcase with a fresh optimized-dependency pass before visual testing:

```powershell
Set-Location 'C:\xxx\frontend-toolkit\showcase'
npm run dev -- --force
```

  A stale Vite optimized runtime can produce a misleading `Invalid hook call` error inside otherwise valid source previews.

## Parity Checklist

- All official wrapper files for the selected category are present.
- Catalog count and titles match upstream.
- Card thumbnails use official registry media.
- Detail preview renders the upstream wrapper, not replacement HTML.
- All buttons, tabs, sliders, sticky regions, and hover states behave in the iframe.
- Desktop uses the fixed viewer canvas; tablet and mobile use fixed-height device widths.
- Background pattern type and opacity match upstream in both catalog themes.
- Dark mode for the catalog shell does not recolor isolated block previews.
- Block Summary uses official description; tags remain hidden unless requested.
- `680x935` home view keeps two category columns; `375x812` uses one column with no horizontal scroll.
- Browser console contains no React hook errors after a fresh dependency-cache restart.

## Attribution

Copied demo wrappers and published UI components remain subject to OpenSite AI's BSD-3-Clause license, recorded in `THIRD_PARTY_NOTICES.md`.
