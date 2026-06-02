"use client";

import { ContactMultistep } from "@opensite/ui/blocks/contact/contact-multistep";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Full name",
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
    name: "company_size",
    type: "select",
    label: "Company Size",
    required: false,
    columnSpan: 6,
    options: [
      { value: "1-10", label: "1-10 employees" },
      { value: "11-50", label: "11-50 employees" },
      { value: "51-200", label: "51-200 employees" },
      { value: "201-500", label: "201-500 employees" },
      { value: "501+", label: "501+ employees" },
    ],
  },
  {
    name: "industry",
    type: "select",
    label: "Industry",
    required: true,
    columnSpan: 12,
    options: [
      { value: "technology", label: "Technology" },
      { value: "finance", label: "Finance & Banking" },
      { value: "healthcare", label: "Healthcare" },
      { value: "retail", label: "Retail & E-commerce" },
      { value: "manufacturing", label: "Manufacturing" },
      { value: "education", label: "Education" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "services",
    type: "checkbox-group",
    label: "Services Interested In",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "consulting",
        label: "Consulting",
        description: "Strategic business consulting services.",
      },
      {
        value: "development",
        label: "Development",
        description: "Custom software development.",
      },
      {
        value: "design",
        label: "Design",
        description: "UI/UX and product design.",
      },
      {
        value: "marketing",
        label: "Marketing",
        description: "Digital marketing and SEO.",
      },
      {
        value: "support",
        label: "Support",
        description: "Ongoing maintenance and support.",
      },
    ],
  },
  {
    name: "budget",
    type: "radio",
    label: "Project Budget Range",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "10k-25k",
        label: "$10k - $25k",
        description: "Small project scope.",
      },
      {
        value: "25k-50k",
        label: "$25k - $50k",
        description: "Medium project scope.",
      },
      {
        value: "50k-100k",
        label: "$50k - $100k",
        description: "Large project scope.",
      },
      {
        value: "100k+",
        label: "$100k+",
        description: "Enterprise project scope.",
      },
    ],
  },
  {
    name: "timeline",
    type: "select",
    label: "Desired Timeline",
    required: true,
    columnSpan: 6,
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "1-3", label: "1-3 months" },
      { value: "3-6", label: "3-6 months" },
      { value: "6+", label: "6+ months" },
      { value: "flexible", label: "Flexible" },
    ],
  },
  {
    name: "start_date",
    type: "date-picker",
    label: "Preferred Start Date",
    placeholder: "Select a date",
    required: false,
    columnSpan: 6,
  },
  {
    name: "content",
    type: "textarea",
    label: "Project Description",
    placeholder: "Tell us about your project goals, challenges, and requirements...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "attachment",
    type: "file",
    label: "Project Documents",
    placeholder: "Upload RFP, requirements doc, etc...",
    required: false,
    accept: ".pdf,.doc,.docx",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 3,
    multiple: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactMultistep
      heading="Let's Work Together"
      description="Tell us about your project and we'll create a custom proposal tailored to your needs. Complete the form to get started."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your interest! We'll review your project details and get back to you within 1-2 business days with next steps.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Request",
          },
        },
      }}
      background="white"
      pattern="architect"
      patternOpacity={0.3}
    />
  );
}
