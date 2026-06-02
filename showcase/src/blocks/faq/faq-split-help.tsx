import { FaqSplitHelp } from "@opensite/ui/blocks/faq/faq-split-help";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FaqSplitHelp
      heading="Support Resources"
      description="Browse our most commonly asked questions or reach out to our support team for personalized assistance."
      items={[
        {
          id: "billing-cycle",
          question: "When will I be charged?",
          answer:
            "Billing occurs on the same day each month or year, depending on your plan. You'll receive an invoice via email 3 days before each billing cycle.",
        },
        {
          id: "refunds",
          question: "What is your refund policy?",
          answer:
            "We offer a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days of your initial purchase for a full refund.",
        },
        {
          id: "upgrades",
          question: "How do plan upgrades work?",
          answer:
            "Upgrades take effect immediately. You'll be charged a prorated amount for the remainder of your billing cycle at the new plan rate.",
        },
        {
          id: "downgrade",
          question: "Can I downgrade my plan?",
          answer:
            "Yes, downgrades take effect at the end of your current billing cycle. You'll continue to have access to your current plan features until then.",
        },
      ]}
      helpHeading="Need More Help?"
      helpDescription="Our support team is available 24/7 to answer your questions and help you get the most out of our platform."
      helpAction={{
        label: "Contact Support Team",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      pattern="gridFadeTop"
      patternOpacity={0.1}
      background="secondary"
    />
  );
}
