# Home Search And Orbit Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Bring the Toolkit home hero closer to the OpenSite composition and add a useful catalog search.

**Architecture:** Keep `CategoryIndex` and the catalog unchanged. Move search behavior into a focused `LibrarySearch` component that reads the local catalog registry, while `HomeHero` stays responsible for the marketing copy, metrics, and decorative orbit scene. Use local SVG assets from Simple Icons so the home page has no runtime CDN dependency.

**Tech Stack:** React, TypeScript, CSS, Vitest, Testing Library, local SVG assets.

---

### Task 1: Search behavior

**Files:**
- Create: `src/components/LibrarySearch.tsx`
- Modify: `src/components/LibraryHeader.tsx`
- Test: `src/components/catalog-shell.test.tsx`

- [ ] Add a failing test that types `hero`, expects matching category and block links, and clears the query using an accessible `Clear search` button.
- [ ] Implement local ranking: category prefix matches first, then block title matches.
- [ ] Render the dropdown only while the query is non-empty.

### Task 2: Hero orbit and metrics

**Files:**
- Modify: `src/components/HomeHero.tsx`
- Modify: `src/toolkit-shell.css`
- Add: `public/assets/orbit-icons/*.svg`
- Test: `src/components/catalog-shell.test.tsx`

- [ ] Add failing assertions that remove the kicker, preserve the CTA, render both metrics, and load eight local orbit SVGs.
- [ ] Download Simple Icons SVGs locally and replace hand-drawn marks.
- [ ] Position the orbit center near the lower-left corner of the right-hand scene.
- [ ] Move hero copy upward and add `600+ Blocks` plus `97%-100% Google Speed Avg`.

### Task 3: Verification

**Files:**
- Verify: `src/components/catalog-shell.test.tsx`
- Verify: `src/toolkit-shell.css`

- [ ] Run `npx vitest run`.
- [ ] Run `npm run build`.
- [ ] Check desktop and mobile layouts in the in-app browser, including search, clear button, orbit placement, and horizontal overflow.
