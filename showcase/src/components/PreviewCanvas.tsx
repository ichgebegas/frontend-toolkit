import { lazy, Suspense, useEffect } from "react";
import { findBlock } from "../data/catalog";

export function PreviewCanvas({ blockId }: { blockId: string }) {
  const block = findBlock(blockId);
  const isCapture = new URLSearchParams(window.location.search).has("capture");

  if (!block) {
    return <div className="not-found">Preview not found.</div>;
  }

  useEffect(() => {
    if (!isCapture) {
      return;
    }

    document.documentElement.classList.add("capture-thumbnail");

    return () => {
      document.documentElement.classList.remove("capture-thumbnail");
    };
  }, [isCapture]);

  const Component = lazy(block.load);

  return (
    <div className={`preview-document${isCapture ? " preview-document--capture" : ""}`}>
      <Suspense fallback={<div className="preview-loading">Loading preview...</div>}>
        <Component />
      </Suspense>
    </div>
  );
}
