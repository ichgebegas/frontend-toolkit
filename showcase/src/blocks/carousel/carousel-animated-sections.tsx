import { CarouselAnimatedSections } from "@opensite/ui/blocks/carousel/carousel-animated-sections";

export default function Demo() {
  return (
    <CarouselAnimatedSections
      sections={[
        {
          id: "innovation",
          subtitle: "Technology Leadership",
          title: "Building the Future of AI",
          description:
            "Explore groundbreaking innovations that transform how businesses harness artificial intelligence to solve complex challenges and unlock new opportunities.",
          image: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
          ctaText: "Discover Our Platform",
          ctaHref: "#platform",
        },
        {
          id: "design",
          subtitle: "Creative Excellence",
          title: "Design That Inspires Action",
          description:
            "Experience stunning visual narratives crafted with precision and purpose. Our design philosophy merges aesthetics with functionality to create memorable digital experiences.",
          image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          ctaText: "View Our Work",
          ctaHref: "#portfolio",
        },
        {
          id: "performance",
          subtitle: "Speed & Efficiency",
          title: "Lightning-Fast Performance",
          description:
            "Built on cutting-edge infrastructure that delivers millisecond response times. Every interaction is optimized for speed, reliability, and seamless user experience.",
          image: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
          ctaText: "See Benchmarks",
          ctaHref: "#performance",
        },
        {
          id: "security",
          subtitle: "Enterprise Security",
          title: "Fort Knox-Level Protection",
          description:
            "Your data is protected by military-grade encryption and multi-layered security protocols. We meet the highest compliance standards across all major industries.",
          image: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          ctaText: "Security Details",
          ctaHref: "#security",
        },
      ]}
    />
  );
}
