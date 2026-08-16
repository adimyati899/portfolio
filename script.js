document.addEventListener("DOMContentLoaded", () => {

  const items = document.querySelectorAll(
    ".reveal, .work-list a, .brand-grid > *, .cap-grid > *, .social-grid > *"
  );

  items.forEach(el => {
    el.classList.add("reveal");
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px"
  });

  items.forEach(el => observer.observe(el));

});
