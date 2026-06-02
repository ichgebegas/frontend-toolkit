import { HeroVideoDialogGradient } from "@opensite/ui/blocks/hero/hero-video-dialog-gradient";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroVideoDialogGradient
      heading="See our platform in action"
      description="Get a 3-minute walkthrough of our most powerful features and see why teams love working with us."
      videoAction={{
        label: "Watch Demo",
        variant: "outline",
        iconAfter: <DynamicIcon name="lucide/play" size={16} />,
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "ghost",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      image={{
        src: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh",
        alt: "Platform demo preview",
      }}
      videoDialog={{
        title: "Platform Demo",
        videoUrl: "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
      }}
      background="gradient"
      pattern="circuitBoardFadeTop"
      patternOpacity={0.1}
    />
  );
}
