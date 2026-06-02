import { HeroEcommerceProductShowcase } from "@opensite/ui/blocks/hero/hero-ecommerce-product-showcase";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroEcommerceProductShowcase
      badgeText="New Collection"
      badgeIcon="lucide/star"
      heading="Premium products for modern living"
      description="Discover our curated collection of handpicked items designed to elevate your everyday life. Quality craftsmanship, timeless style."
      actions={[
        {
          label: "Shop Now",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-bag" size={16} />,
        },
        {
          label: "View Lookbook",
          href: "#",
          variant: "outline",
        },
      ]}
      stats={[
        {
          icon: (
            <DynamicIcon
              name="lucide/briefcase"
              size={24}
              className="text-primary"
            />
          ),
          value: "500+",
          label: "Projects Completed",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/users"
              size={24}
              className="text-primary"
            />
          ),
          value: "50M+",
          label: "Users Reached",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/star"
              size={24}
              className="text-primary"
            />
          ),
          value: "98%",
          label: "Client Satisfaction",
        },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht", alt: "Product 1" },
        { src: "https://toastability-production.s3.amazonaws.com/zm88vf14geh1gh0frd3yrdlb6pl8", alt: "Product 2" },
        { src: "https://toastability-production.s3.amazonaws.com/0x7ktdk01jfaoysst0emzvqevu19", alt: "Product 3" },
        { src: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x", alt: "Product 4" },
      ]}
      background="gray"
    />
  );
}
