"use client";

import { ContactFeedback } from "@opensite/ui/blocks/contact/contact-feedback";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Your Name",
    placeholder: "Full Name (optional)",
    required: false,
    columnSpan: 6,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "your@email.com (optional)",
    required: false,
    columnSpan: 6,
  },
  {
    name: "rating",
    type: "radio",
    label: "Overall Experience",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "5",
        label: "Excellent",
        description: "Exceeded expectations.",
      },
      {
        value: "4",
        label: "Good",
        description: "Met expectations.",
      },
      {
        value: "3",
        label: "Average",
        description: "Satisfactory.",
      },
      {
        value: "2",
        label: "Below Average",
        description: "Needs improvement.",
      },
    ],
  },
  {
    name: "feedback_type",
    type: "checkbox-group",
    label: "What would you like to provide feedback on?",
    placeholder: "Select areas",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "product",
        label: "Product Quality",
        description: "Quality of our product/service.",
      },
      {
        value: "service",
        label: "Customer Service",
        description: "Support team interaction.",
      },
      {
        value: "website",
        label: "Website/App",
        description: "User experience and design.",
      },
      {
        value: "pricing",
        label: "Pricing",
        description: "Value for money.",
      },
      {
        value: "delivery",
        label: "Delivery/Speed",
        description: "Timeliness and delivery.",
      },
    ],
  },
  {
    name: "would_recommend",
    type: "radio",
    label: "Would you recommend us to others?",
    required: false,
    columnSpan: 12,
    layout: "stacked",
    options: [
      {
        value: "yes",
        label: "Yes, definitely",
      },
      {
        value: "maybe",
        label: "Maybe",
      },
      {
        value: "no",
        label: "No",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Your Feedback",
    placeholder:
      "Tell us what you liked, what could be improved, or any other thoughts...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactFeedback
      heading="We Value Your Feedback"
      description="Your opinion matters to us! Share your experience and help us improve. All feedback is reviewed by our team and used to enhance our products and services."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for your valuable feedback! We appreciate you taking the time to help us improve.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Feedback",
          },
        },
      }}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.16}
    />
  );
}
