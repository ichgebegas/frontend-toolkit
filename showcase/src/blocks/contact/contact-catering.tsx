"use client";

import { ContactCatering } from "@opensite/ui/blocks/contact/contact-catering";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "name",
    type: "text",
    label: "Full Name",
    placeholder: "Full Name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "company",
    type: "text",
    label: "Company/Organization",
    placeholder: "Company name (optional)",
    required: false,
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
    name: "event_type",
    type: "radio",
    label: "Event Type",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "wedding",
        label: "Wedding",
        description: "Wedding reception or ceremony.",
      },
      {
        value: "corporate",
        label: "Corporate Event",
        description: "Business meeting, conference, or party.",
      },
      {
        value: "birthday",
        label: "Birthday Party",
        description: "Birthday celebration.",
      },
      {
        value: "other",
        label: "Other Event",
        description: "Something else not listed.",
      },
    ],
  },
  {
    name: "event_date",
    type: "date-picker",
    label: "Event Date",
    placeholder: "Select event date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "guest_count",
    type: "select",
    label: "Number of Guests",
    required: true,
    columnSpan: 6,
    options: [
      {
        value: "10-25",
        label: "10-25 guests",
      },
      {
        value: "25-50",
        label: "25-50 guests",
      },
      {
        value: "50-100",
        label: "50-100 guests",
      },
      {
        value: "100-200",
        label: "100-200 guests",
      },
      {
        value: "200+",
        label: "200+ guests",
      },
    ],
  },
  {
    name: "menu_type",
    type: "checkbox-group",
    label: "Menu Preferences",
    placeholder: "Select menu types",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "appetizers",
        label: "Appetizers",
        description: "Hors d'oeuvres and starters.",
      },
      {
        value: "buffet",
        label: "Buffet",
        description: "Self-serve buffet style.",
      },
      {
        value: "plated",
        label: "Plated Dinner",
        description: "Formal plated service.",
      },
      {
        value: "dessert",
        label: "Dessert",
        description: "Desserts and sweets.",
      },
      {
        value: "bar",
        label: "Bar Service",
        description: "Beverage and bar services.",
      },
    ],
  },
  {
    name: "dietary_restrictions",
    type: "text",
    label: "Dietary Restrictions",
    placeholder: "Vegetarian, vegan, gluten-free, etc.",
    required: false,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Additional Details",
    placeholder: "Tell us more about your event, special requests, venue location, etc...",
    required: false,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactCatering
      heading="Request a Catering Quote"
      description="Planning an event? Let us handle the food! Fill out the form below and we'll provide you with a custom quote within 24 hours."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your catering inquiry! We'll review your event details and send you a custom quote within 24 hours.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Get Quote",
          },
        },
      }}
      background="gray"
      pattern="dashedGridFadeTopLeft"
      patternOpacity={0.3}
    />
  );
}
