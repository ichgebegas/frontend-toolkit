import { NavbarFloatingPill } from "@opensite/ui/blocks/navbars/navbar-floating-pill";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarFloatingPill
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          alt: "Brand Logo",
        }}
        items={[
          { label: "Home", href: "#" },
          { label: "Features", href: "#" },
          { label: "Pricing", href: "#" },
          { label: "About", href: "#" },
          { label: "Contact", href: "#" },
        ]}
        authActions={[
          {
            label: "Get Started",
            variant: "default",
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
