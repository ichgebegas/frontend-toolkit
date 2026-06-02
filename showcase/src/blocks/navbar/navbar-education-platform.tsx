import { NavbarEducationPlatform } from "@opensite/ui/blocks/navbars/navbar-education-platform";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarEducationPlatform
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "EduTech",
        alt: "EduTech Logo",
      }}
      menu={[
        {
          label: "About",
          groups: [
            {
              label: "Tools",
              links: [
                {
                  title: "Course Builder",
                  description: "Create engaging online courses",
                  icon: "lucide/book-plus",
                  href: "#",
                },
                {
                  title: "Video Hosting",
                  description: "Stream educational content",
                  icon: "lucide/video",
                  href: "#",
                },
                {
                  title: "Student Dashboard",
                  description: "Track progress and assignments",
                  icon: "lucide/gauge",
                  href: "#",
                },
                {
                  title: "Live Classes",
                  description: "Interactive virtual classrooms",
                  icon: "lucide/monitor-play",
                  href: "#",
                },
              ],
              featuredImage: {
                src: "https://toastability-production.s3.amazonaws.com/ygob90kp07hxmi5jj4sned76dnmc",
                alt: "Latest platform updates",
                href: "#updates",
              },
            },
          ],
        },
        {
          label: "Resources",
          groups: [
            {
              label: "Links",
              links: [
                {
                  title: "Getting Started",
                  description: "Set up your first course",
                  icon: "lucide/rocket",
                  href: "#",
                },
                {
                  title: "Teacher Guide",
                  description: "Best practices for educators",
                  icon: "lucide/user-check",
                  href: "#",
                },
                {
                  title: "API Documentation",
                  description: "Integrate with your systems",
                  icon: "lucide/code-2",
                  href: "#",
                },
              ],
            },
          ],
        },
        {
          label: "Company",
          groups: [
            {
              label: "About",
              links: [
                {
                  title: "About Us",
                  icon: "lucide/building-2",
                  href: "#",
                },
                {
                  title: "Careers",
                  icon: "lucide/briefcase",
                  href: "#",
                },
                {
                  title: "Contact",
                  icon: "lucide/mail",
                  href: "#",
                },
              ],
            },
          ],
        },
        {
          label: "Pricing",
          href: "#pricing",
        },
      ]}
      authActions={[
        {
          label: "Login",
          variant: "link",
          size: "sm",
          href: "#",
          asButton: true,
        },
        {
          label: "Get Started",
          variant: "outline",
          size: "sm",
          href: "#",
          asButton: true,
        },
      ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
