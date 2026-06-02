import { LinkPageMinimalProfile } from "@opensite/ui/blocks/link-page/link-page-minimal-profile";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <LinkPageMinimalProfile
      name="Alex Rivera"
      bio="Software Engineer & Open Source Contributor"
      avatar={{
        src: brandLogoPlaceholders.black[0],
        alt: "Alex Rivera",
      }}
      logo={{
        src: brandLogoPlaceholders.black[0],
        alt: "Alex Rivera",
      }}
      links={[
        {
          id: "1",
          label: "Personal Website",
          href: "https://example.com",
          iconName: "lucide/globe",
        },
        {
          id: "2",
          label: "GitHub Projects",
          href: "https://github.com",
          iconName: "simple-icons/github",
        },
        {
          id: "3",
          label: "Technical Blog",
          href: "https://example.com/blog",
          iconName: "lucide/pen-line",
        },
        {
          id: "4",
          label: "npm Packages",
          href: "https://npmjs.com",
          iconName: "simple-icons/npm",
        },
        {
          id: "5",
          label: "Resume / CV",
          href: "https://example.com/resume",
          iconName: "lucide/file-user",
        },
        {
          id: "6",
          label: "Email Me",
          href: "mailto:alex@example.com",
          iconName: "lucide/mail",
        },
      ]}
      socialLinks={[
        {
          href: "https://github.com",
        },
        {
          href: "https://linkedin.com",
        },
        {
          href: "https://twitter.com",
        },
        {
          href: "https://dev.to",
        },
      ]}
      footerAction={{
        label: "Powered by Toolkit",
        href: "#",
        iconAfter: <DynamicIcon name="lucide/link" size={16} />,
      }}
      spacing="xl"
      pattern="architect"
      patternOpacity={0.08}
      background="gray"
    />
  );
}
