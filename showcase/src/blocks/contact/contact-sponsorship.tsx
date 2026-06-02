"use client";

import { ContactSponsorship } from "@opensite/ui/blocks/contact/contact-sponsorship";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "organization_name",
    type: "text",
    label: "Organization Name",
    placeholder: "Your organization",
    required: true,
    columnSpan: 12,
  },
  {
    name: "contact_name",
    type: "text",
    label: "Contact Person",
    placeholder: "Full name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "title",
    type: "text",
    label: "Job Title",
    placeholder: "Your title",
    required: true,
    columnSpan: 6,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "contact@organization.com",
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
    name: "sponsorship_type",
    type: "radio",
    label: "Type of Sponsorship",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "event",
        label: "Event Sponsorship",
        description: "Sponsor our upcoming conferences or events.",
      },
      {
        value: "program",
        label: "Program Sponsorship",
        description: "Support our ongoing programs and initiatives.",
      },
      {
        value: "scholarship",
        label: "Scholarship Fund",
        description: "Contribute to educational scholarships.",
      },
      {
        value: "general",
        label: "General Support",
        description: "General organizational support and operations.",
      },
    ],
  },
  {
    name: "sponsorship_level",
    type: "select",
    label: "Preferred Sponsorship Level",
    required: true,
    columnSpan: 12,
    options: [
      { value: "platinum", label: "Platinum - $50,000+" },
      { value: "gold", label: "Gold - $25,000 - $49,999" },
      { value: "silver", label: "Silver - $10,000 - $24,999" },
      { value: "bronze", label: "Bronze - $5,000 - $9,999" },
      { value: "supporter", label: "Supporter - Under $5,000" },
      { value: "discuss", label: "Prefer to discuss" },
    ],
  },
  {
    name: "organization_website",
    type: "url",
    label: "Organization Website",
    placeholder: "https://yourorganization.com",
    required: false,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Tell us about your sponsorship goals",
    placeholder: "What are you hoping to achieve through this sponsorship? Do you have any specific requirements or requests?",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "sponsorship_deck",
    type: "file",
    label: "Upload Company Information (Optional)",
    placeholder: "Upload company deck, brochure, or other materials...",
    required: false,
    accept: ".pdf,.doc,.docx,.ppt,.pptx",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 3,
    multiple: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactSponsorship
      heading="Become a Sponsor"
      description="Join leading organizations in supporting our mission. Your sponsorship helps us create meaningful impact and reach more people in our community."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your interest in sponsoring us! Our partnerships team will review your inquiry and reach out within 2-3 business days to discuss opportunities.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Sponsorship Inquiry",
          },
        },
      }}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
    />
  );
}
