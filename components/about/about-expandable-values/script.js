const cards = document.querySelectorAll(".value");

cards.forEach((card) => {
  const button = card.querySelector(".value-toggle");
  const details = card.querySelector(".details");
  button.addEventListener("click", () => {
    const shouldOpen = !card.classList.contains("open");
    cards.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".value-toggle").setAttribute("aria-expanded", "false");
      item.querySelector(".details").hidden = true;
    });
    if (shouldOpen) {
      card.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      details.hidden = false;
    }
  });
});
