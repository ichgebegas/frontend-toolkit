import { FaqCardCategories } from "@opensite/ui/blocks/faq/faq-card-categories";

export default function Demo() {
  return (
    <FaqCardCategories
      heading="Explore Topics"
      description="Select a topic to view related questions and answers."
      categories={[
        {
          title: "Pricing & Plans",
          items: [
            {
              id: "free-plan",
              question: "Do you offer a free plan?",
              answer:
                "We offer a 14-day free trial with full access to Professional features. After the trial, choose from our Starter, Professional, or Enterprise plans.",
            },
            {
              id: "enterprise-pricing",
              question: "How is Enterprise pricing determined?",
              answer:
                "Enterprise pricing is customized based on your team size, feature requirements, and support needs. Contact our sales team for a personalized quote.",
            },
          ],
        },
        {
          title: "Technical Details",
          items: [
            {
              id: "browser-support",
              question: "Which browsers are supported?",
              answer:
                "We support the latest versions of Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported. Mobile browsers on iOS and Android are fully supported.",
            },
            {
              id: "offline-mode",
              question: "Does offline mode work?",
              answer:
                "Yes, our mobile apps support offline mode. View and edit content without internet, and changes sync automatically when you reconnect.",
            },
          ],
        },
        {
          title: "Data & Privacy",
          items: [
            {
              id: "data-location",
              question: "Where is my data stored?",
              answer:
                "Data is stored in secure AWS data centers. You can choose your preferred region (US, EU, or Asia-Pacific) to comply with data residency requirements.",
            },
            {
              id: "data-deletion",
              question: "What happens to my data if I cancel?",
              answer:
                "Your data is retained for 30 days after cancellation. During this period, you can reactivate your account or export your data. After 30 days, data is permanently deleted.",
            },
          ],
        },
      ]}
      background="gray"
      pattern="diagonalCrossFadeTop"
      patternOpacity={1}
    />
  );
}
