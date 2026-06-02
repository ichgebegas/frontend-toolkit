import { HeroProductShowcaseFloating } from "@opensite/ui/blocks/hero/hero-product-showcase-floating";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroProductShowcaseFloating
      badgeText="New Arrival"
      badgeIcon="lucide/sparkles"
      heading="Introducing our latest innovation"
      description="Experience the perfect blend of style, functionality, and cutting-edge technology. Designed to elevate your everyday."
      userCount={{
        count: "300+",
        label: "Websites Powered",
        avatars: [
          {
            src: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0",
            alt: "User Avatar 1",
          },
          {
            src: "https://toastability-production.s3.amazonaws.com/cen5x90p3kbdafb80liq1a5j222x",
            alt: "User Avatar 2",
          },
          {
            src: "https://toastability-production.s3.amazonaws.com/ygob90kp07hxmi5jj4sned76dnmc",
            alt: "User Avatar 3",
          },
        ],
      }}
      floatingStat={{
        label: "Clients",
        value: "300+",
        icon: "lucide/users",
        position: "top-right",
      }}
      actions={[
        {
          label: "Shop Now",
          href: "#",
          variant: "default",
          size: "lg",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
        {
          label: "Learn More",
          href: "#",
          size: "lg",
          variant: "outline",
        },
      ]}
      productImage={{ src: "https://toastability-production.s3.amazonaws.com/qhz2kawawq3bbh7nusz3bvahln3v", alt: "Product showcase" }}
      background="dark"
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
