import { NavbarFullscreenMenu } from "@opensite/ui/blocks/navbars/navbar-fullscreen-menu";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarFullscreenMenu
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "Creative Studio",
        alt: "Creative Studio Logo",
      }}
      menuItems={[
        { label: "Services", href: "#" },
        { label: "Branding", href: "#" },
        { label: "Web Design", href: "#" },
        { label: "Development", href: "#" },
        { label: "Work", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "About", href: "#" },
        { label: "Our Story", href: "#" },
        { label: "Team", href: "#" },
        { label: "Contact", href: "#" },
      ]}
      socialLinks={[
        { platformName: "x", label: "twitter", href: "https://twitter.com" },
        {
          platformName: "instagram",
          label: "instagram",
          href: "https://instagram.com",
        },
        {
          platformName: "linkedin",
          label: "linkedin",
          href: "https://linkedin.com",
        },
      ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
