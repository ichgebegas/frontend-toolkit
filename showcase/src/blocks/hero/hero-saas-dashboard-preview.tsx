"use client";

import { HeroSaasDashboardPreview } from "@opensite/ui/blocks/hero/hero-saas-dashboard-preview";
import { demoFormConfig } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    columnSpan: 12,
    className: "w-full",
  },
];

export default function Demo() {
  return (
    <HeroSaasDashboardPreview
      badgeText="SaaS Platform"
      badgeIcon="lucide/box"
      heading="The operating system for your business"
      description="All-in-one platform to run your business efficiently. From analytics to automation, everything you need is here."
      formFields={formFields}
      formConfig={
        {
          ...demoFormConfig,
          formLayout: "button-group",
          buttonGroupSize: "lg",
        } as any
      }
      buttonAction={{
        label: "Start Free Trial",
        variant: "default",
      }}
      successMessage="Welcome aboard! Check your email to get started."
      helperText="No credit card required. Cancel anytime."
      browserPreview={{
        url: "yourbrand.com/showcase",
        image: {
          src: "https://toastability-production.s3.amazonaws.com/qhz2kawawq3bbh7nusz3bvahln3v",
          alt: "Dashboard",
        },
      }}
      spacing="xl"
      background="dark"
    />
  );
}
