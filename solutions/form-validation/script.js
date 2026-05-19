const form = document.querySelector("[data-form]");
const status = document.querySelector("[data-status]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    status.textContent = "Заполните обязательные поля корректно.";
    form.reportValidity();
    return;
  }
  status.textContent = "Форма готова к отправке.";
});
