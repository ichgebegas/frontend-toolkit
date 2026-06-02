import { HeroPlatformFeaturesGrid } from "@opensite/ui/blocks/hero/hero-platform-features-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPlatformFeaturesGrid
      logo={{
        src: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png",
        alt: "Company Logo",
      }}
      subtitle="Complete Platform"
      heading="A complete platform for modern teams"
      description="All-in-one solution that combines communication, collaboration, and project management tools in a single platform."
      action={{
        label: "Explore Features",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      features={[
        {
          iconName: "lucide/message-square",
          title: "Team Chat",
          description: "Real-time messaging",
          href: "#",
        },
        {
          iconName: "lucide/video",
          title: "Video Calls",
          description: "HD video meetings",
          href: "#",
        },
        {
          iconName: "lucide/file-text",
          title: "Documents",
          description: "Collaborative editing",
          href: "#",
        },
        {
          iconName: "lucide/calendar",
          title: "Calendar",
          description: "Schedule meetings",
          href: "#",
        },
      ]}
      background="gray"
      pattern="dashedGridFadeTop"
      patternOpacity={1}
    />
  );
}
