import { CarouselAutoProgressSlides } from "@opensite/ui/blocks/carousel/carousel-auto-progress-slides";

export default function Demo() {
  return (
    <CarouselAutoProgressSlides
      heading="Product Evolution"
      subheading="Watch how our platform transforms businesses"
      pattern="gridFadeCenter"
      patternOpacity={1}
      background="gray"
      items={[
        {
          src: "https://toastability-production.s3.amazonaws.com/b555hwjt7ltr81et05v5254q1ak6",
          label: "Platform Launch - Q1 2024",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
          label: "AI Integration - Q2 2024",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          label: "Enterprise Features - Q3 2024",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          label: "Global Expansion - Q4 2024",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          label: "Next Generation - 2025",
        },
      ]}
      autoAdvanceInterval={75}
    />
  );
}
