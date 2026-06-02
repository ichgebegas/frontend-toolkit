import { FeatureAnimatedCarousel } from "@opensite/ui/blocks/features/feature-animated-carousel";

export default function Demo() {
  return (
    <FeatureAnimatedCarousel
      title="Elevate Your Projects"
      description="Discover the powerful features that set our platform apart. From lightning-fast performance to seamless scalability, explore how we can help you build, deploy, and manage your applications with ease."
      features={[
        {
          title: "Lightning Fast Performance",
          description:
            "Optimized for speed with sub-100ms response times globally. Edge computing and intelligent caching ensure your users get the best experience.",
          image: "https://toastability-production.s3.amazonaws.com/0o6d7z4mm9nzeufhv9kefrhihbip",
          imageAlt: "Performance dashboard",
          href: "#",
        },
        {
          title: "Enterprise Security",
          description:
            "Bank-level encryption with SOC 2 Type II compliance. Automated security scanning and regular penetration testing keep your data safe.",
          image: "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u",
          imageAlt: "Security features",
          href: "#",
        },
        {
          title: "Seamless Scalability",
          description:
            "From zero to millions of users without configuration. Auto-scaling infrastructure handles demand spikes automatically.",
          image: "https://toastability-production.s3.amazonaws.com/6fffnb4phovtqkjhtzifs4rhb84u",
          imageAlt: "Scalability metrics",
          href: "#",
        },
        {
          title: "Real-Time Collaboration",
          description:
            "Built-in tools for team communication, code review, and project management. Keep everyone aligned and productive.",
          image: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
          imageAlt: "Collaboration tools",
          href: "#",
        },
      ]}
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={1}
    />
  );
}
