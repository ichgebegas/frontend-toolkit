"use client";

import { ContactReferral } from "@opensite/ui/blocks/contact/contact-referral";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "your_first_name",
    type: "text",
    label: "Your First Name",
    placeholder: "Your first name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "your_last_name",
    type: "text",
    label: "Your Last Name",
    placeholder: "Your last name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "your_email",
    type: "email",
    label: "Your Email",
    placeholder: "your@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "your_phone",
    type: "tel",
    label: "Your Phone",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 6,
  },
  {
    name: "referral_first_name",
    type: "text",
    label: "Referral's First Name",
    placeholder: "First name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "referral_last_name",
    type: "text",
    label: "Referral's Last Name",
    placeholder: "Last name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "referral_email",
    type: "email",
    label: "Referral's Email",
    placeholder: "their@email.com",
    required: true,
    columnSpan: 6,
  },
  {
    name: "referral_phone",
    type: "tel",
    label: "Referral's Phone",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 6,
  },
  {
    name: "referral_company",
    type: "text",
    label: "Referral's Company",
    placeholder: "Company name",
    required: false,
    columnSpan: 12,
  },
  {
    name: "service_interest",
    type: "checkbox-group",
    label: "Which Services Might They Need?",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "web_design",
        label: "Web Design",
        description: "Website design and development.",
      },
      {
        value: "seo",
        label: "SEO/Marketing",
        description: "Search optimization and digital marketing.",
      },
      {
        value: "consulting",
        label: "Consulting",
        description: "Strategy and business consulting.",
      },
      {
        value: "branding",
        label: "Branding",
        description: "Logo and brand identity.",
      },
      {
        value: "content",
        label: "Content Creation",
        description: "Copywriting and content strategy.",
      },
      {
        value: "other",
        label: "Other",
        description: "Something else.",
      },
    ],
  },
  {
    name: "relationship",
    type: "select",
    label: "Your Relationship",
    required: true,
    columnSpan: 6,
    options: [
      { value: "friend", label: "Friend" },
      { value: "colleague", label: "Colleague" },
      { value: "family", label: "Family Member" },
      { value: "business", label: "Business Partner" },
      { value: "client", label: "Client/Customer" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "urgency",
    type: "select",
    label: "How Soon Do They Need Help?",
    required: false,
    columnSpan: 6,
    options: [
      { value: "immediate", label: "Immediately" },
      { value: "week", label: "Within a week" },
      { value: "month", label: "Within a month" },
      { value: "exploring", label: "Just exploring options" },
      { value: "not_sure", label: "Not sure" },
    ],
  },
  {
    name: "contacted",
    type: "radio",
    label: "Have They Given Permission to Be Contacted?",
    required: true,
    columnSpan: 12,
    layout: "stacked",
    options: [
      { value: "yes", label: "Yes, they're expecting a call" },
      { value: "no", label: "No, please reach out carefully" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Additional Details",
    placeholder: "Tell us why you think they'd be a good fit, what challenges they're facing, or anything else that would help us serve them better...",
    required: false,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactReferral
      heading="Refer a Friend & Earn Rewards"
      description="Know someone who could benefit from our services? Refer them and you'll both receive exclusive rewards when they become a client."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for the referral! We'll reach out to them soon and keep you updated on the status. Your rewards will be processed once they become a client.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Referral",
          },
        },
      }}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
    />
  );
}
