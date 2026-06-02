import { NavbarTransparentOverlay } from "@opensite/ui/blocks/navbars/navbar-transparent-overlay";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarTransparentOverlay
        background="transparent"
        logo={{
          url: "/",
    src: brandLogoPlaceholders.black[0],
          title: "Portfolio",
          alt: "Portfolio Logo",
        }}
        navItems={[
          { title: "Work", url: "#" },
          { title: "About", url: "#" },
          { title: "Services", url: "#" },
          { title: "Contact", url: "#" },
        ]}
        authActions={[
          {
            label: "Let's Talk",
            variant: "outline",
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
