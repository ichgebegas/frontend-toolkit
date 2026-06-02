import { FaqNumberedList } from "@opensite/ui/blocks/faq/faq-numbered-list";

export default function Demo() {
  return (
    <FaqNumberedList
      badge="Getting Started"
      heading="Quick Start Guide"
      description="Follow these steps to get up and running with your new account."
      items={[
        {
          question: "Create your account",
          answer:
            "Sign up with your email or use single sign-on with Google, Microsoft, or your company's identity provider. Verify your email to activate your account.",
        },
        {
          question: "Set up your workspace",
          answer:
            "Name your workspace, upload a logo, and configure your preferences. You can create multiple workspaces for different teams or projects.",
        },
        {
          question: "Invite team members",
          answer:
            "Add colleagues by email, set their roles, and they'll receive an invitation to join. You can also create public invite links for easier onboarding.",
        },
        {
          question: "Create your first project",
          answer:
            "Choose from templates or start from scratch. Add tasks, set deadlines, assign team members, and track progress in real-time.",
        },
        {
          question: "Explore integrations",
          answer:
            "Connect your favorite tools like Slack, Zoom, and Google Drive. Enable notifications and automate workflows to boost productivity.",
        },
      ]}
      background="gray"
      pattern="diagonalCrossFadeTop"
      patternOpacity={1}
    />
  );
}
