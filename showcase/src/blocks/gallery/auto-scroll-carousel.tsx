import { AutoScrollCarousel } from "@opensite/ui/blocks/gallery/auto-scroll-carousel";

export default function Demo() {
  return (
    <AutoScrollCarousel
      heading="Bringing your data to life with AI"
      description="Our team of data scientists and AI engineers transform complex datasets into actionable insights that drive business growth and innovation."
      action={{
        label: "Explore our solutions",
        href: "#",
      }}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/xlp46pzk3a4d73jgjx4s7xdafwpn", alt: "Team collaboration" },
        { src: "https://toastability-production.s3.amazonaws.com/g1iuifb3yzoofo9c7a00koyn6q1t", alt: "Data analytics dashboard" },
        { src: "https://toastability-production.s3.amazonaws.com/z9u4sdrj2oq3eds0qyui0nxsus3j", alt: "AI model training" },
        { src: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson", alt: "Research and development" },
        { src: "https://toastability-production.s3.amazonaws.com/pjgb223h1bjywdk15i3zi7pjhutg", alt: "Innovation workshop" },
        { src: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q", alt: "Technology showcase" },
        { src: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz", alt: "Product demonstration" },
        { src: "https://toastability-production.s3.amazonaws.com/oe0y4bgiylx81fbfvsw31mhdgjzs", alt: "Client presentation" },
        { src: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0", alt: "Team meeting" },
        { src: "https://toastability-production.s3.amazonaws.com/cen5x90p3kbdafb80liq1a5j222x", alt: "Office environment" },
        { src: "https://toastability-production.s3.amazonaws.com/ygob90kp07hxmi5jj4sned76dnmc", alt: "Creative workspace" },
        { src: "https://toastability-production.s3.amazonaws.com/qhz2kawawq3bbh7nusz3bvahln3v", alt: "Team collaboration" },
      ]}
      autoScrollSpeed={0.5}
      background="gray"
      spacing="pt-6 pb-20 md:pt-32 md:pb-32"
      pattern="gridDotsBasic"
      patternOpacity={1}
    />
  );
}
