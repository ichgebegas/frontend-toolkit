import { CarouselFeatureBadge } from "@opensite/ui/blocks/carousel/carousel-feature-badge";
import { DynamicIcon } from "@opensite/ui";

export default function Demo() {
  return (
    <CarouselFeatureBadge
      badge="Platform Features"
      heading="Everything you need to scale your SaaS business"
      description="From powerful analytics to seamless integrations, our platform provides all the tools you need to grow faster and serve customers better. Built for modern teams who demand excellence."
      background="dark"
      pattern="architect"
      patternOpacity={0.5}
      actions={[
        {
          label: "Explore Features",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Case Studies",
          href: "#",
          variant: "outline",
        },
      ]}
      items={[
        {
          src: "https://toastability-production.s3.amazonaws.com/9ughnl9wnko2vdboib8n3wl3cxsy",
          alt: "Real-time Analytics Dashboard",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          alt: "Team Collaboration Tools",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh",
          alt: "API Integration Hub",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          alt: "Customer Success Portal",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
          alt: "Advanced Reporting Engine",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh",
          alt: "Security & Compliance Center",
        },
      ]}
    />
  );
}
