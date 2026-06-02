import { NavbarMegaMenu } from "@opensite/ui/blocks/navbars/navbar-mega-menu";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarMegaMenu
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          title: "MegaCorp",
          alt: "MegaCorp Logo",
        }}
        menuLinks={[
          {
            label: "Products",
            dropdownGroups: [
              {
                label: "Core Products",
                links: [
                  {
                    label: "Platform",
                    description: "All-in-one business platform",
                    url: "#",
                    iconName: "lucide/layout-grid",
                  },
                  {
                    label: "Analytics",
                    description: "Advanced business analytics",
                    url: "#",
                    iconName: "lucide/trending-up",
                  },
                ],
              },
              {
                label: "Add-ons",
                links: [
                  {
                    label: "Integrations",
                    description: "Connect your tools",
                    url: "#",
                    iconName: "lucide/puzzle",
                  },
                  {
                    label: "Extensions",
                    description: "Extend functionality",
                    url: "#",
                    iconName: "lucide/blocks",
                  },
                ],
              },
            ],
          },
          {
            label: "Solutions",
            dropdownGroups: [
              {
                label: "By Industry",
                links: [
                  {
                    label: "E-commerce",
                    description: "For online retailers",
                    url: "#",
                    iconName: "lucide/shopping-bag",
                  },
                  {
                    label: "Healthcare",
                    description: "For medical practices",
                    url: "#",
                    iconName: "lucide/heart-pulse",
                  },
                ],
              },
              {
                label: "By Size",
                links: [
                  {
                    label: "Startups",
                    description: "For early-stage companies",
                    url: "#",
                    iconName: "lucide/rocket",
                  },
                  {
                    label: "Enterprise",
                    description: "For large organizations",
                    url: "#",
                    iconName: "lucide/building-2",
                  },
                ],
              },
            ],
          },
          {
            label: "Resources",
            href: "#",
          },
          {
            label: "Pricing",
            href: "#",
          },
        ]}
        actions={[
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
