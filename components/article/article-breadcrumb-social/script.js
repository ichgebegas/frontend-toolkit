(() => {
  const links = Array.from(document.querySelectorAll(".toc-link"));
  const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const top = document.querySelector(".back-top");
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
  }), { rootMargin: "-20% 0px -65% 0px" });
  sections.forEach((section) => observer.observe(section));
  window.addEventListener("scroll", () => top.classList.toggle("is-visible", window.scrollY > 400));
  top.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();
