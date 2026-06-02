import { BlogCarouselApple } from "@opensite/ui/blocks/blog/blog-carousel-apple";

export default function Demo() {
  return (
    <BlogCarouselApple
      title="Featured Stories"
      subtitle="Trending Now"
      posts={[
        {
          image: "https://toastability-production.s3.amazonaws.com/90rcw2mljzpeuxlac8q77mor15xz",
          title: "The Evolution of Cloud-Native Development",
          category: "Cloud Computing",
          url: "/blog/cloud-native-evolution",
          excerpt:
            "Explore how cloud-native architectures are transforming software development and deployment strategies across industries.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/g1iuifb3yzoofo9c7a00koyn6q1t",
          title: "Blockchain Beyond Cryptocurrency",
          category: "Innovation",
          url: "/blog/blockchain-applications",
          excerpt:
            "Discover practical blockchain applications in supply chain, healthcare, and enterprise solutions beyond digital currencies.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/hu4gmd93sp95wdyr9qijze0rgim9",
          title: "UX Design Principles for Mobile-First",
          category: "Design",
          url: "/blog/mobile-first-ux",
          excerpt:
            "Master the essential principles of creating intuitive mobile experiences that users love and businesses benefit from.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/3ghn8dz3g9qtt4pf4nwbriaydvzb",
          title: "Quantum Computing: Current State and Future",
          category: "Technology",
          url: "/blog/quantum-computing-future",
          excerpt:
            "An in-depth look at quantum computing's progress, challenges, and potential impact on various industries.",
        },
        {
          image: "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u",
          title: "API-First Development Strategy",
          category: "Development",
          url: "/blog/api-first-strategy",
          excerpt:
            "Learn why API-first approaches are becoming the standard for modern software development teams.",
        },
      ]}
      actionType="link"
      enableLayoutAnimations={true}
      background="dark"
      pattern="dashedGridFadeTopLeft"
      patternOpacity={0.15}
    />
  );
}
