"use client";

import { ContactInterview } from "@opensite/ui/blocks/contact/contact-interview";
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
    name: "linkedin",
    type: "text",
    label: "LinkedIn Profile",
    placeholder: "https://linkedin.com/in/yourname",
    required: false,
    columnSpan: 12,
  },
  {
    name: "position",
    type: "select",
    label: "Position Applying For",
    required: true,
    columnSpan: 12,
    options: [
      {
        value: "senior-engineer",
        label: "Senior Software Engineer",
        description: "Full-stack development role.",
      },
      {
        value: "product-manager",
        label: "Product Manager",
        description: "Lead product strategy and development.",
      },
      {
        value: "ux-designer",
        label: "UX/UI Designer",
        description: "Design user experiences and interfaces.",
      },
      {
        value: "marketing-manager",
        label: "Marketing Manager",
        description: "Drive marketing campaigns and growth.",
      },
      {
        value: "sales-executive",
        label: "Sales Executive",
        description: "Build relationships and close deals.",
      },
      {
        value: "other",
        label: "Other Position",
        description: "Specify in additional details below.",
      },
    ],
  },
  {
    name: "experience_years",
    type: "select",
    label: "Years of Relevant Experience",
    required: true,
    columnSpan: 6,
    options: [
      { value: "0-2", label: "0-2 years" },
      { value: "3-5", label: "3-5 years" },
      { value: "6-10", label: "6-10 years" },
      { value: "10+", label: "10+ years" },
    ],
  },
  {
    name: "location",
    type: "select",
    label: "Work Location Preference",
    required: true,
    columnSpan: 6,
    options: [
      { value: "remote", label: "Remote" },
      { value: "hybrid", label: "Hybrid" },
      { value: "onsite", label: "On-site" },
    ],
  },
  {
    name: "resume",
    type: "file",
    label: "Resume/CV",
    placeholder: "Upload your resume...",
    required: true,
    accept: ".pdf,.doc,.docx",
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    columnSpan: 6,
  },
  {
    name: "portfolio",
    type: "file",
    label: "Portfolio/Work Samples",
    placeholder: "Upload work samples (optional)...",
    required: false,
    accept: ".pdf,.doc,.docx,.zip",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 3,
    multiple: true,
    columnSpan: 6,
  },
  {
    name: "salary_expectations",
    type: "text",
    label: "Salary Expectations",
    placeholder: "e.g., $80,000 - $100,000",
    required: false,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Cover Letter / Additional Information",
    placeholder:
      "Tell us why you're interested in this position and what makes you a great fit...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactInterview
      heading="Join Our Team"
      description="We're always looking for talented individuals who are passionate about what they do. Apply now and take the next step in your career."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for applying! We've received your application and will review it carefully. If your qualifications match our needs, we'll reach out within 1-2 weeks to schedule an interview.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Application",
          },
        },
      }}
      pattern="circles"
      patternOpacity={0.9}
      background="muted"
    />
  );
}
