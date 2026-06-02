import { FaqBadgeSupport } from "@opensite/ui/blocks/faq/faq-badge-support";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FaqBadgeSupport
      badge="Support"
      heading="Frequently Asked Questions"
      description="Can't find what you're looking for? Our support team is here to help."
      items={[
        {
          id: "account",
          question: "How do I reset my password?",
          answer:
            "Click 'Forgot Password' on the login page, enter your email, and we'll send you a secure reset link. The link expires after 24 hours for security.",
        },
        {
          id: "roles",
          question: "What user roles are available?",
          answer:
            "We offer Admin, Manager, Member, and Guest roles. Each role has specific permissions for viewing, editing, and managing content and team members.",
        },
        {
          id: "notifications",
          question: "Can I customize notification settings?",
          answer:
            "Yes, you have granular control over email, push, and in-app notifications. Set preferences for mentions, updates, deadlines, and more.",
        },
        {
          id: "export",
          question: "Can I export my data?",
          answer:
            "Yes, export your data anytime in CSV, Excel, or JSON formats. Enterprise plans also support automated exports and API-based data retrieval.",
        },
      ]}
      supportText="Still have questions?"
      supportAction={{
        label: "Contact Support",
        href: "#",
        variant: "default",
        asButton: true,
        size: "lg",
        iconAfter: <DynamicIcon name="lucide/arrow-up-right" />,
      }}
      pattern="architect"
      patternOpacity={0.05}
      background="gray"
    />
  );
}
