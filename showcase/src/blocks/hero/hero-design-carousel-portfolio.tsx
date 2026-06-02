import { HeroDesignCarouselPortfolio } from "@opensite/ui/blocks/hero/hero-design-carousel-portfolio";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroDesignCarouselPortfolio
      logo={{
        src: brandLogoPlaceholders.black[0],
        alt: "Brand Logo",
      }}
      heading="Design portfolio that speaks volumes"
      description="Showcase your best work with beautiful, interactive carousels that captivate and engage your audience."
      features={[
        {
          icon: (
            <DynamicIcon
              name="lucide/target"
              size={24}
              className="text-primary"
            />
          ),
          title: "Strategic Focus",
          description:
            "Every project begins with understanding your goals. We align our work with your business objectives to ensure measurable impact.",
        },
        {
          icon: (
            <DynamicIcon name="lucide/zap" size={24} className="text-primary" />
          ),
          title: "Rapid Execution",
          description:
            "Our agile methodology enables quick iterations and fast time-to-market without compromising on quality.",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/heart"
              size={24}
              className="text-primary"
            />
          ),
          title: "Human-Centered",
          description:
            "We design for people first. Every decision is informed by user research and validated through testing.",
        },
      ]}
      actions={[
        {
          label: "Schedule Chat",
          href: "#",
          variant: "default",
        },
        {
          label: "View Portfolio",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      carouselImages={[
        {
          src: "https://toastability-production.s3.amazonaws.com/xlp46pzk3a4d73jgjx4s7xdafwpn",
          alt: "Portfolio project one",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/g1iuifb3yzoofo9c7a00koyn6q1t",
          alt: "Portfolio project two",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/z9u4sdrj2oq3eds0qyui0nxsus3j",
          alt: "Portfolio project three",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson",
          alt: "Portfolio project four",
        },
      ]}
      background="gray"
      pattern="circuitBoardFadeTop"
      patternOpacity={0.9}
    />
  );
}
