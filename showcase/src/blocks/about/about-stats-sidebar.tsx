import { AboutStatsSidebar } from "@opensite/ui/blocks/about/about-stats-sidebar";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <AboutStatsSidebar
      title="Our Impact in Numbers"
      description="We let our results speak for themselves. Here's a snapshot of what we've achieved together with our clients."
      stats={[
        {
          icon: (
            <DynamicIcon
              name="lucide/briefcase"
              size={24}
              className="text-primary"
            />
          ),
          value: "500+",
          label: "Projects Completed",
          description: "Across diverse industries and scales",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/users"
              size={24}
              className="text-primary"
            />
          ),
          value: "50M+",
          label: "Users Reached",
          description: "Through the products we've built",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/star"
              size={24}
              className="text-primary"
            />
          ),
          value: "98%",
          label: "Client Satisfaction",
          description: "Based on post-project surveys",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/globe"
              size={24}
              className="text-primary"
            />
          ),
          value: "30+",
          label: "Countries Served",
          description: "Global reach, local understanding",
        },
      ]}
      features={[
        {
          icon: (
            <DynamicIcon
              name="lucide/clock"
              size={20}
              className="text-primary"
            />
          ),
          title: "Fast Turnaround",
          description:
            "Average project completion 40% faster than industry standard.",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/shield-check"
              size={20}
              className="text-primary"
            />
          ),
          title: "Quality Guaranteed",
          description: "Every project backed by our satisfaction guarantee.",
        },
        {
          icon: (
            <DynamicIcon
              name="lucide/headphones"
              size={20}
              className="text-primary"
            />
          ),
          title: "Dedicated Support",
          description: "24/7 support available for all enterprise clients.",
        },
      ]}
      patternOpacity={0.15}
      pattern="diagonalCrossFadeTop"
      background="dark"
    />
  );
}
