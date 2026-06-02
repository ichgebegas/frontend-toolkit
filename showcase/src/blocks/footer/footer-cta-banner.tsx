import { FooterCtaBanner } from "@opensite/ui/blocks/footers/footer-cta-banner";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterCtaBanner
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[0],
        alt: "GrowthHub Logo",
        title: "GrowthHub",
      }}
      ctaHeading="Ready to accelerate your business growth?"
      ctaDescription="Join over 10,000 companies using GrowthHub to streamline operations, increase revenue, and scale faster than ever before. Start your free 14-day trial today."
      ctaButtonText="Start Free Trial"
      ctaButtonUrl="/signup"
      sections={[
        {
          title: "Platform",
          links: [
            { name: "Features", href: "/features" },
            { name: "Integrations", href: "/integrations" },
            { name: "Pricing", href: "/pricing" },
            { name: "Security", href: "/security" },
            { name: "Enterprise", href: "/enterprise" },
            { name: "Changelog", href: "/changelog" },
          ],
        },
        {
          title: "Resources",
          links: [
            { name: "Blog", href: "/blog" },
            { name: "Help Center", href: "/help" },
            { name: "Documentation", href: "/docs" },
            { name: "API Reference", href: "/api" },
            { name: "Templates", href: "/templates" },
            { name: "Webinars", href: "/webinars" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Press", href: "/press" },
            { name: "Partners", href: "/partners" },
            { name: "Contact", href: "/contact" },
            { name: "Support", href: "/support" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://twitter.com/growthhub",
          label: "Follow GrowthHub on Twitter",
        },
        {
          href: "https://linkedin.com/company/growthhub",
          label: "Connect with GrowthHub on LinkedIn",
        },
        {
          href: "https://github.com/growthhub",
          label: "View GrowthHub on GitHub",
        },
        {
          href: "https://youtube.com/@growthhub",
          label: "Subscribe to GrowthHub on YouTube",
        },
      ]}
      newsletterLabel="Subscribe to our newsletter"
      newsletterPlaceholder="Enter your email"
      newsletterButtonText="Subscribe"
      copyright="GrowthHub Inc."
      legalLinks={[
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ]}
      background="dark"
      pattern="gridFadeCenter"
      patternOpacity={0.15}
    />
  );
}
