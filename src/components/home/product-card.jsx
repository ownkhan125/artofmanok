'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'

import { CartPlusIcon, EyeIcon, HeartIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { PRODUCT_CURRENCY } from '@/constants/site'
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
  const { title, image, alt, price, originalPrice, badge, discountPercent, href } = product
  const router = useRouter()
  const { addItem } = useCart()
  const { openCart } = useUI()
  const isSoldOut = badge === 'soldout'
  const isOnSale = badge === 'sale'

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
        className="absolute inset-0 z-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2"
      >
        <span className="sr-only">View {title}</span>
      </Link>

      <div
        className={cn(
          'relative w-full overflow-hidden rounded-sm bg-muted transition-shadow',
          DURATION_MEDIUM,
          EASE,
          'shadow-[0_1px_2px_rgba(15,15,15,0.04)]',
          'group-hover/card:shadow-[0_24px_48px_-24px_rgba(15,15,15,0.18),0_8px_18px_-12px_rgba(15,15,15,0.12)]',
        )}
      >
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={image}
            alt={alt || title}
            fill
            sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 25vw, (min-width: 768px) 30vw, (min-width: 640px) 45vw, 75vw"
            className={cn(
              'object-cover transition-transform',
              DURATION_SLOW,
              EASE,
              'group-hover/card:scale-[1.05]',
              isSoldOut && 'opacity-90',
            )}
          />
        </div>

        {isSoldOut && (
          <span className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center rounded-full bg-foreground px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-background">
            Sold out
          </span>
        )}
        {!isSoldOut && isOnSale && discountPercent != null && (
          <span className="pointer-events-none absolute right-3 top-3 z-10 inline-flex items-center rounded-full bg-[#e23b3b] px-3 py-1 text-[10px] font-medium tracking-[0.04em] text-white">
            −{discountPercent}%
          </span>
        )}

        <div
          className={cn(
            'absolute right-3 top-12 z-10 flex translate-x-3 flex-col gap-2 opacity-0 transition-all',
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

      <div className="mt-4 flex flex-1 flex-col">
        <h3
          className={cn(
            'line-clamp-2 min-h-[40px] text-[13px] font-normal leading-[1.4] tracking-tight text-foreground transition-colors',
            DURATION_MEDIUM,
            EASE,
            'group-hover/card:text-foreground/65',
          )}
        >
          {title}
        </h3>
        <div className="mt-1.5 flex items-baseline gap-2 text-[13px] tracking-[0.02em] text-foreground">
          {originalPrice && (
            <span className="text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
          <span className={cn('font-medium', isOnSale && 'text-[#e23b3b]')}>
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
