import { FooterSplitImageAccordion } from "@opensite/ui/blocks/footers/footer-split-image-accordion";
import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";
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
    <FooterSplitImageAccordion
      newsletterTitle="Join our community and save 20% on your first order"
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for subscribing! Check your inbox for a confirmation email.",
      }}
      footerLinks={[
        {
          title: "Collections",
          id: "collections",
          items: [
            { text: "New Arrivals", link: "#" },
            { text: "Best Sellers", link: "#" },
            { text: "Limited Edition", link: "#" },
            { text: "Sale Items", link: "#" },
            { text: "Gift Cards", link: "#" },
          ],
        },
        {
          title: "Customer Care",
          id: "customer-care",
          items: [
            { text: "Contact Us", link: "#" },
            { text: "Shipping Info", link: "#" },
            { text: "Returns & Exchanges", link: "#" },
            { text: "Size Guide", link: "#" },
            { text: "FAQ", link: "#" },
          ],
        },
        {
          title: "About Us",
          id: "about",
          items: [
            { text: "Our Story", link: "#" },
            { text: "Sustainability", link: "#" },
            { text: "Careers", link: "#" },
            { text: "Press", link: "#" },
            { text: "Store Locations", link: "#" },
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
      paymentPlatforms={[
        "contactless",
        "bitcoin",
        "amazon",
        "samsung",
        "afterpay",
        "cashapp",
      ]}
      submenuLinks={[
        { text: "Terms of Service", link: "#" },
        { text: "Privacy Policy", link: "#" },
        { text: "Accessibility", link: "#" },
      ]}
      footerData={{
        image: {
          src: imagePlaceholders[0],
          alt: "Luxury champagne wall with ambient lighting",
        },
        logo: {
          src: brandLogoPlaceholders.black[0],
          url: "/",
          alt: "Footer Logo",
        },
        heading: "Elevate Your Style",
        description:
          "Discover curated collections of premium fashion and lifestyle products. Quality craftsmanship meets timeless design.",
      }}
      copyright="Elevate Brand"
      background="white"
      spacing="none"
    />
  );
}
