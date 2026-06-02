import { FooterNewsletterContact } from "@opensite/ui/blocks/footers/footer-newsletter-contact";
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
    <FooterNewsletterContact
      newsletterTitle="Newsletter"
      newsletterDescription="Subscribe to receive exclusive deals, product launches, and insider tips delivered straight to your inbox every week."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for subscribing! Check your inbox for a confirmation email.",
      }}
      footerLinks={[
        {
          title: "Shop",
          items: [
            { text: "New Arrivals", link: "/shop/new" },
            { text: "Best Sellers", link: "/shop/bestsellers" },
            { text: "Sale Items", link: "/shop/sale" },
            { text: "Gift Cards", link: "/shop/giftcards" },
            { text: "Collections", link: "/shop/collections" },
          ],
        },
        {
          title: "About",
          items: [
            { text: "Our Story", link: "/about" },
            { text: "Sustainability", link: "/sustainability" },
            { text: "Store Locations", link: "/stores" },
            { text: "Careers", link: "/careers" },
            { text: "Press", link: "/press" },
          ],
        },
      ]}
      contactDetails={[
        {
          icon: "lucide/phone",
          label: "(555) 123-4567",
          link: "+15551234567",
        },
        {
          icon: "lucide/mail",
          label: "support@fashionstore.com",
          link: "support@fashionstore.com",
        },
        {
          icon: "lucide/map-pin",
          label: (
            <div className="space-y-0">
              <div>123 Fashion Avenue</div>
              <div>New York, NY 10001</div>
            </div>
          ),
          link: "https://maps.app.goo.gl/gJrmVDMHcvEFkr4E7",
        },
        {
          icon: "lucide/clock",
          label: (
            <div className="space-y-0">
              <div>Mon-Fri: 9AM-8PM EST</div>
              <div>Sat-Sun: 10AM-6PM EST</div>
              <div className="flex flex-row gap-1">
                <span className="font-semibold">Happy Hour</span>
                <span>4-6 PM Daily</span>
              </div>
            </div>
          ),
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
      logo={{
        light: brandLogoPlaceholders.black[0],
        dark: brandLogoPlaceholders.white[0],
        url: "/",
      }}
      copyright="Fashion Store."
      background="muted"
      spacing="lg"
    />
  );
}
