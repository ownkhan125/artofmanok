'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

import { SHOP_MENU } from '@/constants/site'
import { ArrowRightIcon } from '@/components/ui/icons'

const panelVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
  },
}

const categoryListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.025, delayChildren: 0.08 } },
  exit: {},
}

const categoryItemVariants = {
  hidden: { opacity: 0, x: -6 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

const featuredListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const featuredItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.18 } },
}

const ShopMegaMenu = ({ open, onMouseEnter, onMouseLeave, onSelect }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="shop-mega-menu"
          variants={panelVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          role="region"
          aria-label="Shop menu"
          className="absolute left-0 right-0 top-full z-30 hidden border-t border-border/70 bg-background shadow-[0_30px_60px_-30px_rgba(15,15,15,0.18)] lg:block"
        >
          <div className="mx-auto grid w-full max-w-[1500px] grid-cols-12 gap-10 px-8 py-12 lg:gap-14 lg:px-12 lg:py-14">
            <motion.nav
              aria-label="Shop categories"
              variants={categoryListVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="col-span-12 md:col-span-3"
            >
              <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                Categories
              </p>
              <ul className="mt-7 flex flex-col">
                {SHOP_MENU.categories.map((c) => (
                  <motion.li key={c.href} variants={categoryItemVariants}>
                    <Link
                      href={c.href}
                      onClick={onSelect}
                      className="group/item flex items-center justify-between border-b border-transparent py-2.5 text-[14px] tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      <span>{c.label}</span>
                      <ArrowRightIcon className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 ease-out group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              variants={featuredListVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="col-span-12 grid grid-cols-1 gap-6 md:col-span-9 md:grid-cols-3 lg:gap-8"
            >
              {SHOP_MENU.featured.map((f) => (
                <motion.article
                  key={f.href}
                  variants={featuredItemVariants}
                  className="group/card relative"
                >
                  <Link href={f.href} onClick={onSelect} className="block">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-muted">
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        sizes="(min-width: 1280px) 320px, (min-width: 768px) 26vw, 90vw"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-5">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        {f.eyebrow}
                      </p>
                      <h3 className="mt-1.5 text-[18px] font-medium tracking-tight text-foreground">
                        {f.title}
                      </h3>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] tracking-wide text-foreground">
                        <span className="relative">
                          {f.cta}
                          <span className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-all duration-500 ease-out group-hover/card:w-full" />
                        </span>
                        <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/card:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ShopMegaMenu
