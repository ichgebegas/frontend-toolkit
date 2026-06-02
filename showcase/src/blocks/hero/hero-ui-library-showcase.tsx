import { HeroUiLibraryShowcase } from "@opensite/ui/blocks/hero/hero-ui-library-showcase";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroUiLibraryShowcase
      logo={{
        src: "https://cdn.ing/assets/i/r/288973/lxkmf98s3bmpytziacx1o0rwuun9/ui-placeholder-logo-white-6.png",
        alt: "StartupCo Logo",
      }}
      heading="Beautiful components for modern apps"
      description="A comprehensive UI library with 100+ components. Built with accessibility, performance, and developer experience in mind."
      image={{
        src: "https://toastability-production.s3.amazonaws.com/n001o4pfpszmyw03ubctig7kvf0e",
        alt: "UI component showcase",
      }}
      actions={[
        {
          label: "Browse Components",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View Docs",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/book-open" size={16} />,
        },
      ]}
      background="secondary"
      pattern="gridFadeTop"
      patternOpacity={0.1}
    />
  );
}
