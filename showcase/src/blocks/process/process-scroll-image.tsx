import { ProcessScrollImage } from "@opensite/ui/blocks/process/process-scroll-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <ProcessScrollImage
      heading="Build. Test. Launch."
      description="Our agile methodology ensures rapid delivery without compromising quality."
      actions={[
        {
          label: "Start Your Project",
          href: "/get-started",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Case Studies",
          href: "/case-studies",
          variant: "outline",
        },
      ]}
      steps={[
        {
          step: "01",
          title: "Requirements Gathering",
          description: "Comprehensive analysis of business needs, technical requirements, and user expectations. We create detailed specifications that serve as the blueprint for success.",
          image: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
        },
        {
          step: "02",
          title: "Architecture Planning",
          description: "Design scalable system architecture that supports growth. We select the right technologies, define data structures, and plan integration points.",
          image: "https://toastability-production.s3.amazonaws.com/n001o4pfpszmyw03ubctig7kvf0e",
        },
        {
          step: "03",
          title: "Iterative Development",
          description: "Build features in focused sprints with continuous feedback loops. Regular demos and stakeholder reviews ensure alignment throughout the process.",
          image: "https://toastability-production.s3.amazonaws.com/82ykd8s8boiqaxypkulb0v0s2qiw",
        },
        {
          step: "04",
          title: "Automated Testing",
          description: "Comprehensive test coverage including unit tests, integration tests, and end-to-end scenarios. Catch bugs early and maintain code quality.",
          image: "https://toastability-production.s3.amazonaws.com/3dy9ge962uarlaf2xl7imdcviqgx",
        },
        {
          step: "05",
          title: "Staged Rollout",
          description: "Gradual deployment strategy with feature flags, monitoring, and rollback capabilities. Minimize risk while maximizing user satisfaction.",
          image: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
        },
      ]}
      spacing="xl"
      background="white"
    />
  );
}
