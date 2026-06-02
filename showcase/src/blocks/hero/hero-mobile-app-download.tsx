import { HeroMobileAppDownload } from "@opensite/ui/blocks/hero/hero-mobile-app-download";

export default function Demo() {
  return (
    <HeroMobileAppDownload
      badgeText="Now on Mobile"
      badgeIcon="lucide/smartphone"
      heading="Take us with you, everywhere"
      description="Download our mobile app and access all your favorite features on the go. Available for iOS and Android."
      storeActions={[
        {
          href: "#",
          label: "Download on the",
          storePrefix: "Download on the",
          storeName: "App Store",
          storeIcon: "cib/apple",
        },
        {
          href: "#",
          label: "Get it on",
          storePrefix: "Get it on",
          storeName: "Google Play",
          storeIcon: "cib/google",
        },
      ]}
      ratingValue="4.9"
      ratingLabel="from 50K+ reviews"
      starCount={5}
      image={{ src: "https://toastability-production.s3.amazonaws.com/6fffnb4phovtqkjhtzifs4rhb84u", alt: "Mobile app screenshot" }}
      background="gray"
      pattern="crossPattern"
      patternOpacity={0.15}
    />
  );
}
