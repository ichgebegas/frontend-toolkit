import { FeatureBentoImageGrid } from "@opensite/ui/blocks/features/feature-bento-image-grid";

export default function Demo() {
  return (
    <FeatureBentoImageGrid
      title="Platform Features"
      description="Discover the powerful capabilities that make our platform the choice of leading teams worldwide."
      background="gray"
      pattern="gridDotsBasic"
      patternOpacity={0.4}
      items={[
        {
          iconName: "lucide/atom",
          iconBadge: "AI",
          title: "AI-Powered Development",
          linkText: "Explore AI Features",
          link: "#",
          imageSrc: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y",
          imageAlt: "AI development tools",
          size: "large",
        },
        {
          iconName: "lucide/shield-check",
          iconBadge: "Security",
          title: "Enterprise Security",
          linkText: "View Security",
          link: "#",
          imageSrc: "https://toastability-production.s3.amazonaws.com/w41h7890eivogu3sr78vlwkpzz8g",
          imageAlt: "Security features",
          size: "small",
        },
        {
          iconName: "lucide/bar-chart-3",
          iconBadge: "Analytics",
          title: "Real-Time Analytics",
          linkText: "See Analytics",
          link: "#",
          imageSrc: "https://toastability-production.s3.amazonaws.com/uv0g605yf5mz106nrm1uspt9l0rr",
          imageAlt: "Analytics dashboard",
          size: "small",
        },
        {
          iconName: "lucide/zap",
          iconBadge: "Performance",
          title: "Lightning Fast",
          linkText: "Check Performance",
          link: "#",
          imageSrc: "https://toastability-production.s3.amazonaws.com/3ghn8dz3g9qtt4pf4nwbriaydvzb",
          imageAlt: "Performance metrics",
          size: "large",
        },
      ]}
      spacing="xl"
    />
  );
}
