import { StatsNumberTicker } from "@opensite/ui/blocks/stats/stats-number-ticker";

export default function Demo() {
  return (
    <StatsNumberTicker
      badge="By The Numbers"
      heading="Platform Statistics"
      description="Real-time metrics that showcase our platform's reach and reliability"
      stats={[
        {
          value: 10000,
          suffix: "+",
          label: "Active Users",
          description: "Growing community of professionals",
        },
        {
          value: 99.9,
          suffix: "%",
          label: "Uptime",
          description: "Enterprise-grade reliability",
        },
        {
          value: 480,
          label: "Processed",
          description: "Transactions this month",
        },
        {
          value: 45,
          suffix: "ms",
          label: "Avg Response",
          description: "Lightning-fast performance",
        },
      ]}
      animationDuration={2500}
      spacing="lg"
    />
  );
}
