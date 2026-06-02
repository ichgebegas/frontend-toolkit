import { FeatureIconGridBordered } from "@opensite/ui/blocks/features/feature-icon-grid-bordered";

export default function Demo() {
  return (
    <FeatureIconGridBordered
      label="WHY CHOOSE US?"
      title="A Better Way to Build Modern Websites"
      features={[
        {
          iconName: "lucide/timer",
          title: "Lightning Performance",
          href: "#",
          description:
            "Optimized for speed with sub-second page loads and instant interactions.",
        },
        {
          iconName: "lucide/shield",
          title: "Enterprise Security",
          href: "#",
          description:
            "Bank-level encryption with compliance certifications and regular audits.",
        },
        {
          iconName: "lucide/zap",
          title: "Innovative Technology",
          href: "#",
          description:
            "Built on cutting-edge frameworks with future-proof architecture.",
        },
        {
          iconName: "lucide/users",
          title: "Expert Support",
          href: "#",
          description:
            "24/7 assistance from experienced developers who know your codebase.",
        },
      ]}
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.15}
      background="dark"
    />
  );
}
