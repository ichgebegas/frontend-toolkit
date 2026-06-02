"use client";

import { ContactImage } from "@opensite/ui/blocks/contact/contact-image";
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
    name: "service",
    type: "checkbox-group",
    label: "Services Needed",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "web-design",
        label: "Web Design",
        description: "Site design + development",
      },
      {
        value: "branding",
        label: "Branding",
        description: "Logo design + brand identity",
      },
      {
        value: "marketing",
        label: "Digital Marketing",
        description: "SEO + social media",
      },
      {
        value: "consulting",
        label: "Consulting",
        description: "Strategy business consulting",
      },
    ],
  },

  {
    name: "content",
    type: "textarea",
    label: "Project Details",
    placeholder:
      "Tell us about your project goals, target audience, and any specific requirements...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactImage
      image={{
        src: "https://toastability-production.s3.amazonaws.com/t7iteqw4xhtppkiws88bsoia25hv",
        alt: "A person working at a desk"
      }}
      eyebrow="Ready to Start?"
      heading="Let's Build Something Amazing"
      description="Ready to take your business to the next level? Share your project details with us and we'll craft a custom proposal tailored to your needs."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for reaching out! We'll review your project details and get back to you with a custom proposal within 2-3 business days.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Start Your Project",
          },
        },
      }}
      pattern="diagonalCrossBasic"
      patternOpacity={0.9}
      background="gray"
    />
  );
}
