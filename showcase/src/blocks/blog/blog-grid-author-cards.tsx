import { BlogGridAuthorCards } from "@opensite/ui/blocks/blog/blog-grid-author-cards";

export default function Demo() {
  return (
    <BlogGridAuthorCards
      heading="Stories from Our Team"
      description="Expert insights, practical guides, and thought leadership from our talented contributors."
      posts={[
        {
          id: "1",
          title: "Scaling Engineering Teams: Lessons from 10 Years",
          summary:
            "Key insights on building and scaling high-performing engineering organizations from startup to enterprise.",
          image: "https://toastability-production.s3.amazonaws.com/s4vho0wfbjhf758oife8qfuekou8",
          category: "Leadership",
          author: "Marcus Johnson",
          authorAvatar: "https://cdn.ing/assets/i/r/289100/qx79hnpbzbm229nfaeceafv6b3a8/cooking-citrus-and-pistachio-bundt-cake-on-rusty-t-2024-10-18-04-31-33-utc.webp",
          published: "April 15, 2024",
          href: "#",
        },
        {
          id: "2",
          title: "The Psychology of User Interface Design",
          summary:
            "How cognitive principles and behavioral psychology inform better UI/UX decisions and user experiences.",
          image: "https://toastability-production.s3.amazonaws.com/betxbx61fkijt0aygineplf489ze",
          category: "Design",
          author: "Rachel Park",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u",
          published: "April 13, 2024",
          href: "#",
        },
        {
          id: "3",
          title: "From Monolith to Microservices: A Migration Story",
          summary:
            "Our journey breaking down a legacy monolithic application into a modern microservices architecture.",
          image: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
          category: "Architecture",
          author: "Alex Rivera",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/dvz0441h9fxjhh88lzqbwdoyxv52",
          published: "April 10, 2024",
          href: "#",
        },
        {
          id: "4",
          title: "Machine Learning in Production: Real-World Challenges",
          summary:
            "Practical lessons learned deploying ML models at scale in production environments.",
          image: "https://toastability-production.s3.amazonaws.com/betxbx61fkijt0aygineplf489ze",
          category: "AI/ML",
          author: "Dr. Priya Sharma",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/3vwfdbekbkskxj2mvlvu85fz787u",
          published: "April 8, 2024",
          href: "#",
        },
        {
          id: "5",
          title: "Building Resilient Distributed Systems",
          summary:
            "Design patterns and strategies for creating fault-tolerant systems that gracefully handle failures.",
          image: "https://toastability-production.s3.amazonaws.com/9keidwrag6g7jtqr7rdwb1ryt6ht",
          category: "Systems",
          author: "Thomas Wei",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/b555hwjt7ltr81et05v5254q1ak6",
          published: "April 5, 2024",
          href: "#",
        },
        {
          id: "6",
          title: "The Future of Web Development: 2024 and Beyond",
          summary:
            "Emerging trends, technologies, and paradigms shaping the next generation of web applications.",
          image: "https://toastability-production.s3.amazonaws.com/eoa76d31ynbg34urr6e4619la1f7",
          category: "Web Dev",
          author: "Sophie Martinez",
          authorAvatar: "https://toastability-production.s3.amazonaws.com/rddfyzvfpdlbzwhgep2myppwxn05",
          published: "April 2, 2024",
          href: "#",
        },
      ]}
      viewAllAction={{
        label: "View All Posts",
        href: "#",
        variant: "outline",
      }}
      background="gray"
      pattern="diagonalCrossFadeTopLeft"
      patternOpacity={0.9}
    />
  );
}
