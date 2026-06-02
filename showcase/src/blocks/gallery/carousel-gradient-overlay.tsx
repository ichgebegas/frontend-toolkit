import { CarouselGradientOverlay } from "@opensite/ui/blocks/gallery/carousel-gradient-overlay";

export default function Demo() {
  return (
    <CarouselGradientOverlay
      title="Latest Projects"
      description="Explore our portfolio of innovative solutions that have transformed businesses across industries."
      items={[
        {
          id: "1",
          title: "Digital Transformation",
          description:
            "Complete digital overhaul for Fortune 500 company, modernizing legacy systems and implementing cloud-native architecture.",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/eoa76d31ynbg34urr6e4619la1f7",
          imageAlt: "Digital transformation project",
        },
        {
          id: "2",
          title: "AI Customer Service",
          description:
            "Intelligent chatbot platform handling 10,000+ customer inquiries daily with 95% satisfaction rate and instant response times.",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y",
          imageAlt: "AI customer service interface",
        },
        {
          id: "3",
          title: "Supply Chain Optimization",
          description:
            "Real-time logistics platform reducing delivery times by 30% through predictive analytics and route optimization.",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/vvucxqs128w2d0z3n4s2z131rq7p",
          imageAlt: "Supply chain dashboard",
        },
        {
          id: "4",
          title: "Mobile Banking App",
          description:
            "Award-winning mobile application with 2M+ active users, featuring biometric authentication and instant transfers.",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          imageAlt: "Mobile banking interface",
        },
        {
          id: "5",
          title: "IoT Smart Factory",
          description:
            "Connected manufacturing platform monitoring 500+ devices in real-time, improving efficiency by 45%.",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          imageAlt: "IoT factory monitoring",
        },
      ]}
      readMoreText="View project"
      background="gray"
      spacing="py-6 md:py-40"
    />
  );
}
