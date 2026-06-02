"use client";

import { ContactLocations } from "@opensite/ui/blocks/contact/contact-locations";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Enter your name",
    required: true,
    columnSpan: 12,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 6,
  },
  {
    name: "location",
    type: "select",
    label: "Preferred Location",
    required: true,
    columnSpan: 12,
    options: [
      {
        value: "new-york",
        label: "New York, NY",
        description: "Our flagship location.",
      },
      {
        value: "san-francisco",
        label: "San Francisco, CA",
        description: "West coast headquarters.",
      },
      {
        value: "chicago",
        label: "Chicago, IL",
        description: "Midwest regional office.",
      },
      {
        value: "austin",
        label: "Austin, TX",
        description: "Southern regional office.",
      },
      {
        value: "remote",
        label: "Remote / Virtual",
        description: "Connect with us online.",
      },
    ],
  },
  {
    name: "inquiry_type",
    type: "radio",
    label: "How Can We Help?",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "sales",
        label: "Sales Inquiry",
        description: "Learn about our products and services.",
      },
      {
        value: "support",
        label: "Customer Support",
        description: "Get help with an existing account.",
      },
      {
        value: "partnership",
        label: "Partnership",
        description: "Explore collaboration opportunities.",
      },
      {
        value: "visit",
        label: "Schedule a Visit",
        description: "Plan an in-person meeting.",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Your Message",
    placeholder: "Tell us more about your inquiry...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactLocations
      heading="Visit Us"
      description="We have offices across the country. Find the location nearest you or schedule a virtual meeting with our team."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for reaching out! We'll get back to you within 1 business day.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Send Message",
          },
        },
      }}
      background="white"
      pattern="dots"
      patternOpacity={0.3}
    />
  );
}
