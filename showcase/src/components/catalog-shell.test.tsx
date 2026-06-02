import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CategoryIndex } from "./CategoryIndex";
import { CategoryPage } from "./CategoryPage";
import { LibraryHeader } from "./LibraryHeader";

describe("Toolkit catalog shell", () => {
  it("renders all approved category tiles while migration is in progress", () => {
    render(<CategoryIndex />);

    expect(screen.getByRole("link", { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Article/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Blog/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Hero/i })).toBeInTheDocument();
    expect(within(screen.getByLabelText("Component categories")).getAllByRole("link")).toHaveLength(
      14,
    );
    expect(screen.queryByRole("link", { name: /Testimonials/i })).not.toBeInTheDocument();
  });

  it("renders only blocks in the selected category", () => {
    render(<CategoryPage categorySlug="blog" />);

    expect(screen.getByRole("heading", { name: "Blog" })).toBeInTheDocument();
    expect(within(screen.getByLabelText("Blog components")).getAllByRole("link")).toHaveLength(13);
  });

  it("uses local generated thumbnail images for catalog cards", () => {
    const { container } = render(<CategoryPage categorySlug="carousel" />);

    expect(
      container.querySelectorAll(".preview-frame img")[5],
    ).toHaveAttribute("src", "/thumbnails/carousel-gallery-thumbnails.png");
  });

  it("keeps the category catalog below a Russian home introduction", () => {
    render(<CategoryIndex />);

    expect(screen.getByRole("heading", { name: "Frontend Toolkit" })).toBeInTheDocument();
    expect(screen.getByText(/готовые UI-блоки/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Смотреть категории" })).toHaveAttribute(
      "href",
      "#categories",
    );
    expect(screen.getByRole("heading", { name: "Browse by Category" })).toBeInTheDocument();
  });

  it("renders personal contact links and a local Profi.ru logo", () => {
    render(<CategoryIndex />);

    expect(screen.getByRole("link", { name: "Telegram" })).toHaveAttribute(
      "href",
      "https://t.me/butterfly",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/ichgebegas/frontend-toolkit",
    );
    expect(screen.queryByRole("link", { name: "Связаться" })).not.toBeInTheDocument();
    expect(screen.getByAltText("Profi.ru")).toHaveAttribute("src", "/assets/profiru-logo.jpg");
    expect(document.querySelectorAll(".orbit-emblem")).toHaveLength(20);
  });

  it("adds Telegram to the shared library header", () => {
    render(<LibraryHeader />);

    expect(screen.getByRole("link", { name: "Categories" })).toHaveAttribute(
      "href",
      "/#categories",
    );
    expect(screen.getByRole("link", { name: "Patterns" })).toHaveAttribute(
      "href",
      "/patterns/index.html",
    );
    expect(screen.getByRole("link", { name: "Telegram" })).toHaveAttribute(
      "href",
      "https://t.me/butterfly",
    );
  });

  it("renders hero metrics without the previous kicker and mirrors the OpenSite orbit system", () => {
    const { container } = render(<CategoryIndex />);

    expect(screen.queryByText("Personal frontend library")).not.toBeInTheDocument();
    expect(screen.getByText("600+")).toBeInTheDocument();
    expect(screen.getByText("Google Speed Avg")).toBeInTheDocument();
    expect(container.querySelectorAll(".orbit-emblem img")).toHaveLength(20);
    expect(
      [...container.querySelectorAll(".orbit-ring")].map((ring) =>
        ring.getAttribute("data-radius"),
      ),
    ).toEqual(["310", "390", "470", "550"]);
  });

  it("suggests matching categories and blocks and clears the search query", () => {
    render(<LibraryHeader />);

    const input = screen.getByPlaceholderText("Search library...");
    fireEvent.change(input, { target: { value: "hero" } });

    expect(screen.getByRole("link", { name: "Hero category" })).toHaveAttribute(
      "href",
      "/categories/hero",
    );
    expect(
      within(screen.getByRole("listbox", { name: "Search suggestions" })).getAllByRole("link")[1],
    ).toHaveAttribute("href", expect.stringMatching(/^\/blocks\/hero-/));

    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));

    expect(input).toHaveValue("");
    expect(screen.queryByRole("listbox", { name: "Search suggestions" })).not.toBeInTheDocument();
  });
});
