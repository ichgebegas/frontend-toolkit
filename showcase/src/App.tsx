import { BlockViewer } from "./components/BlockViewer";
import { CategoryIndex } from "./components/CategoryIndex";
import { CategoryPage } from "./components/CategoryPage";
import { LibraryHeader } from "./components/LibraryHeader";
import { PreviewCanvas } from "./components/PreviewCanvas";
import { useEffect, useState } from "react";
import { parseShowcaseRoute } from "./data/routes";

export function App() {
  const [route, setRoute] = useState(() =>
    parseShowcaseRoute(window.location.pathname, window.location.hash),
  );

  useEffect(() => {
    const syncRoute = () => {
      setRoute(parseShowcaseRoute(window.location.pathname, window.location.hash));
    };

    window.addEventListener("hashchange", syncRoute);
    window.addEventListener("popstate", syncRoute);

    return () => {
      window.removeEventListener("hashchange", syncRoute);
      window.removeEventListener("popstate", syncRoute);
    };
  }, []);

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
