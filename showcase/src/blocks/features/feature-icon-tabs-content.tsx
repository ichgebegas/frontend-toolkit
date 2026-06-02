import { FeatureIconTabsContent } from "@opensite/ui/blocks/features/feature-icon-tabs-content";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureIconTabsContent
      heading="Key Features"
      description="Discover the standout features that set our platform apart. From blazing-fast performance to enterprise-grade security, see how we deliver exceptional value to our users."
      tabs={[
        {
          value: "performance",
          iconName: "lucide/zap",
          label: "Performance",
          content: {
            badge: "Lightning Fast",
            title: "Built for Speed",
            description:
              "Our infrastructure is optimized for sub-100ms response times globally. Automatic caching, edge computing, and intelligent routing ensure your users get the fastest experience possible.",
            imageSrc: "https://toastability-production.s3.amazonaws.com/betxbx61fkijt0aygineplf489ze",
            imageAlt: "Performance metrics",
            actions: [
              {
                label: "View Benchmarks",
                href: "#",
                variant: "default",
                iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
              },
            ],
          },
        },
        {
          value: "security",
          iconName: "lucide/shield-check",
          label: "Security",
          content: {
            badge: "Enterprise Ready",
            title: "Security First Architecture",
            description:
              "Bank-level encryption, SOC 2 Type II compliance, automated security scanning, and regular penetration testing. Your data is protected by industry-leading security practices.",
            imageSrc: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh",
            imageAlt: "Security features",
            actions: [
              {
                label: "Security Docs",
                href: "#",
                variant: "default",
                iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
              },
            ],
          },
        },
        {
          value: "scalability",
          iconName: "lucide/trending-up",
          label: "Scalability",
          content: {
            badge: "Auto-Scaling",
            title: "Grows With Your Business",
            description:
              "From zero to millions of users, our platform automatically scales to meet demand. No configuration needed - we handle the complexity so you can focus on building.",
            imageSrc: "https://toastability-production.s3.amazonaws.com/pfllskt7q7144l288lrnpc6gx606",
            imageAlt: "Scalability diagram",
            actions: [
              {
                label: "Learn More",
                href: "#",
                variant: "default",
                iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
              },
            ],
          },
        },
      ]}
      defaultTab="performance"
      background="white"
      pattern="gridFadeTop"
      patternOpacity={0.75}
    />
  );
}
