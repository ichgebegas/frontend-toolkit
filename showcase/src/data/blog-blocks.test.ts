import { describe, expect, it } from "vitest";
import { blogBlocks, getBlogBlock } from "./blog-blocks";

const officialBlogIds = [
  "blog-grid-author-cards",
  "blog-cards-tagline-cta",
  "blog-cards-read-time",
  "blog-category-overlay",
  "blog-featured-popular",
  "blog-related-articles",
  "blog-tech-insights",
  "blog-horizontal-cards",
  "blog-filtered-results",
  "blog-masonry-featured",
  "blog-horizontal-timeline",
  "blog-grid-nine-posts",
  "blog-carousel-apple",
];

describe("Blog source registry", () => {
  it("lists every official OpenSite Blog example exactly once", () => {
    expect(blogBlocks.map((block) => block.id)).toEqual(officialBlogIds);
  });

  it("retains source-facing metadata and a preview component loader", () => {
    const block = getBlogBlock("blog-grid-author-cards");

    expect(block?.title).toBe("Blog Grid Author Cards");
    expect(block?.description.length).toBeGreaterThan(20);
    expect(block?.load).toBeTypeOf("function");
  });
});
