(() => {
  const links = Array.from(document.querySelectorAll(".toc-link"));
  const sections = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
  }), { rootMargin: "-20% 0px -65% 0px" });
  sections.forEach((section) => observer.observe(section));
})();
