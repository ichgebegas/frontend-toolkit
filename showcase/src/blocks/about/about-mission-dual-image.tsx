import { AboutMissionDualImage } from "@opensite/ui/blocks/about/about-mission-dual-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutMissionDualImage
      missionTitle="Our Mission"
      missionContent="To democratize access to powerful technology by creating intuitive tools that help businesses of all sizes compete and thrive in the digital economy."
      visionTitle="Our Vision"
      visionContent="A world where every entrepreneur and organization has the digital capabilities they need to bring their ideas to life and make a meaningful impact."
      primaryImage={{
        src: "https://toastability-production.s3.amazonaws.com/9ughnl9wnko2vdboib8n3wl3cxsy",
        alt: "Team collaboration",
      }}
      secondaryImage={{
        src: "https://toastability-production.s3.amazonaws.com/4xjcgtlwseruezhoh3o1ga4umhj4",
        alt: "Modern workspace",
      }}
      actions={[
        {
          label: "Learn Our Story",
          href: "#",
          variant: "default",
          size: "lg",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Meet the Team",
          href: "#",
          variant: "outline",
          size: "lg",
          iconAfter: <DynamicIcon name="lucide/users" size={16} />,
        },
      ]}
      spacing="xl"
      background="dark"
      pattern="architect"
      patternOpacity={0.33}
    />
  );
}
