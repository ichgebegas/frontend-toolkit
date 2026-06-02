import { useEffect, useId, useState } from "react";

const themeStorageKey = "frontend-toolkit-theme";

export function ThemeToggle() {
  const maskId = useId();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem(themeStorageKey);
    const initial = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem(themeStorageKey, next);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <svg
        className="theme-morph"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <mask id={maskId}>
          <rect width="24" height="24" fill="white" />
          <circle className="theme-mask-cut" cx="33" cy="0" r="9" fill="black" />
        </mask>
        <circle
          className="theme-body"
          cx="12"
          cy="12"
          r="5"
          fill="currentColor"
          stroke="none"
          mask={`url(#${maskId})`}
        />
        <g className="theme-rays">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          <line x1="5.64" y1="18.36" x2="4.22" y2="19.78" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        </g>
      </svg>
    </button>
  );
}
