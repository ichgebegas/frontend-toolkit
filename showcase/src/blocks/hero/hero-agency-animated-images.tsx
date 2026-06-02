import { HeroAgencyAnimatedImages } from "@opensite/ui/blocks/hero/hero-agency-animated-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAgencyAnimatedImages
      heading="Creative solutions for modern brands"
      description="Discover a platform that empowers you to create, collaborate, and achieve amazing results. Welcome to the future of work."
      actions={[
        {
          label: "View Our Work",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson", alt: "Project 1" },
        { src: "https://toastability-production.s3.amazonaws.com/pjgb223h1bjywdk15i3zi7pjhutg", alt: "Project 2" },
        { src: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q", alt: "Project 3" },
        { src: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz", alt: "Project 4" },
      ]}
      background="gray"
    />
  );
}
