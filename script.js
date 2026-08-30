(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = document.querySelectorAll("[data-nav]");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu toggle
  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const open = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!open));
      navToggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      mobileNav.classList.toggle("open", !open);
    });

    mobileNav.addEventListener("click", (e) => {
      if (e.target.matches("[data-nav]")) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
        mobileNav.classList.remove("open");
      }
    });
  }

  // Active section highlight in primary nav
  const sections = Array.from(document.querySelectorAll("main [id]"));
  if (sections.length && "IntersectionObserver" in window) {
    const linkFor = (id) =>
      document.querySelector(`.primary-nav a[href="#${id}"]`);

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkFor(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => sectionObserver.observe(s));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length && "IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 5, 4) * 60}ms`;
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Header shadow/compaction on scroll
  let lastScrolled = false;
  const onScroll = () => {
    const scrolled = window.scrollY > 8;
    if (scrolled !== lastScrolled) {
      header?.classList.toggle("is-scrolled", scrolled);
      lastScrolled = scrolled;
    }
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
