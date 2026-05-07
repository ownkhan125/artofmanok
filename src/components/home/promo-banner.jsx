'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

import { PROMO_BANNER } from '@/constants/site'
import { ArrowRightIcon } from '@/components/ui/icons'

const eyebrowVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
  },
}

const taglineVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] },
  },
}

const PromoBanner = () => {
  const { eyebrow, headline, tagline, cta, href, imageDesktop, imageMobile, imageAlt } = PROMO_BANNER

  return (
    <section aria-labelledby="promo-banner-heading" className="w-full overflow-hidden bg-ink">
      <Link
        href={href}
        aria-label={`${headline} — ${cta}`}
        className="group/banner relative block w-full"
      >
        <div className="relative aspect-[375/368] w-full md:aspect-auto md:h-[368px]">
          <Image
            src={imageMobile}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0,0,0.44,1.18)] group-hover/banner:scale-[1.04] md:hidden"
          />
          <Image
            src={imageDesktop}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="hidden object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0,0,0.44,1.18)] group-hover/banner:scale-[1.04] md:block"
          />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25 md:from-ink/80 md:via-ink/45 md:to-transparent"
            aria-hidden
          />

          <div className="absolute inset-0 flex items-end justify-start px-6 pb-8 sm:px-10 md:items-center md:justify-start md:px-16 md:pb-0 lg:px-20">
            <div className="max-w-[560px]">
              <motion.p
                variants={eyebrowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="text-[11px] font-medium uppercase tracking-[0.34em] text-white/90"
              >
                <span className="text-white">06</span>
                <span className="mx-3 inline-block h-px w-6 align-middle bg-white/60" />
                {eyebrow}
              </motion.p>
              <motion.h2
                id="promo-banner-heading"
                variants={headingVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="font-display mt-5 font-light italic leading-[1.0] tracking-[-0.01em] text-white text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px]"
              >
                {headline}
              </motion.h2>
              <motion.p
                variants={taglineVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="mt-5 max-w-md text-[13px] leading-[1.7] text-white/75 sm:text-[14px]"
              >
                {tagline}
              </motion.p>
              <motion.span
                variants={ctaVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="mt-7 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white"
              >
                <span className="relative pb-1">
                  {cta}
                  <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left bg-white transition-transform duration-500 ease-out group-hover/banner:scale-x-50" />
                </span>
                <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/banner:translate-x-1" />
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default PromoBanner
