"use client";

import { ContactEvent } from "@opensite/ui/blocks/contact/contact-event";
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
    name: "organization",
    type: "text",
    label: "Organization (Optional)",
    placeholder: "Company or organization name",
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
    name: "event_name",
    type: "text",
    label: "Event Name",
    placeholder: "What's the name of your event?",
    required: true,
    columnSpan: 12,
  },
  {
    name: "event_type",
    type: "select",
    label: "Event Type",
    required: true,
    columnSpan: 6,
    options: [
      {
        value: "conference",
        label: "Conference",
      },
      {
        value: "workshop",
        label: "Workshop",
      },
      {
        value: "seminar",
        label: "Seminar",
      },
      {
        value: "networking",
        label: "Networking Event",
      },
      {
        value: "fundraiser",
        label: "Fundraiser",
      },
      {
        value: "celebration",
        label: "Celebration",
      },
      {
        value: "other",
        label: "Other",
      },
    ],
  },
  {
    name: "attendee_count",
    type: "select",
    label: "Expected Attendees",
    required: true,
    columnSpan: 6,
    options: [
      {
        value: "1-25",
        label: "1-25 people",
      },
      {
        value: "26-50",
        label: "26-50 people",
      },
      {
        value: "51-100",
        label: "51-100 people",
      },
      {
        value: "101-250",
        label: "101-250 people",
      },
      {
        value: "250+",
        label: "250+ people",
      },
    ],
  },
  {
    name: "event_date",
    type: "date-picker",
    label: "Event Date",
    placeholder: "Select date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "venue",
    type: "text",
    label: "Venue/Location",
    placeholder: "Venue name or address",
    required: false,
    columnSpan: 6,
  },
  {
    name: "services_needed",
    type: "checkbox-group",
    label: "Services Needed",
    placeholder: "Select services",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "venue",
        label: "Venue",
        description: "Space rental.",
      },
      {
        value: "catering",
        label: "Catering",
        description: "Food and beverage.",
      },
      {
        value: "av",
        label: "A/V Equipment",
        description: "Audio/visual setup.",
      },
      {
        value: "decor",
        label: "Decoration",
        description: "Event decoration.",
      },
      {
        value: "entertainment",
        label: "Entertainment",
        description: "Music, performers, etc.",
      },
      {
        value: "staff",
        label: "Staff",
        description: "Event staff and coordination.",
      },
    ],
  },
  {
    name: "budget",
    type: "select",
    label: "Estimated Budget",
    required: false,
    columnSpan: 12,
    options: [
      {
        value: "under-5k",
        label: "Under $5,000",
      },
      {
        value: "5k-10k",
        label: "$5,000 - $10,000",
      },
      {
        value: "10k-25k",
        label: "$10,000 - $25,000",
      },
      {
        value: "25k-50k",
        label: "$25,000 - $50,000",
      },
      {
        value: "50k+",
        label: "$50,000+",
      },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Event Details",
    placeholder: "Tell us more about your event vision, special requirements, theme, etc...",
    required: true,
    rows: 6,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactEvent
      heading="Plan Your Event With Us"
      description="Let us help you create an unforgettable event. Fill out the form below and our event planning team will contact you within 48 hours with ideas and a quote."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your event inquiry! Our planning team will review your details and reach out within 48 hours.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Event Inquiry",
          },
        },
      }}
      background="gray"
      pattern="dots"
      patternOpacity={0.35}
    />
  );
}
