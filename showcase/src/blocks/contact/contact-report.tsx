"use client";

import { ContactReport } from "@opensite/ui/blocks/contact/contact-report";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "reporter_name",
    type: "text",
    label: "Your Name (optional)",
    placeholder: "Your name",
    required: false,
    columnSpan: 12,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address (optional)",
    placeholder: "your@email.com",
    required: false,
    columnSpan: 6,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number (optional)",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 6,
  },
  {
    name: "issue_type",
    type: "select",
    label: "Type of Issue",
    required: true,
    columnSpan: 12,
    options: [
      { value: "bug", label: "Technical Bug/Error" },
      { value: "security", label: "Security Vulnerability" },
      { value: "abuse", label: "Abuse or Harassment" },
      { value: "spam", label: "Spam Content" },
      { value: "copyright", label: "Copyright Violation" },
      { value: "inappropriate", label: "Inappropriate Content" },
      { value: "privacy", label: "Privacy Concern" },
      { value: "accessibility", label: "Accessibility Issue" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "severity",
    type: "radio",
    label: "Severity Level",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "low",
        label: "Low",
        description: "Minor issue, no immediate impact.",
      },
      {
        value: "medium",
        label: "Medium",
        description: "Moderate impact, affects some users.",
      },
      {
        value: "high",
        label: "High",
        description: "Major impact, affects many users.",
      },
      {
        value: "critical",
        label: "Critical",
        description: "Severe issue requiring immediate attention.",
      },
    ],
  },
  {
    name: "url",
    type: "url",
    label: "URL Where Issue Occurs",
    placeholder: "https://example.com/page",
    required: false,
    columnSpan: 12,
  },
  {
    name: "device_info",
    type: "checkbox-group",
    label: "Device/Platform",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "desktop_windows", label: "Desktop - Windows" },
      { value: "desktop_mac", label: "Desktop - Mac" },
      { value: "desktop_linux", label: "Desktop - Linux" },
      { value: "mobile_ios", label: "Mobile - iOS" },
      { value: "mobile_android", label: "Mobile - Android" },
      { value: "tablet", label: "Tablet" },
    ],
  },
  {
    name: "browser",
    type: "select",
    label: "Browser",
    required: false,
    columnSpan: 6,
    options: [
      { value: "chrome", label: "Chrome" },
      { value: "firefox", label: "Firefox" },
      { value: "safari", label: "Safari" },
      { value: "edge", label: "Edge" },
      { value: "opera", label: "Opera" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "when_occurred",
    type: "date-picker",
    label: "When Did This Occur?",
    placeholder: "Select date",
    required: false,
    columnSpan: 6,
  },
  {
    name: "can_reproduce",
    type: "radio",
    label: "Can You Reproduce the Issue?",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "yes", label: "Yes, consistently" },
      { value: "sometimes", label: "Sometimes" },
      { value: "no", label: "No, it was one-time" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Issue Description",
    placeholder:
      "Please provide detailed information about the issue, including steps to reproduce, expected behavior, actual behavior, and any error messages...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
  {
    name: "screenshots",
    type: "file",
    label: "Screenshots or Evidence",
    placeholder: "Upload screenshots, error logs, or other supporting files...",
    required: false,
    accept: "image/*,.pdf,.txt,.log",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
    columnSpan: 12,
  },
  {
    name: "follow_up",
    type: "radio",
    label: "Would You Like Follow-up Updates?",
    required: false,
    columnSpan: 12,
    layout: "stacked",
    options: [
      { value: "yes", label: "Yes, keep me informed" },
      { value: "no", label: "No, anonymous report" },
    ],
  },
];

export default function Demo() {
  return (
    <ContactReport
      heading="Report an Issue"
      description="Help us improve by reporting bugs, security vulnerabilities, or inappropriate content. We review all reports carefully and take action quickly."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for your report! We take all issues seriously and will investigate this matter promptly. If you requested follow-up, we'll keep you updated on our progress.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Report",
          },
        },
      }}
      background="dark"
      pattern="gridFadeTop"
      patternOpacity={0.1}
    />
  );
}
