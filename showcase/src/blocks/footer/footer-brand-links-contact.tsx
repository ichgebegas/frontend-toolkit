import { FooterBrandLinksContact } from "@opensite/ui/blocks/footers/footer-brand-links-contact";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterBrandLinksContact
      logoSrc={brandLogoPlaceholders.black[0]}
      logoAlt="Modern Commerce Logo"
      tagline="Empowering businesses worldwide"
      description="Modern Commerce is a leading e-commerce platform helping thousands of businesses build, manage, and scale their online stores with cutting-edge technology and unparalleled support."
      linkGroups={[
        {
          title: "Products",
          links: [
            { label: "Online Store", href: "#" },
            { label: "Point of Sale", href: "#" },
            { label: "Mobile Commerce", href: "#" },
            { label: "Marketing Tools", href: "#" },
            { label: "Analytics", href: "#" },
            { label: "Integrations", href: "#" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Help Center", href: "#" },
            { label: "Video Tutorials", href: "#" },
            { label: "API Documentation", href: "#" },
            { label: "Developer Guides", href: "#" },
            { label: "Community Forum", href: "#" },
            { label: "Webinars", href: "#" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Press & Media", href: "#" },
            { label: "Partnerships", href: "#" },
            { label: "Affiliates", href: "#" },
            { label: "Sustainability", href: "#" },
          ],
        },
      ]}
      contactTitle="Contact Us"
      contactItems={[
        {
          icon: "lucide/mail",
          label: "support@moderncommerce.com",
          href: "mailto:support@moderncommerce.com",
        },
        {
          icon: "lucide/phone",
          label: "+1 (888) 555-7890",
          href: "tel:+18885557890",
        },
        {
          icon: "lucide/map-pin",
          label: "123 Commerce Street, New York, NY 10001",
          href: "https://maps.google.com",
        },
      ]}
      socialTitle="Follow Us"
      socialLinks={[
        { href: "https://facebook.com", label: "Facebook" },
        { href: "https://twitter.com", label: "Twitter" },
        { href: "https://linkedin.com", label: "LinkedIn" },
        { href: "https://instagram.com", label: "Instagram" },
      ]}
      copyright="© 2026 Modern Commerce Inc. All rights reserved."
      legalLinks={[
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Settings", href: "#" },
      ]}
      background="gray"
      spacing="xl"
    />
  );
}
