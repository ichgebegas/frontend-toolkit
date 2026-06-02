import { FooterSocialNewsletter } from "@opensite/ui/blocks/footers/footer-social-newsletter";
import { brandLogoPlaceholders } from "@/lib/media";
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
    <FooterSocialNewsletter
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "CloudSync Logo",
      }}
      sections={[
        {
          title: "Product",
          links: [
            { name: "Features", href: "#features" },
            { name: "Pricing", href: "#pricing" },
            { name: "Enterprise", href: "#enterprise" },
            { name: "Security", href: "#security" },
            { name: "Integrations", href: "#integrations" },
          ],
        },
        {
          title: "Resources",
          links: [
            { name: "Documentation", href: "#docs" },
            { name: "API Reference", href: "#api" },
            { name: "Guides & Tutorials", href: "#guides" },
            { name: "Changelog", href: "#changelog" },
            { name: "System Status", href: "#status" },
          ],
        },
        {
          title: "Community",
          links: [
            { name: "Blog", href: "#blog" },
            { name: "Events", href: "#events" },
            { name: "Developer Forum", href: "#forum" },
            { name: "Customer Stories", href: "#stories" },
            { name: "Open Source", href: "#opensource" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About Us", href: "#about" },
            { name: "Careers", href: "#careers" },
            { name: "Press", href: "#press" },
            { name: "Partners", href: "#partners" },
            { name: "Contact", href: "#contact" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://linkedin.com/company/innovatetech",
          label: "Connect with InnovateTech on LinkedIn",
        },
        {
          href: "https://twitter.com/innovatetech",
          label: "Follow InnovateTech on Twitter",
        },
        {
          href: "https://facebook.com/innovatetech",
          label: "Like InnovateTech on Facebook",
        },
        {
          href: "https://instagram.com/innovatetech",
          label: "Follow InnovateTech on Instagram",
        },
        {
          href: "https://youtube.com/@innovatetech",
          label: "Subscribe to InnovateTech on YouTube",
        },
      ]}
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for subscribing! Check your inbox for a confirmation email.",
      }}
      copyright="CloudSync LLC"
      pattern="gridFadeTop"
      patternOpacity={1}
      background="white"
    />
  );
}
