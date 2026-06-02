import { NavbarStickyCompact } from "@opensite/ui/blocks/navbars/navbar-sticky-compact";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarStickyCompact
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "Brand Logo",
      }}
      menu={[
        { title: "Home", url: "#" },
        { title: "Features", url: "#" },
        { title: "Pricing", url: "#" },
        { title: "About", url: "#" },
        { title: "Blog", url: "#" },
      ]}
      authActions={[
        {
          label: "Sign Up",
          variant: "outline",
          href: "#",
          asButton: true,
          size: "sm",
        },
      ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
