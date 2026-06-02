import { LinkPageBentoLayout } from "@opensite/ui/blocks/link-page/link-page-bento-layout";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <LinkPageBentoLayout
      name="Sarah Mitchell"
      bio="Helping brands tell their story"
      avatar={{
        src: brandLogoPlaceholders.white[0],
        alt: "Sarah Mitchell",
      }}
      logo={{
        src: brandLogoPlaceholders.white[0],
        alt: "Sarah Mitchell",
      }}
      socialLinks={[
        {
          id: "1",
          href: "https://instagram.com",
        },
        {
          id: "2",
          href: "https://twitter.com",
        },
        {
          id: "3",
          href: "https://linkedin.com",
        },
        {
          id: "4",
          href: "https://youtube.com",
        },
      ]}
      links={[
        {
          id: "1",
          label: "Latest Video Series",
          description: "5 Days of Brand Strategy",
          href: "#",
          iconName: "simple-icons/youtube",
          featured: true,
          image: {
            src: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv",
            alt: "Latest Video Series",
          },
        },
        {
          id: "2",
          label: "Download Free Guide",
          description: "The Ultimate Brand Playbook",
          href: "#",
          iconName: "lucide/download",
          featured: true,
          image: {
            src: "https://toastability-production.s3.amazonaws.com/0x7ktdk01jfaoysst0emzvqevu19",
            alt: "Brand Playbook",
          },
        },
        {
          id: "3",
          label: "Start Free Trial",
          description: "Experience our platform with a 14-day free trial.",
          href: "#",
          iconName: "lucide/rocket",
          featured: true,
          image: {
            src: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x",
            alt: "Free Trial",
          },
        },
        {
          id: "4",
          label: "Portfolio",
          href: "#",
          iconName: "lucide/briefcase",
        },
        {
          id: "5",
          label: "Shop Presets",
          href: "#",
          iconName: "lucide/shopping-bag",
        },
        {
          id: "6",
          label: "Book a Call",
          href: "#",
          iconName: "lucide/calendar",
        },
        {
          id: "7",
          label: "Newsletter",
          href: "#",
          iconName: "lucide/mail",
        },
      ]}
      footerAction={{
        label: "Made with Toolkit",
        href: "#",
        iconAfter: <DynamicIcon name="lucide/sparkles" size={16} />,
      }}
      spacing="xl"
      pattern="gridFadeTop"
      patternOpacity={0.05}
      background="dark"
    />
  );
}
