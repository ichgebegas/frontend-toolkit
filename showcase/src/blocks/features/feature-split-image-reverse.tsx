import { FeatureSplitImageReverse } from "@opensite/ui/blocks/features/feature-split-image-reverse";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureSplitImageReverse
      title="Scale Without Limits"
      description="Our infrastructure grows with your business. From startups to enterprises, our platform handles millions of requests with sub-100ms response times and 99.99% uptime guaranteed."
      imageSrc={"https://toastability-production.s3.amazonaws.com/8qkikcd43paeqgvw9gc1032j3yup"}
      imageAlt="Scalable infrastructure visualization"
      actions={[
        {
          label: "See Performance",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Pricing",
          href: "#",
          variant: "outline",
        },
      ]}
      background="gray"
      spacing="xl"
    />
  );
}
