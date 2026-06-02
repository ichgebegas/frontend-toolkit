import { FooterSimpleCentered } from "@opensite/ui/blocks/footers/footer-simple-centered";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterSimpleCentered
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "Company Logo",
        title: "TechVision",
      }}
      tagline="Building the future of digital experiences with innovative solutions that empower businesses worldwide."
      sitemap={[
        {
          title: "Product",
          links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Documentation", href: "#docs" },
            { label: "Integrations", href: "#integrations" },
            { label: "API Reference", href: "#api" },
            { label: "Release Notes", href: "#releases" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About Us", href: "#about" },
            { label: "Careers", href: "#careers" },
            { label: "Blog", href: "#blog" },
            { label: "Press Kit", href: "#press" },
            { label: "Partners", href: "#partners" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Help Center", href: "#help" },
            { label: "Community", href: "#community" },
            { label: "Tutorials", href: "#tutorials" },
            { label: "Webinars", href: "#webinars" },
            { label: "Case Studies", href: "#cases" },
          ],
        },
        {
          title: "Support",
          links: [
            { label: "Contact Us", href: "#contact" },
            { label: "System Status", href: "#status" },
            { label: "Security", href: "#security" },
            { label: "Developer Portal", href: "#developers" },
          ],
        },
      ]}
      copyright="TechVision Inc."
      bottomLinks={[
        { text: "Terms of Service", href: "#terms" },
        { text: "Privacy Policy", href: "#privacy" },
        { text: "Cookie Policy", href: "#cookies" },
        { text: "Accessibility", href: "#accessibility" },
      ]}
      background="gray"
    />
  );
}
