import {
  ABOUT_IMAGES,
  HOME_CATEGORIES,
  HOME_CLASSIC_BANNER,
  HOME_CLASSIC_SHOWCASES,
  HOME_HERO,
  HOME_PROMO_BANNER,
  PRODUCT_PHOTOS,
  SHOP_MENU_FEATURED,
} from './assets'

export const SITE_CONFIG = {
  name: 'Mano.K',
  fullName: 'Art of Mano K',
  email: 'artofmanok@gmail.com',
  description:
    'Welcome to Art of Mano K, your cozy corner of stationery & more. Journals, leather notebooks, stickers, and the prettiest little objects.',
  url: 'https://artofmanok.com',
  author: 'Art of Mano K',
  keywords: [
    'stationery',
    'journals',
    'leather journals',
    'planners',
    'stickers',
    'collectibles',
  ],
  social: [
    { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/artofmanok' },
    { id: 'facebook', label: 'Facebook', href: 'https://facebook.com/artofmanok' },
  ],
}

export const ANNOUNCEMENT = {
  email: 'artofmanok@gmail.com',
  message: 'Welcome to Art of Mano K, your cozy corner of stationery & more',
}

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop', hasDropdown: true },
  { href: '/faq', label: 'FAQ /Terms & Conditions' },
  { href: '/about', label: 'About Us' },
]

export const MOBILE_DRAWER_GROUPS = [
  {
    label: 'Shop',
    href: '/shop',
    items: [
      { label: 'View All', href: '/shop' },
      { label: 'Journals', href: '/shop/journals' },
      { label: 'Leather Journals', href: '/shop/leather-journals' },
      { label: 'Stickers', href: '/shop/stickers' },
      { label: 'Calendar', href: '/shop/calendar' },
      { label: 'Keychains', href: '/shop/keychains' },
      { label: 'Sketchbooks', href: '/shop/sketchbooks' },
      { label: 'Cards', href: '/shop/cards' },
      { label: 'Memo Pads', href: '/shop/memo-pads' },
      { label: 'Planners', href: '/shop/planners' },
      { label: 'Washi Tapes', href: '/shop/washi-tapes' },
      { label: 'Bundles', href: '/shop/bundles' },
      { label: 'Bookmarks', href: '/shop/bookmarks' },
    ],
    collections: [
      { label: 'Coquette', href: '/collections/coquette' },
      { label: 'Pinterest Inspired', href: '/collections/pinterest-inspired' },
    ],
  },
]

export const MARQUEE_ITEMS = [
  'New launch now available',
  'Free shipping over $50',
  'Hand-curated stationery',
  'Made for cozy desks',
  'Worldwide delivery',
]

export const HERO_SLIDES = [
  {
    id: 'pocket-journal',
    eyebrow: 'New arrival',
    headline: 'New A6 Pocket Journal',
    subline:
      'Hand-curated leather notebooks, made to romance your everyday desk.',
    primary: { label: 'Shop now', href: '/shop' },
    secondary: { label: 'View collection', href: '/shop/journals' },
    image: HOME_HERO[0].image,
    imageAlt: HOME_HERO[0].alt,
    align: 'left',
  },
  {
    id: 'mano-standard',
    eyebrow: 'The Mano standard',
    headline: 'Quiet luxury\nfor everyday paper.',
    subline:
      'Considered objects for desks that mean something — built to be used, not displayed.',
    primary: { label: 'Explore journals', href: '/shop/journals' },
    secondary: { label: 'Our story', href: '/about' },
    image: HOME_HERO[1].image,
    imageAlt: HOME_HERO[1].alt,
    align: 'left',
  },
  {
    id: 'gift-edit',
    eyebrow: 'The gift edit',
    headline: 'Wrapped\nwith intention.',
    subline:
      'Limited gift sets, ribboned by hand and ready for someone special.',
    primary: { label: 'Shop gifts', href: '/shop/bundles' },
    secondary: { label: 'Browse all', href: '/shop' },
    image: HOME_HERO[2].image,
    imageAlt: HOME_HERO[2].alt,
    align: 'left',
  },
]

export const FOOTER_LINKS = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/faq', label: "FAQ's" },
  { href: '/about', label: 'About Us' },
]

export const SHOP_CATEGORIES = [
  {
    slug: 'all',
    label: 'All',
    title: 'All Products',
    description: 'Every piece in the studio — journals, stickers, calendars, keychains and more.',
  },
  {
    slug: 'journals',
    label: 'Journals',
    title: 'Journals',
    description: 'Cloth, leather and pocket journals — built for desks that mean something.',
  },
  {
    slug: 'leather-journals',
    label: 'Leather Journals',
    title: 'Leather Journals',
    description: 'Hand-finished leather and suede journals you keep for years.',
  },
  {
    slug: 'stickers',
    label: 'Stickers',
    title: 'Stickers',
    description: 'Hand-illustrated vinyl stickers and sticker sheets, made for letters and laptops.',
  },
  {
    slug: 'calendar',
    label: 'Calendar',
    title: 'Calendar',
    description: 'Wall calendars and planner inserts to mark a thoughtful year.',
  },
  {
    slug: 'keychains',
    label: 'Keychains',
    title: 'Keychains',
    description: 'Tiny illustrated keychains that travel with you.',
  },
  {
    slug: 'sketchbooks',
    label: 'Sketchbooks',
    title: 'Sketchbooks',
    description: 'Sketchbooks and dot-grid pads for studio mornings.',
  },
  {
    slug: 'cards',
    label: 'Cards',
    title: 'Cards',
    description: 'Greeting cards, birthday cards and notes you mean to send.',
  },
  {
    slug: 'memo-pads',
    label: 'Memo Pads',
    title: 'Memo Pads',
    description: 'Memo pads with charming patterns for daily lists and reminders.',
  },
  {
    slug: 'planners',
    label: 'Planners',
    title: 'Planners',
    description: 'Daily, weekly and monthly planners to keep things gentle.',
  },
  {
    slug: 'washi-tapes',
    label: 'Washi Tapes',
    title: 'Washi Tapes',
    description: 'Patterned washi tapes for journals, gift wrap and tiny details.',
  },
  {
    slug: 'bundles',
    label: 'Bundles',
    title: 'Bundles',
    description: 'Save more with curated stationery bundles.',
  },
  {
    slug: 'bookmarks',
    label: 'Bookmarks',
    title: 'Bookmarks',
    description: 'Bookmarks with character — for the books you actually finish.',
  },
]

export const COLLECTIONS = [
  {
    slug: 'coquette',
    label: 'Coquette',
    title: 'Coquette Collection',
    description: 'Soft pinks, ribbons and quiet charm — our coquette edit.',
  },
  {
    slug: 'pinterest-inspired',
    label: 'Pinterest Inspired',
    title: 'Pinterest Inspired',
    description: 'Mood-board approved pieces curated from our most-saved looks.',
  },
]

export const CONTACT_INFO = {
  email: 'artofmanok@gmail.com',
  phoneLabel: 'WhatsApp',
  basedIn: 'Islamabad, Pakistan',
}

export const SHOP_CATEGORY_TILES = [
  { label: 'Calendar',    cta: 'Click here', href: '/shop/calendar',     image: HOME_CATEGORIES.calendar.image,    alt: HOME_CATEGORIES.calendar.alt },
  { label: 'Washi tapes', cta: 'Shop now',   href: '/shop/washi-tapes',  image: HOME_CATEGORIES.washiTapes.image,  alt: HOME_CATEGORIES.washiTapes.alt },
  { label: 'Stickers',    cta: 'Click here', href: '/shop/stickers',     image: HOME_CATEGORIES.stickers.image,    alt: HOME_CATEGORIES.stickers.alt },
  { label: 'Journals',    cta: 'Click here', href: '/shop/journals',     image: HOME_CATEGORIES.journals.image,    alt: HOME_CATEGORIES.journals.alt },
  { label: 'Bookmarks',   cta: 'Click here', href: '/shop/bookmarks',    image: HOME_CATEGORIES.bookmarks.image,   alt: HOME_CATEGORIES.bookmarks.alt },
  { label: 'Cards',       cta: 'Shop now',   href: '/shop/cards',        image: HOME_CATEGORIES.cards.image,       alt: HOME_CATEGORIES.cards.alt },
  { label: 'Memo Pads',   cta: 'Click here', href: '/shop/memo-pads',    image: HOME_CATEGORIES.memoPads.image,    alt: HOME_CATEGORIES.memoPads.alt },
  { label: 'Bundles',     cta: 'Shop now',   href: '/shop/bundles',      image: HOME_CATEGORIES.bundles.image,     alt: HOME_CATEGORIES.bundles.alt },
]

export const CLASSIC_BANNER = {
  eyebrow: 'Featured',
  headline: 'The Classic Collection',
  tagline: 'A new chapter in considered, everyday writing.',
  imageDesktop: HOME_CLASSIC_BANNER.desktop,
  imageMobile: HOME_CLASSIC_BANNER.mobile,
  imageAlt: HOME_CLASSIC_BANNER.alt,
}

export const CLASSIC_SHOWCASES = [
  {
    cta: 'Shop now',
    href: '/shop/leather-journals',
    image: HOME_CLASSIC_SHOWCASES[0].image,
    alt: HOME_CLASSIC_SHOWCASES[0].alt,
  },
  {
    cta: 'Shop now',
    href: '/collections/coquette',
    image: HOME_CLASSIC_SHOWCASES[1].image,
    alt: HOME_CLASSIC_SHOWCASES[1].alt,
  },
]

const PRODUCT_IMAGES = PRODUCT_PHOTOS

const DEFAULT_FEATURES_BY_CATEGORY = {
  'leather-journals': [
    'Hand-finished full-grain or suede leather cover',
    'Lay-flat smooth pages — refillable interior',
    'Ribbon marker and elastic closure',
    'Considered packaging in our signature tissue',
  ],
  journals: [
    '120 cream-toned writing pages',
    'Soft-touch cover with rounded corners',
    'A5 size — slips into a tote with ease',
    'Hand-illustrated design, printed in small batches',
  ],
  'memo-pads': [
    '60 tear-off perforated sheets',
    'Hand-illustrated design, printed in small batches',
    'Lightweight chipboard backer',
  ],
  planners: [
    'Undated weekly + monthly spreads',
    'Soft-touch cover with rounded corners',
    'Ribbon marker for the current week',
  ],
  bundles: [
    'Curated set, packed in our signature tissue',
    'Finished with a hand-tied ribbon',
    'Every piece designed in-house',
  ],
  sketchbooks: [
    'Heavyweight 160gsm acid-free pages',
    'Suitable for ink, pencil and watercolour',
    'Hardcover binding lays flat at any page',
  ],
  stickers: [
    'Hand-illustrated vinyl design',
    'Water-resistant and scratch-friendly',
    'Sticks cleanly to laptops, planners and letters',
  ],
  cards: [
    'Printed on heavyweight cream cardstock',
    'Includes matching kraft envelope',
    'Blank inside for your own message',
  ],
  bookmarks: [
    'Sturdy printed cardstock with rounded corners',
    'Tassel detail in soft pink or cream',
    'Pairs well with our journals and notebooks',
  ],
  keychains: [
    'Hand-illustrated acrylic charm',
    'Solid metal hardware that ages gracefully',
    'Travels well — bag, keys or planner',
  ],
  'washi-tapes': [
    '15mm × 5m roll, easy to tear by hand',
    'Repositionable for layered journal spreads',
    'Hand-illustrated pattern in our signature palette',
  ],
  calendar: [
    'A4 wall format with monthly tear-off pages',
    'Considered grid for notes, errands and birthdays',
    'Hand-illustrated cover artwork',
  ],
}

const DEFAULT_TAGS_BY_CATEGORY = {
  'leather-journals': ['leather', 'journal', 'gift', 'desk'],
  journals: ['journal', 'notebook', 'stationery', 'desk'],
  'memo-pads': ['memo', 'desk', 'gift', 'aesthetic'],
  planners: ['planner', 'organisation', 'desk'],
  bundles: ['bundle', 'gift', 'curated', 'value'],
  sketchbooks: ['sketchbook', 'art', 'studio'],
  stickers: ['sticker', 'aesthetic', 'gift', 'stationery', 'deco'],
  cards: ['card', 'gift', 'paper'],
  bookmarks: ['bookmark', 'reading', 'paper', 'gift'],
  keychains: ['keychain', 'accessory', 'gift'],
  'washi-tapes': ['washi', 'tape', 'journal', 'deco'],
  calendar: ['calendar', '2026', 'desk'],
}

const buildProduct = ({
  id,
  title,
  image,
  alt,
  price,
  originalPrice,
  badge,
  href,
  category,
  collections,
  description,
  features,
  tags,
  sku,
  inStock,
}) => ({
  id,
  slug: id,
  title,
  image,
  alt,
  price,
  originalPrice: originalPrice ?? null,
  badge: badge ?? null,
  href: href ?? `/product/${id}`,
  category: category ?? null,
  collections: collections ?? [],
  description: description ?? null,
  features: features ?? DEFAULT_FEATURES_BY_CATEGORY[category] ?? [],
  tags: tags ?? DEFAULT_TAGS_BY_CATEGORY[category] ?? [],
  sku: sku ?? `MK-${(id || '').slice(0, 4).toUpperCase()}-${(price ?? 0)}`,
  inStock: inStock ?? badge !== 'soldout',
  discountPercent:
    originalPrice && price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null,
})

export const PRODUCT_CURRENCY = '$'

export const NEW_ARRIVALS = [
  buildProduct({
    id: 'pocket-leather-black',
    title: 'Pocket Leather Journal',
    alt: 'A small black leather journal on a wooden surface',
    image: PRODUCT_IMAGES.poetryBook,
    price: 42,
    category: 'leather-journals',
    collections: ['pinterest-inspired'],
    description:
      'A pocket-sized leather journal with smooth, refillable pages — built for the small thoughts you don’t want to lose.',
  }),
  buildProduct({
    id: 'cloth-cover-notebook',
    title: 'Cloth Cover Notebook',
    alt: 'A clean spiral notebook on a desk',
    image: PRODUCT_IMAGES.spiralWhite,
    price: 26,
    originalPrice: 32,
    badge: 'sale',
    category: 'journals',
    description: 'Cloth-bound notebook with a softly textured cover and 120 dot-grid pages.',
  }),
  buildProduct({
    id: 'a6-linen-journal',
    title: 'A6 Linen Journal',
    alt: 'A linen-bound journal with a fountain pen',
    image: PRODUCT_IMAGES.fountainPen,
    price: 38,
    category: 'journals',
    description: 'Compact linen-wrapped A6 journal that slips into any tote.',
  }),
  buildProduct({
    id: 'embossed-memo-pad',
    title: 'Embossed Memo Pad',
    alt: 'An open notebook with a fountain pen and reading glasses',
    image: PRODUCT_IMAGES.notebookGlasses,
    price: 18,
    badge: 'soldout',
    category: 'memo-pads',
    description: 'Embossed memo pad — 80 tear-off pages for daily lists.',
  }),
  buildProduct({
    id: 'travel-log-set',
    title: 'Travel Log Set',
    alt: 'An open book resting on a journal in front of a bookshelf',
    image: PRODUCT_IMAGES.openBookShelf,
    price: 54,
    category: 'bundles',
    collections: ['pinterest-inspired'],
    description: 'A journal + sticker pack + washi roll, packed for the road.',
  }),
  buildProduct({
    id: 'leather-pocket-burgundy',
    title: 'Pocket Leather Journal — Burgundy',
    alt: 'A leather pocket journal styled on a wooden side table',
    image: PRODUCT_IMAGES.poetryBook,
    price: 42,
    originalPrice: 48,
    badge: 'sale',
    category: 'leather-journals',
    description: 'A burgundy variant of our signature pocket leather journal.',
  }),
  buildProduct({
    id: 'a5-grid-planner',
    title: 'A5 Grid Planner',
    alt: 'A spiral A5 planner with a pen',
    image: PRODUCT_IMAGES.spiralWhite,
    price: 32,
    category: 'planners',
    description: 'Undated A5 grid planner — 12 months of soft, gentle pages.',
  }),
  buildProduct({
    id: 'softcover-journal-sand',
    title: 'Softcover Journal — Sand',
    alt: 'A softcover journal opened to a written page',
    image: PRODUCT_IMAGES.fountainPen,
    price: 28,
    badge: 'soldout',
    category: 'journals',
    collections: ['coquette'],
    description: 'A whisper-soft softcover journal in sand — ribbon marker included.',
  }),
]

export const TRENDING_PRODUCTS = [
  buildProduct({
    id: 'studio-sketchbook',
    title: 'Studio Sketchbook',
    alt: 'A poetry book and a journal on a wooden surface',
    image: PRODUCT_IMAGES.poetryBook,
    price: 36,
    category: 'sketchbooks',
    description: 'A heavyweight studio sketchbook — built for ink, watercolour and life drawing.',
  }),
  buildProduct({
    id: 'minimalist-notebook',
    title: 'Minimalist Notebook',
    alt: 'A minimalist notebook on a clean white desk',
    image: PRODUCT_IMAGES.spiralWhite,
    price: 22,
    originalPrice: 28,
    badge: 'sale',
    category: 'journals',
    description: 'A clean, minimalist notebook with off-white pages and a soft cover.',
  }),
  buildProduct({
    id: 'classic-leather-folio',
    title: 'Classic Leather Folio',
    alt: 'A leather folio open with a fountain pen on top',
    image: PRODUCT_IMAGES.fountainPen,
    price: 64,
    category: 'leather-journals',
    collections: ['coquette'],
    description: 'Our most-loved folio — full-grain leather, refillable interior, and a quiet ribbon marker.',
  }),
  buildProduct({
    id: 'desk-companion',
    title: 'Desk Companion Notebook',
    alt: 'A small desk notebook with reading glasses and a pen',
    image: PRODUCT_IMAGES.notebookGlasses,
    price: 24,
    category: 'journals',
    description: 'A small notebook designed to live on your desk — for ideas, lists and sketches.',
  }),
  buildProduct({
    id: 'archive-journal',
    title: 'Archive Journal',
    alt: 'An archive-style journal with bookshelves behind',
    image: PRODUCT_IMAGES.openBookShelf,
    price: 48,
    badge: 'soldout',
    category: 'journals',
    description: 'A library-inspired archive journal with a hard cover and gilt edges.',
  }),
  buildProduct({
    id: 'vintage-memo-set',
    title: 'Vintage Memo Set',
    alt: 'A small writing journal styled on a wooden table',
    image: PRODUCT_IMAGES.poetryBook,
    price: 19,
    category: 'memo-pads',
    description: 'Three vintage-illustrated memo pads — 60 sheets each.',
  }),
  buildProduct({
    id: 'campus-spiral-pad',
    title: 'Campus Spiral Pad',
    alt: 'A spiral pad on a clean white surface',
    image: PRODUCT_IMAGES.spiralWhite,
    price: 14,
    originalPrice: 18,
    badge: 'sale',
    category: 'journals',
    description: 'An everyday spiral pad with perforated pages and a smooth, recyclable cover.',
  }),
  buildProduct({
    id: 'inkwell-essentials',
    title: 'Inkwell Essentials Set',
    alt: 'A fountain pen writing on lined paper',
    image: PRODUCT_IMAGES.fountainPen,
    price: 56,
    category: 'bundles',
    description: 'A complete writing set: fountain pen ink, dip nib, leather sleeve and journal.',
  }),
]

export const SHOP_BUNDLES = [
  {
    id: 'studio-essentials',
    label: 'Studio Essentials',
    cta: 'Shop now',
    href: '/product/studio-essentials',
    image: PRODUCT_IMAGES.spiralWhite,
    alt: 'A studio essentials bundle on a clean white desk',
  },
  {
    id: 'travel-companion',
    label: 'Travel Companion',
    cta: 'Shop now',
    href: '/product/travel-companion',
    image: PRODUCT_IMAGES.poetryBook,
    alt: 'A travel companion bundle on a wooden side table',
  },
  {
    id: 'aesthetic-edit',
    label: 'Aesthetic Edit',
    cta: 'Shop now',
    href: '/product/aesthetic-edit',
    image: PRODUCT_IMAGES.fountainPen,
    alt: 'An aesthetic stationery edit with a fountain pen',
  },
  {
    id: 'desk-starter',
    label: 'Desk Starter',
    cta: 'Shop now',
    href: '/product/desk-starter',
    image: PRODUCT_IMAGES.notebookGlasses,
    alt: 'A desk starter bundle with notebook and glasses',
  },
  {
    id: 'archive-set',
    label: 'Archive Set',
    cta: 'Shop now',
    href: '/product/archive-set',
    image: PRODUCT_IMAGES.openBookShelf,
    alt: 'An archive bundle with books and journals',
  },
  {
    id: 'pocket-pack',
    label: 'Pocket Pack',
    cta: 'Shop now',
    href: '/product/pocket-pack',
    image: PRODUCT_IMAGES.poetryBook,
    alt: 'A pocket-sized stationery pack',
  },
  {
    id: 'gift-edit',
    label: 'Gift Edit',
    cta: 'Shop now',
    href: '/product/gift-edit',
    image: PRODUCT_IMAGES.fountainPen,
    alt: 'A curated gift edit with writing essentials',
  },
  {
    id: 'editor-pick',
    label: "Editor's Pick",
    cta: 'Shop now',
    href: '/product/editor-pick',
    image: PRODUCT_IMAGES.spiralWhite,
    alt: 'A curated editor pick bundle',
  },
]

export const PROMO_BANNER = {
  eyebrow: 'Where practice meets paper',
  headline: 'Built for desks that mean something.',
  tagline:
    'Tools we’d pick for our own studio — made to be used, not displayed.',
  cta: 'Read our story',
  href: '/about',
  imageDesktop: HOME_PROMO_BANNER.desktop,
  imageMobile: HOME_PROMO_BANNER.mobile,
  imageAlt: HOME_PROMO_BANNER.alt,
}

export const TESTIMONIALS = [
  {
    id: 'lina',
    title: 'My desk finally feels like mine',
    quote:
      'The pocket leather journal is a forever piece. Pages lay flat, leather softens beautifully, and the small details show up everywhere.',
    author: 'Lina M.',
    source: 'via Instagram',
    rating: 5,
    image: PRODUCT_IMAGES.poetryBook,
    alt: 'A leather journal on a small wooden side table',
    badge: 'Customer favourite',
  },
  {
    id: 'noor',
    title: 'Worth every penny, honestly',
    quote:
      'I was nervous to spend on a notebook, but writing in this every morning has become a small ritual I look forward to.',
    author: 'Noor K.',
    source: 'via review form',
    rating: 5,
    image: PRODUCT_IMAGES.fountainPen,
    alt: 'A close-up of a fountain pen on cursive script',
    badge: 'Verified buyer',
  },
  {
    id: 'tara',
    title: 'Studio Bundle is a tiny gift',
    quote:
      'Packaging alone made me grin — and the washi pack lasts ages. Already eyeing the next bundle for a friend.',
    author: 'Tara A.',
    source: 'via Instagram',
    rating: 5,
    image: PRODUCT_IMAGES.spiralWhite,
    alt: 'A spiral notebook and pen on a clean white desk',
    badge: 'Repeat customer',
  },
  {
    id: 'ria',
    title: 'Quiet luxury, exactly as promised',
    quote:
      'I keep recommending this shop to friends. Photos truly do not do the journals justice — the suede leather is a love letter.',
    author: 'Ria S.',
    source: 'via WhatsApp',
    rating: 5,
    image: PRODUCT_IMAGES.notebookGlasses,
    alt: 'An open notebook with a fountain pen and reading glasses',
    badge: 'Customer favourite',
  },
  {
    id: 'amna',
    title: 'My new gifting go-to',
    quote:
      'Gifted the Travel Companion to a friend who journals daily. The note inside the box made her cry. Will be back.',
    author: 'Amna H.',
    source: 'via Instagram',
    rating: 5,
    image: PRODUCT_IMAGES.openBookShelf,
    alt: 'An open book and journal in front of a bookshelf',
    badge: 'Verified buyer',
  },
  {
    id: 'sara',
    title: 'Calm, considered, very loved',
    quote:
      'It is the small things — paper weight, soft binding, ribbon marker — that make this feel premium without being loud.',
    author: 'Sara F.',
    source: 'via review form',
    rating: 5,
    image: PRODUCT_IMAGES.poetryBook,
    alt: 'A small journal styled on a wooden table',
    badge: 'Repeat customer',
  },
]

export const TESTIMONIAL_SUBTITLE = 'Loved by writers, planners, and the gentlest perfectionists.'

export const FAQ_ITEMS = [
  {
    id: 'about-brand',
    group: 'about',
    question: 'What is Art of Mano K all about?',
    answer:
      'We’re a small studio of pretty, thoughtful things. Art of Mano K exists to make the everyday a little more magical — from the tiniest illustrated details to the way each parcel is packaged. Everything we design is finished by hand and shipped with care.',
  },
  {
    id: 'where-based',
    group: 'about',
    question: 'Where are you based?',
    answer:
      'The studio is in Islamabad. Thanks to online shopping, our parcels travel anywhere in the world — wherever you’re reading this, we can ship to you.',
  },
  {
    id: 'release-cadence',
    group: 'about',
    question: 'How often do you release new products?',
    answer:
      'We drop new designs roughly every 2 months, so there’s always something fresh to look forward to. A few pieces each season are limited editions and won’t be restocked, so save your favourites quickly.',
  },
  {
    id: 'place-order',
    group: 'orders',
    question: 'How do I place an order?',
    answer:
      'Pick your favourites in the shop, add them to your cart, and follow the checkout steps. Once your order is placed, we’ll reach out on your WhatsApp number to confirm the details before we dispatch.',
  },
  {
    id: 'payment-methods',
    group: 'orders',
    question: 'What payment methods do you accept?',
    answer:
      'We accept Cash on Delivery (COD) and Bank Transfer.\n\n• COD: a 4% COD fee is added to your order total.\n• Bank Transfer: no fee — this is our preferred method and the most cost-friendly for you.\n• For orders above ₨5,000, we ask that 50% of the order be sent via Bank Transfer to keep processing smooth.',
  },
  {
    id: 'shipping-time',
    group: 'orders',
    question: 'How long will it take to receive my order?',
    answer:
      'Shipping time depends on where you are:\n\n• Local orders: Usually arrive within 6–7 working days after dispatch. We dispatch 24–48 hours after WhatsApp confirmation.\n• International orders: Around 10 days via FedEx, depending on your country’s postal service.',
  },
  {
    id: 'return-policy',
    group: 'returns',
    question: 'What is your return policy?',
    answer:
      'Each order is prepared by hand, so we don’t typically accept returns. If an item is missing from your parcel or you’ve received the wrong product, we’ll always make it right.\n\nTo help us check, please record a short unboxing video the moment you open your parcel.\n\nPlease note: damage caused in transit is beyond our control and isn’t something we can be held responsible for.',
  },
  {
    id: 'request-return',
    group: 'returns',
    question: 'How do I report a missing or incorrect item?',
    answer:
      'Reply to your WhatsApp order confirmation with your unboxing video — that’s the fastest way to reach us. If you can’t reach us there, email artofmanok@gmail.com with your order details and we’ll take it from there.',
  },
  {
    id: 'refunds',
    group: 'returns',
    question: 'Do you offer refunds and cancellations?',
    answer:
      'Refunds are issued only for genuine cases — like a confirmed missing item — and after we’ve reviewed your unboxing video. Cancellations are accepted within 24 hours of ordering, since we dispatch within 24–48 hours. Change your mind in that window and it’s no problem at all.',
  },
]

export const FAQ_GROUPS = [
  { id: 'about', label: 'The studio' },
  { id: 'orders', label: 'Orders, payment & shipping' },
  { id: 'returns', label: 'Returns, cancellations & refunds' },
]

export const FAQ_SUPPORT = {
  heading: 'Still have a question?',
  body:
    'If you need a hand right now, message us on WhatsApp by replying to your order confirmation, or email the studio. We answer in the order things land in our inbox.',
  primary: { label: 'Contact us', href: 'mailto:artofmanok@gmail.com' },
  secondary: { label: 'Read our terms', href: '/terms' },
}

export const ABOUT_PAGE = {
  hero: {
    title: 'Welcome to Mano’s Studio',
    intro:
      'Art of Mano K is a creative stationery studio founded by Mahruna Khattak (Mano) in Islamabad. What started as a lifelong love for drawing and designing has grown into a brand built on creativity, charm and a quiet sense of individuality — every piece illustrated and designed in-house, so each one feels considered and personal.',
  },
  blocks: [
    {
      id: 'established',
      heading: 'Established – 2021',
      body:
        'The studio was born from a simple idea: to bring thoughtful, one-of-a-kind stationery to people who love expressing themselves through the smallest details. Since day one, our focus has been on designs that aren’t easy to find anywhere else — so every product feels a little special, and a little more meaningful.',
      image: ABOUT_IMAGES.established.image,
      alt: ABOUT_IMAGES.established.alt,
    },
    {
      id: 'mission',
      heading: 'Our Mission',
      body:
        'Our mission is to make everyday stationery feel joyful and inspiring. We believe the things you use every day — a memo pad, a notebook, a sticker on your laptop — shouldn’t just be functional. They should feel like you. Through Art of Mano K, we hope to spark that small daily joy.',
      image: ABOUT_IMAGES.mission.image,
      alt: ABOUT_IMAGES.mission.alt,
    },
  ],
}

export const PRIVACY_TEXT = [
  {
    heading: 'Who we are',
    body:
      'Think of us as your little corner of pretty things. Art of mano.k was created to bring you thoughtfully designed products that make everyday life just a little more magical. From the tiniest details to the biggest packaging dreams, everything we create is made with love, care, and a sprinkle of charm.',
  },
  {
    heading: 'Where we’re based',
    body:
      'We call Islamabad our home. But thanks to the beauty of online shopping, our products can travel across the globe to find their way to you, wherever you are.',
  },
  {
    heading: 'How we collect information',
    body:
      'When you place an order or sign up for our newsletter, we collect details such as your name, email, shipping address, contact number and order history. We use this information solely to fulfil your order, communicate about it, and (if you opt in) tell you about new drops.',
  },
  {
    heading: 'How we use your data',
    body:
      'Your data is used to support your experience: to manage your account, fulfil orders, send order confirmations on WhatsApp, process payments, prevent fraud, and — only if you’ve opted in — share occasional emails about new collections and offers. You can unsubscribe at any time.',
  },
  {
    heading: 'Payment information',
    body:
      'We currently accept Cash on Delivery (COD) and Bank Transfer. For COD, there is a 4% COD fee added to your order total. For Bank Transfer, there’s no extra fee — it’s our preferred method and the most cost-friendly for you. For orders above ₨5,000, we kindly request 50% of the amount to be sent through Bank Transfer for smoother processing.',
  },
  {
    heading: 'Cookies & analytics',
    body:
      'Our website uses essential cookies to keep your cart and checkout working, plus standard analytics to understand how visitors use the site. You can disable cookies in your browser settings, although some features may stop working as expected.',
  },
  {
    heading: 'Your rights',
    body:
      'You can request access to, correction of, or deletion of your personal information at any time by emailing artofmanok@gmail.com. We never sell your data to third parties.',
  },
]

export const TERMS_TEXT = [
  {
    heading: 'Returns',
    body:
      'Since each order is prepared with extra love and care, we usually do not offer returns. However, if an item from your order is missing or you’ve received the wrong product, we’ll make it right. To process this, you’ll need to record an unboxing video of your parcel the moment you open it — this helps us verify if something was missing or swapped. Please note: We cannot take responsibility for items damaged in transit, as courier handling is beyond our control.',
  },
  {
    heading: 'Reporting missing or incorrect items',
    body:
      'If you’ve received a missing or incorrect item, send your unboxing video to us via WhatsApp — simply reply to the same confirmation message you received when placing your order. If for some reason you can’t reach us there, you can also email us at artofmanok@gmail.com with your order details.',
  },
  {
    heading: 'Refunds & cancellations',
    body:
      'Refunds are only issued in genuine cases, such as confirmed missing items, and after reviewing your proof (unboxing video). Orders can be cancelled within 24 hours of placing them, as we usually dispatch within 24–48 hours. If you change your mind during that time, just let us know — no problem at all!',
  },
  {
    heading: 'Shipping & delivery',
    body:
      'Local orders are dispatched 24 to 48 hours after WhatsApp confirmation and usually arrive within 6 to 7 working days after dispatch. International orders may take around 10 days via FedEx, depending on your country’s postal service.',
  },
  {
    heading: 'Use of website',
    body:
      'By accessing this website, you agree to use it for lawful purposes only and not to engage in any activity that could damage, disable or impair the site. All product designs, illustrations, photographs and text on this site are the property of Art of Mano.K and may not be reproduced without permission.',
  },
]

export const SHOP_MENU = {
  categories: [
    { label: 'View All', href: '/shop' },
    { label: 'Journals', href: '/shop/journals' },
    { label: 'Leather Journals', href: '/shop/leather-journals' },
    { label: 'Stickers', href: '/shop/stickers' },
    { label: 'Calendar', href: '/shop/calendar' },
    { label: 'Keychains', href: '/shop/keychains' },
    { label: 'Sketchbooks', href: '/shop/sketchbooks' },
    { label: 'Cards', href: '/shop/cards' },
    { label: 'Memo Pads', href: '/shop/memo-pads' },
    { label: 'Planners', href: '/shop/planners' },
    { label: 'Washi Tapes', href: '/shop/washi-tapes' },
    { label: 'Bundles', href: '/shop/bundles' },
    { label: 'Bookmarks', href: '/shop/bookmarks' },
  ],
  featured: [
    {
      title: 'Leather Journals',
      eyebrow: 'New collection',
      cta: 'Shop collection',
      href: '/shop/leather-journals',
      image: SHOP_MENU_FEATURED.leatherJournals,
    },
    {
      title: 'Pinterest Inspired',
      eyebrow: 'Editor’s pick',
      cta: 'Shop collection',
      href: '/collections/pinterest-inspired',
      image: SHOP_MENU_FEATURED.pinterestInspired,
    },
    {
      title: 'Washi & Sticker Edit',
      eyebrow: 'Best sellers',
      cta: 'Shop now',
      href: '/shop/washi-tapes',
      image: SHOP_MENU_FEATURED.washiSticker,
    },
  ],
}

const SHOP_BUNDLE_PRODUCTS = SHOP_BUNDLES.map((b) =>
  buildProduct({
    id: b.id,
    title: b.label,
    image: b.image,
    alt: b.alt,
    price: 64,
    originalPrice: 89,
    badge: 'sale',
    category: 'bundles',
    description:
      'A hand-curated bundle from the studio — packed in our signature tissue and finished with a ribbon.',
  }),
)

const productDedupe = new Map()
for (const p of [...NEW_ARRIVALS, ...TRENDING_PRODUCTS, ...SHOP_BUNDLE_PRODUCTS]) {
  if (!productDedupe.has(p.slug)) productDedupe.set(p.slug, p)
}

export const ALL_PRODUCTS = Array.from(productDedupe.values())

export const findProductBySlug = (slug) =>
  ALL_PRODUCTS.find((p) => p.slug === slug) || null

export const productsByCategory = (categorySlug) => {
  if (!categorySlug || categorySlug === 'all') return ALL_PRODUCTS
  return ALL_PRODUCTS.filter((p) => p.category === categorySlug)
}

export const productsByCollection = (collectionSlug) =>
  ALL_PRODUCTS.filter((p) => (p.collections || []).includes(collectionSlug))

export const findCategory = (slug) =>
  SHOP_CATEGORIES.find((c) => c.slug === slug) || null

export const findCollection = (slug) =>
  COLLECTIONS.find((c) => c.slug === slug) || null

