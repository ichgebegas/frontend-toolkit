import { HeroVideoOverlayStars } from "@opensite/ui/blocks/hero/hero-video-overlay-stars";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroVideoOverlayStars
      logo={{
        src: brandLogoPlaceholders.white[0],
        alt: "Brand Logo",
      }}
      heading="Trusted by thousands"
      description="Our CRM solution is designed to streamline your business operations and improve efficiency."
      actions={[
        {
          label: "Try It Free",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      backgroundVideo={{
        video: {
          masterPlaylistUrl:
            "https://cdn.ing/assets/video/uploads/283393/hls/38865/master.m3u8",
          fallbackSrc:
            "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
        },
      }}
      trust={{
        starCount: 5,
        message: "Trusted by 2,500+ customers worldwide",
      }}
    />
  );
}
