"use client";

import { ContactDemo } from "@opensite/ui/blocks/contact/contact-demo";
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
    name: "work_email",
    type: "email",
    label: "Work Email",
    placeholder: "you@company.com",
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
    name: "company",
    type: "text",
    label: "Company Name",
    placeholder: "Your company",
    required: true,
    columnSpan: 12,
  },
  {
    name: "company_size",
    type: "select",
    label: "Company Size",
    required: true,
    columnSpan: 6,
    options: [
      {
        value: "1-10",
        label: "1-10 employees",
      },
      {
        value: "11-50",
        label: "11-50 employees",
      },
      {
        value: "51-200",
        label: "51-200 employees",
      },
      {
        value: "201-1000",
        label: "201-1000 employees",
      },
      {
        value: "1000+",
        label: "1000+ employees",
      },
    ],
  },
  {
    name: "role",
    type: "select",
    label: "Your Role",
    required: false,
    columnSpan: 6,
    options: [
      {
        value: "executive",
        label: "Executive/C-Level",
      },
      {
        value: "manager",
        label: "Manager/Director",
      },
      {
        value: "individual",
        label: "Individual Contributor",
      },
      {
        value: "consultant",
        label: "Consultant",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
  },
  {
    name: "use_case",
    type: "checkbox-group",
    label: "What are you interested in?",
    placeholder: "Select features",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "analytics",
        label: "Analytics",
        description: "Data insights and reporting.",
      },
      {
        value: "automation",
        label: "Automation",
        description: "Workflow automation tools.",
      },
      {
        value: "integration",
        label: "Integrations",
        description: "Connect with existing tools.",
      },
      {
        value: "collaboration",
        label: "Collaboration",
        description: "Team communication features.",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Tell us about your needs",
    placeholder:
      "What challenges are you trying to solve? What would you like to see in the demo?",
    required: false,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactDemo
      heading="See It In Action"
      description="Schedule a personalized demo and discover how our platform can transform your workflow. Our team will walk you through key features tailored to your needs."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for requesting a demo! Our team will reach out within 24 hours to schedule a time that works for you.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Request Demo",
          },
        },
      }}
      background="dark"
      pattern="gradientGlowTop"
      patternOpacity={1}
    />
  );
}
