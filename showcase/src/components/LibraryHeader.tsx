import { LibrarySearch } from "./LibrarySearch";
import { ThemeToggle } from "./ThemeToggle";
import { appHref } from "../data/routes";

export function LibraryHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href={appHref()} aria-label="Frontend Toolkit">
          Toolkit
        </a>
        <LibrarySearch />
        <nav className="site-nav" aria-label="Main navigation">
          <a href={`${appHref()}#categories`}>Categories</a>
          <a href={appHref("patterns/index.html")}>Patterns</a>
          <ThemeToggle />
          <a
            className="github-link"
            aria-label="GitHub"
            href="https://github.com/ichgebegas/frontend-toolkit"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="github-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.77-.25.77-.55v-2.1c-3.15.69-3.82-1.34-3.82-1.34-.51-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.13.08 1.73 1.17 1.73 1.17 1.01 1.73 2.64 1.23 3.28.94.1-.73.4-1.23.72-1.51-2.51-.29-5.15-1.26-5.15-5.59 0-1.24.44-2.25 1.16-3.04-.12-.28-.5-1.44.11-3 0 0 .95-.3 3.11 1.16a10.82 10.82 0 0 1 5.66 0c2.16-1.46 3.1-1.16 3.1-1.16.62 1.56.24 2.72.12 3 .72.79 1.16 1.8 1.16 3.04 0 4.34-2.64 5.3-5.16 5.58.4.36.77 1.06.77 2.14v3.17c0 .3.2.66.78.55A11.3 11.3 0 0 0 12 .7Z" />
            </svg>
          </a>
          <a
            className="telegram-link"
            aria-label="Telegram"
            href="https://t.me/butterfly"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="telegram-icon"
              src={appHref("assets/telegram-svgrepo-com.svg")}
              alt=""
            />
          </a>
        </nav>
      </div>
    </header>
  );
}
