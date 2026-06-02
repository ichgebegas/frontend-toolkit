import { FaqCenteredAccordion } from "@opensite/ui/blocks/faq/faq-centered-accordion";

export default function Demo() {
  return (
    <FaqCenteredAccordion
      heading="Have Questions?"
      description="Find answers to the most commonly asked questions about our platform, features, and policies."
      items={[
        {
          id: "features",
          question: "What features are included in the base plan?",
          answer:
            "The base plan includes unlimited projects, 10GB storage, basic reporting, email support, mobile apps, API access, and integrations with 25+ popular tools.",
        },
        {
          id: "team-size",
          question: "Is there a limit on team size?",
          answer:
            "Starter plans support up to 10 users, Professional plans up to 50 users, and Enterprise plans have no user limits with volume discounts available.",
        },
        {
          id: "billing",
          question: "How does billing work?",
          answer:
            "We offer both monthly and annual billing. Annual plans save 20% and are billed once per year. You can upgrade, downgrade, or cancel at any time.",
        },
        {
          id: "mobile",
          question: "Do you have mobile apps?",
          answer:
            "Yes, we have native iOS and Android apps with full feature parity. Download them from the App Store or Google Play and access your work anywhere.",
        },
        {
          id: "customization",
          question: "Can I customize the platform?",
          answer:
            "Absolutely. Customize dashboards, workflows, fields, templates, notifications, and branding. Enterprise plans also support white-labeling and custom domains.",
        },
      ]}
      pattern="grid1"
      patternOpacity={1}
      background="muted"
    />
  );
}
