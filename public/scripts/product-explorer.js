(function () {
  function initHomeHero() {
    const hero = document.querySelector('[data-home-hero]');
    if (!hero) return;

    const chips = Array.from(hero.querySelectorAll('[data-hero-category]'));
    const image = hero.querySelector('[data-hero-preview-image]');
    const title = hero.querySelector('[data-hero-preview-title]');
    const copy = hero.querySelector('[data-hero-preview-copy]');
    const stage = hero.querySelector('.preview-stage');
    let activeIndex = 0;
    let timer = 0;

    function show(index) {
      const chip = chips[index];
      if (!chip || !image || !title || !copy || !stage) return;

      activeIndex = index;
      chips.forEach((item, itemIndex) => {
        item.classList.toggle('is-active', itemIndex === index);
      });

      stage.style.setProperty('--category-accent', chip.dataset.accent || '#f15a1a');
      image.src = chip.dataset.image || image.src;
      image.alt = chip.dataset.title || image.alt;
      title.textContent = chip.dataset.title || '';
      copy.textContent = chip.dataset.copy || '';
    }

    function restart() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || chips.length < 2) return;
      window.clearInterval(timer);
      timer = window.setInterval(() => {
        show((activeIndex + 1) % chips.length);
      }, 4200);
    }

    chips.forEach((chip, index) => {
      chip.addEventListener('click', () => {
        show(index);
        restart();
      });
      chip.addEventListener('mouseenter', () => show(index));
    });

    restart();
  }

  function initProductExplorer() {
    const explorer = document.querySelector('[data-product-explorer]');
    if (!explorer) return;

    const tabs = Array.from(explorer.querySelectorAll('[data-filter]'));
    const cards = Array.from(explorer.querySelectorAll('[data-segments]'));
    const modals = Array.from(explorer.querySelectorAll('[data-category-modal]'));
    let activeModal = null;
    let lastFocus = null;

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

    function findModal(id) {
      return modals.find((modal) => modal.dataset.categoryModal === id);
    }

    function openModal(id, trigger) {
      const modal = findModal(id);
      if (!modal) return;

      lastFocus = trigger || document.activeElement;
      activeModal = modal;
      modal.hidden = false;
      document.body.classList.add('has-modal-open');

      const panel = modal.querySelector('.category-modal__panel');
      window.requestAnimationFrame(() => {
        modal.classList.add('is-open');
        if (panel) panel.focus();
      });
    }

    function closeModal() {
      if (!activeModal) return;

      activeModal.classList.remove('is-open');
      activeModal.hidden = true;
      document.body.classList.remove('has-modal-open');

      if (lastFocus && typeof lastFocus.focus === 'function') {
        lastFocus.focus();
      }

      activeModal = null;
      lastFocus = null;
    }

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => applyFilter(tab.dataset.filter || 'all'));
    });

    explorer.addEventListener('click', (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;

      const opener = target.closest('[data-category-open]');
      if (opener) {
        openModal(opener.dataset.categoryOpen, opener);
        return;
      }

      if (target.closest('[data-category-close]')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
  }

  initHomeHero();
  initProductExplorer();
})();
