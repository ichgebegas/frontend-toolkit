import { DynamicIcon } from "@opensite/ui";
import { HeroMentalHealthTeam } from "@opensite/ui/blocks/hero/hero-mental-health-team";

export default function Demo() {
  return (
    <HeroMentalHealthTeam
      description="Our team of experienced mental health professionals is dedicated to providing compassionate care and support to individuals in need."
      heading="Compassionate care for your mental wellbeing"
      smallImages={[
        {
          src: "https://toastability-production.s3.amazonaws.com/g607vblaarqctl1cvgxffhx4pw6g",
          alt: "Dr. Smith",
        },
        {
          src: "https://toastability-production.s3.amazonaws.com/4xpu1ljr9c8g6qzmfum5ygjzbzpb",
          alt: "Dr. Johnson",
        },
      ]}
      testimonial={{
        quote:
          "The support I received changed my life. I'm so grateful for the compassionate care.",
        author: "Sarah M.",
        role: "Client",
        avatarSrc:
          "https://toastability-production.s3.amazonaws.com/yw5f7iwyypf4kctpr5ye5e495swt",
      }}
      featureImage={{
        src: "https://toastability-production.s3.amazonaws.com/z37cidvud212bzqhhalrhvk7ipaa",
        alt: "Mental health support",
      }}
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Talk to Sales",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/phone" size={16} />,
        },
      ]}
      background="gray"
      pattern="dashedGridFadeTop"
      patternOpacity={0.9}
    />
  );
}
