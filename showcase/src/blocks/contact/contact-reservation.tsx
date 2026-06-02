"use client";

import { ContactReservation } from "@opensite/ui/blocks/contact/contact-reservation";
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
    name: "reservation_date",
    type: "date-picker",
    label: "Reservation Date",
    placeholder: "Select date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "reservation_time",
    type: "select",
    label: "Preferred Time",
    required: true,
    columnSpan: 6,
    options: [
      { value: "12:00", label: "12:00 PM" },
      { value: "12:30", label: "12:30 PM" },
      { value: "13:00", label: "1:00 PM" },
      { value: "13:30", label: "1:30 PM" },
      { value: "14:00", label: "2:00 PM" },
      { value: "14:30", label: "2:30 PM" },
      { value: "17:00", label: "5:00 PM" },
      { value: "17:30", label: "5:30 PM" },
      { value: "18:00", label: "6:00 PM" },
      { value: "18:30", label: "6:30 PM" },
      { value: "19:00", label: "7:00 PM" },
      { value: "19:30", label: "7:30 PM" },
      { value: "20:00", label: "8:00 PM" },
      { value: "20:30", label: "8:30 PM" },
      { value: "21:00", label: "9:00 PM" },
    ],
  },
  {
    name: "party_size",
    type: "select",
    label: "Party Size",
    required: true,
    columnSpan: 6,
    options: [
      { value: "1", label: "1 person" },
      { value: "2", label: "2 people" },
      { value: "3", label: "3 people" },
      { value: "4", label: "4 people" },
      { value: "5", label: "5 people" },
      { value: "6", label: "6 people" },
      { value: "7", label: "7 people" },
      { value: "8", label: "8 people" },
      { value: "9+", label: "9+ people (large party)" },
    ],
  },
  {
    name: "seating_preference",
    type: "select",
    label: "Seating Preference",
    required: false,
    columnSpan: 6,
    options: [
      { value: "indoor", label: "Indoor" },
      { value: "outdoor", label: "Outdoor/Patio" },
      { value: "bar", label: "Bar Seating" },
      { value: "booth", label: "Booth" },
      { value: "no_preference", label: "No Preference" },
    ],
  },
  {
    name: "occasion",
    type: "select",
    label: "Special Occasion",
    required: false,
    columnSpan: 12,
    options: [
      { value: "none", label: "No special occasion" },
      { value: "birthday", label: "Birthday" },
      { value: "anniversary", label: "Anniversary" },
      { value: "business", label: "Business Meeting" },
      { value: "date", label: "Date Night" },
      { value: "engagement", label: "Engagement" },
      { value: "other", label: "Other Celebration" },
    ],
  },
  {
    name: "dietary_restrictions",
    type: "checkbox-group",
    label: "Dietary Restrictions or Allergies",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "vegetarian", label: "Vegetarian" },
      { value: "vegan", label: "Vegan" },
      { value: "gluten_free", label: "Gluten-Free" },
      { value: "dairy_free", label: "Dairy-Free" },
      { value: "nut_allergy", label: "Nut Allergy" },
      { value: "shellfish_allergy", label: "Shellfish Allergy" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Special Requests",
    placeholder: "Any special requests, accessibility needs, or additional information...",
    required: false,
    rows: 3,
    columnSpan: 12,
  },
  {
    name: "marketing_consent",
    type: "checkbox",
    label: "Send me exclusive offers and updates",
    required: false,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactReservation
      heading="Make a Reservation"
      description="Reserve your table today for an unforgettable dining experience. We'll confirm your reservation within 1 hour during business hours."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Your reservation request has been received! We'll send you a confirmation email within the hour. See you soon!",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Reserve Table",
          },
        },
      }}
      background="muted"
      pattern="dashedGridFadeTop"
      patternOpacity={0.6}
    />
  );
}
