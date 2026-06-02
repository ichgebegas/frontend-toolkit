import { HeroSpiralPatternCards } from "@opensite/ui/blocks/hero/hero-spiral-pattern-cards";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSpiralPatternCards
      badgeText="Innovative Platform"
      heading="Innovative solutions that evolve with you"
      description="Dynamic, flexible, and always improving. Our platform adapts to your needs and grows with your business."
      actions={[
        {
          label: "Learn More",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      background="dark"
      pattern="gridDotsBasic"
      patternOpacity={0.1}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/2d4k8d5shwg82276hzj2ztbj7mxq", alt: "Image 1" },
        { src: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9", alt: "Image 2" },
        { src: "https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl", alt: "Image 3" },
      ]}
    />
  );
}
