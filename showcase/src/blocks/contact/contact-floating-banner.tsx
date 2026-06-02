"use client";

import { brandLogoPlaceholders } from "@/lib/media";
import { ContactFloatingBanner } from "@opensite/ui/blocks/contact/contact-floating-banner";
import CarouselAnimatedSections from "../carousel/carousel-animated-sections";
import FaqSplitHelp from "../faq/faq-split-help";
import FeatureShowcase from "../features/feature-showcase";
import { NavbarSplitCta } from "@opensite/ui/blocks/navbars/navbar-split-cta";

export default function Demo() {
  return (
    <>
      <NavbarSplitCta
        logo={{
          url: "/",
          src: brandLogoPlaceholders.black[0],
          title: "StartupCo",
          alt: "StartupCo Logo",
        }}
        menu={[
          { title: "Product", url: "#" },
          { title: "Features", url: "#" },
          { title: "Pricing", url: "#" },
          { title: "Company", url: "#" },
        ]}
        authActions={[
          {
            label: "Start Free Trial",
            href: "#",
            asButton: true,
            variant: "link",
          },
          {
            label: "Book a Demo",
            href: "#",
            asButton: true,
            variant: "default",
          },
        ]}
      />

      <CarouselAnimatedSections />
      <FeatureShowcase />
      <FaqSplitHelp />
      <ContactFloatingBanner
        badgeText="Limited Time Offer"
        message="Get 50% off your first month when you sign up today!"
        buttonText="Request Information"
        buttonIcon="lucide/arrow-right"
        buttonHref="#"
        patternOpacity={0.2}
      />
    </>
  );
}
