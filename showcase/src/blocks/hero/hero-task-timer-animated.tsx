import { HeroTaskTimerAnimated } from "@opensite/ui/blocks/hero/hero-task-timer-animated";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroTaskTimerAnimated
      heading="Track time, boost productivity"
      description="Stay focused and manage your time effectively with our intuitive task timer. Perfect for work, study, or any activity that requires dedicated focus."
      actions={[
        {
          label: "Start Tracking",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Features",
          href: "#",
          variant: "outline",
        },
      ]}
      images={[
        { src: "https://toastability-production.s3.amazonaws.com/0mh8a1dg7ftcqnyzgv303u501c8y", alt: "Timer interface" },
        { src: "https://toastability-production.s3.amazonaws.com/vvucxqs128w2d0z3n4s2z131rq7p", alt: "Task tracking" },
      ]}
      background="dark"
      pattern="gridFadeTopLeft"
      patternOpacity={0.1}
    />
  );
}
