import { MasonryMotionGrid } from "@opensite/ui/blocks/gallery/masonry-motion-grid";

export default function Demo() {
  return (
    <MasonryMotionGrid
      title="Media Gallery"
      description="Explore our media gallery featuring a collection of stunning images arranged in a visually engaging layout. Each image is thoughtfully placed to create a harmonious balance of aesthetics and motion."
      column1Images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/xlp46pzk3a4d73jgjx4s7xdafwpn",
          alt: "Gallery image 1",
          height: "h-60",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/g1iuifb3yzoofo9c7a00koyn6q1t",
          alt: "Gallery image 2",
          height: "h-80",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/z9u4sdrj2oq3eds0qyui0nxsus3j",
          alt: "Gallery image 3",
          height: "h-72",
        },
      ]}
      column2Images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/63aotyt2pb4gqpccej2kkw8reson",
          alt: "Gallery image 4",
          height: "h-72",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/pjgb223h1bjywdk15i3zi7pjhutg",
          alt: "Gallery image 5",
          height: "h-60",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q",
          alt: "Gallery image 6",
          height: "h-80",
        },
      ]}
      column3Images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/f8rfrurzo743ym1s7m5xtbombunz",
          alt: "Gallery image 7",
          height: "h-80",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/oe0y4bgiylx81fbfvsw31mhdgjzs",
          alt: "Gallery image 8",
          height: "h-72",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0",
          alt: "Gallery image 9",
          height: "h-60",
        },
      ]}
      column4Images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/cen5x90p3kbdafb80liq1a5j222x",
          alt: "Gallery image 10",
          height: "h-72",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/ygob90kp07hxmi5jj4sned76dnmc",
          alt: "Gallery image 11",
          height: "h-80",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/qhz2kawawq3bbh7nusz3bvahln3v",
          alt: "Gallery image 12",
          height: "h-60",
        },
      ]}
      animationDuration={0.5}
      animationDelayMultiplier={0.1}
      showDuplicateGrid={true}
      background="dark"
      spacing="py-12 md:py-40"
      pattern="gridDotsBasic"
      patternOpacity={0.2}
    />
  );
}
