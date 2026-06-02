import { HeroSplitGeometricShapes } from "@opensite/ui/blocks/hero/hero-split-geometric-shapes";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSplitGeometricShapes
      heading="Bold design for bold ideas"
      description="Stand out with striking visuals and modern aesthetics. Make a statement that resonates with your audience."
      actions={[
        {
          label: "Explore",
          href: "/explore",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Contact",
          href: "/contact",
          variant: "outline",
        },
      ]}
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
          alt: "Modern design showcase",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/sj8cs2gpbanaowqwxar1uhhwd23z",
          alt: "Creative workspace",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
          alt: "Bold visual identity",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/uh2vd59np82h8sevbmfnsha89sf1",
          alt: "Contemporary aesthetics",
        },
      ]}
      background="white"
      pattern="diagonalCrossBasic"
      patternOpacity={0.9}
    />
  );
}
