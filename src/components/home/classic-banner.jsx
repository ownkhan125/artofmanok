'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

import { CLASSIC_BANNER } from '@/constants/site'

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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
  },
}

const taglineVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
}

const ClassicBanner = () => {
  const { eyebrow, headline, tagline, imageDesktop, imageMobile, imageAlt } = CLASSIC_BANNER

  return (
    <section
      aria-labelledby="classic-banner-heading"
      className="relative w-full overflow-hidden bg-cream"
    >
      <div className="relative aspect-[375/419] w-full md:aspect-[1425/700]">
        <Image
          src={imageMobile}
          alt={imageAlt}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover md:hidden"
        />
        <Image
          src={imageDesktop}
          alt={imageAlt}
          fill
          priority={false}
          sizes="100vw"
          className="hidden object-cover md:block"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/55 to-cream/85" aria-hidden />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center sm:px-10 lg:px-16">
          <motion.p
            variants={eyebrowVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-[11px] font-medium uppercase tracking-[0.34em] text-muted-foreground"
          >
            <span className="text-foreground">03</span>
            <span className="mx-3 inline-block h-px w-6 align-middle bg-foreground/40" />
            {eyebrow}
          </motion.p>
          <motion.h2
            id="classic-banner-heading"
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="font-display mt-5 font-light italic tracking-[-0.01em] text-foreground text-[44px] leading-[1.0] sm:text-[64px] md:text-[88px] lg:text-[112px]"
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={taglineVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-7 max-w-sm text-[13px] leading-[1.7] tracking-wide text-muted-foreground sm:text-[14px]"
          >
            {tagline}
          </motion.p>
        </div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="absolute inset-0"
          aria-hidden
        />
      </div>
    </section>
  )
}

export default ClassicBanner
