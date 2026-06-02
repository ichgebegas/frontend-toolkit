import { FeatureCapabilitiesGrid } from "@opensite/ui/blocks/features/feature-capabilities-grid";

export default function Demo() {
  return (
    <FeatureCapabilitiesGrid
      eyebrow="PLATFORM CAPABILITIES"
      heading="Everything You Need to Build Modern Applications"
      items={[
        {
          iconName: "lucide/brain",
          title: "AI-Powered Insights",
          description:
            "Machine learning algorithms that analyze patterns and provide actionable recommendations in real-time.",
          href: "#",
        },
        {
          iconName: "lucide/database",
          title: "Intelligent Data Layer",
          description:
            "Distributed database architecture with automatic sharding, replication, and sub-millisecond query times.",
          href: "#",
        },
        {
          iconName: "lucide/lock",
          title: "Zero-Trust Security",
          description:
            "End-to-end encryption with hardware security modules and SOC 2 Type II compliance.",
          href: "#",
        },
        {
          iconName: "lucide/activity",
          title: "Real-Time Monitoring",
          description:
            "Comprehensive observability with distributed tracing, custom metrics, and intelligent alerting.",
          href: "#",
        },
        {
          iconName: "lucide/workflow",
          title: "Automated Workflows",
          description:
            "Visual workflow builder with conditional logic, parallel processing, and custom integrations.",
          href: "#",
        },
        {
          iconName: "lucide/globe",
          title: "Global Edge Network",
          description:
            "Deploy to 200+ edge locations worldwide with automatic failover and intelligent routing.",
          href: "#",
        },
      ]}
      background="dark"
      pattern="dashedGridBasic"
      patternOpacity={0.2}
    />
  );
}
