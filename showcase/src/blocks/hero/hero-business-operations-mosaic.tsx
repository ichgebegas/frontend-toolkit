import { DynamicIcon } from "@opensite/ui";
import { HeroBusinessOperationsMosaic } from "@opensite/ui/blocks/hero/hero-business-operations-mosaic";

export default function Demo() {
  return (
    <HeroBusinessOperationsMosaic
      heading="Streamline your business operations"
      description="Unified platform for managing all aspects of your business. From inventory to accounting, everything in one place. Join use today."
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9", alt: "Operations 1" },
        { src: "https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl", alt: "Operations 2" },
        { src: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp", alt: "Operations 3" },
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
