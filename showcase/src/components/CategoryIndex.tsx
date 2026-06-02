import { categoryHref, categoryTiles } from "../data/catalog";
import { HomeHero } from "./HomeHero";

export function CategoryIndex() {
  return (
    <main className="home-page">
      <HomeHero />
      <section className="categories-section" id="categories">
        <div className="site-container categories-inner">
          <div className="section-title">
            <h1>Browse by Category</h1>
            <p>
              Explore our organized collection of components across{" "}
              <span>{categoryTiles.length}</span> categories
            </p>
          </div>
          <div className="category-grid" aria-label="Component categories">
            {categoryTiles.map((category) => (
              <a className="category-card" href={categoryHref(category.slug)} key={category.slug}>
                <span className="category-card-inner">
                  <span className="category-copy">
                    <span className="category-name">{category.title}</span>
                    <span className="category-count">
                      <span className="category-count-icon" aria-hidden="true" />
                      <span className="category-count-number">{category.count}</span>
                      <span className="category-count-label">blocks</span>
                    </span>
                  </span>
                  <span className="category-arrow" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
