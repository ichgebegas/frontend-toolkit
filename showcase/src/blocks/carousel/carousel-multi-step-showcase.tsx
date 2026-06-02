import { CarouselMultiStepShowcase } from "@opensite/ui/blocks/carousel/carousel-multi-step-showcase";

export default function Demo() {
  return (
    <CarouselMultiStepShowcase
      heading="How It Works"
      subheading="Get started in minutes with our simple four-step process"
      steps={[
        {
          id: "step-1",
          step: 1,
          title: "Create Your Account",
          description: "Sign up in seconds with your email or Google account. No credit card required to start exploring our platform and all its powerful features.",
          image: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
        },
        {
          id: "step-2",
          step: 2,
          title: "Connect Your Data",
          description: "Seamlessly integrate with your existing tools and services. We support over 50 popular platforms including Salesforce, HubSpot, and Slack.",
          image: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
        },
        {
          id: "step-3",
          step: 3,
          title: "Customize Your Workflow",
          description: "Tailor the platform to match your unique business processes. Use our drag-and-drop builder to create custom workflows without writing code.",
          image: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv",
        },
        {
          id: "step-4",
          step: 4,
          title: "Launch & Scale",
          description: "Go live with confidence and grow your operations effortlessly. Our infrastructure automatically scales to meet your needs as you expand.",
          image: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
        },
      ]}
      actions={[
        {
          label: "Get Started Free",
          href: "#signup",
          variant: "default",
          size: "lg",
        },
        {
          label: "Schedule Demo",
          href: "#demo",
          variant: "outline",
          size: "lg",
        },
      ]}
    />
  );
}
