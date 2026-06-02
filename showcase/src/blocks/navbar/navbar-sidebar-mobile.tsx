import { NavbarSidebarMobile } from "@opensite/ui/blocks/navbars/navbar-sidebar-mobile";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarSidebarMobile
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "AppName",
        alt: "AppName Logo",
      }}
      menu={[
        {
          title: "Dashboard",
          url: "#",
        },
        {
          title: "Projects",
          items: [
            { title: "All Projects", url: "#", icon: "lucide/package" },
            { title: "Recent", url: "#", icon: "lucide/code-2" },
            { title: "Favorites", url: "#", icon: "lucide/file-text" },
          ],
        },
        {
          title: "Team",
          items: [
            { title: "Members", url: "#", icon: "lucide/users" },
            { title: "Invitations", url: "#", icon: "lucide/mail" },
            { title: "Settings", url: "#", icon: "lucide/settings" },
          ],
        },
        {
          title: "Analytics",
          url: "#",
        },
        {
          title: "Settings",
          items: [
            { title: "Profile", url: "#", icon: "lucide/user" },
            { title: "Billing", url: "#", icon: "lucide/credit-card" },
            { title: "Preferences", url: "#", icon: "lucide/sliders" },
          ],
        },
      ]}
      authActions={[
        {
          label: "Upgrade Plan",
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
