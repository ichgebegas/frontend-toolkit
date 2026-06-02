import { BlogRelatedArticles } from "@opensite/ui/blocks/blog/blog-related-articles";

export default function Demo() {
  return (
    <BlogRelatedArticles
      heading="Related Articles"
      seeAllAction={{
        label: "See All",
        href: "/blog",
        variant: "ghost",
      }}
      articles={[
        {
          id: "1",
          title: "Authentication Best Practices for Modern Apps",
          description: "Implementing secure authentication with OAuth 2.0, JWT tokens, and multi-factor authentication strategies.",
          category: "Security",
          date: "April 18, 2024",
          href: "/blog/authentication-best-practices",
        },
        {
          id: "2",
          title: "Optimizing Database Queries for Performance",
          description: "Techniques for writing efficient SQL, understanding query plans, and leveraging indexes effectively.",
          category: "Databases",
          date: "April 15, 2024",
          href: "/blog/database-query-optimization",
        },
        {
          id: "3",
          title: "Introduction to Service Mesh with Istio",
          description: "Understanding service mesh architecture and implementing Istio for microservices communication.",
          category: "Infrastructure",
          date: "April 12, 2024",
          href: "/blog/istio-service-mesh",
        },
        {
          id: "4",
          title: "Building Responsive Images with Srcset",
          description: "Delivering optimized images for different screen sizes and pixel densities using modern HTML features.",
          category: "Web Development",
          date: "April 9, 2024",
          href: "/blog/responsive-images-srcset",
        },
      ]}
    />
  );
}
