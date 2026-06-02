import { FaqRoundedCards } from "@opensite/ui/blocks/faq/faq-rounded-cards";

export default function Demo() {
  return (
    <FaqRoundedCards
      heading="Quick Answers"
      description="Get instant answers to the most frequently asked questions about our platform."
      items={[
        {
          id: "training",
          question: "Do you provide training for new users?",
          answer:
            "Yes, we offer live onboarding sessions, video tutorials, interactive guides, and comprehensive documentation. Enterprise customers get dedicated training sessions.",
        },
        {
          id: "mobile-features",
          question: "Are all features available on mobile?",
          answer:
            "Yes, our mobile apps have full feature parity with the web version. Create, edit, and manage everything from your smartphone or tablet.",
        },
        {
          id: "bulk-actions",
          question: "Can I perform bulk operations?",
          answer:
            "Absolutely. Select multiple items and perform batch operations like assign, move, delete, export, or update custom fields. Saves hours of manual work.",
        },
        {
          id: "time-tracking",
          question: "Is time tracking built-in?",
          answer:
            "Yes, track time on tasks with built-in timers, manual entries, and timesheet views. Generate detailed reports and export for billing or payroll.",
        },
        {
          id: "file-versioning",
          question: "Do you keep file version history?",
          answer:
            "Yes, we automatically save versions of all uploaded files. View, restore, or compare previous versions anytime. 30-day history on all plans.",
        },
        {
          id: "calendar-sync",
          question: "Can I sync with my calendar?",
          answer:
            "Yes, sync with Google Calendar, Outlook, and Apple Calendar. View tasks and deadlines alongside your meetings and appointments.",
        },
      ]}
      pattern="dashedGridFadeCenter"
      patternOpacity={0.25}
      background="dark"
    />
  );
}
