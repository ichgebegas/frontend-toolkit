import { HeroWelcomeAsymmetricImages } from "@opensite/ui/blocks/hero/hero-welcome-asymmetric-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroWelcomeAsymmetricImages
      heading="Where innovation meets creativity"
      description="Discover a platform that empowers you to create, collaborate, and achieve amazing results. Welcome to the future of work."
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
          variant: "link",
        },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/9z0sbfnskx70vse99e3dfhper7i1", alt: "Feature 1" },
        { src: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht", alt: "Feature 2" },
        { src: "https://toastability-production.s3.amazonaws.com/zm88vf14geh1gh0frd3yrdlb6pl8", alt: "Feature 3" },
        { src: "https://toastability-production.s3.amazonaws.com/0x7ktdk01jfaoysst0emzvqevu19", alt: "Feature 4" },
      ]}
      background="dark"
      pattern="dashedGridFadeCenter"
      patternOpacity={0.25}
    />
  );
}
