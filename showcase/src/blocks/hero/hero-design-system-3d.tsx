import { HeroDesignSystem3d } from "@opensite/ui/blocks/hero/hero-design-system-3d";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDesignSystem3d
      trustBadge="Design System"
      heading="Build with a comprehensive design system"
      description="Create consistent, beautiful interfaces with our complete set of components, patterns, and guidelines. Built for scale and flexibility."
      actions={[
        {
          label: "Explore Components",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Documentation",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/book-open" size={16} />,
        },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08", alt: "Design system component 1" },
        { src: "https://toastability-production.s3.amazonaws.com/2t36c7l0ywchaz4nys8yj2l5amae", alt: "Design system component 2" },
        { src: "https://toastability-production.s3.amazonaws.com/gg5qnvb4nsl2k3g4dw4ls8bsllwh", alt: "Design system component 3" },
      ]}
      background="dark"
    />
  );
}
