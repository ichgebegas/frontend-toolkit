"use client";

import { ContactConsultation } from "@opensite/ui/blocks/contact/contact-consultation";
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
    name: "company",
    type: "text",
    label: "Company Name",
    placeholder: "Your company",
    required: false,
    columnSpan: 6,
  },
  {
    name: "industry",
    type: "select",
    label: "Industry",
    required: false,
    columnSpan: 6,
    options: [
      {
        value: "technology",
        label: "Technology",
      },
      {
        value: "healthcare",
        label: "Healthcare",
      },
      {
        value: "finance",
        label: "Finance",
      },
      {
        value: "retail",
        label: "Retail",
      },
      {
        value: "manufacturing",
        label: "Manufacturing",
      },
      {
        value: "education",
        label: "Education",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
  },
  {
    name: "consultation_type",
    type: "radio",
    label: "Consultation Type",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "strategy",
        label: "Strategy Session",
        description: "Long-term planning and roadmap.",
      },
      {
        value: "technical",
        label: "Technical Consultation",
        description: "Architecture and implementation review.",
      },
      {
        value: "discovery",
        label: "Discovery Call",
        description: "Initial project exploration.",
      },
      {
        value: "followup",
        label: "Follow-up Session",
        description: "Continue previous discussion.",
      },
    ],
  },
  {
    name: "preferred_date",
    type: "date-picker",
    label: "Preferred Date",
    placeholder: "Select a date",
    required: false,
    columnSpan: 6,
  },
  {
    name: "time_preference",
    type: "select",
    label: "Preferred Time",
    required: false,
    columnSpan: 6,
    options: [
      {
        value: "morning",
        label: "Morning (9 AM - 12 PM)",
      },
      {
        value: "afternoon",
        label: "Afternoon (12 PM - 5 PM)",
      },
      {
        value: "evening",
        label: "Evening (5 PM - 7 PM)",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "What would you like to discuss?",
    placeholder: "Tell us about your goals, challenges, and what you hope to achieve from this consultation...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactConsultation
      heading="Schedule a Free Consultation"
      description="Book a 30-minute strategy session with our experts. We'll discuss your goals, challenges, and how we can help you succeed."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for booking! We'll confirm your consultation time within 24 hours and send you a calendar invite.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Book Consultation",
          },
        },
      }}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.2}
    />
  );
}
