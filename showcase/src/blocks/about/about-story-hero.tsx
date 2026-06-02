import { AboutStoryHero } from "@opensite/ui/blocks/about/about-story-hero";

export default function Demo() {
  return (
    <AboutStoryHero
      subtitle="About Us"
      title="We Build Digital Experiences That Matter"
      content={`Founded in 2010, we've grown from a small team with big dreams into a global force for digital innovation. Our mission has always been simple: create technology that empowers people and transforms businesses.

We believe that great products come from understanding people first. That's why we invest deeply in research, collaborate closely with our clients, and never stop iterating until we get it right.`}
      heroImage={{
        src: "https://toastability-production.s3.amazonaws.com/xwh1zzxgyd887thfm1j9lu9qnd6c",
        alt: "Team working together",
      }}
      teamInfo={{
        title: "200+ Team Members",
        description:
          "Designers, engineers, and strategists working together across 12 global offices.",
      }}
      background="gray"
      pattern="gridBasic"
      patternOpacity={0.9}
    />
  );
}
