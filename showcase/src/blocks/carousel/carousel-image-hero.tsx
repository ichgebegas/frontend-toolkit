import { CarouselImageHero } from "@opensite/ui/blocks/carousel/carousel-image-hero";

export default function Demo() {
  return (
    <CarouselImageHero
      badge="New Product Launch"
      heading="Innovation That Changes Everything"
      description="Experience the next generation of technology designed to empower your business and elevate your customer experience to unprecedented heights."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          size: "lg",
        },
        {
          label: "View Services",
          href: "#",
          variant: "outline",
          size: "lg",
        },
      ]}
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/hotlo54tsvl2k3eht9gg0460l9zw",
          alt: "Seamless integration ecosystem",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl",
          alt: "Advanced AI-powered workspace",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08",
          alt: "Collaborative team environment",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
          alt: "Real-time data visualization",
        },
      ]}
      autoPlayInterval={5500}
      pattern="diagonalCrossFadeCenter"
      patternOpacity={0.8}
      background="dark"
      spacing="hero"
    />
  );
}
