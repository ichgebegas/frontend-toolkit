import { CarouselHorizontalCards } from "@opensite/ui/blocks/carousel/carousel-horizontal-cards";

export default function Demo() {
  return (
    <CarouselHorizontalCards
      heading="Trending Destinations"
      subtitle="Discover the world's most captivating travel experiences"
      headingHref="#"
      items={[
        {
          id: "santorini",
          imageSrc: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz",
          title: "Santorini, Greece",
          count: "2,847",
          countLabel: "Travel Experiences",
        },
        {
          id: "kyoto",
          imageSrc: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          title: "Kyoto, Japan",
          count: "3,192",
          countLabel: "Cultural Tours",
        },
        {
          id: "patagonia",
          imageSrc: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9",
          title: "Patagonia, Chile",
          count: "1,563",
          countLabel: "Adventure Activities",
        },
        {
          id: "reykjavik",
          imageSrc: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
          title: "Reykjavik, Iceland",
          count: "2,104",
          countLabel: "Northern Lights Tours",
        },
        {
          id: "marrakech",
          imageSrc: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          title: "Marrakech, Morocco",
          count: "1,876",
          countLabel: "Cultural Experiences",
        },
        {
          id: "queenstown",
          imageSrc: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
          title: "Queenstown, New Zealand",
          count: "2,341",
          countLabel: "Outdoor Adventures",
        },
        {
          id: "barcelona",
          imageSrc: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          title: "Barcelona, Spain",
          count: "4,127",
          countLabel: "City Tours",
        },
        {
          id: "bali",
          imageSrc: "https://toastability-production.s3.amazonaws.com/e13qu3083lkhdg7th64vb628172a",
          title: "Bali, Indonesia",
          count: "3,658",
          countLabel: "Wellness Retreats",
        },
      ]}
      pattern="diagonalCrossBasic"
      patternOpacity={0.7}
      background="white"
    />
  );
}
