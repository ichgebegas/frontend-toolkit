import { CarouselScrollingFeatureShowcase } from "@opensite/ui/blocks/carousel/carousel-scrolling-feature-showcase";

export default function Demo() {
  return (
    <CarouselScrollingFeatureShowcase
      heading="Revolutionary Features"
      subheading="Everything you need to transform your business operations"
      pattern="diagonalCrossBasic"
      patternOpacity={0.7}
      background="white"
      features={[
        {
          id: "ai-assistant",
          title: "AI-Powered Virtual Assistant",
          description:
            "Meet your new intelligent helper that understands context, learns from interactions, and provides personalized recommendations. Available 24/7 to answer questions, automate tasks, and boost your productivity by up to 40%. Uses advanced natural language processing to understand even complex queries and deliver accurate responses in milliseconds.",
          image: "https://toastability-production.s3.amazonaws.com/c4sgsy0g7o2rrjmvm9x7evxems82",
        },
        {
          id: "real-time-sync",
          title: "Real-Time Data Synchronization",
          description:
            "Stay perfectly in sync across all your devices and team members. Changes appear instantly for everyone, eliminating version conflicts and ensuring your team always works with the most current information. Our conflict resolution algorithms handle simultaneous edits gracefully, and offline mode lets you work anywhere.",
          image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
        },
        {
          id: "custom-workflows",
          title: "No-Code Workflow Builder",
          description:
            "Design sophisticated business processes without writing a single line of code. Our visual workflow builder features drag-and-drop simplicity with powerful logic capabilities including conditional branching, loops, and external API calls. Includes 200+ pre-built templates to get you started instantly.",
          image: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9",
        },
        {
          id: "advanced-permissions",
          title: "Granular Access Control",
          description:
            "Define precisely who can see and do what with field-level permissions, role-based access control, and conditional visibility rules. Create custom roles, set up approval workflows, and maintain detailed audit logs of all access and changes. Perfect for enterprises with complex compliance requirements.",
          image: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
        },
        {
          id: "predictive-insights",
          title: "Predictive Analytics Engine",
          description:
            "Harness the power of machine learning to forecast trends, identify opportunities, and prevent problems before they happen. Our ML models analyze historical patterns and external factors to deliver actionable insights with confidence scores. Customize predictions based on your unique business metrics.",
          image: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt",
        },
        {
          id: "white-label",
          title: "Complete White Labeling",
          description:
            "Make the platform truly yours with comprehensive branding options. Customize logos, colors, domain names, email templates, and even terminology to match your brand identity perfectly. Your clients will never know you're using a third-party platform.",
          image: "https://toastability-production.s3.amazonaws.com/e13qu3083lkhdg7th64vb628172a",
        },
      ]}
    />
  );
}
