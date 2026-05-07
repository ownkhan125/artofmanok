'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'

import { CartPlusIcon, EyeIcon, HeartIcon } from '@/components/ui/icons'
import SafeImage from '@/components/ui/safe-image'
import { cn } from '@/lib/cn'
import { PRODUCT_CURRENCY, findCategory } from '@/constants/site'
import { useCart } from '@/components/providers/cart-context'
import { useUI } from '@/components/providers/ui-context'

const formatPrice = (n) => {
  if (n == null) return null
  return `${PRODUCT_CURRENCY}${n.toLocaleString()}`
}

// Single shared easing + timings keep every hover layer in sync
const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'
const DURATION_MEDIUM = 'duration-500'
const DURATION_SLOW = 'duration-[1500ms]'

const stopAnd = (fn) => (e) => {
  e.preventDefault()
  e.stopPropagation()
  fn?.(e)
}

const ProductCard = ({ product }) => {
  const { title, image, alt, price, originalPrice, badge, discountPercent, href, category } = product
  const router = useRouter()
  const { addItem } = useCart()
  const { openCart } = useUI()
  const isSoldOut = badge === 'soldout'
  const isOnSale = badge === 'sale'
  const categoryLabel = category ? findCategory(category)?.label : null

  const handleQuickView = stopAnd(() => router.push(href))
  const handleWishlist = stopAnd(() => {
    /* wishlist hook lands here */
  })
  const handleAddToCart = stopAnd(() => {
    addItem(product, 1)
    openCart()
  })

  return (
    <article
      className={cn(
        'group/card relative flex h-full cursor-pointer flex-col transition-transform',
        DURATION_MEDIUM,
        EASE,
        'hover:-translate-y-1.5 focus-within:-translate-y-1.5',
      )}
    >
      <Link
        href={href}
        aria-label={`View ${title}`}
        tabIndex={isSoldOut ? -1 : 0}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
      >
        <span className="sr-only">View {title}</span>
      </Link>

      <div
        className={cn(
          'relative w-full overflow-hidden rounded-2xl bg-muted ring-1 ring-black/[0.05] transition-all',
          DURATION_MEDIUM,
          EASE,
          'shadow-[0_1px_2px_rgba(15,15,15,0.04)]',
          'group-hover/card:ring-black/[0.10]',
          'group-hover/card:shadow-[0_30px_60px_-28px_rgba(15,15,15,0.22),0_10px_22px_-14px_rgba(15,15,15,0.12)]',
        )}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <SafeImage
            src={image}
            alt={alt || title}
            fill
            sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 25vw, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 75vw"
            className={cn(
              'object-cover transition-transform',
              DURATION_SLOW,
              EASE,
              'group-hover/card:scale-[1.05]',
              isSoldOut && 'opacity-85',
            )}
          />
          <span
            aria-hidden
            className={cn(
              'pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.06] via-transparent to-transparent opacity-0 transition-opacity',
              DURATION_MEDIUM,
              EASE,
              'group-hover/card:opacity-100',
            )}
          />
        </div>

        {isSoldOut && (
          <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-foreground/95 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-background backdrop-blur-sm">
            Sold out
          </span>
        )}
        {!isSoldOut && isOnSale && discountPercent != null && (
          <span className="pointer-events-none absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-white/92 px-2.5 py-1 text-[10.5px] font-semibold tracking-[0.04em] text-foreground shadow-[0_2px_10px_-2px_rgba(15,15,15,0.18)] ring-1 ring-black/[0.06] backdrop-blur-sm">
            −{discountPercent}%
          </span>
        )}

        <div
          className={cn(
            'absolute right-3 top-3 z-10 flex translate-x-3 flex-col gap-2 opacity-0 transition-all',
            DURATION_MEDIUM,
            EASE,
            'group-hover/card:translate-x-0 group-hover/card:opacity-100',
          )}
        >
          <button
            type="button"
            onClick={handleQuickView}
            aria-label={`Quick view ${title}`}
            className={cn(
              'inline-flex size-9 items-center justify-center rounded-full bg-background text-foreground shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] transition-colors duration-300',
              'hover:bg-foreground hover:text-background',
            )}
          >
            <EyeIcon className="size-4" />
          </button>
          <button
            type="button"
            onClick={handleWishlist}
            aria-label={`Save ${title} to wishlist`}
            className={cn(
              'inline-flex size-9 items-center justify-center rounded-full bg-background text-foreground shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)] transition-colors duration-300',
              'hover:bg-foreground hover:text-background',
            )}
          >
            <HeartIcon className="size-4" />
          </button>
        </div>

        <div
          className={cn(
            'absolute inset-x-0 bottom-0 z-10 translate-y-full opacity-0 transition-all',
            DURATION_MEDIUM,
            EASE,
            'group-hover/card:translate-y-0 group-hover/card:opacity-100',
          )}
        >
          <div className="bg-gradient-to-t from-white via-white/85 to-transparent px-4 pb-4 pt-12">
            {isSoldOut ? (
              <button
                type="button"
                onClick={handleQuickView}
                className="inline-flex h-10 w-full items-center justify-center rounded-full bg-foreground text-[11px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85"
              >
                Read more
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAddToCart}
                className="group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-foreground text-[11px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/85"
              >
                <CartPlusIcon className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col px-0.5">
        {categoryLabel && (
          <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-muted-foreground/85">
            {categoryLabel}
          </p>
        )}
        <h3 className="font-display mt-2.5 line-clamp-2 text-[18px] font-light italic leading-[1.2] tracking-[-0.005em] text-foreground sm:text-[20px]">
          {title}
        </h3>
        <div className="mt-2.5 flex items-baseline gap-2.5 text-foreground">
          {originalPrice && (
            <span className="text-[13px] text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
          <span className="text-[14px] font-semibold tracking-[0.01em]">
            {formatPrice(price)}
          </span>
        </div>
      </div>
    </article>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    badge: PropTypes.oneOf(['sale', 'soldout', null]),
    discountPercent: PropTypes.number,
    href: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductCard
