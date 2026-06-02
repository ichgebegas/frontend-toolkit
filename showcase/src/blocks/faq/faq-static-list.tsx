import { FaqStaticList } from "@opensite/ui/blocks/faq/faq-static-list";

export default function Demo() {
  return (
    <FaqStaticList
      heading="Common Questions"
      description="Here are some of our most frequently asked questions. If you don't see your question here, feel free to reach out to our support team."
      items={[
        {
          question: "How do I get started?",
          answer:
            "Getting started is simple: sign up for a free account, complete the onboarding wizard, invite your team members, and you're ready to go. The entire process takes less than 5 minutes.",
        },
        {
          question: "Do you offer training resources?",
          answer:
            "Yes, we provide comprehensive training including video tutorials, detailed documentation, live webinars, and a knowledge base with hundreds of articles covering all features.",
        },
        {
          question: "What's your uptime guarantee?",
          answer:
            "We maintain a 99.9% uptime SLA with redundant infrastructure across multiple regions. In the unlikely event of downtime, we provide credits as outlined in our service agreement.",
        },
        {
          question: "Can I import data from other tools?",
          answer:
            "Absolutely. We support data imports from CSV files and offer migration assistance from popular platforms including Asana, Trello, Monday.com, and more.",
        },
        {
          question: "Are there any hidden fees?",
          answer:
            "No hidden fees whatsoever. Your monthly or annual subscription covers everything. Optional add-ons like premium integrations or additional storage are clearly priced upfront.",
        },
      ]}
      pattern="diagonalCrossFadeBottomRight"
      patternOpacity={0.11}
      background="dark"
    />
  );
}
