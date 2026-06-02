import { HeroBadgeImageSplit } from "@opensite/ui/blocks/hero/hero-badge-image-split";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBadgeImageSplit
      badge="New Release"
      badgeIcon={<DynamicIcon name="lucide/sparkles" size={16} />}
      heading="Build faster with our platform"
      description="Everything you need to ship your product in record time. Developer-friendly tools, powerful features, and world-class support."
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline",
        },
      ]}
      imageSrc={"https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac"}
      imageAlt="Platform dashboard"
      background="gray"
      pattern="dashedGridFadeTopRight"
      patternOpacity={0.9}
    />
  );
}
