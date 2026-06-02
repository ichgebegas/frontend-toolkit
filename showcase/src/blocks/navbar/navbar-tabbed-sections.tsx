import { NavbarTabbedSections } from "@opensite/ui/blocks/navbars/navbar-tabbed-sections";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarTabbedSections
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          title: "TabbedNav",
          alt: "TabbedNav Logo",
        }}
        menu={[
          {
            title: "Products",
            tabs: [
              {
                id: "core-features",
                title: "Core Features",
                links: [
                  {
                    title: "Dashboard",
                    url: "#",
                    description: "Centralized command center",
                    icon: "lucide/layout-dashboard",
                  },
                  {
                    title: "Analytics",
                    url: "#",
                    description: "Track your business metrics",
                    icon: "lucide/bar-chart",
                  },
                  {
                    title: "Reports",
                    url: "#",
                    description: "Generate detailed insights",
                    icon: "lucide/file-text",
                  },
                  {
                    title: "Marketing",
                    url: "#",
                    description: "Grow your audience",
                    icon: "lucide/megaphone",
                  },
                  {
                    title: "Sales CRM",
                    url: "#",
                    description: "Manage customer relationships",
                    icon: "lucide/users",
                  },
                  {
                    title: "Email Campaigns",
                    url: "#",
                    description: "Automated email marketing",
                    icon: "lucide/mail",
                  },
                ],
              },
              {
                id: "advanced",
                title: "Advanced Tools",
                links: [
                  {
                    title: "Automation",
                    url: "#",
                    description: "Workflow automation",
                    icon: "lucide/zap",
                  },
                  {
                    title: "Integrations",
                    url: "#",
                    description: "Connect your tools",
                    icon: "lucide/plug",
                  },
                  {
                    title: "API Gateway",
                    url: "#",
                    description: "RESTful API access",
                    icon: "lucide/code-2",
                  },
                  {
                    title: "Webhooks",
                    url: "#",
                    description: "Real-time event notifications",
                    icon: "lucide/webhook",
                  },
                  {
                    title: "Custom Fields",
                    url: "#",
                    description: "Flexible data structures",
                    icon: "lucide/database",
                  },
                ],
              },
              {
                id: "collaboration",
                title: "Collaboration",
                links: [
                  {
                    title: "Team Chat",
                    url: "#",
                    description: "Real-time messaging",
                    icon: "lucide/message-circle",
                  },
                  {
                    title: "Video Calls",
                    url: "#",
                    description: "Face-to-face meetings",
                    icon: "lucide/video",
                  },
                  {
                    title: "File Sharing",
                    url: "#",
                    description: "Secure document exchange",
                    icon: "lucide/folder-open",
                  },
                  {
                    title: "Task Management",
                    url: "#",
                    description: "Project collaboration",
                    icon: "lucide/check-square",
                  },
                  {
                    title: "Calendar",
                    url: "#",
                    description: "Schedule and organize",
                    icon: "lucide/calendar",
                  },
                ],
              },
            ],
          },
          {
            title: "Solutions",
            tabs: [
              {
                id: "by-industry",
                title: "By Industry",
                links: [
                  {
                    title: "E-commerce",
                    url: "#",
                    description: "Online retail solutions",
                    icon: "lucide/shopping-cart",
                  },
                  {
                    title: "SaaS",
                    url: "#",
                    description: "Software as a service",
                    icon: "lucide/cloud",
                  },
                  {
                    title: "Healthcare",
                    url: "#",
                    description: "Medical solutions",
                    icon: "lucide/heart-pulse",
                  },
                  {
                    title: "Finance",
                    url: "#",
                    description: "Banking and fintech",
                    icon: "lucide/wallet",
                  },
                  {
                    title: "Education",
                    url: "#",
                    description: "Learning management systems",
                    icon: "lucide/graduation-cap",
                  },
                  {
                    title: "Real Estate",
                    url: "#",
                    description: "Property management tools",
                    icon: "lucide/building-2",
                  },
                ],
              },
              {
                id: "by-team",
                title: "By Team",
                links: [
                  {
                    title: "Marketing Teams",
                    url: "#",
                    description: "Campaign management tools",
                    icon: "lucide/megaphone",
                  },
                  {
                    title: "Sales Teams",
                    url: "#",
                    description: "Pipeline and deal tracking",
                    icon: "lucide/trending-up",
                  },
                  {
                    title: "Support Teams",
                    url: "#",
                    description: "Customer service platform",
                    icon: "lucide/headphones",
                  },
                  {
                    title: "Development Teams",
                    url: "#",
                    description: "Code collaboration tools",
                    icon: "lucide/code",
                  },
                  {
                    title: "Design Teams",
                    url: "#",
                    description: "Creative workflow management",
                    icon: "lucide/palette",
                  },
                  {
                    title: "HR Teams",
                    url: "#",
                    description: "People management platform",
                    icon: "lucide/user-check",
                  },
                ],
              },
              {
                id: "by-company-size",
                title: "By Company Size",
                links: [
                  {
                    title: "Startups",
                    url: "#",
                    description: "Launch and grow your business",
                    icon: "lucide/rocket",
                  },
                  {
                    title: "Small Business",
                    url: "#",
                    description: "Scale your operations",
                    icon: "lucide/briefcase",
                  },
                  {
                    title: "Mid-Market",
                    url: "#",
                    description: "Enterprise-ready features",
                    icon: "lucide/building",
                  },
                  {
                    title: "Enterprise",
                    url: "#",
                    description: "Large-scale deployments",
                    icon: "lucide/landmark",
                  },
                ],
              },
            ],
          },
          {
            title: "Resources",
            tabs: [
              {
                id: "learn",
                title: "Learn",
                links: [
                  {
                    title: "Documentation",
                    url: "#",
                    description: "Complete guides and API examples",
                    icon: "lucide/book-open",
                  },
                  {
                    title: "Video Tutorials",
                    url: "#",
                    description: "Step-by-step video guides",
                    icon: "lucide/video",
                  },
                  {
                    title: "Webinars",
                    url: "#",
                    description: "Live training sessions",
                    icon: "lucide/presentation",
                  },
                  {
                    title: "Blog",
                    url: "#",
                    description: "Latest updates and insights",
                    icon: "lucide/newspaper",
                  },
                  {
                    title: "Courses",
                    url: "#",
                    description: "In-depth learning paths",
                    icon: "lucide/graduation-cap",
                  },
                ],
              },
              {
                id: "support",
                title: "Support",
                links: [
                  {
                    title: "Help Center",
                    url: "#",
                    description: "Find answers to common questions",
                    icon: "lucide/help-circle",
                  },
                  {
                    title: "Community Forum",
                    url: "#",
                    description: "Connect with other users",
                    icon: "lucide/users",
                  },
                  {
                    title: "Contact Support",
                    url: "#",
                    description: "Get help from our team",
                    icon: "lucide/message-square",
                  },
                  {
                    title: "System Status",
                    url: "#",
                    description: "Check platform uptime",
                    icon: "lucide/activity",
                  },
                  {
                    title: "Report a Bug",
                    url: "#",
                    description: "Submit technical issues",
                    icon: "lucide/bug",
                  },
                ],
              },
              {
                id: "developers",
                title: "Developers",
                links: [
                  {
                    title: "API Reference",
                    url: "#",
                    description: "Complete API documentation",
                    icon: "lucide/code-2",
                  },
                  {
                    title: "SDKs & Libraries",
                    url: "#",
                    description: "Official client libraries",
                    icon: "lucide/package",
                  },
                  {
                    title: "Code Examples",
                    url: "#",
                    description: "Sample implementations",
                    icon: "lucide/file-code",
                  },
                  {
                    title: "Changelog",
                    url: "#",
                    description: "API version history",
                    icon: "lucide/git-commit",
                  },
                  {
                    title: "Sandbox",
                    url: "#",
                    description: "Test in development mode",
                    icon: "lucide/terminal",
                  },
                ],
              },
              {
                id: "company",
                title: "Company",
                links: [
                  {
                    title: "About Us",
                    url: "#",
                    description: "Learn about our mission",
                    icon: "lucide/info",
                  },
                  {
                    title: "Case Studies",
                    url: "#",
                    description: "Customer success stories",
                    icon: "lucide/file-text",
                  },
                  {
                    title: "Partners",
                    url: "#",
                    description: "Partner ecosystem",
                    icon: "lucide/handshake",
                  },
                  {
                    title: "Careers",
                    url: "#",
                    description: "Join our team",
                    icon: "lucide/briefcase",
                  },
                  {
                    title: "Press Kit",
                    url: "#",
                    description: "Media resources",
                    icon: "lucide/image",
                  },
                ],
              },
            ],
          },
        ]}
        authActions={[
          {
            label: "Sign In",
            variant: "ghost",
            href: "#",
          },
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
