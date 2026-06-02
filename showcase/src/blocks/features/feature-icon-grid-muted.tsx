import { FeatureIconGridMuted } from "@opensite/ui/blocks/features/feature-icon-grid-muted";

export default function Demo() {
  return (
    <FeatureIconGridMuted
      title="Key Features That Save You Time"
      description="Explore tools specifically built to enhance your workflow and boost productivity across your entire team."
      features={[
        {
          iconName: "lucide/check-circle-2",
          title: "Instant Approvals",
          description:
            "Streamlined approval workflows with one-click confirmations and automated routing.",
        },
        {
          iconName: "lucide/clock",
          title: "Time Tracking",
          description:
            "Built-in time tracking that integrates seamlessly with your existing tools and workflows.",
        },
        {
          iconName: "lucide/users",
          title: "Team Collaboration",
          description:
            "Real-time collaboration features that keep everyone on the same page, always.",
        },
        {
          iconName: "lucide/file-text",
          title: "Smart Documents",
          description:
            "Document management with version control, templates, and intelligent search.",
        },
        {
          iconName: "lucide/bell",
          title: "Highlight a Feature",
          description:
            "Intelligent alerts that surface what matters most and reduce notification fatigue.",
          className: "col-span-1 md:col-span-2 bg-black text-white",
          titleClassName: "text-white",
        },
      ]}
      spacing="xl"
      background="muted"
      pattern="grid1"
      patternOpacity={1}
    />
  );
}
