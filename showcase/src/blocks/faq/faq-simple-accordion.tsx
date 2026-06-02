import { FaqSimpleAccordion } from "@opensite/ui/blocks/faq/faq-simple-accordion";

export default function Demo() {
  return (
    <FaqSimpleAccordion
      heading="Frequently Asked Questions"
      description="Find answers to common questions about our product, billing, and support."
      pattern="p6"
      patternOpacity={0.9}
      background="white"
      items={[
        {
          id: "pricing",
          question: "What pricing plans do you offer?",
          answer:
            "We offer three flexible pricing plans to suit businesses of all sizes: Starter ($29/month), Professional ($99/month), and Enterprise (custom pricing). All plans include core features with varying limits on users, storage, and advanced capabilities.",
        },
        {
          id: "trial",
          question: "Is there a free trial available?",
          answer:
            "Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required to start your trial, and you can cancel anytime.",
        },
        {
          id: "integration",
          question: "What integrations are supported?",
          answer:
            "We integrate with over 50+ popular tools including Slack, Salesforce, HubSpot, Google Workspace, Microsoft Teams, Zoom, and many more. Our API also allows for custom integrations.",
        },
        {
          id: "data-security",
          question: "How do you handle data security?",
          answer:
            "We take security seriously with SOC 2 Type II certification, end-to-end encryption, regular security audits, and compliance with GDPR, CCPA, and HIPAA standards. Your data is stored in secure, redundant data centers.",
        },
        {
          id: "support",
          question: "What kind of support do you provide?",
          answer:
            "All plans include email support with 24-hour response time. Professional and Enterprise plans get priority support, live chat, phone support, and a dedicated account manager for Enterprise customers.",
        },
        {
          id: "cancel",
          question: "Can I cancel my subscription at any time?",
          answer:
            "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access until the end of your billing period.",
        },
      ]}
    />
  );
}
