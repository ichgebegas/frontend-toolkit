import { DynamicIcon } from "@opensite/ui";
import { HeroTestimonialImageGrid } from "@opensite/ui/blocks/hero/hero-testimonial-image-grid";

export default function Demo() {
  return (
    <HeroTestimonialImageGrid
      heading="Loved by customers worldwide"
      description="See why thousands of businesses trust us to power their operations and drive growth."
      testimonial={{
        quote:
          "This platform transformed how we work. Absolutely game-changing.",
        author: "Sarah Johnson",
        role: "CEO",
        company: "TechCorp",
        avatars: [{ image: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo", fallback: "SJ" }],
      }}
      gridImages={[
        { src: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv", alt: "Customer success story 1" },
        { src: "https://toastability-production.s3.amazonaws.com/betxbx61fkijt0aygineplf489ze", alt: "Customer success story 2" },
        { src: "https://toastability-production.s3.amazonaws.com/0o6d7z4mm9nzeufhv9kefrhihbip", alt: "Customer success story 3" },
        { src: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt", alt: "Customer success story 4" },
      ]}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      background="dark"
      pattern="crossPattern"
      patternOpacity={0.9}
    />
  );
}
