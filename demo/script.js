const componentGroups = [
  ["Navbar", "header", "Navigation bars, menus, and top sections for service pages."],
  ["Hero", "hero", "Primary screens with offer, headline, and main CTA."],
  ["Services", "services-cards", "Service cards and highlighted commercial offers."],
  ["Benefits", "benefits", "Benefits, facts, lists, and before-after comparisons."],
  ["Process", "process-steps", "Process steps, short roadmaps, and delivery flows."],
  ["Pricing", "pricing", "Pricing packages, service offers, and plan layouts."],
  ["Faq", "faq", "FAQ sections for commercial landing pages."],
  ["Contact", "lead-form", "Lead forms for estimates, requests, and consultations."],
  ["Footer", "footer", "Footer navigation, contacts, and final page links."],
];

const patternLibrary = [
  { name: "squareAltGrid" },
  { name: "grid1" },
  { name: "noise" },
  { name: "dots" },
  { name: "dotPattern" },
  { name: "dotPattern2" },
  { name: "circles" },
  { name: "waves" },
  { name: "crossPattern" },
  { name: "architect" },
  { name: "tinyCheckers" },
  { name: "p6" },
  { name: "circuitBoardBasic" },
  { name: "circuitBoardFadeTop" },
  { name: "circuitBoardFadeBottom" },
  { name: "circuitBoardFadeCenter" },
  { name: "circuitBoardFadeTopLeft" },
  { name: "circuitBoardFadeTopRight" },
  { name: "circuitBoardFadeBottomLeft" },
  { name: "circuitBoardFadeBottomRight" },
  { name: "dashedGridBasic" },
  { name: "dashedGridFadeTop" },
  { name: "dashedGridFadeBottom" },
  { name: "dashedGridFadeCenter" },
  { name: "dashedGridFadeTopLeft" },
  { name: "dashedGridFadeTopRight" },
  { name: "dashedGridFadeBottomLeft" },
  { name: "dashedGridFadeBottomRight" },
  { name: "diagonalCrossBasic" },
  { name: "diagonalCrossFadeTop" },
  { name: "diagonalCrossFadeBottom" },
  { name: "diagonalCrossFadeCenter" },
  { name: "diagonalCrossFadeTopLeft" },
  { name: "diagonalCrossFadeTopRight" },
  { name: "diagonalCrossFadeBottomLeft" },
  { name: "diagonalCrossFadeBottomRight" },
  { name: "gridBasic" },
  { name: "gridFadeTop" },
  { name: "gridFadeBottom" },
  { name: "gridFadeCenter" },
  { name: "gridFadeTopLeft" },
  { name: "gridFadeTopRight" },
  { name: "gridFadeBottomLeft" },
  { name: "gridFadeBottomRight" },
  { name: "gridDotsBasic" },
  { name: "gridDotsFadeCenter" },
  { name: "gradientGlowTop" },
  { name: "gradientGlowBottom" },
  { name: "spotlightLeft" },
  { name: "spotlightRight" },
  { name: "radialGradientTop" },
  { name: "radialGradientBottom" },
];

const patternBackgroundOptions = [
  "default",
  "white",
  "gray",
  "dark",
  "gradient",
  "primary",
  "secondary",
  "transparent",
  "muted",
];

const previewRevision = "20260526-blog-source1";

function withPreviewRevision(path) {
  const separator = path.includes("?") ? "&" : "?";
  return `${path}${separator}v=${previewRevision}`;
}

const components = componentGroups.flatMap(([category, slug, description]) => {
  return [1, 2, 3].map((variant) => {
    const id = `${slug}-0${variant}`;

    return {
      id,
      title: id,
      category,
      categorySlug: slug,
      path: `../components/${slug}/${id}/index.html`,
      description: `${description} Variant ${variant}.`,
    };
  });
});

const catalogCategories = window.catalogData?.categories || {};

const implementedBlocks = Object.fromEntries(
  ["about", "article", "blog"].flatMap((categorySlug) =>
    (catalogCategories[categorySlug] || []).map((entry) => [
      entry.id,
      {
        ...entry,
        categorySlug: entry.categorySlug,
        path: `../components/${categorySlug}/${entry.id}/index.html`,
        detailPath: `block.html?block=${encodeURIComponent(entry.id)}`,
      },
    ]),
  ),
);

const categoryTiles = [
  ["about", "About", 23, ""],
  ["article", "Article", 7, ""],
  ["blog", "Blog", 13, ""],
  ["carousel", "Carousel", 13, "slider"],
  ["contact", "Contact", 42, "lead-form"],
  ["faq", "Faq", 17, "faq"],
  ["features", "Features", 27, "benefits"],
  ["footer", "Footer", 19, "footer"],
  ["gallery", "Gallery", 16, ""],
  ["hero", "Hero", 79, "hero"],
  ["link-page", "Link Page", 5, ""],
  ["navbar", "Navbar", 21, "header"],
  ["process", "Process", 9, "process-steps"],
  ["stats", "Stats", 12, ""],
].map(([id, title, count, mapsTo]) => ({
  id,
  title,
  count,
  mapsTo,
}));

const themeStorageKey = "frontend-toolkit-theme";
let themeAudioContext = null;
let themeAudioBuffer = null;
let themeSoundTimestamp = 0;

function blockWord(count) {
  return count === 1 ? "block" : "blocks";
}

function applyTheme(theme) {
  const activeTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = activeTheme;

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    const isDark = activeTheme === "dark";
    button.setAttribute("aria-pressed", String(isDark));
    button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  });
}

function playThemeTick() {
  const now = performance.now();
  if (now - themeSoundTimestamp < 80) return;
  themeSoundTimestamp = now;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    themeAudioContext ||= new AudioContextClass();
    if (themeAudioContext.state === "suspended") {
      themeAudioContext.resume();
    }

    if (!themeAudioBuffer || themeAudioBuffer.sampleRate !== themeAudioContext.sampleRate) {
      const sampleRate = themeAudioContext.sampleRate;
      const length = Math.floor(sampleRate * 0.006);
      themeAudioBuffer = themeAudioContext.createBuffer(1, length, sampleRate);
      const channel = themeAudioBuffer.getChannelData(0);

      for (let index = 0; index < length; index += 1) {
        const time = index / length;
        const sine = Math.sin(2 * Math.PI * 3400 * time);
        const noise = Math.random() * 2 - 1;
        channel[index] = (sine * 0.6 + noise * 0.4) * ((1 - time) ** 3);
      }
    }

    const source = themeAudioContext.createBufferSource();
    const gain = themeAudioContext.createGain();
    source.buffer = themeAudioBuffer;
    gain.gain.value = 0.08;
    source.connect(gain);
    gain.connect(themeAudioContext.destination);
    source.start();
  } catch {
    // Audio is optional and may be blocked by browser policy.
  }
}

function initThemeToggle() {
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  if (!themeButtons.length) return;

  const storedTheme = localStorage.getItem(themeStorageKey);
  applyTheme(storedTheme || "light");

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      localStorage.setItem(themeStorageKey, nextTheme);
      applyTheme(nextTheme);
      if (button.hasAttribute("data-theme-sound")) {
        playThemeTick();
      }
    });
  });
}

function getCategoryById(categoryId) {
  return categoryTiles.find((category) => category.id === categoryId) || categoryTiles[0];
}

function getCategoryEntries(category) {
  if (catalogCategories[category.id]) {
    return catalogCategories[category.id].map((entry, index) => ({
      ...entry,
      ...(implementedBlocks[entry.id] || {}),
      preview: `${category.id}-preview-${(index % 6) + 1}`,
    }));
  }

  if (!category.mapsTo) return [];

  return components.filter((entry) => entry.categorySlug === category.mapsTo || entry.id === category.mapsTo);
}

function hideIframeScrollbars(iframe) {
  const applyScrollbarStyle = () => {
    try {
      const documentRoot = iframe.contentDocument;
      if (!documentRoot || documentRoot.querySelector("[data-hidden-preview-scrollbars]")) return;

      const style = documentRoot.createElement("style");
      style.dataset.hiddenPreviewScrollbars = "";
      style.textContent = "html,body{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,body::-webkit-scrollbar{display:none;width:0;height:0}";
      documentRoot.head.append(style);
    } catch {
      // Preview documents are local; leave external frames untouched if added later.
    }
  };

  iframe.addEventListener("load", applyScrollbarStyle);
  window.setTimeout(applyScrollbarStyle, 500);
}

function initCategoriesPage() {
  const categoryGrid = document.querySelector("#category-grid");
  const categoryTemplate = document.querySelector("#category-template");
  const categoryTotal = document.querySelector("#category-total");
  const searchInput = document.querySelector("#catalog-search");

  if (!categoryGrid || !categoryTemplate) return;

  function createCategoryTile(category) {
    const fragment = categoryTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".category-card");

    card.href = `category.html?category=${encodeURIComponent(category.id)}`;
    card.dataset.search = `${category.title} ${category.id}`.toLowerCase();
    card.querySelector(".category-name").textContent = category.title;
    const count = card.querySelector(".category-count");
    count.setAttribute("aria-label", `${category.count} ${blockWord(category.count)}`);
    count.innerHTML = `<span class="category-count-icon" aria-hidden="true"></span><span class="category-count-number">${category.count}</span><span class="category-count-label">${blockWord(category.count)}</span>`;

    return card;
  }

  categoryTotal.textContent = String(categoryTiles.length);
  categoryGrid.replaceChildren(...categoryTiles.map(createCategoryTile));

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.trim().toLowerCase();
    document.querySelectorAll(".category-card").forEach((card) => {
      card.hidden = Boolean(query) && !card.dataset.search.includes(query);
    });
  });
}

function initCategoryPage() {
  const catalogGrid = document.querySelector("#catalog-grid");
  const cardTemplate = document.querySelector("#catalog-card-template");
  const searchInput = document.querySelector("#catalog-search");
  const resultCount = document.querySelector("#result-count");
  const catalogTitle = document.querySelector("#catalog-title");
  const breadcrumbCurrent = document.querySelector("#breadcrumb-current");
  const previewObserver = typeof ResizeObserver === "function"
    ? new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.style.setProperty("--preview-scale", String(entry.contentRect.width / 1600));
        });
      })
    : null;

  if (!catalogGrid || !cardTemplate) return;

  const params = new URLSearchParams(window.location.search);
  const category = getCategoryById(params.get("category") || "hero");
  const categoryEntries = getCategoryEntries(category);

  function createCard(entry) {
    const fragment = cardTemplate.content.cloneNode(true);
    const card = fragment.querySelector(".catalog-card");
    const previewFrame = fragment.querySelector(".preview-frame");
    const iframe = fragment.querySelector("iframe");

    card.href = entry.detailPath || entry.path || "#";
    card.dataset.search = [
      entry.title,
      entry.category,
      entry.description,
    ].join(" ").toLowerCase();

    if (entry.path) {
      hideIframeScrollbars(iframe);
      iframe.src = withPreviewRevision(entry.path);
      if (entry.detailPath) {
        card.removeAttribute("target");
      }
    } else {
      card.classList.add("is-preview-only");
      card.removeAttribute("target");
      card.addEventListener("click", (event) => event.preventDefault());
      iframe.remove();
      previewFrame.classList.add("preview-placeholder", entry.preview);
    }

    fragment.querySelector(".card-category").textContent = entry.category;
    fragment.querySelector(".card-title").textContent = entry.title;
    fragment.querySelector(".card-description").textContent = entry.description;

    return card;
  }

  function renderCatalog() {
    const query = searchInput.value.trim().toLowerCase();
    const visibleEntries = categoryEntries.filter((entry) => {
      if (!query) return true;
      return [entry.title, entry.category, entry.description].join(" ").toLowerCase().includes(query);
    });

    resultCount.textContent = `${visibleEntries.length} ${blockWord(visibleEntries.length)}`;
    catalogGrid.classList.toggle("is-empty", !visibleEntries.length);

    if (!visibleEntries.length) {
      catalogGrid.textContent = categoryEntries.length
        ? "No blocks found. Clear the search and try again."
        : "No local blocks in this category yet.";
      return;
    }

    catalogGrid.replaceChildren(...visibleEntries.map(createCard));

    catalogGrid.querySelectorAll(".preview-frame:has(iframe)").forEach((previewFrame) => {
      previewFrame.style.setProperty("--preview-scale", String(previewFrame.getBoundingClientRect().width / 1600));
      if (previewObserver) previewObserver.observe(previewFrame);
    });
  }

  document.title = `${category.title} Components - Frontend Toolkit Demo`;
  catalogTitle.textContent = category.title;
  breadcrumbCurrent.textContent = category.title;
  searchInput.addEventListener("input", renderCatalog);
  renderCatalog();
}

function initBlockPreview() {
  const frame = document.querySelector("[data-device-frame]");
  const buttons = Array.from(document.querySelectorAll("[data-preview-mode]"));
  const caption = document.querySelector("[data-preview-caption]");
  const params = new URLSearchParams(window.location.search);
  const block = implementedBlocks[params.get("block") || ""];
  const iframe = document.querySelector("#block-preview-frame");
  const breadcrumb = document.querySelector("#block-breadcrumb-current");
  const categoryLink = document.querySelector("#block-category-link");
  const summary = document.querySelector("#block-summary-text");

  if (!frame || !buttons.length) return;

  if (!block || !iframe || !breadcrumb || !categoryLink || !summary || !caption) {
    document.title = "Block Not Found - Frontend Toolkit Demo";
    if (caption) {
      caption.textContent = "This local About block has not been implemented.";
    }
    return;
  }

  document.title = `${block.title} - Frontend Toolkit Demo`;
  hideIframeScrollbars(iframe);
  iframe.src = withPreviewRevision(block.path);
  iframe.title = `Live preview of ${block.title}`;
  breadcrumb.textContent = block.title;
  categoryLink.textContent = block.category;
  categoryLink.href = `category.html?category=${encodeURIComponent(block.categorySlug)}`;
  summary.textContent = block.description;
  caption.textContent = `Showing live desktop render of ${block.title} - rendered in an isolated iframe environment.`;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.previewMode;
      frame.dataset.mode = mode;
      caption.textContent = `Showing live ${mode} render of ${block.title} - rendered in an isolated iframe environment.`;

      buttons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
    });
  });
}

function initPatternLibrary() {
  const patternSearch = document.querySelector("#pattern-search");
  const patternGrid = document.querySelector("[data-pattern-grid]");
  const template = document.querySelector("#pattern-card-template");
  const resultCount = document.querySelector("[data-pattern-result-count]");
  const backgroundControl = document.querySelector("[data-pattern-background]");
  const opacityControl = document.querySelector("[data-pattern-opacity]");
  const resetButton = document.querySelector("[data-pattern-reset]");

  if (!patternSearch || !patternGrid || !template || !backgroundControl || !opacityControl || !resetButton) return;

  function optionMarkup(selectedValue) {
    return patternBackgroundOptions.map((option) => (
      `<option value="${option}"${option === selectedValue ? " selected" : ""}>${option}</option>`
    )).join("");
  }

  function applyCardSettings(card, background, opacity) {
    card.querySelector(".pattern-preview").dataset.background = background;
    card.querySelector(".pattern-preview").style.setProperty("--os-pattern-opacity", String(opacity));
    card.querySelector("[data-local-background]").value = background;
    card.querySelector("[data-local-opacity]").value = Number(opacity).toFixed(2);
  }

  function createPatternCard(pattern) {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".pattern-card");
    const patternLayer = fragment.querySelector(".os-pattern");
    const backgroundInput = fragment.querySelector("[data-local-background]");
    const opacityInput = fragment.querySelector("[data-local-opacity]");

    card.dataset.patternVariant = pattern.name.toLowerCase();
    card.dataset.patternName = pattern.name;
    fragment.querySelector(".pattern-name").textContent = pattern.name;
    fragment.querySelector(".pattern-preview-name").textContent = pattern.name;
    patternLayer.dataset.pattern = pattern.name;
    backgroundInput.innerHTML = optionMarkup(backgroundControl.value);
    applyCardSettings(card, backgroundControl.value, opacityControl.value);

    backgroundInput.addEventListener("change", () => {
      card.querySelector(".pattern-preview").dataset.background = backgroundInput.value;
    });
    opacityInput.addEventListener("input", () => {
      card.querySelector(".pattern-preview").style.setProperty("--os-pattern-opacity", opacityInput.value);
    });
    fragment.querySelector("[data-pattern-copy]").addEventListener("click", async () => {
      const code = `data-pattern="${pattern.name}" data-background="${backgroundInput.value}" style="--os-pattern-opacity: ${opacityInput.value}"`;
      try {
        await navigator.clipboard.writeText(code);
      } catch {
        // Clipboard may be blocked in a local preview.
      }
    });

    return card;
  }

  patternGrid.replaceChildren(...patternLibrary.map(createPatternCard));

  function getPatternCards() {
    return Array.from(patternGrid.querySelectorAll(".pattern-card"));
  }

  function filterPatterns() {
    const query = patternSearch.value.trim().toLowerCase();
    const patternCards = getPatternCards();

    patternCards.forEach((card) => {
      card.hidden = Boolean(query) && !card.dataset.patternVariant.includes(query);
    });

    if (resultCount) {
      resultCount.textContent = String(patternCards.filter((card) => !card.hidden).length);
    }
  }

  function applyGlobalSettings() {
    getPatternCards().forEach((card) => {
      applyCardSettings(card, backgroundControl.value, opacityControl.value);
    });
  }

  backgroundControl.addEventListener("change", applyGlobalSettings);
  opacityControl.addEventListener("input", applyGlobalSettings);
  resetButton.addEventListener("click", () => {
    backgroundControl.value = "dark";
    opacityControl.value = "0.08";
    applyGlobalSettings();
  });
  patternSearch.addEventListener("input", filterPatterns);
  filterPatterns();
}

initThemeToggle();
initCategoriesPage();
initCategoryPage();
initPatternLibrary();
initBlockPreview();
