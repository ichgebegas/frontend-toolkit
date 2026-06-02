import { AboutStartupTeam } from "@opensite/ui/blocks/about/about-startup-team";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutStartupTeam
      title="Meet the People Behind the Product"
      description={`We're a diverse team of designers, engineers, and strategists united by a shared passion for creating exceptional digital experiences. Our backgrounds span startups, Fortune 500 companies, and everything in between. What brings us together is a belief that great products come from great teams—and great teams are built on trust, respect, and a relentless pursuit of excellence.`}
      sidebarLinks={[
        { label: "Leadership", value: "leadership" },
        { label: "Engineering", value: "engineering" },
        { label: "Design", value: "design" },
        { label: "Operations", value: "operations" },
      ]}
      teamTitle="Team Member Directory"
      teamMembers={[
        {
          name: "Sarah Chen",
          role: "CEO & Co-Founder",
          avatar: {
            src: "https://toastability-production.s3.amazonaws.com/yw5f7iwyypf4kctpr5ye5e495swt",
            alt: "Sarah Chen",
          },
          tab: "leadership",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/twitter" size={16} />,
              url: "https://twitter.com",
              label: "Twitter",
            },
          ],
        },
        {
          name: "Marcus Johnson",
          role: "CTO & Co-Founder",
          avatar: {
            src: "https://toastability-production.s3.amazonaws.com/z37cidvud212bzqhhalrhvk7ipaa",
            alt: "Marcus Johnson",
          },
          tab: "leadership",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/github" size={16} />,
              url: "https://github.com",
              label: "GitHub",
            },
          ],
        },
        {
          name: "Emily Rodriguez",
          role: "VP of Design",
          avatar: {
            src: "https://toastability-production.s3.amazonaws.com/pfllskt7q7144l288lrnpc6gx606",
            alt: "Emily Rodriguez",
          },
          tab: "design",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/dribbble" size={16} />,
              url: "https://dribbble.com",
              label: "Dribbble",
            },
          ],
        },
        {
          name: "David Kim",
          role: "VP of Engineering",
          avatar: {
            src: "https://toastability-production.s3.amazonaws.com/fokd3hxzvdtsomagbfhqooyvndyv",
            alt: "David Kim",
          },
          tab: "engineering",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
            {
              icon: <DynamicIcon name="lucide/github" size={16} />,
              url: "https://github.com",
              label: "GitHub",
            },
          ],
        },
        {
          name: "Lisa Thompson",
          role: "VP of Operations",
          avatar: {
            src: "https://toastability-production.s3.amazonaws.com/6fffnb4phovtqkjhtzifs4rhb84u",
            alt: "Lisa Thompson",
          },
          tab: "operations",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
          ],
        },
        {
          name: "James Wilson",
          role: "VP of Sales",
          avatar: {
            src: "https://toastability-production.s3.amazonaws.com/mt87xjr79wxdhjy7496v3r6m2m9t",
            alt: "James Wilson",
          },
          tab: "operations",
          socialLinks: [
            {
              icon: <DynamicIcon name="lucide/linkedin" size={16} />,
              url: "https://linkedin.com",
              label: "LinkedIn",
            },
          ],
        },
      ]}
    />
  );
}
