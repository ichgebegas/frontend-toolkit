import { HeroPatternLogoTechStack } from "@opensite/ui/blocks/hero/hero-pattern-logo-tech-stack";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <HeroPatternLogoTechStack
      logo={{ src: brandLogoPlaceholders.black[0], alt: "Company Logo" }}
      heading="Built with the best technologies"
      description="Powered by cutting-edge tools and frameworks that developers love. Fast, reliable, and scalable."
      techLogos={[
        { src: "https://cdn.ing/assets/i/r/288964/4xdrg1wjc2knoy58ulqijicamar3/ui-placeholder-logo-dark-1.png", alt: "React", imgClassName: "!h-6 !max-h-6" },
        { src: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png", alt: "TypeScript", imgClassName: "!h-6 !max-h-6" },
        { src: "https://cdn.ing/assets/i/r/288972/kppvdeo8kgeweawxisqy9h9ybz6h/ui-placeholder-logo-black-3.png", alt: "Node.js", imgClassName: "!h-6 !max-h-6" },
        { src: "https://cdn.ing/assets/i/r/288970/op9ys0gsyi7len3w742n0os7ebu6/ui-placeholder-logo-black-4.png", alt: "PostgreSQL", imgClassName: "!h-6 !max-h-6" },
        { src: "https://cdn.ing/assets/i/r/288968/nn5xpkit7idgr7i6fa46ez3g9kwn/ui-placeholder-logo-black-5.png", alt: "Docker", imgClassName: "!h-6 !max-h-6" },
        { src: "https://cdn.ing/assets/i/r/288974/dlb4c51kvgv6ncasqpgr2kvuma7y/ui-placeholder-logo-black-6.png", alt: "AWS", imgClassName: "!h-6 !max-h-6" },
      ]}
      actions={[
        {
          label: "View Docs",
          href: "/docs",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "GitHub",
          href: "https://github.com",
          variant: "outline",
          icon: <DynamicIcon name="lucide/github" size={16} />,
        },
      ]}
      pattern="grid1"
      background="white"
      patternOpacity={0.9}
    />
  );
}
