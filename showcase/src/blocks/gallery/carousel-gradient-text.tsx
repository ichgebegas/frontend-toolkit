import { CarouselGradientText } from "@opensite/ui/blocks/gallery/carousel-gradient-text";

export default function Demo() {
  return (
    <CarouselGradientText
      heading="Our Work"
      subheading="Portfolio"
      tagline="Innovative solutions that drive results"
      items={[
        {
          image: "https://toastability-production.s3.amazonaws.com/0o6d7z4mm9nzeufhv9kefrhihbip",
          imageAlt: "Project showcase 1",
          title: "Enterprise SaaS Platform",
          href: "#",
          description:
            "Scalable multi-tenant platform serving 100,000+ users with 99.99% uptime and enterprise-grade security.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt",
          imageAlt: "Project showcase 2",
          title: "E-commerce Marketplace",
          href: "#",
          description:
            "High-performance marketplace processing $50M+ in annual transactions with real-time inventory management.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          imageAlt: "Project showcase 3",
          title: "Healthcare Portal",
          href: "#",
          description:
            "HIPAA-compliant patient portal enabling secure communication and appointment scheduling for 200+ clinics.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/n001o4pfpszmyw03ubctig7kvf0e",
          imageAlt: "Project showcase 4",
          title: "Fintech Dashboard",
          href: "#",
          description:
            "Real-time financial analytics platform with customizable widgets and advanced reporting capabilities.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08",
          imageAlt: "Project showcase 5",
          title: "Education LMS",
          href: "#",
          description:
            "Comprehensive learning management system supporting 50,000+ students with interactive content and assessments.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
          imageAlt: "Project showcase 1",
          title: "Enterprise SaaS Platform",
          href: "#",
          description:
            "Scalable multi-tenant platform serving 100,000+ users with 99.99% uptime and enterprise-grade security.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/t502cfynqso7ntkdvmcmfc87yjkt",
          imageAlt: "Project showcase 2",
          title: "E-commerce Marketplace",
          href: "#",
          description:
            "High-performance marketplace processing $50M+ in annual transactions with real-time inventory management.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/ihgx63s5nfzp2e93e3ccljjnnrov",
          imageAlt: "Project showcase 3",
          title: "Healthcare Portal",
          href: "#",
          description:
            "HIPAA-compliant patient portal enabling secure communication and appointment scheduling for 200+ clinics.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/b555hwjt7ltr81et05v5254q1ak6",
          imageAlt: "Project showcase 4",
          title: "Fintech Dashboard",
          href: "#",
          description:
            "Real-time financial analytics platform with customizable widgets and advanced reporting capabilities.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/c4sgsy0g7o2rrjmvm9x7evxems82",
          imageAlt: "Project showcase 5",
          title: "Education LMS",
          href: "#",
          description:
            "Comprehensive learning management system supporting 50,000+ students with interactive content and assessments.",
        },
      ]}
      background="dark"
      spacing="py-6 md:py-40"
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
