import { StatsCircularProgress } from "@opensite/ui/blocks/stats/stats-circular-progress";

export default function Demo() {
  return (
    <StatsCircularProgress
      badge="Performance"
      heading="Key Performance Indicators"
      description="Track our progress across business, technical, and customer success metrics"
      defaultCategory="business"
      categories={[
        {
          id: "business",
          name: "Business",
          stats: [
            {
              label: "Revenue Growth",
              value: 84,
              suffix: "%",
              info: "Year over year",
            },
            {
              label: "Market Share",
              value: 67,
              suffix: "%",
              info: "In target segment",
            },
            {
              label: "Profit Margin",
              value: 42,
              suffix: "%",
              info: "Net margin",
            },
            {
              label: "Customer LTV",
              value: 91,
              suffix: "%",
              info: "Above industry avg",
            },
          ],
        },
        {
          id: "technical",
          name: "Technical",
          stats: [
            {
              label: "System Uptime",
              value: 99,
              suffix: "%",
              info: "Last 12 months",
            },
            {
              label: "API Response",
              value: 95,
              suffix: "%",
              info: "Under 100ms",
            },
            {
              label: "Code Coverage",
              value: 88,
              suffix: "%",
              info: "Unit tests",
            },
            {
              label: "Security Score",
              value: 96,
              suffix: "%",
              info: "SOC 2 compliant",
            },
          ],
        },
        {
          id: "customer",
          name: "Customer",
          stats: [
            {
              label: "Satisfaction",
              value: 92,
              suffix: "%",
              info: "CSAT score",
            },
            {
              label: "Retention Rate",
              value: 89,
              suffix: "%",
              info: "Annual retention",
            },
            {
              label: "NPS Score",
              value: 78,
              suffix: "",
              info: "Net promoter",
            },
            {
              label: "Support Rating",
              value: 94,
              suffix: "%",
              info: "5-star reviews",
            },
          ],
        },
      ]}
      spacing="lg"
    />
  );
}
