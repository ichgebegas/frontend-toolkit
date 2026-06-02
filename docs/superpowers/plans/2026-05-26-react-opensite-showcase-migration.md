# React OpenSite Showcase Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a React/Vite showcase that renders the Blog collection from real OpenSite components and source demo data, establishing the repeatable migration path for further categories.

**Architecture:** Keep the existing static `demo/` untouched as a comparison baseline and add an independent `showcase/` application. The showcase imports published `@opensite/ui` block components and vendors only the BSD-licensed OpenSite demo wrappers that carry exact example props; a small local catalog layer supplies routing, previews, and the Toolkit visual shell.

**Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS v4 with `@tailwindcss/vite`, `@opensite/ui` 3.7.5, Vitest, agent-browser.

---

### Task 1: App Foundation And Attribution

**Files:**
- Create: `showcase/package.json`
- Create: `showcase/index.html`
- Create: `showcase/tsconfig.json`
- Create: `showcase/vite.config.ts`
- Modify: `THIRD_PARTY_NOTICES.md`

- [ ] **Step 1: Add Vite/Tailwind configuration and dependency manifest**

Create a standalone application with scripts `dev`, `build`, and `test`, and declare `@opensite/ui`, its required peers, React, Vite, Tailwind v4, and Vitest dependencies.

- [ ] **Step 2: Record copied-source attribution**

Document that `showcase/src/blocks/blog/*` preserves source demo compositions from `opensite-ai/ui-library`, BSD-3-Clause, while `@opensite/ui` is consumed as a dependency.

- [ ] **Step 3: Install dependencies**

Run: `npm install`
Expected: `node_modules` and a lockfile are created under `showcase/` without install errors.

### Task 2: Source-Backed Blog Registry

**Files:**
- Create: `showcase/src/data/blog-blocks.test.ts`
- Create: `showcase/src/data/blog-blocks.ts`
- Create: `showcase/src/blocks/blog/*.tsx`

- [ ] **Step 1: Write the failing registry test**

Test that the Blog catalog contains all 13 official IDs, that every item exposes an import loader, and that the `blog-grid-author-cards` label is source-aligned.

- [ ] **Step 2: Run the test and observe RED**

Run: `npm test -- --run src/data/blog-blocks.test.ts`
Expected: FAIL because `blog-blocks.ts` is not present yet.

- [ ] **Step 3: Vendor upstream demo wrappers and implement the catalog**

Copy the 13 wrapper components from `ui-library/src/blocks/blog/`; create typed metadata/loaders pointing at those wrappers without manually reconstructing their props.

- [ ] **Step 4: Run the test and observe GREEN**

Run: `npm test -- --run src/data/blog-blocks.test.ts`
Expected: PASS with 13 source-backed Blog entries.

### Task 3: OpenSite-Like Catalog And Live Preview

**Files:**
- Create: `showcase/src/main.tsx`
- Create: `showcase/src/App.tsx`
- Create: `showcase/src/styles.css`
- Create: `showcase/src/components/LibraryHeader.tsx`
- Create: `showcase/src/components/BlogCategory.tsx`
- Create: `showcase/src/components/BlockViewer.tsx`
- Create: `showcase/src/components/PreviewCanvas.tsx`

- [ ] **Step 1: Add route behavior tests**

Test route parsing for `/categories/blog`, `/blocks/<id>`, and `/preview/<id>` before implementation.

- [ ] **Step 2: Run route tests and observe RED**

Run: `npm test -- --run src/data/routes.test.ts`
Expected: FAIL because route parsing is not implemented.

- [ ] **Step 3: Implement shell, catalog, and isolated previews**

Create OpenSite-like header and Blog card grid, use whole-card navigation, implement the block page with Desktop/Tablet/Mobile controls, and render the actual block inside an iframe-compatible preview route.

- [ ] **Step 4: Apply Toolkit tokens only at the shell/theme boundary**

Map the chosen gray palette to Tailwind/OpenSite variables in `styles.css`; do not edit individual imported block layout or data.

- [ ] **Step 5: Run tests and build**

Run: `npm test -- --run`
Run: `npm run build`
Expected: both pass.

### Task 4: Visual Verification And Next Category Gate

**Files:**
- Create: `docs/transfer-guides/react-opensite-category-gate.md`

- [ ] **Step 1: Document the repeatable category transfer gate**

Record the workflow: copy upstream wrapper source, keep source text/media/icons/pattern props, register loaders, then theme tokens only after parity screenshots pass.

- [ ] **Step 2: Start Vite and verify with agent-browser**

Open `/categories/blog`, a Blog block detail, and its Desktop/Mobile previews; verify no console-visible layout failures and no horizontal overflow.

- [ ] **Step 3: Preserve both versions for user review**

Provide the Vite URL alongside the existing static demo URL; do not push to GitHub.
