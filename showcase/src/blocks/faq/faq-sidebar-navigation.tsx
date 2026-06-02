import { FaqSidebarNavigation } from "@opensite/ui/blocks/faq/faq-sidebar-navigation";

export default function Demo() {
  return (
    <FaqSidebarNavigation
      heading="Knowledge Base"
      description="Navigate through our comprehensive FAQ sections using the sidebar menu."
      pattern="diagonalCrossBasic"
      patternOpacity={0.5}
      background="gray"
      categories={[
        {
          id: "getting-started",
          title: "Getting Started",
          items: [
            {
              id: "signup",
              question: "How do I create an account?",
              answer:
                "Click 'Sign Up' in the top right corner, enter your details, and verify your email. You can also sign up using Google, Microsoft, or GitHub single sign-on.",
            },
            {
              id: "first-project",
              question: "How do I create my first project?",
              answer:
                "After logging in, click '+ New Project', choose a template or start from scratch, name your project, and invite team members. You'll be guided through setup.",
            },
          ],
        },
        {
          id: "account-management",
          title: "Account Management",
          items: [
            {
              id: "profile",
              question: "How do I update my profile?",
              answer:
                "Go to Settings > Profile. Update your name, photo, email, timezone, and notification preferences. Changes are saved automatically.",
            },
            {
              id: "delete-account",
              question: "Can I delete my account?",
              answer:
                "Yes, go to Settings > Account > Delete Account. You'll be asked to confirm, and all your data will be permanently deleted within 30 days.",
            },
          ],
        },
        {
          id: "collaboration",
          title: "Team Collaboration",
          items: [
            {
              id: "mentions",
              question: "How do mentions work?",
              answer:
                "Type @ followed by a team member's name in comments or descriptions. They'll receive a notification and can respond directly in context.",
            },
            {
              id: "sharing",
              question: "How do I share projects externally?",
              answer:
                "Click Share on any project, generate a public link, or invite specific guests via email. Control whether guests can view only or also comment.",
            },
          ],
        },
      ]}
    />
  );
}
