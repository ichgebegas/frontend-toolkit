"use client";

import { ContactSchedule } from "@opensite/ui/blocks/contact/contact-schedule";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Full name",
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
    required: true,
    columnSpan: 6,
  },
  {
    name: "appointment_type",
    type: "radio",
    label: "Type of Appointment",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "consultation",
        label: "Initial Consultation",
        description: "30-minute discovery call to discuss your needs.",
      },
      {
        value: "demo",
        label: "Product Demo",
        description: "60-minute walkthrough of our platform.",
      },
      {
        value: "followup",
        label: "Follow-up Meeting",
        description: "Continue the conversation from a previous call.",
      },
      {
        value: "training",
        label: "Training Session",
        description: "Hands-on training for you and your team.",
      },
    ],
  },
  {
    name: "preferred_date",
    type: "date-picker",
    label: "Preferred Date",
    placeholder: "Select a date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "preferred_time",
    type: "select",
    label: "Preferred Time",
    required: true,
    columnSpan: 6,
    options: [
      { value: "morning", label: "Morning (9am - 12pm)" },
      { value: "afternoon", label: "Afternoon (12pm - 5pm)" },
      { value: "evening", label: "Evening (5pm - 7pm)" },
    ],
  },
  {
    name: "timezone",
    type: "select",
    label: "Timezone",
    required: true,
    columnSpan: 12,
    options: [
      { value: "EST", label: "Eastern Time (EST)" },
      { value: "CST", label: "Central Time (CST)" },
      { value: "MST", label: "Mountain Time (MST)" },
      { value: "PST", label: "Pacific Time (PST)" },
      { value: "GMT", label: "Greenwich Mean Time (GMT)" },
      { value: "CET", label: "Central European Time (CET)" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "What would you like to discuss?",
    placeholder: "Tell us what you'd like to cover during the meeting...",
    required: true,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactSchedule
      heading="Schedule a Meeting"
      description="Book time with our team to discuss your needs. Choose a date and time that works best for you, and we'll send you a calendar invitation with all the details."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Your appointment request has been received! We'll send you a calendar invitation shortly with meeting details and a video conferencing link.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Schedule Appointment",
          },
        },
      }}
      background="gradient"
      pattern="architect"
      patternOpacity={0.2}
    />
  );
}
