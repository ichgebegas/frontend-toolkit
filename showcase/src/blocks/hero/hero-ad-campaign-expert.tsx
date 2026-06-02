import { HeroAdCampaignExpert } from "@opensite/ui/blocks/hero/hero-ad-campaign-expert";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAdCampaignExpert
      heading="Your ad campaigns excel with AI-powered insights"
      description="Optimize your advertising performance with real-time analytics and automated campaign management. Deliver exceptional results across all platforms."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      mediaItem={{
        video: {
          src: "https://toastability-production.s3.amazonaws.com/c654ma8l6buzf82lngt5yq2fxoao",
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
        },
      }}
      directionConfig={{ desktop: "mediaLeft", mobile: "mediaTop" }}
      mediaAspectRatios={{ desktop: "vertical", mobile: "vertical" }}
      pattern="diagonalCrossFadeTop"
      patternOpacity={1}
      background="gray"
    />
  );
}
