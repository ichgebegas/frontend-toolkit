"use client";

import { ContactTenant } from "@opensite/ui/blocks/contact/contact-tenant";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "first_name",
    type: "text",
    label: "First Name",
    placeholder: "First name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "last_name",
    type: "text",
    label: "Last Name",
    placeholder: "Last name",
    required: true,
    columnSpan: 6,
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
    required: true,
    columnSpan: 6,
  },
  {
    name: "unit_number",
    type: "text",
    label: "Unit Number (If Current Tenant)",
    placeholder: "e.g., Apt 204",
    required: false,
    columnSpan: 12,
  },
  {
    name: "request_type",
    type: "radio",
    label: "Request Type",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "maintenance",
        label: "Maintenance Request",
        description: "Report an issue that needs repair or service.",
      },
      {
        value: "lease",
        label: "Lease Inquiry",
        description: "Questions about your lease or rental agreement.",
      },
      {
        value: "payment",
        label: "Payment Issue",
        description: "Billing or payment related questions.",
      },
      {
        value: "noise",
        label: "Noise Complaint",
        description: "Report a noise disturbance.",
      },
      {
        value: "access",
        label: "Access Request",
        description: "Request for property access or keys.",
      },
      {
        value: "other",
        label: "Other",
        description: "General inquiry or other concern.",
      },
    ],
  },
  {
    name: "urgency",
    type: "select",
    label: "Urgency Level",
    required: true,
    columnSpan: 12,
    options: [
      { value: "emergency", label: "Emergency - Immediate attention needed" },
      { value: "urgent", label: "Urgent - Within 24 hours" },
      { value: "normal", label: "Normal - Within 3-5 business days" },
      { value: "low", label: "Low Priority - When convenient" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Describe your request or concern",
    placeholder:
      "Please provide detailed information about your request, including location if applicable, what happened, and when...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "photos",
    type: "file",
    label: "Upload Photos (Optional)",
    placeholder: "Upload photos if they help illustrate the issue...",
    required: false,
    accept: "image/*",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
    columnSpan: 12,
  },
  {
    name: "preferred_contact_time",
    type: "select",
    label: "Best Time to Contact You",
    required: false,
    columnSpan: 12,
    options: [
      { value: "morning", label: "Morning (8am - 12pm)" },
      { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
      { value: "evening", label: "Evening (5pm - 8pm)" },
      { value: "anytime", label: "Anytime" },
    ],
  },
];

export default function Demo() {
  return (
    <ContactTenant
      heading="Tenant Services"
      description="We're here to make your living experience as comfortable as possible. Submit your request below and our property management team will respond promptly."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Your request has been received! Our property management team will review it and contact you shortly. Emergency requests are prioritized and handled immediately.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Request",
          },
        },
      }}
      background="gray"
      pattern="architect"
      patternOpacity={0.1}
    />
  );
}
