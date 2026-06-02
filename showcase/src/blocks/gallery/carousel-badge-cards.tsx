import { CarouselBadgeCards } from "@opensite/ui/blocks/gallery/carousel-badge-cards";

export default function Demo() {
  return (
    <CarouselBadgeCards
      heading="Featured Case Studies"
      items={[
        {
          id: "1",
          title: "AI-Powered Analytics Platform",
          description:
            "Transforming raw data into actionable business intelligence through advanced machine learning algorithms and predictive analytics.",
          label: "Analytics",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/a3m42usevv0iet0fpfwa1fsytxmv",
          imageAlt: "Analytics dashboard interface",
        },
        {
          id: "2",
          title: "Enterprise Cloud Migration",
          description:
            "Seamless transition of legacy infrastructure to modern cloud architecture, reducing costs by 40% while improving performance.",
          label: "Cloud",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/qghzqu1i99vaubyew9s5dxcbel9l",
          imageAlt: "Cloud infrastructure visualization",
        },
        {
          id: "3",
          title: "E-commerce Personalization Engine",
          description:
            "Dynamic product recommendations powered by AI, increasing conversion rates by 35% and customer satisfaction scores.",
          label: "E-commerce",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          imageAlt: "E-commerce platform",
        },
        {
          id: "4",
          title: "Healthcare Data Integration",
          description:
            "Unified patient data platform enabling real-time insights and improving care coordination across multiple facilities.",
          label: "Healthcare",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/2d4k8d5shwg82276hzj2ztbj7mxq",
          imageAlt: "Healthcare technology",
        },
        {
          id: "5",
          title: "Financial Risk Management",
          description:
            "Real-time fraud detection system processing millions of transactions daily with 99.9% accuracy.",
          label: "Finance",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9",
          imageAlt: "Financial dashboard",
        },
      ]}
      readMoreText="Read more"
      background="white"
      spacing="lg"
      pattern="gridFadeTopLeft"
      patternOpacity={1}
    />
  );
}
