import { CarouselPortfolioHero } from "@opensite/ui/blocks/carousel/carousel-portfolio-hero";

export default function Demo() {
  return (
    <CarouselPortfolioHero
      slides={[
        {
          id: 1,
          image: "https://toastability-production.s3.amazonaws.com/c4sgsy0g7o2rrjmvm9x7evxems82",
          title: "Brand Identity Redesign",
          description:
            "Complete visual transformation for a global tech startup",
          tag: "Branding",
        },
        {
          id: 2,
          image: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          title: "E-Commerce Platform",
          description:
            "Award-winning shopping experience with AI-powered recommendations",
          tag: "Web Design",
        },
        {
          id: 3,
          image: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          title: "Mobile Banking App",
          description: "Intuitive financial management for the modern consumer",
          tag: "Mobile Design",
        },
        {
          id: 4,
          image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          title: "Sustainability Campaign",
          description:
            "Multi-channel marketing initiative driving environmental change",
          tag: "Marketing",
        },
        {
          id: 5,
          image: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
          title: "SaaS Dashboard",
          description:
            "Enterprise analytics platform serving Fortune 500 clients",
          tag: "Product Design",
        },
      ]}
      actions={[
        {
          label: "View All Projects",
          href: "#",
          variant: "default",
          size: "lg",
          asButton: true,
        },
      ]}
      autoPlayInterval={6000}
    />
  );
}
