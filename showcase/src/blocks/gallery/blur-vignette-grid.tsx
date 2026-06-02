import { BlurVignetteGrid } from "@opensite/ui/blocks/gallery/blur-vignette-grid";

export default function Demo() {
  return (
    <BlurVignetteGrid
      title="Our Portfolio"
      description="A curated selection of our finest work, showcasing the diversity and quality of projects we've had the privilege to bring to life. Each image represents a unique story of creativity, innovation, and collaboration."
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/xlp46pzk3a4d73jgjx4s7xdafwpn",
          alt: "Photo 1",
          colSpan: 2,
          height: "h-82",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/g1iuifb3yzoofo9c7a00koyn6q1t",
          alt: "Photo 2",
          colSpan: 3,
          height: "h-82",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/z9u4sdrj2oq3eds0qyui0nxsus3j",
          alt: "Photo 3",
          colSpan: 3,
          height: "h-100",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson",
          alt: "Photo 4",
          colSpan: 2,
          height: "h-100",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/pjgb223h1bjywdk15i3zi7pjhutg",
          alt: "Photo 5",
          colSpan: 2,
          height: "h-82",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q",
          alt: "Photo 6",
          colSpan: 3,
          height: "h-82",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz",
          alt: "Photo 7",
          colSpan: 5,
          height: "h-100",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/oe0y4bgiylx81fbfvsw31mhdgjzs",
          alt: "Photo 8",
          colSpan: 3,
          height: "h-82",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0",
          alt: "Photo 9",
          colSpan: 2,
          height: "h-82",
        },
      ]}
      vignetteConfig={{
        radius: "5px",
        inset: "5px",
        transitionLength: "42px",
        blur: "3px",
      }}
      gridColumns={5}
      gridGap="gap-4"
      background="white"
      pattern="gridFadeTopRight"
      patternOpacity={0.8}
    />
  );
}
