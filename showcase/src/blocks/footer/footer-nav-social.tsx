import { FooterNavSocial } from "@opensite/ui/blocks/footers/footer-nav-social";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterNavSocial
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "CloudBase Platform",
        title: "CloudBase",
      }}
      sections={[
        {
          title: "Platform",
          links: [
            { name: "Cloud Infrastructure", href: "/platform/infrastructure" },
            { name: "Serverless Functions", href: "/platform/functions" },
            { name: "Database Services", href: "/platform/database" },
            { name: "Edge Computing", href: "/platform/edge" },
            { name: "Container Registry", href: "/platform/registry" },
          ],
        },
        {
          title: "Solutions",
          links: [
            { name: "E-Commerce", href: "/solutions/ecommerce" },
            { name: "SaaS Applications", href: "/solutions/saas" },
            { name: "Mobile Backends", href: "/solutions/mobile" },
            { name: "Enterprise Apps", href: "/solutions/enterprise" },
            { name: "AI & Machine Learning", href: "/solutions/ai" },
          ],
        },
        {
          title: "Developers",
          links: [
            { name: "Getting Started", href: "/docs/getting-started" },
            { name: "API Documentation", href: "/docs/api" },
            { name: "SDK Libraries", href: "/docs/sdks" },
            { name: "Integrations", href: "/docs/integrations" },
            { name: "CLI Tools", href: "/docs/cli" },
          ],
        },
      ]}
      socialLinks={[
        { href: "https://github.com/cloudbase", label: "GitHub" },
        { href: "https://twitter.com/cloudbase", label: "Twitter" },
        { href: "https://linkedin.com/company/cloudbase", label: "LinkedIn" },
        { href: "https://youtube.com/@cloudbase", label: "YouTube" },
        { href: "https://discord.gg/cloudbase", label: "Discord" },
      ]}
      newsletterHeading="Stay Updated"
      newsletterDescription="Get the latest product updates, engineering blog posts, and cloud infrastructure insights delivered to your inbox."
      newsletterPlaceholder="your@email.com"
      newsletterButtonText="Subscribe"
      socialTitle="Follow Us"
      copyright="CloudBase Inc."
      legalLinks={[
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "Security", href: "/security" },
      ]}
      background="gray"
      spacing="xl"
    />
  );
}
