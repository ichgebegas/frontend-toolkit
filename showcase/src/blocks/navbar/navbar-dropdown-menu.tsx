import { NavbarDropdownMenu } from "@opensite/ui/blocks/navbars/navbar-dropdown-menu";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarDropdownMenu
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "SaaS Platform",
        alt: "SaaS Platform Logo",
      }}
      menu={[
        {
          title: "Features",
          url: "#",
          items: [
            {
              title: "Analytics Dashboard",
              url: "#",
              description: "Visualize your business data",
              icon: "lucide/pie-chart",
            },
            {
              title: "Team Collaboration",
              url: "#",
              description: "Work together seamlessly",
              icon: "lucide/users-2",
            },
            {
              title: "Automation Tools",
              url: "#",
              description: "Automate repetitive tasks",
              icon: "lucide/zap",
            },
            {
              title: "Integrations",
              url: "#",
              description: "Connect your favorite apps",
              icon: "lucide/plug",
            },
          ],
        },
        {
          title: "Solutions",
          url: "#",
          items: [
            {
              title: "For Marketing Teams",
              url: "#",
              description: "Grow your brand presence",
              icon: "lucide/target",
            },
            {
              title: "For Sales Teams",
              url: "#",
              description: "Close more deals faster",
              icon: "lucide/trending-up",
            },
            {
              title: "For Support Teams",
              url: "#",
              description: "Deliver excellent support",
              icon: "lucide/headphones",
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
          label: "Login",
          variant: "ghost",
          href: "#",
        },
        {
          label: "Start Free Trial",
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
