import { CarouselSidebarResources } from "@opensite/ui/blocks/gallery/carousel-sidebar-resources";

export default function Demo() {
  return (
    <CarouselSidebarResources
      heading="Learning Resources"
      resources={[
        {
          title: "Getting Started with AI Integration",
          category: "Tutorial",
          link: "/resources/ai-integration-guide",
          image: "https://toastability-production.s3.amazonaws.com/uv0g605yf5mz106nrm1uspt9l0rr",
          imageAlt: "AI integration tutorial",
        },
        {
          title: "Building Scalable APIs",
          category: "Guide",
          link: "/resources/scalable-apis",
          image: "https://toastability-production.s3.amazonaws.com/yrp5k5xszwpe26fquupey6a6g0uu",
          imageAlt: "API development guide",
        },
        {
          title: "Security Best Practices 2025",
          category: "Whitepaper",
          link: "/resources/security-practices",
          image: "https://toastability-production.s3.amazonaws.com/97gctpna2hdozl1f8u5xq4ew8h0o",
          imageAlt: "Security whitepaper",
        },
        {
          title: "Cloud Migration Strategy",
          category: "Case Study",
          link: "/resources/cloud-migration",
          image: "https://toastability-production.s3.amazonaws.com/xjtepune0scj9yjkkqgaiwlq9hls",
          imageAlt: "Cloud migration case study",
        },
        {
          title: "DevOps Implementation Roadmap",
          category: "Guide",
          link: "/resources/devops-roadmap",
          image: "https://toastability-production.s3.amazonaws.com/g607vblaarqctl1cvgxffhx4pw6g",
          imageAlt: "DevOps guide",
        },
        {
          title: "Data Privacy Compliance",
          category: "Whitepaper",
          link: "/resources/data-privacy",
          image: "https://toastability-production.s3.amazonaws.com/4xpu1ljr9c8g6qzmfum5ygjzbzpb",
          imageAlt: "Data privacy whitepaper",
        },
      ]}
      viewAllText="View all resources"
      viewAllHref="/resources"
      background="gray"
      spacing="xl"
      pattern="gridFadeBottomRight"
      patternOpacity={0.6}
    />
  );
}
