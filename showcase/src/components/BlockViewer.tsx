import { Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import { findBlock } from "../data/catalog";
import { appHref } from "../data/routes";

type Viewport = "desktop" | "tablet" | "mobile";

const viewports: Record<Viewport, { label: string; icon: typeof Monitor }> = {
  desktop: { label: "Desktop", icon: Monitor },
  tablet: { label: "Tablet", icon: Tablet },
  mobile: { label: "Mobile", icon: Smartphone },
};

export function BlockViewer({ blockId }: { blockId: string }) {
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const block = findBlock(blockId);

  if (!block) {
    return <main className="not-found">Block not found.</main>;
  }

  return (
    <main className="block-page">
      <div className="site-container block-shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href={appHref()}>Home</a>
          <span aria-hidden="true">&rsaquo;</span>
          <a href={appHref(`categories/${block.categorySlug}`)}>{block.category}</a>
          <span aria-hidden="true">&rsaquo;</span>
          <strong>{block.title}</strong>
        </nav>
        <section className="live-preview" aria-labelledby="live-preview-title">
          <div className="live-preview-header">
            <h2 id="live-preview-title">Live Preview</h2>
            <div className="viewport-switcher" role="group" aria-label="Preview size">
              {(Object.entries(viewports) as [Viewport, (typeof viewports)[Viewport]][]).map(
                ([id, item]) => {
                  const Icon = item.icon;
                  return (
                    <button
                      type="button"
                      key={id}
                      className={`viewport-button${viewport === id ? " is-active" : ""}`}
                      onClick={() => setViewport(id)}
                      aria-pressed={viewport === id}
                    >
                      <Icon />
                      {item.label}
                    </button>
                  );
                },
              )}
            </div>
          </div>
          <div className="preview-surface">
            <div className="device-frame" data-mode={viewport}>
              <iframe
                title={`Live preview of ${block.title}`}
                src={appHref(`preview/${block.id}`)}
              />
            </div>
          </div>
          <p className="preview-caption">
            Showing live {viewport} render of <strong>{block.title}</strong> - rendered in an
            isolated iframe environment.
          </p>
        </section>
        <section className="block-summary" aria-labelledby="block-summary-title">
          <h2 id="block-summary-title">Block Summary</h2>
          <p>{block.description}</p>
        </section>
      </div>
    </main>
  );
}
