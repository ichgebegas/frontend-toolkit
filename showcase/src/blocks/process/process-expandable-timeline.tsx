import { ProcessExpandableTimeline } from "@opensite/ui/blocks/process/process-expandable-timeline";

export default function Demo() {
  return (
    <ProcessExpandableTimeline
      heading="Our Development Process"
      description="A comprehensive workflow designed to deliver exceptional results through proven methodologies and continuous collaboration."
      steps={[
        {
          title: "Discovery & Research",
          description:
            "Deep dive into your business goals, target audience, and competitive landscape.",
          expandedContent:
            "We conduct stakeholder interviews, user research sessions, and competitive analysis to establish a solid foundation. Our team analyzes market trends, user behavior patterns, and technical requirements to create a comprehensive project roadmap that aligns with your business objectives.",
        },
        {
          title: "Strategy & Planning",
          description:
            "Create a detailed roadmap with milestones, deliverables, and success metrics.",
          expandedContent:
            "Based on our research findings, we develop a strategic plan that includes information architecture, user flows, technical specifications, and a phased implementation timeline. We establish KPIs and define success criteria to ensure measurable outcomes throughout the project lifecycle.",
        },
        {
          title: "Design & Prototyping",
          description:
            "Craft intuitive interfaces with user-centered design principles.",
          expandedContent:
            "Our design team creates wireframes, high-fidelity mockups, and interactive prototypes. We conduct usability testing and iterate based on feedback to ensure the design meets user needs and business requirements. Every design decision is validated through data and user testing.",
        },
        {
          title: "Development & Implementation",
          description:
            "Build robust, scalable solutions using modern technologies.",
          expandedContent:
            "Our engineering team follows agile development practices with regular sprints, code reviews, and automated testing. We implement best practices for security, performance, and scalability while maintaining clean, maintainable code. Continuous integration ensures rapid deployment and quality assurance.",
        },
        {
          title: "Testing & Quality Assurance",
          description:
            "Rigorous testing across devices, browsers, and scenarios.",
          expandedContent:
            "Comprehensive QA process includes functional testing, performance optimization, security audits, and accessibility compliance checks. We conduct cross-browser testing, mobile responsiveness validation, and load testing to ensure a flawless user experience across all platforms.",
        },
        {
          title: "Launch & Optimization",
          description:
            "Deploy with confidence and continuously improve based on real-world data.",
          expandedContent:
            "We execute a carefully planned deployment strategy with monitoring and rollback capabilities. Post-launch, we track analytics, gather user feedback, and make data-driven optimizations. Our team provides ongoing support and iterative improvements to maximize performance and user satisfaction.",
        },
      ]}
      background="dark"
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
