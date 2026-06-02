"use client";

import { ContactCard } from "@opensite/ui/blocks/contact/contact-card";
import { demoFormConfig, demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Full Name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Your Message",
    placeholder: "How can we help you today?",
    required: true,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactCard
      heading="Get In Touch"
      description="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      contactOptions={[
        {
          icon: "lucide/phone",
          info: "+1 (555) 987-6543",
          href: "tel:+15559876543",
        },
        {
          icon: "lucide/mail",
          info: "support@example.com",
          href: "mailto:support@example.com",
        },
        {
          icon: "lucide/map-pin",
          info: "456 Business Ave, New York, NY 10001",
          href: "https://maps.google.com",
        },
        {
          icon: "lucide/clock",
          info: "Mon-Fri: 9 AM - 6 PM EST",
          href: "#",
        },
      ]}
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thanks for reaching out! We'll be in touch soon.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Send Message",
          },
        },
      }}
      background="gray"
      pattern="gridFadeTopRight"
      patternOpacity={0.9}
    />
  );
}
