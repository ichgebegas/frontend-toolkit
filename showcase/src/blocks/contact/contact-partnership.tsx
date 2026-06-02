"use client";

import { ContactPartnership } from "@opensite/ui/blocks/contact/contact-partnership";
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
    label: "Work Email",
    placeholder: "your@company.com",
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
    name: "title",
    type: "text",
    label: "Job Title",
    placeholder: "Your position",
    required: true,
    columnSpan: 6,
  },
  {
    name: "website",
    type: "url",
    label: "Company Website",
    placeholder: "https://example.com",
    required: false,
    columnSpan: 12,
  },
  {
    name: "partnership_type",
    type: "radio",
    label: "Partnership Type",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "reseller",
        label: "Reseller/Channel Partner",
        description: "Sell our products to your customers.",
      },
      {
        value: "technology",
        label: "Technology Partner",
        description: "Integrate our solutions with yours.",
      },
      {
        value: "referral",
        label: "Referral Partner",
        description: "Refer clients and earn commissions.",
      },
      {
        value: "strategic",
        label: "Strategic Alliance",
        description: "Long-term strategic partnership.",
      },
    ],
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
      { value: "501-1000", label: "501-1000 employees" },
      { value: "1001+", label: "1001+ employees" },
    ],
  },
  {
    name: "annual_revenue",
    type: "select",
    label: "Annual Revenue",
    required: false,
    columnSpan: 6,
    options: [
      { value: "0-1m", label: "Under $1M" },
      { value: "1m-10m", label: "$1M - $10M" },
      { value: "10m-50m", label: "$10M - $50M" },
      { value: "50m-100m", label: "$50M - $100M" },
      { value: "100m+", label: "$100M+" },
    ],
  },
  {
    name: "territories",
    type: "checkbox-group",
    label: "Target Markets/Territories",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "north_america", label: "North America" },
      { value: "south_america", label: "South America" },
      { value: "europe", label: "Europe" },
      { value: "asia", label: "Asia Pacific" },
      { value: "middle_east", label: "Middle East" },
      { value: "africa", label: "Africa" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Partnership Proposal",
    placeholder: "Describe your partnership vision, target market, resources, and how we can work together...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
  {
    name: "pitch_deck",
    type: "file",
    label: "Company Deck or Proposal",
    placeholder: "Upload your company profile or partnership proposal...",
    required: false,
    accept: ".pdf,.ppt,.pptx",
    maxSize: 20 * 1024 * 1024,
    maxFiles: 2,
    multiple: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactPartnership
      heading="Become a Partner"
      description="Join our growing network of partners and unlock new revenue opportunities. Fill out the form below to start the conversation."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your interest in partnering with us! Our partnerships team will review your application and reach out within 3-5 business days.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Partnership Inquiry",
          },
        },
      }}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.2}
    />
  );
}
