import { HeroBusinessCarouselDots } from "@opensite/ui/blocks/hero/hero-business-carousel-dots";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBusinessCarouselDots
      heading="Business solutions that scale with you"
      description="From startups to enterprises, our platform grows alongside your business with powerful tools and seamless integrations."
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Book Demo",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/calendar" size={16} />,
        },
      ]}
      carouselImages={[
        { src: "https://toastability-production.s3.amazonaws.com/qghzqu1i99vaubyew9s5dxcbel9l", alt: "Business feature 1" },
        { src: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw", alt: "Business feature 2" },
        { src: "https://toastability-production.s3.amazonaws.com/2d4k8d5shwg82276hzj2ztbj7mxq", alt: "Business feature 3" },
      ]}
      background="gray"
    />
  );
}
