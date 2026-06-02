import { NavbarMultiColumnGroups } from "@opensite/ui/blocks/navbars/navbar-multi-column-groups";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarMultiColumnGroups
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "MultiNav",
        alt: "MultiNav Logo",
      }}
      navigation={[
        {
          title: "Products",
          groups: [
            {
              title: "Core Platform",
              links: [
                {
                  label: "Dashboard",
                  description: "Centralized command center",
                  url: "#",
                  iconName: "lucide/layout-dashboard",
                },
                {
                  label: "Analytics",
                  description: "Business intelligence tools",
                  url: "#",
                  iconName: "lucide/bar-chart",
                },
                {
                  label: "Reports",
                  description: "Detailed reporting suite",
                  url: "#",
                  iconName: "lucide/file-text",
                },
              ],
            },
            {
              title: "Productivity",
              links: [
                {
                  label: "Tasks",
                  description: "Project management",
                  url: "#",
                  iconName: "lucide/check-square",
                },
                {
                  label: "Calendar",
                  description: "Schedule and organize",
                  url: "#",
                  iconName: "lucide/calendar",
                },
                {
                  label: "Automation",
                  description: "Workflow automation",
                  url: "#",
                  iconName: "lucide/zap",
                },
              ],
            },
            {
              title: "Collaboration",
              links: [
                {
                  label: "Team Chat",
                  description: "Real-time messaging",
                  url: "#",
                  iconName: "lucide/message-circle",
                },
                {
                  label: "Video Calls",
                  description: "Face-to-face meetings",
                  url: "#",
                  iconName: "lucide/video",
                },
                {
                  label: "File Sharing",
                  description: "Secure file exchange",
                  url: "#",
                  iconName: "lucide/folder-open",
                },
              ],
            },
          ],
        },
        {
          title: "Solutions",
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
          variant: "link",
          asButton: true,
          href: "#",
        },
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
