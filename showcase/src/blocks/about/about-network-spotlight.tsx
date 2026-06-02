import { AboutNetworkSpotlight } from "@opensite/ui/blocks/about/about-network-spotlight";

export default function Demo() {
  return (
    <AboutNetworkSpotlight
      eyebrow="Partner Program"
      heading="Join Our Growing Network"
      description="Connect with industry leaders, access exclusive resources, and grow your business through our partner ecosystem."
      highlights={[
        "Access to co-marketing opportunities and joint campaigns",
        "Priority support and dedicated partner success manager",
        "Revenue sharing and referral commission programs",
        "Early access to new features and beta programs",
      ]}
      actions={[
        {
          label: "Become a Partner",
          href: "#",
          variant: "default",
          asButton: true,
        },
        {
          label: "Learn More",
          href: "#",
          variant: "link",
          asButton: true,
        },
      ]}
      image={{
        src: "https://cdn.ing/assets/i/r/289168/75lrz1yf8iarvpr4jgmco0fi3j9t/fine-dining-restaurant-dinner-with-gourmet-dishes-on-wood-table.jpg",
        alt: "Partner collaboration meeting",
      }}
      spotlightCard={{
        icon: "lucide/award",
        label: "Featured Partner",
        title: "Acme Corporation",
        description:
          "Achieved 300% growth in their first year as a certified partner.",
      }}
      background="dark"
      pattern="spotlightLeft"
    />
  );
}
