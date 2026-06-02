import { NavbarCenteredMenu } from "@opensite/ui/blocks/navbars/navbar-centered-menu";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarCenteredMenu
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          title: "Company",
          alt: "Company Logo",
        }}
        menu={[
          {
            title: "Products",
            url: "#",
            items: [
              {
                title: "Analytics",
                url: "#",
                description: "Track your business metrics",
                icon: "lucide/bar-chart",
              },
              {
                title: "Marketing",
                url: "#",
                description: "Grow your audience",
                icon: "lucide/megaphone",
              },
              {
                title: "Sales CRM",
                url: "#",
                description: "Manage customer relationships",
                icon: "lucide/users",
              },
            ],
          },
          {
            title: "Solutions",
            url: "#",
            items: [
              {
                title: "Enterprise",
                url: "#",
                description: "For large organizations",
                icon: "lucide/building",
              },
              {
                title: "Small Business",
                url: "#",
                description: "For growing companies",
                icon: "lucide/briefcase",
              },
            ],
          },
          {
            title: "Resources",
            url: "#",
          },
          {
            title: "Pricing",
            url: "#",
          },
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
