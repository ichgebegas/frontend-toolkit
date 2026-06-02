# OpenSite-Aligned Pattern Library Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `Patterns` from the OpenSite source model and reuse those patterns in About examples with the toolkit palette.

**Architecture:** `snippets/patterns.css` owns named pattern primitives and surfaces. `demo/script.js` owns a local registry of 52 pattern examples, search, background/opacity controls, and copy actions. Patterned About examples opt into the same primitives through their existing overlay elements.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node contract test, agent-browser.

---

### Task 1: Contract Coverage

**Files:**
- Modify: `tests/patterns-about-polish.test.mjs`

- [ ] Add assertions for 52 OpenSite pattern names, global controls, copy actions, and shared About pattern class usage.
- [ ] Run `node tests\patterns-about-polish.test.mjs` and confirm it fails before implementation.

### Task 2: Pattern Primitives And Assets

**Files:**
- Modify: `snippets/patterns.css`
- Create: `demo/assets/patterns/*`

- [ ] Add source-aligned overlay masks and named primitives for grid, dashed grid, diagonal cross, circuit board, grid dots, glow, spotlight and radial gradient.
- [ ] Store local copies of the 12 asset-backed texture files and map them in CSS.
- [ ] Keep all foreground pattern colors tied to the grayscale palette tokens.

### Task 3: OpenSite-Like Pattern Library

**Files:**
- Modify: `demo/patterns.html`
- Modify: `demo/script.js`
- Modify: `demo/style.css`

- [ ] Add global `Background`, `Opacity`, and `Reset All Patterns` controls.
- [ ] Render 52 cards from a registry, each with preview, name, Copy action, background selector and opacity control.
- [ ] Keep search filtering and ensure hidden cards do not remain rendered.

### Task 4: About Pattern Integration

**Files:**
- Modify: patterned `components/about/*/index.html`
- Modify: patterned `components/about/*/style.css`

- [ ] Link the shared pattern snippet into About examples that use patterned backgrounds.
- [ ] Map each current background overlay to a source-aligned named pattern while preserving its composition.

### Task 5: Verification

**Files:**
- Test: `tests/patterns-about-polish.test.mjs`

- [ ] Run the Node contract and JS syntax checks.
- [ ] Use `agent-browser` to verify 52 cards, search, controls, copy action, desktop/mobile layout and patterned About previews.
- [ ] Remove temporary screenshot artifacts and leave GitHub untouched.
