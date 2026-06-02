import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

function read(path) {
  return fs.readFileSync(path, "utf8");
}

function has(path) {
  return fs.existsSync(path);
}

assert.equal(has("snippets/patterns.css"), true, "Expected portable snippets/patterns.css.");

const patterns = read("snippets/patterns.css");
[
  "[data-pattern^=\"circuitBoard\"]",
  "[data-pattern^=\"dashedGrid\"]",
  "[data-pattern^=\"diagonalCross\"]",
  "[data-pattern^=\"gridFade\"]",
  "[data-pattern^=\"gridDots\"]",
  "[data-pattern=\"gradientGlowTop\"]",
  "[data-pattern=\"spotlightRight\"]",
  "[data-pattern=\"radialGradientBottom\"]",
].forEach((selector) => assert.equal(patterns.includes(selector), true, `Missing ${selector}.`));
assert.match(patterns, /--os-pattern-muted-local:\s*var\(--os-pattern-muted\)/, "Light surfaces require a default pattern ink token.");
assert.match(patterns, /\.article\.pattern-surface\s*\{[^}]*overflow:\s*visible/s, "Pattern surfaces that wrap sticky article sidebars must not clip their scroll context.");
["p6", "squareAltGrid", "crossPattern", "architect", "noise"].forEach((name) => {
  const rule = new RegExp(`\\.os-pattern\\[data-pattern="${name}"\\]\\s*\\{[^}]*background-size:\\s*auto`, "s");
  assert.match(patterns, rule, `${name} must reset legacy component tile sizing and render at its OpenSite asset scale.`);
});

const patternsPage = read("demo/patterns.html");
const demoScript = read("demo/script.js");
const demoStyles = read("demo/style.css");
assert.match(patternsPage, /\.\.\/snippets\/patterns\.css/);
assert.match(patternsPage, /Pattern Library/);
assert.match(patternsPage, /data-pattern-background/);
assert.match(patternsPage, /data-pattern-opacity/);
assert.match(patternsPage, /data-pattern-reset/);
assert.match(demoScript, /const patternLibrary = \[/);
assert.equal((demoScript.match(/name:\s*"/g) || []).length, 52, "Expected all 52 OpenSite pattern definitions.");
["squareAltGrid", "circuitBoardFadeBottomRight", "dashedGridFadeTopLeft", "diagonalCrossFadeBottomRight", "gridFadeBottomRight", "gridDotsFadeCenter", "gradientGlowBottom", "spotlightRight", "radialGradientBottom"].forEach((name) => {
  assert.match(demoScript, new RegExp(name));
});
assert.match(demoScript, /data-pattern-copy/);
assert.match(demoScript, /const previewRevision\s*=\s*"20260526-blog-source1"/, "Preview iframe URLs require a cache-busting revision.");
assert.match(demoScript, /withPreviewRevision\(entry\.path\)/, "Category card iframes must load the current component revision.");
assert.match(demoScript, /withPreviewRevision\(block\.path\)/, "Block detail iframes must load the current component revision.");
assert.match(demoStyles, /\.pattern-family\[hidden\]/, "Filtered pattern families must not remain visible.");
assert.match(demoStyles, /\.pattern-card\[hidden\]/, "Filtered pattern cards must not remain visible.");
assert.match(demoStyles, /\.preview-frame\s*\{[^}]*background:\s*#ffffff/s, "Catalog iframe previews must stay light when the demo shell toggles theme.");
assert.match(demoStyles, /\.preview-frame iframe\s*\{[^}]*background:\s*#ffffff/s, "Catalog iframes must use an isolated light canvas.");
assert.match(demoStyles, /\.device-frame\s*\{[^}]*background:\s*#ffffff/s, "Live preview device frames must not inherit the demo shell theme.");
["demo/index.html", "demo/category.html", "demo/block.html", "demo/patterns.html"].forEach((path) => {
  assert.match(read(path), /script\.js\?v=20260526-blog-source1/, `${path} must request the current demo behavior bundle.`);
});

[
  "components/about/about-developer-profile/index.html",
  "components/about/about-company-profile/index.html",
  "components/about/about-story-expertise/index.html",
].forEach((path) => {
  assert.match(read(path), /\.\.\/\.\.\/\.\.\/snippets\/patterns\.css/, `${path} must load shared OpenSite-aligned patterns.`);
  assert.match(read(path), /data-pattern=/, `${path} must declare its OpenSite-aligned pattern.`);
});

const aboutPatternMap = {
  "about-mission-features": ["p6", "1"],
  "about-stats-showcase": ["gridFadeTop", "0.1"],
  "about-company-profile": ["grid1", "1"],
  "about-vision-gallery": ["crossPattern", "0.15"],
  "about-developer-story": ["p6", "1"],
  "about-story-gallery": ["squareAltGrid", "1"],
  "about-streamline-team": ["circles", "1"],
  "about-developer-profile": ["diagonalCrossFadeCenter", "0.33"],
  "about-story-hero": ["gridBasic", "0.9"],
  "about-stats-sidebar": ["diagonalCrossFadeTop", "0.15"],
  "about-interactive-tabs": ["diagonalCrossBasic", "0.9"],
  "about-mission-dual-image": ["architect", "0.33"],
  "about-story-expertise": ["gridFadeTop", "0.15"],
  "about-network-spotlight": ["spotlightLeft", "1"],
  "about-location-info-hero": ["gridFadeTop", "0.1"],
  "about-split-hero": ["gridDotsBasic", "0.15"],
  "about-mission-principles": ["noise", "1"],
  "about-expandable-values": ["gridFadeTop", "0.05"],
  "community-initiatives": ["noise", "1"],
  "about-culture-tabs": ["dashedGridFadeTopRight", "0.15"],
};

Object.entries(aboutPatternMap).forEach(([id, [pattern, opacity]]) => {
  const html = read(`components/about/${id}/index.html`);
  assert.match(html, /\.\.\/\.\.\/\.\.\/snippets\/patterns\.css/, `${id} must load the pattern library.`);
  assert.match(html, new RegExp(`data-pattern="${pattern}"`), `${id} must use OpenSite's ${pattern} pattern.`);
  assert.match(html, new RegExp(`--os-pattern-opacity:\\s*${opacity}`), `${id} must use OpenSite's opacity ${opacity}.`);
});

const buttons = read("snippets/buttons.css");
assert.match(buttons, /--button-accent:\s*#555152/);
assert.match(buttons, /\.button:hover/);
assert.match(buttons, /\.button:active/);
assert.match(buttons, /\.button:focus-visible/);

[
  "components/about/about-interactive-tabs/style.css",
  "components/about/about-expandable-values/style.css",
  "components/about/community-initiatives/style.css",
  "components/about/about-culture-tabs/style.css",
].forEach((path) => {
  const css = read(path);
  assert.match(css, /:hover/, `${path} requires hover interaction.`);
  assert.match(css, /:active/, `${path} requires pressed interaction.`);
  assert.match(css, /:focus-visible/, `${path} requires keyboard focus interaction.`);
});

const context = { window: {} };
vm.createContext(context);
vm.runInContext(read("demo/catalog-data.js"), context);
const about = context.window.catalogData.categories.about;
assert.equal(about.length, 23);
about.forEach(({ id }) => assert.equal(has(`components/about/${id}/index.html`), true, `Missing About page: ${id}.`));

const locationHtml = read("components/about/about-location-info-hero/index.html");
const locationCss = read("components/about/about-location-info-hero/style.css");
assert.match(locationHtml, /class="contact-icon"[\s\S]*<svg/, "Location contacts must use real SVG icons.");
assert.match(locationHtml, /viewBox="0 0 24 24"[\s\S]*M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0/, "Location block requires a map-pin icon.");
assert.match(locationHtml, /M22 16\.92v3a2 2 0 0 1-2\.18 2/, "Location block requires a phone icon.");
assert.doesNotMatch(locationCss, /\.contact p::before/, "Location contact icons must not be CSS circle placeholders.");
assert.match(locationCss, /width:\s*min\(100% - 64px,\s*1280px\)/, "Location content needs OpenSite-width geometry.");
assert.match(locationCss, /text-wrap:\s*balance/, "Location headline must balance lines like the source block.");

const tabsHtml = read("components/about/about-interactive-tabs/index.html");
const tabsCss = read("components/about/about-interactive-tabs/style.css");
assert.match(tabsHtml, /data-pattern="diagonalCrossBasic"/);
assert.match(tabsHtml, /--os-pattern-opacity:\s*0\.9/);
assert.match(tabsCss, /\.delivery \.delivery__pattern\s*\{[^}]*--os-pattern-muted-local:\s*rgba\(214,\s*222,\s*233,\s*\.5\)/s, "Light tabs preview requires a cascade-safe subtle pattern ink.");
assert.match(tabsCss, /\.panel h2\s*\{[^}]*font-size:\s*1rem/s, "Tab content heading must remain compact like OpenSite.");

[
  "components/about/about-mission-features/index.html",
  "components/about/about-streamline-team/index.html",
  "components/about/about-stats-sidebar/index.html",
].forEach((path) => {
  const html = read(path);
  assert.match(html, /<svg/, `${path} must use SVG icons.`);
  assert.doesNotMatch(html, /aria-hidden="true">\s*(?:\+|o|\.\.\.|-&gt;|&#9633;|&#9675;|&#9734;|&#9671;)\s*<\/span>/, `${path} must not ship icon placeholders.`);
});

const networkHtml = read("components/about/about-network-spotlight/index.html");
const networkCss = read("components/about/about-network-spotlight/style.css");
assert.match(networkHtml, /<li><svg aria-hidden="true"/, "Network benefits require source-like check icons.");
assert.doesNotMatch(networkCss, /li::before\s*\{[^}]*content:\s*"\+"/s, "Network benefits must not use plus-sign icon placeholders.");
[
  "components/about/about-mission-principles/index.html",
  "components/about/about-split-hero/index.html",
].forEach((path) => {
  const html = read(path);
  assert.match(html, /<svg/, `${path} must render source arrow icons.`);
  assert.doesNotMatch(html, /-&gt;/, `${path} must not use text arrow stand-ins.`);
});

const cultureHtml = read("components/about/about-culture-tabs/index.html");
const cultureCss = read("components/about/about-culture-tabs/style.css");
assert.match(cultureHtml, /class="panel-top"/, "Culture Tabs must keep source text/testimonial row.");
assert.match(cultureHtml, /class="photos"[\s\S]*<img[\s\S]*<img[\s\S]*<img/, "Culture Tabs requires a separate three-image gallery.");
assert.match(cultureHtml, /class="cta-images"/, "Culture Tabs CTA requires its source-like supporting image strip.");
assert.match(cultureCss, /\.panel-top\s*\{[^}]*grid-template-columns:\s*repeat\(2/s, "Culture Tabs top content must be a two-column source-like grid.");
assert.match(cultureCss, /\.intro\s*\{[^}]*max-width:\s*448px/s, "Culture Tabs must keep the compact source header width.");
assert.match(cultureCss, /\.intro h1\s*\{[^}]*font-size:\s*clamp\(1\.875rem,\s*3vw,\s*2\.25rem\)/s, "Culture Tabs title must follow the source scale.");
assert.match(cultureCss, /\.tabs\s*\{[^}]*display:grid[^}]*grid-template-columns:repeat\(4/s, "Culture Tabs desktop navigation must be a four-column grid.");
assert.match(cultureCss, /@media\(max-width:820px\)\{[\s\S]*?\.tabs\{[^}]*grid-template-columns:repeat\(2/s, "Culture Tabs mobile navigation must become a two-column grid.");
assert.doesNotMatch(cultureCss, /\.tabs\{[^}]*overflow-x:auto/s, "Culture Tabs must not expose a horizontal tab scrollbar.");
assert.match(cultureCss, /\.panel\[hidden\]\s*\{\s*display:none\s*\}/, "Culture Tabs hidden panels must remain hidden after author display rules.");

const storyHeroCss = read("components/about/about-story-hero/style.css");
assert.match(storyHeroCss, /\.hero \.pattern\s*\{[^}]*--os-pattern-muted-local:\s*rgba\(214,\s*222,\s*233,\s*\.3\)/s, "Story Hero requires subtle palette-aware grid ink.");
assert.match(storyHeroCss, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/, "Story Hero must keep equal source-like desktop columns.");
assert.match(storyHeroCss, /width:\s*min\(100% - 64px,\s*1280px\)/, "Story Hero must keep source-like content width.");
assert.match(storyHeroCss, /font-size:\s*clamp\(2\.25rem,\s*3\.2vw,\s*3rem\)/, "Story Hero heading must preserve the two-line desktop wrap.");

const developerStoryHtml = read("components/about/about-developer-story/index.html");
const developerStoryCss = read("components/about/about-developer-story/style.css");
assert.match(developerStoryHtml, /Read My Blog\s*<svg/, "Developer Story CTA must use an SVG arrow.");
assert.doesNotMatch(developerStoryHtml, /<span>OpenSite<\/span>|-&gt;/, "Developer Story must not retain source branding or text arrows.");
assert.match(developerStoryHtml, /<span>Toolkit<\/span>/, "Developer Story must show the toolkit brand.");
assert.doesNotMatch(developerStoryCss, /\.logos span:first-child/, "Toolkit logo text must share the same visual size as peer marks.");

const article = context.window.catalogData.categories.article;
assert.equal(article.length, 7, "Article catalog must preserve the seven source entries.");
article.forEach(({ id }) => assert.equal(has(`components/article/${id}/index.html`), true, `Missing Article page: ${id}.`));
assert.match(demoScript, /\["about",\s*"article",\s*"blog"\]\.flatMap/, "Article entries must remain enabled alongside Blog in the live preview catalog.");
assert.match(demoScript, /categorySlug:\s*entry\.categorySlug/, "Detail views must retain their source category breadcrumb.");

const articlePatternMap = {
  "article-hero-prose": ["gridFadeTopRight", "0.15"],
  "article-sidebar-sticky": ["dashedGridBasic", "1"],
  "article-toc-sidebar": ["dashedGridFadeTop", "0.15"],
  "article-breadcrumb-social": ["p6", "1"],
  "article-compact-toc": ["diagonalCrossBasic", "0.7"],
  "article-chapters-author": ["squareAltGrid", "0.7"],
  "article-split-animated": ["gridFadeTop", "0.15"],
};
const articleMediaMap = {
  "article-hero-prose": "n001o4pfpszmyw03ubctig7kvf0e",
  "article-sidebar-sticky": "l080sx0lcx51x44dqrb8006nqf08",
  "article-toc-sidebar": "gg5qnvb4nsl2k3g4dw4ls8bsllwh",
  "article-breadcrumb-social": "0o6d7z4mm9nzeufhv9kefrhihbip",
  "article-compact-toc": "jhjfvkmdzktacyijd9fh6acc7o2c",
  "article-chapters-author": "1xdx70c7gp9l883soyh5d3exesvt",
  "article-split-animated": "2t36c7l0ywchaz4nys8yj2l5amae",
};

Object.entries(articlePatternMap).forEach(([id, [pattern, opacity]]) => {
  const html = read(`components/article/${id}/index.html`);
  assert.match(html, /\.\.\/\.\.\/\.\.\/snippets\/patterns\.css/, `${id} must load the OpenSite pattern library.`);
  assert.match(html, /style\.css\?v=20260526-article-source6/, `${id} must bust nested preview stylesheet cache when its source render changes.`);
  assert.match(html, /patterns\.css\?v=20260526-article-source6/, `${id} must bust shared pattern stylesheet cache when sticky containment changes.`);
  assert.match(html, new RegExp(`data-pattern="${pattern}"`), `${id} must use OpenSite's ${pattern} pattern.`);
  assert.match(html, new RegExp(`--os-pattern-opacity:\\s*${opacity}`), `${id} must use OpenSite's opacity ${opacity}.`);
});
Object.entries(articleMediaMap).forEach(([id, mediaId]) => {
  assert.match(read(`components/article/${id}/index.html`), new RegExp(mediaId), `${id} must use its source render media.`);
});
[
  "article-hero-prose",
  "article-sidebar-sticky",
  "article-toc-sidebar",
  "article-breadcrumb-social",
  "article-compact-toc",
  "article-chapters-author",
].forEach((id) => {
  const html = read(`components/article/${id}/index.html`);
  ["Introduction", "Getting Started", "Core Concepts", "Best Practices", "Conclusion"].forEach((heading) => {
    assert.match(html, new RegExp(`>${heading}<`), `${id} must preserve the source article heading ${heading}.`);
  });
  [
    "Before diving into complex architectural patterns, ensure you have a solid understanding of your application's requirements.",
    "A well-designed system starts with clear requirements and constraints.",
    "Define your scalability goals with specific metrics",
    "Scalability encompasses both horizontal and vertical scaling strategies.",
    "Use asynchronous processing for non-critical operations",
    "Building scalable applications is both an art and a science.",
    "The key is to remain pragmatic: scale when needed, not when anticipated."
  ].forEach((excerpt) => {
    assert.match(html, new RegExp(excerpt.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${id} must retain the complete live OpenSite article copy.`);
  });
});
assert.match(read("components/article/article-toc-sidebar/index.html"), /Learn the principles, patterns, and practices that enable applications to grow gracefully from prototype to production scale\./);
assert.match(read("components/article/article-split-animated/index.html"), /Discover how artificial intelligence is transforming the software development lifecycle, from code generation to automated testing and deployment\./);

const articleTocHtml = read("components/article/article-toc-sidebar/index.html");
const articleTocCss = read("components/article/article-toc-sidebar/style.css");
const articleTocJs = read("components/article/article-toc-sidebar/script.js");
assert.match(articleTocHtml, /class="article article-toc pattern-surface"/, "Article TOC Sidebar must have the source-like split layout.");
assert.match(articleTocHtml, /class="toc-card"/, "Article TOC Sidebar must render its navigation card.");
assert.match(articleTocHtml, /class="sidebar-cta"/, "Article TOC Sidebar must preserve the sidebar CTA.");
assert.match(articleTocHtml, /Want to Learn More\?/, "Article TOC Sidebar must preserve the live source CTA title.");
assert.match(articleTocHtml, /Join our upcoming workshop on scalable system design and architecture patterns\./, "Article TOC Sidebar must preserve the live source CTA description.");
assert.match(articleTocHtml, /Register for Workshop/, "Article TOC Sidebar must preserve the live source CTA action.");
assert.match(articleTocCss, /\.sidebar\s*\{[^}]*display:\s*none/s, "Article TOC Sidebar must hide its desktop-only sidebar below lg like the source.");
assert.match(articleTocCss, /@media\s*\(min-width:\s*1024px\)[\s\S]*?\.sidebar\s*\{[^}]*display:\s*grid[^}]*position:\s*sticky/s, "Article TOC Sidebar must reveal sticky navigation at the source lg breakpoint.");
assert.match(articleTocCss, /\.content h1\s*\{[^}]*font-size:\s*clamp\(2rem,\s*3vw,\s*2\.25rem\)/s, "Article TOC Sidebar must use the source-sized article heading.");
assert.match(articleTocJs, /IntersectionObserver/, "Article TOC Sidebar must track the active section.");
["article-hero-prose", "article-sidebar-sticky", "article-toc-sidebar", "article-breadcrumb-social", "article-compact-toc", "article-chapters-author"].forEach((id) => {
  const html = read(`components/article/${id}/index.html`);
  assert.match(html, /class="social-share/, `${id} must render OpenSite-like social share controls.`);
  ["Share on X", "Share on Facebook", "Share on LinkedIn", "Share with System"].forEach((label) => {
    assert.match(html, new RegExp(`aria-label="${label}"[\\s\\S]*?<svg`), `${id} must use an SVG ${label} control.`);
  });
});
const heroProseCss = read("components/article/article-hero-prose/style.css");
assert.match(heroProseCss, /\.hero-prose \.prose blockquote\s*\{[^}]*background:\s*transparent[^}]*font-style:\s*italic/s, "Article Hero Prose quote must match the source's unboxed italic treatment.");
const articleBaseCss = read("components/article/article-base.css");
assert.match(articleBaseCss, /\.article\s*\{[^}]*overflow:\s*visible/s, "Article surfaces must not create an overflow ancestor that breaks sticky children.");
const sidebarStickyCss = read("components/article/article-sidebar-sticky/style.css");
assert.match(sidebarStickyCss, /@media\s*\(min-width:\s*1024px\)[\s\S]*?\.sidebar\s*\{[^}]*position:\s*sticky/s, "Article Sidebar Sticky must keep attribution visible during desktop reading.");
const articleCompactCss = read("components/article/article-compact-toc/style.css");
assert.match(articleCompactCss, /\.compact-toc \.os-pattern\s*\{[^}]*rgba\(85,\s*81,\s*82,\s*\.1\)/s, "Article Compact TOC needs the source's restrained diagonal pattern contrast.");
assert.match(articleCompactCss, /\.compact-toc \.container\s*\{[^}]*max-width:\s*1216px/s, "Article Compact TOC breadcrumb and content must share the source-width container.");
assert.match(articleCompactCss, /@media\s*\(min-width:\s*1024px\)[\s\S]*?\.layout\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s*256px[^}]*gap:\s*48px/s, "Article Compact TOC must align its reading column with breadcrumbs like OpenSite.");
const chaptersCss = read("components/article/article-chapters-author/style.css");
assert.match(chaptersCss, /header\s*\{[^}]*max-width:\s*none/s, "Article Chapters Author desktop title must fit on one line like the source.");
assert.match(chaptersCss, /header h1\s*\{[^}]*font-size:\s*clamp\(2\.25rem,\s*5vw,\s*3\.75rem\)/s, "Article Chapters Author title must use the source desktop scale.");
assert.match(chaptersCss, /@media\s*\(max-width:\s*860px\)\s*\{[^}]*header\s*\{[^}]*text-align:\s*center/s, "Article Chapters Author must remain centered on tablet and mobile.");
[
  "components/article/article-sidebar-sticky/style.css",
  "components/article/article-breadcrumb-social/style.css",
  "components/article/article-compact-toc/style.css",
  "components/article/article-chapters-author/style.css",
  "components/article/article-split-animated/style.css",
].forEach((path) => {
  assert.match(read(path), /@media\s*\(min-width:\s*1024px\)/, `${path} must switch to its desktop source layout at the OpenSite lg breakpoint.`);
});

const blog = context.window.catalogData.categories.blog;
const blogIds = [
  "blog-grid-author-cards",
  "blog-cards-tagline-cta",
  "blog-cards-read-time",
  "blog-category-overlay",
  "blog-featured-popular",
  "blog-related-articles",
  "blog-tech-insights",
  "blog-horizontal-cards",
  "blog-filtered-results",
  "blog-masonry-featured",
  "blog-horizontal-timeline",
  "blog-grid-nine-posts",
  "blog-carousel-apple",
];
assert.equal(blog.length, 13, "Blog catalog must preserve the thirteen source entries.");
assert.match(demoScript, /\["about",\s*"article",\s*"blog"\]\.flatMap/, "Blog entries must be enabled in the live preview catalog.");
blogIds.forEach((id) => {
  assert.equal(has(`components/blog/${id}/index.html`), true, `Missing Blog page: ${id}.`);
  const html = read(`components/blog/${id}/index.html`);
  if (id !== "blog-related-articles") {
    assert.match(html, /workplace-in-cafe\.webp/, `${id} must use the source-backed blog media.`);
  }
  assert.match(html, /blog-base\.css\?v=20260526-blog-source1/, `${id} must load the shared source-aligned Blog system.`);
});
const blogCopyMap = {
  "blog-grid-author-cards": ["Stories from Our Team", "Scaling Engineering Teams: Lessons from 10 Years", "Marcus Johnson"],
  "blog-cards-tagline-cta": ["Knowledge Hub", "Empowering Your Digital Journey", "Subscribe to Newsletter"],
  "blog-cards-read-time": ["Latest Articles", "Insights from Our Experts", "12 min read"],
  "blog-category-overlay": ["Explore Topics", "Curated Content for Every Interest", "AI &amp; ML"],
  "blog-featured-popular": ["Top Reads This Month", "The Complete Guide to Microservices Architecture", "Popular Articles"],
  "blog-related-articles": ["Related Articles", "Authentication Best Practices for Modern Apps", "See All"],
  "blog-tech-insights": ["Tech Insights", "The Rise of Edge Computing in Modern Applications", "View All"],
  "blog-horizontal-cards": ["Featured Content", "Deep Dives and Tutorials", "Building a Design System from Scratch"],
  "blog-filtered-results": ["Tech Insights &amp; Tutorials", "All Articles", "Implementing CI/CD Pipelines at Scale"],
  "blog-masonry-featured": ["Curated Reads", "The Art and Science of API Design", "Victoria Chang"],
  "blog-horizontal-timeline": ["Product Evolution", "Platform Launch: V1.0", "JANUARY 2024"],
  "blog-grid-nine-posts": ["Latest Insights", "Kubernetes Best Practices for Production Workloads", "Kevin Zhang"],
  "blog-carousel-apple": ["Trending Now", "Featured Stories", "The Evolution of Cloud-Native Development"],
};
Object.entries(blogCopyMap).forEach(([id, phrases]) => {
  const html = read(`components/blog/${id}/index.html`);
  phrases.forEach((phrase) => assert.match(html, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${id} must preserve source copy: ${phrase}.`));
});
assert.match(read("components/blog/blog-filtered-results/index.html"), /data-blog-filter/, "Filtered Results must expose its checkbox filter behavior.");
assert.match(read("components/blog/blog-filtered-results/script.js"), /selectedCategories|data-blog-card/, "Filtered Results must implement filtering rather than static styling.");
assert.match(read("components/blog/blog-carousel-apple/index.html"), /data-carousel-track/, "Carousel Apple must expose its horizontal track.");
assert.match(read("components/blog/blog-carousel-apple/script.js"), /scrollBy|data-carousel-next/, "Carousel Apple must implement source-like navigation.");
assert.match(read("components/blog/blog-grid-author-cards/index.html"), /View All Posts/, "Author Cards must preserve the source view-all action.");
assert.match(read("components/blog/blog-cards-read-time/index.html"), /aria-hidden="true"[\s\S]*?<svg|class="file-icon"/, "Read Time must preserve the source file-text badge icon.");
assert.equal((read("components/blog/blog-category-overlay/index.html").match(/Read Article/g) || []).length, 3, "Category Overlay must render the source read action on every card.");
assert.doesNotMatch(read("components/blog/blog-related-articles/index.html"), /<img/i, "Related Articles is intentionally image-free in the source.");
assert.doesNotMatch(read("components/blog/blog-tech-insights/index.html"), /class="blog dark insights"/, "Tech Insights must not invent a dark theme absent from the source example.");
assert.match(read("components/blog/blog-masonry-featured/index.html"), /State Management in React/, "Masonry Featured must preserve all four source posts.");
assert.doesNotMatch(read("components/blog/blog-masonry-featured/style.css"), /\.tile::after/, "Masonry Featured must not replace the source card layout with dark image overlays.");
assert.doesNotMatch(read("components/blog/blog-filtered-results/index.html"), /Load More Articles/, "Filtered Results must not show load-more when the source example has fewer posts than its page size.");
assert.match(read("components/blog/blog-horizontal-timeline/style.css"), /\.timeline \.intro\s*\{[^}]*text-align:\s*left/s, "Horizontal Timeline heading must keep the source left-aligned hero composition.");
assert.match(read("components/blog/blog-grid-nine-posts/index.html"), /class="meta"[\s\S]*?<img/g, "Grid Nine Posts must retain the source author avatars.");
assert.match(read("components/blog/blog-carousel-apple/style.css"), /height:\s*640px/, "Carousel Apple desktop cards must preserve the source height.");

console.log("patterns/about polish contract passed");
