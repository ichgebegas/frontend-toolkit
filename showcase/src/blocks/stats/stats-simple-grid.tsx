import { StatsSimpleGrid } from "@opensite/ui/blocks/stats/stats-simple-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <StatsSimpleGrid
      heading="Platform Performance Insights"
      stats={[
        { value: "90%", label: "Customer Satisfaction" },
        { value: "200+", label: "Enterprise Clients" },
        { value: "99%", label: "Uptime Guarantee" },
        { value: "150+", label: "Team Members" },
      ]}
      actions={[
        {
          label: "Get Started",
          href: "/signup",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "/about",
          variant: "outline",
        },
      ]}
      spacing="lg"
    />
  );
}
