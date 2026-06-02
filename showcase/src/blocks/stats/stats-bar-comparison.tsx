import { StatsBarComparison } from "@opensite/ui/blocks/stats/stats-bar-comparison";

export default function Demo() {
  return (
    <StatsBarComparison
      badge="Competitive Edge"
      heading="How We Compare"
      description="See how our platform outperforms industry benchmarks across key metrics"
      comparisons={[
        {
          title: "Revenue Growth",
          bars: [
            {
              label: "Our Platform",
              value: 89,
              displayValue: "$2.4M",
              color: "bg-primary",
            },
            {
              label: "Industry Average",
              value: 34,
              displayValue: "$920K",
            },
          ],
        },
        {
          title: "Customer Retention",
          bars: [
            {
              label: "Our Platform",
              value: 94,
              displayValue: "94%",
              color: "bg-primary",
            },
            {
              label: "Industry Average",
              value: 67,
              displayValue: "67%",
            },
          ],
        },
        {
          title: "Time to Value",
          bars: [
            {
              label: "Our Platform",
              value: 85,
              displayValue: "2 weeks",
              color: "bg-primary",
            },
            {
              label: "Industry Average",
              value: 35,
              displayValue: "6 weeks",
            },
          ],
        },
        {
          title: "Support Response",
          bars: [
            {
              label: "Our Platform",
              value: 92,
              displayValue: "< 1 hour",
              color: "bg-primary",
            },
            {
              label: "Industry Average",
              value: 45,
              displayValue: "24 hours",
            },
          ],
        },
      ]}
      animate={true}
      spacing="lg"
    />
  );
}
