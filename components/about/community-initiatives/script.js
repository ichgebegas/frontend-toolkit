const root = document.querySelector("[data-community-tabs]");
const buttons = Array.from(root.querySelectorAll("[data-community-tab]"));
const panels = Array.from(root.querySelectorAll("[data-community-panel]"));
const select = root.querySelector("[data-community-select]");

function showPanel(name) {
  buttons.forEach((button) => {
    const active = button.dataset.communityTab === name;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  panels.forEach((panel) => {
    const active = panel.dataset.communityPanel === name;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
  select.value = name;
}

buttons.forEach((button) => button.addEventListener("click", () => showPanel(button.dataset.communityTab)));
select.addEventListener("change", () => showPanel(select.value));
