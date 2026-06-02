const filterControls = document.querySelectorAll("[data-team-filter]");
const members = document.querySelectorAll("[data-team]");
const heading = document.querySelector("[data-team-heading]");

filterControls.forEach((control) => {
  control.addEventListener("click", () => {
    const value = control.dataset.teamFilter;
    const label = control.textContent.trim();

    filterControls.forEach((button) => {
      const selected = button.dataset.teamFilter === value;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });

    members.forEach((member) => {
      const categories = member.dataset.team.split(" ");
      member.hidden = value !== "all" && !categories.includes(value);
    });

    heading.textContent = value === "all" ? "Team Member Directory" : `${label} Team`;
  });
});
