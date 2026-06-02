import { describe, expect, it } from "vitest";
// @ts-expect-error Node typings are intentionally not part of the browser bundle.
import { readFileSync } from "node:fs";
import footerInfoCards from "../blocks/footer/footer-info-cards-accordion.tsx?raw";

const polishStyles = readFileSync("src/catalog-polish.css", "utf8");
const migratedSources = import.meta.glob(
  [
    "../blocks/link-page/*.tsx",
    "../blocks/hero/*.tsx",
    "../blocks/footer/*.tsx",
  ],
  { eager: true, query: "?raw", import: "default" },
) as Record<string, string>;

const joinedSources = Object.values(migratedSources).join("\n");

describe("catalog visual polish", () => {
  it("does not render legacy OpenSite horizontal logo assets", () => {
    expect(joinedSources).not.toContain("/logo-dark.png");
    expect(joinedSources).not.toContain("/logo-light.png");
    expect(joinedSources).not.toContain("/logo-light.webp");
  });

  it("uses the primary Toolkit artwork for footer branding", () => {
    const footerSources = Object.entries(migratedSources)
      .filter(([path]) => path.includes("/footer/"))
      .map(([, source]) => source)
      .join("\n");

    expect(footerSources).not.toMatch(/brandLogoPlaceholders\.(?:black|white)\[[1-9]\]/);
  });

  it("uses a shared working image placeholder in the footer accordion", () => {
    expect(footerInfoCards).toContain("imagePlaceholders[0]");
  });

  it("does not keep known broken footer media urls", () => {
    expect(joinedSources).not.toContain("krnuu3wc960ltazr5cu120xpzmj5");
    expect(joinedSources).not.toContain("vw5ko0uzj6tcbusxkzntyqkls7xa");
  });

  it("keeps Link Tree text readable on hover", () => {
    expect(polishStyles).toContain('body:has([id="link-tree-block"])');
    expect(polishStyles).toContain("color: #ffffff");
  });
});
