'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Container from '@/components/ui/container'
import {
  ArrowRightIcon,
  ArrowUpIcon,
  FacebookIcon,
  InstagramIcon,
} from '@/components/ui/icons'
import { FOOTER_LINKS, SITE_CONFIG } from '@/constants/site'

const SOCIAL_ICON = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
}

const FOOTER_GROUPS = [
  {
    label: 'Help',
    items: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/faq', label: "FAQ's" },
      { href: '/about', label: 'About Us' },
    ],
  },
  {
    label: 'Shop',
    items: [
      { href: '/shop', label: 'View All' },
      { href: '/shop/leather-journals', label: 'Leather Journals' },
      { href: '/shop/journals', label: 'Journals' },
      { href: '/shop/calendar', label: 'Calendar' },
      { href: '/shop/bundles', label: 'Bundles' },
    ],
  },
]

const Footer = () => {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const scrollTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-ink text-white">
      <Container>
        <div className="space-y-12 py-16 md:py-20 lg:grid lg:grid-cols-12 lg:gap-12 lg:space-y-0 lg:py-24">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label={`${SITE_CONFIG.name} — ${SITE_CONFIG.fullName}`}
              className="inline-flex items-center"
            >
              <Image
                src="/assets/images/logo.png"
                alt={SITE_CONFIG.fullName}
                width={300}
                height={68}
                sizes="160px"
                className="h-10 w-auto invert"
              />
            </Link>
            <p className="mt-6 max-w-sm font-display text-[20px] font-light italic leading-[1.25] text-white">
              Considered stationery, made for desks that mean something.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-6 inline-block text-[13px] tracking-wide text-white/60 transition-colors hover:text-white"
            >
              {SITE_CONFIG.email}
            </a>
            <ul className="mt-7 flex items-center gap-3">
              {SITE_CONFIG.social.map((s) => {
                const Icon = SOCIAL_ICON[s.id]
                if (!Icon) return null
                return (
                  <li key={s.id}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex size-9 items-center justify-center rounded-full border border-white/40 text-white/85 transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
                    >
                      <Icon className="size-3.5" />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:col-span-4 lg:gap-12">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.label}>
                <h3 className="text-[12px] font-medium uppercase tracking-[0.28em] text-white">
                  {group.label}
                </h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[13px] tracking-wide text-white/60 transition-colors duration-200 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-[12px] font-medium uppercase tracking-[0.28em] text-white">
              Sign up for email
            </h3>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-white/60">
              First dibs on new arrivals, quiet sales, and the occasional letter from the studio.
            </p>
            <form onSubmit={handleSubmit} className="mt-6">
              <label htmlFor="footer-email" className="sr-only">
                Your email address
              </label>
              <div className="flex h-12 w-full items-center rounded-full bg-[#1d1d1d] pl-5 pr-1.5 ring-1 ring-white/10 transition-colors focus-within:ring-white/30 sm:max-w-[360px]">
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-full flex-1 bg-transparent text-[13px] tracking-wide text-white placeholder:text-white/45 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group/sub inline-flex h-9 items-center gap-2 rounded-full bg-white px-5 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-white/90"
                >
                  Subscribe
                  <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/sub:translate-x-0.5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/55">
            &copy; {year} {SITE_CONFIG.fullName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.28em] text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <button
        type="button"
        aria-label="Back to top"
        onClick={scrollTop}
        className="absolute bottom-6 right-6 inline-flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:-translate-y-0.5 sm:bottom-8 sm:right-8"
      >
        <ArrowUpIcon className="size-4" />
      </button>
    </footer>
  )
}

export default Footer
