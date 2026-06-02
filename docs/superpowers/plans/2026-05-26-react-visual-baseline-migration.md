# React Visual Baseline Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the React showcase the source-backed catalog foundation for `About`, `Article`, and `Blog` while preserving the approved Toolkit appearance currently visible in the static demo.

**Architecture:** Keep `demo/` as a read-only visual baseline during migration. Refactor `showcase/` from a Blog-only proof into a typed multi-category catalog: shared Toolkit shell outside the iframe, exact OpenSite wrapper compositions inside isolated preview routes, and registry-driven category/block routing.

**Tech Stack:** React 19, Vite 6, TypeScript, Tailwind CSS v4, `@opensite/ui`, Vitest, agent-browser.

---

## File Map

- `showcase/src/data/catalog.ts`: shared category and block model; loader lookup for all migrated blocks.
- `showcase/src/data/about-blocks.ts`: official About metadata and dynamic wrapper loaders.
- `showcase/src/data/article-blocks.ts`: official Article metadata and dynamic wrapper loaders.
- `showcase/src/data/blog-blocks.ts`: existing Blog metadata adjusted to shared `CatalogBlock` type.
- `showcase/src/data/catalog.test.ts`: count, ID, route, and loader coverage for migrated categories.
- `showcase/scripts/sync-opensite-catalog.mjs`: mechanical registry importer for official metadata and thumbnails.
- `showcase/src/blocks/about/*.tsx`: exact OpenSite About wrapper compositions copied from upstream.
- `showcase/src/blocks/article/*.tsx`: exact OpenSite Article wrapper compositions copied from upstream.
- `showcase/src/blocks/blog/*.tsx`: existing exact OpenSite Blog wrappers; content remains unchanged.
- `showcase/src/components/LibraryHeader.tsx`: approved Toolkit header and theme state.
- `showcase/src/components/CategoryIndex.tsx`: approved category-card home screen.
- `showcase/src/components/CategoryPage.tsx`: shared `16:9` preview-card catalog view.
- `showcase/src/components/BlockViewer.tsx`: shared Live Preview shell and viewport controls.
- `showcase/src/components/PreviewCanvas.tsx`: resolves any registered block loader inside iframe route.
- `showcase/src/App.tsx`: dispatches shared routes and validates missing IDs/categories.
- `showcase/src/styles.css`: ports accepted static shell tokens/layout, leaving iframe blocks source-backed.

## Implementation Boundary

- `demo/` is comparison material only in this plan; do not rewrite its accepted layout.
- `showcase/src/blocks/**` must be sourced from OpenSite wrappers, not authored by visual approximation.
- CSS may style catalog chrome; it must not override the inner block document to force visual similarity.
- Do not stage, commit, or push the dirty worktree unless the user explicitly asks after verification.

### Task 1: Generalize The React Registry

**Files:**
- Create: `showcase/src/data/catalog.ts`
- Create: `showcase/src/data/catalog.test.ts`
- Modify: `showcase/src/data/blog-blocks.ts`
- Modify: `showcase/src/data/routes.test.ts`
- Modify: `showcase/src/data/routes.ts`

- [ ] **Step 1: Write failing registry and route tests**

Create `showcase/src/data/catalog.test.ts` with the shared expectations before
adding the catalog implementation:

```ts
import { describe, expect, it } from "vitest";
import { categories, categoryHref, categoryTiles, findBlock, getCategory } from "./catalog";

describe("migrated source-backed catalog", () => {
  it("registers the migrated category counts", () => {
    expect(getCategory("about")?.blocks).toHaveLength(23);
    expect(getCategory("article")?.blocks).toHaveLength(7);
    expect(getCategory("blog")?.blocks).toHaveLength(13);
    expect(categories.map((category) => category.slug)).toEqual([
      "about",
      "article",
      "blog",
    ]);
  });

  it("keeps all approved home category tiles visible during migration", () => {
    expect(categoryTiles).toHaveLength(15);
    expect(categoryTiles.map((category) => category.slug)).toContain("hero");
    expect(categoryHref("about")).toBe("/categories/about");
    expect(categoryHref("hero")).toContain("demo/category.html?category=hero");
  });

  it("resolves official blocks through one lookup", () => {
    expect(findBlock("alternating-blocks")?.categorySlug).toBe("about");
    expect(findBlock("article-toc-sidebar")?.categorySlug).toBe("article");
    expect(findBlock("blog-grid-author-cards")?.categorySlug).toBe("blog");
    expect(findBlock("missing-block")).toBeUndefined();
  });

  it("provides preview loaders for every migrated entry", () => {
    for (const category of categories) {
      for (const block of category.blocks) {
        expect(typeof block.load).toBe("function");
      }
    }
  });
});
```

Extend `showcase/src/data/routes.test.ts`:

```ts
expect(parseShowcaseRoute("/")).toEqual({ kind: "home" });
expect(parseShowcaseRoute("/categories")).toEqual({ kind: "home" });
expect(parseShowcaseRoute("/categories/about")).toEqual({
  kind: "category",
  slug: "about",
});
expect(parseShowcaseRoute("/categories/article")).toEqual({
  kind: "category",
  slug: "article",
});
```

- [ ] **Step 2: Run tests to confirm the missing shared registry fails**

Run:

```powershell
Set-Location 'C:\xxx\frontend-toolkit\showcase'
npx vitest run src/data/catalog.test.ts src/data/routes.test.ts
```

Expected: FAIL because `./catalog` does not exist and `/categories` is not
yet treated as the index route.

- [ ] **Step 3: Add the common catalog types and lookups**

Create `showcase/src/data/catalog.ts`:

```ts
import type { ComponentType } from "react";
import { aboutBlocks } from "./about-blocks";
import { articleBlocks } from "./article-blocks";
import { blogBlocks } from "./blog-blocks";

export interface CatalogBlock {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  thumbnail: string;
  load: () => Promise<{ default: ComponentType }>;
}

export interface CatalogCategory {
  slug: string;
  title: string;
  blocks: CatalogBlock[];
}

export interface CategoryTile {
  slug: string;
  title: string;
  count: number;
}

export const categories: CatalogCategory[] = [
  { slug: "about", title: "About", blocks: aboutBlocks },
  { slug: "article", title: "Article", blocks: articleBlocks },
  { slug: "blog", title: "Blog", blocks: blogBlocks },
];

export const categoryTiles: CategoryTile[] = [
  { slug: "about", title: "About", count: 23 },
  { slug: "article", title: "Article", count: 7 },
  { slug: "blog", title: "Blog", count: 13 },
  { slug: "carousel", title: "Carousel", count: 13 },
  { slug: "contact", title: "Contact", count: 40 },
  { slug: "faq", title: "Faq", count: 17 },
  { slug: "features", title: "Features", count: 27 },
  { slug: "footer", title: "Footer", count: 19 },
  { slug: "gallery", title: "Gallery", count: 16 },
  { slug: "hero", title: "Hero", count: 78 },
  { slug: "link-page", title: "Link Page", count: 5 },
  { slug: "navbar", title: "Navbar", count: 19 },
  { slug: "process", title: "Process", count: 9 },
  { slug: "stats", title: "Stats", count: 12 },
  { slug: "testimonials", title: "Testimonials", count: 23 },
];

export function getCategory(slug: string): CatalogCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export function findBlock(id: string): CatalogBlock | undefined {
  return categories.flatMap((category) => category.blocks).find((block) => block.id === id);
}

export function categoryHref(slug: string): string {
  return getCategory(slug)
    ? `/categories/${slug}`
    : `http://localhost:8088/demo/category.html?category=${slug}`;
}
```

In `showcase/src/data/blog-blocks.ts`, replace the local interface with:

```ts
import type { CatalogBlock } from "./catalog";

export const blogBlocks: CatalogBlock[] = [
  // Preserve the existing 13 source-backed entries and add:
  // category: "Blog", categorySlug: "blog" on each entry.
];
```

Update `showcase/src/data/routes.ts` so the index route is explicit:

```ts
if (parts[0] === "categories" && !parts[1]) {
  return { kind: "home" };
}
```

- [ ] **Step 4: Add typed compile stubs replaced by Tasks 2 and 3**

Create typed compile stubs only to allow the registry tests to run before
source entries are copied; Tasks 2 and 3 replace them mechanically:

```ts
// showcase/src/data/about-blocks.ts
import type { CatalogBlock } from "./catalog";
export const aboutBlocks: CatalogBlock[] = [];
```

```ts
// showcase/src/data/article-blocks.ts
import type { CatalogBlock } from "./catalog";
export const articleBlocks: CatalogBlock[] = [];
```

Run:

```powershell
npx vitest run src/data/catalog.test.ts src/data/routes.test.ts
```

Expected: FAIL only on the expected About and Article counts/resolutions,
proving the shared registry and route contract compile.

### Task 2: Import Exact About Source Wrappers And Metadata

**Files:**
- Create: `showcase/src/blocks/about/*.tsx`
- Modify: `showcase/src/data/about-blocks.ts`
- Test: `showcase/src/data/catalog.test.ts`

- [ ] **Step 1: Copy all upstream About demo wrappers without editing their JSX**

Run:

```powershell
$source = 'C:\Users\lower\AppData\Local\Temp\opensite-source-check\ui-library\src\blocks\about'
$target = 'C:\xxx\frontend-toolkit\showcase\src\blocks\about'
New-Item -ItemType Directory -Force -Path $target | Out-Null
Copy-Item -Path (Join-Path $source '*.tsx') -Destination $target -Force
```

Expected: 23 About wrapper files under `showcase/src/blocks/about/`, including
`alternating-blocks.tsx`, `about-developer-profile.tsx`, and
`community-initiatives.tsx`.

- [ ] **Step 2: Create a mechanical official-registry importer**

Create `showcase/scripts/sync-opensite-catalog.mjs`; it generates data modules
from the checked-out OpenSite registry so descriptions, IDs, order, and
thumbnails cannot drift through manual transcription:

```js
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sourceRoot = process.env.OPENSITE_SOURCE;
const requested = process.argv.slice(2);

if (!sourceRoot || requested.length === 0) {
  throw new Error("Usage: OPENSITE_SOURCE=<checkout> node scripts/sync-opensite-catalog.mjs <category...>");
}

const registryPath = join(sourceRoot, "ui-library", "src", "data", "registry.generated.json");
const registry = JSON.parse(readFileSync(registryPath, "utf8"));

for (const slug of requested) {
  const blocks = registry.blocks.filter((block) => block.categorySlug === slug);
  if (blocks.length === 0) throw new Error(`No OpenSite blocks registered for ${slug}`);

  const variableName = `${slug}Blocks`;
  const entries = blocks.map((block) => `  {
    id: ${JSON.stringify(block.id)},
    title: ${JSON.stringify(block.title)},
    category: ${JSON.stringify(block.category)},
    categorySlug: ${JSON.stringify(block.categorySlug)},
    description: ${JSON.stringify(block.description)},
    thumbnail: ${JSON.stringify(block.thumbnail.desktop)},
    load: () => import("../blocks/${slug}/${block.id}"),
  }`).join(",\n");

  const output = `import type { CatalogBlock } from "./catalog";

export const ${variableName}: CatalogBlock[] = [
${entries},
];

export function get${slug[0].toUpperCase()}${slug.slice(1)}Block(id: string): CatalogBlock | undefined {
  return ${variableName}.find((block) => block.id === id);
}
`;

  writeFileSync(join("src", "data", `${slug}-blocks.ts`), output);
}
```

- [ ] **Step 3: Generate the About registry from source**

Run:

```powershell
Set-Location 'C:\xxx\frontend-toolkit\showcase'
$env:OPENSITE_SOURCE = 'C:\Users\lower\AppData\Local\Temp\opensite-source-check'
node scripts/sync-opensite-catalog.mjs about
```

Expected: `src/data/about-blocks.ts` contains `23` official About entries,
including the official desktop thumbnail URL and description for
`alternating-blocks`.

- [ ] **Step 4: Run registry tests for About**

Run:

```powershell
npx vitest run src/data/catalog.test.ts
```

Expected: About count and `alternating-blocks` lookup pass; Article assertions
remain red until Task 3.

### Task 3: Import Exact Article Source Wrappers And Metadata

**Files:**
- Create: `showcase/src/blocks/article/*.tsx`
- Modify: `showcase/src/data/article-blocks.ts`
- Test: `showcase/src/data/catalog.test.ts`

- [ ] **Step 1: Copy all upstream Article demo wrappers without editing their JSX**

Run:

```powershell
$source = 'C:\Users\lower\AppData\Local\Temp\opensite-source-check\ui-library\src\blocks\article'
$target = 'C:\xxx\frontend-toolkit\showcase\src\blocks\article'
New-Item -ItemType Directory -Force -Path $target | Out-Null
Copy-Item -Path (Join-Path $source '*.tsx') -Destination $target -Force
```

Expected: 7 Article wrapper files under `showcase/src/blocks/article/`,
including `article-toc-sidebar.tsx`, `article-sidebar-sticky.tsx`, and
`article-breadcrumb-social.tsx`.

- [ ] **Step 2: Generate Article and refresh Blog metadata from source**

Use the importer from Task 2 for Article and for the already source-backed
Blog metadata:

```powershell
Set-Location 'C:\xxx\frontend-toolkit\showcase'
$env:OPENSITE_SOURCE = 'C:\Users\lower\AppData\Local\Temp\opensite-source-check'
node scripts/sync-opensite-catalog.mjs article blog
```

Expected:

- `src/data/article-blocks.ts` contains all `7` official Article entries with
  source descriptions and desktop thumbnails.
- `src/data/blog-blocks.ts` keeps all `13` loaders but now takes every external
  description and thumbnail directly from the official registry.

- [ ] **Step 3: Run all registry and route tests**

Run:

```powershell
npx vitest run src/data/catalog.test.ts src/data/routes.test.ts src/data/blog-blocks.test.ts
```

Expected: PASS with `23` About blocks, `7` Article blocks, and `13` Blog
blocks loaded through the shared model.

### Task 4: Port The Approved Toolkit Catalog Shell Into React

**Files:**
- Create: `showcase/src/components/ThemeToggle.tsx`
- Create: `showcase/src/components/CategoryIndex.tsx`
- Create: `showcase/src/components/CategoryPage.tsx`
- Modify: `showcase/src/components/LibraryHeader.tsx`
- Delete: `showcase/src/components/BlogCategory.tsx`
- Modify: `showcase/src/App.tsx`
- Modify: `showcase/src/styles.css`

- [ ] **Step 1: Add rendering tests for shared categories**

Add `showcase/src/components/catalog-shell.test.tsx`:

```tsx
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CategoryIndex } from "./CategoryIndex";
import { CategoryPage } from "./CategoryPage";

describe("Toolkit catalog shell", () => {
  it("renders all approved category tiles while migration is in progress", () => {
    render(<CategoryIndex />);
    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Article/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Blog/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Hero/i })).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(15);
  });

  it("renders only blocks in the selected category", () => {
    render(<CategoryPage categorySlug="blog" />);
    expect(screen.getByRole("heading", { name: "Blog" })).toBeInTheDocument();
    expect(within(screen.getByLabelText("Blog components")).getAllByRole("link")).toHaveLength(13);
  });
});
```

Install test DOM dependencies if absent:

```powershell
npm install -D @testing-library/react @testing-library/jest-dom jsdom
```

Configure `vite.config.ts` test environment:

```ts
test: {
  environment: "jsdom",
  setupFiles: "./src/test/setup.ts",
},
```

Create `showcase/src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 2: Run shell tests and verify RED**

Run:

```powershell
npx vitest run src/components/catalog-shell.test.tsx
```

Expected: FAIL because `CategoryIndex` and `CategoryPage` do not exist.

- [ ] **Step 3: Create reusable category components**

Create `showcase/src/components/CategoryIndex.tsx`:

```tsx
import { categoryHref, categoryTiles } from "../data/catalog";

export function CategoryIndex() {
  return (
    <main className="home-page">
      <section className="categories-section">
        <div className="site-container categories-inner">
          <div className="section-title">
            <h1>Browse by Category</h1>
            <p>
              Explore our organized collection of components across{" "}
              <span>{categoryTiles.length}</span> categories
            </p>
          </div>
          <div className="category-grid">
            {categoryTiles.map((category) => (
              <a className="category-card" href={categoryHref(category.slug)} key={category.slug}>
                <span className="category-card-inner">
                  <span className="category-copy">
                    <span className="category-name">{category.title}</span>
                    <span className="category-count">
                      <span className="category-count-icon" aria-hidden="true" />
                      <span>{category.count}</span>
                      <span className="category-count-label">blocks</span>
                    </span>
                  </span>
                  <span className="category-arrow" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
```

Create `showcase/src/components/CategoryPage.tsx`:

```tsx
import { getCategory } from "../data/catalog";

export function CategoryPage({ categorySlug }: { categorySlug: string }) {
  const category = getCategory(categorySlug);
  if (!category) return <main className="not-found">Category not found.</main>;

  return (
    <main className="category-page">
      <div className="site-container category-shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Home</a><span aria-hidden="true">›</span>
          <a href="/">Categories</a><span aria-hidden="true">›</span>
          <strong>{category.title}</strong>
        </nav>
        <header className="category-page-header">
          <h1>{category.title}</h1>
          <p className="catalog-count">{category.blocks.length} blocks</p>
        </header>
        <section className="catalog-grid" aria-label={`${category.title} components`}>
          {category.blocks.map((block) => (
            <a className="catalog-card" href={`/blocks/${block.id}`} key={block.id}>
              <span className="preview-frame">
                <img src={block.thumbnail} alt="" loading="lazy" />
              </span>
              <span className="card-body">
                <span className="card-category">{block.category}</span>
                <span className="card-title">{block.title}</span>
                <span className="card-description">{block.description}</span>
              </span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
```

- [ ] **Step 4: Port the accepted header and theme toggle**

Create `showcase/src/components/ThemeToggle.tsx` by translating the accepted
static `theme-morph` SVG and local-storage behavior into React state:

```tsx
import { useEffect, useId, useState } from "react";

export function ThemeToggle() {
  const maskId = useId();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("frontend-toolkit-theme");
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("frontend-toolkit-theme", next);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Switch theme">
      <svg className="theme-morph" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <circle className="theme-mask-cut" cx="33" cy="0" r="9" fill="black" />
        </mask>
        <circle className="theme-body" cx="12" cy="12" r="5" fill="currentColor"
          stroke="none" mask={`url(#${maskId})`} />
        <g className="theme-rays">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          <line x1="5.64" y1="18.36" x2="4.22" y2="19.78" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        </g>
      </svg>
    </button>
  );
}
```

Modify `LibraryHeader.tsx` to use the static shell structure and
`ThemeToggle`, with the brand linking to `/`, Categories linking to `/`, and
Patterns continuing to the static approved patterns page.

- [ ] **Step 5: Wire shared pages into app routing**

Replace Blog-specific rendering in `showcase/src/App.tsx`:

```tsx
import { BlockViewer } from "./components/BlockViewer";
import { CategoryIndex } from "./components/CategoryIndex";
import { CategoryPage } from "./components/CategoryPage";
import { LibraryHeader } from "./components/LibraryHeader";
import { PreviewCanvas } from "./components/PreviewCanvas";
import { parseShowcaseRoute } from "./data/routes";

export function App() {
  const route = parseShowcaseRoute(window.location.pathname);
  if (route.kind === "preview") return <PreviewCanvas blockId={route.id} />;

  return (
    <>
      <LibraryHeader />
      {route.kind === "block" && <BlockViewer blockId={route.id} />}
      {route.kind === "category" && <CategoryPage categorySlug={route.slug} />}
      {route.kind === "home" && <CategoryIndex />}
    </>
  );
}
```

- [ ] **Step 6: Port shell CSS from the approved demo**

In `showcase/src/styles.css`, preserve Tailwind/OpenSite directives needed by
iframe blocks, then replace the React-only chrome rules with the accepted
outer-shell rules from `demo/style.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --muted: #f5f5f4;
  --muted-foreground: #737373;
  --card: #ffffff;
  --border: #d4d4d4;
  --header-bg: rgba(255, 255, 255, 0.96);
  --accent: #555152;
  --accent-hover: #737275;
  --accent-active: #555152;
  --accent-soft: #d6dee9;
  --ring: rgba(180, 185, 193, 0.55);
}

:root[data-theme="dark"] {
  --background: #151414;
  --foreground: #f3f4f6;
  --muted: #242325;
  --muted-foreground: #b4b9c1;
  --card: #1d1c1e;
  --border: #555152;
  --header-bg: rgba(21, 20, 20, 0.94);
  --accent: #d6dee9;
  --accent-hover: #b4b9c1;
  --accent-active: #93949a;
  --accent-soft: #555152;
  --ring: rgba(214, 222, 233, 0.3);
}
```

Port the approved `.site-header`, `.header-inner`, `.command-search`,
`.category-grid`, `.category-card`, `.category-count`, `.catalog-grid`,
`.catalog-card`, `.card-description`, and responsive breakpoint rules from
`demo/style.css` without introducing a new card system. Set React thumbnail
previews to:

```css
.preview-frame {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.preview-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-description {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
```

- [ ] **Step 7: Run shell and registry tests**

Run:

```powershell
npx vitest run
```

Expected: PASS for routes, registry, Blog source metadata, and shared shell
rendering.

### Task 5: Make The Shared Live Preview Viewer Source-Agnostic

**Files:**
- Modify: `showcase/src/components/BlockViewer.tsx`
- Modify: `showcase/src/components/PreviewCanvas.tsx`
- Modify: `showcase/src/styles.css`
- Test: `showcase/src/components/block-viewer.test.tsx`

- [ ] **Step 1: Write viewer tests before generalization**

Create `showcase/src/components/block-viewer.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BlockViewer } from "./BlockViewer";

describe("Live preview viewer", () => {
  it("renders any registered category block in the shared viewer", () => {
    render(<BlockViewer blockId="alternating-blocks" />);
    expect(screen.getByRole("heading", { name: "Live Preview" })).toBeInTheDocument();
    expect(screen.getByTitle("Live preview of Alternating Blocks")).toHaveAttribute(
      "src",
      "/preview/alternating-blocks",
    );
    expect(screen.getByText(/Display content sections with alternating/)).toBeInTheDocument();
  });

  it("offers desktop, tablet and mobile modes", () => {
    render(<BlockViewer blockId="article-toc-sidebar" />);
    expect(screen.getByRole("button", { name: /Desktop/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Tablet/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Mobile/ })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run viewer tests and verify RED**

Run:

```powershell
npx vitest run src/components/block-viewer.test.tsx
```

Expected: FAIL because viewer lookup currently supports Blog only.

- [ ] **Step 3: Generalize block resolution**

In both `BlockViewer.tsx` and `PreviewCanvas.tsx`, replace
`getBlogBlock(blockId)` with:

```ts
import { findBlock } from "../data/catalog";

const block = findBlock(blockId);
```

Keep iframe rendering isolated; do not pass shell theme into the preview
route. Port the accepted `.live-preview`, `.viewport-switcher`,
`.viewport-button`, `.preview-surface`, `.device-frame`, `.preview-caption`,
and `.block-summary` rules from `demo/style.css`.

- [ ] **Step 4: Run tests and production build**

Run:

```powershell
npx vitest run
npm run build
```

Expected: all tests PASS and Vite builds all three categories and their source
wrapper chunks without import errors.

### Task 6: Verify Source Fidelity, Interactions, And Visual Baseline

**Files:**
- Modify only if verification exposes a source or shell defect:
  `showcase/src/data/*`, `showcase/src/components/*`, `showcase/src/styles.css`
- Modify: `docs/transfer-guides/react-opensite-category-gate.md`

- [ ] **Step 1: Update the transfer gate with the accepted shell rule**

Append to `docs/transfer-guides/react-opensite-category-gate.md`:

```md
## Toolkit Shell Invariant

For every new migrated category, the outer React pages use the accepted
Toolkit shell now shared by About, Article, and Blog. Do not copy OpenSite
catalog chrome or create category-specific card/viewer styling. Upstream
source is authoritative only inside the preview iframe and for registry
metadata.

Before considering a category migrated:

- Compare the category grid and one detail viewer to the Toolkit React baseline.
- Compare each upstream interactive block to its OpenSite source behavior.
- Verify iframe content remains unchanged when the Toolkit shell theme toggles.
- Verify sticky and scroll-coupled layouts while scrolling inside the iframe.
```

- [ ] **Step 2: Run desktop visual checks with short-lived agent-browser sessions**

Run:

```powershell
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check screenshot 'C:\Users\lower\AppData\Local\Temp\toolkit-react-home.png'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/categories/about'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check screenshot 'C:\Users\lower\AppData\Local\Temp\toolkit-react-about.png'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/categories/article'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check screenshot 'C:\Users\lower\AppData\Local\Temp\toolkit-react-article.png'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/categories/blog'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check screenshot 'C:\Users\lower\AppData\Local\Temp\toolkit-react-blog-unified.png'
```

Compare visually to the accepted static pages at port `8088`. Expected:
header, typography, card sizing, line clamping, palette, and spacing read as
one consistent Toolkit catalog.

- [ ] **Step 3: Verify preview isolation and interaction-sensitive Article blocks**

Open and inspect:

```powershell
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/blocks/alternating-blocks'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/blocks/article-toc-sidebar'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/blocks/article-sidebar-sticky'
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check open 'http://127.0.0.1:5173/blocks/article-breadcrumb-social'
```

Expected:

- iframe content matches source-backed OpenSite wrappers;
- scrolling inside `Article TOC Sidebar` and `Article Sidebar Sticky` retains
  sticky sidebar behavior;
- social controls/icons render in `Article Breadcrumb Social`;
- changing outer shell theme does not recolor the iframe or change pattern
  opacity.

- [ ] **Step 4: Verify mobile layout and clean up the browser session**

Use agent-browser viewport verification at `375x812` for `/`,
`/categories/about`, and `/blocks/article-toc-sidebar`.

Expected:

- no horizontal scroll;
- header maintains the approved mobile arrangement;
- cards use correct responsive columns;
- viewer controls fit and the preview remains centered.

Close the browser session:

```powershell
& 'C:\Program Files\nodejs\agent-browser.ps1' --session react-check close
```

- [ ] **Step 5: Report for review without publishing**

Provide both local review URLs:

```text
Static reference: http://localhost:8088/demo/index.html
React migration:  http://127.0.0.1:5173/
```

Do not commit or push until the user reviews the React result and explicitly
requests repository actions.
