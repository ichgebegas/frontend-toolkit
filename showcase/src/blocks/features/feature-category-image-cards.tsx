import { FeatureCategoryImageCards } from "@opensite/ui/blocks/features/feature-category-image-cards";

export default function Demo() {
  return (
    <FeatureCategoryImageCards
      badge="Product Categories"
      title="Explore Our Platform"
      description="Discover the tools and features designed to help you build, ship, and scale your applications."
      features={[
        {
          title: "Authentication & Security",
          category: "Core Infrastructure",
          imageSrc: "https://toastability-production.s3.amazonaws.com/vvkma6b8whdkiq5nq8z4eyfe00vo",
          imageAlt: "Authentication features",
        },
        {
          title: "Data Analytics",
          category: "Insights & Reporting",
          imageSrc: "https://toastability-production.s3.amazonaws.com/9ujya2tfhxja7y5s9wb7d2u8crhd",
          imageAlt: "Analytics dashboard",
        },
        {
          title: "API Management",
          category: "Developer Tools",
          imageSrc: "https://toastability-production.s3.amazonaws.com/klr5tuvulkyqfb721txtu4hgzxdm",
          imageAlt: "API management",
        },
      ]}
      background="dark"
      spacing="xl"
    />
  );
}
