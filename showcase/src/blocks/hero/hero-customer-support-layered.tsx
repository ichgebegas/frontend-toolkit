import { DynamicIcon } from "@opensite/ui";
import { HeroCustomerSupportLayered } from "@opensite/ui/blocks/hero/hero-customer-support-layered";

export default function Demo() {
  return (
    <HeroCustomerSupportLayered
      heading="Support that your customers love"
      description="Deliver exceptional customer experiences with our multi-channel support platform. Fast, efficient, and always there when you need it."
      tagline="Customer Support"
      logo={{
        src: "https://cdn.ing/assets/i/r/288966/0ls9to9jqnrc4gcxty9rx2c4udjv/ui-placeholder-logo-white-2.png",
        alt: "Brand Logo",
      }}
      images={[
        {
          src: "https://toastability-production.s3.amazonaws.com/9797jh6slgbf9oq6lzlimcdiuziv",
          alt: "Support interface 1",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/betxbx61fkijt0aygineplf489ze",
          alt: "Support interface 2",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/0o6d7z4mm9nzeufhv9kefrhihbip",
          alt: "Support interface 3",
        },
      ]}
      actions={[
        {
          label: "Browse Marketplace",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      background="secondary"
      pattern="gridFadeBottomRight"
      patternOpacity={0.15}
    />
  );
}
