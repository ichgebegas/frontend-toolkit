import { HeroAdaptableProductGrid } from "@opensite/ui/blocks/hero/hero-adaptable-product-grid";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroAdaptableProductGrid
      heading="Flexible product displays that adapt to your brand"
      description="Create stunning product showcases with our adaptable grid system. Perfect for e-commerce, portfolios, and catalogs."
      actions={[
        {
          label: "Browse Products",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/shopping-cart" size={16} />,
        },
      ]}
      imageSrc={"https://toastability-production.s3.amazonaws.com/xlp46pzk3a4d73jgjx4s7xdafwpn"}
      imageAlt="Product showcase"
      background="dark"
    />
  );
}
