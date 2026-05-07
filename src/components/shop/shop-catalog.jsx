'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'

import Container from '@/components/ui/container'
import ProductCard from '@/components/home/product-card'
import Pagination from '@/components/shop/pagination'
import {
  ChevronDownIcon,
  CloseIcon,
  FilterIcon,
} from '@/components/ui/icons'
import { SHOP_CATEGORIES } from '@/constants/site'

const PER_PAGE = 16

const SORT_OPTIONS = [
  { value: 'menu_order', label: 'Default sorting' },
  { value: 'popularity', label: 'Sort by popularity' },
  { value: 'date', label: 'Sort by latest' },
  { value: 'price', label: 'Sort by price: low to high' },
  { value: 'price-desc', label: 'Sort by price: high to low' },
]

const sortProducts = (list, key) => {
  const arr = [...list]
  switch (key) {
    case 'price':
      return arr.sort((a, b) => (a.price ?? 0) - (b.price ?? 0))
    case 'price-desc':
      return arr.sort((a, b) => (b.price ?? 0) - (a.price ?? 0))
    case 'date':
      return arr.reverse()
    case 'popularity':
      return arr.sort((a, b) => (b.discountPercent ?? 0) - (a.discountPercent ?? 0))
    case 'menu_order':
    default:
      return arr
  }
}

const ShopCatalog = ({ products, currentSlug = 'all' }) => {
  const [sort, setSort] = useState('menu_order')
  const [page, setPage] = useState(1)
  const [filterOpen, setFilterOpen] = useState(false)
  const filterRef = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (!filterOpen) return
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setFilterOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [filterOpen])

  useEffect(() => {
    setPage(1)
  }, [sort, currentSlug])

  const sorted = useMemo(() => sortProducts(products, sort), [products, sort])
  const totalPages = Math.max(1, Math.ceil(sorted.length / PER_PAGE))
  const paged = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE)
  const start = sorted.length === 0 ? 0 : (page - 1) * PER_PAGE + 1
  const end = Math.min(page * PER_PAGE, sorted.length)

  return (
    <section className="bg-background">
      <Container>
        <div className="border-y border-border/70 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative" ref={filterRef}>
              <button
                type="button"
                onClick={() => setFilterOpen((o) => !o)}
                aria-expanded={filterOpen}
                aria-haspopup="menu"
                className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground transition-opacity hover:opacity-70"
              >
                <FilterIcon className="size-4" />
                Filter
              </button>
              {filterOpen && (
                <div
                  role="menu"
                  className="absolute left-0 top-full z-20 mt-3 w-[260px] rounded-sm border border-border/70 bg-background p-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.18)]"
                >
                  <p className="px-3 pb-2 pt-1 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                    Categories
                  </p>
                  <ul className="max-h-[60vh] overflow-y-auto">
                    {SHOP_CATEGORIES.map((c) => {
                      const active = c.slug === currentSlug
                      const href = c.slug === 'all' ? '/shop' : `/shop/${c.slug}`
                      return (
                        <li key={c.slug}>
                          <Link
                            href={href}
                            onClick={() => setFilterOpen(false)}
                            className={
                              active
                                ? 'flex items-center justify-between rounded-sm bg-muted px-3 py-2 text-[13px] font-medium tracking-tight text-foreground'
                                : 'flex items-center justify-between rounded-sm px-3 py-2 text-[13px] tracking-tight text-muted-foreground transition-colors hover:bg-muted hover:text-foreground'
                            }
                          >
                            <span>{c.label}</span>
                            {active && <CloseIcon className="size-3" />}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>

            <p className="hidden text-[12px] tracking-wide text-muted-foreground sm:block">
              {sorted.length === 0
                ? 'No products found'
                : `Showing ${start}–${end} of ${sorted.length}`}
            </p>

            <label className="relative inline-flex items-center gap-2 text-[12px] tracking-wide text-foreground">
              <span className="sr-only">Sort by</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none rounded-full border border-border/70 bg-background py-2 pl-4 pr-9 text-[12px] tracking-wide text-foreground transition-colors hover:border-foreground focus:border-foreground focus:outline-none"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-3 size-3 text-muted-foreground" />
            </label>
          </div>
        </div>

        <div className="py-12 md:py-16">
          {paged.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="font-display text-[28px] italic font-light text-foreground">
                Nothing here yet.
              </p>
              <p className="mt-3 max-w-md text-[14px] text-muted-foreground">
                We are restocking this category. Take a peek at our latest arrivals in the meantime.
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
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 md:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              {paged.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
      </Container>
    </section>
  )
}

export default ShopCatalog
