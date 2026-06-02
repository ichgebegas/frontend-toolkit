"use client";

import { ContactSupport } from "@opensite/ui/blocks/contact/contact-support";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Full name",
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
    name: "account_id",
    type: "text",
    label: "Account ID or Username",
    placeholder: "Your account identifier",
    required: false,
    columnSpan: 12,
  },
  {
    name: "issue_type",
    type: "select",
    label: "Issue Type",
    required: true,
    columnSpan: 6,
    options: [
      { value: "technical", label: "Technical Issue" },
      { value: "billing", label: "Billing Question" },
      { value: "account", label: "Account Access" },
      { value: "feature", label: "Feature Request" },
      { value: "bug", label: "Report a Bug" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "priority",
    type: "select",
    label: "Priority Level",
    required: true,
    columnSpan: 6,
    options: [
      { value: "low", label: "Low - General question" },
      { value: "medium", label: "Medium - Issue affecting work" },
      { value: "high", label: "High - Critical issue" },
      { value: "urgent", label: "Urgent - Service down" },
    ],
  },
  {
    name: "subject",
    type: "text",
    label: "Subject",
    placeholder: "Brief description of your issue",
    required: true,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Describe your issue",
    placeholder: "Please provide as much detail as possible including steps to reproduce the issue, error messages, and what you expected to happen...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
  {
    name: "attachments",
    type: "file",
    label: "Attachments (Optional)",
    placeholder: "Upload screenshots, logs, or other helpful files...",
    required: false,
    accept: "image/*,.pdf,.txt,.log",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactSupport
      heading="We're Here to Help"
      description="Having trouble? Our support team is standing by to assist you. Describe your issue below and we'll get back to you as soon as possible."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Your support ticket has been created! You'll receive a confirmation email with your ticket number. We typically respond within 2-4 hours during business hours.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Support Ticket",
          },
        },
      }}
      background="white"
      pattern="dashedGridFadeTop"
      patternOpacity={0.9}
    />
  );
}
