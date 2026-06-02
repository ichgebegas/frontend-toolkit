import { StatsGrowthTimeline } from "@opensite/ui/blocks/stats/stats-growth-timeline";

export default function Demo() {
  return (
    <StatsGrowthTimeline
      badge="Our Journey"
      heading="Growing From Startup to Industry Leader"
      description="A decade of innovation, growth, and commitment to excellence"
      milestones={[
        {
          id: "launch",
          year: "2018",
          title: "Company Founded",
          description:
            "Started with a small team and a big vision to transform how businesses operate online.",
          metric: { value: "5", label: "Team Members" },
          icon: "lucide/calendar-days",
        },
        {
          id: "seed",
          year: "2019",
          title: "Seed Funding",
          description:
            "Secured initial investment to accelerate product development and expand the team.",
          metric: { value: "$2M", label: "Raised" },
          icon: "lucide/banknote",
        },
        {
          id: "product",
          year: "2020",
          title: "Product Launch",
          description:
            "Released our flagship platform to the market, gaining rapid adoption.",
          metric: { value: "10K", label: "Early Adopters" },
          icon: "lucide/rocket",
        },
        {
          id: "series-a",
          year: "2022",
          title: "Series A",
          description:
            "Major funding round enabled global expansion and enterprise features.",
          metric: { value: "$25M", label: "Raised" },
          icon: "lucide/trending-up",
        },
        {
          id: "global",
          year: "2024",
          title: "Global Expansion",
          description:
            "Opened offices in Europe and Asia, serving customers worldwide.",
          metric: { value: "50+", label: "Countries" },
          icon: "lucide/globe",
        },
      ]}
      currentStats={[
        { value: "500K+", label: "Active Users" },
        { value: "150+", label: "Team Members" },
        { value: "$50M", label: "ARR" },
        { value: "99.9%", label: "Uptime" },
      ]}
      currentStatsHeading="Where We Are Today"
      futureHeading="What's Next"
      futureDescription="We're just getting started. Our roadmap includes AI-powered features, deeper integrations, and continued global expansion."
      actions={[
        {
          label: "View Our Roadmap",
          href: "/roadmap",
          variant: "default",
        },
      ]}
      spacing="xl"
    />
  );
}
