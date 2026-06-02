import { HeroDeveloperToolsCode } from "@opensite/ui/blocks/hero/hero-developer-tools-code";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <HeroDeveloperToolsCode
      badgeText="For Developers"
      heading="Developer tools that just work"
      description="Build faster with modern APIs, comprehensive docs, and tools designed by developers, for developers."
      actions={[
        {
          label: "Read Docs",
          href: "#",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/arrow-right" size={16} />,
        },
        {
          label: "View GitHub",
          href: "#",
          variant: "outline",
          icon: <DynamicIcon name="lucide/github" size={16} />,
        },
      ]}
      terminalTitle="quickstart.tsx"
      terminalLines={[
        {
          text: "import { Hero } from '@toolkit/ui';",
          colorClass: "text-blue-400",
        },
        { text: "", colorClass: "" },
        {
          text: "export default function Page() {",
          colorClass: "text-purple-400",
        },
        {
          text: '  return <Hero heading="Hello World" />;',
          colorClass: "text-green-400",
        },
        { text: "}", colorClass: "text-purple-400" },
      ]}
      spacing="xl"
      background="dark"
      pattern="gridFadeTop"
      patternOpacity={0.25}
    />
  );
}
