import { HeroDigitalAgencyFullscreen } from "@opensite/ui/blocks/hero/hero-digital-agency-fullscreen";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDigitalAgencyFullscreen
      heading="Digital experiences that inspire"
      description="Full-service digital agency creating award-winning websites, apps, and brand experiences for forward-thinking companies."
      actions={[
        {
          label: "View Our Work",
          href: "/work",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Start Project",
          href: "/contact",
          variant: "outline",
        },
      ]}
      backgroundImage={"https://toastability-production.s3.amazonaws.com/3nqc7xvjy3e8d7jo1gdvbzty0oqg"}
    />
  );
}
