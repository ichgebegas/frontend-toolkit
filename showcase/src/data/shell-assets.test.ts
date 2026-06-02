import { describe, expect, it } from "vitest";
import showcaseHtml from "../../index.html?raw";
import patternsHtml from "../../public/patterns/index.html?raw";

describe("Toolkit shell assets", () => {
  it("uses the gear favicon across the showcase", () => {
    expect(showcaseHtml).toContain(
      '<link rel="icon" type="image/svg+xml" href="%BASE_URL%assets/gear-svgrepo-com.svg" />',
    );
    expect(patternsHtml).toContain(
      '<link rel="icon" type="image/svg+xml" href="../assets/gear-svgrepo-com.svg">',
    );
  });
});
