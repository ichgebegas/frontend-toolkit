import { AboutStoryGallery } from "@opensite/ui/blocks/about/about-story-gallery";

export default function Demo() {
  return (
    <AboutStoryGallery
      title="Our Journey in Pictures"
      description={`From our humble beginnings to where we are today, every milestone tells a story of growth, learning, and unwavering commitment to excellence.`}
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/ehgbcugs782765ke1l2dtbtzd918",
          alt: "Team collaboration session",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/kka8f550on7acx1lf82xleu6zhzo",
          alt: "Office celebration",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/67fnapqepn7f8vwt0x4nqho70hbz",
          alt: "Modern workspace",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/t4cidbsfz3z468bn45yqdrkbx7ou",
          alt: "Team workshop",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/gq3c9qalkiomu0rzdzxymkdaazdu",
          alt: "Conference presentation",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/9ujya2tfhxja7y5s9wb7d2u8crhd",
          alt: "Team building event",
        },
      ]}
      pattern="squareAltGrid"
      patternOpacity={1}
      background="white"
    />
  );
}
