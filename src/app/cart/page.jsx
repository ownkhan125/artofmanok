'use client'

import Link from 'next/link'

import Container from '@/components/ui/container'
import PageHero from '@/components/ui/page-hero'
import ProductCard from '@/components/home/product-card'
import { ArrowRightIcon, CloseIcon } from '@/components/ui/icons'
import SafeImage from '@/components/ui/safe-image'
import { useCart } from '@/components/providers/cart-context'
import { ALL_PRODUCTS, PRODUCT_CURRENCY } from '@/constants/site'

const formatPrice = (n) =>
  n == null ? '' : `${PRODUCT_CURRENCY}${n.toLocaleString()}`

const CartPage = () => {
  const { items, subtotal, itemCount, removeItem, setQty, hydrated } = useCart()
  const suggested = ALL_PRODUCTS.slice(0, 4)

  return (
    <>
      <PageHero
        eyebrow="Bag"
        title="Cart."
        description="Your considered choices live here. Take your time."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Cart' },
        ]}
      />

      <section className="bg-background">
        <Container>
          <div className="py-16 md:py-20 lg:py-24">
            {!hydrated || items.length === 0 ? (
              <div className="flex flex-col items-center gap-6 rounded-sm border border-border/70 bg-paper px-6 py-16 text-center md:py-24">
                <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                  Empty cart
                </p>
                <h2 className="font-display text-[28px] italic font-light leading-tight text-foreground md:text-[36px]">
                  Your cart is empty.
                </h2>
                <p className="max-w-md text-[14px] leading-[1.7] text-muted-foreground">
                  You may check out all the available products and pick a few you love over in the shop.
                </p>
                <Link
                  href="/shop"
                  className="group/cta mt-2 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85"
                >
                  Continue shopping
                  <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </Link>
              </div>
            ) : (
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-8">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                    Bag · {itemCount} {itemCount === 1 ? 'item' : 'items'}
                  </p>
                  <ul className="mt-5 divide-y divide-border/70 border-y border-border/70">
                    {items.map((it) => (
                      <li key={it.id} className="flex gap-5 py-6">
                        <Link
                          href={it.href}
                          className="relative size-24 shrink-0 overflow-hidden rounded-sm bg-muted"
                        >
                          <SafeImage
                            src={it.image}
                            alt={it.alt || it.title}
                            fill
                            sizes="96px"
                            className="object-cover"
                          />
                        </Link>
                        <div className="flex flex-1 flex-col gap-3">
                          <div className="flex items-start justify-between gap-3">
                            <Link
                              href={it.href}
                              className="text-[14px] tracking-tight text-foreground transition-opacity hover:opacity-70 md:text-[15px]"
                            >
                              {it.title}
                            </Link>
                            <button
                              type="button"
                              onClick={() => removeItem(it.id)}
                              aria-label={`Remove ${it.title}`}
                              className="-mr-2 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                            >
                              <CloseIcon className="size-3.5" />
                            </button>
                          </div>
                          <div className="mt-auto flex items-end justify-between">
                            <div className="inline-flex h-10 items-center rounded-full border border-border/70 px-1">
                              <button
                                type="button"
                                onClick={() => setQty(it.id, it.qty - 1)}
                                aria-label="Decrease quantity"
                                className="inline-flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                              >
                                −
                              </button>
                              <span className="min-w-[28px] text-center text-[13px] tracking-wide">
                                {it.qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => setQty(it.id, it.qty + 1)}
                                aria-label="Increase quantity"
                                className="inline-flex size-8 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-[15px] font-medium text-foreground">
                              {formatPrice(it.price * it.qty)}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className="lg:col-span-4">
                  <div className="rounded-sm border border-border/70 bg-paper p-6 md:p-8">
                    <h2 className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                      Order summary
                    </h2>
                    <dl className="mt-6 space-y-3 text-[13px] tracking-tight text-foreground">
                      <div className="flex items-baseline justify-between">
                        <dt className="text-muted-foreground">Subtotal</dt>
                        <dd className="font-medium">{formatPrice(subtotal)}</dd>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <dt className="text-muted-foreground">Shipping</dt>
                        <dd className="text-muted-foreground">Confirmed on WhatsApp</dd>
                      </div>
                    </dl>
                    <div className="mt-6 flex items-baseline justify-between border-t border-border/70 pt-5 text-foreground">
                      <span className="text-[13px] uppercase tracking-[0.22em]">Total</span>
                      <span className="text-[20px] font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <button
                      type="button"
                      className="group/cta mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85"
                    >
                      Checkout
                      <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                    </button>
                    <Link
                      href="/shop"
                      className="mt-4 block text-center text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      Continue shopping
                    </Link>
                  </div>
                </aside>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container>
          <div className="py-16 md:py-20">
            <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              You might love
            </p>
            <h2 className="mt-4 font-display text-[28px] italic font-light leading-tight text-foreground md:text-[36px]">
              Studio favourites.
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
              {suggested.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CartPage
