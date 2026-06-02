import type { CatalogBlock } from "./catalog";

export const linkPageBlocks: CatalogBlock[] = [
  ["link-tree-block", "Link Tree Block", "A customizable link-in-bio style page component with three theme variations (light, dark, glass). Features brand header with avatar and verified badge, customizable link list with icons, descriptions, badges and featured states, media gallery for images and videos, social media links, and background pattern customization. Ideal for creators, influencers, and businesses needing a comprehensive link page."],
  ["link-page-minimal-profile", "Link Page Minimal Profile", "A clean, minimal link page focused on simplicity. Features a streamlined avatar and name display, optional bio text, simple link list with subtle hover effects, and social icons at the bottom. Supports light and dark themes. Ideal for professionals, developers, and anyone who prefers a minimalist aesthetic for their link page."],
  ["link-page-newsletter-social", "Link Page Newsletter Social", "A link page with integrated newsletter signup form powered by FormEngine. Features profile section with avatar, newsletter signup form with email validation via @page-speed/forms/integration, social media links, and additional links section. Supports universal REST API integration via formEngineSetup. Ideal for content creators, bloggers, and marketers who want to grow their email list."],
  ["link-page-grid-cards", "Link Page Grid Cards", "A visually rich link page displaying links as a responsive grid of cards. Features profile header with avatar, links as cards with icons, labels and optional descriptions, hover effects with scale and shadow transitions, configurable 2 or 3 column layout, and social media links. Ideal for creators, businesses, and anyone who wants a more visual link page."],
  ["link-page-bento-layout", "Link Page Bento Layout", "A modern bento grid style link page with visual hierarchy. Features profile header with avatar, bento grid layout with featured links in larger cells with optional background images, regular links in smaller cells, and social media links. Creates visual hierarchy by making featured links more prominent. Ideal for digital creators, entrepreneurs, and anyone wanting a trendy, modern link page design."],
].map(([id, title, description]) => ({
  id,
  title,
  category: "Link Page",
  categorySlug: "link-page",
  description,
  thumbnail: `/thumbnails/${id}.png`,
  load: () => import(`../blocks/link-page/${id}.tsx`),
}));
