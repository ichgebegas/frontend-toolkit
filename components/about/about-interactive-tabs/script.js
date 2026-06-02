const buttons = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    panels.forEach((panel) => {
      const selected = panel.dataset.panel === target;
      panel.hidden = !selected;
      panel.classList.toggle("active", selected);
    });
  });
});
