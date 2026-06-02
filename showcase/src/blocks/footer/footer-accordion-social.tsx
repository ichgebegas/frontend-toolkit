import { FooterAccordionSocial } from "@opensite/ui/blocks/footers/footer-accordion-social";
import { brandLogoPlaceholders } from "@/lib/media";
import { usePlatformFromUrl } from "@opensite/hooks/usePlatformFromUrl";
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
  const platform = usePlatformFromUrl("https://www.youtube.com/@iamthedelo");

  return (
    <FooterAccordionSocial
      logo={{
        src: brandLogoPlaceholders.black[0],
        alt: "Your Brand Logo",
        url: "/",
      }}
      newsletterTitle="Stay In the Loop"
      newsletterDescription="Get the latest updates on new collections, exclusive offers, and insider news delivered straight to your inbox."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for subscribing! Check your inbox for a confirmation email.",
      }}
      footerLinks={[
        {
          title: "Shop",
          id: "shop",
          items: [
            { text: "New Arrivals", href: "#" },
            { text: "Best Sellers", href: "#" },
            { text: "Sale Items", href: "#" },
            { text: "Gift Cards", href: "#" },
            { text: "Collections", href: "#" },
          ],
        },
        {
          title: "Company",
          id: "company",
          items: [
            { text: "About Us", href: "#" },
            { text: "Our Story", href: "#" },
            { text: "Careers", href: "#" },
            { text: "Press", href: "#" },
            { text: "Blog", href: "#" },
          ],
        },
        {
          title: "Support",
          id: "support",
          items: [
            { text: "Help Center", href: "#" },
            { text: "Shipping Info", href: "#" },
            { text: "Returns", href: "#" },
            { text: "Size Guide", href: "#" },
            { text: "Track Order", href: "#" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://facebook.com",
          label: "Follow us on Facebook",
        },
        {
          href: "https://instagram.com",
          label: "Follow us on Instagram",
        },
        {
          href: "https://twitter.com",
          label: "Follow us on Twitter",
        },
        {
          href: "https://pinterest.com",
          label: "Follow us on Pinterest",
        },
        {
          href: "https://youtube.com",
          label: `Subscribe to our YouTube channel: ${platform}`,
        },
      ]}
      copyright="Your Brand"
      background="gray"
    />
  );
}
