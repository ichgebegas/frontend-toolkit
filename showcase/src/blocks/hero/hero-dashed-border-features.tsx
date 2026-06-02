import { HeroDashedBorderFeatures } from "@opensite/ui/blocks/hero/hero-dashed-border-features";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroDashedBorderFeatures
      logo={{
        src: brandLogoPlaceholders.black[0],
        alt: "Brand Logo",
      }}
      heading="Features that make a difference"
      description="Discover the powerful capabilities that set us apart. Every feature designed with your success in mind."
      badgeText="New Features"
      announcementHref="#"
      announcementText="Latest innovations"
      features={[
        {
          icon: <DynamicIcon name="lucide/zap" size={24} />,
          title: "Lightning Fast",
          description: "Optimized for speed and performance",
          href: "#",
        },
        {
          icon: <DynamicIcon name="lucide/shield" size={24} />,
          title: "Secure by Default",
          description: "Enterprise-grade security built-in",
          href: "#",
        },
        {
          icon: <DynamicIcon name="lucide/sparkles" size={24} />,
          title: "AI-Powered",
          description: "Smart automation that learns",
          href: "#",
        },
      ]}
      actions={[
        {
          label: "Explore Features",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact Sales",
          href: "#",
          variant: "outline",
        },
      ]}
      background="white"
      pattern="diagonalCrossFadeCenter"
      patternOpacity={1}
    />
  );
}
