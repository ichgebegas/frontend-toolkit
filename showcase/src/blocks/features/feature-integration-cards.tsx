import { brandLogoPlaceholders } from "@/lib/media";
import { FeatureIntegrationCards } from "@opensite/ui/blocks/features/feature-integration-cards";

export default function Demo() {
  return (
    <FeatureIntegrationCards
      title="Powerful Integrations"
      description="Connect seamlessly with the tools your team already uses. One-click setup gets you started in minutes."
      integrations={[
        {
          icon: brandLogoPlaceholders.black[0],
          iconAlt: "Integration logo",
          title: "Slack",
          description:
            "Get real-time notifications and updates directly in your Slack channels.",
          link: "#",
          linkLabel: "Connect Slack",
        },
        {
          icon: brandLogoPlaceholders.black[1],
          iconAlt: "Integration logo",
          title: "GitHub",
          description:
            "Sync your repositories and automate workflows with GitHub Actions.",
          link: "#",
          linkLabel: "Connect GitHub",
        },
        {
          icon: brandLogoPlaceholders.black[2],
          iconAlt: "Integration logo",
          title: "Google Workspace",
          description:
            "Integrate with Gmail, Calendar, and Drive for seamless productivity.",
          link: "#",
          linkLabel: "Connect Google",
        },
        {
          icon: brandLogoPlaceholders.black[3],
          iconAlt: "Integration logo",
          title: "Salesforce",
          description:
            "Sync customer data and automate your sales workflow end-to-end.",
          link: "#",
          linkLabel: "Connect Salesforce",
        },
      ]}
      background="dark"
      pattern="diagonalCrossBasic"
      patternOpacity={0.1}
    />
  );
}
