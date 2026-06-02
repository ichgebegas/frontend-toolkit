import { CarouselGalleryThumbnails } from "@opensite/ui/blocks/carousel/carousel-gallery-thumbnails";

export default function Demo() {
  return (
    <CarouselGalleryThumbnails
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/kh1p8y15v55ctp5ulobm4pd77etm",
          alt: "Modern minimalist living room with floor-to-ceiling windows",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
          alt: "Gourmet kitchen with marble countertops and custom cabinetry",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/8x62o6350p1ejm3pjrp1jwvcbh4v",
          alt: "Luxurious master bedroom with city skyline views",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
          alt: "Spa-inspired bathroom with rainfall shower and soaking tub",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/t502cfynqso7ntkdvmcmfc87yjkt",
          alt: "Private rooftop terrace with outdoor entertainment area",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85",
          alt: "Home office with built-in shelving and natural light",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
          alt: "Elegant dining room with designer lighting fixtures",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/e13qu3083lkhdg7th64vb628172a",
          alt: "Fitness center with state-of-the-art equipment",
        },
      ]}
      autoPlay
      autoPlayInterval={6000}
      showThumbnails={true}
      pattern="squareAltGrid"
      patternOpacity={0.25}
      background="dark"
    />
  );
}
