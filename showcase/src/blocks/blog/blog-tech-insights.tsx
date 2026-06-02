import { BlogTechInsights } from "@opensite/ui/blocks/blog/blog-tech-insights";

export default function Demo() {
  return (
    <BlogTechInsights
      heading="Tech Insights"
      description="Latest developments in technology. Exploring the intersection of blockchain technology and supply chain management for transparency and traceability."
      readMoreAction={{
        label: "View All",
        href: "#",
        variant: "default",
        asButton: true,
        size: "lg",
      }}
      featuredPost={{
        id: "featured",
        title: "The Rise of Edge Computing in Modern Applications",
        image: "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt",
        author: "Dr. Emily Chang",
        authorAvatar: "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u",
        authorRole: "Principal Architect",
        href: "/blog/edge-computing-rise",
      }}
      secondaryPosts={[
        {
          id: "1",
          title: "WebAssembly: Transforming Web Performance",
          description:
            "How WebAssembly is transforming browser-based applications and enabling near-native performance for web apps.",
          image: "https://toastability-production.s3.amazonaws.com/pjgb223h1bjywdk15i3zi7pjhutg",
          href: "/blog/webassembly-transformation",
        },
        {
          id: "2",
          title: "Blockchain in Supply Chain Management",
          description:
            "Exploring the intersection of blockchain technology and supply chain management for transparency and traceability.",
          image: "https://toastability-production.s3.amazonaws.com/ihgx63s5nfzp2e93e3ccljjnnrov",
          href: "/blog/blockchain-supply-chain",
        },
        {
          id: "3",
          title: "Quantum-Resistant Cryptography: Preparing for the Future",
          description:
            "Deep dive into quantum-resistant cryptography and preparing systems for the post-quantum computing era.",
          image: "https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40",
          href: "/blog/quantum-resistant-crypto",
        },
      ]}
    />
  );
}
