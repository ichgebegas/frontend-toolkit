import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BlockViewer } from "./BlockViewer";

describe("Live preview viewer", () => {
  it("renders any registered category block in the shared viewer", () => {
    render(<BlockViewer blockId="alternating-blocks" />);

    expect(screen.getByRole("heading", { name: "Live Preview" })).toBeInTheDocument();
    expect(screen.getByTitle("Live preview of Alternating Blocks")).toHaveAttribute(
      "src",
      "/preview/alternating-blocks",
    );
    expect(screen.getByText(/Display content sections with alternating/)).toBeInTheDocument();
  });

  it("offers desktop, tablet and mobile modes", () => {
    render(<BlockViewer blockId="article-toc-sidebar" />);

    expect(screen.getByRole("button", { name: /Desktop/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Tablet/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Mobile/ })).toBeInTheDocument();
  });
});
