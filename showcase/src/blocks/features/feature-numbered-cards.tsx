import { FeatureNumberedCards } from "@opensite/ui/blocks/features/feature-numbered-cards";

export default function Demo() {
  return (
    <FeatureNumberedCards
      features={[
        {
          title: "Secure Payment Processing",
          description:
            "Accept payments globally with enterprise-grade security and compliance built in from day one.",
          image: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
          imageAlt: "Secure payment processing interface",
          checklistItems: [
            "PCI DSS Level 1 certified infrastructure",
            "End-to-end encryption for all transactions",
            "Real-time fraud detection and prevention",
            "Support for 135+ currencies worldwide",
          ],
        },
        {
          title: "Instant Notifications",
          description:
            "Keep your team and customers informed with intelligent notification systems across all channels.",
          image: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt",
          imageAlt: "Notification dashboard",
          checklistItems: [
            "Multi-channel delivery (email, SMS, push)",
            "Customizable templates and branding",
            "Delivery tracking and analytics",
            "Smart throttling and user preferences",
          ],
        },
        {
          title: "Advanced Reporting",
          description:
            "Transform raw data into actionable insights with powerful analytics and customizable reports.",
          image: "https://toastability-production.s3.amazonaws.com/yrp5k5xszwpe26fquupey6a6g0uu",
          imageAlt: "Analytics dashboard",
          checklistItems: [
            "Real-time data visualization",
            "Custom report builder with drag-and-drop",
            "Scheduled report delivery",
            "Export to CSV, PDF, or Excel",
          ],
        },
      ]}
      pattern="grid1"
      patternOpacity={0.08}
      background="secondary"
    />
  );
}
