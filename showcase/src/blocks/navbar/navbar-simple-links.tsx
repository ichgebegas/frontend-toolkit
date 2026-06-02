import { NavbarSimpleLinks } from "@opensite/ui/blocks/navbars/navbar-simple-links";
import { brandLogoPlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarSimpleLinks
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "SimpleSite",
        alt: "SimpleSite Logo",
      }}
      navItems={[
        { name: "Home", link: "#" },
        { name: "About", link: "#" },
        { name: "Services", link: "#" },
        { name: "Portfolio", link: "#" },
        { name: "Contact", link: "#" },
      ]}
      defaultActiveItem="Home"
      actions={[
        {
          label: "Get Started",
          href: "#",
          asButton: true,
          iconAfter: <DynamicIcon name="lucide/arrow-right-circle" />,
        },
      ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
