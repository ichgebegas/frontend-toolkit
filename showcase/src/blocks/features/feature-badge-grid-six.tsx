import { FeatureBadgeGridSix } from "@opensite/ui/blocks/features/feature-badge-grid-six";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureBadgeGridSix
      label="DEVELOPER TOOLS"
      title="Built for Teams That Ship Fast"
      features={[
        {
          iconName: "lucide/git-pull-request",
          heading: "Version Control",
          description:
            "Integrated Git workflows with automated merges and conflict resolution.",
        },
        {
          iconName: "lucide/code",
          heading: "Code Review",
          description:
            "Inline comments, suggestions, and automated testing for every PR.",
        },
        {
          iconName: "lucide/rocket",
          heading: "CI/CD Pipeline",
          description:
            "Deploy to production with confidence using automated testing and rollbacks.",
        },
        {
          iconName: "lucide/shield-check",
          heading: "Security Scanning",
          description:
            "Catch vulnerabilities early with integrated security analysis.",
        },
        {
          iconName: "lucide/activity",
          heading: "Performance Monitoring",
          description:
            "Real-time metrics and alerts for your entire application stack.",
        },
        {
          iconName: "lucide/layout-dashboard",
          heading: "Team Dashboard",
          description:
            "Unified view of projects, tasks, and team velocity metrics.",
        },
      ]}
      action={{
        label: "Explore All Features",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      background="secondary"
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
    />
  );
}
