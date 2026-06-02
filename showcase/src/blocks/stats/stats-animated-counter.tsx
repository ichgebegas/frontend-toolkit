import { StatsAnimatedCounter } from "@opensite/ui/blocks/stats/stats-animated-counter";

export default function Demo() {
  return (
    <StatsAnimatedCounter
      heading="Our Impact in Numbers"
      description="See the measurable difference we've made for businesses worldwide"
      stats={[
        {
          value: 500,
          suffix: "+",
          label: "Projects Completed",
          icon: "lucide/folder-check",
        },
        {
          value: 98,
          suffix: "%",
          label: "Client Satisfaction",
          icon: "lucide/heart",
        },
        {
          value: 50,
          prefix: "$",
          suffix: "M+",
          label: "Revenue Generated",
          icon: "lucide/trending-up",
        },
        {
          value: 24,
          suffix: "/7",
          label: "Support Available",
          icon: "lucide/headphones",
        },
      ]}
      animationDuration={2000}
      spacing="lg"
    />
  );
}
