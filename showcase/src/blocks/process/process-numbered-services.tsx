import { ProcessNumberedServices } from "@opensite/ui/blocks/process/process-numbered-services";
import { DynamicIcon } from "@opensite/ui/components/dynamic-icon";

export default function Demo() {
  return (
    <ProcessNumberedServices
      heading="Complete Service Offerings"
      description="End-to-end solutions designed to transform your digital presence and accelerate business growth."
      services={[
        {
          number: "01",
          title: "Digital Strategy & Consulting",
          description:
            "Strategic guidance to align technology with business goals. We analyze your market position, identify opportunities, and create actionable roadmaps for digital transformation.",
          capabilities: [
            "Market Analysis",
            "Technology Roadmap",
            "Competitive Intelligence",
            "ROI Modeling",
            "Risk Assessment",
            "Change Management",
          ],
          action: {
            label: "Explore Strategy Services",
            href: "#",
            variant: "outline",
            asButton: true,
          },
        },
        {
          number: "02",
          title: "Product Design & UX",
          description:
            "User-centered design that drives engagement and conversion. From research to prototyping, we create experiences that users love and businesses profit from.",
          capabilities: [
            "User Research",
            "Wireframing",
            "UI/UX Design",
            "Prototyping",
            "Usability Testing",
            "Design Systems",
          ],
          action: {
            label: "View Design Portfolio",
            href: "#",
            variant: "outline",
            asButton: true,
          },
        },
        {
          number: "03",
          title: "Custom Software Development",
          description:
            "Scalable, secure applications built with modern technologies. Our engineering team delivers robust solutions that grow with your business.",
          capabilities: [
            "Web Applications",
            "Mobile Apps",
            "API Development",
            "Cloud Architecture",
            "DevOps & CI/CD",
            "Performance Optimization",
          ],
          action: {
            label: "See Development Work",
            href: "#",
            variant: "outline",
            asButton: true,
          },
        },
        {
          number: "04",
          title: "Quality Assurance & Testing",
          description:
            "Comprehensive testing strategies to ensure flawless performance. We catch issues before your users do, maintaining quality across all platforms.",
          capabilities: [
            "Automated Testing",
            "Manual QA",
            "Performance Testing",
            "Security Audits",
            "Accessibility Testing",
            "Cross-Browser Testing",
          ],
          action: {
            label: "Learn About QA Process",
            href: "#",
            variant: "outline",
            asButton: true,
          },
        },
      ]}
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={1}
      background="gray"
    />
  );
}
