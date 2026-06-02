import { NavbarSplitCta } from "@opensite/ui/blocks/navbars/navbar-split-cta";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarSplitCta
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "StartupCo",
        alt: "StartupCo Logo",
      }}
      menu={[
        { title: "Product", url: "#" },
        { title: "Features", url: "#" },
        { title: "Pricing", url: "#" },
        { title: "Company", url: "#" },
      ]}
      authActions={[
        {
          label: "Start Free Trial",
          href: "#",
          asButton: true,
          variant: "link",
        },
        {
          label: "Book a Demo",
          href: "#",
          asButton: true,
          variant: "default",
        },
      ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
