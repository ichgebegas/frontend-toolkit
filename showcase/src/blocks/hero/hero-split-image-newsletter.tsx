"use client";

import { HeroSplitImageNewsletter } from "@opensite/ui/blocks/hero/hero-split-image-newsletter";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { demoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    required: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <HeroSplitImageNewsletter
      heading="Stay updated with our newsletter"
      description="Get the latest insights, tips, and updates delivered to your inbox every week. Join 20,000+ subscribers."
      formFields={formFields}
      formConfig={{
        ...demoFormConfig,
        formLayout: "button-group",
        buttonGroupSize: "default",
      } as any}
      buttonAction={{
        label: "Subscribe",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      successMessage="Thank you for subscribing! Check your inbox for a confirmation email."
      helperText="We respect your privacy. Unsubscribe at any time."
      image={{
        src: "https://toastability-production.s3.amazonaws.com/uh2vd59np82h8sevbmfnsha89sf1",
        alt: "Newsletter preview",
      }}
      background="gray"
    />
  );
}
