import { ProcessStickySteps } from "@opensite/ui/blocks/process/process-sticky-steps";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <ProcessStickySteps
      heading="Delivery Process"
      description="A transparent, collaborative approach that keeps you informed and engaged throughout the project lifecycle."
      actions={[
        {
          label: "Schedule a Call",
          href: "/contact",
          variant: "default",
          iconAfter: <DynamicIcon name="lucide/phone" size={16} />,
        },
        {
          label: "View Pricing",
          href: "/pricing",
          variant: "outline",
        },
      ]}
      steps={[
        {
          step: "01",
          title: "Project Kickoff",
          description: "Align on goals, timeline, and success criteria. Meet the team, review the project plan, and establish communication protocols for seamless collaboration.",
        },
        {
          step: "02",
          title: "Sprint Planning",
          description: "Break down deliverables into manageable sprints. Prioritize features based on value and complexity, ensuring we tackle the most critical items first.",
        },
        {
          step: "03",
          title: "Design Review",
          description: "Present wireframes and mockups for feedback. Iterate based on stakeholder input to ensure the design meets both user needs and business objectives.",
        },
        {
          step: "04",
          title: "Development Cycles",
          description: "Build features incrementally with regular check-ins. Demo working software at the end of each sprint to gather feedback and adjust priorities.",
        },
        {
          step: "05",
          title: "Quality Assurance",
          description: "Conduct thorough testing across all scenarios. Identify and resolve issues before they reach production, ensuring a smooth user experience.",
        },
        {
          step: "06",
          title: "Deployment & Support",
          description: "Launch to production with monitoring and support. Provide training, documentation, and ongoing assistance to ensure successful adoption.",
        },
      ]}
      spacing="xl"
      background="dark"
    />
  );
}
