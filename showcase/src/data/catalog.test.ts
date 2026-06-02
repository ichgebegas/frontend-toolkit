import { describe, expect, it } from "vitest";
import { categories, categoryHref, categoryTiles, findBlock, getCategory } from "./catalog";

describe("migrated source-backed catalog", () => {
  it("registers the migrated category counts", () => {
    expect(getCategory("about")?.blocks).toHaveLength(23);
    expect(getCategory("article")?.blocks).toHaveLength(7);
    expect(getCategory("blog")?.blocks).toHaveLength(13);
    expect(getCategory("carousel")?.blocks).toHaveLength(13);
    expect(getCategory("contact")?.blocks).toHaveLength(42);
    expect(getCategory("faq")?.blocks).toHaveLength(17);
    expect(getCategory("features")?.blocks).toHaveLength(27);
    expect(getCategory("footer")?.blocks).toHaveLength(19);
    expect(getCategory("gallery")?.blocks).toHaveLength(16);
    expect(getCategory("hero")?.blocks).toHaveLength(79);
    expect(getCategory("link-page")?.blocks).toHaveLength(5);
    expect(getCategory("navbar")?.blocks).toHaveLength(21);
    expect(getCategory("process")?.blocks).toHaveLength(9);
    expect(getCategory("stats")?.blocks).toHaveLength(12);
    expect(categories.map((category) => category.slug)).toEqual([
      "about",
      "article",
      "blog",
      "carousel",
      "contact",
      "faq",
      "features",
      "footer",
      "gallery",
      "hero",
      "link-page",
      "navbar",
      "process",
      "stats",
    ]);
  });

  it("keeps all approved home category tiles visible during migration", () => {
    expect(categoryTiles).toHaveLength(14);
    expect(categoryTiles.map((category) => category.slug)).not.toContain("testimonials");
    expect(categoryTiles.map((category) => category.slug)).toContain("hero");
    expect(categoryHref("about")).toBe("/categories/about");
    expect(categoryHref("hero")).toBe("/categories/hero");
  });

  it("resolves official blocks through one lookup", () => {
    expect(findBlock("alternating-blocks")?.categorySlug).toBe("about");
    expect(findBlock("article-toc-sidebar")?.categorySlug).toBe("article");
    expect(findBlock("blog-grid-author-cards")?.categorySlug).toBe("blog");
    expect(findBlock("carousel-gallery-thumbnails")?.categorySlug).toBe("carousel");
    expect(findBlock("contact-card")?.categorySlug).toBe("contact");
    expect(findBlock("faq-simple-accordion")?.categorySlug).toBe("faq");
    expect(findBlock("feature-accordion-image")?.categorySlug).toBe("features");
    expect(findBlock("footer-accordion-social")?.categorySlug).toBe("footer");
    expect(findBlock("masonry-motion-grid")?.categorySlug).toBe("gallery");
    expect(findBlock("hero-overlay-cta-grid")?.categorySlug).toBe("hero");
    expect(findBlock("link-tree-block")?.categorySlug).toBe("link-page");
    expect(findBlock("navbar-fullscreen-menu")?.categorySlug).toBe("navbar");
    expect(findBlock("process-sticky-steps")?.categorySlug).toBe("process");
    expect(findBlock("stats-animated-counter")?.categorySlug).toBe("stats");
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
