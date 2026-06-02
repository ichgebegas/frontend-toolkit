import { ArticleSidebarSticky } from "@opensite/ui/blocks/article/article-sidebar-sticky";
import { LONG_FORM_MARKDOWN_STRING, optixFlowApiKey } from "@/lib/media";

const ARTICLE_IMAGE_URL =
  "https://toastability-production.s3.amazonaws.com/l080sx0lcx51x44dqrb8006nqf08";

export default function Demo() {
  return (
    <ArticleSidebarSticky
      backHref="#"
      backText="Back to Blog"
      title="Mastering React Server Components: A Deep Dive"
      authorName="Emma Thompson"
      authorImage={ARTICLE_IMAGE_URL}
      authorHref="#"
      publishDate="January 18, 2026"
      heroImageSrc={ARTICLE_IMAGE_URL}
      heroImageAlt="React Server Components architecture"
      background="white"
      pattern="dashedGridBasic"
      patternOpacity={1}
      markdownString={LONG_FORM_MARKDOWN_STRING}
      optixFlowConfig={{ apiKey: optixFlowApiKey as string }}
    />
  );
}
