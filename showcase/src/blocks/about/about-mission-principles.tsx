import { AboutMissionPrinciples } from "@opensite/ui/blocks/about/about-mission-principles";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutMissionPrinciples
      badgeText="Our Mission"
      missionHeading="Empowering People Through Technology"
      missionDescription="We believe technology should serve humanity—making life simpler, work more meaningful, and connections stronger. Our mission is to build tools that amplify human potential and create opportunities for everyone."
      missionAction={{
        label: "Read Our Story",
        href: "#",
        variant: "default",
      }}
      principles={[
        {
          number: "01",
          title: "Customer-Centric",
          description:
            "Every decision starts with understanding our customers' needs. We obsess over their experience and measure our success by their success.",
        },
        {
          number: "02",
          title: "Built to Last",
          description:
            "We prioritize long-term value over short-term gains. Quality, security, and reliability are non-negotiable.",
        },
        {
          number: "03",
          title: "Inclusive by Design",
          description:
            "We build for everyone. Accessibility, diversity, and inclusion are embedded in our product development and company culture.",
        },
        {
          number: "04",
          title: "Continuous Learning",
          description:
            "We stay curious and humble. Markets change, technology evolves, and we adapt by listening, learning, and improving every day.",
        },
      ]}
      visionHeading="Our Vision for 2030"
      visionDescription="By 2030, we aim to be the most trusted platform for teams worldwide—known for innovation, reliability, and positive impact on people's work and lives."
      visionAction={{
        label: "View Our Roadmap",
        href: "#",
        variant: "outline",
        size: "lg",
      }}
      background="gray"
      pattern="noise"
      patternOpacity={1}
    />
  );
}
