import { CarouselScaleFocus } from "@opensite/ui/blocks/gallery/carousel-scale-focus";

export default function Demo() {
  return (
    <CarouselScaleFocus
      title="Architectural Highlights"
      description="A curated selection of stunning architectural designs that showcase innovation, creativity, and functionality in modern construction."
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/ehgbcugs782765ke1l2dtbtzd918",
          alt: "Modern Architecture",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/kka8f550on7acx1lf82xleu6zhzo",
          alt: "Creative Workspace",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/67fnapqepn7f8vwt0x4nqho70hbz",
          alt: "Urban Design",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/t4cidbsfz3z468bn45yqdrkbx7ou",
          alt: "Interior Spaces",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/gq3c9qalkiomu0rzdzxymkdaazdu",
          alt: "Natural Light",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/9ujya2tfhxja7y5s9wb7d2u8crhd",
          alt: "Minimalist Design",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/hotlo54tsvl2k3eht9gg0460l9zw",
          alt: "Architectural Details",
        },
      ]}
      startIndex={1}
      background="dark"
      spacing="xl"
      pattern="dashedGridBasic"
      patternOpacity={0.15}
    />
  );
}
