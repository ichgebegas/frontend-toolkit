(() => {
  const toggle = document.querySelector(".toc-toggle");
  const menu = document.querySelector(".mobile-toc");
  const links = Array.from(document.querySelectorAll(".toc-link"));
  const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.hidden = expanded;
  });
  menu.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    toggle.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  });
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
  }), { rootMargin: "-20% 0px -65% 0px" });
  sections.forEach((section) => observer.observe(section));
})();
