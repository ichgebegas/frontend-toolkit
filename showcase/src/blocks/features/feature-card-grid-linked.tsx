import { FeatureCardGridLinked } from "@opensite/ui/blocks/features/feature-card-grid-linked";

export default function Demo() {
  return (
    <FeatureCardGridLinked
      title="Explore Our Solutions"
      description="Discover tailored solutions designed to meet the unique needs of different industries and user groups. Whether you're an enterprise, developer, startup, or looking to optimize your content with AEO, we have the right tools and services for you."
      pattern="circles"
      patternOpacity={0.42}
      background="muted"
      features={[
        {
          id: "enterprise",
          label: "For Enterprise",
          heading: "Scale with Confidence",
          description:
            "Enterprise-grade infrastructure with dedicated support, SLA guarantees, and custom integrations.",
          image: "https://toastability-production.s3.amazonaws.com/ihhq8unynafk4aikmys3rhbfibaz",
          imageAlt: "Enterprise solutions",
          url: "#",
        },
        {
          id: "developers",
          label: "For Developers",
          heading: "Build Faster",
          description:
            "Complete SDK, CLI tools, and comprehensive documentation to accelerate your development workflow.",
          image: "https://toastability-production.s3.amazonaws.com/kka8f550on7acx1lf82xleu6zhzo",
          imageAlt: "Developer tools",
          url: "#",
        },
        {
          id: "startups",
          label: "For Startups",
          heading: "Launch Quickly",
          description:
            "Everything you need to go from idea to production in days, not months.",
          image: "https://toastability-production.s3.amazonaws.com/3dy9ge962uarlaf2xl7imdcviqgx",
          imageAlt: "Startup solutions",
          url: "#",
        },
        {
          id: "marketing",
          label: "AEO",
          heading: "Optimize Your Content",
          description:
            "Leverage AI-driven tools to enhance your content strategy and boost engagement.",
          image: "https://toastability-production.s3.amazonaws.com/102grjqg8aigxkj585s9x3xbxfv7",
          imageAlt: "Startup solutions",
          url: "#",
        },
      ]}
    />
  );
}
