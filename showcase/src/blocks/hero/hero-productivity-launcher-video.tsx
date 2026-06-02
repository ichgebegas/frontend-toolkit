import { HeroProductivityLauncherVideo } from "@opensite/ui/blocks/hero/hero-productivity-launcher-video";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroProductivityLauncherVideo
      heading="Supercharge your productivity"
      description="The ultimate productivity launcher for modern professionals. Access everything you need with a single keystroke."
      actions={[
        {
          label: "Download Free",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/download" size={16} />,
        },
        {
          label: "Watch Tour",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/play-circle" size={16} />,
        },
      ]}
      videoSrc={"https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1"}
      versionInfo={{
        version: "v2.0",
        osRequirement: "All platforms",
      }}
    />
  );
}
