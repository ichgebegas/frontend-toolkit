import { FaqBorderedBadge } from "@opensite/ui/blocks/faq/faq-bordered-badge";

export default function Demo() {
  return (
    <FaqBorderedBadge
      badge="FAQ"
      badgeIcon="lucide/help-circle"
      heading="Everything You Need to Know"
      description="Get answers to common questions about features, pricing, and platform capabilities."
      items={[
        {
          id: "migration",
          question: "Do you help with migration from other platforms?",
          answer:
            "Yes, we provide free migration assistance on Professional and Enterprise plans. Our team will help you import data, set up workflows, and train your team.",
        },
        {
          id: "languages",
          question: "What languages are supported?",
          answer:
            "The platform is available in English, Spanish, French, German, Portuguese, Japanese, and Chinese. More languages are added regularly based on demand.",
        },
        {
          id: "reporting",
          question: "Can I create custom reports?",
          answer:
            "Professional and Enterprise plans include custom report builders with drag-and-drop fields, filters, and visualizations. Schedule automated reports via email.",
        },
        {
          id: "collaboration",
          question: "How does guest access work?",
          answer:
            "Invite external collaborators as guests with limited permissions. Guests can access specific projects but can't see team data or billing information.",
        },
      ]}
    />
  );
}
