import { HeroHiringAnimatedText } from "@opensite/ui/blocks/hero/hero-hiring-animated-text";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroHiringAnimatedText
      headingPrefix="We're hiring"
      animatedTexts={[
        "Developers",
        "Designers",
        "Marketers",
        "Product Managers",
      ]}
      description="We're building the future of work and we want you to be part of it. Competitive salary, great benefits, and a culture you'll love."
      actions={[
        {
          label: "View Open Roles",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Learn About Us",
          href: "#",
          variant: "outline",
        },
      ]}
      backgroundImage={"https://toastability-production.s3.amazonaws.com/5jsc0b4e3gxnjs81iotw2c3e6da3"}
    />
  );
}
