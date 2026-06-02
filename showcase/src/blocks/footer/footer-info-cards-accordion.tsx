import { FooterInfoCardsAccordion } from "@opensite/ui/blocks/footers/footer-info-cards-accordion";
import { brandLogoPlaceholders, imagePlaceholders } from "@/lib/media";

export default function Demo() {
  return (
    <FooterInfoCardsAccordion
      newsletterTitle="Join our community"
      newsletterDescription="Get exclusive access to special offers, product launches, and expert tips delivered straight to your inbox every week."
      emailPlaceholder="Enter your email address"
      subscribeText="Subscribe Now"
      termsText="By subscribing, you agree to our"
      termsLinkText="Terms of Service"
      termsLinkUrl="/terms"
      privacyLinkText="Privacy Policy"
      privacyLinkUrl="/privacy"
      infoItems={[
        {
          icon: "lucide/phone",
          title: "Call Us Anytime",
          text: "+1 (800) 555-0123",
          link: "tel:+18005550123",
        },
        {
          icon: "lucide/mail",
          title: "Email Support",
          text: "support@luxemart.com",
          link: "mailto:support@luxemart.com",
        },
        {
          icon: "lucide/map-pin",
          title: "Visit Our Showroom",
          text: "789 Luxury Avenue, Beverly Hills, CA 90210",
          link: "https://maps.google.com/?q=789+Luxury+Avenue+Beverly+Hills+CA+90210",
        },
        {
          icon: "lucide/clock",
          title: "Business Hours",
          text: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
        },
      ]}
      footerLinks={[
        {
          title: "Shop",
          id: "shop",
          items: [
            { text: "New Arrivals", link: "/new-arrivals" },
            { text: "Best Sellers", link: "/best-sellers" },
            { text: "Sale Items", link: "/sale" },
            { text: "Men's Collection", link: "/mens" },
            { text: "Women's Collection", link: "/womens" },
            { text: "Accessories", link: "/accessories" },
            { text: "Gift Cards", link: "/gift-cards" },
          ],
        },
        {
          title: "Customer Care",
          id: "customer-care",
          items: [
            { text: "Track Your Order", link: "/track-order" },
            { text: "Shipping Info", link: "/shipping" },
            { text: "Returns & Exchanges", link: "/returns" },
            { text: "Size Guide", link: "/size-guide" },
            { text: "Product Care", link: "/product-care" },
            { text: "FAQ", link: "/faq" },
            { text: "Contact Us", link: "/contact" },
          ],
        },
        {
          title: "About Us",
          id: "about",
          items: [
            { text: "Our Story", link: "/story" },
            { text: "Sustainability", link: "/sustainability" },
            { text: "Careers", link: "/careers" },
            { text: "Press Room", link: "/press" },
            { text: "Store Locator", link: "/stores" },
            { text: "Affiliate Program", link: "/affiliates" },
            { text: "Partnership Opportunities", link: "/partnerships" },
          ],
        },
      ]}
      socialLinks={[
        {
          href: "https://instagram.com/luxemart",
          label: "Follow LuxeMart on Instagram",
        },
        {
          href: "https://facebook.com/luxemart",
          label: "Like LuxeMart on Facebook",
        },
        {
          href: "https://twitter.com/luxemart",
          label: "Follow LuxeMart on Twitter",
        },
        {
          href: "https://pinterest.com/luxemart",
          label: "Follow LuxeMart on Pinterest",
        },
        {
          href: "https://youtube.com/@luxemart",
          label: "Subscribe to LuxeMart on YouTube",
        },
      ]}
      paymentPlatforms={[
        "visa",
        "mastercard",
        "venmo",
        "apple",
        "google",
        "paypal",
      ]}
      submenuLinks={[
        { text: "Accessibility", link: "/accessibility" },
        { text: "Security", link: "/security" },
        { text: "Cookie Preferences", link: "/cookies" },
        { text: "Do Not Sell My Info", link: "/privacy-rights" },
      ]}
      footerDetails={{
        image: {
          src: imagePlaceholders[0],
          alt: "LuxeMart luxury shopping experience",
        },
        logo: {
          light: brandLogoPlaceholders.black[0],
          dark: brandLogoPlaceholders.white[0],
        },
        logoUrl: "/",
        description:
          "LuxeMart is your premier destination for curated luxury goods and timeless fashion. We partner with the world's most prestigious brands to bring you exceptional quality, craftsmanship, and style. Every purchase is backed by our 30-day satisfaction guarantee and white-glove customer service.",
      }}
      copyright="LuxeMart Corporation"
      patternOpacity={0.05}
    />
  );
}
