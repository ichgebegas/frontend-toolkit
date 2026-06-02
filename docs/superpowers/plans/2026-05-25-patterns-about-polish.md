# Patterns And About Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Patterns into a reusable OpenSite-inspired pattern library, unify interface states, and complete the final quality pass for the 23 existing About blocks.

**Architecture:** Add portable CSS primitives under `snippets/`, render them in the static demo, and keep each About example standalone by mirroring only the tokens and states it uses. Use a Node contract check plus `agent-browser` visual verification because this project has no build pipeline.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, Node.js checks, `agent-browser`.

---

### Task 1: Pattern And Interaction Contract Check

**Files:**
- Create: `tests/patterns-about-polish.test.mjs`

- [ ] Add a Node check that reads `snippets/patterns.css`, `snippets/buttons.css`, `demo/patterns.html`, and the interactive About CSS/JS files.

```js
import assert from "node:assert/strict";
import fs from "node:fs";

const patterns = fs.readFileSync("snippets/patterns.css", "utf8");
assert.match(patterns, /\.pattern-grid/);
assert.match(patterns, /\.pattern-circuit-board/);
assert.match(patterns, /\.pattern-fade-center/);
```

- [ ] Run `node tests/patterns-about-polish.test.mjs` and confirm it fails because the reusable pattern stylesheet does not exist yet.

### Task 2: Reusable Pattern Catalog

**Files:**
- Create: `snippets/patterns.css`
- Modify: `demo/patterns.html`
- Modify: `demo/style.css`

- [ ] Implement the six agreed pattern families and fade masks in `snippets/patterns.css`.
- [ ] Rebuild `demo/patterns.html` as grouped live cards using the portable classes.
- [ ] Adjust `demo/style.css` for grouped headings, compact metadata and consistent hover/focus.
- [ ] Run `node tests/patterns-about-polish.test.mjs` and verify the pattern checks pass.

### Task 3: Unified Interaction States

**Files:**
- Modify: `snippets/buttons.css`
- Modify: `demo/style.css`
- Modify: `components/about/*/style.css` for About pages containing controls or CTA links

- [ ] Replace the old bronze button values with the current neutral palette and fixed hover/pressed/focus rules.
- [ ] Align demo category, pattern, viewport and navigation interaction states to those tokens.
- [ ] Add or normalize local button/tab/card actions in About examples while retaining their distinct compositions.
- [ ] Run the contract check and confirm all required interaction selectors are present.

### Task 4: About Browser Quality Pass

**Files:**
- Modify only affected files under: `components/about/`
- Modify if required: `demo/script.js`

- [ ] Open the About catalog and representative detail views through `agent-browser`.
- [ ] Fix observed overflow, pattern, media framing or state defects without introducing new layouts.
- [ ] Verify all 23 local About paths return successfully and interactive examples respond correctly.

### Task 5: Future Hero Transfer Guide

**Files:**
- Create: `docs/transfer-guides/opensite-category-workflow.md`

- [ ] Document the category-to-registry-to-source-to-vanilla workflow.
- [ ] Specify `Hero` as the next category and record the required preflight: metadata extraction, source/live comparison, pattern mapping, independent examples, demo wiring, and browser verification.
- [ ] Keep license attribution requirements explicit.

### Task 6: Final Verification

**Files:**
- Verify only

- [ ] Run `node tests/patterns-about-polish.test.mjs`.
- [ ] Run a Node HTTP check for all 23 About pages.
- [ ] Use `agent-browser` on `demo/patterns.html`, `demo/category.html?category=about`, and selected interactive detail views at desktop and mobile widths.
- [ ] Check browser errors and ensure no screenshot/cache artifacts are stored in the repository.
- [ ] Leave GitHub untouched.

