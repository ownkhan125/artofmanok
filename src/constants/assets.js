/**
 * Central image asset map.
 *
 * Every visual slot on the website resolves through this file. Swap a slot
 * to a different file by changing only its value here — no other file needs
 * to touch image URLs.
 *
 * Folder convention (drop local files in here):
 *   public/assets/home/        — hero slides, marquee art
 *   public/assets/categories/  — Shop-by-Category tiles
 *   public/assets/products/    — product photography
 *   public/assets/banners/     — full-bleed promotional banners
 *   public/assets/collections/ — collection landing imagery
 *   public/assets/about/       — about-page story blocks
 *   public/assets/images/      — brand marks (logo, favicon)
 *
 * Photo credits:
 *   Stock photography in this project is sourced from Unsplash and is used
 *   under the Unsplash License (https://unsplash.com/license — free for
 *   commercial and non-commercial use, no attribution required).
 *   The studio photography in /assets/about is original.
 */

export const BRAND = {
  logo: '/assets/images/logo.png',
}

export const HOME_HERO = [
  {
    image: '/assets/home/hero-leather-stack.jpg',
    alt: 'A stack of leather journals on a warm wooden surface',
  },
  {
    image: '/assets/home/hero-pen-writing.jpg',
    alt: 'An open notebook with a fountain pen and reading glasses on a warm wooden desk',
  },
  {
    image: '/assets/home/hero-workspace.jpg',
    alt: 'A neat workspace with a notebook and a small plant',
  },
]

export const HOME_CATEGORIES = {
  calendar:   { image: '/assets/categories/calendar.jpg',    alt: 'A spiral notebook and pen on a clean white desk' },
  washiTapes: { image: '/assets/categories/washi-tapes.jpg', alt: 'A fountain pen close-up on a handwritten page' },
  stickers:   { image: '/assets/categories/stickers.jpg',    alt: 'An open notebook with a fountain pen and reading glasses' },
  journals:   { image: '/assets/categories/journals.jpg',    alt: 'A poetry book resting on a small wooden table' },
  bookmarks:  { image: '/assets/categories/bookmarks.jpg',   alt: 'An open book resting on a journal with a bookshelf behind' },
  cards:      { image: '/assets/categories/cards.jpg',       alt: 'Handwritten cursive on lined paper with a fountain pen' },
  memoPads:   { image: '/assets/categories/memo-pads.jpg',   alt: 'A clean spiral notebook on a desk' },
  bundles:    { image: '/assets/categories/bundles.jpg',     alt: 'A neat workspace with a notebook and pen' },
}

export const HOME_CLASSIC_BANNER = {
  desktop: '/assets/banners/classic-desktop.jpg',
  mobile: '/assets/banners/classic-mobile.jpg',
  alt: 'A leather-bound journal open on a desk with books arranged behind',
}

export const HOME_CLASSIC_SHOWCASES = [
  {
    image: '/assets/collections/showcase-leather.jpg',
    alt: 'A poetry book resting on a journal on a wooden side table',
  },
  {
    image: '/assets/collections/showcase-coquette.jpg',
    alt: 'A close-up of a fountain pen writing in cursive on lined paper',
  },
]

export const HOME_PROMO_BANNER = {
  desktop: '/assets/banners/promo-desktop.jpg',
  mobile: '/assets/banners/promo-mobile.jpg',
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

// Real studio photography (provided by the brand) — keep as-is.
export const ABOUT_IMAGES = {
  established: {
    image: '/assets/about/IMG_0595.jpg',
    alt: 'A glimpse from Mano’s studio — established 2021',
  },
  mission: {
    image: '/assets/about/IMG_1663.jpg',
    alt: 'A scene from Mano’s studio — our everyday mission',
  },
}

export const SHOP_MENU_FEATURED = {
  leatherJournals:    '/assets/collections/featured-leather.jpg',
  pinterestInspired:  '/assets/collections/featured-pinterest.jpg',
  washiSticker:       '/assets/collections/featured-washi.jpg',
}
