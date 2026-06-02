import { ProcessRoadmapTimeline } from "@opensite/ui/blocks/process/process-roadmap-timeline";

export default function Demo() {
  return (
    <ProcessRoadmapTimeline
      heading="Product Roadmap 2026"
      description="Our strategic vision for delivering powerful new features and improvements throughout the year."
      milestones={[
        {
          title: "Platform Foundation",
          description:
            "Core infrastructure upgrades, performance optimizations, and enhanced security protocols to support future growth.",
          date: "Q1 2026",
          status: "completed",
          features: [
            "API v3",
            "Database Migration",
            "SSO Integration",
            "Enhanced Security",
          ],
        },
        {
          title: "AI-Powered Features",
          description:
            "Intelligent automation tools powered by machine learning to streamline workflows and boost productivity.",
          date: "Q2 2026",
          status: "in-progress",
          features: [
            "Smart Recommendations",
            "Auto-categorization",
            "Predictive Analytics",
            "NLP Search",
          ],
        },
        {
          title: "Mobile Experience",
          description:
            "Native mobile applications for iOS and Android with offline capabilities and push notifications.",
          date: "Q3 2026",
          status: "upcoming",
          features: [
            "iOS App",
            "Android App",
            "Offline Mode",
            "Push Notifications",
          ],
        },
        {
          title: "Enterprise Suite",
          description:
            "Advanced enterprise features including custom workflows, white-labeling, and dedicated support options.",
          date: "Q4 2026",
          status: "upcoming",
          features: [
            "Custom Workflows",
            "White-label",
            "Advanced Permissions",
            "Priority Support",
          ],
        },
        {
          title: "Global Expansion",
          description:
            "Multi-language support, regional data centers, and localized payment options to serve international markets.",
          date: "Q1 2027",
          status: "upcoming",
          features: [
            "Multi-language",
            "Regional Servers",
            "Local Payments",
            "Compliance Tools",
          ],
        },
      ]}
      pattern="diagonalCrossBasic"
      patternOpacity={0.1}
      background="gradient"
    />
  );
}
