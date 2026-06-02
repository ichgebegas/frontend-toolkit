import { CarouselTabsContent } from "@opensite/ui/blocks/gallery/carousel-tabs-content";

export default function Demo() {
  return (
    <CarouselTabsContent
      title="Explore Our Spaces"
      description="Discover a variety of environments tailored to your needs, from collaborative workspaces to serene relaxation areas. Each space is designed to inspire creativity and productivity."
      items={[
        {
          title: "Enterprise Platform",
          description:
            "A comprehensive enterprise solution designed to handle complex workflows, large-scale data processing, and multi-tenant architectures. Built with scalability and reliability at its core.",
          note: "Trusted by Fortune 500 companies worldwide",
          image: "https://toastability-production.s3.amazonaws.com/mt87xjr79wxdhjy7496v3r6m2m9t",
          imageAlt: "Enterprise platform dashboard",
          category: "Enterprise",
        },
        {
          title: "Startup Suite",
          description:
            "Fast-track your startup growth with our all-in-one platform. From MVP to scale, we provide the tools and infrastructure you need to succeed without breaking the bank.",
          note: "Launch your product in days, not months",
          image: "https://toastability-production.s3.amazonaws.com/3dy9ge962uarlaf2xl7imdcviqgx",
          imageAlt: "Startup suite interface",
          category: "Startup",
        },
        {
          title: "Developer Tools",
          description:
            "Powerful developer tools including CLI, SDKs, and comprehensive APIs. Build, test, and deploy with confidence using our modern development environment and extensive documentation.",
          note: "Loved by 50,000+ developers",
          image: "https://toastability-production.s3.amazonaws.com/okf6fg4n9yv59up8ivgcdjy3w030",
          imageAlt: "Developer tools interface",
          category: "Developers",
        },
        {
          title: "Analytics Pro",
          description:
            "Advanced analytics platform with real-time data processing, custom dashboards, and AI-powered insights. Turn your data into your competitive advantage.",
          note: "Process billions of events daily",
          image: "https://toastability-production.s3.amazonaws.com/t7iteqw4xhtppkiws88bsoia25hv",
          imageAlt: "Analytics dashboard",
          category: "Analytics",
        },
        {
          title: "Integration Hub",
          description:
            "Connect with 200+ enterprise applications through our universal integration platform. Pre-built connectors, custom workflows, and real-time data synchronization.",
          note: "Seamless integration in minutes",
          image: "https://toastability-production.s3.amazonaws.com/klr5tuvulkyqfb721txtu4hgzxdm",
          imageAlt: "Integration hub interface",
          category: "Integration",
        },
      ]}
      background="white"
      spacing="lg"
      pattern="crossPattern"
      patternOpacity={0.2}
    />
  );
}
