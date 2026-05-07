'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import { motion, AnimatePresence } from 'motion/react'

import 'swiper/css'
import 'swiper/css/effect-fade'

import { HERO_SLIDES } from '@/constants/site'
import { ArrowRightIcon } from '@/components/ui/icons'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  },
}

const Hero = () => {
  const [active, setActive] = useState(0)
  const slide = HERO_SLIDES[active]

  return (
    <section className="group relative w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
          bulletClass: 'hero-bullet',
          bulletActiveClass: 'hero-bullet--active',
        }}
        navigation={{ prevEl: '.hero-prev', nextEl: '.hero-next' }}
        onSlideChange={(s) => setActive(s.realIndex)}
        a11y={{ enabled: true }}
        className="h-[78vh] min-h-[520px] w-full sm:h-[82vh] lg:h-[88vh]"
      >
        {HERO_SLIDES.map((s, i) => (
          <SwiperSlide key={s.id} className="relative">
            <motion.div
              key={`img-${s.id}-${active === i ? 'a' : 'i'}`}
              initial={{ scale: 1.08 }}
              animate={active === i ? { scale: 1 } : { scale: 1.04 }}
              transition={{ duration: 7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-10 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              className="pointer-events-auto max-w-2xl"
            >
              <motion.p
                variants={item}
                className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/90"
              >
                <span className="text-white">{String(active + 1).padStart(2, '0')}</span>
                <span className="mx-3 inline-block h-px w-6 align-middle bg-white/60" />
                {slide.eyebrow}
              </motion.p>

              <motion.h1
                variants={item}
                className="font-display mt-6 whitespace-pre-line font-light italic leading-[1.02] tracking-[-0.01em] text-white text-[48px] sm:text-[68px] lg:text-[92px]"
              >
                {slide.headline}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-6 max-w-md text-[14px] leading-[1.7] text-white/80"
              >
                {slide.subline}
              </motion.p>

              <motion.div
                variants={item}
                className="mt-10 flex flex-wrap items-center gap-8"
              >
                <Link
                  href={slide.primary.href}
                  className="group/cta inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.24em] text-white"
                >
                  <span className="relative pb-1">
                    {slide.primary.label}
                    <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left bg-white transition-transform duration-500 ease-out group-hover/cta:scale-x-50" />
                  </span>
                  <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </Link>
                <Link
                  href={slide.secondary.href}
                  className="group/cta2 inline-flex items-center text-[12px] font-medium uppercase tracking-[0.24em] text-white/85 transition-colors duration-300 hover:text-white"
                >
                  <span className="relative pb-1">
                    {slide.secondary.label}
                    <span className="pointer-events-none absolute -bottom-px left-0 h-px w-0 bg-white transition-all duration-500 ease-out group-hover/cta2:w-full" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        className="hero-prev absolute left-3 top-1/2 z-30 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-ink group-hover:opacity-100 md:inline-flex"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m15 6-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        className="hero-next absolute right-3 top-1/2 z-30 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-ink group-hover:opacity-100 md:inline-flex"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m9 6 6 6-6 6" />
        </svg>
      </button>

      <div className="hero-pagination absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 sm:bottom-8" />
    </section>
  )
}

export default Hero
