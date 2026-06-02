"use client";

import { ContactInsurance } from "@opensite/ui/blocks/contact/contact-insurance";
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
    name: "dob",
    type: "date-picker",
    label: "Date of Birth",
    placeholder: "Select date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "zip",
    type: "text",
    label: "ZIP Code",
    placeholder: "12345",
    required: true,
    columnSpan: 6,
  },
  {
    name: "insurance_type",
    type: "radio",
    label: "Type of Insurance",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "auto",
        label: "Auto Insurance",
        description: "Coverage for your vehicle.",
      },
      {
        value: "home",
        label: "Home Insurance",
        description: "Protection for your property.",
      },
      {
        value: "life",
        label: "Life Insurance",
        description: "Security for your loved ones.",
      },
      {
        value: "health",
        label: "Health Insurance",
        description: "Medical coverage plans.",
      },
      {
        value: "business",
        label: "Business Insurance",
        description: "Commercial coverage options.",
      },
    ],
  },
  {
    name: "coverage_amount",
    type: "select",
    label: "Desired Coverage Amount",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "100k", label: "$100,000" },
      { value: "250k", label: "$250,000" },
      { value: "500k", label: "$500,000" },
      { value: "1m", label: "$1,000,000" },
      { value: "custom", label: "Custom Amount" },
    ],
  },
  {
    name: "currently_insured",
    type: "radio",
    label: "Currently Insured?",
    required: true,
    columnSpan: 12,
    layout: "stacked",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Additional Information",
    placeholder:
      "Tell us about your insurance needs, any claims history, or specific coverage requirements...",
    required: false,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactInsurance
      heading="Get Your Free Quote"
      description="Find the right insurance coverage to protect what matters most. Fill out the form below and receive a personalized quote within 24 hours."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you! We're preparing your personalized quote and will contact you within 24 hours with your options.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Get Free Quote",
          },
        },
      }}
      background="gradient"
      pattern="gridBasic"
      patternOpacity={0.2}
    />
  );
}
