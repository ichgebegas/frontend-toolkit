import { NavbarAnimatedPreview } from "@opensite/ui/blocks/navbars/navbar-animated-preview";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarAnimatedPreview
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          alt: "Company Logo",
        }}
        menuLinks={[
          {
            label: "Products",
            layout: "animated-image-preview",
            links: [
              {
                label: "Analytics Platform",
                description: "Real-time data insights and reporting",
                image: "https://toastability-production.s3.amazonaws.com/xlp46pzk3a4d73jgjx4s7xdafwpn",
                url: "#",
                iconName: "lucide/bar-chart",
              },
              {
                label: "Marketing Suite",
                description: "Complete marketing automation tools",
                image: "https://toastability-production.s3.amazonaws.com/g1iuifb3yzoofo9c7a00koyn6q1t",
                url: "#",
                iconName: "lucide/megaphone",
              },
              {
                label: "CRM System",
                description: "Customer relationship management",
                image: "https://toastability-production.s3.amazonaws.com/z9u4sdrj2oq3eds0qyui0nxsus3j",
                url: "#",
                iconName: "lucide/users",
              },
              {
                label: "API Platform",
                description: "Developer-friendly APIs",
                image: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson",
                url: "#",
                iconName: "lucide/code",
              },
            ],
          },
          {
            label: "Solutions",
            layout: "featured-cards-grid",
            featuredLinks: [
              {
                label: "Enterprise",
                description: "Scale your business with enterprise solutions",
                url: "#",
                iconName: "lucide/building",
                background: "https://toastability-production.s3.amazonaws.com/pjgb223h1bjywdk15i3zi7pjhutg",
              },
              {
                label: "Small Business",
                description: "Perfect tools for growing companies",
                url: "#",
                iconName: "lucide/briefcase",
                background: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q",
              },
            ],
            links: [
              {
                label: "E-Commerce",
                description: "Online store solutions",
                url: "#",
                iconName: "lucide/shopping-cart",
              },
              {
                label: "Healthcare",
                description: "HIPAA-compliant solutions",
                url: "#",
                iconName: "lucide/heart-pulse",
              },
              {
                label: "Education",
                description: "Learning management systems",
                url: "#",
                iconName: "lucide/graduation-cap",
              },
              {
                label: "Finance",
                description: "Secure financial tools",
                url: "#",
                iconName: "lucide/wallet",
              },
            ],
          },
          {
            label: "Developers",
            layout: "grouped-links-image",
            groupLinks: [
              {
                label: "Documentation",
                links: [
                  {
                    label: "Getting Started",
                    description: "Quick start guide",
                    url: "#",
                    iconName: "lucide/book-open",
                  },
                  {
                    label: "API Reference",
                    description: "Complete API docs",
                    url: "#",
                    iconName: "lucide/file-text",
                  },
                ],
              },
              {
                label: "Resources",
                links: [
                  {
                    label: "Code Examples",
                    description: "Sample implementations",
                    url: "#",
                    iconName: "lucide/code-2",
                  },
                  {
                    label: "SDKs & Tools",
                    description: "Developer tools",
                    url: "#",
                    iconName: "lucide/package",
                  },
                ],
              },
            ],
            imageLink: {
              label: "New: API v2.0 Released",
              image: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz",
              url: "#",
            },
          },
          {
            label: "Pricing",
            href: "#",
          },
        ]}
        actions={[
          {
            label: "Get Started",
            variant: "default",
            href: "#",
          },
        ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
