import { FaqCategorizedSections } from "@opensite/ui/blocks/faq/faq-categorized-sections";

export default function Demo() {
  return (
    <FaqCategorizedSections
      heading="Help Center"
      description="Browse questions organized by category to find exactly what you need."
      categories={[
        {
          title: "Account & Billing",
          items: [
            {
              id: "payment-methods",
              question: "What payment methods do you accept?",
              answer:
                "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, and wire transfers for Enterprise plans. All payments are processed securely.",
            },
            {
              id: "invoices",
              question: "How do I access my invoices?",
              answer:
                "View and download all invoices from your account settings under the Billing section. Invoices are also emailed automatically after each payment.",
            },
          ],
        },
        {
          title: "Features & Functionality",
          items: [
            {
              id: "api-access",
              question: "Is API access available?",
              answer:
                "Yes, all plans include API access with rate limits based on your plan tier. Full API documentation is available in our developer portal.",
            },
            {
              id: "templates",
              question: "Can I create custom templates?",
              answer:
                "Professional and Enterprise plans allow you to create unlimited custom templates for projects, tasks, and reports. Save time with reusable workflows.",
            },
          ],
        },
        {
          title: "Security & Privacy",
          items: [
            {
              id: "data-encryption",
              question: "Is my data encrypted?",
              answer:
                "Yes, all data is encrypted in transit (TLS 1.3) and at rest (AES-256). We also support customer-managed encryption keys for Enterprise customers.",
            },
            {
              id: "compliance",
              question: "What compliance certifications do you have?",
              answer:
                "We are SOC 2 Type II certified and compliant with GDPR, CCPA, HIPAA, and ISO 27001 standards. Compliance documentation is available upon request.",
            },
          ],
        },
      ]}
      background="gray"
    />
  );
}
