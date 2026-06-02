import { getCategory } from "../data/catalog";
import { appHref, routeHref } from "../data/routes";

export function CategoryPage({ categorySlug }: { categorySlug: string }) {
  const category = getCategory(categorySlug);

  if (!category) {
    return <main className="not-found">Category not found.</main>;
  }

  return (
    <main className="category-page">
      <div className="site-container category-shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href={appHref()}>Home</a>
          <span aria-hidden="true">&rsaquo;</span>
          <a href={`${appHref()}#categories`}>Categories</a>
          <span aria-hidden="true">&rsaquo;</span>
          <strong>{category.title}</strong>
        </nav>
        <header className="category-page-header">
          <h1>{category.title}</h1>
          <p className="catalog-count">{category.blocks.length} blocks</p>
        </header>
        <section className="catalog-grid" aria-label={`${category.title} components`}>
          {category.blocks.map((block) => (
            <a className="catalog-card" href={routeHref(`blocks/${block.id}`)} key={block.id}>
              <span className="preview-frame">
                <span className="preview-frame-inner">
                  <img
                    src={appHref(`thumbnails/${block.id}.png`)}
                    alt=""
                    loading="lazy"
                    aria-hidden="true"
                    onError={(event) => {
                      event.currentTarget.src = block.thumbnail;
                    }}
                  />
                </span>
              </span>
              <span className="card-body">
                <span className="card-category">{block.category}</span>
                <span className="card-title">{block.title}</span>
                <span className="card-description">{block.description}</span>
              </span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}
