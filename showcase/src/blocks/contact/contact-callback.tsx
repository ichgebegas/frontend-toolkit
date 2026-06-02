"use client";

import { ContactCallback } from "@opensite/ui/blocks/contact/contact-callback";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Full Name",
    required: true,
    columnSpan: 12,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
    required: true,
    columnSpan: 12,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    required: false,
    columnSpan: 12,
  },
  {
    name: "callback_time",
    type: "radio",
    label: "Preferred Callback Time",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "morning",
        label: "Morning",
        description: "8 AM - 12 PM",
      },
      {
        value: "afternoon",
        label: "Afternoon",
        description: "12 PM - 5 PM",
      },
      {
        value: "evening",
        label: "Evening",
        description: "5 PM - 8 PM",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "What can we help you with?",
    placeholder: "Briefly describe what you'd like to discuss...",
    required: false,
    rows: 3,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactCallback
      heading="Request a Callback"
      description="Prefer to talk? Leave your number and our team will call you back at your preferred time. We typically respond within 2-4 hours during business hours."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you! We'll call you back during your preferred time window.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Request Callback",
          },
        },
      }}
      background="gray"
      pattern="dashedGridFadeTop"
      patternOpacity={1}
    />
  );
}
