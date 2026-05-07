'use client'

import { motion } from 'motion/react'

import Container from '@/components/ui/container'
import { PROMO_BANNER } from '@/constants/site'

const headingVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

const paragraphVariants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
  },
}

const PromoBanner = () => {
  const { headline, paragraph } = PROMO_BANNER

  return (
    <section
      aria-labelledby="promo-banner-heading"
      className="relative w-full overflow-hidden bg-ink"
    >
      <Container>
        <div className="mx-auto flex flex-col items-center py-20 text-center md:py-28 lg:py-32">
          <motion.h2
            id="promo-banner-heading"
            variants={headingVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-[20ch] text-[26px] font-medium uppercase leading-[1.18] tracking-[0.16em] text-white sm:text-[32px] md:text-[42px] lg:text-[52px] lg:tracking-[0.18em]"
          >
            {headline}
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mt-7 max-w-[58ch] text-[14px] leading-[1.75] text-white/70 sm:text-[15px] md:mt-9 lg:text-[16px]"
          >
            {paragraph}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}

export default PromoBanner
