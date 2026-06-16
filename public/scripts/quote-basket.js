(function () {
  const lang = document.body.dataset.lang === 'ar' ? 'ar' : 'en';
  const storageKey = 'al-kesra-quote-basket';
  const validIds = new Set([
    'rice-grains',
    'flour-baking',
    'pulses',
    'spices',
    'oils',
    'packaged-goods'
  ]);
  const texts = {
    en: {
      remove: 'Remove',
      empty: 'Select product categories to prepare an inquiry.',
      send: 'Prepare WhatsApp inquiry',
      messageIntro: 'Hello Al Kesra, I would like to discuss these foodstuff categories:',
      messageOutro: 'This is an inquiry request only. Please share product details when available.'
    },
    ar: {
      remove: 'إزالة',
      empty: 'اختر فئات المنتجات لإعداد طلب استفسار.',
      send: 'إعداد استفسار واتساب',
      messageIntro: 'مرحباً شركة الكسرة، أود الاستفسار عن فئات المواد الغذائية التالية:',
      messageOutro: 'هذا طلب استفسار فقط. يرجى مشاركة تفاصيل المنتجات عند توفرها.'
    }
  };

  const basket = document.querySelector('[data-quote-basket]');
  if (!basket) return;

  const panel = basket.querySelector('[data-quote-panel]');
  const toggle = basket.querySelector('[data-quote-toggle]');
  const close = basket.querySelector('[data-quote-close]');
  const count = basket.querySelector('[data-quote-count]');
  const list = basket.querySelector('[data-quote-items]');
  const empty = basket.querySelector('[data-quote-empty]');
  const clear = basket.querySelector('[data-quote-clear]');
  const send = basket.querySelector('[data-quote-send]');
  const copy = basket.querySelector('[data-quote-copy]');
  const note = basket.querySelector('[data-quote-note]');
  const feedback = basket.querySelector('[data-quote-feedback]');
  const addButtons = Array.from(document.querySelectorAll('[data-quote-add]'));

  let items = readItems();

  function readItems() {
    try {
      const parsed = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((item) => (
        item
        && validIds.has(item.id)
        && typeof item.titleEn === 'string'
        && typeof item.titleAr === 'string'
      ));
    } catch {
      return [];
    }
  }

  function writeItems() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(items));
    } catch {
      // Keep the in-memory basket working if browser storage is unavailable.
    }
  }

  function openPanel() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closePanel() {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }

  function itemLabel(item) {
    return lang === 'ar' ? item.titleAr : item.titleEn;
  }

  function messageHref() {
    return `https://wa.me/?text=${encodeURIComponent(buildMessage())}`;
  }

  function buildMessage() {
    const lines = items.map((item) => `- ${itemLabel(item)}`);
    const noteValue = note && note.value.trim() ? ['',
      lang === 'ar' ? 'ملاحظة:' : 'Note:',
      note.value.trim()
    ] : [];
    return [texts[lang].messageIntro, ...lines, ...noteValue, '', texts[lang].messageOutro].join('\n');
  }

  function flash(message) {
    if (!feedback) return;
    feedback.hidden = false;
    feedback.textContent = message;
    window.setTimeout(() => {
      feedback.hidden = true;
    }, 2200);
  }

  function render() {
    count.textContent = String(items.length);
    list.innerHTML = '';
    empty.hidden = items.length > 0;

    items.forEach((item) => {
      const li = document.createElement('li');
      const label = document.createElement('span');
      const button = document.createElement('button');

      label.textContent = itemLabel(item);
      button.type = 'button';
      button.textContent = texts[lang].remove;
      button.addEventListener('click', () => {
        items = items.filter((current) => current.id !== item.id);
        writeItems();
        render();
      });

      li.append(label, button);
      list.appendChild(li);
    });

    addButtons.forEach((button) => {
      const selected = items.some((item) => item.id === button.dataset.id);
      button.classList.toggle('is-selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });

    if (items.length === 0) {
      send.classList.add('is-disabled');
      send.setAttribute('aria-disabled', 'true');
      send.href = '#';
    } else {
      send.classList.remove('is-disabled');
      send.setAttribute('aria-disabled', 'false');
      send.href = messageHref();
    }
  }

  toggle.addEventListener('click', () => {
    if (panel.hidden) openPanel();
    else closePanel();
  });

  close.addEventListener('click', closePanel);

  clear.addEventListener('click', () => {
    items = [];
    writeItems();
    render();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePanel();
  });

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-quote-add]')) return;
    if (!basket.contains(event.target) && !panel.hidden) closePanel();
  });

  if (copy) {
    copy.addEventListener('click', async () => {
      if (items.length === 0) return;
      const message = buildMessage();
      try {
        await navigator.clipboard.writeText(message);
        flash(lang === 'ar' ? 'تم نسخ الاستفسار' : 'Inquiry copied');
      } catch {
        flash(lang === 'ar' ? 'تعذر النسخ تلقائياً' : 'Could not copy automatically');
      }
    });
  }

  send.addEventListener('click', (event) => {
    if (items.length === 0) event.preventDefault();
  });

  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const next = {
        id: button.dataset.id,
        titleEn: button.dataset.titleEn,
        titleAr: button.dataset.titleAr
      };
      const exists = items.some((item) => item.id === next.id);
      items = exists ? items.filter((item) => item.id !== next.id) : [...items, next];
      writeItems();
      render();
      openPanel();
      if (!exists) flash(lang === 'ar' ? 'تمت إضافة الفئة' : 'Category added');
    });
  });

  render();
})();
