"use client";

import { ContactFitness } from "@opensite/ui/blocks/contact/contact-fitness";
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
    name: "fitness_level",
    type: "radio",
    label: "Current Fitness Level",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "beginner",
        label: "Beginner",
        description: "Just starting out",
      },
      {
        value: "intermediate",
        label: "Intermediate",
        description: "Some experience",
      },
      {
        value: "experienced",
        label: "Experienced",
        description: "Consistent training",
      },
      {
        value: "advanced",
        label: "Advanced",
        description: "Very experienced",
      },
    ],
  },
  {
    name: "goals",
    type: "checkbox-group",
    label: "Fitness Goals",
    placeholder: "Select your goals",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "weight-loss",
        label: "Weight Loss",
        description: "Lose weight and body fat.",
      },
      {
        value: "muscle-gain",
        label: "Muscle Gain",
        description: "Build strength and muscle.",
      },
      {
        value: "endurance",
        label: "Endurance",
        description: "Improve cardiovascular fitness.",
      },
      {
        value: "flexibility",
        label: "Flexibility",
        description: "Increase range of motion.",
      },
      {
        value: "general-health",
        label: "General Health",
        description: "Overall wellness and health.",
      },
      {
        value: "sports-performance",
        label: "Sports Performance",
        description: "Train for specific sport.",
      },
    ],
  },
  {
    name: "program_interest",
    type: "select",
    label: "Program Interest",
    required: true,
    columnSpan: 12,
    options: [
      {
        value: "personal-training",
        label: "Personal Training (1-on-1)",
      },
      {
        value: "group-classes",
        label: "Group Fitness Classes",
      },
      {
        value: "online-coaching",
        label: "Online Coaching",
      },
      {
        value: "nutrition",
        label: "Nutrition Coaching",
      },
      {
        value: "membership",
        label: "Gym Membership",
      },
    ],
  },
  {
    name: "start_date",
    type: "date-picker",
    label: "Preferred Start Date",
    placeholder: "When would you like to start?",
    required: false,
    columnSpan: 6,
  },
  {
    name: "availability",
    type: "select",
    label: "Preferred Training Time",
    required: false,
    columnSpan: 6,
    options: [
      {
        value: "morning",
        label: "Morning (6 AM - 10 AM)",
      },
      {
        value: "midday",
        label: "Midday (10 AM - 2 PM)",
      },
      {
        value: "afternoon",
        label: "Afternoon (2 PM - 6 PM)",
      },
      {
        value: "evening",
        label: "Evening (6 PM - 9 PM)",
      },
      {
        value: "flexible",
        label: "Flexible",
      },
    ],
  },
  {
    name: "medical_conditions",
    type: "text",
    label: "Medical Conditions or Injuries (Optional)",
    placeholder: "Any conditions we should know about?",
    required: false,
    columnSpan: 12,
  },
  {
    name: "content",
    type: "textarea",
    label: "Tell Us More About Your Goals",
    placeholder:
      "What motivates you? What challenges have you faced? What do you hope to achieve?",
    required: false,
    rows: 5,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <ContactFitness
      heading="Start Your Fitness Journey"
      description="Ready to transform your health and fitness? Schedule a free consultation with one of our certified trainers and let's create a personalized plan for you."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for reaching out! One of our trainers will contact you within 24 hours to schedule your free consultation.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Get Started",
          },
        },
      }}
      background="muted"
      pattern="architect"
      patternOpacity={0.1}
    />
  );
}
