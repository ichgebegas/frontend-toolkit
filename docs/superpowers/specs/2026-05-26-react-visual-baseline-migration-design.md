# React Visual Baseline Migration Design

## Decision

`showcase/` becomes the technical foundation of the catalog. The current static
demo remains the accepted visual reference until React matches it and the user
approves the replacement.

The goal is not a redesign. The approved appearance of the home page, `About`,
and `Article` defines the Toolkit visual system. `Blog` and later categories
must use that same catalog shell while their block content comes from OpenSite
source components and source demo data.

## Scope

This migration covers three related pieces of work:

1. Rebuild the accepted Toolkit catalog shell in React: header, category page,
   block cards, live preview viewer, viewport switcher, theme behavior, and
   block summary.
2. Add source-backed React categories for `About` and `Article`.
3. Restyle the existing source-backed React `Blog` catalog and viewer to the
   same Toolkit shell without changing the block examples themselves.

The static `demo/` implementation is not removed or redesigned during this
stage. Further categories and a React patterns page are follow-up work.

## Visual Baseline

The comparison pages are:

- `demo/index.html`
- `demo/category.html?category=about`
- `demo/category.html?category=article`
- detail pages reached from the approved `About` and `Article` cards

React must reproduce these decisions:

- Header brand text is `Toolkit`; search, `Categories`, `Patterns`, theme
  toggle, and GitHub placement follow the approved static header.
- Palette is based on `#555152`, `#737275`, `#93949a`, `#b4b9c1`, and
  `#d6dee9`, including current light/dark shell behavior.
- Home category cards keep the compact grid, whole-card navigation, component
  icon/count treatment, hover color change, and responsive column behavior.
- Category cards use a `16:9` live thumbnail, category/title/two-line
  description treatment, whole-card link behavior, and the accepted spacing.
- Detail views show `Live Preview`, the same desktop/tablet/mobile controls,
  the isolated iframe canvas, a render caption, and `Block Summary`.
- Desktop preview remains a fixed `16:9` canvas. Tablet and mobile retain the
  accepted fixed-height, centered device-frame treatment.
- Dark mode changes catalog chrome only. Isolated preview content and its
  pattern opacity do not change when the outer theme changes.

## Source Boundary

OpenSite source is authoritative for content and block behavior:

- Use wrappers from `opensite-ai/ui-library/src/blocks/<category>/`.
- Render block implementations from `@opensite/ui` or the corresponding
  upstream source if the package does not expose a needed implementation.
- Preserve text, image URLs, icons, interactive behavior, pattern type, and
  `patternOpacity` before any Toolkit-specific adjustment.
- Keep official IDs, titles, descriptions, thumbnails, and category counts
  aligned with the upstream registry data.

Toolkit is authoritative only for surrounding catalog chrome:

- header and navigation;
- cards outside the iframe;
- viewer controls and summary section;
- shell color tokens, typography, borders, and responsive layout.

Individual OpenSite blocks must not be manually approximated again. A visual
problem inside an iframe is fixed by comparing the exact upstream wrapper and
component source, not by inventing substitute markup.

## React Structure

The React app should evolve into shared catalog modules:

- `LibraryHeader` renders the approved common header.
- `CategoryIndex` renders the home category grid using registry metadata.
- `CategoryPage` renders any selected category using shared cards.
- `BlockViewer` renders any block in the accepted viewer shell.
- `PreviewCanvas` loads the registered source-backed block in an isolated
  iframe route.
- A typed category registry maps category metadata and block loaders for
  `about`, `article`, and `blog`.

Public React routes in this stage:

- `/` and `/categories` for the category index;
- `/categories/about`, `/categories/article`, `/categories/blog`;
- `/blocks/:id`;
- `/preview/:id`.

`Patterns` may continue linking to the accepted static patterns page until it
receives its own React migration. This avoids changing an approved feature
incidentally.

## Migration Sequence

1. Extract the static visual baseline into shared React shell styles and
   replace only the current React Blog chrome.
2. Add `About` registry data and exact upstream wrappers, then compare its
   category and key detail pages with the approved static version.
3. Add `Article` registry data and exact upstream wrappers, explicitly testing
   sticky table-of-contents/social sidebars and mobile alignment behavior.
4. Recheck `Blog` in the shared shell so it visually belongs with `About` and
   `Article`, while retaining the source-backed speed and reliability already
   achieved.
5. Keep both static and React URLs available for visual review; do not switch
   the primary demo or publish until approved.

## Verification

Automated checks:

- Registry tests confirm official IDs, counts, loaders, and route resolution
  for `About`, `Article`, and `Blog`.
- Production build succeeds after each category addition.

Browser checks with short-lived `agent-browser` sessions:

- Desktop and mobile comparisons of the home page, category pages, and sample
  detail views against the static baseline.
- No horizontal overflow at desktop, tablet, or mobile widths.
- Viewport switcher changes only the preview frame sizing.
- Theme toggle does not modify iframe preview color or pattern opacity.
- `Article` sticky elements remain sticky while preview content scrolls.
- Interactive upstream blocks (tabs, expandable values, carousels, filters)
  retain their source behavior.

## Constraints

- No GitHub push until the user explicitly requests it.
- No new category implementation outside `About`, `Article`, and visual
  unification of the existing `Blog` in this migration.
- No manual replacement of OpenSite block data, imagery, copy, or interaction
  logic.
- Browser sessions are closed after verification so they do not accumulate
  background Chromium processes.

