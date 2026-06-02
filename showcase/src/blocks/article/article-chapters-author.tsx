import { ArticleChaptersAuthor } from "@opensite/ui/blocks/article/article-chapters-author";
import { LONG_FORM_MARKDOWN_STRING } from "@/lib/media";

const ARTICLE_IMAGE_URL =
  "https://toastability-production.s3.amazonaws.com/1xdx70c7gp9l883soyh5d3exesvt";

export default function Demo() {
  return (
    <ArticleChaptersAuthor
      breadcrumbs={[
        { label: "Resources", href: "#resources" },
        { label: "Guides", href: "#guides" },
      ]}
      pattern="squareAltGrid"
      patternOpacity={0.7}
      background="muted"
      currentPage="Design Patterns"
      title="The Complete Guide to Design Patterns"
      subtitle="Master the fundamental patterns that power modern software architecture"
      heroImageSrc={ARTICLE_IMAGE_URL}
      heroImageAlt="Software architecture visualization"
      chapters={[
        { id: "chapter-1", number: 1, title: "The Foundation" },
        { id: "chapter-2", number: 2, title: "Building Blocks" },
        { id: "chapter-3", number: 3, title: "Advanced Patterns" },
        { id: "chapter-4", number: 4, title: "Real-World Applications" },
        { id: "chapter-5", number: 5, title: "Future Directions" },
      ]}
      author={{
        name: "Dr. Marcus Chen",
        role: "Principal Engineer",
        image: ARTICLE_IMAGE_URL,
        bio: "Marcus has over 15 years of experience designing large-scale distributed systems. He's the author of three books on software architecture and a frequent speaker at tech conferences.",
        socialLinks: [
          {
            href: "https://instagram.com",
          },
          {
            href: "https://twitter.com",
          },
          {
            href: "https://linkedin.com",
          },
          {
            href: "https://youtube.com",
          },
        ],
      }}
      conclusionTitle="Ready to Master Design Patterns?"
      conclusionDescription="Take your software architecture skills to the next level with our comprehensive course and interactive workshops."
      conclusionActions={[
        {
          label: "Enroll in Course",
          href: "#",
          variant: "default",
        },
        {
          label: "Download Resources",
          href: "#",
          variant: "outline",
        },
      ]}
      enableChapterTracking={true}
      markdownString={LONG_FORM_MARKDOWN_STRING}
    />
  );
}
