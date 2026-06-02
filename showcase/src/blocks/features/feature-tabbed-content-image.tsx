import { FeatureTabbedContentImage } from "@opensite/ui/blocks/features/feature-tabbed-content-image";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <FeatureTabbedContentImage
      title="Complete Development Platform"
      description="From development to deployment and monitoring, everything you need to build and ship modern applications."
      background="dark"
      pattern="dashedGridFadeTop"
      patternOpacity={0.2}
      slides={[
        {
          id: "development",
          tabName: "Development",
          title: "Build Faster with Modern Tools",
          description:
            "Comprehensive development environment with everything you need to ship quality code quickly.",
          features: [
            "Hot module replacement for instant feedback and everything you need to ship quality code quickly.",
            "Built-in TypeScript support and type checking",
            "Integrated testing framework with coverage reports",
            "Component library with 200+ pre-built blocks",
          ],
          actions: [
            {
              label: "Start Building",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          image: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          imageAlt: "Development environment",
        },
        {
          id: "deployment",
          tabName: "Deployment",
          title: "Deploy to Production in Seconds",
          description:
            "Push your code and let our platform handle the rest. Automatic builds, tests, and global deployment.",
          features: [
            "Zero-downtime deployments with instant rollbacks",
            "Automatic SSL certificates and custom domains",
            "Global CDN with 200+ edge locations",
            "Preview environments for every pull request",
          ],
          actions: [
            {
              label: "View Deployment Guide",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          image: "https://toastability-production.s3.amazonaws.com/u3p1hlbm2c1vvkwlm8h668pe132z",
          imageAlt: "Deployment pipeline",
        },
        {
          id: "monitoring",
          tabName: "Monitoring",
          title: "Real-Time Insights & Analytics",
          description:
            "Comprehensive observability with metrics, logs, and traces all in one place.",
          features: [
            "Real-time performance monitoring and alerts",
            "Distributed tracing across your entire stack",
            "Custom dashboards with advanced analytics",
            "Integration with Datadog, New Relic, and more",
          ],
          actions: [
            {
              label: "Explore Monitoring",
              href: "#",
              variant: "default",
              iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
            },
          ],
          image: "https://toastability-production.s3.amazonaws.com/t7iteqw4xhtppkiws88bsoia25hv",
          imageAlt: "Monitoring dashboard",
        },
      ]}
      defaultTab="development"
    />
  );
}
