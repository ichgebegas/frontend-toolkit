import { FooterAnimatedSocial } from "@opensite/ui/blocks/footers/footer-animated-social";

export default function Demo() {
  return (
    <FooterAnimatedSocial
      heading="Let's Create Something Amazing Together"
      description="We're passionate about building innovative solutions that make a difference. Partner with us to bring your vision to life and transform the way people interact with technology."
      ctaText="Start Your Project"
      ctaUrl="#"
      socialLinks={[
        { label: "LinkedIn", href: "https://linkedin.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "GitHub", href: "https://github.com" },
        { label: "Dribbble", href: "https://dribbble.com" },
        { label: "Behance", href: "https://behance.net" },
      ]}
      copyright="Creative Studio"
      background="dark"
      spacing="xl"
      pattern="gridDotsFadeCenter"
      patternOpacity={0.3}
    />
  );
}
