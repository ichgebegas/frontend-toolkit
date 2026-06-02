import { HeroStatsSocialProof } from "@opensite/ui/blocks/hero/hero-stats-social-proof";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroStatsSocialProof
      badge="Industry Expertise"
      badgeIcon={<DynamicIcon name="lucide/star" size={16} />}
      heading="Trusted by thousands of businesses"
      description="Join the companies already experiencing transformative results with our platform."
      imageSrc={"https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40"}
      imageAlt="Banner image"
      statusCard={{
        title: "Rated 4.9/5 by over 1,000 users",
        subtitle: "Based on real user reviews from across the globe",
        icon: <DynamicIcon name="lucide/star" size={20} />,
      }}
      stats={[
        { value: "50K+", label: "Active Users" },
        { value: "99.9%", label: "Uptime" },
        { value: "4.9/5", label: "User Rating" },
      ]}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          asButton: true,
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Case Studies",
          href: "#",
          variant: "outline",
          asButton: true,
        },
      ]}
      background="dark"
      pattern="gridFadeCenter"
      patternOpacity={0.15}
    />
  );
}
