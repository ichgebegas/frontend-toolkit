# About Derived Blocks Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the complete 23-block `About` category as local, previewable HTML/CSS/JS examples derived from the OpenSite source package.

**Architecture:** Each About card maps to a standalone example under `components/about/<block-id>/`. Every page must be converted from its matching `@opensite/ui` source component and live OpenSite render; generic approximations and shared layout-generator substitutions are not acceptable. The demo viewer reads a small registry and reuses one `block.html` shell for iframe preview, viewport switching, and Block Summary. The project records BSD-3-Clause attribution in a third-party notice because the blocks are adapted from `@opensite/ui`.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, local HTTP server, `agent-browser` verification.

---

### Task 1: Attribution And Viewer Registry

**Files:**
- Create: `THIRD_PARTY_NOTICES.md`
- Modify: `demo/script.js`
- Modify: `demo/block.html`

- [ ] Add the BSD-3-Clause OpenSite notice and identify `components/about/` as derived implementations.
- [ ] Define a registry entry for each of the 23 About cards with `id`, `title`, `description`, and local component path.
- [ ] Populate title, breadcrumb, iframe source, caption, and summary from `?block=<id>` without adding `Code`, `Props`, or `Tags`.
- [ ] Verify that an unimplemented or unknown block cannot silently show `Alternating Blocks`.

### Task 2: Static About Examples

**Files:**
- Create: `components/about/<block-id>/index.html`
- Create: `components/about/<block-id>/style.css`
- Create: `components/about/<block-id>/README.md`

- [ ] Create standalone implementations for the 20 non-interactive blocks by reading the matching OpenSite source and checking its live preview before writing each page.
- [ ] Preserve each source block's content sections, media composition, background pattern, major spacing, responsive layout, and visible example copy; only substitute the toolkit palette and vanilla implementation details.
- [ ] Do not use a bulk generic block generator for source-derived examples.
- [ ] Store media within each example folder when downloaded reference assets are used.
- [ ] Keep each block scoped, directly openable, and suitable for copying into another project.

### Task 3: Interactive About Examples

**Files:**
- Create: `components/about/about-interactive-tabs/script.js`
- Create: `components/about/about-expandable-values/script.js`
- Create: `components/about/about-culture-tabs/script.js`

- [ ] Reproduce tabs behavior for `About Interactive Tabs` and `About Culture Tabs` using vanilla JS.
- [ ] Reproduce expanding-card behavior for `About Expandable Values` using vanilla JS.
- [ ] Verify keyboard/button state handling and no layout overflow at mobile widths.

### Task 4: Catalog Wiring And Verification

**Files:**
- Modify: `demo/script.js`

- [ ] Wire all 23 About catalog cards to local iframe thumbnails and the reusable detail viewer.
- [ ] Verify every About card resolves to an existing `index.html`.
- [ ] Use `agent-browser` to check catalog rendering, detail viewing, desktop/mobile viewport switching, and spot-check static and interactive implementations.
- [ ] Keep GitHub untouched until explicitly requested.
