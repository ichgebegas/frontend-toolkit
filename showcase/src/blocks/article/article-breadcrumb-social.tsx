import { ArticleBreadcrumbSocial } from "@opensite/ui/blocks/article/article-breadcrumb-social";
import { LONG_FORM_MARKDOWN_STRING } from "@/lib/media";

const ARTICLE_IMAGE_URL =
  "https://toastability-production.s3.amazonaws.com/0o6d7z4mm9nzeufhv9kefrhihbip";

export default function Demo() {
  return (
    <ArticleBreadcrumbSocial
      breadcrumbs={[
        { label: "Blog", href: "#" },
        { label: "Technology", href: "#" },
      ]}
      background="white"
      pattern="p6"
      patternOpacity={1}
      currentPage="Building Scalable Web Applications"
      title="Building Scalable Web Applications in 2026"
      author={{
        name: "Sarah Mitchell",
        image: ARTICLE_IMAGE_URL,
        role: "Senior Software Architect",
      }}
      publishDate="January 15, 2026"
      readTime="12 min read"
      heroImageSrc={ARTICLE_IMAGE_URL}
      heroImageAlt="Modern web application architecture"
      sections={[
        { id: "overview", title: "Overview" },
        { id: "key-features", title: "Key Features" },
        { id: "implementation", title: "Implementation" },
        { id: "performance", title: "Performance Metrics" },
        { id: "summary", title: "Summary" },
      ]}
      enableTocTracking={true}
      enableBackToTop={true}
      markdownString={LONG_FORM_MARKDOWN_STRING}
    />
  );
}
