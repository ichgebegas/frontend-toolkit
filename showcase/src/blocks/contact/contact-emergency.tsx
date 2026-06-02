"use client";

import { ContactEmergency } from "@opensite/ui/blocks/contact/contact-emergency";
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
    columnSpan: 6,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    required: false,
    columnSpan: 6,
  },
  {
    name: "urgency",
    type: "radio",
    label: "Urgency Level",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "critical",
        label: "Critical",
        description: "Immediate attention required.",
      },
      {
        value: "urgent",
        label: "Urgent",
        description: "Within 1 hour.",
      },
      {
        value: "high",
        label: "High Priority",
        description: "Within 4 hours.",
      },
      {
        value: "medium",
        label: "Medium Priority",
        description: "Within 8 hours.",
      },
    ],
  },
  {
    name: "location",
    type: "text",
    label: "Location/Address",
    placeholder: "Where is the emergency?",
    required: true,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Describe the Emergency",
    placeholder:
      "Please provide as much detail as possible about the situation...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

const contactItems = [
  {
    icon: "lucide/mail",
    title: "Email",
    subtitle: "support@moderncommerce.com",
    href: "mailto:support@moderncommerce.com",
  },
  {
    icon: "lucide/phone",
    title: "Phone",
    subtitle: "+1 (888) 555-7890",
    href: "tel:+18885557890",
  },
  {
    icon: "lucide/map-pin",
    title: "Address",
    subtitle: "123 Commerce Street, New York, NY 10001",
    href: "https://maps.google.com",
  },
]

export default function Demo() {
  return (
    <ContactEmergency
      heading="Emergency Support"
      description="If you're experiencing an urgent issue, submit this form and our emergency response team will contact you immediately. For life-threatening emergencies, call 911."
      contactItems={contactItems}
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Emergency request received! Our team has been notified and will contact you immediately.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Emergency Request",
          },
        },
      }}
      background="gray"
    />
  );
}
