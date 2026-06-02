import { HeroSplitSpiralShapes } from "@opensite/ui/blocks/hero/hero-split-spiral-shapes";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSplitSpiralShapes
      badgeText="Design Excellence"
      heading="Where creativity meets precision"
      description="Award-winning designs that blend artistic vision with technical excellence. Experience the difference of thoughtful design."
      actions={[
        {
          label: "View Portfolio",
          href: "/portfolio",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact Us",
          href: "/contact",
          variant: "outline",
        },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85", alt: "Image 1" },
        { src: "https://toastability-production.s3.amazonaws.com/102grjqg8aigxkj585s9x3xbxfv7", alt: "Image 2" },
        { src: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52", alt: "Image 3" },
      ]}
      background="dark"
      pattern="spotlightRight"
    />
  );
}
