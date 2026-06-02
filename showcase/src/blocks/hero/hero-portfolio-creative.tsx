import { HeroPortfolioCreative } from "@opensite/ui/blocks/hero/hero-portfolio-creative";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPortfolioCreative
      heading="Creative work that stands out"
      description="Award-winning portfolio showcasing our best projects in design, branding, and digital experiences."
      portfolioImages={[
        {
          src: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo",
          alt: "Brand Identity Project",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/ygob90kp07hxmi5jj4sned76dnmc",
          alt: "Web Design Project",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          alt: "Mobile App Project",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x",
          alt: "Mobile App Project",
        },
      ]}
      actions={[
        {
          label: "View All Work",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
