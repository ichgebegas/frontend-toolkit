import { FeatureCarouselProgress } from "@opensite/ui/blocks/features/feature-carousel-progress";

export default function Demo() {
  return (
    <FeatureCarouselProgress
      badge="Platform Features"
      title="Everything You Need in One Place"
      description="Our platform offers a comprehensive suite of features designed to help you build, deploy, and scale modern applications with ease and confidence."
      carouselLabel="Explore Our Features"
      slides={[
        {
          iconName: "lucide/code",
          title: "Modern Development",
          description:
            "Built with the latest frameworks and tools, updated regularly for features and security. TypeScript, React, and Tailwind CSS come preconfigured for optimal developer experience.",
        },
        {
          iconName: "lucide/rocket",
          title: "Instant Deployment",
          description:
            "Push to production in seconds with automatic builds, tests, and deployments. No configuration needed - it just works.",
        },
        {
          iconName: "lucide/shield-check",
          title: "Enterprise Security",
          description:
            "SOC 2 Type II certified with automatic SSL, DDoS protection, and regular security audits. Your data is always protected.",
        },
        {
          iconName: "lucide/bar-chart-3",
          title: "Advanced Analytics",
          description:
            "Real-time insights into performance, user behavior, and business metrics. Make data-driven decisions with confidence.",
        },
        {
          iconName: "lucide/users",
          title: "Team Collaboration",
          description:
            "Built-in tools for code review, project management, and team communication. Keep everyone aligned and productive.",
        },
      ]}
      background="dark"
    />
  );
}
