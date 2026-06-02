import { FooterNewsletterGrid } from "@opensite/ui/blocks/footers/footer-newsletter-grid";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterNewsletterGrid
      logo={{
        url: "#",
        src: brandLogoPlaceholders.black[0],
        alt: "DataFlow Analytics",
        title: "DataFlow",
      }}
      description="Empowering businesses with real-time data analytics, predictive insights, and intelligent automation to drive growth and innovation."
      sections={[
        {
          title: "Products",
          links: [
            { name: "Business Intelligence", href: "/products/bi" },
            { name: "Predictive Analytics", href: "/products/predictive" },
            { name: "Data Visualization", href: "/products/visualization" },
            { name: "Machine Learning", href: "/products/ml" },
            { name: "Real-time Dashboards", href: "/products/dashboards" },
          ],
        },
        {
          title: "Industries",
          links: [
            { name: "Financial Services", href: "/industries/finance" },
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "Retail & E-commerce", href: "/industries/retail" },
            { name: "Manufacturing", href: "/industries/manufacturing" },
            { name: "Telecommunications", href: "/industries/telecom" },
          ],
        },
        {
          title: "Resources",
          links: [
            { name: "Documentation", href: "/docs" },
            { name: "Case Studies", href: "/case-studies" },
            { name: "White Papers", href: "/whitepapers" },
            { name: "Webinars", href: "/webinars" },
            { name: "Research Reports", href: "/research" },
          ],
        },
      ]}
      socialLinks={[
        { href: "https://instagram.com/fashionstore", label: "Instagram" },
        { href: "https://facebook.com/fashionstore", label: "Facebook" },
        { href: "https://pinterest.com/fashionstore", label: "Pinterest" },
        { href: "https://tiktok.com/@fashionstore", label: "TikTok" },
      ]}
      newsletterTitle="Subscribe to Insights"
      newsletterPlaceholder="Enter your business email"
      newsletterButtonText="Get Updates"
      privacyText="By subscribing, you agree to our"
      privacyLinkText="Privacy Policy"
      privacyLinkUrl="#"
      copyright="DataFlow Analytics Inc."
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={0.9}
      spacing="lg"
    />
  );
}
