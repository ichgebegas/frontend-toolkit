import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { categories, categoryHref } from "../data/catalog";
import { routeHref } from "../data/routes";

const maxResults = 8;

export function LibrarySearch() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) return { categories: [], blocks: [] };

    const matchingCategories = categories
      .filter((category) => category.title.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => {
        const aStarts = a.title.toLowerCase().startsWith(normalizedQuery) ? 0 : 1;
        const bStarts = b.title.toLowerCase().startsWith(normalizedQuery) ? 0 : 1;
        return aStarts - bStarts || a.title.localeCompare(b.title);
      });

    const matchingBlocks = categories
      .flatMap((category) => category.blocks)
      .filter((block) =>
        `${block.title} ${block.category} ${block.description}`.toLowerCase().includes(normalizedQuery),
      )
      .sort((a, b) => {
        const score = (block: (typeof a)) => {
          const title = block.title.toLowerCase();
          const category = block.category.toLowerCase();
          if (category === normalizedQuery) return 0;
          if (title.startsWith(normalizedQuery)) return 1;
          if (title.includes(normalizedQuery)) return 2;
          if (category.includes(normalizedQuery)) return 3;
          return 4;
        };

        return score(a) - score(b) || a.title.localeCompare(b.title);
      })
      .slice(0, maxResults);

    return { categories: matchingCategories, blocks: matchingBlocks };
  }, [normalizedQuery]);

  const hasResults = results.categories.length > 0 || results.blocks.length > 0;

  return (
    <div className="library-search">
      <label className="command-search">
        <Search aria-hidden="true" size={18} />
        <input
          type="text"
          value={query}
          placeholder="Search library..."
          onChange={(event) => setQuery(event.target.value)}
        />
        {query ? (
          <button type="button" aria-label="Clear search" onClick={() => setQuery("")}>
            <X aria-hidden="true" size={17} />
          </button>
        ) : null}
      </label>

      {normalizedQuery ? (
        <div className="search-suggestions" role="listbox" aria-label="Search suggestions">
          {hasResults ? (
            <>
              {results.categories.length > 0 ? (
                <section>
                  <p>Categories</p>
                  {results.categories.map((category) => (
                    <a
                      aria-label={`${category.title} category`}
                      href={categoryHref(category.slug)}
                      key={category.slug}
                    >
                      <span>{category.title}</span>
                      <small>{category.blocks.length} blocks</small>
                    </a>
                  ))}
                </section>
              ) : null}
              {results.blocks.length > 0 ? (
                <section>
                  <p>Blocks</p>
                  {results.blocks.map((block) => (
                    <a href={routeHref(`blocks/${block.id}`)} key={block.id}>
                      <span>{block.title}</span>
                      <small>{block.category}</small>
                    </a>
                  ))}
                </section>
              ) : null}
            </>
          ) : (
            <p className="search-empty">Nothing found</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
