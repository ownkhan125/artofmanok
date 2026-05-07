'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useCart } from '@/components/providers/cart-context'
import { useUI } from '@/components/providers/ui-context'
import { CloseIcon, ArrowRightIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { PRODUCT_CURRENCY } from '@/constants/site'

const formatPrice = (n) =>
  n == null ? '' : `${PRODUCT_CURRENCY}${n.toLocaleString()}`

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

const CartDrawer = () => {
  const { cartOpen, closeCart } = useUI()
  const { items, itemCount, subtotal, removeItem, setQty } = useCart()

  return (
    <div
      aria-hidden={!cartOpen}
      className={cn(
        'fixed inset-0 z-[60]',
        cartOpen ? 'pointer-events-auto' : 'pointer-events-none',
      )}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
        className={cn(
          'absolute inset-0 bg-black/40 transition-opacity duration-500',
          EASE,
          cartOpen ? 'opacity-100' : 'opacity-0',
        )}
        tabIndex={cartOpen ? 0 : -1}
      />

      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={cn(
          'absolute right-0 top-0 flex h-full w-full max-w-[420px] flex-col bg-background shadow-[0_-12px_40px_-20px_rgba(0,0,0,0.25)] transition-transform duration-500',
          EASE,
          cartOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between border-b border-border/70 px-6 py-5">
          <h2 className="text-[14px] font-medium uppercase tracking-[0.22em] text-foreground">
            Shopping cart{itemCount > 0 ? ` · ${itemCount}` : ''}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="inline-flex size-9 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <p className="font-display text-[28px] italic font-light leading-tight text-foreground">
              Your cart is empty.
            </p>
            <p className="max-w-xs text-[13px] leading-[1.7] text-muted-foreground">
              You may check out all the available products and pick a few you love over in the shop.
            </p>
            <Link
              href="/shop"
              onClick={closeCart}
              className="group/cta mt-2 inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-7 text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85"
            >
              Return to shop
              <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border/70 overflow-y-auto px-6 py-4">
              {items.map((it) => (
                <li key={it.id} className="flex gap-4 py-5">
                  <div className="relative size-20 shrink-0 overflow-hidden rounded-sm bg-muted">
                    <Image
                      src={it.image}
                      alt={it.alt || it.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <Link
                        href={it.href}
                        onClick={closeCart}
                        className="line-clamp-2 text-[13px] leading-[1.4] tracking-tight text-foreground transition-opacity hover:opacity-70"
                      >
                        {it.title}
                      </Link>
                      <button
                        type="button"
                        aria-label={`Remove ${it.title}`}
                        onClick={() => removeItem(it.id)}
                        className="-mr-2 inline-flex size-8 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <CloseIcon className="size-3.5" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <div className="inline-flex h-9 items-center rounded-full border border-border/70 px-1">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => setQty(it.id, it.qty - 1)}
                          className="inline-flex size-7 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                        >
                          −
                        </button>
                        <span className="min-w-[24px] text-center text-[13px] tracking-wide">
                          {it.qty}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => setQty(it.id, it.qty + 1)}
                          className="inline-flex size-7 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-[14px] font-medium text-foreground">
                        {formatPrice(it.price * it.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-border/70 px-6 py-5">
              <div className="flex items-baseline justify-between">
                <span className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                  Subtotal
                </span>
                <span className="text-[18px] font-medium text-foreground">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-2 text-[12px] leading-[1.6] text-muted-foreground">
                Shipping and taxes are confirmed on WhatsApp before dispatch.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="group/cta inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85"
                >
                  Checkout
                  <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </Link>
                <button
                  type="button"
                  onClick={closeCart}
                  className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer
