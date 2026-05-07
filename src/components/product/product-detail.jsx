'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Container from '@/components/ui/container'
import { CartPlusIcon, StarIcon } from '@/components/ui/icons'
import { useCart } from '@/components/providers/cart-context'
import { useUI } from '@/components/providers/ui-context'
import { cn } from '@/lib/cn'
import { PRODUCT_CURRENCY, SHOP_CATEGORIES } from '@/constants/site'

const formatPrice = (n) =>
  n == null ? '' : `${PRODUCT_CURRENCY}${n.toLocaleString()}`

const findCategoryLabel = (slug) =>
  SHOP_CATEGORIES.find((c) => c.slug === slug)?.label || slug

const ProductDetail = ({ product }) => {
  const [tab, setTab] = useState('description')
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const { addItem } = useCart()
  const { openCart } = useUI()
  const isSoldOut = product.badge === 'soldout' || product.inStock === false
  const isOnSale = product.badge === 'sale'

  const handleAdd = () => {
    if (isSoldOut) return
    addItem(product, qty)
    openCart()
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const lineTotal = (product.price ?? 0) * qty
  const features = product.features || []
  const tags = product.tags || []

  return (
    <section className="bg-background">
      <Container>
        <div className="grid gap-10 py-10 md:py-14 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <div className="lg:col-span-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-muted">
              <Image
                src={product.image}
                alt={product.alt || product.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
              {isSoldOut && (
                <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center rounded-full bg-foreground px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-background">
                  Sold out
                </span>
              )}
              {!isSoldOut && isOnSale && product.discountPercent != null && (
                <span className="pointer-events-none absolute right-4 top-4 inline-flex items-center rounded-full bg-[#e23b3b] px-3 py-1 text-[10px] font-medium tracking-[0.04em] text-white">
                  −{product.discountPercent}%
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-sm bg-muted"
                >
                  <Image
                    src={product.image}
                    alt={`${product.title} thumbnail ${i + 1}`}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-4">
            <h1 className="text-[26px] font-normal leading-[1.2] tracking-tight text-foreground sm:text-[30px] md:text-[32px]">
              {product.title}
            </h1>

            <div className="mt-4 flex items-baseline gap-3">
              {product.originalPrice && (
                <span className="text-[18px] text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              <span className={cn('text-[26px] font-medium md:text-[28px]', isOnSale && 'text-[#e23b3b]')}>
                {formatPrice(product.price)}
              </span>
            </div>

            <p
              className={cn(
                'mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em]',
                isSoldOut ? 'text-[#e23b3b]' : 'text-foreground/80',
              )}
            >
              <span
                className={cn(
                  'inline-block size-1.5 rounded-full',
                  isSoldOut ? 'bg-[#e23b3b]' : 'bg-emerald-500',
                )}
              />
              {isSoldOut ? 'Out of stock' : 'In stock'}
            </p>

            {product.description && (
              <p className="mt-6 max-w-xl text-[14px] leading-[1.85] text-muted-foreground md:text-[15px]">
                {product.description}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex h-12 items-center rounded-full border border-border/70 px-2">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="inline-flex size-8 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted"
                >
                  −
                </button>
                <span className="min-w-[28px] text-center text-[14px] tracking-wide">
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="inline-flex size-8 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                disabled={isSoldOut}
                onClick={handleAdd}
                className="group/cta inline-flex h-12 flex-1 items-center justify-center gap-3 rounded-full bg-foreground px-6 text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85 disabled:cursor-not-allowed disabled:bg-muted-foreground/40 sm:flex-none sm:min-w-[260px]"
              >
                <CartPlusIcon className="size-4" />
                {isSoldOut ? 'Sold out' : 'Add to cart'}
                {!isSoldOut && (
                  <span className="text-background/70">
                    · {formatPrice(lineTotal)}
                  </span>
                )}
              </button>
            </div>

            <dl className="mt-10 space-y-3 border-t border-border/70 pt-6 text-[12px] tracking-tight">
              {product.sku && (
                <div className="flex gap-3">
                  <dt className="w-[88px] shrink-0 uppercase tracking-[0.22em] text-muted-foreground">
                    SKU
                  </dt>
                  <dd className="text-foreground">{product.sku}</dd>
                </div>
              )}
              {product.category && (
                <div className="flex gap-3">
                  <dt className="w-[88px] shrink-0 uppercase tracking-[0.22em] text-muted-foreground">
                    Category
                  </dt>
                  <dd className="text-foreground">
                    <Link
                      href={`/shop/${product.category}`}
                      className="transition-opacity hover:opacity-70"
                    >
                      {findCategoryLabel(product.category)}
                    </Link>
                  </dd>
                </div>
              )}
              {tags.length > 0 && (
                <div className="flex gap-3">
                  <dt className="w-[88px] shrink-0 uppercase tracking-[0.22em] text-muted-foreground">
                    Tags
                  </dt>
                  <dd className="flex flex-wrap gap-x-2 gap-y-1 text-muted-foreground">
                    {tags.map((t, i) => (
                      <span key={t}>
                        <span className="text-foreground/70">{t}</span>
                        {i < tags.length - 1 && <span aria-hidden>,</span>}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
              {product.collections && product.collections.length > 0 && (
                <div className="flex gap-3">
                  <dt className="w-[88px] shrink-0 uppercase tracking-[0.22em] text-muted-foreground">
                    Collection
                  </dt>
                  <dd className="text-foreground">
                    {product.collections.map((c, i) => (
                      <span key={c}>
                        <Link
                          href={`/collections/${c}`}
                          className="transition-opacity hover:opacity-70"
                        >
                          {c.replace(/-/g, ' ')}
                        </Link>
                        {i < product.collections.length - 1 && ', '}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        <div className="border-t border-border/70 py-12 md:py-16">
          <div className="-mx-2 flex items-center gap-8 overflow-x-auto">
            {[
              { id: 'description', label: 'Description' },
              { id: 'reviews', label: 'Reviews (0)' },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={cn(
                  'relative pb-3 text-[12px] uppercase tracking-[0.22em] transition-colors duration-300',
                  tab === t.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {t.label}
                <span
                  className={cn(
                    'absolute -bottom-px left-0 h-px bg-foreground transition-all duration-300',
                    tab === t.id ? 'w-full' : 'w-0',
                  )}
                />
              </button>
            ))}
          </div>

          <div className="mt-8 max-w-3xl">
            {tab === 'description' && (
              <div className="text-[14px] leading-[1.85] text-muted-foreground md:text-[15px]">
                <h2 className="text-[20px] font-medium tracking-tight text-foreground md:text-[22px]">
                  Description
                </h2>
                {product.description && (
                  <p className="mt-4">{product.description}</p>
                )}
                {features.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex gap-3">
                        <span aria-hidden className="mt-2 inline-block size-1 shrink-0 rounded-full bg-foreground/60" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <p className="mt-6 text-[13px] leading-[1.7] text-muted-foreground/85">
                  Hand-illustrated and packed in Islamabad. Orders are confirmed on WhatsApp before dispatch.
                </p>
              </div>
            )}

            {tab === 'reviews' && (
              <div>
                <h2 className="text-[20px] font-medium tracking-tight text-foreground md:text-[22px]">
                  Customer reviews
                </h2>
                <p className="mt-4 text-[14px] leading-[1.7] text-muted-foreground">
                  No reviews yet.
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-sm border border-border/70 bg-paper px-6 py-8">
                    <p className="font-display text-[22px] italic font-light text-foreground">
                      Thank you — your review has been submitted.
                    </p>
                    <p className="mt-3 text-[13px] leading-[1.7] text-muted-foreground">
                      We hand-review submissions before publishing. You will see your note appear here within a few days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleReviewSubmit} className="mt-8 max-w-xl space-y-5">
                    <h3 className="text-[14px] font-medium tracking-tight text-foreground">
                      Be the first to review “{product.title}”
                    </h3>
                    <p className="text-[12px] leading-[1.7] text-muted-foreground">
                      Your email address will not be published. Required fields are marked *
                    </p>

                    <fieldset>
                      <legend className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        Your rating *
                      </legend>
                      <div
                        className="mt-3 inline-flex items-center gap-1"
                        onMouseLeave={() => setHoverRating(0)}
                      >
                        {[1, 2, 3, 4, 5].map((n) => {
                          const filled = (hoverRating || rating) >= n
                          return (
                            <button
                              key={n}
                              type="button"
                              aria-label={`${n} of 5 stars`}
                              onMouseEnter={() => setHoverRating(n)}
                              onClick={() => setRating(n)}
                              className="inline-flex size-9 items-center justify-center rounded-full transition-colors duration-200 hover:bg-muted"
                            >
                              <StarIcon
                                className={cn(
                                  'size-5 transition-colors duration-200',
                                  filled ? 'text-[#fbbf24]' : 'text-foreground/20',
                                )}
                              />
                            </button>
                          )
                        })}
                      </div>
                    </fieldset>

                    <label className="block">
                      <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        Your review *
                      </span>
                      <textarea
                        required
                        rows={5}
                        className="mt-3 w-full resize-none rounded-sm border border-border/70 bg-background px-4 py-3 text-[14px] tracking-tight text-foreground transition-colors focus:border-foreground focus:outline-none"
                      />
                    </label>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                          Name *
                        </span>
                        <input
                          type="text"
                          required
                          className="mt-3 h-11 w-full rounded-full border border-border/70 bg-background px-4 text-[14px] tracking-tight text-foreground transition-colors focus:border-foreground focus:outline-none"
                        />
                      </label>
                      <label className="block">
                        <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                          Email *
                        </span>
                        <input
                          type="email"
                          required
                          className="mt-3 h-11 w-full rounded-full border border-border/70 bg-background px-4 text-[14px] tracking-tight text-foreground transition-colors focus:border-foreground focus:outline-none"
                        />
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85"
                    >
                      Submit review
                      <span aria-hidden>→</span>
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetail
