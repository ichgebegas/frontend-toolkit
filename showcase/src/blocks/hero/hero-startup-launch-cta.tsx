import { HeroStartupLaunchCta } from "@opensite/ui/blocks/hero/hero-startup-launch-cta";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroStartupLaunchCta
      badge="We're Launching"
      badgeIcon={<DynamicIcon name="lucide/rocket" />}
      heading="The future of startups starts here"
      description="Join the waitlist for early access to the platform that's changing how startups build, launch, and scale."
      badgeCard={{
        logoSrc: brandLogoPlaceholders.white[0],
        title: "Toolkit",
        subtitle: "Intelligent Automation",
      }}
      imageSrc={"https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8"}
      avatars={[
        { src: "https://toastability-production.s3.amazonaws.com/cyhcpla6me8vs936i3fw6wbhypi2", alt: "Avatar 1" },
        { src: "https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40", alt: "Avatar 2" },
        { src: "https://toastability-production.s3.amazonaws.com/y1aezpa78m2fhfvj8whcx337y9cb", alt: "Avatar 3" },
      ]}
      socialProofText="5,000+ active members"
      background="dark"
      pattern="dashedGridFadeBottomLeft"
      patternOpacity={0.25}
      actions={[
        {
          label: "Join Waitlist",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "outline",
        },
      ]}
    />
  );
}
