import { describe, expect, it } from "vitest";
// @ts-expect-error Node typings are intentionally not part of the browser bundle.
import { readFileSync } from "node:fs";
import animatedPreview from "../blocks/navbar/navbar-animated-preview.tsx?raw";
import transparentOverlay from "../blocks/navbar/navbar-transparent-overlay.tsx?raw";

const styles = readFileSync("src/navbar-polish.css", "utf8");

describe("Navbar polish", () => {
  it("keeps portal dropdowns readable and preserves dark icon menus", () => {
    expect(styles).toContain('body:has([id="navbar-dark-icons"]) [data-slot="navigation-menu-content"]');
    expect(styles).toContain('body:has([id="navbar-dark-icons"]) [data-slot="navigation-menu-viewport"]');
    expect(styles).toContain("--navbar-dropdown-bg: #242325");
    expect(styles).toContain("--navbar-dropdown-fg: #f3f4f6");
  });

  it("animates dropdown panels while moving between top-level tabs", () => {
    expect(styles).toContain('[data-slot="navigation-menu-content"][data-motion^="from-"]');
    expect(styles).toContain('[data-slot="navigation-menu-content"][data-motion^="to-"]');
    expect(styles).toContain("navbar-tab-enter");
    expect(styles).toContain("navbar-tab-exit");
  });

  it("keeps the OpenSite animated preview component and its distinct layouts", () => {
    expect(animatedPreview).toContain('layout: "animated-image-preview"');
    expect(animatedPreview).toContain('layout: "featured-cards-grid"');
    expect(animatedPreview).toContain('layout: "grouped-links-image"');
  });

  it("renders the transparent navbar over the intended hero surface", () => {
    expect(transparentOverlay).toContain('background="transparent"');
    expect(transparentOverlay).toContain("src: brandLogoPlaceholders.black[0]");
    expect(styles).toContain('nav.bg-transparent [data-slot="navigation-menu-link"]');
  });
});
