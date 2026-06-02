import { HeroFeatureCardsGrid } from "@opensite/ui/blocks/hero/hero-feature-cards-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFeatureCardsGrid
      heading="Everything you need in one place"
      description="Powerful features that work together seamlessly to help you achieve more."
      features={[
        {
          icon: <DynamicIcon name="lucide/layout-dashboard" size={24} />,
          title: "Intuitive Dashboard",
          href: "#",
          description:
            "Get insights at a glance with our beautiful, customizable dashboard",
        },
        {
          icon: <DynamicIcon name="lucide/users" size={24} />,
          title: "Team Collaboration",
          href: "#",
          description:
            "Work together seamlessly with real-time updates and comments",
        },
        {
          icon: <DynamicIcon name="lucide/bar-chart" size={24} />,
          title: "Advanced Analytics",
          href: "#",
          description:
            "Make data-driven decisions with comprehensive reporting",
        },
        {
          icon: <DynamicIcon name="lucide/zap" size={24} />,
          title: "Automation",
          href: "#",
          description: "Save time with smart workflows and automated processes",
        },
      ]}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Talk to Sales",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/phone" size={16} />,
        },
      ]}
      background="gray"
    />
  );
}
