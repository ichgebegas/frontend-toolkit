import { HeroTherapyTestimonialGrid } from "@opensite/ui/blocks/hero/hero-therapy-testimonial-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTherapyTestimonialGrid
      heading="Real stories, real healing"
      description="Hear from clients who've found support, growth, and healing through our therapy services."
      testimonial={{
        quote:
          "Therapy changed my life. I finally feel understood and supported. Highly recommend to anyone seeking help. Also, the therapists are amazing!",
        author: "Anonymous Client",
        avatar: { src: "https://toastability-production.s3.amazonaws.com/0o6d7z4mm9nzeufhv9kefrhihbip", alt: "Client testimonial" },
      }}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt", alt: "Therapy session 1" },
        { src: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c", alt: "Therapy session 2" },
        { src: "https://toastability-production.s3.amazonaws.com/n001o4pfpszmyw03ubctig7kvf0e", alt: "Therapy session 3" },
      ]}
      actions={[
        {
          label: "Find Your Therapist",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Read More Stories",
          href: "#",
          variant: "outline",
        },
      ]}
      background="gray"
      pattern="dashedGridBasic"
      patternOpacity={0.9}
    />
  );
}
