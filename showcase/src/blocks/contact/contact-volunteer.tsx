"use client";

import { ContactVolunteer } from "@opensite/ui/blocks/contact/contact-volunteer";
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
    name: "age_range",
    type: "select",
    label: "Age Range",
    required: true,
    columnSpan: 6,
    options: [
      { value: "under18", label: "Under 18" },
      { value: "18-24", label: "18-24" },
      { value: "25-34", label: "25-34" },
      { value: "35-44", label: "35-44" },
      { value: "45-54", label: "45-54" },
      { value: "55-64", label: "55-64" },
      { value: "65plus", label: "65+" },
    ],
  },
  {
    name: "availability",
    type: "select",
    label: "General Availability",
    required: true,
    columnSpan: 6,
    options: [
      { value: "weekdays", label: "Weekdays" },
      { value: "weekends", label: "Weekends" },
      { value: "both", label: "Both weekdays and weekends" },
      { value: "flexible", label: "Flexible" },
    ],
  },
  {
    name: "interest_areas",
    type: "checkbox-group",
    label: "Areas of Interest",
    placeholder: "Select all that apply",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "events",
        label: "Event Support",
        description: "Help organize and run community events.",
      },
      {
        value: "fundraising",
        label: "Fundraising",
        description: "Assist with fundraising campaigns and activities.",
      },
      {
        value: "mentoring",
        label: "Mentoring",
        description: "Mentor youth or adults in the community.",
      },
      {
        value: "admin",
        label: "Administrative",
        description: "Office support, data entry, and coordination.",
      },
      {
        value: "outreach",
        label: "Community Outreach",
        description: "Engage with community members and spread awareness.",
      },
      {
        value: "education",
        label: "Education & Tutoring",
        description: "Teach classes or provide tutoring services.",
      },
      {
        value: "construction",
        label: "Construction & Maintenance",
        description: "Help with building projects and property maintenance.",
      },
      {
        value: "creative",
        label: "Creative Services",
        description: "Graphic design, photography, video, or writing.",
      },
    ],
  },
  {
    name: "commitment",
    type: "radio",
    label: "Time Commitment",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "one-time",
        label: "One-Time Event",
        description: "Single event or project.",
      },
      {
        value: "occasional",
        label: "Occasional",
        description: "A few times per month.",
      },
      {
        value: "regular",
        label: "Regular",
        description: "Weekly or bi-weekly commitment.",
      },
      {
        value: "ongoing",
        label: "Ongoing",
        description: "Long-term commitment (6+ months).",
      },
    ],
  },
  {
    name: "skills",
    type: "textarea",
    label: "Relevant Skills and Experience",
    placeholder:
      "Tell us about skills, experience, or qualifications that would help you as a volunteer...",
    required: false,
    rows: 4,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Why do you want to volunteer with us?",
    placeholder:
      "Share what motivates you and what you hope to gain from volunteering...",
    required: true,
    rows: 4,
    columnSpan: 12,
  },
  {
    name: "background_check",
    type: "checkbox",
    label: "I consent to a background check if required for my volunteer role",
    required: false,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactVolunteer
      heading="Join Our Volunteer Team"
      description="Make a difference in your community! Whether you have a few hours to spare or want to make a long-term commitment, we have opportunities that match your skills and interests."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for your interest in volunteering! We'll review your application and reach out within a week to discuss available opportunities and next steps.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Volunteer Application",
          },
        },
      }}
      pattern="dotPattern2"
      patternOpacity={1}
      background="secondary"
    />
  );
}
