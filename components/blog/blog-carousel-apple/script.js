const track = document.querySelector("[data-carousel-track]");
const previous = document.querySelector("[data-carousel-prev]");
const next = document.querySelector("[data-carousel-next]");

function move(direction) {
  const card = track?.querySelector(".carousel-card");
  if (!track || !card) return;
  track.scrollBy({ left: direction * (card.getBoundingClientRect().width + 18), behavior: "smooth" });
}

previous?.addEventListener("click", () => move(-1));
next?.addEventListener("click", () => move(1));
