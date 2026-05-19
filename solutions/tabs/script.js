const tabs = document.querySelector("[data-tabs]");
const buttons = tabs.querySelectorAll("[data-tab]");
const panels = tabs.querySelectorAll("[data-panel]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;
    buttons.forEach((item) => item.classList.toggle("secondary", item !== button));
    panels.forEach((panel) => panel.classList.toggle("is-hidden", panel.dataset.panel !== target));
  });
});
