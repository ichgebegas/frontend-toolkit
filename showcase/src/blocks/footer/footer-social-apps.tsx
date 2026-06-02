import { FooterSocialApps } from "@opensite/ui/blocks/footers/footer-social-apps";
import { brandLogoPlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterSocialApps
      logo={{
        url: "/",
        src: brandLogoPlaceholders.white[0],
        alt: "AppFlow Logo",
        title: "AppFlow",
      }}
      sections={[
        {
          title: "Platform",
          links: [
            { name: "Mobile Apps", href: "#" },
            { name: "Web Apps", href: "#" },
            { name: "Desktop Apps", href: "#" },
            { name: "Extensions", href: "#" },
            { name: "Marketplace", href: "#" },
          ],
        },
        {
          title: "Developers",
          links: [
            { name: "API Documentation", href: "#" },
            { name: "SDK Downloads", href: "#" },
            { name: "Code Examples", href: "#" },
            { name: "Developer Forum", href: "#" },
            { name: "GitHub Repos", href: "#" },
          ],
        },
        {
          title: "Company",
          links: [
            { name: "About", href: "#" },
            { name: "Careers", href: "#" },
            { name: "News", href: "#" },
            { name: "Brand Assets", href: "#" },
            { name: "Contact", href: "#" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://linkedin.com/company/innovatetech",
          label: "Connect with InnovateTech on LinkedIn",
        },
        {
          href: "https://twitter.com/innovatetech",
          label: "Follow InnovateTech on Twitter",
        },
        {
          href: "https://facebook.com/innovatetech",
          label: "Like InnovateTech on Facebook",
        },
        {
          href: "https://instagram.com/innovatetech",
          label: "Follow InnovateTech on Instagram",
        },
        {
          href: "https://youtube.com/@innovatetech",
          label: "Subscribe to InnovateTech on YouTube",
        },
      ]}
      appLinks={[
        {
          icon: "simple-icons/apple",
          href: "https://apps.apple.com/app/appflow",
          label: "Download on the App Store",
        },
        {
          icon: "simple-icons/googleplay",
          href: "https://play.google.com/store/apps/details?id=com.appflow",
          label: "Get it on Google Play",
        },
      ]}
      socialLabel="Connect With Us"
      appLabel="Download Our App"
      copyright="AppFlow Technologies"
      background="dark"
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.2}
    />
  );
}
