import { FaqMutedCards } from "@opensite/ui/blocks/faq/faq-muted-cards";

export default function Demo() {
  return (
    <FaqMutedCards
      heading="Questions & Answers"
      description="Find answers to common questions about our platform, features, and pricing."
      items={[
        {
          id: "storage",
          question: "How much storage do I get?",
          answer:
            "Starter plans include 10GB, Professional plans include 100GB, and Enterprise plans offer unlimited storage. All plans support file uploads up to 2GB per file.",
        },
        {
          id: "users",
          question: "Can I add more users later?",
          answer:
            "Yes, you can add users at any time. Additional users are billed on a prorated basis for the remainder of your billing cycle.",
        },
        {
          id: "sso",
          question: "Do you support single sign-on?",
          answer:
            "SSO with SAML 2.0 is available on Professional and Enterprise plans. We support Google, Microsoft, Okta, OneLogin, and custom identity providers.",
        },
        {
          id: "backups",
          question: "Are backups included?",
          answer:
            "Yes, we automatically backup all data every 6 hours with 30-day retention. Enterprise plans get 90-day retention and on-demand backups.",
        },
        {
          id: "api-limits",
          question: "What are the API rate limits?",
          answer:
            "Starter: 1,000 requests/hour, Professional: 10,000 requests/hour, Enterprise: custom limits. Rate limits reset every hour.",
        },
        {
          id: "webhooks",
          question: "Do you support webhooks?",
          answer:
            "Yes, webhooks are available on all plans. Set up real-time notifications for events like new projects, task updates, comments, and more.",
        },
      ]}
      background="secondary"
      pattern="gridDotsBasic"
      patternOpacity={0.15}
    />
  );
}
