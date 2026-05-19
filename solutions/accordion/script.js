const root = document.querySelector("[data-accordion]");
const buttons = root.querySelectorAll("[data-accordion-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.classList.toggle("is-hidden");
  });
});
