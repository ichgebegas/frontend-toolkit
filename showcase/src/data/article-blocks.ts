import type { CatalogBlock } from "./catalog";

export const articleBlocks: CatalogBlock[] = [
  {
    id: "article-hero-prose",
    title: "Article Hero Prose",
    category: "Article",
    categorySlug: "article",
    description: "A full-width content layout featuring a prominent hero media, author information with avatar, and rich prose content including alerts, tables, blockquotes, and lists. Ideal for long-form content that needs visual hierarchy with a strong opening media and detailed content sections.",
    thumbnail: "https://cdn.ing/assets/i/r/308414/9jhhnu0e4cpp3lyoh1rb5fwe0nm6/article-hero-prose-desktop.jpg",
    load: () => import("../blocks/article/article-hero-prose"),
  },
  {
    id: "article-sidebar-sticky",
    title: "Article Sidebar Sticky",
    category: "Article",
    categorySlug: "article",
    description: "A two-column article layout with a sticky sidebar containing author information and a back navigation link. The main content area features prose styling with images and blockquotes. Perfect for documentation-style articles or blog posts where persistent author attribution and navigation are important.",
    thumbnail: "https://cdn.ing/assets/i/r/308416/fv1f2p5pc2a2hknexrljmw8o3zhc/article-sidebar-sticky-desktop.jpg",
    load: () => import("../blocks/article/article-sidebar-sticky"),
  },
  {
    id: "article-toc-sidebar",
    title: "Article TOC Sidebar",
    category: "Article",
    categorySlug: "article",
    description: "An article layout with a sticky table of contents sidebar that highlights the active section as users scroll. Includes a CTA card in the sidebar, category badge, author info, and IntersectionObserver-based section tracking. Ideal for technical tutorials, guides, and long-form content that benefits from easy navigation.",
    thumbnail: "https://cdn.ing/assets/i/r/308420/9xlgnxxtpxnmyyfanvn4wwq4u1pc/article-toc-sidebar-desktop.jpg",
    load: () => import("../blocks/article/article-toc-sidebar"),
  },
  {
    id: "article-breadcrumb-social",
    title: "Article Breadcrumb Social",
    category: "Article",
    categorySlug: "article",
    description: "A comprehensive article layout featuring breadcrumb navigation, social sharing buttons, a sticky table of contents sidebar, and a floating back-to-top button. Includes author information with role, read time, and IntersectionObserver-based section tracking. Perfect for content-heavy articles that need robust navigation and sharing capabilities.",
    thumbnail: "https://cdn.ing/assets/i/r/308375/3r23eff3qqdkxbrslswj69thjhbn/article-breadcrumb-social-desktop.jpg",
    load: () => import("../blocks/article/article-breadcrumb-social"),
  },
  {
    id: "article-compact-toc",
    title: "Article Compact TOC",
    category: "Article",
    categorySlug: "article",
    description: "A compact, mobile-friendly article layout with a collapsible table of contents, breadcrumb navigation, and inline social sharing buttons. Features a centered content area with author info, read time, and publication date. Ideal for research papers, studies, and articles that need a clean, focused reading experience on all devices.",
    thumbnail: "https://cdn.ing/assets/i/r/308412/m7ncpevmwg1c2w3ndzkpguyqtt4l/article-compact-toc-desktop.jpg",
    load: () => import("../blocks/article/article-compact-toc"),
  },
  {
    id: "article-chapters-author",
    title: "Article Chapters Author",
    category: "Article",
    categorySlug: "article",
    description: "A book-style article layout with numbered chapters navigation in a sticky sidebar, detailed author bio with social links, and a conclusion CTA card. Features breadcrumb navigation, centered title section, and IntersectionObserver-based chapter tracking. Perfect for comprehensive guides, tutorials, and educational content organized into distinct chapters.",
    thumbnail: "https://cdn.ing/assets/i/r/308410/iacfzeqo53pt6fshnehvci94rrst/article-chapters-author-desktop.jpg",
    load: () => import("../blocks/article/article-chapters-author"),
  },
  {
    id: "article-split-animated",
    title: "Article Split Animated",
    category: "Article",
    categorySlug: "article",
    description: "A visually striking split-layout article preview with Framer Motion animations. Features a large image on one side with a gradient overlay and category badge, and article details on the other side including title, description, author info, and CTA button. Ideal for featured article sections, hero posts, and content that needs to make a strong visual impact.",
    thumbnail: "https://cdn.ing/assets/i/r/308418/gsryhfv3acwx0q9swvs9xtqp812w/article-split-animated-desktop.jpg",
    load: () => import("../blocks/article/article-split-animated"),
  },
];

export function getArticleBlock(id: string): CatalogBlock | undefined {
  return articleBlocks.find((block) => block.id === id);
}
