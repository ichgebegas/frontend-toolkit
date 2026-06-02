import type { ComponentType } from "react";
import { aboutBlocks } from "./about-blocks";
import { articleBlocks } from "./article-blocks";
import { blogBlocks } from "./blog-blocks";
import { carouselBlocks } from "./carousel-blocks";
import { contactBlocks } from "./contact-blocks";
import { faqBlocks } from "./faq-blocks";
import { featuresBlocks } from "./features-blocks";
import { footerBlocks } from "./footer-blocks";
import { galleryBlocks } from "./gallery-blocks";
import { heroBlocks } from "./hero-blocks";
import { linkPageBlocks } from "./link-page-blocks";
import { navbarBlocks } from "./navbar-blocks";
import { processBlocks } from "./process-blocks";
import { statsBlocks } from "./stats-blocks";
import { appHref } from "./routes";

export interface CatalogBlock {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  thumbnail: string;
  load: () => Promise<{ default: ComponentType }>;
}

export interface CatalogCategory {
  slug: string;
  title: string;
  blocks: CatalogBlock[];
}

export interface CategoryTile {
  slug: string;
  title: string;
  count: number;
}

export const categories: CatalogCategory[] = [
  { slug: "about", title: "About", blocks: aboutBlocks },
  { slug: "article", title: "Article", blocks: articleBlocks },
  { slug: "blog", title: "Blog", blocks: blogBlocks },
  { slug: "carousel", title: "Carousel", blocks: carouselBlocks },
  { slug: "contact", title: "Contact", blocks: contactBlocks },
  { slug: "faq", title: "Faq", blocks: faqBlocks },
  { slug: "features", title: "Features", blocks: featuresBlocks },
  { slug: "footer", title: "Footer", blocks: footerBlocks },
  { slug: "gallery", title: "Gallery", blocks: galleryBlocks },
  { slug: "hero", title: "Hero", blocks: heroBlocks },
  { slug: "link-page", title: "Link Page", blocks: linkPageBlocks },
  { slug: "navbar", title: "Navbar", blocks: navbarBlocks },
  { slug: "process", title: "Process", blocks: processBlocks },
  { slug: "stats", title: "Stats", blocks: statsBlocks },
];

export const categoryTiles: CategoryTile[] = [
  { slug: "about", title: "About", count: 23 },
  { slug: "article", title: "Article", count: 7 },
  { slug: "blog", title: "Blog", count: 13 },
  { slug: "carousel", title: "Carousel", count: 13 },
  { slug: "contact", title: "Contact", count: 42 },
  { slug: "faq", title: "Faq", count: 17 },
  { slug: "features", title: "Features", count: 27 },
  { slug: "footer", title: "Footer", count: 19 },
  { slug: "gallery", title: "Gallery", count: 16 },
  { slug: "hero", title: "Hero", count: 79 },
  { slug: "link-page", title: "Link Page", count: 5 },
  { slug: "navbar", title: "Navbar", count: 21 },
  { slug: "process", title: "Process", count: 9 },
  { slug: "stats", title: "Stats", count: 12 },
];

export function getCategory(slug: string): CatalogCategory | undefined {
  return categories.find((category) => category.slug === slug);
}

export function findBlock(id: string): CatalogBlock | undefined {
  return categories.flatMap((category) => category.blocks).find((block) => block.id === id);
}

export function categoryHref(slug: string): string {
  return appHref(`categories/${slug}`);
}
