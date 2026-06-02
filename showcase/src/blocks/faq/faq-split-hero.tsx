import { FaqSplitHero } from "@opensite/ui/blocks/faq/faq-split-hero";

export default function Demo() {
  return (
    <FaqSplitHero
      heading="Common Questions"
      subheading="Everything you need to know about our platform, features, and pricing."
      items={[
        {
          id: "demo",
          question: "Can I schedule a demo?",
          answer:
            "Yes, we offer personalized demos for teams of 5 or more. Our product specialists will walk you through features, answer questions, and show you how to maximize value for your use case.",
        },
        {
          id: "trial-limits",
          question: "Are there any limitations on the free trial?",
          answer:
            "The 14-day trial includes full access to Professional plan features with no user limits. The only restriction is that trial data is deleted if you don't upgrade within 30 days.",
        },
        {
          id: "switching",
          question: "How easy is it to switch from competitors?",
          answer:
            "We make switching easy with automated data import tools, migration guides, and dedicated onboarding support. Most teams complete the switch in under a week with zero data loss.",
        },
        {
          id: "updates",
          question: "How often do you release updates?",
          answer:
            "We ship new features and improvements every two weeks. Security patches and bug fixes are deployed immediately. All updates are seamless with no downtime or manual upgrades required.",
        },
      ]}
      mediaItem={{
        video: {
          // masterPlaylistUrl:
          //   "https://octane.cdn.ing/api/v1/video/b268d45d-175a-5c42-bb0d-207c38f384e2/master_playlist",
          // src: "https://toastability-production.s3.amazonaws.com/c654ma8l6buzf82lngt5yq2fxoao",
          masterPlaylistUrl:
            "https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/master_playlist",
          fallbackSrc:
            "https://octane.cdn.ing/api/v1/video/5ae48b81-2a69-5108-aeaa-4fa947f8d48d/progressive.mp4",
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true,
          controls: false,
        },
      }}
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.09}
      background="dark"
    />
  );
}
