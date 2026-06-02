import { HeroCreativeStudioStacked } from "@opensite/ui/blocks/hero/hero-creative-studio-stacked";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroCreativeStudioStacked
      heading="Where creativity meets innovation"
      description="Award-winning creative studio specializing in brand identity, digital experiences, and visual storytelling that makes an impact."
      logo={{
        src: "https://cdn.ing/assets/i/r/288967/cn6z89c4c23ubohkz6kv3npdn672/ui-placeholder-logo-white-5.png",
        alt: "Brand Logo",
      }}
      videoAction={{
        label: "Watch Demo",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/play" size={16} />,
      }}
      actions={[
        {
          label: "Learn More",
          href: "#",
          variant: "outline",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      videoDialog={{
        videoUrl:
          "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
        title: "See how it works",
      }}
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/vvucxqs128w2d0z3n4s2z131rq7p",
          alt: "Project 1",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          alt: "Project 2",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          alt: "Project 3",
        },
      ]}
      background="dark"
      pattern="dashedGridFadeTopRight"
      patternOpacity={0.25}
    />
  );
}
