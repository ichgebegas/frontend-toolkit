import { FaqGradientCategories } from "@opensite/ui/blocks/faq/faq-gradient-categories";

export default function Demo() {
  return (
    <FaqGradientCategories
      heading="Browse by Topic"
      description="Select a category to explore relevant questions and detailed answers."
      pattern="gridFadeTopLeft"
      patternOpacity={0.2}
      background="gradient"
      spacing="py-6 md:py-32"
      categories={[
        {
          title: "Product Features",
          items: [
            {
              id: "dashboards",
              question: "Can I customize my dashboard?",
              answer:
                "Yes, create multiple custom dashboards with widgets for tasks, charts, calendars, and metrics. Save different layouts for different use cases.",
            },
            {
              id: "permissions",
              question: "How do permissions work?",
              answer:
                "Set granular permissions at the workspace, project, and task levels. Control who can view, edit, comment, or manage content with role-based access.",
            },
          ],
        },
        {
          title: "Integration & API",
          items: [
            {
              id: "zapier",
              question: "Do you integrate with Zapier?",
              answer:
                "Yes, our Zapier integration enables connections with 5,000+ apps. Automate workflows between your tools without writing code.",
            },
            {
              id: "webhooks-setup",
              question: "How do I set up webhooks?",
              answer:
                "Navigate to Settings > Integrations > Webhooks. Add your endpoint URL, select events to monitor, and save. Test webhooks before going live.",
            },
          ],
        },
        {
          title: "Support & Resources",
          items: [
            {
              id: "documentation",
              question: "Where can I find documentation?",
              answer:
                "Our knowledge base at docs.example.com includes guides, tutorials, API references, and best practices. Search by topic or browse by category.",
            },
            {
              id: "community",
              question: "Is there a user community?",
              answer:
                "Join our community forum with 50,000+ active users. Share tips, ask questions, vote on feature requests, and connect with other power users.",
            },
          ],
        },
      ]}
    />
  );
}
