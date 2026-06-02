"use client";

import { ContactRsvp } from "@opensite/ui/blocks/contact/contact-rsvp";
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
    columnSpan: 12,
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "+1 (555) 000-0000",
    required: false,
    columnSpan: 12,
  },
  {
    name: "attendance",
    type: "radio",
    label: "Will You Be Attending?",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "yes",
        label: "Joyfully Accepts",
        description: "Can't wait to celebrate with you!",
      },
      {
        value: "no",
        label: "Regretfully Declines",
        description: "Sorry to miss the celebration.",
      },
    ],
  },
  {
    name: "plus_one",
    type: "radio",
    label: "Will You Bring a Guest?",
    required: true,
    columnSpan: 12,
    layout: "stacked",
    options: [
      { value: "yes", label: "Yes, bringing a guest (+1)" },
      { value: "no", label: "No, just me" },
    ],
  },
  {
    name: "guest_name",
    type: "text",
    label: "Guest's Full Name",
    placeholder: "Guest's name (if bringing +1)",
    required: false,
    columnSpan: 12,
  },
  {
    name: "total_attending",
    type: "select",
    label: "Total Number Attending",
    required: true,
    columnSpan: 12,
    options: [
      { value: "0", label: "0 (Not attending)" },
      { value: "1", label: "1 person" },
      { value: "2", label: "2 people" },
      { value: "3", label: "3 people" },
      { value: "4", label: "4 people" },
    ],
  },
  {
    name: "meal_preference",
    type: "radio",
    label: "Meal Preference (Primary Guest)",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "beef",
        label: "Filet Mignon",
        description: "Beef tenderloin with herb butter.",
      },
      {
        value: "chicken",
        label: "Herb-Roasted Chicken",
        description: "Free-range chicken with seasonal vegetables.",
      },
      {
        value: "fish",
        label: "Pan-Seared Salmon",
        description: "Atlantic salmon with lemon dill sauce.",
      },
      {
        value: "vegetarian",
        label: "Vegetarian",
        description: "Seasonal vegetable Wellington.",
      },
      {
        value: "vegan",
        label: "Vegan",
        description: "Plant-based entree options.",
      },
    ],
  },
  {
    name: "guest_meal",
    type: "radio",
    label: "Meal Preference (Guest)",
    required: false,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "beef",
        label: "Filet Mignon",
        description: "Beef tenderloin with herb butter.",
      },
      {
        value: "chicken",
        label: "Herb-Roasted Chicken",
        description: "Free-range chicken with seasonal vegetables.",
      },
      {
        value: "fish",
        label: "Pan-Seared Salmon",
        description: "Atlantic salmon with lemon dill sauce.",
      },
      {
        value: "vegetarian",
        label: "Vegetarian",
        description: "Seasonal vegetable Wellington.",
      },
      {
        value: "vegan",
        label: "Vegan",
        description: "Plant-based entree options.",
      },
    ],
  },
  {
    name: "dietary_restrictions",
    type: "textarea",
    label: "Dietary Restrictions or Allergies",
    placeholder: "Please list any food allergies, intolerances, or special dietary needs...",
    required: false,
    rows: 2,
    columnSpan: 12,
  },
  {
    name: "song_request",
    type: "text",
    label: "Song Request",
    placeholder: "Request a song to dance to!",
    required: false,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Special Message or Notes",
    placeholder: "Any special message for the hosts, accessibility needs, or other information...",
    required: false,
    rows: 3,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactRsvp
      heading="RSVP"
      description="We can't wait to celebrate with you! Please respond by March 15th, 2026."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for your RSVP! We're excited to celebrate with you. You'll receive a confirmation email shortly with additional event details.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit RSVP",
          },
        },
      }}
      background="dark"
      pattern="architect"
      patternOpacity={0.15}
    />
  );
}
