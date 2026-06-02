import { optixFlowApiKey } from "@/lib/media";
import { HeroPresentationPlatformVideo } from "@opensite/ui/blocks/hero/hero-presentation-platform-video";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPresentationPlatformVideo
      subtitle="Presentation Platform"
      heading="Create stunning presentations in minutes"
      description="Beautiful templates, smart layouts, and powerful collaboration tools. Make every presentation memorable."
      actions={[
        {
          label: "Start Creating",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Templates",
          href: "#",
          variant: "outline",
        },
      ]}
      backgroundVideo={{
        video: {
          masterPlaylistUrl:
            "https://cdn.ing/assets/video/uploads/283393/hls/38865/master.m3u8",
          fallbackSrc:
            "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
          optixFlowApiKey: optixFlowApiKey,
        },
      }}
      background="dark"
    />
  );
}
