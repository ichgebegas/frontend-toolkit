"use client";

import { ContactSales } from "@opensite/ui/blocks/contact/contact-sales";
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
    label: "Business Email",
    placeholder: "you@company.com",
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
    required: true,
    columnSpan: 6,
  },
  {
    name: "company_size",
    type: "select",
    label: "Company Size",
    required: true,
    columnSpan: 6,
    options: [
      { value: "1-10", label: "1-10 employees" },
      { value: "11-50", label: "11-50 employees" },
      { value: "51-200", label: "51-200 employees" },
      { value: "201-500", label: "201-500 employees" },
      { value: "501-1000", label: "501-1,000 employees" },
      { value: "1000+", label: "1,000+ employees" },
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
      { value: "healthcare", label: "Healthcare" },
      { value: "finance", label: "Financial Services" },
      { value: "retail", label: "Retail & E-commerce" },
      { value: "manufacturing", label: "Manufacturing" },
      { value: "education", label: "Education" },
      { value: "real_estate", label: "Real Estate" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "interest",
    type: "radio",
    label: "What are you interested in?",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "demo",
        label: "Schedule a Demo",
        description: "See our product in action with a personalized demo.",
      },
      {
        value: "pricing",
        label: "Pricing Information",
        description: "Learn about our plans and find the right fit.",
      },
      {
        value: "trial",
        label: "Start a Free Trial",
        description: "Try our platform risk-free for 14 days.",
      },
      {
        value: "enterprise",
        label: "Enterprise Solutions",
        description: "Custom solutions for large organizations.",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Tell us about your needs",
    placeholder: "What challenges are you looking to solve? What goals do you have?",
    required: true,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactSales
      heading="Let's Talk About Your Business"
      description="Connect with our sales team to learn how our solutions can help you achieve your goals. We'll work with you to find the perfect plan for your needs."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your interest! A sales representative will reach out to you within 24 hours to discuss your needs.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Contact Sales",
          },
        },
      }}
      background="white"
      pattern="dashedGridFadeTop"
      patternOpacity={0.9}
    />
  );
}
