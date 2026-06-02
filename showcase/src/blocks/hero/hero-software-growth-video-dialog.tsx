import { HeroSoftwareGrowthVideoDialog } from "@opensite/ui/blocks/hero/hero-software-growth-video-dialog";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroSoftwareGrowthVideoDialog
      heading="Accelerate your growth with data-driven insights"
      description="See how top companies use our platform to scale faster, make smarter decisions, and achieve sustainable growth."
      videoAction={{
        label: "Watch Demo",
        variant: "outline",
        iconAfter: <DynamicIcon name="lucide/play" size={16} />,
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "ghost",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      showcaseImages={[
        { src: "https://toastability-production.s3.amazonaws.com/a3m42usevv0iet0fpfwa1fsytxmv", alt: "Growth metric 1" },
        { src: "https://toastability-production.s3.amazonaws.com/qghzqu1i99vaubyew9s5dxcbel9l", alt: "Growth metric 2" },
        { src: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw", alt: "Growth metric 3" },
        { src: "https://toastability-production.s3.amazonaws.com/2d4k8d5shwg82276hzj2ztbj7mxq", alt: "Growth metric 4" },
      ]}
      modalVideo={{
        video: {
          src: "https://toastability-production.s3.amazonaws.com/4kox2ux0ye1wlqkdwg03s08a67i1",
          title: "See how it works",
        },
      }}
      background="dark"
    />
  );
}
