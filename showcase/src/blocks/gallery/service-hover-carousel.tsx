import { ServiceHoverCarousel } from "@opensite/ui/blocks/gallery/service-hover-carousel";

export default function Demo() {
  return (
    <ServiceHoverCarousel
      heading="Our Services"
      items={[
        {
          id: "1",
          title: "Web Development",
          price: "$5,000",
          image: "https://toastability-production.s3.amazonaws.com/gxs6zevccphti0hdq5l9fwytprpr",
          imageAlt: "Web development service",
          hoverImage: "https://toastability-production.s3.amazonaws.com/qhz2kawawq3bbh7nusz3bvahln3v",
          hoverImageAlt: "Web development in action",
          tag: "Popular",
          href: "#",
        },
        {
          id: "2",
          title: "Mobile App Design",
          price: "$7,500",
          image: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85",
          imageAlt: "Mobile app design service",
          hoverImage: "https://toastability-production.s3.amazonaws.com/102grjqg8aigxkj585s9x3xbxfv7",
          hoverImageAlt: "Mobile app design process",
          tag: "Trending",
          href: "#",
        },
        {
          id: "3",
          title: "Cloud Infrastructure",
          price: "$10,000",
          image: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
          imageAlt: "Cloud infrastructure service",
          hoverImage: "https://toastability-production.s3.amazonaws.com/50y066ms7rb5sw62u9u08jzkk8rj",
          hoverImageAlt: "Cloud infrastructure setup",
          tag: "Enterprise",
          href: "#",
        },
        {
          id: "4",
          title: "AI Integration",
          price: "$15,000",
          image: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
          imageAlt: "AI integration service",
          hoverImage: "https://toastability-production.s3.amazonaws.com/cyhcpla6me8vs936i3fw6wbhypi2",
          hoverImageAlt: "AI integration implementation",
          tag: "New",
          href: "#",
        },
        {
          id: "5",
          title: "Security Audit",
          price: "$8,000",
          image: "https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40",
          imageAlt: "Security audit service",
          hoverImage: "https://toastability-production.s3.amazonaws.com/y1aezpa78m2fhfvj8whcx337y9cb",
          hoverImageAlt: "Security audit process",
          tag: "Essential",
          href: "#",
        },
      ]}
      pricePrefix="Starting at"
      background="dark"
      spacing="py-6 md:py-40"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
