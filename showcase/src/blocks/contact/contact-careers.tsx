"use client";

import { ContactCareers } from "@opensite/ui/blocks/contact/contact-careers";
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
    name: "position",
    type: "select",
    label: "Position of Interest",
    required: true,
    columnSpan: 12,
    options: [
      {
        value: "engineering",
        label: "Software Engineer",
        description: "Full-stack or specialized roles.",
      },
      {
        value: "design",
        label: "Product Designer",
        description: "UI/UX and product design.",
      },
      {
        value: "marketing",
        label: "Marketing Manager",
        description: "Digital marketing and content.",
      },
      {
        value: "sales",
        label: "Sales Representative",
        description: "B2B or B2C sales roles.",
      },
      {
        value: "other",
        label: "Other Position",
        description: "Something else not listed.",
      },
    ],
  },
  {
    name: "linkedin",
    type: "text",
    label: "LinkedIn Profile",
    placeholder: "https://linkedin.com/in/yourprofile",
    required: false,
    columnSpan: 12,
  },
  {
    name: "resume",
    type: "file",
    label: "Resume/CV",
    placeholder: "Upload your resume or CV...",
    required: true,
    accept: ".pdf,.doc,.docx",
    maxSize: 5 * 1024 * 1024,
    maxFiles: 1,
    columnSpan: 12,
  },
  {
    name: "portfolio",
    type: "text",
    label: "Portfolio URL (Optional)",
    placeholder: "https://yourportfolio.com",
    required: false,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Cover Letter / Why You're Interested",
    placeholder: "Tell us why you'd like to join our team...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactCareers
      heading="Join Our Team"
      description="We're always looking for talented individuals to join our growing team. Submit your application below and we'll review it within 5-7 business days."
      sidebarTitle="Why Work With Us?"
      sidebarDescription="At our company, we value innovation, collaboration, and growth. We offer competitive salaries, comprehensive benefits, and opportunities for professional development. If you're passionate about making an impact and working with a dynamic team, we'd love to hear from you!"
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for applying! We'll review your application and get back to you within 5-7 business days if there's a match.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Application",
          },
        },
      }}
      jobListings={[
        {
          id: "1",
          title: "Rust Deveeloper",
          description: (
            <div className="flex flex-col gap-4 py-4 pr-4 text-balance">
              <h4 className="text-xl opacity-75">
                Join our team as a Rust Developer and work on cutting-edge
                projects.
              </h4>

              <p className="text-sm leading-relaxed">
                We're looking for a passionate Rust Developer to join our team.
                You'll work on innovative projects and contribute to our growing
                codebase.
              </p>
            </div>
          ),
        },
        {
          id: "2",
          title: "Senior Product Designer",
          description: (
            <div className="flex flex-col gap-4 py-4 pr-4 text-balance">
              <h4 className="text-xl opacity-75">
                We're seeking a Senior Product Designer to lead our design
                efforts and create exceptional user experiences.
              </h4>

              <p className="text-sm leading-relaxed">
                As a Senior Product Designer, you'll play a key role in shaping
                our products and ensuring they meet the needs of our users. Your
                expertise will help us create intuitive and engaging designs.
              </p>
            </div>
          ),
        },
        {
          id: "3",
          title: "Marketing Manager",
          description: (
            <div className="flex flex-col gap-4 py-4 pr-4 text-balance">
              <h4 className="text-xl opacity-75">
                We're hiring a Marketing Manager to drive our marketing strategy
                and grow our brand presence.
              </h4>

              <p className="text-sm leading-relaxed">
                As a Marketing Manager, you'll be responsible for developing and
                executing marketing campaigns, managing our online presence, and
                analyzing performance metrics to optimize our marketing efforts.
              </p>
            </div>
          ),
        },
      ]}
      background="dark"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
