'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, FreeMode } from 'swiper/modules'

import 'swiper/css'

import Container from '@/components/ui/container'
import { StarIcon } from '@/components/ui/icons'
import { TESTIMONIALS, TESTIMONIAL_SUBTITLE } from '@/constants/site'

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

const HappyClients = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })
  const swiperRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      aria-labelledby="happy-clients-heading"
      className="bg-background py-20 md:py-24 lg:py-28"
    >
      <Container>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-muted-foreground">
            <span className="text-foreground">07</span>
            <span className="mx-3 inline-block h-px w-6 align-middle bg-foreground/40" />
            In their words
          </p>
          <h2
            id="happy-clients-heading"
            className="font-display mt-5 font-light italic leading-[1.02] tracking-[-0.01em] text-foreground text-[40px] sm:text-[56px] lg:text-[72px]"
          >
            Happy clients.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[13px] leading-[1.7] text-muted-foreground sm:text-[14px]">
            {TESTIMONIAL_SUBTITLE}
          </p>
        </motion.div>

        <div className="mt-10 lg:mt-14">
          <Swiper
            modules={[Navigation, A11y, FreeMode]}
            onSwiper={(s) => (swiperRef.current = s)}
            slidesPerView={1.2}
            spaceBetween={20}
            speed={800}
            grabCursor
            a11y={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: 1.6, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
              1280: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="!overflow-hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={t.id} className="!h-auto">
                <motion.article
                  custom={i}
                  variants={cardEnter}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className="group/card flex h-full flex-col gap-5 rounded-[10px] bg-background p-6 shadow-[0_1px_2px_rgba(15,15,15,0.05)] ring-1 ring-border/60 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(15,15,15,0.18)] lg:flex-row lg:items-stretch lg:gap-5 lg:p-5"
                >
                  <div className="relative w-full shrink-0 overflow-hidden rounded-[6px] bg-muted lg:w-[160px]">
                    <div className="relative aspect-[3/4] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[280px]">
                      <Image
                        src={t.image}
                        alt={t.alt}
                        fill
                        sizes="(min-width: 1024px) 160px, (min-width: 640px) 45vw, 80vw"
                        className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0,0,0.44,1.18)] group-hover/card:scale-[1.04]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div
                      className="flex items-center gap-0.5 text-[#fbbf24]"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <StarIcon key={idx} className="size-4" />
                      ))}
                    </div>
                    <h3 className="mt-3 text-[15px] font-semibold leading-snug text-foreground lg:text-[16px]">
                      {t.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-muted-foreground lg:line-clamp-4">
                      {t.quote}
                    </p>
                    <div className="mt-auto flex flex-col pt-4">
                      <span className="text-[14px] font-medium text-foreground">
                        {t.author}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {t.source}
                      </span>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-10 flex items-center justify-center gap-2">
            <ArrowButton
              direction="prev"
              label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <ArrowButton
              direction="next"
              label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HappyClients
