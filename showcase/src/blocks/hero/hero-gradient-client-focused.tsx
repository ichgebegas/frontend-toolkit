import { HeroGradientClientFocused } from "@opensite/ui/blocks/hero/hero-gradient-client-focused";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGradientClientFocused
      heading="Your success is our mission"
      description="We're dedicated to helping you achieve your goals with personalized support, expert guidance, and proven strategies."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Talk to Sales",
          href: "#",
          variant: "ghost",
          icon: <DynamicIcon name="lucide/phone" size={16} />,
        },
      ]}
      image={{ src: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh", alt: "Client success" }}
      background="gradient"
    />
  );
}
