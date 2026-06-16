(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const heroImages = Array.from(document.querySelectorAll('[data-parallax-bg]'));
  const heroContent = Array.from(document.querySelectorAll('[data-parallax-content]'));
  const revealCards = Array.from(document.querySelectorAll('.reveal-card'));

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealCards.forEach((card) => revealObserver.observe(card));
  } else {
    revealCards.forEach((card) => card.classList.add('is-visible'));
  }

  if (reduceMotion || !heroImages.length) return;

  let ticking = false;
  function update() {
    const scroll = window.scrollY || 0;
    heroImages.forEach((image) => {
      image.style.transform = `translate3d(0, ${scroll * 0.12}px, 0) scale(1.05)`;
    });
    heroContent.forEach((content) => {
      content.style.transform = `translate3d(0, ${scroll * -0.035}px, 0)`;
    });
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
