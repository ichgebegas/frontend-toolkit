import { HeroSplitIconCards } from "@opensite/ui/blocks/hero/hero-split-icon-cards";

export default function Demo() {
  return (
    <HeroSplitIconCards
      eyebrow="For Developers"
      heading="Built for teams that ship fast"
      description="Powerful features designed for modern development teams. Ship better products, faster."
      primaryCta={{
        label: "Get Started",
        href: "#",
      }}
      secondaryCta={{
        label: "View Demo",
        href: "#",
      }}
      cardItems={[
        {
          title: "New Features",
          subtitle: "New AI features to automate workflows",
          icon: "lucide/bot",
          href: "#",
        },
        {
          title: "Automation",
          subtitle: "Dedicated agents to help streamline tasks",
          icon: "lucide/bell",
          href: "#",
        },
        {
          title: "Performance",
          subtitle: "Enterprise speed for all business sizes",
          icon: "lucide/bolt",
          href: "#",
        },
      ]}
      background="gray"
      pattern="circuitBoardBasic"
      patternOpacity={1}
    />
  );
}
