import { CarouselProgressSlider } from "@opensite/ui/blocks/carousel/carousel-progress-slider";

export default function Demo() {
  return (
    <CarouselProgressSlider
      heading="Platform Capabilities"
      subheading="Discover what makes our solution the industry leader"
      slides={[
        {
          id: "analytics",
          title: "Advanced Analytics",
          description:
            "Gain deep insights into your business performance with real-time dashboards, custom reports, and predictive analytics powered by machine learning algorithms.",
          image: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
        },
        {
          id: "automation",
          title: "Intelligent Automation",
          description:
            "Streamline repetitive tasks and workflows with smart automation tools that learn from your patterns and optimize themselves over time.",
          image: "https://toastability-production.s3.amazonaws.com/kh1p8y15v55ctp5ulobm4pd77etm",
        },
        {
          id: "collaboration",
          title: "Team Collaboration",
          description:
            "Bring your entire team together with integrated chat, video conferencing, file sharing, and project management tools in one unified platform.",
          image: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh",
        },
        {
          id: "integrations",
          title: "Seamless Integrations",
          description:
            "Connect with 1,000+ apps and services through our robust API and pre-built integrations. Your tools work better together.",
          image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
        },
        {
          id: "security",
          title: "Enterprise Security",
          description:
            "Rest easy with SOC 2 Type II compliance, end-to-end encryption, SSO, and advanced access controls that protect your sensitive data.",
          image: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
        },
      ]}
      pattern="diagonalCrossBasic"
      patternOpacity={0.8}
      background="gray"
      spacing="hero"
    />
  );
}
