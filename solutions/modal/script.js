const modal = document.querySelector("[data-modal]");
const openButton = document.querySelector("[data-modal-open]");
const closeButtons = document.querySelectorAll("[data-modal-close]");

function openModal() {
  modal.classList.remove("is-hidden");
}

function closeModal() {
  modal.classList.add("is-hidden");
}

openButton.addEventListener("click", openModal);
closeButtons.forEach((button) => button.addEventListener("click", closeModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
