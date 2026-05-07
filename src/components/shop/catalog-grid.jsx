import Link from 'next/link'

import Container from '@/components/ui/container'
import ProductCard from '@/components/home/product-card'
import { SHOP_CATEGORIES } from '@/constants/site'

const CatalogGrid = ({ products, currentSlug = 'all', showCategoryRail = true }) => {
  return (
    <section className="bg-background">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          {showCategoryRail && (
            <div className="mb-10 -mx-2 flex items-center gap-2 overflow-x-auto pb-2 lg:mb-14 lg:gap-3">
              {SHOP_CATEGORIES.map((c) => {
                const isActive = c.slug === currentSlug
                return (
                  <Link
                    key={c.slug}
                    href={c.slug === 'all' ? '/shop' : `/shop/${c.slug}`}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                      isActive
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border/70 text-muted-foreground hover:border-foreground hover:text-foreground'
                    }`}
                  >
                    {c.label}
                  </Link>
                )
              })}
            </div>
          )}

          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-display text-[28px] italic font-light text-foreground">
                Nothing here yet.
              </p>
              <p className="mt-3 max-w-md text-[14px] text-muted-foreground">
                We are restocking this category. In the meantime, take a peek at our latest arrivals.
              </p>
              <Link
                href="/shop"
                className="group/cta mt-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground"
              >
                <span className="relative pb-1">
                  Shop all
                  <span className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-100 bg-foreground transition-transform duration-500 ease-out group-hover/cta:scale-x-50" />
                </span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-6 md:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}

export default CatalogGrid
