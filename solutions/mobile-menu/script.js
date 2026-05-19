const toggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

toggle.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});
