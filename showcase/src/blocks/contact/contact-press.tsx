"use client";

import { ContactPress } from "@opensite/ui/blocks/contact/contact-press";
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
    placeholder: "your@publication.com",
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
    name: "publication",
    type: "text",
    label: "Publication/Outlet",
    placeholder: "Name of your publication or media outlet",
    required: true,
    columnSpan: 12,
  },
  {
    name: "title",
    type: "text",
    label: "Job Title",
    placeholder: "e.g., Journalist, Editor, Producer",
    required: true,
    columnSpan: 6,
  },
  {
    name: "website",
    type: "url",
    label: "Publication Website",
    placeholder: "https://example.com",
    required: false,
    columnSpan: 6,
  },
  {
    name: "inquiry_type",
    type: "select",
    label: "Type of Inquiry",
    required: true,
    columnSpan: 12,
    options: [
      { value: "interview", label: "Interview Request" },
      { value: "quote", label: "Quote/Statement Request" },
      { value: "story", label: "Story Pitch" },
      { value: "event", label: "Event Coverage" },
      { value: "press_kit", label: "Press Kit Request" },
      { value: "fact_check", label: "Fact Checking" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "deadline",
    type: "date-picker",
    label: "Deadline",
    placeholder: "Select deadline date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "urgency",
    type: "select",
    label: "Urgency Level",
    required: true,
    columnSpan: 6,
    options: [
      { value: "immediate", label: "Immediate (same day)" },
      { value: "24hrs", label: "Within 24 hours" },
      { value: "48hrs", label: "Within 48 hours" },
      { value: "week", label: "Within a week" },
      { value: "flexible", label: "Flexible" },
    ],
  },
  {
    name: "topics",
    type: "checkbox-group",
    label: "Topics of Interest",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "company_news",
        label: "Company News",
        description: "Latest announcements and updates.",
      },
      {
        value: "products",
        label: "Products & Services",
        description: "Product launches and features.",
      },
      {
        value: "leadership",
        label: "Leadership",
        description: "Executive interviews and insights.",
      },
      {
        value: "industry",
        label: "Industry Trends",
        description: "Market analysis and commentary.",
      },
      {
        value: "research",
        label: "Research & Data",
        description: "Studies and reports.",
      },
      {
        value: "social_impact",
        label: "Social Impact",
        description: "CSR and community initiatives.",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Inquiry Details",
    placeholder: "Please provide details about your inquiry, questions you'd like answered, angle of the story, etc...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
  {
    name: "previous_work",
    type: "url",
    label: "Link to Previous Work",
    placeholder: "https://example.com/your-article",
    required: false,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactPress
      heading="Press & Media Inquiries"
      description="Thank you for your interest in covering our story. Complete the form below and our communications team will respond as quickly as possible."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for reaching out! Our media relations team will review your inquiry and respond according to your deadline.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Media Inquiry",
          },
        },
      }}
      background="muted"
      pattern="dashedGridFadeTop"
      patternOpacity={0.5}
    />
  );
}
