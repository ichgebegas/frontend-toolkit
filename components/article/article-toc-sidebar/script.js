(() => {
  const links = Array.from(document.querySelectorAll(".toc-link"));
  const targets = links.map((link) => document.querySelector(link.hash)).filter(Boolean);
  if (!links.length || !targets.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: "-20% 0px -65% 0px" });

  targets.forEach((target) => observer.observe(target));
})();
