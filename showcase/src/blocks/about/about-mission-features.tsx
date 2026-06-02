import { AboutMissionFeatures } from "@opensite/ui/blocks/about/about-mission-features";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutMissionFeatures
      title="Transforming Ideas Into Impact"
      description="We partner with forward-thinking organizations to build digital experiences that drive growth and create lasting value."
      missionLabel="Our Mission"
      missionText="To empower businesses with technology that simplifies complexity, amplifies creativity, and accelerates success in an ever-evolving digital landscape."
      mainImage={{
        src: "https://toastability-production.s3.amazonaws.com/g607vblaarqctl1cvgxffhx4pw6g",
        alt: "Team working together",
      }}
      missionBackgroundImage={{
        src: "https://toastability-production.s3.amazonaws.com/4xpu1ljr9c8g6qzmfum5ygjzbzpb",
        alt: "Abstract background",
      }}
      featuresTitle="What Sets Us Apart"
      featuresDescription="Our unique approach combines deep expertise with genuine partnership to deliver exceptional results."
      features={[
        {
          icon: (
            <DynamicIcon
              name="lucide/target"
              size={24}
              className="text-primary"
            />
          ),
          title: "Strategic Focus",
          description:
            "Every project begins with understanding your goals. We align our work with your business objectives to ensure measurable impact.",
          href: "#",
        },
        {
          icon: (
            <DynamicIcon name="lucide/zap" size={24} className="text-primary" />
          ),
          title: "Rapid Execution",
          description:
            "Our agile methodology enables quick iterations and fast time-to-market without compromising on quality.",
          href: "#",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/heart"
              size={24}
              className="text-primary"
            />
          ),
          title: "Human-Centered",
          description:
            "We design for people first. Every decision is informed by user research and validated through testing.",
          href: "#",
        },
      ]}
      pattern="p6"
      patternOpacity={1}
      background="gray"
    />
  );
}
