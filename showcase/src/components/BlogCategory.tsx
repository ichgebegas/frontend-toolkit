import { blogBlocks } from "../data/blog-blocks";

export function BlogCategory() {
  return (
    <main className="catalog-page">
      <div className="breadcrumbs">
        <a href="/categories/blog">Home</a>
        <span>/</span>
        <a href="/categories/blog">Categories</a>
        <span>/</span>
        <strong>Blog</strong>
      </div>
      <header className="catalog-heading">
        <span className="catalog-count">{blogBlocks.length} components</span>
        <h1>Blog</h1>
      </header>
      <section className="block-grid" aria-label="Blog components">
        {blogBlocks.map((block) => (
          <a key={block.id} className="block-card" href={`/blocks/${block.id}`}>
            <div className="block-card__preview">
              <img src={block.thumbnail} alt="" loading="lazy" />
            </div>
            <div className="block-card__body">
              <span>Blog</span>
              <h2>{block.title}</h2>
              <p>{block.description}</p>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
