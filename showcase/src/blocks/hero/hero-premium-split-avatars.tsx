import { HeroPremiumSplitAvatars } from "@opensite/ui/blocks/hero/hero-premium-split-avatars";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPremiumSplitAvatars
      brandName="Premium"
      brandSuffix="Community"
      heading="Join an exclusive community"
      description="Connect with like-minded professionals and gain access to premium resources, events, and networking opportunities."
      image={{ src: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q", alt: "Community gathering" }}
      action={{
        label: "Join Now",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" />,
      }}
      avatars={[
        { src: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz", fallback: "M1" },
        { src: "https://toastability-production.s3.amazonaws.com/oe0y4bgiylx81fbfvsw31mhdgjzs", fallback: "M2" },
        { src: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0", fallback: "M3" },
      ]}
      socialProofText="5,000+ active members"
      background="muted"
      pattern="architect"
      patternOpacity={0.1}
    />
  );
}
