/* ── Mobile nav toggle ─────────────────────────────────── */
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ── Active nav link on scroll ─────────────────────────── */
const sections = document.querySelectorAll('[data-section]');
const navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const id = entry.target.getAttribute('data-section');
        const active = document.querySelector(`.nav__links a[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Subtle fade-in on scroll ──────────────────────────── */
const fadeEls = document.querySelectorAll('.project-card, .skill-group, .cert-card, .timeline-item, .asset-placeholder');

if ('IntersectionObserver' in window) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    fadeObserver.observe(el);
  });
}
