import { NavbarEnterpriseMega } from "@opensite/ui/blocks/navbars/navbar-enterprise-mega";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarEnterpriseMega
        logo={{
          url: "#",
          src: brandLogoPlaceholders.black[0],
          alt: "Enterprise Corp Logo",
        }}
        menuLinks={[
          {
            label: "Solutions",
            layout: "solutions-with-platform",
            solutionCards: [
              {
                id: "enterprise",
                title: "Enterprise",
                description: "For large organizations",
                href: "#",
                subpages: [
                  {
                    id: "enterprise-security",
                    title: "Security",
                    href: "#",
                    icon: "lucide/shield",
                  },
                  {
                    id: "enterprise-compliance",
                    title: "Compliance",
                    href: "#",
                    icon: "lucide/check-circle",
                  },
                  {
                    id: "enterprise-support",
                    title: "24/7 Support",
                    href: "#",
                    icon: "lucide/headphones",
                  },
                ],
              },
              {
                id: "smb",
                title: "Small Business",
                description: "For growing companies",
                href: "#smb",
                subpages: [
                  {
                    id: "smb-start",
                    title: "Getting Started",
                    href: "#",
                    icon: "lucide/rocket",
                  },
                  {
                    id: "smb-templates",
                    title: "Templates",
                    href: "#",
                    icon: "lucide/layout",
                  },
                  {
                    id: "smb-training",
                    title: "Training",
                    href: "#",
                    icon: "lucide/graduation-cap",
                  },
                ],
              },
            ],
            platformItems: [
              {
                id: "react",
                title: "React",
                href: "#",
                icon: "lucide/code",
              },
              {
                id: "nodejs",
                title: "Node.js",
                href: "#",
                icon: "lucide/server",
              },
              {
                id: "python",
                title: "Python",
                href: "#",
                icon: "lucide/terminal",
              },
              {
                id: "graphql",
                title: "GraphQL",
                href: "#",
                icon: "lucide/git-graph",
              },
            ],
            featuredHeroCard: {
              title: "New Platform Release",
              description:
                "Experience the next generation of our enterprise platform with advanced features",
              href: "#",
              image: "https://toastability-production.s3.amazonaws.com/ygob90kp07hxmi5jj4sned76dnmc",
            },
          },
          {
            label: "Products",
            layout: "products-categorized",
            productCategories: [
              {
                title: "Analytics",
                products: [
                  {
                    id: "bi",
                    title: "Business Intelligence",
                    description: "Advanced analytics and reporting tools",
                    href: "#",
                    image: "https://toastability-production.s3.amazonaws.com/qhz2kawawq3bbh7nusz3bvahln3v",
                  },
                  {
                    id: "warehouse",
                    title: "Data Warehouse",
                    description: "Centralized data storage and management",
                    href: "#",
                    image: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
                  },
                ],
              },
              {
                title: "Marketing",
                products: [
                  {
                    id: "email",
                    title: "Email Campaigns",
                    description: "Automated email marketing platform",
                    href: "#",
                    image: "https://toastability-production.s3.amazonaws.com/kh1p8y15v55ctp5ulobm4pd77etm",
                  },
                  {
                    id: "social",
                    title: "Social Media",
                    description: "Social media management suite",
                    href: "#",
                    image: "https://toastability-production.s3.amazonaws.com/8x62o6350p1ejm3pjrp1jwvcbh4v",
                  },
                ],
              },
            ],
            featuredHeroCard: {
              title: "Featured Product",
              description:
                "Check out our latest product launch with cutting-edge features",
              href: "#",
              image: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
            },
          },
          {
            label: "Resources",
            layout: "resources-with-topics",
            resourceItems: [
              {
                id: "docs",
                title: "Documentation",
                description: "Complete guides and API references",
                href: "#",
                icon: "lucide/book-open",
              },
              {
                id: "blog",
                title: "Blog",
                description: "Latest updates and insights",
                href: "#",
                icon: "lucide/newspaper",
              },
              {
                id: "cases",
                title: "Case Studies",
                description: "Customer success stories",
                href: "#",
                icon: "lucide/file-text",
              },
              {
                id: "webinars",
                title: "Webinars",
                description: "Live training sessions",
                href: "#",
                icon: "lucide/video",
              },
            ],
            topicGroups: [
              {
                title: "Learning Paths",
                topics: [
                  {
                    id: "beginner",
                    title: "Beginner Guide",
                    href: "#",
                    icon: "lucide/book",
                  },
                  {
                    id: "advanced",
                    title: "Advanced Topics",
                    href: "#",
                    icon: "lucide/graduation-cap",
                  },
                  {
                    id: "certification",
                    title: "Certification",
                    href: "#",
                    icon: "lucide/award",
                  },
                ],
              },
            ],
            featuredHeroCard: {
              title: "Learning Hub",
              description:
                "Explore our comprehensive learning resources and documentation",
              href: "#",
              image: "https://toastability-production.s3.amazonaws.com/t502cfynqso7ntkdvmcmfc87yjkt",
            },
          },
          {
            label: "Company",
            href: "#",
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
