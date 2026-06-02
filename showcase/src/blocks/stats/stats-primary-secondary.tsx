import { StatsPrimarySecondary } from "@opensite/ui/blocks/stats/stats-primary-secondary";

export default function Demo() {
  return (
    <StatsPrimarySecondary
      primaryValue="92%"
      primaryBadge="+7% this month"
      primaryDescription="of users report improved productivity after adopting our platform"
      secondaryStats={[
        { value: "99.95%", label: "Uptime reliability" },
        { value: "2,000+", label: "Enterprise partners" },
        { value: "85%", label: "Cost reduction" },
      ]}
      spacing="lg"
    />
  );
}
