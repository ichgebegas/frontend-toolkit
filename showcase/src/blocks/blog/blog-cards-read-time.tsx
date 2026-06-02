import { BlogCardsReadTime } from "@opensite/ui/blocks/blog/blog-cards-read-time";

export default function Demo() {
  return (
    <BlogCardsReadTime
      badge="Latest Articles"
      heading="Insights from Our Experts"
      description="Stay informed with the latest trends, best practices, and industry insights from our team of seasoned professionals."
      posts={[
        {
          id: "1",
          title: "Building Scalable Microservices with Kubernetes",
          summary:
            "Learn how to architect and deploy cloud-native microservices that scale effortlessly with modern container orchestration.",
          image: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
          author: "Sarah Chen",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/3ghn8dz3g9qtt4pf4nwbriaydvzb",
          readTime: "12 min read",
          href: "/blog/kubernetes-microservices",
        },
        {
          id: "2",
          title: "The Future of Artificial Intelligence in Healthcare",
          summary:
            "Exploring how AI and machine learning are revolutionizing patient care, diagnosis, and medical research.",
          image: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht",
          author: "Dr. Michael Torres",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/e83zsyvl0an0owzdmpwjnnty641x",
          readTime: "8 min read",
          href: "/blog/ai-healthcare",
        },
        {
          id: "3",
          title: "Design Systems: Creating Consistency at Scale",
          summary:
            "A comprehensive guide to building and maintaining design systems that empower teams and delight users.",
          image: "https://toastability-production.s3.amazonaws.com/9z0sbfnskx70vse99e3dfhper7i1",
          author: "Emma Williams",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/op92dycs7w856e2jsvx20st0nyz9",
          readTime: "10 min read",
          href: "/blog/design-systems",
        },
        {
          id: "4",
          title: "Zero-Trust Security Architecture Explained",
          summary:
            "Understanding the principles and implementation strategies for modern zero-trust security frameworks.",
          image: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo",
          author: "James Rodriguez",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/we9r4e711an6d0bd3dwbl9tb9z7q",
          readTime: "15 min read",
          href: "/blog/zero-trust-security",
        },
        {
          id: "5",
          title: "Optimizing React Performance for Large Applications",
          summary:
            "Practical techniques and tools for keeping your React applications fast and responsive as they grow.",
          image: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
          author: "Lisa Anderson",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40",
          readTime: "11 min read",
          href: "/blog/react-performance",
        },
        {
          id: "6",
          title: "The Rise of Edge Computing and IoT",
          summary:
            "How edge computing is transforming IoT deployments and enabling real-time data processing at scale.",
          image: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          author: "David Kim",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
          readTime: "9 min read",
          href: "/blog/edge-computing-iot",
        },
      ]}
      viewAllAction={{
        label: "View All Articles",
        href: "/blog",
        variant: "outline",
      }}
    />
  );
}
