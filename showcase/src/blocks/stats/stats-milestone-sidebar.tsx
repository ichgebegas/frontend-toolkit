import { StatsMilestoneSidebar } from "@opensite/ui/blocks/stats/stats-milestone-sidebar";

export default function Demo() {
  return (
    <StatsMilestoneSidebar
      heading="Our Journey"
      description="Key moments that shaped who we are today and continue to drive our mission forward"
      milestones={[
        {
          year: "2018",
          title: "Company Founded",
          description:
            "Started with a vision to transform how businesses operate online. Our founding team of five engineers set out to build something meaningful.",
        },
        {
          year: "2019",
          title: "First Major Client",
          description:
            "Landed our first enterprise customer, validating our product-market fit and setting the stage for rapid growth.",
        },
        {
          year: "2020",
          title: "Series A Funding",
          description:
            "Raised $15M to accelerate product development and expand our team. Opened our first international office.",
        },
        {
          year: "2021",
          title: "Platform 2.0 Launch",
          description:
            "Released a completely redesigned platform with AI-powered features, receiving industry recognition and awards.",
        },
        {
          year: "2022",
          title: "Global Expansion",
          description:
            "Expanded to 30+ countries with localized support. Grew our team to over 100 employees across three continents.",
        },
        {
          year: "2023",
          title: "Industry Leadership",
          description:
            "Recognized as a market leader by major analysts. Surpassed 100,000 active users on the platform.",
        },
        {
          year: "2024",
          title: "Series B & Beyond",
          description:
            "Secured $50M in Series B funding to fuel our next phase of growth and innovation in AI-driven solutions.",
        },
      ]}
      spacing="lg"
    />
  );
}
