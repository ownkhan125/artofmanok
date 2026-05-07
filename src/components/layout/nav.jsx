'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import Logo from '@/components/layout/logo'
import ShopMegaMenu from '@/components/layout/shop-mega-menu'
import {
  SearchIcon,
  UserIcon,
  BagIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@/components/ui/icons'
import { cn } from '@/lib/cn'
import { NAV_LINKS, MOBILE_DRAWER_GROUPS } from '@/constants/site'
import { useUI } from '@/components/providers/ui-context'
import { useCart } from '@/components/providers/cart-context'

const SHOP_CLOSE_DELAY = 140

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const closeTimerRef = useRef(null)
  const { openSearch, openCart } = useUI()
  const { itemCount } = useCart()

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      return () => {
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.left = ''
        document.body.style.right = ''
        document.body.style.overflow = ''
        document.documentElement.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
    return undefined
  }, [open])

  useEffect(() => () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
  }, [])

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [])

  const openShop = useCallback(() => {
    cancelClose()
    setShopOpen(true)
  }, [cancelClose])

  const scheduleCloseShop = useCallback(() => {
    cancelClose()
    closeTimerRef.current = setTimeout(() => {
      setShopOpen(false)
      closeTimerRef.current = null
    }, SHOP_CLOSE_DELAY)
  }, [cancelClose])

  const closeShopImmediate = useCallback(() => {
    cancelClose()
    setShopOpen(false)
  }, [cancelClose])

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background animate-fade-in">
      <div className="mx-auto grid h-[72px] w-full max-w-[1500px] grid-cols-3 items-center px-4 sm:h-20 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:gap-8">
        <div className="flex items-center justify-start lg:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="-ml-2 inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
          >
            <MenuIcon />
          </button>
        </div>

        <div className="hidden items-center lg:col-span-1 lg:flex lg:min-w-max lg:justify-start">
          <Logo priority />
        </div>

        <nav className="hidden items-center justify-center lg:flex">
          <ul className="flex items-center gap-9 xl:gap-12">
            {NAV_LINKS.map((link) => {
              const isShop = link.label === 'Shop'
              const isActive = isShop && shopOpen

              return (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={isShop ? openShop : undefined}
                  onMouseLeave={isShop ? scheduleCloseShop : undefined}
                >
                  <Link
                    href={link.href}
                    aria-haspopup={isShop ? 'menu' : undefined}
                    aria-expanded={isShop ? shopOpen : undefined}
                    onFocus={isShop ? openShop : undefined}
                    className="group relative inline-flex items-center gap-1 py-2 text-[14px] font-normal tracking-wide text-foreground"
                  >
                    <span
                      className={cn(
                        'whitespace-nowrap transition-opacity',
                        isActive ? 'opacity-60' : 'group-hover:opacity-60',
                      )}
                    >
                      {link.label}
                    </span>
                    {link.hasDropdown && (
                      <ChevronDownIcon
                        className={cn(
                          'size-3.5 transition-all duration-300',
                          isActive
                            ? 'rotate-180 opacity-100'
                            : 'opacity-70 group-hover:opacity-100',
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        'pointer-events-none absolute -bottom-0.5 left-0 h-px bg-foreground transition-all duration-300 ease-out',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full',
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center justify-center lg:hidden">
          <Logo priority />
        </div>

        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Search"
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted active:scale-95"
          >
            <SearchIcon />
          </button>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden size-10 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted active:scale-95 md:inline-flex"
          >
            <UserIcon />
          </Link>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`}
            className="relative inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-muted active:scale-95"
          >
            <BagIcon />
            <span
              className={cn(
                'absolute -right-0.5 -top-0.5 inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#e23b3b] px-1 text-[10px] font-medium leading-none text-white transition-transform duration-300',
                itemCount === 0 && 'scale-90 opacity-80',
              )}
            >
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      <ShopMegaMenu
        open={shopOpen}
        onMouseEnter={openShop}
        onMouseLeave={scheduleCloseShop}
        onSelect={closeShopImmediate}
      />

      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/40"
        />
        <aside
          className={cn(
            'absolute left-0 top-0 flex h-full w-[88%] max-w-[360px] flex-col bg-background shadow-2xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-border px-5">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 [-webkit-overflow-scrolling:touch]">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => {
                const drawerGroup = MOBILE_DRAWER_GROUPS.find(
                  (g) => g.label === link.label,
                )
                if (drawerGroup) {
                  return (
                    <li key={link.href} className="border-b border-border/70">
                      <Link
                        href={drawerGroup.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between py-4 text-[15px] tracking-wide text-foreground"
                      >
                        <span>{link.label}</span>
                      </Link>
                      <ul className="-mt-2 mb-4 pl-4">
                        {drawerGroup.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="block py-2 text-[13px] tracking-wide text-muted-foreground hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {drawerGroup.collections?.length > 0 && (
                        <div className="-mt-2 mb-4 pl-4">
                          <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/70">
                            Collections
                          </p>
                          <ul className="mt-1">
                            {drawerGroup.collections.map((c) => (
                              <li key={c.href}>
                                <Link
                                  href={c.href}
                                  onClick={() => setOpen(false)}
                                  className="block py-2 text-[13px] tracking-wide text-muted-foreground hover:text-foreground"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  )
                }
                return (
                  <li key={link.href} className="border-b border-border/70">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 text-[15px] tracking-wide text-foreground"
                    >
                      <span>{link.label}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-6 flex items-center gap-5 text-[13px] text-muted-foreground">
              <Link
                href="/account"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <UserIcon className="size-4" /> Account
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  )
}

export default Nav
