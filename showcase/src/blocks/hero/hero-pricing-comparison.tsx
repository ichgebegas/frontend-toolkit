import { HeroPricingComparison } from "@opensite/ui/blocks/hero/hero-pricing-comparison";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroPricingComparison
      heading="Simple, transparent pricing"
      description="Choose the plan that's right for you. All plans include core features with no hidden fees."
      plans={[
        {
          name: "Starter",
          price: "$19",
          pricePeriod: "/month",
          features: ["5 Projects", "10GB Storage", "Basic Support"],
          action: {
            label: "Get Started",
            href: "/signup?plan=starter",
            variant: "outline",
          },
        },
        {
          name: "Professional",
          description: "Most popular",
          price: "$49",
          pricePeriod: "/month",
          features: ["Unlimited Projects", "100GB Storage", "Priority Support", "Advanced Analytics"],
          action: {
            label: "Start Free Trial",
            href: "/signup?plan=pro",
            variant: "default",
          },
        },
        {
          name: "Enterprise",
          price: "Custom",
          features: ["Everything in Pro", "Unlimited Storage", "24/7 Support", "Custom Integrations"],
          action: {
            label: "Contact Sales",
            href: "/contact",
            variant: "outline",
          },
        },
      ]}
      spacing="xl"
    />
  );
}
