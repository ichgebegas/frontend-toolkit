"use client";

import { ContactHelpCenter } from "@opensite/ui/blocks/contact/contact-help-center";

export default function Demo() {
  return (
    <ContactHelpCenter
      heading="How Can We Help?"
      description="Can't find the answer you're looking for? Our support team is here to help."
      background="gradient"
      pattern="dashedGridBasic"
      patternOpacity={0.15}
      cardTitle="Quick Actions"
      contactItems={[
        {
          icon: "lucide/book-open",
          title: "Documentation",
          subtitle: "Browse our comprehensive guides and tutorials.",
          href: "#",
        },
        {
          icon: "lucide/youtube",
          title: "Video Tutorials",
          subtitle: "Watch step-by-step video walkthroughs.",
          href: "#",
        },
        {
          icon: "lucide/message-circle",
          title: "Community Forum",
          subtitle: "Connect with other users and share tips.",
          href: "#",
        },
        {
          icon: "lucide/zap",
          title: "Status Page",
          subtitle: "Check system status and uptime.",
          href: "#",
        },
        {
          icon: "lucide/headphones",
          title: "Live Chat",
          subtitle: "Available Mon-Fri, 9am-6pm EST",
          href: "#",
        },
        {
          icon: "lucide/phone",
          title: "Phone Support",
          subtitle: "+1 (555) 123-4567",
          href: "tel:+15551234567",
        },
      ]}
    />
  );
}
