import { HeroCenteredGradientCta } from "@opensite/ui/blocks/hero/hero-centered-gradient-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCenteredGradientCta
      badge="Limited Time Offer"
      heading="Transform your workflow today"
      description="Join thousands of teams who have revolutionized their productivity. Get started in minutes with our intuitive platform."
      actions={[
        {
          label: "Get Started Free",
          href: "#",
          variant: "secondary",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Schedule Demo",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/video" size={16} />,
        },
      ]}
      background="gradient"
      features={[
        {
          title: "Lightning Fast Performance",
          description:
            "Optimized for speed with sub-100ms response times globally. Edge computing and intelligent caching ensure your users get the best experience.",
          href: "#",
          icon: <DynamicIcon name="lucide/bolt" size={16} />,
        },
        {
          title: "Enterprise Security",
          description:
            "Bank-level encryption with SOC 2 Type II compliance. Automated security scanning and regular penetration testing keep your data safe.",
          href: "#",
          icon: <DynamicIcon name="lucide/shield-check" size={16} />,
        },
        {
          title: "Seamless Scalability",
          description:
            "From zero to millions of users without configuration. Auto-scaling infrastructure handles demand spikes automatically.",
          href: "#",
          icon: <DynamicIcon name="lucide/server" size={16} />,
        },
        {
          title: "Real-Time Collaboration",
          description:
            "Built-in tools for team communication, code review, and project management. Keep everyone aligned and productive.",
          href: "#",
          icon: <DynamicIcon name="lucide/users" size={16} />,
        },
      ]}
    />
  );
}
