"use client";

import { ContactWedding } from "@opensite/ui/blocks/contact/contact-wedding";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "partner1_name",
    type: "text",
    label: "Partner 1 Name",
    placeholder: "Full name",
    required: true,
    columnSpan: 6,
  },
  {
    name: "partner2_name",
    type: "text",
    label: "Partner 2 Name",
    placeholder: "Full name",
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
    name: "wedding_date",
    type: "date-picker",
    label: "Wedding Date",
    placeholder: "Select your wedding date",
    required: true,
    columnSpan: 6,
  },
  {
    name: "venue",
    type: "text",
    label: "Venue Name (if known)",
    placeholder: "Wedding venue",
    required: false,
    columnSpan: 6,
  },
  {
    name: "location",
    type: "text",
    label: "Wedding Location",
    placeholder: "City, State",
    required: true,
    columnSpan: 12,
  },
  {
    name: "guest_count",
    type: "select",
    label: "Expected Guest Count",
    required: true,
    columnSpan: 6,
    options: [
      { value: "under50", label: "Under 50 guests" },
      { value: "50-100", label: "50-100 guests" },
      { value: "100-150", label: "100-150 guests" },
      { value: "150-200", label: "150-200 guests" },
      { value: "200-300", label: "200-300 guests" },
      { value: "over300", label: "Over 300 guests" },
    ],
  },
  {
    name: "budget_range",
    type: "select",
    label: "Estimated Budget Range",
    required: true,
    columnSpan: 6,
    options: [
      { value: "under25k", label: "Under $25,000" },
      { value: "25k-50k", label: "$25,000 - $50,000" },
      { value: "50k-75k", label: "$50,000 - $75,000" },
      { value: "75k-100k", label: "$75,000 - $100,000" },
      { value: "over100k", label: "Over $100,000" },
      { value: "flexible", label: "Flexible/To be discussed" },
    ],
  },
  {
    name: "services_needed",
    type: "checkbox-group",
    label: "Services You're Interested In",
    placeholder: "Select all that apply",
    required: true,
    columnSpan: 12,
    layout: "grid",
    options: [
      {
        value: "planning",
        label: "Full Planning",
        description: "Complete wedding planning from start to finish.",
      },
      {
        value: "partial",
        label: "Partial Planning",
        description: "Help with specific aspects of planning.",
      },
      {
        value: "coordination",
        label: "Day-of Coordination",
        description: "Coordination on the wedding day only.",
      },
      {
        value: "venue",
        label: "Venue Selection",
        description: "Help finding and securing the perfect venue.",
      },
      {
        value: "catering",
        label: "Catering Services",
        description: "Food and beverage for your reception.",
      },
      {
        value: "photography",
        label: "Photography",
        description: "Professional wedding photography.",
      },
      {
        value: "videography",
        label: "Videography",
        description: "Wedding video and cinematography.",
      },
      {
        value: "florals",
        label: "Floral Design",
        description: "Bouquets, centerpieces, and decor.",
      },
      {
        value: "music",
        label: "Music & Entertainment",
        description: "DJ, band, or live entertainment.",
      },
      {
        value: "decor",
        label: "Decor & Styling",
        description: "Event design and decoration.",
      },
    ],
  },
  {
    name: "wedding_style",
    type: "select",
    label: "Wedding Style/Theme",
    required: false,
    columnSpan: 12,
    options: [
      { value: "classic", label: "Classic & Elegant" },
      { value: "romantic", label: "Romantic" },
      { value: "rustic", label: "Rustic & Country" },
      { value: "modern", label: "Modern & Contemporary" },
      { value: "bohemian", label: "Bohemian" },
      { value: "beachside", label: "Beachside" },
      { value: "vintage", label: "Vintage" },
      { value: "glamorous", label: "Glamorous" },
      { value: "other", label: "Other/Still deciding" },
    ],
  },
  {
    name: "content",
    type: "textarea",
    label: "Tell us about your vision",
    placeholder: "Share your wedding vision, any special requests, must-haves, or questions you'd like us to address...",
    required: true,
    rows: 5,
    columnSpan: 12,
  },
  {
    name: "inspiration_images",
    type: "file",
    label: "Upload Inspiration Photos (Optional)",
    placeholder: "Share photos that inspire your vision...",
    required: false,
    accept: "image/*",
    maxSize: 10 * 1024 * 1024,
    maxFiles: 10,
    multiple: true,
    columnSpan: 12,
  },
  {
    name: "how_did_you_hear",
    type: "select",
    label: "How did you hear about us?",
    required: false,
    columnSpan: 12,
    options: [
      { value: "google", label: "Google Search" },
      { value: "instagram", label: "Instagram" },
      { value: "facebook", label: "Facebook" },
      { value: "pinterest", label: "Pinterest" },
      { value: "wedding_website", label: "Wedding planning website" },
      { value: "referral", label: "Referral from friend/family" },
      { value: "venue", label: "Referred by venue" },
      { value: "other", label: "Other" },
    ],
  },
];

export default function Demo() {
  return (
    <ContactWedding
      heading="Let's Plan Your Perfect Day"
      description="Congratulations on your engagement! We're honored that you're considering us for your special day. Tell us about your vision and we'll create a custom proposal tailored to your dream wedding."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage: "Thank you for reaching out! We're excited to learn about your wedding plans. We'll review your inquiry and get back to you within 24-48 hours to schedule a consultation.",
        formLayoutSettings: {
          submitButtonSetup: {
            submitLabel: "Submit Wedding Inquiry",
          },
        },
      }}
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
    />
  );
}
