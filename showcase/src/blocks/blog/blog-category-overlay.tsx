import { BlogCategoryOverlay } from "@opensite/ui/blocks/blog/blog-category-overlay";

export default function Demo() {
  return (
    <BlogCategoryOverlay
      badge="Explore Topics"
      heading="Curated Content for Every Interest"
      description="Browse through our carefully organized collection of articles, tutorials, and insights across various technology domains."
      posts={[
        {
          id: "1",
          title: "Machine Learning Model Optimization Techniques",
          image: "https://toastability-production.s3.amazonaws.com/6ntdz6xwid3fswjz8y0otdxmzs40",
          category: "AI & ML",
          date: "April 12, 2024",
          href: "/blog/ml-optimization",
        },
        {
          id: "2",
          title: "Progressive Web Apps: The Complete Guide",
          image: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo",
          category: "Web Development",
          date: "April 8, 2024",
          href: "/blog/pwa-complete-guide",
        },
        {
          id: "3",
          title: "Cybersecurity Best Practices for Remote Teams",
          image: "https://toastability-production.s3.amazonaws.com/kh1p8y15v55ctp5ulobm4pd77etm",
          category: "Security",
          date: "April 5, 2024",
          href: "/blog/remote-cybersecurity",
        },
        {
          id: "4",
          title: "Data Visualization with D3.js and React",
          image: "https://toastability-production.s3.amazonaws.com/jhjfvkmdzktacyijd9fh6acc7o2c",
          category: "Data Science",
          date: "March 29, 2024",
          href: "/blog/data-viz-d3-react",
        },
        {
          id: "5",
          title: "Building Accessible Web Applications",
          image: "https://toastability-production.s3.amazonaws.com/9uxe0jw1zl1tujy0m5yalo7m2ht8",
          category: "Accessibility",
          date: "March 25, 2024",
          href: "/blog/accessible-web-apps",
        },
        {
          id: "6",
          title: "DevOps Culture: Bridging Development and Operations",
          image: "https://toastability-production.s3.amazonaws.com/s4vho0wfbjhf758oife8qfuekou8",
          category: "DevOps",
          date: "March 20, 2024",
          href: "/blog/devops-culture",
        },
      ]}
      viewAllAction={{
        label: "Browse All Categories",
        href: "/categories",
        asButton: true,
      }}
      readMoreText="Read Article"
    />
  );
}
