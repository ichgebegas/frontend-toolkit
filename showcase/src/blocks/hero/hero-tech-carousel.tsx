import { HeroTechCarousel } from "@opensite/ui/blocks/hero/hero-tech-carousel";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTechCarousel
      spacing="mt-8 md:mt-0"
      items={[
        {
          logo: {
            src: "https://cdn.ing/assets/i/r/288967/cn6z89c4c23ubohkz6kv3npdn672/ui-placeholder-logo-white-5.png",
            alt: "InsuranceSite",
          },
          title: "Agency Automation",
          content:
            "Modern broker tooling that helps independent agents close policies faster.",
          actions: [
            {
              label: "Get Started",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          backgroundMedia: [
            {
              src: "https://toastability-production.s3.amazonaws.com/gxs6zevccphti0hdq5l9fwytprpr",
              alt: "Insurance Site Slide 1",
            },
            {
              src: "https://toastability-production.s3.amazonaws.com/0x7ktdk01jfaoysst0emzvqevu19",
              alt: "Insurance Site Slide 2",
            },
            {
              src: "https://toastability-production.s3.amazonaws.com/okf6fg4n9yv59up8ivgcdjy3w030",
              alt: "Insurance Site Slide 3",
            },
          ],
        },
        {
          logo: {
            src: "https://cdn.ing/assets/i/r/288963/4kq4loxmhh5lwc7scw7hhusu87km/ui-placeholder-logo-white-1.png",
            alt: "Toolkit",
          },
          title: "Enterprise AI",
          content:
            "AI-first solutions that help enterprises automate workflows and unlock new efficiencies.",
          actions: [
            {
              label: "Get Started",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          backgroundMedia: [
            {
              src: "https://toastability-production.s3.amazonaws.com/9ughnl9wnko2vdboib8n3wl3cxsy",
              alt: "Toolkit Slide 1",
            },
            {
              src: "https://toastability-production.s3.amazonaws.com/4xjcgtlwseruezhoh3o1ga4umhj4",
              alt: "Toolkit Slide 2",
            },
            {
              src: "https://toastability-production.s3.amazonaws.com/xwh1zzxgyd887thfm1j9lu9qnd6c",
              alt: "Toolkit Slide 3",
            },
          ],
        },
        {
          logo: {
            src: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
            alt: "CastKit",
          },
          title: "Podcasting on Autopilot",
          content:
            "AI-powered podcast production from raw recording to publish-ready episode.",
          actions: [
            {
              label: "Get Started",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          backgroundMedia: [
            {
              src: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh",
              alt: "CastKit Slide 1",
            },
            {
              src: "https://toastability-production.s3.amazonaws.com/w41h7890eivogu3sr78vlwkpzz8g",
              alt: "CastKit Slide 2",
            },
            {
              src: "https://toastability-production.s3.amazonaws.com/73e0s79u4crdu7cmjfp99j1l2v55",
              alt: "CastKit Slide 3",
            },
          ],
        },
      ]}
    />
  );
}
