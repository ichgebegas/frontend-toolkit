import { HeroBillingPlatformLogos } from "@opensite/ui/blocks/hero/hero-billing-platform-logos";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroBillingPlatformLogos
      heading="Modern Billing"
      description="Accept payments, subscriptions, and invoices with ease. A powerful billing platform for businesses of all sizes."
      actions={[
        {
          label: "Start Free Trial",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
      ]}
      mainImage={{
        src: "https://toastability-production.s3.amazonaws.com/b555hwjt7ltr81et05v5254q1ak6",
        alt: "Billing dashboard",
      }}
      logos={[
        {
          src: "https://cdn.ing/assets/i/r/288964/4xdrg1wjc2knoy58ulqijicamar3/ui-placeholder-logo-dark-1.png",
          alt: "Partner 1",
        },
        {
          src: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png",
          alt: "Partner 2",
        },
        {
          src: "https://cdn.ing/assets/i/r/288972/kppvdeo8kgeweawxisqy9h9ybz6h/ui-placeholder-logo-black-3.png",
          alt: "Partner 3",
        },
        {
          src: "https://cdn.ing/assets/i/r/288970/op9ys0gsyi7len3w742n0os7ebu6/ui-placeholder-logo-black-4.png",
          alt: "Partner 4",
        },
        {
          src: "https://cdn.ing/assets/i/r/288968/nn5xpkit7idgr7i6fa46ez3g9kwn/ui-placeholder-logo-black-5.png",
          alt: "Partner 5",
        },
        {
          src: "https://cdn.ing/assets/i/r/288974/dlb4c51kvgv6ncasqpgr2kvuma7y/ui-placeholder-logo-black-6.png",
          alt: "Partner 6",
        },
      ]}
      background="gray"
    />
  );
}
