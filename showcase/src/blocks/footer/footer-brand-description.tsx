import { FooterBrandDescription } from "@opensite/ui/blocks/footers/footer-brand-description";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterBrandDescription
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[0],
        alt: "TechStart Logo",
        title: "TechStart",
      }}
      description="Building the future of cloud infrastructure with intelligent automation, security-first design, and enterprise-grade reliability. Trusted by over 10,000 companies worldwide to scale their digital operations."
      socialLinks={[
        {
          href: "https://github.com",
          label: "View our GitHub repositories",
        },
        {
          href: "https://linkedin.com",
          label: "Connect on LinkedIn",
        },
        {
          href: "https://twitter.com",
          label: "Follow us on Twitter",
        },
        {
          href: "https://youtube.com",
          label: "Watch our tutorials",
        },
        {
          href: "https://discord.com",
          label: "Join our Discord community",
        },
      ]}
      sections={[
        {
          title: "Platform",
          links: [
            { name: "Infrastructure", href: "#" },
            { name: "Serverless", href: "#" },
            { name: "Databases", href: "#" },
            { name: "Analytics", href: "#" },
            { name: "Security", href: "#" },
            { name: "Monitoring", href: "#" },
          ],
        },
        {
          title: "Developers",
          links: [
            { name: "Documentation", href: "#" },
            { name: "API Reference", href: "#" },
            { name: "SDKs", href: "#" },
            { name: "CLI Tools", href: "#" },
            { name: "Changelog", href: "#" },
            { name: "Status", href: "#" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Press Kit", href: "#" },
            { name: "Partners", href: "#" },
            { name: "Contact", href: "#" },
          ],
        },
      ]}
      copyright="TechStart Inc"
      legalLinks={[
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Acceptable Use", href: "#" },
      ]}
      background="dark"
      spacing="lg"
      pattern="grid1"
      patternOpacity={0.05}
    />
  );
}
