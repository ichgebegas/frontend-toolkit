import { BlogFilteredResults } from "@opensite/ui/blocks/blog/blog-filtered-results";

export default function Demo() {
  return (
    <BlogFilteredResults
      pattern="diagonalCrossFadeTop"
      patternOpacity={1}
      heading="Tech Insights & Tutorials"
      description="Filter and discover content tailored to your interests. Stay ahead with the latest in technology, design, and business innovation."
      allContentHeading="All Articles"
      breadcrumb={[
        { label: "Home", link: "/" },
        { label: "Blog", link: "/blog" },
        { label: "All Articles", link: "/blog/all" },
      ]}
      primaryPost={{
        id: "featured",
        title: "Implementing CI/CD Pipelines at Scale",
        summary:
          "Learn how to build robust continuous integration and deployment pipelines that can handle enterprise-level complexity.",
        category: "DevOps",
        thumbnail: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
        cta: "Read Full Article",
        href: "/blog/cicd-at-scale",
      }}
      posts={[
        {
          id: "1",
          title: "Container Security: Protecting Your Docker Deployments",
          summary:
            "Essential security practices for containerized applications and infrastructure.",
          category: "security",
          thumbnail: "https://toastability-production.s3.amazonaws.com/73e0s79u4crdu7cmjfp99j1l2v55",
          cta: "Learn More",
          href: "/blog/container-security",
        },
        {
          id: "2",
          title: "React Server Components Deep Dive",
          summary:
            "Understanding the architecture and benefits of React Server Components for modern web apps.",
          category: "development",
          thumbnail: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
          cta: "Explore",
          href: "/blog/react-server-components",
        },
        {
          id: "3",
          title: "Building Real-Time Analytics Dashboards",
          summary:
            "Techniques for creating responsive, real-time data visualization platforms.",
          category: "data",
          thumbnail: "https://toastability-production.s3.amazonaws.com/y1aezpa78m2fhfvj8whcx337y9cb",
          cta: "Read More",
          href: "/blog/realtime-analytics",
        },
        {
          id: "4",
          title: "Mobile App Performance Optimization",
          summary:
            "Proven strategies to make your mobile applications faster and more responsive.",
          category: "mobile",
          thumbnail: "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08",
          cta: "Discover",
          href: "/blog/mobile-performance",
        },
        {
          id: "5",
          title: "The Art of Technical Writing",
          summary:
            "How to create clear, effective documentation that developers actually want to read.",
          category: "writing",
          thumbnail: "https://toastability-production.s3.amazonaws.com/82ykd8s8boiqaxypkulb0v0s2qiw",
          cta: "Read Now",
          href: "/blog/technical-writing",
        },
        {
          id: "6",
          title: "Distributed Systems Observability",
          summary:
            "Monitoring, logging, and tracing strategies for complex distributed architectures.",
          category: "infrastructure",
          thumbnail: "https://toastability-production.s3.amazonaws.com/2d4k8d5shwg82276hzj2ztbj7mxq",
          cta: "View Article",
          href: "/blog/distributed-observability",
        },
      ]}
      categories={[
        { label: "All", value: "all" },
        { label: "Development", value: "development" },
        { label: "Security", value: "security" },
        { label: "Data", value: "data" },
        { label: "Mobile", value: "mobile" },
        { label: "Infrastructure", value: "infrastructure" },
        { label: "Writing", value: "writing" },
      ]}
      postsPerPage={6}
      loadMoreAction={{
        label: "Load More Articles",
        variant: "outline",
      }}
    />
  );
}
