import { FooterNewsletterMinimal } from "@opensite/ui/blocks/footers/footer-newsletter-minimal";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "email",
    type: "email",
    className: "w-full",
    placeholder: "Enter your email",
    required: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <FooterNewsletterMinimal
      heading="Let's build something extraordinary together"
      supportLabel="Need help with your project?"
      supportEmail="hello@designstudio.co"
      navLinks={[
        { label: "Work", href: "#" },
        { label: "Services", href: "#" },
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
      ]}
      socialLinks={[
        { label: "Dribbble", href: "https://dribbble.com/designstudio" },
        { label: "Behance", href: "https://behance.net/designstudio" },
        { label: "Instagram", href: "https://instagram.com/designstudio" },
        { label: "Twitter", href: "https://twitter.com/designstudio" },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/company/designstudio",
        },
      ]}
      footerLinks={[
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Cookies", href: "/cookies" },
        { label: "Accessibility", href: "/accessibility" },
      ]}
      newsletterLabel="Join our creative community"
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for subscribing! Check your inbox for a confirmation email.",
      }}
      brandText="INDUSTRY STANDARD"
      copyright="Design Studio Co."
      location="San Francisco, California & Remote Worldwide"
      background="dark"
    />
  );
}
