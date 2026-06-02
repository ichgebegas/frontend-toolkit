import { HeroLogoCenteredScreenshot } from "@opensite/ui/blocks/hero/hero-logo-centered-screenshot";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroLogoCenteredScreenshot
      logo={{
        src: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
        alt: "Company Logo",
      }}
      heading="The platform that powers modern businesses"
      description="Trusted by thousands of companies worldwide to streamline operations and drive growth."
      action={{
        label: "Get Started",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      image={{
        src: "https://toastability-production.s3.amazonaws.com/6fffnb4phovtqkjhtzifs4rhb84u",
        alt: "Platform screenshot",
      }}
      pattern="dashedGridFadeTop"
      patternOpacity={0.15}
      background="dark"
    />
  );
}
