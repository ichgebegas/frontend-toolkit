import { CarouselIconTabs } from "@opensite/ui/blocks/gallery/carousel-icon-tabs";

export default function Demo() {
  return (
    <CarouselIconTabs
      heading="Platform Features"
      badge="Enterprise Ready"
      sections={[
        {
          img: "https://toastability-production.s3.amazonaws.com/6ku135fhv528eei3agnoc3zd7y75",
          alt: "Analytics Dashboard",
          title: "Advanced Analytics",
          text: "Comprehensive analytics dashboard with real-time data visualization, custom reports, and predictive insights. Track KPIs, user behavior, and business metrics in one unified platform.",
          icon: "lucide/bar-chart-3",
        },
        {
          img: "https://toastability-production.s3.amazonaws.com/x4scuzhsozrwrg703df5wbhygkgo",
          alt: "Team Collaboration",
          title: "Team Collaboration",
          text: "Built-in collaboration tools including real-time messaging, file sharing, and project management. Keep your team aligned and productive with seamless communication.",
          icon: "lucide/users",
        },
        {
          img: "https://toastability-production.s3.amazonaws.com/73e0s79u4crdu7cmjfp99j1l2v55",
          alt: "API Integration",
          title: "API Integration",
          text: "Extensive REST API with comprehensive documentation and SDKs for all major languages. Connect with your existing tools and build custom integrations effortlessly.",
          icon: "lucide/plug",
        },
        {
          img: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
          alt: "Automation Engine",
          title: "Automation Engine",
          text: "Powerful workflow automation with visual builder and pre-built templates. Automate repetitive tasks and create complex workflows without writing code.",
          icon: "lucide/workflow",
        },
        {
          img: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh",
          alt: "Custom Reports",
          title: "Custom Reports",
          text: "Flexible reporting engine with drag-and-drop builder, scheduled exports, and white-label options. Create professional reports tailored to your specific needs.",
          icon: "lucide/file-bar-chart",
        },
      ]}
      background="white"
      spacing="lg"
      pattern="gridFadeBottomLeft"
      patternOpacity={0.7}
    />
  );
}
