import { describe, expect, it } from "vitest";
import { parseShowcaseRoute } from "./routes";

describe("showcase routing", () => {
  it("opens the category index from root and categories paths", () => {
    expect(parseShowcaseRoute("/")).toEqual({ kind: "home" });
    expect(parseShowcaseRoute("/categories")).toEqual({ kind: "home" });
  });

  it("opens Blog as a category collection", () => {
    expect(parseShowcaseRoute("/categories/blog")).toEqual({
      kind: "category",
      slug: "blog",
    });
  });

  it("opens migrated About and Article collections", () => {
    expect(parseShowcaseRoute("/categories/about")).toEqual({
      kind: "category",
      slug: "about",
    });
    expect(parseShowcaseRoute("/categories/article")).toEqual({
      kind: "category",
      slug: "article",
    });
  });

  it("opens block and isolated preview paths", () => {
    expect(parseShowcaseRoute("/blocks/blog-grid-author-cards")).toEqual({
      kind: "block",
      id: "blog-grid-author-cards",
    });
    expect(parseShowcaseRoute("/preview/blog-grid-author-cards")).toEqual({
      kind: "preview",
      id: "blog-grid-author-cards",
    });
  });
});
