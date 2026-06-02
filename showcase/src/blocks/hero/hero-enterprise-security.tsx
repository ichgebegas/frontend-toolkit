import { HeroEnterpriseSecurity } from "@opensite/ui/blocks/hero/hero-enterprise-security";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroEnterpriseSecurity
      badge="Enterprise Grade"
      heading="Security you can trust"
      description="Protect your business with enterprise-grade security features. SOC 2 compliant, encrypted by default, and monitored 24/7."
      actions={[
        {
          label: "View Security",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shield-check" size={16} />,
        },
        {
          label: "Contact Sales",
          href: "#",
          variant: "outline",
        },
      ]}
      features={[
        {
          icon: <DynamicIcon name="lucide/lock" size={24} />,
          title: "256-bit Encryption",
          description: "Military-grade data protection",
          href: "#",
        },
        {
          icon: <DynamicIcon name="lucide/shield" size={24} />,
          title: "SOC 2 Certified",
          description: "Independently audited security",
          href: "#",
        },
        {
          icon: <DynamicIcon name="lucide/eye" size={24} />,
          title: "24/7 Monitoring",
          description: "Always watching for threats",
          href: "#",
        },
      ]}
      background="gray"
      pattern="circuitBoardFadeTop"
      patternOpacity={0.9}
    />
  );
}
