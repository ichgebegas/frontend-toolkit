"use client";

import { ContactMoving } from "@opensite/ui/blocks/contact/contact-moving";
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
    name: "move_type",
    type: "radio",
    label: "Type of Move",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "local",
        label: "Local Move",
        description: "Moving within the same city or area.",
      },
      {
        value: "long_distance",
        label: "Long Distance",
        description: "Moving to another city or state.",
      },
      {
        value: "international",
        label: "International",
        description: "Moving to another country.",
      },
      {
        value: "office",
        label: "Office/Commercial",
        description: "Business or commercial relocation.",
      },
    ],
  },
  {
    name: "current_address",
    type: "text",
    label: "Current Address",
    placeholder: "Street address, city, state, zip",
    required: true,
    columnSpan: 12,
  },
  {
    name: "destination_address",
    type: "text",
    label: "Destination Address",
    placeholder: "Street address, city, state, zip",
    required: true,
    columnSpan: 12,
  },
  {
    name: "move_date",
    type: "date-picker",
    label: "Preferred Move Date",
    placeholder: "Select a date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "home_size",
    type: "select",
    label: "Home/Office Size",
    required: true,
    columnSpan: 6,
    options: [
      {
        value: "studio",
        label: "Studio/1BR",
      },
      {
        value: "2br",
        label: "2 Bedroom",
      },
      {
        value: "3br",
        label: "3 Bedroom",
      },
      {
        value: "4br",
        label: "4+ Bedroom",
      },
      {
        value: "small_office",
        label: "Small Office (1-10 people)",
      },
      {
        value: "large_office",
        label: "Large Office (10+ people)",
      },
    ],
  },
  {
    name: "services",
    type: "checkbox-group",
    label: "Additional Services",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "packing",
        label: "Packing Service",
        description: "Professional packing of all items.",
      },
      {
        value: "unpacking",
        label: "Unpacking Service",
        description: "Unpack and organize at destination.",
      },
      {
        value: "storage",
        label: "Storage",
        description: "Short or long-term storage options.",
      },
      {
        value: "specialty",
        label: "Specialty Items",
        description: "Piano, art, antiques, etc.",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Additional Details",
    placeholder: "Any special requirements, items of concern, access issues, etc...",
    required: false,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactMoving
      heading="Get Your Free Moving Quote"
      description="Fill out the form below and receive a detailed moving estimate within 24 hours. Our team is ready to make your move stress-free."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you! We'll review your moving requirements and send you a detailed quote within 24 hours.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Get Free Quote",
          },
        },
      }}
      background="muted"
      pattern="dashedGridFadeTop"
      patternOpacity={0.8}
    />
  );
}
