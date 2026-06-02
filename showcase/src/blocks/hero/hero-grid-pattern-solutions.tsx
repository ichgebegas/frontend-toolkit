import { HeroGridPatternSolutions } from "@opensite/ui/blocks/hero/hero-grid-pattern-solutions";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGridPatternSolutions
      badgeText="New Version Launched"
      badgeHref="#"
      heading="Trusted by Leaders"
      description="From startups to enterprises, we provide comprehensive solutions tailored to your unique needs and goals."
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/okf6fg4n9yv59up8ivgcdjy3w030",
          alt: "For Business",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/hotlo54tsvl2k3eht9gg0460l9zw",
          alt: "For Developers",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/klr5tuvulkyqfb721txtu4hgzxdm",
          alt: "For Teams",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh",
          alt: "For Teams",
        },
      ]}
      actions={[
        {
          label: "Explore Solutions",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" />,
        },
      ]}
      pattern="grid1"
      patternOpacity={0.1}
      background="dark"
    />
  );
}
