import { FeatureStatsHighlight } from "@opensite/ui/blocks/features/feature-stats-highlight";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureStatsHighlight
      badge="Trusted by Thousands"
      badgeClassName="border-1 border-white font-bold uppercase text-xs px-3 py-1.5"
      title="Built for Scale, Optimized for Performance"
      description="Join thousands of teams who trust our platform to deliver exceptional experiences. Our infrastructure handles billions of requests with sub-100ms latency."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "outline",
          asButton: true,
          iconAfter: <DynamicIcon name="lucide/arrow-up-right" size={16} />,
        },
      ]}
      stats={[
        {
          value: "99.99%",
          label: "Uptime SLA",
        },
        {
          value: "< 100ms",
          label: "Response Time",
        },
        {
          value: "24/7",
          label: "Expert Support",
        },
        {
          value: "50K+",
          label: "Active Users",
        },
      ]}
      background="primary"
    />
  );
}
