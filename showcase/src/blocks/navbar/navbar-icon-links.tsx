import { NavbarIconLinks } from "@opensite/ui/blocks/navbars/navbar-icon-links";
import { brandLogoPlaceholders } from "@/lib/media";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarIconLinks
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "IconNav",
        alt: "IconNav Logo",
      }}
      navItems={[
        {
          title: "Dashboard",
          url: "#",
          icon: "lucide/layout-dashboard",
        },
        {
          title: "Analytics",
          url: "#",
          icon: "lucide/bar-chart-3",
        },
        {
          title: "Projects",
          url: "#",
          icon: "lucide/folder",
        },
        {
          title: "Team",
          url: "#",
          icon: "lucide/users",
        },
        {
          title: "Settings",
          url: "#",
          icon: "lucide/settings",
        },
      ]}
      authActions={[
        {
          label: "Notifications",
          variant: "ghost",
          href: "#",
          icon: <DynamicIcon name="lucide/bell" size={16} />,
        },
        {
          label: "Profile",
          variant: "ghost",
          href: "#",
          icon: <DynamicIcon name="lucide/user" size={16} />,
        },
      ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
