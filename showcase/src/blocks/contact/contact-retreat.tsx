"use client";

import { ContactRetreat } from "@opensite/ui/blocks/contact/contact-retreat";
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
    name: "company",
    type: "text",
    label: "Company/Organization",
    placeholder: "Your organization",
    required: false,
    columnSpan: 12,
  },
  {
    name: "retreat_type",
    type: "radio",
    label: "Type of Retreat",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "corporate",
        label: "Corporate Team Building",
        description: "Company retreats and team bonding.",
      },
      {
        value: "wellness",
        label: "Wellness Retreat",
        description: "Yoga, meditation, and mindfulness.",
      },
      {
        value: "creative",
        label: "Creative Workshop",
        description: "Artists, writers, and creatives.",
      },
      {
        value: "leadership",
        label: "Leadership Training",
        description: "Executive development programs.",
      },
      {
        value: "spiritual",
        label: "Spiritual Retreat",
        description: "Religious or spiritual gatherings.",
      },
      {
        value: "special_event",
        label: "Special Event",
        description: "Weddings, reunions, celebrations.",
      },
    ],
  },
  {
    name: "check_in",
    type: "date-picker",
    label: "Preferred Check-in Date",
    placeholder: "Select check-in date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "check_out",
    type: "date-picker",
    label: "Preferred Check-out Date",
    placeholder: "Select check-out date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "number_of_guests",
    type: "select",
    label: "Number of Guests",
    required: true,
    columnSpan: 6,
    options: [
      { value: "1-10", label: "1-10 guests" },
      { value: "11-20", label: "11-20 guests" },
      { value: "21-30", label: "21-30 guests" },
      { value: "31-40", label: "31-40 guests" },
      { value: "41-50", label: "41-50 guests" },
      { value: "51+", label: "51+ guests" },
    ],
  },
  {
    name: "accommodation_type",
    type: "select",
    label: "Accommodation Preference",
    required: false,
    columnSpan: 6,
    options: [
      { value: "shared", label: "Shared Rooms" },
      { value: "private", label: "Private Rooms" },
      { value: "suites", label: "Suites" },
      { value: "cabins", label: "Private Cabins" },
      { value: "mixed", label: "Mix of Options" },
    ],
  },
  {
    name: "catering_needs",
    type: "checkbox-group",
    label: "Catering Requirements",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "breakfast", label: "Breakfast", description: "Daily breakfast service." },
      { value: "lunch", label: "Lunch", description: "Daily lunch service." },
      { value: "dinner", label: "Dinner", description: "Daily dinner service." },
      { value: "snacks", label: "Snacks & Beverages", description: "All-day refreshments." },
      { value: "special_diet", label: "Special Dietary Needs", description: "Accommodations required." },
    ],
  },
  {
    name: "facilities_needed",
    type: "checkbox-group",
    label: "Facilities & Services Needed",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      { value: "meeting_rooms", label: "Meeting Rooms", description: "Conference spaces." },
      { value: "av_equipment", label: "A/V Equipment", description: "Projectors, sound systems." },
      { value: "outdoor_space", label: "Outdoor Spaces", description: "Gardens, patios, fire pits." },
      { value: "yoga_studio", label: "Yoga/Meditation Studio", description: "Wellness facilities." },
      { value: "recreation", label: "Recreation", description: "Pool, gym, spa." },
      { value: "transportation", label: "Transportation", description: "Airport/local shuttles." },
    ],
  },
  {
    name: "activities",
    type: "textarea",
    label: "Planned Activities",
    placeholder: "Describe any workshops, activities, or programming you're planning...",
    required: false,
    rows: 3,
    columnSpan: 12,
  },
  {
    name: "budget_range",
    type: "select",
    label: "Budget Range (per person)",
    required: false,
    columnSpan: 6,
    options: [
      { value: "500-1000", label: "$500 - $1,000" },
      { value: "1000-2000", label: "$1,000 - $2,000" },
      { value: "2000-3000", label: "$2,000 - $3,000" },
      { value: "3000-5000", label: "$3,000 - $5,000" },
      { value: "5000+", label: "$5,000+" },
      { value: "flexible", label: "Flexible" },
    ],
  },
  {
    name: "flexible_dates",
    type: "radio",
    label: "Are Your Dates Flexible?",
    required: false,
    columnSpan: 6,
    layout: "stacked",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "somewhat", label: "Somewhat" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Additional Details",
    placeholder: "Tell us more about your retreat vision, goals, special requirements, accessibility needs, etc...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "proposal_docs",
    type: "file",
    label: "Retreat Proposal or Agenda",
    placeholder: "Upload any planning documents...",
    required: false,
    accept: ".pdf,.doc,.docx,.xls,.xlsx",
    maxSize: 15 * 1024 * 1024,
    maxFiles: 3,
    multiple: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactRetreat
      heading="Plan Your Perfect Retreat"
      description="Create an unforgettable retreat experience at our peaceful sanctuary. Complete the form below and our event specialists will create a custom proposal for you."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your retreat inquiry! Our event team will review your requirements and send you a detailed proposal within 2-3 business days.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Request Retreat Proposal",
          },
        },
      }}
      background="white"
      pattern="dashedGridFadeTop"
      patternOpacity={0.4}
    />
  );
}
