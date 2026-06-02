import { NavbarFeatureGrid } from "@opensite/ui/blocks/navbars/navbar-feature-grid";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarFeatureGrid
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "FeatureApp",
        alt: "FeatureApp Logo",
      }}
      features={[
        {
          title: "Real-time Analytics",
          description: "Monitor your business metrics in real-time",
          href: "#",
        },
        {
          title: "Team Collaboration",
          description: "Work together seamlessly with your team",
          href: "#",
        },
        {
          title: "Advanced Security",
          description: "Enterprise-grade security and compliance",
          href: "#",
        },
        {
          title: "API Integration",
          description: "Connect with your favorite tools and services",
          href: "#",
        },
        {
          title: "Custom Reports",
          description: "Generate detailed custom reports",
          href: "#",
        },
        {
          title: "24/7 Support",
          description: "Expert support whenever you need it",
          href: "#",
        },
      ]}
      menu={[
        { title: "Products", url: "#products" },
        { title: "Resources", url: "#resources" },
        { title: "Pricing", url: "#pricing" },
        { title: "Contact", url: "#contact" },
      ]}
      authActions={[
        {
          label: "Try It Free",
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
