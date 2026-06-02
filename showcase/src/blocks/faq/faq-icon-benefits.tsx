import { FaqIconBenefits } from "@opensite/ui/blocks/faq/faq-icon-benefits";

export default function Demo() {
  return (
    <FaqIconBenefits
      heading="Why Choose Our Platform"
      description="Discover the benefits that set us apart from the competition."
      benefits={[
        {
          icon: "lucide/zap",
          title: "Lightning Fast",
          description:
            "Optimized performance with sub-100ms response times globally. Work faster with instant updates and real-time sync across all devices.",
        },
        {
          icon: "lucide/shield-check",
          title: "Enterprise Security",
          description:
            "Bank-level encryption, SOC 2 Type II certification, and compliance with GDPR, HIPAA, and ISO 27001 standards. Your data is always protected.",
        },
        {
          icon: "lucide/users",
          title: "Built for Teams",
          description:
            "Intuitive collaboration tools including comments, mentions, file sharing, and real-time editing. Keep everyone aligned and productive.",
        },
        {
          icon: "lucide/layout-dashboard",
          title: "Customizable Workflows",
          description:
            "Adapt the platform to your unique processes with custom fields, templates, automations, and integrations. Make it work your way.",
        },
        {
          icon: "lucide/headphones",
          title: "24/7 Support",
          description:
            "Get help when you need it with round-the-clock email support, live chat, and comprehensive documentation. Premium support for paid plans.",
        },
        {
          icon: "lucide/trending-up",
          title: "Scalable Solution",
          description:
            "Start small and grow big. Our infrastructure scales automatically to handle teams of 5 or 5,000 without performance degradation.",
        },
      ]}
      pattern="gridFadeCenter"
      patternOpacity={0.25}
      background="secondary"
    />
  );
}
