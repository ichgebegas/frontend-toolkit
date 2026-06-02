import { LinkPageNewsletterSocial } from "@opensite/ui/blocks/link-page/link-page-newsletter-social";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { demoFormEngineApi } from "@/lib/form-demo-data";
import { brandLogoPlaceholders } from "@/lib/media";
import type { FormFieldConfig } from "@opensite/ui";

const formFields: FormFieldConfig[] = [
  {
    name: "email",
    type: "email",
    className: "w-full",
    placeholder: "Enter your email",
    required: true,
    columnSpan: 12,
  },
];

export default function Demo() {
  return (
    <LinkPageNewsletterSocial
      name="Jamie Taylor"
      bio="Marketing Expert & Growth Strategist"
      avatar={{
        src: brandLogoPlaceholders.black[0],
        alt: "Jamie Taylor",
      }}
      logo={{
        src: brandLogoPlaceholders.black[0],
        alt: "Jamie Taylor",
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
      newsletterHeading="Join 10,000+ Marketers"
      newsletterDescription="Get weekly tips on growth marketing and audience building delivered to your inbox every Friday."
      formEngineSetup={{
        api: demoFormEngineApi,
        fields: formFields,
        successMessage:
          "Thank you for subscribing! Check your inbox for a confirmation email.",
      }}
      links={[
        {
          id: "1",
          label: "Free Marketing Course",
          href: "https://example.com/course",
          iconName: "lucide/graduation-cap",
        },
        {
          id: "2",
          label: "Growth Templates",
          href: "https://example.com/templates",
          iconName: "lucide/file-spreadsheet",
        },
        {
          id: "3",
          label: "1-on-1 Coaching",
          href: "https://example.com/coaching",
          iconName: "lucide/user-plus",
        },
        {
          id: "4",
          label: "Podcast Episodes",
          href: "https://example.com/podcast",
          iconName: "lucide/mic",
        },
        {
          id: "5",
          label: "Community Forum",
          href: "https://example.com/community",
          iconName: "lucide/users",
        },
      ]}
      footerAction={{
        label: "Built with Toolkit",
        href: "#",
        iconAfter: <DynamicIcon name="lucide/sparkles" size={16} />,
      }}
      pattern="dashedGridBasic"
      patternOpacity={0.08}
      background="secondary"
    />
  );
}
