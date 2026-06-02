import { HeroSimpleCenteredImage } from "@opensite/ui/blocks/hero/hero-simple-centered-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSimpleCenteredImage
      heading="Clean, simple, effective"
      description="Sometimes less is more. Focus on what matters with our streamlined approach to design and functionality."
      imageSrc={"https://toastability-production.s3.amazonaws.com/ihgx63s5nfzp2e93e3ccljjnnrov"}
      imageAlt="Product showcase"
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      background="dark"
      pattern="gridFadeTop"
      patternOpacity={0.1}
    />
  );
}
