import { CarouselDemoLink } from "@opensite/ui/blocks/gallery/carousel-demo-link";

export default function Demo() {
  return (
    <CarouselDemoLink
      heading="Our Platform Solutions"
      demoAction={{
        label: "Book a demo",
        href: "https://calendly.com/demo",
      }}
      items={[
        {
          id: "1",
          title: "AI-Powered Analytics",
          summary:
            "Transform your data into actionable insights with our advanced machine learning platform. Real-time processing and predictive analytics.",
          url: "/solutions/analytics",
          image: "https://toastability-production.s3.amazonaws.com/gxs6zevccphti0hdq5l9fwytprpr",
          imageAlt: "Analytics platform interface",
        },
        {
          id: "2",
          title: "Cloud Infrastructure",
          summary:
            "Scalable, secure, and reliable cloud infrastructure designed for enterprise workloads. Auto-scaling and 99.99% uptime SLA.",
          url: "/solutions/cloud",
          image: "https://toastability-production.s3.amazonaws.com/s4vho0wfbjhf758oife8qfuekou8",
          imageAlt: "Cloud infrastructure dashboard",
        },
        {
          id: "3",
          title: "Security Suite",
          summary:
            "Comprehensive security platform with real-time threat detection, compliance management, and zero-trust architecture.",
          url: "/solutions/security",
          image: "https://toastability-production.s3.amazonaws.com/1b0gd8ul22q799d62dvm3sgyll85",
          imageAlt: "Security monitoring dashboard",
        },
        {
          id: "4",
          title: "Data Integration",
          summary:
            "Seamlessly connect all your data sources with our universal integration platform. Support for 200+ enterprise applications.",
          url: "/solutions/integration",
          image: "https://toastability-production.s3.amazonaws.com/102grjqg8aigxkj585s9x3xbxfv7",
          imageAlt: "Data integration workflow",
        },
        {
          id: "5",
          title: "Business Intelligence",
          summary:
            "Interactive dashboards and real-time reporting tools that empower data-driven decision making across your organization.",
          url: "/solutions/bi",
          image: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
          imageAlt: "Business intelligence dashboard",
        },
      ]}
      readMoreText="Learn more"
      background="white"
      spacing="lg"
      pattern="p6"
    />
  );
}
