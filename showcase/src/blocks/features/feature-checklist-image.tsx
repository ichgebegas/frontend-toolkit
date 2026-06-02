import { FeatureChecklistImage } from "@opensite/ui/blocks/features/feature-checklist-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureChecklistImage
      title="Everything You Need to Succeed"
      description="Our platform provides all the tools, integrations, and support you need to build and scale your applications with confidence."
      imageSrc={"https://toastability-production.s3.amazonaws.com/0kx9umbfmv881wt9dfqnohv8efgi"}
      imageAlt="Platform features overview"
      actions={[
        {
          label: "Get Started",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "Schedule Demo",
          href: "#",
          variant: "outline",
        },
      ]}
      checklistItems={[
        "Zero-config deployment to global edge network",
        "Automatic SSL certificates and custom domains",
        "Built-in CI/CD with GitHub, GitLab, and Bitbucket",
      ]}
      background="dark"
      pattern="architect"
      patternOpacity={1}
    />
  );
}
