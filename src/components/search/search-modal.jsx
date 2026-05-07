'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'

import { useUI } from '@/components/providers/ui-context'
import { CloseIcon, SearchIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { ALL_PRODUCTS, PRODUCT_CURRENCY, SHOP_CATEGORIES } from '@/constants/site'

const formatPrice = (n) =>
  n == null ? '' : `${PRODUCT_CURRENCY}${n.toLocaleString()}`

const EASE = 'ease-[cubic-bezier(0.22,1,0.36,1)]'

const POPULAR = ['Leather Journals', 'Calendar', 'Stickers', 'Bundles', 'Memo Pads']

const SearchModal = () => {
  const { searchOpen, closeSearch } = useUI()
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 200)
      return () => clearTimeout(t)
    }
    setQuery('')
  }, [searchOpen])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return ALL_PRODUCTS.filter((p) =>
      [p.title, p.category, p.description].some((field) =>
        (field || '').toLowerCase().includes(q),
      ),
    ).slice(0, 8)
  }, [query])

  const showSuggestions = query.trim().length === 0

  return (
    <div
      aria-hidden={!searchOpen}
      className={cn(
        'fixed inset-0 z-[60]',
        searchOpen ? 'pointer-events-auto' : 'pointer-events-none',
      )}
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={closeSearch}
        className={cn(
          'absolute inset-0 bg-black/40 transition-opacity duration-500',
          EASE,
          searchOpen ? 'opacity-100' : 'opacity-0',
        )}
        tabIndex={searchOpen ? 0 : -1}
      />

      <div
        role="dialog"
        aria-label="Search products"
        aria-modal="true"
        className={cn(
          'absolute inset-x-0 top-0 origin-top bg-background shadow-[0_24px_60px_-30px_rgba(0,0,0,0.25)] transition-transform duration-500',
          EASE,
          searchOpen ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="mx-auto w-full max-w-[1100px] px-6 py-8 md:px-10 md:py-12">
          <div className="flex items-start justify-between gap-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
              Search the studio
            </p>
            <button
              type="button"
              onClick={closeSearch}
              aria-label="Close search"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted"
            >
              <CloseIcon className="size-4" />
            </button>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex items-center gap-3 border-b border-border/70 pb-4"
          >
            <SearchIcon className="size-5 text-muted-foreground" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search journals, stickers, bundles…"
              className="h-10 flex-1 bg-transparent font-display text-[20px] italic font-light tracking-tight text-foreground placeholder:text-muted-foreground/70 focus:outline-none md:text-[26px]"
              aria-label="Search products"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Clear
              </button>
            )}
          </form>

          {showSuggestions ? (
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                  Popular searches
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {POPULAR.map((p) => (
                    <li key={p}>
                      <button
                        type="button"
                        onClick={() => setQuery(p)}
                        className="inline-flex items-center rounded-full border border-border/70 px-4 py-2 text-[12px] tracking-tight text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
                      >
                        {p}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                  Browse categories
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2">
                  {SHOP_CATEGORIES.slice(0, 8).map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={c.slug === 'all' ? '/shop' : `/shop/${c.slug}`}
                        onClick={closeSearch}
                        className="block py-1.5 text-[13px] tracking-tight text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="mt-12 text-center">
              <p className="font-display text-[24px] italic font-light text-foreground">
                No matches yet.
              </p>
              <p className="mt-3 text-[13px] text-muted-foreground">
                Try a different word, or{' '}
                <Link
                  href="/shop"
                  onClick={closeSearch}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  browse the full shop
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                {results.length} match{results.length === 1 ? '' : 'es'}
              </p>
              <ul className="mt-5 grid gap-3">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={p.href}
                      onClick={closeSearch}
                      className="group/result flex items-center gap-4 rounded-sm px-2 py-2 transition-colors duration-300 hover:bg-muted"
                    >
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-muted">
                        <Image
                          src={p.image}
                          alt={p.alt || p.title}
                          fill
                          sizes="56px"
                          className="object-cover transition-transform duration-500 group-hover/result:scale-[1.05]"
                        />
                      </div>
                      <div className="flex flex-1 items-center justify-between gap-4">
                        <div>
                          <p className="text-[14px] tracking-tight text-foreground">
                            {p.title}
                          </p>
                          {p.category && (
                            <p className="text-[12px] text-muted-foreground">
                              {p.category.replace(/-/g, ' ')}
                            </p>
                          )}
                        </div>
                        <span className="text-[14px] font-medium text-foreground">
                          {formatPrice(p.price)}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border/70 pt-5">
                <Link
                  href="/shop"
                  onClick={closeSearch}
                  className="group/cta inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground"
                >
                  <span className="relative pb-1">
                    See all results in the shop
                    <span className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-100 bg-foreground transition-transform duration-500 ease-out group-hover/cta:scale-x-50" />
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchModal
