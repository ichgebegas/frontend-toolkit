import { ExpandableCaseStudyCards } from "@opensite/ui/blocks/gallery/expandable-case-study-cards";

export default function Demo() {
  return (
    <ExpandableCaseStudyCards
      title="Explore Our Case Studies"
      description="Discover our solutions"
      items={[
        {
          id: "1",
          title: "Global E-commerce Transformation",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/xwh1zzxgyd887thfm1j9lu9qnd6c",
          imageAlt: "E-commerce platform",
          logo: "https://cdn.ing/assets/i/r/288964/4xdrg1wjc2knoy58ulqijicamar3/ui-placeholder-logo-dark-1.png",
          logoAlt: "TechCorp logo",
          company: "TechCorp",
          description:
            "Revolutionizing online retail with a scalable, AI-driven platform that enhanced user experience and boosted sales by 50%.",
          badges: ["E-commerce", "Cloud", "AI"],
        },
        {
          id: "2",
          title: "Healthcare Data Platform",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/ri0dqx79spe6771np76mkmno5xfd",
          imageAlt: "Healthcare platform",
          logo: "https://cdn.ing/assets/i/r/288965/aw0n8ithqntxtfweqrlmseqlcak7/ui-placeholder-logo-black-2.png",
          logoAlt: "MediSync logo",
          company: "MediSync",
          description:
            "Integrating patient data across multiple systems to provide real-time insights, improving care quality and operational efficiency.",
          badges: ["Healthcare", "HIPAA", "Integration"],
        },
        {
          id: "3",
          title: "Financial Services Modernization",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/e13qu3083lkhdg7th64vb628172a",
          imageAlt: "Financial platform",
          logo: "https://cdn.ing/assets/i/r/288972/kppvdeo8kgeweawxisqy9h9ybz6h/ui-placeholder-logo-black-3.png",
          logoAlt: "FinanceFlow logo",
          company: "FinanceFlow",
          description:
            "Implementing a secure, compliant fintech platform that streamlined transactions and enhanced user trust, resulting in a 30% increase in customer retention.",
          badges: ["Fintech", "Security", "Compliance"],
        },
        {
          id: "4",
          title: "Manufacturing IoT Solution",
          href: "#",
          image: "https://toastability-production.s3.amazonaws.com/w87w0fyjdol9yzwo7yywkgxidvzo",
          imageAlt: "IoT platform",
          logo: "https://cdn.ing/assets/i/r/288970/op9ys0gsyi7len3w742n0os7ebu6/ui-placeholder-logo-black-4.png",
          logoAlt: "IndustrialTech logo",
          company: "IndustrialTech",
          description:
            "Deploying an IoT-enabled manufacturing platform that optimized production processes, reduced downtime by 25%, and improved overall equipment effectiveness.",
          badges: ["IoT", "Manufacturing", "Real-time"],
        },
      ]}
      background="dark"
      pattern="gridDotsBasic"
      patternOpacity={0.25}
      spacing="py-12 md:py-40"
    />
  );
}
