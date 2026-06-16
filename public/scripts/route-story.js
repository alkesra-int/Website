(function () {
  const stories = document.querySelectorAll('[data-route-story]');
  if (!stories.length) return;

  stories.forEach((story) => {
    const steps = Array.from(story.querySelectorAll('[data-route-step]'));

    steps.forEach((step) => {
      step.addEventListener('mouseenter', () => {
        steps.forEach((item) => item.classList.toggle('is-active', item === step));
      });
      step.addEventListener('focusin', () => {
        steps.forEach((item) => item.classList.toggle('is-active', item === step));
      });
    });

    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.3 });
    steps.forEach((step) => observer.observe(step));
  });
})();
