"use client";

import { ContactPhotography } from "@opensite/ui/blocks/contact/contact-photography";
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
    label: "Email",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 6,
  },
  {
    name: "subject",
    type: "checkbox-group",
    label: "Project Type(s)",
    placeholder: "Select 1 or more project types",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "wedding",
        label: "Wedding",
        description: "Ceremony, reception, and bridal portraits.",
      },
      {
        value: "portrait",
        label: "Portrait",
        description: "Individual, couple, or family sessions.",
      },
      {
        value: "corporate",
        label: "Corporate",
        description: "Headshots, team photos, and events.",
      },
      {
        value: "product",
        label: "Product",
        description: "E-commerce and catalog photography.",
      },
      {
        value: "real_estate",
        label: "Real Estate",
        description: "Interior, exterior, and aerial shots.",
      },
      {
        value: "other",
        label: "Other",
        description: "Something else not listed above.",
      },
    ],
  },
  {
    name: "event_date",
    type: "date-picker",
    label: "Preferred Date",
    placeholder: "Select a date",
    required: false,
    columnSpan: 12,
  },
  {
    name: "reference_images",
    type: "file",
    label: "Reference Images",
    placeholder: "Upload reference photos or mood boards...",
    required: false,
    accept: "image/*,.pdf",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Project Details",
    placeholder:
      "Tell us about your vision, location, special requests, etc...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactPhotography
      image={{
        src: "https://cdn.ing/assets/i/r/289100/qx79hnpbzbm229nfaeceafv6b3a8/cooking-citrus-and-pistachio-bundt-cake-on-rusty-t-2024-10-18-04-31-33-utc.webp",
        alt: "A person working at a desk",
      }}
      heading="Ready to Get Started?"
      description="Tell us about your project and we'll put together a custom quote for you. We typically respond within 1-2 business days."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for your inquiry! We'll review your project details and get back to you within 1-2 business days.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Inquiry",
          },
        },
      }}
      background="dark"
      pattern="dashedGridFadeTopLeft"
      patternOpacity={0.1}
    />
  );
}
