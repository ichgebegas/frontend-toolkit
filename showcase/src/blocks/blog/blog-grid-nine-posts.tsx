import { BlogGridNinePosts } from "@opensite/ui/blocks/blog/blog-grid-nine-posts";

export default function Demo() {
  return (
    <BlogGridNinePosts
      heading="Latest Insights"
      description="Stay informed with our collection of in-depth articles, tutorials, and industry analysis."
      posts={[
        {
          id: "1",
          title: "Kubernetes Best Practices for Production Workloads",
          summary:
            "Essential configurations, security measures, and optimization techniques for running Kubernetes in production.",
          image: "https://toastability-production.s3.amazonaws.com/f921uoblxbv8f9bmr4s2ik7xxugl",
          category: "Cloud Native",
          author: "Kevin Zhang",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/t3k42fbzq7r7j93feldqm5cj1o1n",
          published: "April 18, 2024",
          href: "/blog/kubernetes-best-practices",
        },
        {
          id: "2",
          title: "Understanding WebAssembly and Its Use Cases",
          summary:
            "Explore how WebAssembly is enabling high-performance applications in browsers and beyond.",
          image: "https://toastability-production.s3.amazonaws.com/82ykd8s8boiqaxypkulb0v0s2qiw",
          category: "Web Tech",
          author: "Nina Patel",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/oe0y4bgiylx81fbfvsw31mhdgjzs",
          published: "April 16, 2024",
          href: "/blog/webassembly-guide",
        },
        {
          id: "3",
          title: "Event-Driven Architecture Patterns",
          summary:
            "Learn how to design scalable systems using event-driven principles and messaging patterns.",
          image: "https://toastability-production.s3.amazonaws.com/sj8cs2gpbanaowqwxar1uhhwd23z",
          category: "Architecture",
          author: "Carlos Mendez",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          published: "April 14, 2024",
          href: "/blog/event-driven-patterns",
        },
        {
          id: "4",
          title: "Accessibility in Modern Web Applications",
          summary:
            "Implementing WCAG guidelines and creating inclusive experiences for all users.",
          image: "https://toastability-production.s3.amazonaws.com/2rbqbw9778770i8izdeabx8v2w2k",
          category: "Accessibility",
          author: "Jordan Lee",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/mat88x8zzdek7wpgtocjrehfivsh",
          published: "April 12, 2024",
          href: "/blog/web-accessibility",
        },
        {
          id: "5",
          title: "Database Sharding Strategies for Scale",
          summary:
            "When and how to implement database sharding to handle massive data growth.",
          image: "https://toastability-production.s3.amazonaws.com/9ughnl9wnko2vdboib8n3wl3cxsy",
          category: "Databases",
          author: "Aisha Williams",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/vvixyoo7ybq3h04q2q0kact0s5wc",
          published: "April 9, 2024",
          href: "/blog/database-sharding",
        },
        {
          id: "6",
          title: "Testing Strategies for Microservices",
          summary:
            "Comprehensive approaches to testing distributed systems and ensuring service reliability.",
          image: "https://toastability-production.s3.amazonaws.com/kh1p8y15v55ctp5ulobm4pd77etm",
          category: "Testing",
          author: "Miguel Santos",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/cen5x90p3kbdafb80liq1a5j222x",
          published: "April 7, 2024",
          href: "/blog/testing-microservices",
        },
        {
          id: "7",
          title: "CSS Grid and Flexbox: A Complete Comparison",
          summary:
            "Master modern CSS layout techniques and know when to use Grid vs Flexbox.",
          image: "https://toastability-production.s3.amazonaws.com/ihhq8unynafk4aikmys3rhbfibaz",
          category: "CSS",
          author: "Elena Kowalski",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
          published: "April 4, 2024",
          href: "/blog/css-grid-flexbox",
        },
        {
          id: "8",
          title: "Introduction to Domain-Driven Design",
          summary:
            "Understanding DDD principles and applying them to create maintainable software systems.",
          image: "https://toastability-production.s3.amazonaws.com/b555hwjt7ltr81et05v5254q1ak6",
          category: "Software Design",
          author: "Robert Kim",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/gl7n7p6atndufbsm6q2ac5jeqttp",
          published: "April 1, 2024",
          href: "/blog/domain-driven-design",
        },
        {
          id: "9",
          title: "Real-Time Collaboration: Building Apps Like Figma",
          summary:
            "Technical deep dive into building collaborative features using CRDTs and WebSockets.",
          image: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
          category: "Real-Time",
          author: "Sarah Thompson",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/sr370c2cnf7uk5k4f6znyshualv0",
          published: "March 29, 2024",
          href: "/blog/realtime-collaboration",
        },
      ]}
      ctaAction={{
        label: "Load More",
        variant: "outline",
      }}
    />
  );
}
