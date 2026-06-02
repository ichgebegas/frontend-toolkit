import { ProcessIconTimeline } from "@opensite/ui/blocks/process/process-icon-timeline";

export default function Demo() {
  return (
    <ProcessIconTimeline
      heading="Product Development Timeline"
      description="From concept to launch, our proven process ensures success at every milestone."
      steps={[
        {
          icon: "lucide/lightbulb",
          title: "Concept & Validation",
          description: "Validate your idea through market research, competitive analysis, and user interviews. Define the value proposition and identify target markets.",
          highlights: ["Market Research", "User Surveys", "Competitive Analysis"],
          badgeColor: "bg-blue-500",
        },
        {
          icon: "lucide/layout",
          title: "Design & Wireframing",
          description: "Create detailed wireframes and user flows. Develop a cohesive design system that scales across your product.",
          highlights: ["Wireframes", "Design System", "User Flows"],
          badgeColor: "bg-purple-500",
        },
        {
          icon: "lucide/code",
          title: "Development Sprint",
          description: "Build the MVP with agile methodology. Implement core features with clean, maintainable code and automated testing.",
          highlights: ["Agile Sprints", "Code Reviews", "Automated Tests"],
          badgeColor: "bg-green-500",
        },
        {
          icon: "lucide/users",
          title: "Beta Testing",
          description: "Launch beta program with early adopters. Gather feedback, fix bugs, and refine features based on real user behavior.",
          highlights: ["User Feedback", "Bug Fixes", "Feature Refinement"],
          badgeColor: "bg-orange-500",
        },
        {
          icon: "lucide/rocket",
          title: "Production Launch",
          description: "Deploy to production with comprehensive monitoring. Execute go-to-market strategy and provide ongoing customer support.",
          highlights: ["Production Deploy", "Marketing Launch", "Customer Support"],
          badgeColor: "bg-red-500",
        },
      ]}
      spacing="xl"
      background="gray"
    />
  );
}
