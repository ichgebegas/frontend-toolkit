import { HeroMinimalCenteredDark } from "@opensite/ui/blocks/hero/hero-minimal-centered-dark";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroMinimalCenteredDark
      heading="Simplicity is the ultimate sophistication"
      description="Clean, focused, and purposeful. Experience the power of minimalism in design and functionality."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      badge="Industry Leader"
      background="dark"
      pattern="squareAltGrid"
      patternOpacity={0.75}
    />
  );
}
