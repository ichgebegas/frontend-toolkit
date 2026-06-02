import { HeroDesignShowcaseLogos } from "@opensite/ui/blocks/hero/hero-design-showcase-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDesignShowcaseLogos
      heading="Trusted by leading brands worldwide"
      description="Join thousands of companies who have transformed their design workflow with our platform."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Case Studies",
          href: "#",
          variant: "outline",
        },
      ]}
      logos={[
        { src: "https://cdn.ing/assets/i/r/288964/4xdrg1wjc2knoy58ulqijicamar3/ui-placeholder-logo-dark-1.png", alt: "Partner 1" },
        { src: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png", alt: "Partner 2" },
        { src: "https://cdn.ing/assets/i/r/288972/kppvdeo8kgeweawxisqy9h9ybz6h/ui-placeholder-logo-black-3.png", alt: "Partner 3" },
        { src: "https://cdn.ing/assets/i/r/288970/op9ys0gsyi7len3w742n0os7ebu6/ui-placeholder-logo-black-4.png", alt: "Partner 4" },
        { src: "https://cdn.ing/assets/i/r/288968/nn5xpkit7idgr7i6fa46ez3g9kwn/ui-placeholder-logo-black-5.png", alt: "Partner 5" },
        { src: "https://cdn.ing/assets/i/r/288974/dlb4c51kvgv6ncasqpgr2kvuma7y/ui-placeholder-logo-black-6.png", alt: "Partner 6" },
      ]}
      background="gray"
      pattern="gridFadeTop"
      patternOpacity={0.9}
    />
  );
}
