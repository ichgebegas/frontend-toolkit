import { FeatureImageCardsThreeColumn } from "@opensite/ui/blocks/features/feature-image-cards-three-column";

export default function Demo() {
  return (
    <FeatureImageCardsThreeColumn
      title="Featured Solutions"
      description="Tailored solutions designed to accelerate your development workflow and drive business growth."
      background="dark"
      pattern="architect"
      patternOpacity={1}
      cards={[
        {
          iconName: "lucide/zap",
          badgeText: "Most Popular",
          title: "Rapid Development",
          linkText: "Learn More",
          link: "#",
          imageSrc: "https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40",
          imageAlt: "Rapid development workflow",
        },
        {
          iconName: "lucide/shield-check",
          badgeText: "Enterprise",
          title: "Security First",
          linkText: "Explore Features",
          link: "#",
          imageSrc: "https://toastability-production.s3.amazonaws.com/73e0s79u4crdu7cmjfp99j1l2v55",
          imageAlt: "Security features",
        },
        {
          iconName: "lucide/trending-up",
          badgeText: "Growth",
          title: "Scale Seamlessly",
          linkText: "See How",
          link: "#",
          imageSrc: "https://toastability-production.s3.amazonaws.com/yw5f7iwyypf4kctpr5ye5e495swt",
          imageAlt: "Scalability features",
        },
      ]}
    />
  );
}
