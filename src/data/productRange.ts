import type { Lang } from '@/data/content';

type Localized<T> = Record<Lang, T>;

export type ProductLineGroup = {
  title: Localized<string>;
  items: Localized<string[]>;
};

export type CategoryProductRange = {
  categoryId: string;
  summary: Localized<string>;
  highlights: Localized<string[]>;
  groups: ProductLineGroup[];
};

export const productRangesByCategory: Record<string, CategoryProductRange> = {
  'rice-grains': {
    categoryId: 'rice-grains',
    summary: {
      en: 'Basmati, non-basmati, parboiled, raw, and broken rice options, with grain and pack details confirmed during inquiry.',
      ar: 'خيارات أرز بسمتي وغير بسمتي ومسلوق وخام ومكسور، مع تأكيد تفاصيل الحبة والعبوة أثناء الاستفسار.'
    },
    highlights: {
      en: ['1121 basmati', 'Pusa basmati', 'IR rice', 'Broken rice'],
      ar: ['بسمتي 1121', 'بسمتي بوسا', 'أرز IR', 'أرز مكسور']
    },
    groups: [
      {
        title: { en: 'Basmati rice', ar: 'أرز بسمتي' },
        items: {
          en: [
            '1121 long grain basmati sella rice',
            '1121 long grain basmati steam rice',
            'Pusa basmati sella rice',
            'Pusa basmati steam rice',
            'Sugandha basmati rice',
            'Sarbati basmati rice'
          ],
          ar: [
            'أرز بسمتي 1121 طويل الحبة سيلا',
            'أرز بسمتي 1121 طويل الحبة ستيم',
            'أرز بسمتي بوسا سيلا',
            'أرز بسمتي بوسا ستيم',
            'أرز بسمتي سوغاندها',
            'أرز بسمتي سرباتي'
          ]
        }
      },
      {
        title: { en: 'Indian rice', ar: 'أرز هندي' },
        items: {
          en: [
            'Long grain parboiled rice',
            'IR-64 raw rice',
            'IR-64 parboiled rice',
            'Swarna raw rice',
            'IR-36 raw rice',
            'IR-36 parboiled rice',
            'IR-8 parboiled rice',
            '100% broken rice'
          ],
          ar: [
            'أرز طويل الحبة مسلوق',
            'أرز IR-64 خام',
            'أرز IR-64 مسلوق',
            'أرز سوارنا خام',
            'أرز IR-36 خام',
            'أرز IR-36 مسلوق',
            'أرز IR-8 مسلوق',
            'أرز مكسور 100%'
          ]
        }
      }
    ]
  },
  'flour-baking': {
    categoryId: 'flour-baking',
    summary: {
      en: 'Grain and flour staples for bakeries, groceries, cafeterias, and commercial kitchens.',
      ar: 'أساسيات الحبوب والدقيق للمخابز والبقالات والكافتيريات والمطابخ التجارية.'
    },
    highlights: {
      en: ['Wheat flour', 'Wheat', 'Maize', 'Barley'],
      ar: ['دقيق القمح', 'قمح', 'ذرة', 'شعير']
    },
    groups: [
      {
        title: { en: 'Grains', ar: 'الحبوب' },
        items: {
          en: ['Wheat', 'Maize', 'Sorghum', 'Millet', 'Barley'],
          ar: ['قمح', 'ذرة', 'ذرة رفيعة', 'دخن', 'شعير']
        }
      },
      {
        title: { en: 'Flour', ar: 'الدقيق' },
        items: {
          en: ['Wheat flour', 'Bulk flour packs', 'Retail flour packs'],
          ar: ['دقيق القمح', 'عبوات دقيق بالجملة', 'عبوات دقيق للتجزئة']
        }
      }
    ]
  },
  pulses: {
    categoryId: 'pulses',
    summary: {
      en: 'Pulse and bean lines for daily cooking, catering menus, grocery shelves, and repeat pantry demand.',
      ar: 'خطوط بقوليات وفاصوليا للطهي اليومي وقوائم التموين ورفوف البقالات والطلب المتكرر للمخزون.'
    },
    highlights: {
      en: ['Chickpeas', 'Yellow peas', 'Lentils', 'Beans'],
      ar: ['حمص', 'بازلاء صفراء', 'عدس', 'فاصوليا']
    },
    groups: [
      {
        title: { en: 'Pulses & beans', ar: 'البقوليات والفاصوليا' },
        items: {
          en: ['Chickpeas', 'Yellow peas', 'Lentils', 'Beans', 'Whole pulses', 'Split pulses'],
          ar: ['حمص', 'بازلاء صفراء', 'عدس', 'فاصوليا', 'بقوليات كاملة', 'بقوليات مقشورة']
        }
      }
    ]
  },
  spices: {
    categoryId: 'spices',
    summary: {
      en: 'Indian spice essentials for grocery shelves, restaurant kitchens, catering supply, and household use.',
      ar: 'أساسيات توابل هندية لرفوف البقالات ومطابخ المطاعم وتوريد التموين والاستخدام المنزلي.'
    },
    highlights: {
      en: ['Spices', 'Blends', 'Retail packs', 'Bulk packs'],
      ar: ['توابل', 'خلطات', 'عبوات تجزئة', 'عبوات جملة']
    },
    groups: [
      {
        title: { en: 'Spices', ar: 'التوابل' },
        items: {
          en: ['Turmeric', 'Cumin', 'Coriander', 'Chilli', 'Mixed spice blends', 'Whole and ground spices'],
          ar: ['كركم', 'كمون', 'كزبرة', 'فلفل حار', 'خلطات توابل', 'توابل كاملة ومطحونة']
        }
      }
    ]
  },
  oils: {
    categoryId: 'oils',
    summary: {
      en: 'Cooking oil, sugar, and oil seed inquiries are coordinated by pack format, volume, and availability.',
      ar: 'تنسق استفسارات زيوت الطهي والسكر والبذور الزيتية حسب شكل العبوة والكمية والتوافر.'
    },
    highlights: {
      en: ['Cooking oils', 'Sugar', 'Oil seeds', 'Food service packs'],
      ar: ['زيوت طهي', 'سكر', 'بذور زيتية', 'عبوات خدمات الطعام']
    },
    groups: [
      {
        title: { en: 'Oils & oil seeds', ar: 'الزيوت والبذور الزيتية' },
        items: {
          en: ['Cooking oils', 'Edible oil products', 'Oil seeds', 'Retail bottles', 'Food service packs'],
          ar: ['زيوت طهي', 'منتجات زيوت صالحة للأكل', 'بذور زيتية', 'عبوات تجزئة', 'عبوات خدمات الطعام']
        }
      },
      {
        title: { en: 'Sugar', ar: 'السكر' },
        items: {
          en: ['Sugar', 'Retail sugar packs', 'Bulk sugar supply'],
          ar: ['سكر', 'عبوات سكر للتجزئة', 'توريد سكر بالجملة']
        }
      }
    ]
  },
  'packaged-goods': {
    categoryId: 'packaged-goods',
    summary: {
      en: 'Shelf-stable, fresh, dry, and support categories for buyers who want broader foodstuff supply from one discussion.',
      ar: 'فئات ثابتة على الرف وطازجة وجافة وداعمة للمشترين الذين يريدون توريد مواد غذائية أوسع من خلال نقاش واحد.'
    },
    highlights: {
      en: ['Canned food', 'Dry nuts', 'Fresh produce', 'Disposables'],
      ar: ['أغذية معلبة', 'مكسرات جافة', 'منتجات طازجة', 'مستلزمات أحادية الاستخدام']
    },
    groups: [
      {
        title: { en: 'Packaged & dry goods', ar: 'مواد معبأة وجافة' },
        items: {
          en: ['Canned food', 'Packaged food', 'Dry nuts', 'Ready-to-cook staples', 'Retail assortment items'],
          ar: ['أغذية معلبة', 'مواد غذائية معبأة', 'مكسرات جافة', 'أساسيات جاهزة للطهي', 'منتجات تشكيلة التجزئة']
        }
      },
      {
        title: { en: 'Fresh & support items', ar: 'منتجات طازجة ومستلزمات داعمة' },
        items: {
          en: ['Fruits', 'Vegetables', 'Disposable plates', 'Disposable glasses', 'Disposable spoons', 'Disposable cups'],
          ar: ['فواكه', 'خضروات', 'أطباق أحادية الاستخدام', 'أكواب زجاجية أحادية الاستخدام', 'ملاعق أحادية الاستخدام', 'أكواب أحادية الاستخدام']
        }
      }
    ]
  }
};
