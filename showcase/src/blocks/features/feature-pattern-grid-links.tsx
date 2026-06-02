import { FeaturePatternGridLinks } from "@opensite/ui/blocks/features/feature-pattern-grid-links";

export default function Demo() {
  return (
    <FeaturePatternGridLinks
      title="Client Resources"
      description="Explore our comprehensive resources designed to help you make the most of our platform and accelerate your development process."
      features={[
        {
          iconName: "lucide/code-2",
          title: "Component Library",
          description:
            "200+ production-ready components with full TypeScript support and documentation.",
          link: "#",
          linkLabel: "Browse Components",
        },
        {
          iconName: "lucide/palette",
          title: "Design System",
          description:
            "Comprehensive design tokens, patterns, and guidelines for consistent UX.",
          link: "#",
          linkLabel: "View Design System",
        },
        {
          iconName: "lucide/book-open",
          title: "Documentation",
          description:
            "In-depth guides, tutorials, and API references to help you get started.",
          link: "#",
          linkLabel: "Read the Docs",
        },
        {
          iconName: "lucide/users",
          title: "Community",
          description:
            "Join thousands of developers building amazing products with our platform.",
          link: "#",
          linkLabel: "Join Community",
        },
        {
          iconName: "lucide/layout-template",
          title: "Templates",
          description:
            "Launch faster with pre-built templates for dashboards, marketing sites, and apps.",
          link: "#",
          linkLabel: "Browse Templates",
        },
        {
          iconName: "lucide/plug",
          title: "Integrations",
          description:
            "Connect your stack with first-class integrations for analytics, auth, and payments.",
          link: "#",
          linkLabel: "See Integrations",
        },
        {
          iconName: "lucide/activity",
          title: "Analytics",
          description:
            "Track adoption, performance, and engagement with real-time dashboards.",
          link: "#",
          linkLabel: "View Analytics",
        },
        {
          iconName: "lucide/accessibility",
          title: "Accessibility",
          description:
            "WCAG-aligned components with keyboard support, ARIA labels, and focus states.",
          link: "#",
          linkLabel: "Accessibility Guide",
        },
        {
          iconName: "lucide/headset",
          title: "Support",
          description:
            "Priority support, migration help, and best-practice reviews from our team.",
          link: "#",
          linkLabel: "Contact Support",
        },
      ]}
      background="white"
      spacing="xl"
      pattern="dots"
      patternOpacity={0.7}
    />
  );
}
