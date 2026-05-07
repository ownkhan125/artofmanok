'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, FreeMode } from 'swiper/modules'

import 'swiper/css'

import Container from '@/components/ui/container'
import { ArrowRightIcon } from '@/components/ui/icons'
import { SHOP_BUNDLES } from '@/constants/site'

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const cardEnter = {
  hidden: { opacity: 0, y: 22 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ArrowButton = ({ direction, onClick, label }) => (
  <button
    type="button"
    aria-label={label}
    onClick={onClick}
    className="group/arrow inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-ink hover:text-ink"
  >
    <svg
      viewBox="0 0 24 24"
      className="size-4 transition-transform duration-300 group-hover/arrow:translate-x-px"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === 'prev' ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
    </svg>
  </button>
)

const ShopBundles = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.2 })
  const swiperRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      aria-labelledby="shop-bundles-heading"
      className="bg-paper py-20 md:py-28 lg:py-32"
    >
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-muted-foreground">
              <span className="text-foreground">05</span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-foreground/40" />
              Better together
            </p>
            <h2
              id="shop-bundles-heading"
              className="font-display mt-5 max-w-[16ch] font-light italic leading-[1.02] tracking-[-0.01em] text-foreground text-[40px] sm:text-[56px] lg:text-[72px]"
            >
              Bundles, gently priced.
            </h2>
          </div>
          <div className="flex items-center justify-start gap-2 lg:col-span-4 lg:justify-end">
            <ArrowButton
              direction="prev"
              label="Previous bundles"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <ArrowButton
              direction="next"
              label="Next bundles"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </motion.div>

        <div className="relative mt-12 lg:mt-16">
          <Swiper
            modules={[Navigation, A11y, FreeMode]}
            onSwiper={(s) => (swiperRef.current = s)}
            slidesPerView={1.3}
            spaceBetween={20}
            speed={800}
            grabCursor
            a11y={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              768: { slidesPerView: 3, spaceBetween: 32 },
              1024: { slidesPerView: 4, spaceBetween: 40 },
            }}
            className="!overflow-hidden"
          >
            {SHOP_BUNDLES.map((bundle, i) => (
              <SwiperSlide key={bundle.id} className="!h-auto">
                <motion.article
                  custom={i}
                  variants={cardEnter}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className="group/card flex h-full flex-col"
                >
                  <Link
                    href={bundle.href}
                    aria-label={`${bundle.label} — ${bundle.cta}`}
                    className="block w-full overflow-hidden bg-muted"
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      <Image
                        src={bundle.image}
                        alt={bundle.alt || bundle.label}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 80vw"
                        className="object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-[1.06]"
                      />
                    </div>
                  </Link>
                  <div className="mt-6 flex items-end justify-between gap-4">
                    <h3 className="font-display text-[20px] font-light italic leading-[1.1] text-foreground sm:text-[22px]">
                      {bundle.label}
                    </h3>
                    <Link
                      href={bundle.href}
                      className="group/cta inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground"
                    >
                      <span className="relative pb-0.5">
                        Shop
                        <span className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left bg-foreground transition-transform duration-500 ease-out group-hover/cta:scale-x-50" />
                      </span>
                      <ArrowRightIcon className="size-3 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </Link>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default ShopBundles
