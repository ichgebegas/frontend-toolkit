import { StatsTimelineTabs } from "@opensite/ui/blocks/stats/stats-timeline-tabs";

export default function Demo() {
  return (
    <StatsTimelineTabs
      badge="Performance Timeline"
      heading="Growth Progression"
      description="Track our key metrics over different time periods"
      defaultPeriod="monthly"
      periods={[
        {
          id: "weekly",
          label: "Weekly",
          stats: [
            {
              label: "New Signups",
              value: "1,284",
              change: 12,
              trend: "up",
              previousLabel: "last week",
            },
            {
              label: "Active Sessions",
              value: "32,891",
              change: 8,
              trend: "up",
              previousLabel: "last week",
            },
            {
              label: "Conversion Rate",
              value: "5.2%",
              change: 3,
              trend: "up",
              previousLabel: "last week",
            },
            {
              label: "Support Tickets",
              value: "89",
              change: 15,
              trend: "down",
              previousLabel: "last week",
              inversePositive: true,
            },
          ],
        },
        {
          id: "monthly",
          label: "Monthly",
          stats: [
            {
              label: "New Signups",
              value: "5,432",
              change: 24,
              trend: "up",
              previousLabel: "last month",
            },
            {
              label: "Active Sessions",
              value: "142,567",
              change: 18,
              trend: "up",
              previousLabel: "last month",
            },
            {
              label: "Conversion Rate",
              value: "6.1%",
              change: 7,
              trend: "up",
              previousLabel: "last month",
            },
            {
              label: "Support Tickets",
              value: "312",
              change: 22,
              trend: "down",
              previousLabel: "last month",
              inversePositive: true,
            },
          ],
        },
        {
          id: "quarterly",
          label: "Quarterly",
          stats: [
            {
              label: "New Signups",
              value: "18,921",
              change: 45,
              trend: "up",
              previousLabel: "last quarter",
            },
            {
              label: "Active Sessions",
              value: "456,234",
              change: 32,
              trend: "up",
              previousLabel: "last quarter",
            },
            {
              label: "Conversion Rate",
              value: "7.3%",
              change: 12,
              trend: "up",
              previousLabel: "last quarter",
            },
            {
              label: "Support Tickets",
              value: "876",
              change: 28,
              trend: "down",
              previousLabel: "last quarter",
              inversePositive: true,
            },
          ],
        },
        {
          id: "yearly",
          label: "Yearly",
          stats: [
            {
              label: "New Signups",
              value: "72,456",
              change: 89,
              trend: "up",
              previousLabel: "last year",
            },
            {
              label: "Active Sessions",
              value: "1.8M",
              change: 67,
              trend: "up",
              previousLabel: "last year",
            },
            {
              label: "Conversion Rate",
              value: "8.9%",
              change: 34,
              trend: "up",
              previousLabel: "last year",
            },
            {
              label: "Support Tickets",
              value: "2,341",
              change: 41,
              trend: "down",
              previousLabel: "last year",
              inversePositive: true,
            },
          ],
        },
      ]}
      spacing="lg"
    />
  );
}
