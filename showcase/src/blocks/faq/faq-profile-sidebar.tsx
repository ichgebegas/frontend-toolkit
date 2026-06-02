import { FaqProfileSidebar } from "@opensite/ui/blocks/faq/faq-profile-sidebar";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FaqProfileSidebar
      heading="Expert Answers"
      description="Our team of experts has compiled answers to the most frequently asked questions to help you get the most out of our platform."
      items={[
        {
          id: "implementation",
          question: "How long does implementation take?",
          answer:
            "Most teams are up and running within a week. Our onboarding specialists guide you through setup, data migration, and team training to ensure a smooth transition.",
        },
        {
          id: "scalability",
          question: "Can the platform scale with my business?",
          answer:
            "Absolutely. Our infrastructure is built to scale from startups to enterprises. Automatic scaling handles traffic spikes, and you can add unlimited users and storage.",
        },
        {
          id: "custom-dev",
          question: "Do you offer custom development?",
          answer:
            "Yes, Enterprise customers can request custom features, integrations, and workflows. Our professional services team works with you to build tailored solutions.",
        },
        {
          id: "sla",
          question: "What are your SLA guarantees?",
          answer:
            "We guarantee 99.9% uptime with redundant infrastructure. Enterprise plans include priority support with 1-hour response times and dedicated account management.",
        },
        {
          id: "security",
          question: "How do you ensure data security?",
          answer:
            "We follow industry best practices for security, including encryption at rest and in transit, regular security audits, and compliance with GDPR and SOC 2 standards.",
        },
        {
          id: "integrations",
          question: "What integrations are available?",
          answer:
            "Our platform integrates with popular tools like Slack, Salesforce, and Google Workspace. We also offer an open API for custom integrations.",
        },
        {
          id: "mobile",
          question: "Is there a mobile app?",
          answer:
            "Yes, our mobile app is available on iOS and Android, allowing you to access your data and collaborate with your team on the go.",
        },
      ]}
      profileImage="https://toastability-production.s3.amazonaws.com/3nqc7xvjy3e8d7jo1gdvbzty0oqg"
      profileName="Sarah Chen"
      profileRole="Customer Success Manager"
      profileDescription="With over 8 years of experience helping teams maximize their productivity, I'm here to ensure you get the most value from our platform."
      contactText="Have a question not covered here?"
      contactAction={{
        label: "Schedule a Call",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      pattern="architect"
      patternOpacity={0.1}
      background="gray"
    />
  );
}
