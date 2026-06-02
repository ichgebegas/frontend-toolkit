import { FooterLinksGrid } from "@opensite/ui/blocks/footers/footer-links-grid";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterLinksGrid
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[0],
        alt: "TechSolutions Logo",
        title: "TechSolutions",
      }}
      tagline="Building the future of digital innovation, one solution at a time."
      menuItems={[
        {
          title: "Products",
          links: [
            { text: "Analytics Platform", url: "/products/analytics" },
            { text: "Data Warehouse", url: "/products/warehouse" },
            { text: "API Gateway", url: "/products/api" },
            { text: "Security Suite", url: "/products/security" },
            { text: "Enterprise Solutions", url: "/products/enterprise" },
          ],
        },
        {
          title: "Company",
          links: [
            { text: "About Us", url: "/about" },
            { text: "Careers", url: "/careers" },
            { text: "Press & Media", url: "/press" },
            { text: "Investor Relations", url: "/investors" },
            { text: "Contact Sales", url: "/contact" },
          ],
        },
        {
          title: "Resources",
          links: [
            { text: "Documentation", url: "/docs" },
            { text: "API Reference", url: "/api-docs" },
            { text: "Developer Blog", url: "/blog" },
            { text: "Community Forum", url: "/community" },
            { text: "Status Dashboard", url: "/status" },
          ],
        },
        {
          title: "Support",
          links: [
            { text: "Help Center", url: "/help" },
            { text: "System Status", url: "/status" },
            { text: "Contact Support", url: "/support" },
            { text: "Training & Tutorials", url: "/training" },
            { text: "Service Level Agreement", url: "/sla" },
          ],
        },
      ]}
      copyright="TechSolutions Inc."
      bottomLinks={[
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Terms of Service", url: "/terms" },
        { text: "Cookie Settings", url: "/cookies" },
        { text: "Accessibility", url: "/accessibility" },
      ]}
      background="dark"
      spacing="lg"
      pattern="gridFadeTop"
      patternOpacity={0.1}
    />
  );
}
