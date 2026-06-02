import { HeroOverlayCtaGrid } from "@opensite/ui/blocks/hero/hero-overlay-cta-grid";

export default function Demo() {
  return (
    <HeroOverlayCtaGrid
      heading="Choose your path"
      backgroundImage={
        "https://toastability-production.s3.amazonaws.com/okf6fg4n9yv59up8ivgcdjy3w030"
      }
      description="Multiple ways to engage with our platform. Select the option that best fits your needs."
      spacing="none"
      logo={{
        src: "https://cdn.ing/assets/i/r/288969/h9k3b0ett73u3pouc2w15ibvl7tc/ui-placeholder-logo-white-4.png",
        alt: "Brand Logo",
      }}
      cards={[
        {
          label: "New Features",
          subtitle: "New AI features to automate workflows",
          icon: "lucide/bot",
          href: "#",
        },
        {
          label: "Automation",
          subtitle: "Dedicated agents to help streamline tasks",
          icon: "lucide/bell",
          href: "#",
        },
        {
          label: "Performance",
          subtitle: "Enterprise speed for all business sizes",
          icon: "lucide/bolt",
          href: "#",
        },
      ]}
    />
  );
}
