import { HeroInnovationImageGrid } from "@opensite/ui/blocks/hero/hero-innovation-image-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroInnovationImageGrid
      heading="Pioneering the future of technology"
      description="Pushing boundaries and exploring new frontiers. Join us on our mission to shape tomorrow's world."
      actions={[
        {
          label: "Learn More",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/hotlo54tsvl2k3eht9gg0460l9zw", alt: "Innovation 1" },
        { src: "https://toastability-production.s3.amazonaws.com/ytbyjrcvrghc7wl6w1g7g8fwka22", alt: "Innovation 2" },
        { src: "https://toastability-production.s3.amazonaws.com/uv0g605yf5mz106nrm1uspt9l0rr", alt: "Innovation 3" },
      ]}
      background="dark"
      pattern="gridFadeBottomLeft"
      patternOpacity={0.15}
    />
  );
}
