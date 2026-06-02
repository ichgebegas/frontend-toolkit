import { NavbarSearchFocused } from "@opensite/ui/blocks/navbars/navbar-search-focused";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarSearchFocused
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          title: "SearchHub",
          alt: "SearchHub Logo",
        }}
        searchPlaceholder="Search products, docs, and more..."
        navItems={[
          { title: "Products", url: "#" },
          { title: "Solutions", url: "#" },
          { title: "Resources", url: "#" },
          { title: "Pricing", url: "#" },
        ]}
        authActions={[
          {
            label: "Get Started",
            variant: "outline",
            asButton: true,
            size: "sm",
            href: "#",
          },
        ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
