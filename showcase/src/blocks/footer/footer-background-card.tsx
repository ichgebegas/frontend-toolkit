import { FooterBackgroundCard } from "@opensite/ui/blocks/footers/footer-background-card";
import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterBackgroundCard
      logo={{
        url: "/",
        src: brandLogoPlaceholders.black[0],
        alt: "Company Logo",
        title: "Your Agency",
      }}
      backgroundImage="https://toastability-production.s3.amazonaws.com/9ughnl9wnko2vdboib8n3wl3cxsy"
      profileImage={imagePlaceholders[0]}
      tagline="Sarah Mitchell"
      personalMessage="With over 15 years of experience in digital strategy and creative direction, I'm dedicated to helping brands tell their story and connect with audiences in meaningful ways. Every project is an opportunity to create something extraordinary."
      ctaText="Let's Work Together"
      ctaUrl="#"
      menuItems={[
        {
          title: "Services",
          links: [
            { text: "Brand Strategy", url: "#" },
            { text: "Digital Marketing", url: "#" },
            { text: "Web Design", url: "#" },
            { text: "Content Creation", url: "#" },
            { text: "SEO Optimization", url: "#" },
          ],
        },
        {
          title: "Company",
          links: [
            { text: "About", url: "#" },
            { text: "Portfolio", url: "#" },
            { text: "Testimonials", url: "#" },
            { text: "Careers", url: "#" },
            { text: "Blog", url: "#" },
          ],
        },
        {
          title: "Resources",
          links: [
            { text: "Case Studies", url: "#" },
            { text: "White Papers", url: "#" },
            { text: "Free Tools", url: "#" },
            { text: "Newsletter", url: "#" },
            { text: "Events", url: "#" },
          ],
        },
      ]}
      contactTitle="Get In Touch"
      contact={{
        phone: "(555) 123-4567",
        email: "hello@agency.com",
        location: "San Francisco, CA",
        timezone: "PST",
      }}
      copyright="Your Agency"
      bottomLinks={[
        { text: "Privacy Policy", url: "#" },
        { text: "Terms of Service", url: "#" },
        { text: "Cookies", url: "#" },
      ]}
      background="transparent"
    />
  );
}
