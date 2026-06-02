import { optixFlowApiKey } from "@/lib/media";
import { HeroAiPoweredCarousel } from "@opensite/ui/blocks/hero/hero-ai-powered-carousel";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroAiPoweredCarousel
      badge="AI-Powered"
      badgeTagline="Next Generation Technology"
      heading="Intelligent automation for your workflow"
      description="Transform your business with AI-driven solutions that learn, adapt, and optimize automatically. Experience the future of productivity."
      optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
      logo={{
        src: brandLogoPlaceholders.black[0],
        alt: "Brand Logo",
      }}
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/sparkles" size={16} />,
        },
        {
          label: "Watch Demo",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/play-circle" size={16} />,
        },
      ]}
      carouselImages1={[
        {
          src: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz",
          alt: "AI Feature 1",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/oe0y4bgiylx81fbfvsw31mhdgjzs",
          alt: "AI Feature 2",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0",
          alt: "AI Feature 3",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/cen5x90p3kbdafb80liq1a5j222x",
          alt: "AI Feature 4",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/ygob90kp07hxmi5jj4sned76dnmc",
          alt: "AI Feature 5",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/qhz2kawawq3bbh7nusz3bvahln3v",
          alt: "AI Feature 6",
        },
      ]}
      carouselImages2={[
        {
          src: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
          alt: "AI Feature 7",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/kh1p8y15v55ctp5ulobm4pd77etm",
          alt: "AI Feature 8",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/8x62o6350p1ejm3pjrp1jwvcbh4v",
          alt: "AI Feature 9",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
          alt: "AI Feature 10",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/t502cfynqso7ntkdvmcmfc87yjkt",
          alt: "AI Feature 11",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/ihgx63s5nfzp2e93e3ccljjnnrov",
          alt: "AI Feature 12",
        },
      ]}
      pattern="squareAltGrid"
      patternOpacity={0.75}
      background="gray"
    />
  );
}
