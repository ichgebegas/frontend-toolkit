"use client";

import { ContactQuote } from "@opensite/ui/blocks/contact/contact-quote";
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
    placeholder: "Your company (optional)",
    required: false,
    columnSpan: 12,
  },
  {
    name: "service_type",
    type: "radio",
    label: "Service Type",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "web_design",
        label: "Web Design",
        description: "Custom website design and development.",
      },
      {
        value: "mobile_app",
        label: "Mobile App",
        description: "iOS and Android app development.",
      },
      {
        value: "branding",
        label: "Branding",
        description: "Logo, identity, and brand guidelines.",
      },
      {
        value: "marketing",
        label: "Digital Marketing",
        description: "SEO, PPC, and content marketing.",
      },
      {
        value: "consulting",
        label: "Consulting",
        description: "Strategy and technical consulting.",
      },
      {
        value: "maintenance",
        label: "Maintenance",
        description: "Ongoing support and updates.",
      },
    ],
  },
  {
    name: "budget_range",
    type: "select",
    label: "Budget Range",
    required: true,
    columnSpan: 6,
    options: [
      { value: "5k-10k", label: "$5,000 - $10,000" },
      { value: "10k-25k", label: "$10,000 - $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k-100k", label: "$50,000 - $100,000" },
      { value: "100k+", label: "$100,000+" },
      { value: "not_sure", label: "Not sure yet" },
    ],
  },
  {
    name: "timeline",
    type: "select",
    label: "Project Timeline",
    required: true,
    columnSpan: 6,
    options: [
      { value: "asap", label: "ASAP" },
      { value: "1-2", label: "1-2 months" },
      { value: "3-4", label: "3-4 months" },
      { value: "5-6", label: "5-6 months" },
      { value: "6+", label: "6+ months" },
      { value: "flexible", label: "Flexible" },
    ],
  },
  {
    name: "project_status",
    type: "radio",
    label: "Project Status",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "new", label: "New Project" },
      { value: "redesign", label: "Redesign/Update" },
      { value: "migration", label: "Platform Migration" },
      { value: "expansion", label: "Expansion/Addition" },
    ],
  },
  {
    name: "features",
    type: "checkbox-group",
    label: "Required Features",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "ecommerce",
        label: "E-commerce",
        description: "Online store and payments.",
      },
      { value: "cms", label: "CMS", description: "Content management system." },
      {
        value: "booking",
        label: "Booking System",
        description: "Appointments and reservations.",
      },
      {
        value: "crm",
        label: "CRM",
        description: "Customer relationship management.",
      },
      {
        value: "analytics",
        label: "Analytics",
        description: "Custom tracking and reporting.",
      },
      {
        value: "integrations",
        label: "Third-party Integrations",
        description: "API connections.",
      },
    ],
  },
  {
    name: "reference_urls",
    type: "textarea",
    label: "Reference Websites",
    placeholder: "List any websites you like (one per line)",
    required: false,
    rows: 3,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Project Description",
    placeholder:
      "Tell us about your project goals, challenges, and requirements...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "attachments",
    type: "file",
    label: "Project Documents",
    placeholder: "Upload RFP, requirements, wireframes, etc...",
    required: false,
    accept: ".pdf,.doc,.docx,.png,.jpg,.jpeg",
    maxSize: 15 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactQuote
      heading="Request a Custom Quote"
      description="Tell us about your project and we'll provide a detailed proposal with pricing, timeline, and deliverables. Most quotes are delivered within 2-3 business days."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for your quote request! We'll review your project requirements and send you a detailed proposal within 2-3 business days.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Get Custom Quote",
          },
        },
      }}
      background="muted"
      pattern="architect"
      patternOpacity={0.15}
    />
  );
}
