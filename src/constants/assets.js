/**
 * Central image asset map.
 *
 * Every visual slot on the website resolves through this file. To swap the
 * image for a section, change only its path here — no component touches a
 * raw image URL.
 *
 * Folder convention:
 *   public/assets/images/    — all static website imagery (one flat folder)
 *   public/assets/products/  — product photography (kept separate)
 *
 * Filenames are section-named so each slot maps to a single, predictable
 * file on disk. Replacing a section is a matter of dropping a new file at
 * the same path.
 */

export const BRAND = {
  logo: '/assets/images/logo.png',
  footerLogo: '/assets/images/footer-logo.png',
}

export const HOME_HERO = [
  {
    image: '/assets/images/hero-section-1.png',
    alt: 'A stack of leather journals on a warm wooden surface',
  },
  {
    image: '/assets/images/hero-section-2.png',
    alt: 'An open notebook with a fountain pen and reading glasses on a warm wooden desk',
  },
  {
    image: '/assets/images/hero-section-3.png',
    alt: 'A neat workspace with a notebook and a small plant',
  },
]

// NOTE: dummy stand-ins re-using existing local files in /assets/images/.
// Replace each `image:` path with the real category photo when provided.
export const HOME_CATEGORIES = {
  calendar:   { image: '/assets/images/hero-section-1.png',     alt: 'A spiral notebook and pen on a clean white desk' },
  washiTapes: { image: '/assets/images/hero-section-2.png',     alt: 'A fountain pen close-up on a handwritten page' },
  stickers:   { image: '/assets/images/hero-section-3.png',     alt: 'An open notebook with a fountain pen and reading glasses' },
  journals:   { image: '/assets/images/hero-section-4.png',     alt: 'A poetry book resting on a small wooden table' },
  bookmarks:  { image: '/assets/images/about-established.jpg',  alt: 'An open book resting on a journal with a bookshelf behind' },
  cards:      { image: '/assets/images/about-mission.jpg',      alt: 'Handwritten cursive on lined paper with a fountain pen' },
  memoPads:   { image: '/assets/images/classic-desktop.jpg',    alt: 'A clean spiral notebook on a desk' },
  bundles:    { image: '/assets/images/Classic-collection-2.jpg', alt: 'A neat workspace with a notebook and pen' },
}

export const HOME_CLASSIC_BANNER = {
  desktop: '/assets/images/classic-desktop.jpg',
  // No mobile-cropped variant on disk yet — reuse desktop and let object-cover crop.
  mobile: '/assets/images/classic-desktop.jpg',
  alt: 'A leather-bound journal open on a desk with books arranged behind',
}

export const HOME_CLASSIC_SHOWCASES = [
  {
    image: '/assets/images/Classic-collection-1.gif',
    alt: 'A poetry book resting on a journal on a wooden side table',
  },
  {
    image: '/assets/images/Classic-collection-2.jpg',
    alt: 'A close-up of a fountain pen writing in cursive on lined paper',
  },
]

export const HOME_PROMO_BANNER = {
  desktop: '/assets/images/promo-banner-section-image.png',
  mobile: '/assets/images/promo-banner-section-image.png',
  alt: 'A warm, considered workspace with a notebook, fountain pen and reading glasses',
}

// Product photography — referenced by buildProduct() in site.js
export const PRODUCT_PHOTOS = {
  poetryBook:      '/assets/products/poetry-book.jpg',
  fountainPen:     '/assets/products/fountain-pen.jpg',
  notebookGlasses: '/assets/products/notebook-glasses.jpg',
  spiralWhite:     '/assets/products/spiral-white.jpg',
  openBookShelf:   '/assets/products/open-book-shelf.jpg',
}

export const ABOUT_IMAGES = {
  established: {
    image: '/assets/images/about-established.jpg',
    alt: 'A glimpse from Mano’s studio — established 2021',
  },
  mission: {
    image: '/assets/images/about-mission.jpg',
    alt: 'A scene from Mano’s studio — our everyday mission',
  },
}

// NOTE: dummy stand-ins re-using existing local files in /assets/images/.
// Replace each path with the real menu-featured image when provided.
export const SHOP_MENU_FEATURED = {
  leatherJournals:    '/assets/images/about-established.jpg',
  pinterestInspired:  '/assets/images/about-mission.jpg',
  washiSticker:       '/assets/images/Classic-collection-2.jpg',
}
