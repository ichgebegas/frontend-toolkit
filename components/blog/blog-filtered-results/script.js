const form = document.querySelector("[data-blog-filter]");
const cards = [...document.querySelectorAll("[data-blog-card]")];
let selectedCategories = ["all"];

form?.addEventListener("change", (event) => {
  const input = event.target.closest("input");
  if (!input) return;
  const inputs = [...form.querySelectorAll("input")];

  if (input.value === "all" && input.checked) {
    inputs.forEach((field) => { field.checked = field.value === "all"; });
  } else {
    form.querySelector('input[value="all"]').checked = false;
    if (!inputs.some((field) => field.checked && field.value !== "all")) {
      form.querySelector('input[value="all"]').checked = true;
    }
  }

  selectedCategories = inputs.filter((field) => field.checked).map((field) => field.value);
  cards.forEach((card) => {
    card.hidden = !selectedCategories.includes("all") && !selectedCategories.includes(card.dataset.blogCard);
  });
});
