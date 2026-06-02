import { NavbarPlatformResources } from "@opensite/ui/blocks/navbars/navbar-platform-resources";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarPlatformResources
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          title: "DevPlatform",
          alt: "DevPlatform Logo",
        }}
        menuLinks={[
          {
            label: "Platform",
            layout: "simple-list",
            links: [
              {
                label: "Infrastructure",
                description:
                  "Cloud infrastructure services with a much longer description.",
                url: "#",
                iconName: "lucide/server",
              },
              {
                label: "Databases",
                description: "Managed database solutions",
                url: "#",
                iconName: "lucide/database",
              },
              {
                label: "APIs",
                description: "RESTful and GraphQL APIs",
                url: "#",
                iconName: "lucide/code",
              },
              {
                label: "Hosting",
                description: "Global edge network",
                url: "#",
                iconName: "lucide/globe",
              },
            ],
          },
          {
            label: "Resources",
            layout: "simple-list",
            links: [
              {
                label: "Getting Started",
                description: "Learn the basics",
                url: "#",
                iconName: "lucide/book-open",
              },
              {
                label: "API Reference",
                description: "Complete API documentation",
                url: "#",
                iconName: "lucide/file-code",
              },
              {
                label: "Tutorials",
                description: "Step-by-step guides",
                url: "#",
                iconName: "lucide/graduation-cap",
              },
              {
                label: "Help Center",
                description: "Get support",
                url: "#",
                iconName: "lucide/life-buoy",
              },
            ],
          },
          {
            label: "Pricing",
            href: "#pricing",
          },
          {
            label: "Company",
            href: "#company",
          },
        ]}
        actions={[
          {
            label: "Get Started",
            variant: "default",
            href: "#",
            asButton: true,
          },
        ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
