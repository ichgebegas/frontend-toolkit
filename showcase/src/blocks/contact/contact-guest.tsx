"use client";

import { ContactGuest } from "@opensite/ui/blocks/contact/contact-guest";
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
    placeholder: "guest@email.com",
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
    name: "check_in",
    type: "date-picker",
    label: "Check-In Date",
    placeholder: "Select arrival date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "check_out",
    type: "date-picker",
    label: "Check-Out Date",
    placeholder: "Select departure date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "guests",
    type: "select",
    label: "Number of Guests",
    required: true,
    columnSpan: 12,
    options: [
      { value: "1", label: "1 Guest" },
      { value: "2", label: "2 Guests" },
      { value: "3", label: "3 Guests" },
      { value: "4", label: "4 Guests" },
      { value: "5", label: "5 Guests" },
      { value: "6+", label: "6+ Guests" },
    ],
  },
  {
    name: "room_type",
    type: "radio",
    label: "Room Preference",
    required: true,
    columnSpan: 12,
    layout: "stacked",
    options: [
      {
        value: "standard",
        label: "Standard Room",
        description: "Queen bed, city view.",
      },
      {
        value: "deluxe",
        label: "Deluxe Room",
        description: "King bed, premium amenities.",
      },
      {
        value: "suite",
        label: "Suite",
        description: "Separate living area, luxury features.",
      },
    ],
  },
  {
    name: "special_requests",
    type: "textarea",
    label: "Special Requests",
    placeholder:
      "Any dietary restrictions, accessibility needs, or special occasions?",
    required: false,
    rows: 4,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactGuest
      heading="Book Your Stay"
      description="Experience comfort and luxury at our hotel. Complete the form below to inquire about availability or make a reservation."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for your reservation inquiry! Our team will confirm availability and reach out within 4 hours.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Reservation Inquiry",
          },
        },
      }}
      pattern="waves"
      patternOpacity={0.15}
      background="dark"
    />
  );
}
