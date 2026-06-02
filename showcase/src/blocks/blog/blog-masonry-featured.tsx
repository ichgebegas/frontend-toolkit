import { BlogMasonryFeatured } from "@opensite/ui/blocks/blog/blog-masonry-featured";

export default function Demo() {
  return (
    <BlogMasonryFeatured
      heading="Curated Reads"
      description="Handpicked articles and insights from our team and community to keep you informed and inspired."
      background="secondary"
      pattern="gridFadeTopLeft"
      patternOpacity={0.15}
      posts={[
        {
          id: "featured",
          title: "The Art and Science of API Design",
          description:
            "A comprehensive exploration of API design principles, RESTful best practices, GraphQL considerations, and how to create developer-friendly interfaces that stand the test of time.",
          image: "https://toastability-production.s3.amazonaws.com/eoa76d31ynbg34urr6e4619la1f7",
          author: "Victoria Chang",
          date: "April 22, 2024",
          href: "#",
        },
        {
          id: "1",
          title: "Serverless Cost Optimization",
          description:
            "Strategies to reduce serverless computing costs while maintaining performance.",
          image: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo",
          author: "Ahmed Hassan",
          date: "April 19, 2024",
          href: "#",
        },
        {
          id: "2",
          title: "Building Accessible Forms",
          description:
            "Creating inclusive form experiences that work for everyone.",
          image: "https://toastability-production.s3.amazonaws.com/zykfhuapdqzu94ee1535gsgnvyac",
          author: "Laura Anderson",
          date: "April 16, 2024",
          href: "#",
        },
        {
          id: "3",
          title: "State Management in React",
          description:
            "Comparing Redux, Zustand, Jotai, and Context API for different use cases.",
          image: "https://toastability-production.s3.amazonaws.com/9eddibiq5ovc9cvs3ekijkrjpahg",
          author: "Chris Taylor",
          date: "April 13, 2024",
          href: "#",
        },
        {
          id: "4",
          title: "WebSocket Security Guide",
          description:
            "Best practices for securing real-time WebSocket connections.",
          image: "https://toastability-production.s3.amazonaws.com/9covpitzpuuobkg1m4mfokpi0enw",
          author: "Yuki Tanaka",
          date: "April 10, 2024",
          href: "#",
        },
      ]}
    />
  );
}
