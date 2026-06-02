import { HeroMarketplaceScatteredImages } from "@opensite/ui/blocks/hero/hero-marketplace-scattered-images";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroMarketplaceScatteredImages
      heading="Discover unique items from creators worldwide"
      description="Shop handcrafted goods, vintage treasures, and one-of-a-kind products from talented makers and collectors."
      action={{
        label: "Browse Marketplace",
        href: "#",
        variant: "default",
        iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
      }}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/yrp5k5xszwpe26fquupey6a6g0uu", alt: "Product 1" },
        { src: "https://toastability-production.s3.amazonaws.com/97gctpna2hdozl1f8u5xq4ew8h0o", alt: "Product 2" },
        { src: "https://toastability-production.s3.amazonaws.com/xjtepune0scj9yjkkqgaiwlq9hls", alt: "Product 3" },
        { src: "https://toastability-production.s3.amazonaws.com/g607vblaarqctl1cvgxffhx4pw6g", alt: "Product 4" },
        { src: "https://toastability-production.s3.amazonaws.com/4xpu1ljr9c8g6qzmfum5ygjzbzpb", alt: "Product 5" },
        { src: "https://toastability-production.s3.amazonaws.com/yw5f7iwyypf4kctpr5ye5e495swt", alt: "Product 6" },
      ]}
      background="gray"
      pattern="gridDotsBasic"
      patternOpacity={1}
    />
  );
}
