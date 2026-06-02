"use client";

import { ContactMinimal } from "@opensite/ui/blocks/contact/contact-minimal";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Name",
    placeholder: "Your name",
    required: true,
    columnSpan: 12,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 12,
  },
  {
    name: "subject",
    type: "text",
    label: "Subject",
    placeholder: "What is this regarding?",
    required: true,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Message",
    placeholder: "Your message...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactMinimal
      heading="Get in Touch"
      description="Have a question or want to work together? We'd love to hear from you."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your message! We'll get back to you soon.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Send Message",
          },
        },
      }}
      background="white"
    />
  );
}
