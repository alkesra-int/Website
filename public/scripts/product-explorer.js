(function () {
  const explorer = document.querySelector('[data-product-explorer]');
  if (!explorer) return;

  const tabs = Array.from(explorer.querySelectorAll('[data-filter]'));
  const cards = Array.from(explorer.querySelectorAll('[data-segments]'));

  function applyFilter(filter) {
    tabs.forEach((tab) => {
      const active = tab.dataset.filter === filter;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });

    cards.forEach((card) => {
      const segments = (card.dataset.segments || '').split(',');
      const visible = filter === 'all' || segments.includes(filter);
      card.hidden = !visible;
      card.classList.toggle('is-filtered-in', visible);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => applyFilter(tab.dataset.filter || 'all'));
  });
})();
