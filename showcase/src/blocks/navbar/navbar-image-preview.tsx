import { NavbarImagePreview } from "@opensite/ui/blocks/navbars/navbar-image-preview";
import { brandLogoPlaceholders } from "@/lib/media";
import CarouselAnimatedSections from "@/blocks/carousel/carousel-animated-sections";
import FeatureShowcase from "@/blocks/features/feature-showcase";
import FaqSplitHelp from "@/blocks/faq/faq-split-help";

export default function Demo() {
  return (
    <>
      <NavbarImagePreview
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        title: "Design Studio",
        alt: "Design Studio Logo",
      }}
      navigation={[
        {
          title: "Services",
          links: [
            {
              label: "Brand Identity",
              description: "Complete brand design packages",
              url: "#",
              image: "https://toastability-production.s3.amazonaws.com/a3m42usevv0iet0fpfwa1fsytxmv",
            },
            {
              label: "Web Design",
              description: "Modern and responsive websites",
              url: "#",
              image: "https://toastability-production.s3.amazonaws.com/qghzqu1i99vaubyew9s5dxcbel9l",
            },
            {
              label: "UI/UX Design",
              description: "User-centered design solutions",
              url: "#",
              image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
            },
            {
              label: "Motion Graphics",
              description: "Engaging animated content",
              url: "#",
              image: "https://toastability-production.s3.amazonaws.com/2d4k8d5shwg82276hzj2ztbj7mxq",
            },
          ],
        },
        {
          title: "Portfolio",
          url: "#",
        },
        {
          title: "About",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
      ]}
      authActions={[
        {
          label: "Get a Quote",
          variant: "default",
          href: "#",
          asButton: true,
        },
      ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
    </>
  );
}
