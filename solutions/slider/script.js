const slider = document.querySelector("[data-slider]");
const slides = [...slider.querySelectorAll(".slide")];
let index = 0;

function showSlide(nextIndex) {
  slides[index].classList.remove("is-active");
  index = (nextIndex + slides.length) % slides.length;
  slides[index].classList.add("is-active");
}

slider.querySelector("[data-prev]").addEventListener("click", () => showSlide(index - 1));
slider.querySelector("[data-next]").addEventListener("click", () => showSlide(index + 1));
