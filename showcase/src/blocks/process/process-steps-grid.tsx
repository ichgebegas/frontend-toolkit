import { ProcessStepsGrid } from "@opensite/ui/blocks/process/process-steps-grid";

export default function Demo() {
  return (
    <ProcessStepsGrid
      heading="Getting Started is Simple"
      description="Follow our straightforward onboarding process to go from signup to success in minutes."
      steps={[
        {
          icon: "lucide/user-plus",
          title: "Create Your Account",
          description: "Sign up in seconds with email or social login. No credit card required to start your free trial.",
        },
        {
          icon: "lucide/settings",
          title: "Configure Your Workspace",
          description: "Customize your environment with templates, integrations, and team settings tailored to your workflow.",
        },
        {
          icon: "lucide/users",
          title: "Invite Your Team",
          description: "Collaborate effectively by inviting team members and assigning roles with granular permissions.",
        },
        {
          icon: "lucide/upload",
          title: "Import Your Data",
          description: "Seamlessly migrate existing data from spreadsheets, databases, or other platforms with our import tools.",
        },
        {
          icon: "lucide/palette",
          title: "Customize & Brand",
          description: "Apply your brand colors, logos, and styling to create a cohesive experience for your users.",
        },
        {
          icon: "lucide/rocket",
          title: "Launch & Grow",
          description: "Go live with confidence and scale your operations using our robust infrastructure and support.",
        },
      ]}
      spacing="xl"
      background="gray"
    />
  );
}
