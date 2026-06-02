"use client";

import { ContactMaintenance } from "@opensite/ui/blocks/contact/contact-maintenance";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Your full name",
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
    name: "property_address",
    type: "text",
    label: "Property Address",
    placeholder: "Street address",
    required: true,
    columnSpan: 12,
  },
  {
    name: "city",
    type: "text",
    label: "City",
    placeholder: "City",
    required: true,
    columnSpan: 6,
  },
  {
    name: "zip",
    type: "text",
    label: "ZIP Code",
    placeholder: "12345",
    required: true,
    columnSpan: 6,
  },
  {
    name: "service_type",
    type: "checkbox-group",
    label: "Services Needed",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "plumbing",
        label: "Plumbing",
        description: "Leaks, drains, fixtures.",
      },
      {
        value: "electrical",
        label: "Electrical",
        description: "Wiring, outlets, lighting.",
      },
      {
        value: "hvac",
        label: "HVAC",
        description: "Heating and cooling systems.",
      },
      {
        value: "carpentry",
        label: "Carpentry",
        description: "Doors, cabinets, trim.",
      },
      {
        value: "painting",
        label: "Painting",
        description: "Interior and exterior painting.",
      },
      {
        value: "landscaping",
        label: "Landscaping",
        description: "Lawn care, trees, gardens.",
      },
    ],
  },
  {
    name: "urgency",
    type: "radio",
    label: "Urgency Level",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "emergency",
        label: "Emergency",
        description: "Needs immediate attention.",
      },
      {
        value: "urgent",
        label: "Urgent",
        description: "Within 24-48 hours.",
      },
      {
        value: "routine",
        label: "Routine",
        description: "Can wait a few days.",
      },
    ],
  },
  {
    name: "preferred_date",
    type: "date-picker",
    label: "Preferred Service Date",
    placeholder: "Select a date",
    required: false,
    columnSpan: 6,
  },
  {
    name: "preferred_time",
    type: "select",
    label: "Preferred Time",
    required: false,
    columnSpan: 6,
    options: [
      { value: "morning", label: "Morning (8am-12pm)" },
      { value: "afternoon", label: "Afternoon (12pm-5pm)" },
      { value: "evening", label: "Evening (5pm-8pm)" },
    ],
  },
  {
    name: "photos",
    type: "file",
    label: "Upload Photos",
    placeholder: "Upload photos of the issue (optional)...",
    required: false,
    accept: "image/*",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 5,
    multiple: true,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Describe the Issue",
    placeholder: "Please provide details about the maintenance issue, including any relevant history or specific concerns...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactMaintenance
      heading="Request Maintenance Service"
      description="Our experienced team is ready to help with all your property maintenance needs. Fill out the form and we'll get back to you promptly."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Your maintenance request has been submitted successfully. We'll contact you within 2 hours to confirm the service appointment.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Request",
          },
        },
      }}
      background="gradient"
      pattern="dashedGridFadeTop"
      patternOpacity={0.5}
    />
  );
}
