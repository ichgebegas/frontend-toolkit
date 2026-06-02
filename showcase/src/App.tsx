import { BlockViewer } from "./components/BlockViewer";
import { CategoryIndex } from "./components/CategoryIndex";
import { CategoryPage } from "./components/CategoryPage";
import { LibraryHeader } from "./components/LibraryHeader";
import { PreviewCanvas } from "./components/PreviewCanvas";
import { parseShowcaseRoute } from "./data/routes";

export function App() {
  const route = parseShowcaseRoute(window.location.pathname, window.location.hash);

  if (route.kind === "preview") {
    return <PreviewCanvas blockId={route.id} />;
  }

  return (
    <div className="toolkit-shell">
      <LibraryHeader />
      {route.kind === "block" && <BlockViewer blockId={route.id} />}
      {route.kind === "category" && <CategoryPage categorySlug={route.slug} />}
      {route.kind === "home" && <CategoryIndex />}
    </div>
  );
}
