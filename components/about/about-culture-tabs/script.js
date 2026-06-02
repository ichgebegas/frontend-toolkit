const root = document.querySelector("[data-culture-tabs]");
const tabs = Array.from(root.querySelectorAll("[data-culture-tab]"));
const panels = Array.from(root.querySelectorAll("[data-culture-panel]"));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const value = tab.dataset.cultureTab;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    panels.forEach((panel) => {
      const active = panel.dataset.culturePanel === value;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  });
});
