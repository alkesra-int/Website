export type Lang = 'en' | 'ar';
export type PageKey = 'home' | 'about' | 'products' | 'quality' | 'contact';

export const languages: Record<Lang, { label: string; dir: 'ltr' | 'rtl'; locale: string }> = {
  en: { label: 'English', dir: 'ltr', locale: 'en' },
  ar: { label: 'العربية', dir: 'rtl', locale: 'ar' }
};

export const company = {
  name: 'Al Kesra International LLC',
  arabicName: 'الكسرة',
  slogan: {
    en: "From India's Harvests to the World",
    ar: 'من محاصيل الهند إلى العالم'
  },
  email: 'contact@alkesra.com',
  phone: '+971 50 121 8605',
  whatsapp: '+971 50 121 8025',
  location: {
    en: 'Compass Building - Al Hulaia, Al Hulaiia Industrial Zone - FZ, Ras Al Khaimah, UAE',
    ar: 'مبنى البوصلة - الهليلة، منطقة الهليلة الصناعية الحرة، رأس الخيمة، الإمارات'
  },
  domain: 'alkesra.com'
};

export const routes: Record<PageKey, { en: string; ar: string }> = {
  home: { en: '/', ar: '/ar/' },
  about: { en: '/about/', ar: '/ar/about/' },
  products: { en: '/products/', ar: '/ar/products/' },
  quality: { en: '/quality/', ar: '/ar/quality/' },
  contact: { en: '/contact/', ar: '/ar/contact/' }
};

export const navItems: Array<{ key: PageKey; label: Record<Lang, string> }> = [
  { key: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { key: 'about', label: { en: 'About', ar: 'عن الشركة' } },
  { key: 'products', label: { en: 'Products', ar: 'المنتجات' } },
  { key: 'quality', label: { en: 'Quality', ar: 'الجودة' } },
  { key: 'contact', label: { en: 'Contact', ar: 'تواصل معنا' } }
];

export const categories = [
  {
    id: 'rice-grains',
    icon: 'grain',
    image: '/images/category-rice.jpg',
    title: { en: 'Rice & Grains', ar: 'الأرز والحبوب' },
    short: { en: 'Rice & grains', ar: 'الأرز والحبوب' },
    heroLine: { en: 'Basmati, parboiled, and staple grains for every table.', ar: 'بسمتي ومسلوق وحبوب أساسية لكل مائدة.' },
    copy: {
      en: 'Indian rice and grain varieties for retail shelves, catering kitchens, and household pantry supply.',
      ar: 'أصناف هندية من الأرز والحبوب لرفوف التجزئة ومطابخ التموين وتزويد مخزون الأسر.'
    },
    modalSummary: {
      en: 'Rice and grains are the backbone of daily cooking across the UAE — from basmati for family tables to bulk grain supply for catering kitchens. Al Kesra sources from established Indian growing regions, with pack options suited to retail, food service, and wholesale orders.',
      ar: 'الأرز والحبوب هي أساس الطهي اليومي في الإمارات — من البسمتي على موائد الأسر إلى إمدادات الحبوب بالجملة لمطابخ التموين. تُوفِّر الكسرة من مناطق إنتاج هندية راسخة، بخيارات تغليف تناسب التجزئة وخدمات الطعام والجملة.'
    },
    bubbles: [
      { icon: 'store', label: { en: 'Retail shelves', ar: 'رفوف التجزئة' } },
      { icon: 'chef', label: { en: 'Kitchen staples', ar: 'أساسيات المطابخ' } },
      { icon: 'package', label: { en: 'Bulk & retail', ar: 'جملة وتجزئة' } }
    ],
    detail: {
      en: 'Indian rice and grain varieties for retail shelf supply, catering kitchens, and household pantry replenishment across the UAE.',
      ar: 'أصناف هندية من الأرز والحبوب لتموين رفوف التجزئة ومطابخ التموين وتزويد مخزون الأسر في الإمارات.'
    },
    bestFor: { en: 'Retail shelves, kitchens, pantry supply', ar: 'رفوف التجزئة، المطابخ، مخزون الأسر' },
    segments: ['retail', 'food-service', 'household', 'wholesale'],
    accent: '#D8B45A'
  },
  {
    id: 'flour-baking',
    icon: 'flour',
    image: '/images/category-flour.jpg',
    title: { en: 'Flour & Baking', ar: 'الدقيق ومستلزمات الخبز' },
    short: { en: 'Flour & baking', ar: 'الدقيق والخبز' },
    heroLine: { en: 'Wheat flour and baking staples for bakeries and kitchens.', ar: 'دقيق القمح وأساسيات الخبز للمخابز والمطابخ.' },
    copy: {
      en: 'Wheat flour and baking essentials sourced from India for bakeries, groceries, cafeterias, and commercial kitchens.',
      ar: 'دقيق القمح وأساسيات الخبز من الهند للمخابز والبقالات والكافتيريات والمطابخ التجارية.'
    },
    modalSummary: {
      en: 'Wheat flour and baking essentials are high-turnover staples for UAE bakeries, hotel kitchens, cafeterias, and grocery channels. Al Kesra supplies Indian-milled flour and baking basics in bulk and retail formats suited to different buyer volumes.',
      ar: 'دقيق القمح وأساسيات الخبز من السلع عالية الدوران لمخابز الإمارات ومطابخ الفنادق والكافتيريات وقنوات البقالة. تُوفِّر الكسرة دقيقاً هندياً وأساسيات خبز بالجملة وبالتجزئة لتلبية احتياجات مختلف أحجام المشترين.'
    },
    bubbles: [
      { icon: 'flour', label: { en: 'Baking needs', ar: 'احتياجات الخبز' } },
      { icon: 'chef', label: { en: 'Food service', ar: 'خدمات الطعام' } },
      { icon: 'clipboard', label: { en: 'Bakeries & cafes', ar: 'مخابز وكافيهات' } }
    ],
    detail: {
      en: 'Wheat flour and baking staples for bakeries, groceries, cafeterias, and commercial kitchens — supplied in bulk and consumer pack sizes.',
      ar: 'دقيق القمح وأساسيات الخبز للمخابز والبقالات والكافتيريات والمطابخ التجارية — بتعبئة جملة ومفردة.'
    },
    bestFor: { en: 'Bakeries, groceries, cafeterias', ar: 'المخابز، البقالات، الكافتيريات' },
    segments: ['retail', 'food-service', 'wholesale'],
    accent: '#D9C2A1'
  },
  {
    id: 'pulses',
    icon: 'pulse',
    image: '/images/category-pulses.jpg',
    title: { en: 'Pulses', ar: 'البقوليات' },
    short: { en: 'Pulses', ar: 'البقوليات' },
    heroLine: { en: 'Lentils, chickpeas, and dried beans in bulk and retail packs.', ar: 'عدس وحمص وفاصوليا جافة بالجملة وبالتجزئة.' },
    copy: {
      en: 'Whole and split pulse varieties from India for traditional cooking, catering kitchens, and daily retail supply.',
      ar: 'أصناف من البقوليات الكاملة والمقشورة من الهند للطهي التقليدي ومطابخ التموين والتوريد اليومي للتجزئة.'
    },
    modalSummary: {
      en: 'Lentils, chickpeas, and dried beans are among the most consistently ordered food staples across UAE retail and food service. Al Kesra supplies whole and split pulse varieties in bulk and consumer pack formats, sourced from India\'s established growing regions.',
      ar: 'العدس والحمص والفاصوليا الجافة من أكثر السلع الغذائية طلباً باستمرار في تجزئة الإمارات وخدمات الطعام. تُوفِّر الكسرة أصناف البقوليات الكاملة والمقشورة بالجملة ومفردة، مُوردَةً من مناطق إنتاج هندية راسخة.'
    },
    bubbles: [
      { icon: 'pulse', label: { en: 'Daily protein', ar: 'بروتين يومي' } },
      { icon: 'home', label: { en: 'Pantry use', ar: 'استخدام منزلي' } },
      { icon: 'store', label: { en: 'Repeat demand', ar: 'طلب متكرر' } }
    ],
    detail: {
      en: 'A staple category with strong demand across Indian cooking, food service menus, household pantry stocking, and retail channels.',
      ar: 'فئة أساسية ذات طلب قوي في الطهي الهندي وقوائم خدمات الطعام ومخزون الأسر وقنوات التجزئة.'
    },
    bestFor: { en: 'Catering, home cooking, regular replenishment', ar: 'التموين، الطهي المنزلي، التوريد المتكرر' },
    segments: ['retail', 'food-service', 'household', 'wholesale'],
    accent: '#B86D3B'
  },
  {
    id: 'spices',
    icon: 'spice',
    image: '/images/category-spices.jpg',
    title: { en: 'Spices', ar: 'التوابل والبهارات' },
    short: { en: 'Spices', ar: 'التوابل' },
    heroLine: { en: 'Authentic Indian spices for retail, catering, and home kitchens.', ar: 'توابل هندية أصيلة للتجزئة والتموين والمطابخ المنزلية.' },
    copy: {
      en: 'Turmeric, cumin, coriander, chilli, and blended spices — sourced from India for UAE grocery, catering, and food service.',
      ar: 'كركم وكمون وكزبرة وفلفل حار ومزيجات بهارات — مُوردَة من الهند لبقالات الإمارات والتموين وخدمات الطعام.'
    },
    modalSummary: {
      en: 'Indian spices define the character of some of the most popular cuisines in the UAE — South Asian, Arabic, and fusion kitchens alike. Al Kesra supplies spice staples including turmeric, cumin, coriander, chilli, and mixed blends suited to retail shelf supply and bulk catering use.',
      ar: 'التوابل الهندية تمنح طابعها المميز لأكثر المطابخ شعبيةً في الإمارات — جنوب آسيوية وعربية ومدمجة على حد سواء. تُوفِّر الكسرة أساسيات التوابل من كركم وكمون وكزبرة وفلفل حار ومزيجات متنوعة لرفوف التجزئة والتموين بالجملة.'
    },
    bubbles: [
      { icon: 'spice', label: { en: 'Indian origin', ar: 'منشأ هندي' } },
      { icon: 'chef', label: { en: 'Menu use', ar: 'استخدام القوائم' } },
      { icon: 'message', label: { en: 'Ready to order', ar: 'جاهز للطلب' } }
    ],
    detail: {
      en: 'Indian spice staples for grocery shelves, catering supply, restaurant kitchens, and household use across the UAE.',
      ar: 'أساسيات التوابل الهندية لرفوف البقالة وتوريد التموين ومطابخ المطاعم والاستخدام المنزلي في الإمارات.'
    },
    bestFor: { en: 'Groceries, kitchens, food service', ar: 'البقالات، المطابخ، خدمات الطعام' },
    segments: ['retail', 'food-service', 'household'],
    accent: '#A93A24'
  },
  {
    id: 'oils',
    icon: 'oil',
    image: '/images/category-oils.jpg',
    title: { en: 'Oils', ar: 'الزيوت' },
    short: { en: 'Oils', ar: 'الزيوت' },
    heroLine: { en: 'Refined and unrefined cooking oils for every kitchen scale.', ar: 'زيوت طهي مكررة وغير مكررة لكل حجم مطبخ.' },
    copy: {
      en: 'Edible cooking oils sourced from India in retail bottle sizes and food-service bulk formats for businesses and households.',
      ar: 'زيوت طعام صالحة للأكل من الهند بأحجام تجزئة وتعبئة جملة لخدمات الطعام للشركات والأسر.'
    },
    modalSummary: {
      en: 'Cooking oils are a high-turnover essential across all buyer types — from retail shelves to restaurant fryers and household kitchens. Al Kesra supplies refined and unrefined edible oils sourced from India in retail bottle sizes and food-service bulk formats.',
      ar: 'زيوت الطهي من الأساسيات عالية الدوران لجميع أنواع المشترين — من رفوف التجزئة إلى قلايات المطاعم والمطابخ المنزلية. تُوفِّر الكسرة زيوت الطعام المكررة وغير المكررة من الهند بأحجام تجزئة وتعبئة جملة لخدمات الطعام.'
    },
    bubbles: [
      { icon: 'oil', label: { en: 'Cooking use', ar: 'استخدام الطبخ' } },
      { icon: 'package', label: { en: 'Bottle & drum', ar: 'عبوات وبراميل' } },
      { icon: 'store', label: { en: 'Shelf demand', ar: 'طلب الرفوف' } }
    ],
    detail: {
      en: 'Refined and unrefined cooking oils for food service kitchens, retail shelves, and household supply — available in multiple pack sizes.',
      ar: 'زيوت طهي مكررة وغير مكررة لمطابخ خدمات الطعام ورفوف التجزئة والاستهلاك المنزلي — بأحجام تعبئة متعددة.'
    },
    bestFor: { en: 'Food service, shops, household kitchens', ar: 'خدمات الطعام، المتاجر، مطابخ الأسر' },
    segments: ['retail', 'food-service', 'household', 'wholesale'],
    accent: '#8B9A3C'
  },
  {
    id: 'packaged-goods',
    icon: 'boxed',
    image: '/images/category-packaged.jpg',
    title: { en: 'Canned & Packaged Goods', ar: 'المعلبات والمواد الغذائية المعبأة' },
    short: { en: 'Packaged goods', ar: 'المواد المعبأة' },
    heroLine: { en: 'Indian pantry staples in retail and food service pack sizes.', ar: 'أساسيات مخزون هندية بأحجام تجزئة وخدمات طعام.' },
    copy: {
      en: 'Canned and packaged Indian food staples for retail shelves, catering supply, and household use.',
      ar: 'معلبات ومواد غذائية هندية معبأة لرفوف التجزئة وتوريد التموين والاستخدام المنزلي.'
    },
    modalSummary: {
      en: 'Canned and packaged goods span a wide range of pantry essentials — tomatoes, coconut products, lentil soups, dried fruits, and ready-to-cook mixes. Al Kesra supplies Indian-sourced packaged staples suited to retail shelf listings and bulk food service supply.',
      ar: 'تشمل المعلبات والمواد المعبأة طيفاً واسعاً من أساسيات المخزون — طماطم وجوز هند وحساء عدس وفواكه مجففة ومزيجات جاهزة للطهي. تُوفِّر الكسرة مواد غذائية هندية معبأة لقوائم رفوف التجزئة وتوريد خدمات الطعام بالجملة.'
    },
    bubbles: [
      { icon: 'boxed', label: { en: 'Canned & dry', ar: 'معلبة وجافة' } },
      { icon: 'layers', label: { en: 'Retail packs', ar: 'عبوات تجزئة' } },
      { icon: 'message', label: { en: 'Inquiry ready', ar: 'جاهز للاستفسار' } }
    ],
    detail: {
      en: 'A growing range of Indian canned and packaged pantry goods for retail assortment, catering supply, and household stocking.',
      ar: 'مجموعة متنامية من المعلبات والمواد الغذائية الهندية المعبأة لتشكيلة التجزئة وتوريد التموين والمخزون المنزلي.'
    },
    bestFor: { en: 'Retail assortment, pantry stock, pricing inquiries', ar: 'تشكيلة التجزئة، مخزون الأسر، استفسارات السعر' },
    segments: ['retail', 'household', 'wholesale'],
    accent: '#2D6F7A'
  }
] as const;

export const segmentFilters = [
  { id: 'all', label: { en: 'All categories', ar: 'كل الفئات' } },
  { id: 'retail', label: { en: 'Retail', ar: 'التجزئة' } },
  { id: 'food-service', label: { en: 'Food service', ar: 'خدمات الطعام' } },
  { id: 'household', label: { en: 'Household', ar: 'الأسر' } },
  { id: 'wholesale', label: { en: 'Wholesale', ar: 'الجملة' } }
] as const;

export const buyerSegments = [
  {
    icon: 'store',
    title: { en: 'Retail and groceries', ar: 'التجزئة والبقالات' },
    copy: {
      en: 'Rice, flour, pulses, spices, oils, and packaged goods — consistently sourced for retail shelf supply and steady replenishment.',
      ar: 'أرز ودقيق وبقوليات وتوابل وزيوت ومواد معبأة — متوفرة باستمرار لتزويد رفوف التجزئة والتوريد المنتظم.'
    }
  },
  {
    icon: 'chef',
    title: { en: 'Restaurants and cafeterias', ar: 'المطاعم والكافتيريات' },
    copy: {
      en: 'Kitchen-ready Indian ingredient staples for restaurants, hotel kitchens, cafeterias, and catering teams across the UAE.',
      ar: 'أساسيات المكونات الهندية الجاهزة للمطابخ — للمطاعم ومطابخ الفنادق والكافتيريات وفرق التموين في الإمارات.'
    }
  },
  {
    icon: 'package',
    title: { en: 'Wholesale and trade', ar: 'الجملة والتجارة' },
    copy: {
      en: 'Bulk supply and competitive sourcing for wholesale distributors and trade buyers across the UAE and GCC.',
      ar: 'توريد بالجملة وتسعير تنافسي لموزعي الجملة والمشترين التجاريين في الإمارات ودول الخليج.'
    }
  },
  {
    icon: 'home',
    title: { en: 'Homes and communities', ar: 'الأسر والمجتمعات' },
    copy: {
      en: 'Familiar Indian pantry staples — lentils, spices, rice, and oils — from a UAE-based supplier you can reach directly.',
      ar: 'أساسيات المخزون الهندية المألوفة — عدس وتوابل وأرز وزيوت — من مورد مقيم في الإمارات يمكن التواصل معه مباشرةً.'
    }
  }
] as const;

export const routeSteps = [
  {
    icon: 'sprout',
    title: { en: 'Origin', ar: 'المصدر' },
    label: { en: 'Indian harvests', ar: 'محاصيل الهند' },
    copy: {
      en: 'Al Kesra sources from India\'s established food-producing regions — rice paddies, pulse farms, spice groves, and grain belts known to kitchens across the UAE.',
      ar: 'تستورد الكسرة من مناطق الإنتاج الغذائي الهندية الراسخة — حقول الأرز ومزارع البقوليات ومناطق التوابل والحزام الحبوبي المعروف لمطابخ الإمارات.'
    }
  },
  {
    icon: 'search',
    title: { en: 'Selection', ar: 'الاختيار' },
    label: { en: 'Six categories', ar: 'ست فئات' },
    copy: {
      en: 'Six focused staple categories — each chosen because they move reliably in UAE retail, food service, and wholesale markets.',
      ar: 'ست فئات أساسية مركزة — اختيرت لأنها تتداول بثبات في أسواق التجزئة وخدمات الطعام والجملة في الإمارات.'
    }
  },
  {
    icon: 'ship',
    title: { en: 'Trade', ar: 'التجارة' },
    label: { en: 'UAE coordination', ar: 'تنسيق من الإمارات' },
    copy: {
      en: 'Operating from Ras Al Khaimah, Al Kesra serves UAE buyers directly — with capacity to extend into GCC markets as the business grows.',
      ar: 'تعمل الكسرة من رأس الخيمة وتخدم المشترين في الإمارات مباشرةً — مع قدرة على التوسع في أسواق دول الخليج مع نمو الأعمال.'
    }
  },
  {
    icon: 'message',
    title: { en: 'Inquiry', ar: 'الاستفسار' },
    label: { en: 'Direct contact', ar: 'تواصل مباشر' },
    copy: {
      en: 'Reach Al Kesra by email or WhatsApp with your category needs — we respond with availability, pricing, and pack options.',
      ar: 'تواصل مع الكسرة عبر البريد الإلكتروني أو واتساب بمتطلباتك من الفئات — نردّ بالتوافر والأسعار وخيارات العبوات.'
    }
  }
] as const;

export const qualityNotes = [
  {
    icon: 'layers',
    title: { en: 'Source clarity', ar: 'وضوح المصدر' },
    copy: {
      en: 'Every category is sourced from India\'s established food-producing regions — with clear product origin confirmed at the inquiry stage.',
      ar: 'كل فئة مُوردَة من مناطق الإنتاج الغذائي الهندية الراسخة — مع تأكيد واضح لمصدر المنتج في مرحلة الاستفسار.'
    }
  },
  {
    icon: 'clipboard',
    title: { en: 'Pack & spec detail', ar: 'تفاصيل التعبئة والمواصفات' },
    copy: {
      en: 'Pack sizes, weight options, labeling, and shelf-life details are confirmed during the sourcing discussion — not left to assumption.',
      ar: 'تُحدَّد أحجام التعبئة وخيارات الوزن والملصقات وتفاصيل الصلاحية أثناء نقاش التوريد — ولا تُترك للافتراض.'
    }
  },
  {
    icon: 'message',
    title: { en: 'Direct response', ar: 'رد مباشر' },
    copy: {
      en: 'Inquiries are handled personally — by email or WhatsApp, with a clear follow-up on availability, pricing, and lead times.',
      ar: 'تُعالَج الاستفسارات شخصياً — عبر البريد الإلكتروني أو واتساب، مع متابعة واضحة للتوافر والأسعار ومهل التسليم.'
    }
  },
  {
    icon: 'shield',
    title: { en: 'Honest supply', ar: 'توريد بأمانة' },
    copy: {
      en: 'Al Kesra confirms what it can supply before committing — no overpromising on product range, certification, or delivery timelines.',
      ar: 'تؤكد الكسرة ما يمكنها توريده قبل الالتزام — دون مبالغة في وصف المنتجات أو الشهادات أو مواعيد التسليم.'
    }
  }
] as const;

export const inquiryPrompts = [
  { en: 'Product category', ar: 'فئة المنتج' },
  { en: 'Buyer type', ar: 'نوع المشتري' },
  { en: 'Approximate quantity', ar: 'الكمية التقريبية' },
  { en: 'Preferred pack size', ar: 'حجم العبوة المفضل' },
  { en: 'Destination or delivery area', ar: 'الوجهة أو منطقة التسليم' },
  { en: 'Timing or document needs', ar: 'الموعد أو المستندات المطلوبة' }
] as const;

export const common = {
  skip: { en: 'Skip to content', ar: 'تجاوز إلى المحتوى' },
  quote: {
    title: { en: 'Inquiry basket', ar: 'سلة الاستفسار' },
    empty: { en: 'Select product categories to prepare a pricing inquiry.', ar: 'اختر فئات المنتجات لإعداد استفسار سعر.' },
    add: { en: 'Add to inquiry', ar: 'أضف إلى الاستفسار' },
    remove: { en: 'Remove', ar: 'إزالة' },
    clear: { en: 'Clear', ar: 'مسح' },
    send: { en: 'Send via WhatsApp', ar: 'إرسال عبر واتساب' }
  },
  ctas: {
    products: { en: 'Explore products', ar: 'تصفح المنتجات' },
    contact: { en: 'Contact us', ar: 'تواصل معنا' },
    quote: { en: 'Request pricing', ar: 'اطلب السعر' },
    email: { en: 'Email Al Kesra', ar: 'راسل الكسرة' }
  }
};

export const pages = {
  home: {
    meta: {
      en: {
        title: 'Al Kesra International LLC — Indian Foodstuff Trading in UAE',
        description: 'Al Kesra International LLC imports Indian food staples — rice, flour, pulses, spices, oils, and packaged goods — for UAE retail, wholesale, hospitality, and household buyers.'
      },
      ar: {
        title: 'شركة الكسرة الدولية — تجارة المواد الغذائية الهندية في الإمارات',
        description: 'تستورد شركة الكسرة الدولية السلع الغذائية الهندية الأساسية — أرز ودقيق وبقوليات وتوابل وزيوت ومواد معبأة — للتجزئة والجملة والضيافة والأسر في الإمارات.'
      }
    },
    hero: {
      image: '/images/hero-ingredients.jpg',
      eyebrow: { en: 'Indian Foodstuff Trading', ar: 'تجارة المواد الغذائية الهندية' },
      title: { en: company.name, ar: 'شركة الكسرة الدولية ذ.م.م' },
      lead: {
        en: 'UAE-based trading company importing Indian food staples — rice, flour, pulses, spices, oils, and packaged goods — for retail, hospitality, and wholesale buyers.',
        ar: 'شركة تجارية مقيمة في الإمارات تستورد السلع الغذائية الهندية الأساسية — أرز ودقيق وبقوليات وتوابل وزيوت ومواد معبأة — للتجزئة والضيافة والمشترين بالجملة.'
      }
    },
    stats: [
      { number: '6', label: { en: 'Food categories', ar: 'فئات غذائية' } },
      { number: '100%', label: { en: 'Indian origin', ar: 'منشأ هندي' } },
      { number: 'GCC', label: { en: 'Supply reach', ar: 'نطاق التوريد' } }
    ],
    route: {
      title: { en: 'A steady bridge for everyday food essentials', ar: 'جسر ثابت للمواد الغذائية اليومية' },
      copy: {
        en: 'Al Kesra brings the warmth of Indian harvests into a practical UAE trading model built for retailers, kitchens, and growing food businesses.',
        ar: 'تنقل الكسرة دفء المحاصيل الهندية إلى نموذج تجارة عملي في الإمارات يخدم التجار والمطابخ وأعمال الأغذية النامية.'
      }
    }
  },
  about: {
    meta: {
      en: {
        title: 'About Al Kesra International LLC',
        description: 'Al Kesra International LLC is a Ras Al Khaimah foodstuff trading company importing Indian staples for UAE retail, food service, and wholesale buyers.'
      },
      ar: {
        title: 'عن شركة الكسرة الدولية',
        description: 'شركة الكسرة الدولية ذ.م.م شركة تجارة مواد غذائية في رأس الخيمة تستورد السلع الهندية الأساسية للتجزئة وخدمات الطعام والمشترين بالجملة في الإمارات.'
      }
    },
    hero: {
      image: '/images/about-trade.jpg',
      eyebrow: { en: 'About Al Kesra', ar: 'عن الكسرة' },
      title: { en: 'Rooted in trade, guided by trust', ar: 'جذورنا في التجارة وقيمتنا في الثقة' },
      lead: {
        en: 'Al Kesra International LLC is a Ras Al Khaimah foodstuff company focused on importing everyday staples from India with care, consistency, and clear communication.',
        ar: 'شركة الكسرة الدولية ذ.م.م شركة مواد غذائية في رأس الخيمة تركز على استيراد السلع اليومية من الهند بعناية واتساق وتواصل واضح.'
      }
    },
    values: [
      {
        title: { en: 'Indian origin, UAE delivery', ar: 'منشأ هندي، توصيل من الإمارات' },
        copy: { en: 'Al Kesra sources from India\'s established food-producing regions — bringing quality staples to UAE buyers with full clarity on product origin.', ar: 'تُوفِّر الكسرة من مناطق إنتاج غذائي هندية راسخة — جالبةً سلعاً عالية الجودة للمشترين في الإمارات بوضوح تام حول مصدر المنتج.' }
      },
      {
        title: { en: 'Six clear categories', ar: 'ست فئات واضحة' },
        copy: { en: 'Six clearly defined product categories make it easy to identify what you need and request exactly what you want — no unnecessary complexity.', ar: 'ست فئات منتجات محددة بوضوح تُسهِّل تحديد ما تحتاجه وطلب ما تريده بالضبط — دون تعقيد غير ضروري.' }
      },
      {
        title: { en: 'Responsive service', ar: 'خدمة سريعة الاستجابة' },
        copy: { en: 'Inquiries are handled directly and professionally — with timely follow-up on availability, pricing, pack options, and delivery coordination.', ar: 'تُعالَج الاستفسارات بشكل مباشر ومهني — مع متابعة فورية للتوافر والأسعار وخيارات التعبئة وتنسيق التسليم.' }
      }
    ]
  },
  products: {
    meta: {
      en: {
        title: 'Foodstuff Product Categories — Al Kesra',
        description: 'Browse Al Kesra product categories: rice and grains, flour and baking, pulses, spices, oils, and canned and packaged goods — all sourced from India.'
      },
      ar: {
        title: 'فئات المنتجات الغذائية — الكسرة',
        description: 'تصفح فئات منتجات الكسرة: أرز وحبوب، دقيق وخبز، بقوليات، توابل، زيوت، ومعلبات ومواد معبأة — كلها مُوردَة من الهند.'
      }
    },
    hero: {
      image: '/images/products-spread.jpg',
      eyebrow: { en: 'Product categories', ar: 'فئات المنتجات' },
      title: { en: 'Six Indian foodstuff categories, ready to supply', ar: 'ست فئات غذائية هندية، جاهزة للتوريد' },
      lead: {
        en: 'Rice, flour, pulses, spices, oils, and packaged goods — sourced from India and supplied from Ras Al Khaimah to retailers, restaurants, and wholesale buyers across the UAE.',
        ar: 'أرز ودقيق وبقوليات وتوابل وزيوت ومواد معبأة — مُوردَة من الهند وموزَّعة من رأس الخيمة للتجار والمطاعم والمشترين بالجملة في الإمارات.'
      }
    }
  },
  quality: {
    meta: {
      en: {
        title: 'Quality & Sourcing — Al Kesra',
        description: 'Al Kesra sources Indian food staples with attention to product quality, packaging standards, and reliable fulfilment for UAE buyers.'
      },
      ar: {
        title: 'الجودة والتوريد — الكسرة',
        description: 'تُوفِّر الكسرة السلع الغذائية الهندية مع الاهتمام بجودة المنتج ومعايير التغليف والوفاء الموثوق للمشترين في الإمارات.'
      }
    },
    hero: {
      image: '/images/quality-packaging.jpg',
      eyebrow: { en: 'Quality & sourcing', ar: 'الجودة والتوريد' },
      title: { en: 'Quality at every step of the supply chain', ar: 'جودة في كل خطوة من خطوات سلسلة التوريد' },
      lead: {
        en: 'Al Kesra sources, verifies, and supplies Indian food staples to UAE buyers — with attention to product quality, packaging standards, and reliable fulfilment.',
        ar: 'تُوفِّر الكسرة وتتحقق من جودة السلع الغذائية الهندية وتوردها للمشترين في الإمارات — مع الاهتمام بجودة المنتج ومعايير التغليف والوفاء الموثوق بالطلبات.'
      }
    },
    pillars: [
      {
        title: { en: 'Product suitability', ar: 'ملاءمة المنتج' },
        copy: { en: 'Every order begins with understanding the buyer\'s intended use, required quantity, and target market — so the right product and pack size are matched from the start.', ar: 'يبدأ كل طلب بفهم الاستخدام المقصود للمشتري والكمية المطلوبة والسوق المستهدف — لمطابقة المنتج الصحيح وحجم العبوة من البداية.' }
      },
      {
        title: { en: 'Packaging standards', ar: 'معايير التغليف' },
        copy: { en: 'Packaging needs are part of every sourcing discussion — sizes, labeling, and handling are confirmed during the inquiry, not after the order is placed.', ar: 'تعتبر احتياجات التغليف جزءاً من كل نقاش توريد — تُحدَّد الأحجام والملصقات والمناولة أثناء الاستفسار، لا بعد وضع الطلب.' }
      },
      {
        title: { en: 'Clear communication', ar: 'تواصل واضح' },
        copy: { en: 'Every inquiry receives a direct response — with honest information on what is available, lead times, and next steps, so buyers can make informed decisions.', ar: 'يتلقى كل استفسار رداً مباشراً — بمعلومات صادقة حول المتوفر ومهل التسليم والخطوات التالية، حتى يتمكن المشترون من اتخاذ قرارات مستنيرة.' }
      }
    ]
  },
  contact: {
    meta: {
      en: {
        title: 'Contact Al Kesra International LLC',
        description: 'Contact Al Kesra International LLC in Ras Al Khaimah to inquire about Indian foodstuff categories, pricing, and supply options.'
      },
      ar: {
        title: 'تواصل مع شركة الكسرة الدولية',
        description: 'تواصل مع شركة الكسرة الدولية في رأس الخيمة للاستفسار عن فئات المواد الغذائية الهندية والأسعار وخيارات التوريد.'
      }
    },
    hero: {
      image: '/images/contact-pantry.jpg',
      eyebrow: { en: 'Get in touch', ar: 'تواصل معنا' },
      title: { en: "Let's talk supply", ar: 'لنتحدث عن التوريد' },
      lead: {
        en: 'For product inquiries, pricing, sourcing discussions, or partnership opportunities — reach Al Kesra International LLC directly in Ras Al Khaimah.',
        ar: 'للاستفسارات حول المنتجات والأسعار والتوريد أو فرص التعاون — تواصل مع شركة الكسرة الدولية مباشرةً في رأس الخيمة.'
      }
    }
  }
} as const;
