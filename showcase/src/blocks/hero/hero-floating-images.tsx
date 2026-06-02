import { HeroFloatingImages } from "@opensite/ui/blocks/hero/hero-floating-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroFloatingImages
      badge="Featured Work"
      heading="Build Stunning Websites with Toolkit UI"
      description="We design and build beautiful digital products that help brands connect with their audience. From concept to launch, we bring visions to life."
      logo={{
        src: brandLogoPlaceholders.white[0],
        alt: "Brand Logo",
      }}
      actions={[
        {
          label: "View Portfolio",
          href: "#",
          size: "lg",
          variant: "default",
          iconAfter: (
            <DynamicIcon name="lucide/arrow-right" className="h-4 w-4" />
          ),
        },
        {
          label: "Our Process",
          href: "#",
          size: "lg",
          variant: "outline",
        },
      ]}
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/vrezhtksoqbw1nyo4hwnoqizrus5",
          alt: "Floating Image 1",
          className: "rounded-lg shadow-lg",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/z37cidvud212bzqhhalrhvk7ipaa",
          alt: "Floating Image 2",
          className: "rounded-lg shadow-lg",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/w87w0fyjdol9yzwo7yywkgxidvzo",
          alt: "Floating Image 3",
          className: "rounded-lg shadow-lg",
        },
      ]}
      optixFlowConfig={{ apiKey: "os-bcf1c82f-0c47-49ec-a303-807eec0a25c6" }}
      className="flex items-center justify-center"
      background="dark"
      pattern="gridFadeBottomLeft"
      patternOpacity={0.15}
    />
  );
}
