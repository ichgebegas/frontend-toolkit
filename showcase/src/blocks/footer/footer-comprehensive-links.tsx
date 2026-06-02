import { FooterComprehensiveLinks } from "@opensite/ui/blocks/footers/footer-comprehensive-links";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterComprehensiveLinks
      logoSrc={brandLogoPlaceholders.black[0]}
      logoAlt="TechVenture Solutions Logo"
      logoHref="/"
      tagline="Innovative Technology Solutions"
      summary="We deliver cutting-edge software solutions that transform businesses through automation, AI integration, and cloud infrastructure. Trusted by over 500 companies worldwide since 2015."
      linkColumns={[
        {
          title: "Products",
          links: [
            { label: "Cloud Platform", href: "/products/cloud" },
            { label: "API Gateway", href: "/products/api" },
            { label: "Data Analytics", href: "/products/analytics" },
            { label: "Security Suite", href: "/products/security" },
            { label: "Developer Tools", href: "/products/dev-tools" },
            { label: "Enterprise Solutions", href: "/products/enterprise" },
          ],
        },
        {
          title: "Solutions",
          links: [
            { label: "For Startups", href: "/solutions/startups" },
            { label: "For Enterprise", href: "/solutions/enterprise" },
            { label: "E-commerce", href: "/solutions/ecommerce" },
            { label: "Healthcare", href: "/solutions/healthcare" },
            { label: "Financial Services", href: "/solutions/finance" },
            { label: "Education", href: "/solutions/education" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "Documentation", href: "/docs" },
            { label: "API Reference", href: "/api" },
            { label: "Tutorials", href: "/tutorials" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Webinars", href: "/webinars" },
            { label: "Community Forum", href: "/community" },
          ],
        },
        {
          title: "Company",
          links: [
            { label: "About Us", href: "/about" },
            { label: "Careers", href: "/careers" },
            { label: "Press Kit", href: "/press" },
            { label: "Partners", href: "/partners" },
            { label: "Investors", href: "/investors" },
            { label: "Contact Sales", href: "/contact-sales" },
          ],
        },
      ]}
      articleLinks={[
        {
          label: "Getting Started with Cloud Migration: A Complete Guide",
          href: "/blog/cloud-migration-guide",
        },
        {
          label: "10 Best Practices for API Security in 2026",
          href: "/blog/api-security-practices",
        },
        {
          label: "How AI is Transforming Modern Software Development",
          href: "/blog/ai-software-development",
        },
        {
          label: "The Future of Microservices Architecture",
          href: "/blog/microservices-future",
        },
        {
          label: "Building Scalable Applications with Kubernetes",
          href: "/blog/kubernetes-scalability",
        },
        {
          label: "Data Privacy Compliance: GDPR and Beyond",
          href: "/blog/data-privacy-compliance",
        },
        {
          label: "Optimizing Database Performance at Scale",
          href: "/blog/database-optimization",
        },
        {
          label: "Serverless Architecture: Pros and Cons",
          href: "/blog/serverless-architecture",
        },
        {
          label: "DevOps Best Practices for 2026",
          href: "/blog/devops-best-practices",
        },
        {
          label: "Machine Learning Model Deployment Strategies",
          href: "/blog/ml-deployment",
        },
        {
          label: "Understanding Zero Trust Security",
          href: "/blog/zero-trust-security",
        },
        {
          label: "Building Real-Time Analytics Dashboards",
          href: "/blog/realtime-analytics",
        },
      ]}
      articleSectionTitle="Latest Articles & Resources"
      contact={{
        email: "support@techventure.com",
        phone: "+1 (555) 123-4567",
        address: "1234 Innovation Drive, Silicon Valley, CA 94025",
      }}
      socialLinks={[
        {
          href: "https://linkedin.com/company/techventure",
          label: "Follow us on LinkedIn",
        },
        { href: "https://x.com/techventure", label: "Follow us on X" },
        {
          href: "https://facebook.com/techventure",
          label: "Follow us on Facebook",
        },
        {
          href: "https://youtube.com/@techventure",
          label: "Subscribe on YouTube",
        },
        {
          href: "https://instagram.com/techventure",
          label: "Follow us on Instagram",
        },
      ]}
      copyright="© 2026 TechVenture Solutions. All rights reserved."
      bottomLinks={[
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "Accessibility", href: "/accessibility" },
        { label: "Sitemap", href: "/sitemap" },
      ]}
      background="gray"
      pattern="dots"
      patternOpacity={0.3}
    />
  );
}
