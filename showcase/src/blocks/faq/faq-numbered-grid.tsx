import { FaqNumberedGrid } from "@opensite/ui/blocks/faq/faq-numbered-grid";

export default function Demo() {
  return (
    <FaqNumberedGrid
      heading="Platform Features"
      description="Discover the key features that make our platform the best choice for modern teams."
      items={[
        {
          question: "Real-time collaboration",
          answer:
            "Work together seamlessly with live updates, comments, mentions, and simultaneous editing. See who's online and what they're working on.",
        },
        {
          question: "Advanced analytics",
          answer:
            "Track performance with customizable dashboards, detailed reports, and actionable insights. Export data and create automated reports.",
        },
        {
          question: "Workflow automation",
          answer:
            "Automate repetitive tasks with triggers, rules, and integrations. Save time and reduce errors with smart automation.",
        },
        {
          question: "Enterprise security",
          answer:
            "Bank-level encryption, SSO, two-factor authentication, audit logs, and compliance with major security standards.",
        },
        {
          question: "Mobile access",
          answer:
            "Native iOS and Android apps with offline mode. Access and edit your work from anywhere, even without internet.",
        },
        {
          question: "Custom branding",
          answer:
            "White-label the platform with your logo, colors, and domain. Create a seamless experience for your team and clients.",
        },
      ]}
      pattern="dashedGridBasic"
      patternOpacity={0.15}
      background="secondary"
    />
  );
}
