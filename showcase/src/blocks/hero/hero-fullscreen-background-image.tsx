import { HeroFullscreenBackgroundImage } from "@opensite/ui/blocks/hero/hero-fullscreen-background-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroFullscreenBackgroundImage
      heading="Experience the extraordinary"
      description="Immersive experiences that captivate and inspire. Make a bold statement with stunning visuals."
      logo={{
        src: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
        alt: "Brand Logo",
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Talk to Sales",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/phone" size={16} />,
        },
      ]}
      backgroundImage={
        "https://toastability-production.s3.amazonaws.com/w41h7890eivogu3sr78vlwkpzz8g"
      }
    />
  );
}
