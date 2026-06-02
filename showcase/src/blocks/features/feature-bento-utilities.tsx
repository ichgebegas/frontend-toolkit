import { FeatureBentoUtilities } from "@opensite/ui/blocks/features/feature-bento-utilities";

export default function Demo() {
  return (
    <FeatureBentoUtilities
      label="DEVELOPMENT UTILITIES"
      labelIconName="lucide/sparkles"
      title="Tools That Power Your Workflow"
      description="Comprehensive utilities designed to streamline every aspect of your development process."
      leftColumnCards={[
        {
          title: "Code Generator",
          description:
            "Generate components, routes, and API endpoints from templates with smart variable replacement.",
          imageSrc: "https://toastability-production.s3.amazonaws.com/vh1aowwr93yz4qrzct2s4je0cxdo",
          imageAlt: "Code generator",
          showSparkle: true,
          href: "#",
        },
        {
          title: "Schema Builder",
          description:
            "Visual database designer with automatic migration generation.",
          badge: "Beta",
          isDashed: false,
          href: "#",
        },
      ]}
      rightColumnCards={[
        {
          title: "Asset Optimizer",
          description:
            "Automatically compress and optimize images, fonts, and other assets during build.",
          showSparkle: false,
          href: "#",
        },
        {
          title: "API Testing",
          description:
            "Interactive API explorer with live testing and code generation in multiple languages.",
          imageSrc: "https://toastability-production.s3.amazonaws.com/6ku135fhv528eei3agnoc3zd7y75",
          imageAlt: "API testing",
          showSparkle: true,
          href: "#",
        },
      ]}
      background="dark"
      pattern="gridFadeCenter"
      patternOpacity={0.15}
    />
  );
}
