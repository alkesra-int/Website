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
    const isRtl = document.documentElement.dir === 'rtl';
    const resultTemplate = isRtl
      ? '\u0639\u0631\u0636 {count} \u0645\u0646 {total} \u0641\u0626\u0627\u062a'
      : 'Showing {count} of {total} categories';
    let activeModal = null;
    let lastFocus = null;
    let summaryPulseTimer = 0;

    function getCardSegments(card) {
      return (card.dataset.segments || '').split(',');
    }

    function cardMatchesFilter(card, filter) {
      return filter === 'all' || getCardSegments(card).includes(filter);
    }

    function getMatchCount(filter) {
      return cards.filter((card) => cardMatchesFilter(card, filter)).length;
    }

    function formatResultSummary(count) {
      return resultTemplate.replace('{count}', String(count)).replace('{total}', String(cards.length));
    }

    function formatCountLabel(count) {
      if (isRtl) return `\u0639\u062f\u062f \u0627\u0644\u0641\u0626\u0627\u062a ${count}`;
      return `${count} ${count === 1 ? 'category' : 'categories'}`;
    }

    function setupFilterFeedback() {
      tabs.forEach((tab) => {
        const count = getMatchCount(tab.dataset.filter || 'all');
        let badge = tab.querySelector('.filter-count');
        let accessibleLabel = tab.querySelector('.filter-count-label');

        tab.dataset.filterCount = String(count);

        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'filter-count';
          badge.setAttribute('aria-hidden', 'true');
          tab.append(badge);
        }

        if (!accessibleLabel) {
          accessibleLabel = document.createElement('span');
          accessibleLabel.className = 'sr-only filter-count-label';
          tab.append(accessibleLabel);
        }

        badge.textContent = String(count);
        accessibleLabel.textContent = ` ${formatCountLabel(count)}`;
      });

      const tabsWrapper = explorer.querySelector('.explorer-tabs');
      if (!tabsWrapper) return null;

      let filterBar = explorer.querySelector('.explorer-filter-bar');
      if (!filterBar) {
        filterBar = document.createElement('div');
        filterBar.className = 'explorer-filter-bar';
        tabsWrapper.parentNode.insertBefore(filterBar, tabsWrapper);
        filterBar.appendChild(tabsWrapper);
      }

      let summary = filterBar.querySelector('[data-filter-results]');
      if (!summary) {
        summary = document.createElement('p');
        summary.className = 'explorer-results';
        summary.dataset.filterResults = '';
        summary.setAttribute('aria-live', 'polite');
        filterBar.appendChild(summary);
      }

      summary.textContent = formatResultSummary(cards.length);
      return summary;
    }

    const filterSummary = setupFilterFeedback();

    function updateFilterSummary(count, animate) {
      if (!filterSummary) return;

      filterSummary.textContent = formatResultSummary(count);

      if (!animate) return;

      window.clearTimeout(summaryPulseTimer);
      filterSummary.classList.remove('is-updated');
      window.requestAnimationFrame(() => {
        filterSummary.classList.add('is-updated');
        summaryPulseTimer = window.setTimeout(() => {
          filterSummary.classList.remove('is-updated');
        }, 650);
      });
    }

    function applyFilter(filter) {
      tabs.forEach((tab) => {
        const active = tab.dataset.filter === filter;
        tab.classList.toggle('is-active', active);
        tab.setAttribute('aria-selected', String(active));
      });

      let visibleCount = 0;

      cards.forEach((card) => {
        const visible = cardMatchesFilter(card, filter);
        card.hidden = !visible;
        card.classList.toggle('is-filtered-in', visible);
        if (visible) visibleCount += 1;
      });

      updateFilterSummary(visibleCount, true);
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

    document.addEventListener('al-kesra:inquiry-change', (event) => {
      if (event.detail && event.detail.added) closeModal();
    });
  }

  initHomeHero();
  initProductExplorer();
})();
