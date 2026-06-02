"use client";

import { HeroComingSoonCountdown } from "@opensite/ui/blocks/hero/hero-coming-soon-countdown";
import moment from "moment";
import { demoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <HeroComingSoonCountdown
      badgeIcon="lucide/rocket"
      badgeText="Launching Soon"
      heading="Something amazing is on the way"
      description="Be the first to know when we launch. Sign up now for exclusive early access and special launch pricing."
      countdownDate={moment().add(3, "weeks").toDate()}
      formFields={formFields}
      formConfig={{
        ...demoFormConfig,
      }}
      buttonAction={{
        label: "Notify Me",
        variant: "default",
      }}
      successMessage="Thank you! We'll notify you as soon as we launch."
      helperText="We respect your privacy. Unsubscribe anytime."
      socialLinks={[
        { href: "https://twitter.com" },
        { href: "https://facebook.com" },
        { href: "https://instagram.com" },
        { href: "https://linkedin.com" },
      ]}
      background="gray"
    />
  );
}
