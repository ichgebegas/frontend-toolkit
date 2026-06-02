import { StatsIconCards } from "@opensite/ui/blocks/stats/stats-icon-cards";

export default function Demo() {
  return (
    <StatsIconCards
      heading="Our Growth in Numbers"
      description="Key metrics that showcase our impact across the platform"
      stats={[
        {
          label: "Active Users",
          value: "120K+",
          growth: "18% growth",
          isPositive: true,
          icon: "lucide/users",
        },
        {
          label: "Revenue",
          value: "$3.2M",
          growth: "32% increase",
          isPositive: true,
          icon: "lucide/dollar-sign",
        },
        {
          label: "Response Time",
          value: "45ms",
          growth: "12% faster",
          isPositive: true,
          icon: "lucide/clock",
        },
        {
          label: "Support Tickets",
          value: "234",
          growth: "8% decrease",
          isPositive: true,
          icon: "lucide/ticket",
        },
      ]}
      spacing="lg"
    />
  );
}
