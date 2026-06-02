import { StatsImpactGrid } from "@opensite/ui/blocks/stats/stats-impact-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <StatsImpactGrid
      badge="Proof in the Numbers"
      heading="Impact You Can Measure"
      description="See how teams translate insight into meaningful outcomes across growth, efficiency, and retention."
      stats={[
        {
          id: "growth",
          value: "312",
          suffix: "%",
          label: "Revenue Growth",
          description: "Average year-over-year lift after launch.",
          icon: "lucide/trending-up",
        },
        {
          id: "velocity",
          value: "4.6",
          suffix: "x",
          label: "Delivery Speed",
          description: "Faster time-to-value compared to baseline.",
          icon: "lucide/rocket",
          iconColor: "text-primary",
        },
        {
          id: "retention",
          prefix: "+",
          value: "29",
          suffix: "%",
          label: "Customer Retention",
          description: "Retention gains within the first 90 days.",
          icon: "lucide/user-check",
          iconColor: "text-primary",
        },
      ]}
      comparisonHeading="Before vs. After"
      comparisonDescription="Track the measurable shift between your baseline and optimized performance."
      baselineLabel="Baseline"
      baselineValue="24%"
      baselinePercent={24}
      targetLabel="Optimized"
      targetValue="89%"
      targetPercent={89}
      ctaHeading="Ready to build your own impact story?"
      actions={[
        {
          label: "Start the audit",
          href: "/audit",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View case studies",
          href: "/case-studies",
          variant: "outline",
        },
      ]}
      background="white"
      pattern="gridFadeTop"
      patternOpacity={1}
    />
  );
}
