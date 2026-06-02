"use client";

import { ContactWarranty } from "@opensite/ui/blocks/contact/contact-warranty";
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
    name: "order_number",
    type: "text",
    label: "Order Number",
    placeholder: "e.g., ORD-123456",
    required: true,
    columnSpan: 6,
  },
  {
    name: "purchase_date",
    type: "date-picker",
    label: "Purchase Date",
    placeholder: "Select date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "product_name",
    type: "text",
    label: "Product Name",
    placeholder: "Name or model of the product",
    required: true,
    columnSpan: 6,
  },
  {
    name: "serial_number",
    type: "text",
    label: "Serial Number (if applicable)",
    placeholder: "Product serial number",
    required: false,
    columnSpan: 6,
  },
  {
    name: "claim_type",
    type: "radio",
    label: "Type of Claim",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "defect",
        label: "Manufacturing Defect",
        description: "Product has a manufacturing defect.",
      },
      {
        value: "malfunction",
        label: "Product Malfunction",
        description: "Product stopped working or not working properly.",
      },
      {
        value: "damage",
        label: "Damage in Transit",
        description: "Product arrived damaged.",
      },
      {
        value: "missing",
        label: "Missing Parts",
        description: "Product is missing components or parts.",
      },
    ],
  },
  {
    name: "issue_description",
    type: "textarea",
    label: "Describe the Issue",
    placeholder: "Please provide detailed information about the problem, including when it started, what you've tried, and any error messages...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "preferred_resolution",
    type: "select",
    label: "Preferred Resolution",
    required: true,
    columnSpan: 12,
    options: [
      { value: "repair", label: "Repair the product" },
      { value: "replacement", label: "Replace with new product" },
      { value: "refund", label: "Full refund" },
      { value: "discuss", label: "Discuss options with support" },
    ],
  },
  {
    name: "receipt",
    type: "file",
    label: "Upload Proof of Purchase",
    placeholder: "Upload receipt or order confirmation...",
    required: true,
    accept: "image/*,.pdf",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 1,
    columnSpan: 12,
  },
  {
    name: "photos",
    type: "file",
    label: "Upload Photos of the Issue",
    placeholder: "Upload photos showing the defect or damage...",
    required: true,
    accept: "image/*",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
    columnSpan: 12,
  },
  {
    name: "additional_notes",
    type: "textarea",
    label: "Additional Notes (Optional)",
    placeholder: "Any other information that might be helpful...",
    required: false,
    rows: 3,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactWarranty
      heading="Warranty Claim"
      description="We stand behind the quality of our products. If you're experiencing an issue covered under warranty, submit your claim below and our support team will process it promptly."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Your warranty claim has been submitted successfully! You'll receive a confirmation email with your claim number. Our team will review your claim and respond within 2-3 business days.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Warranty Claim",
          },
        },
      }}
      background="white"
      pattern="dashedGridFadeTop"
      patternOpacity={0.9}
    />
  );
}
