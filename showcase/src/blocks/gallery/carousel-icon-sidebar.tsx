import { CarouselIconSidebar } from "@opensite/ui/blocks/gallery/carousel-icon-sidebar";

export default function Demo() {
  return (
    <CarouselIconSidebar
      title="Our Key Features"
      description="Discover the standout features that set our platform apart. Each element is designed with your success in mind, ensuring a seamless and powerful experience."
      items={[
        {
          src: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht",
          alt: "Elegant Design",
          title: "Elegant Design",
          description:
            "Beautiful interfaces that users love. Our design philosophy combines aesthetics with usability to create experiences that delight.",
          icon: "lucide/palette",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/zm88vf14geh1gh0frd3yrdlb6pl8",
          alt: "High Performance",
          title: "High Performance",
          description:
            "Lightning-fast applications optimized for speed. Every millisecond counts, and we ensure your users get the fastest experience possible.",
          icon: "lucide/zap",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/0x7ktdk01jfaoysst0emzvqevu19",
          alt: "Secure by Default",
          title: "Secure by Default",
          description:
            "Enterprise-grade security built into every layer. From encryption to authentication, we protect your data with industry best practices.",
          icon: "lucide/shield-check",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x",
          alt: "Scalable Architecture",
          title: "Scalable Architecture",
          description:
            "Infrastructure that grows with your business. Whether you have 100 or 100 million users, our platform handles it effortlessly.",
          icon: "lucide/trending-up",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/t3k42fbzq7r7j93feldqm5cj1o1n",
          alt: "24/7 Support",
          title: "24/7 Support",
          description:
            "Expert support team available around the clock. Get help whenever you need it with response times under 30 minutes.",
          icon: "lucide/headphones",
        },
      ]}
      background="gray"
      spacing="py-8 md:py-40"
      pattern="waves"
      patternOpacity={0.04}
    />
  );
}
