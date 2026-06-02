import { DynamicIcon } from "@opensite/ui";
import { FeatureUtilityCardsGrid } from "@opensite/ui/blocks/features/feature-utility-cards-grid";

export default function Demo() {
  return (
    <FeatureUtilityCardsGrid
      label="Industry Specific Tools"
      labelIconName="lucide/sparkles"
      title="Everything You Need in One Place"
      description="A comprehensive suite of tools designed to simplify your workflow and accelerate development."
      learnMoreAction={{
        label: "All Tools",
        href: "#",
        variant: "link",
        asButton: true,
        iconAfter: <DynamicIcon name="lucide/arrow-up-right" size={20} />,
        className: "flex items-center gap-2 font-bold  uppercase",
      }}
      utilities={[
        {
          title: "API Explorer",
          description:
            "Interactive API documentation with live testing and code examples in multiple languages.",
          image: "https://toastability-production.s3.amazonaws.com/5jsc0b4e3gxnjs81iotw2c3e6da3",
          imageAlt: "API explorer interface",
          href: "#",
        },
        {
          title: "Database Designer",
          description:
            "Visual schema builder with relationship mapping and automatic migration generation.",
          image: "https://toastability-production.s3.amazonaws.com/g607vblaarqctl1cvgxffhx4pw6g",
          imageAlt: "Database designer interface",
          href: "#",
        },
        {
          title: "Asset Optimizer",
          description:
            "Compress and optimize images, fonts, and assets automatically during build.",
          image: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          imageAlt: "Asset optimizer interface",
          href: "#",
        },
      ]}
      background="gray"
    />
  );
}
