(function () {
  const triggers = Array.from(document.querySelectorAll("[data-gallery-image]"));
  const modal = document.querySelector(".lightbox");
  const image = document.querySelector(".lightbox__image");
  const caption = document.querySelector(".lightbox__caption");
  const close = document.querySelector(".lightbox__close");
  const previous = document.querySelector(".lightbox__previous");
  const next = document.querySelector(".lightbox__next");
  let activeIndex = 0;

  function render(index) {
    activeIndex = (index + triggers.length) % triggers.length;
    const preview = triggers[activeIndex].querySelector("img");
    image.src = preview.src;
    image.alt = preview.alt;
    caption.textContent = preview.alt;
  }

  function open(index) {
    render(index);
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    close.focus();
  }

  function dismiss() {
    modal.hidden = true;
    document.body.style.overflow = "";
    triggers[activeIndex].focus();
  }

  triggers.forEach((trigger, index) => trigger.addEventListener("click", () => open(index)));
  close.addEventListener("click", dismiss);
  previous.addEventListener("click", () => render(activeIndex - 1));
  next.addEventListener("click", () => render(activeIndex + 1));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) dismiss();
  });
  document.addEventListener("keydown", (event) => {
    if (modal.hidden) return;
    if (event.key === "Escape") dismiss();
    if (event.key === "ArrowLeft") render(activeIndex - 1);
    if (event.key === "ArrowRight") render(activeIndex + 1);
  });
}());
