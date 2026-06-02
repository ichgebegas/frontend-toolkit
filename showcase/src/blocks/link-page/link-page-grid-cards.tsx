import { LinkPageGridCards } from "@opensite/ui/blocks/link-page/link-page-grid-cards";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <LinkPageGridCards
      name="Marcus Chen"
      bio="Product Designer & Digital Artist"
      avatar={{
        src: brandLogoPlaceholders.white[0],
        alt: "Marcus Chen",
      }}
      logo={{
        src: brandLogoPlaceholders.black[0],
        alt: "Marcus Chen",
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
          label: "Design Work",
          description: "View my portfolio",
          href: "https://example.com/portfolio",
          iconName: "lucide/palette",
        },
        {
          id: "2",
          label: "Case Studies",
          description: "Deep dives into projects",
          href: "https://example.com/case-studies",
          iconName: "lucide/file-text",
        },
        {
          id: "3",
          label: "NFT Collection",
          description: "Digital art drops",
          href: "https://example.com/nft",
          iconName: "lucide/sparkles",
        },
        {
          id: "4",
          label: "Design System",
          description: "Open source toolkit",
          href: "https://example.com/design-system",
          iconName: "lucide/layers",
        },
        {
          id: "5",
          label: "Figma Templates",
          description: "UI kits & resources",
          href: "https://example.com/templates",
          iconName: "lucide/layout-template",
        },
        {
          id: "6",
          label: "Contact",
          description: "Let's collaborate",
          href: "https://example.com/contact",
          iconName: "lucide/send",
        },
      ]}
      columns={3}
      footerAction={{
        label: "Built with Toolkit",
        href: "#",
        iconAfter: <DynamicIcon name="lucide/code-2" size={16} />,
      }}
      spacing="xl"
      pattern="diagonalCrossFadeTop"
      patternOpacity={0.08}
      background="dark"
    />
  );
}
