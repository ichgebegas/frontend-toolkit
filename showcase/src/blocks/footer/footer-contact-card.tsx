import { FooterContactCard } from "@opensite/ui/blocks/footers/footer-contact-card";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterContactCard
      logo={{
        url: "#",
        src: brandLogoPlaceholders.black[0],
        alt: "Stellar Design Agency Logo",
        title: "Stellar Design",
      }}
      heading="Let's create something amazing together"
      email="hello@stellardesign.co"
      phone="(555) 987-6543"
      address="567 Creative Boulevard, Suite 300, New York, NY 10001"
      socialLinks={[
        {
          href: "https://instagram.com/stellardesign",
          label: "Follow Stellar Design on Instagram",
        },
        {
          href: "https://dribbble.com/stellardesign",
          label: "View our work on Dribbble",
        },
        {
          href: "https://behance.net/stellardesign",
          label: "View our portfolio on Behance",
        },
        {
          href: "https://linkedin.com/company/stellardesign",
          label: "Connect with us on LinkedIn",
        },
        {
          href: "https://twitter.com/stellardesign",
          label: "Follow us on Twitter",
        },
      ]}
      navLinks={[
        { name: "Services", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "About", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ]}
      socialTitle="Follow our creative journey"
      location="New York, NY"
      locationLabel="Proudly based in"
      copyright="Stellar Design Agency"
      background="white"
      pattern="gridFadeTop"
      patternOpacity={1}
    />
  );
}
