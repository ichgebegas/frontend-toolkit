# Home Orbit Hero Implementation Plan

**Goal:** Add an OpenSite-like home introduction above the existing category catalog without changing catalog behavior.

**Architecture:** Keep the existing `CategoryIndex` catalog and prepend a focused `HomeHero` component. Use CSS-only orbit animation so the home page stays dependency-free and theme-aware. Add Telegram to the shared header and copy the provided Profi.ru logo into local public assets.

**Tech Stack:** React, TypeScript, CSS, Vitest, Testing Library.

## Tasks

1. Add failing shell tests for Telegram, Russian hero copy, category preservation, contacts, and local Profi.ru asset usage.
2. Add `HomeHero.tsx` with the hero copy, CTA links, contacts, and decorative orbit markup.
3. Render `HomeHero` before the existing categories section.
4. Add responsive CSS for orbit animation, contact links, and the new full-width home flow.
5. Copy `C:\downloads\profiru_logo.jpg` to `public/assets/profiru-logo.jpg`.
6. Run tests, build, and browser verification at desktop and mobile widths.
