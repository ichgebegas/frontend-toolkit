import { HeroGradientAvatarsRating } from "@opensite/ui/blocks/hero/hero-gradient-avatars-rating";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroGradientAvatarsRating
      heading="Loved by thousands of users"
      description="Join our community of satisfied customers and experience the difference. Rated 4.9/5 by over 10,000 users."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Read Reviews",
          href: "#",
          variant: "ghost",
          icon: <DynamicIcon name="lucide/star" size={16} />,
        },
      ]}
      avatars={[
        { src: "https://toastability-production.s3.amazonaws.com/x4scuzhsozrwrg703df5wbhygkgo", alt: "User 1" },
        { src: "https://toastability-production.s3.amazonaws.com/73e0s79u4crdu7cmjfp99j1l2v55", alt: "User 2" },
        { src: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05", alt: "User 3" },
        { src: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh", alt: "User 4" },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u", alt: "Hero 1" },
        { src: "https://toastability-production.s3.amazonaws.com/ms4s4zyqpmboh0slez1cwat9qhw4", alt: "Hero 2" },
      ]}
      ratingValue="4.9"
      ratingLabel="10,000+ happy users"
      background="gradient"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
