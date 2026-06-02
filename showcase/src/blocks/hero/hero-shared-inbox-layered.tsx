import { HeroSharedInboxLayered } from "@opensite/ui/blocks/hero/hero-shared-inbox-layered";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSharedInboxLayered
      eyebrow="Team Inbox"
      heading="Collaborate on every customer conversation"
      description="Shared inbox that brings your team together. Assign emails, add notes, and deliver exceptional customer support together."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "ghost",
        },
      ]}
      layeredImages={{
        backgroundImage: {
          src: "https://toastability-production.s3.amazonaws.com/8x62o6350p1ejm3pjrp1jwvcbh4v",
          alt: "Shared inbox background",
        },
        foregroundImage: {
          src: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
          alt: "Inbox foreground",
        },
      }}
      background="dark"
      pattern="dashedGridFadeCenter"
      patternOpacity={0.25}
    />
  );
}
