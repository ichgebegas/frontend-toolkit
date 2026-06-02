import { HeroPatternBadgeLogos } from "@opensite/ui/blocks/hero/hero-pattern-badge-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPatternBadgeLogos
      badge="Trusted by Leaders"
      heading="Join the world's most innovative companies"
      description="Over 10,000 organizations trust our platform to power their operations and drive growth."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Customers",
          href: "#",
          variant: "outline",
        },
      ]}
      logos={[
        {
          src: "https://cdn.ing/assets/i/r/288963/4kq4loxmhh5lwc7scw7hhusu87km/ui-placeholder-logo-white-1.png",
          alt: "Company 1",
        },
        {
          src: "https://cdn.ing/assets/i/r/288966/0ls9to9jqnrc4gcxty9rx2c4udjv/ui-placeholder-logo-white-2.png",
          alt: "Company 2",
        },
        {
          src: "https://cdn.ing/assets/i/r/288971/sow5o2s8dp1cr159rxexm0yhov5w/ui-placeholder-logo-white-3.png",
          alt: "Company 3",
        },
        {
          src: "https://cdn.ing/assets/i/r/288969/h9k3b0ett73u3pouc2w15ibvl7tc/ui-placeholder-logo-white-4.png",
          alt: "Company 4",
        },
        {
          src: "https://cdn.ing/assets/i/r/288967/cn6z89c4c23ubohkz6kv3npdn672/ui-placeholder-logo-white-5.png",
          alt: "Company 5",
        },
        {
          src: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
          alt: "Company 6",
        },
      ]}
      pattern="architect"
      patternOpacity={0.33}
      background="dark"
    />
  );
}
