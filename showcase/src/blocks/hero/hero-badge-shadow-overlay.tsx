import { HeroBadgeShadowOverlay } from "@opensite/ui/blocks/hero/hero-badge-shadow-overlay";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBadgeShadowOverlay
      logo={{
        src: "https://cdn.ing/assets/i/r/288963/4kq4loxmhh5lwc7scw7hhusu87km/ui-placeholder-logo-white-1.png",
        alt: "Brand Logo",
      }}
      announcementBadge="Launch"
      announcementText="Premium design system"
      announcementHref="#"
      heading="Elevate your brand"
      description="Crafted with precision and creativity, our design system empowers you to create visually captivating experiences that resonate with your audience."
      actions={[
        {
          label: "Explore Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      backgroundImageUrl={
        "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc"
      }
    />
  );
}
