import { AboutVisionGallery } from "@opensite/ui/blocks/about/about-vision-gallery";

export default function Demo() {
  return (
    <AboutVisionGallery
      title="Shaping the Future of Digital"
      subtitle="We combine creativity, technology, and strategy to build experiences that inspire and endure."
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/5jsc0b4e3gxnjs81iotw2c3e6da3",
          alt: "Team collaboration",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/0g6t701zqr2r7najmdgftpeqnxmz",
          alt: "Modern workspace",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/u3p1hlbm2c1vvkwlm8h668pe132z",
          alt: "Creative session",
        },
      ]}
      primarySectionTitle="Our Mission"
      primarySectionContent={`We exist to democratize access to world-class digital experiences. Every business, regardless of size, deserves technology that empowers growth and creates meaningful connections with their audience. Our approach combines deep technical expertise with genuine partnership. We don't just build products—we build relationships that last.`}
      secondarySectionTitle="Our Story"
      secondarySectionContent="we've been on a mission to transform how businesses connect with their customers. What started as a small consultancy has grown into a global team of innovators, united by a shared belief in the power of great design and technology."
      ctaTitle={`Ready to build something\namazing together?`}
      ctaAction={{
        label: "Start a Conversation",
        href: "#",
        variant: "default",
        size: "lg",
      }}
      pattern="crossPattern"
      patternOpacity={0.15}
      background="gray"
    />
  );
}
