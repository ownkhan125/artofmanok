'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y, Autoplay, FreeMode } from 'swiper/modules'

import 'swiper/css'

import Container from '@/components/ui/container'
import ProductCard from '@/components/home/product-card'
import { cn } from '@/lib/cn'
import { NEW_ARRIVALS, TRENDING_PRODUCTS } from '@/constants/site'

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

const TABS = [
  { id: 'new', label: 'New arrivals', data: NEW_ARRIVALS },
  { id: 'trending', label: 'Trending', data: TRENDING_PRODUCTS },
]

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

const NewArrivals = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })
  const swiperRef = useRef(null)
  const [activeTab, setActiveTab] = useState(TABS[0].id)

  const activeProducts = TABS.find((t) => t.id === activeTab)?.data ?? []

  const handleTabClick = (id) => {
    if (id === activeTab) return
    setActiveTab(id)
    if (swiperRef.current) {
      swiperRef.current.slideTo(0, 0)
    }
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="new-arrivals-heading"
      className="bg-background py-20 md:py-24 lg:py-28"
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
              <span className="text-foreground">04</span>
              <span className="mx-3 inline-block h-px w-6 align-middle bg-foreground/40" />
              From the studio
            </p>
            <div
              id="new-arrivals-heading"
              role="tablist"
              aria-label="Featured product collections"
              className="mt-5 flex items-baseline gap-8 sm:gap-10"
            >
              {TABS.map((tab, idx) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`new-arrivals-panel-${tab.id}`}
                    onClick={() => handleTabClick(tab.id)}
                    className={cn(
                      'group/tab relative pb-2 transition-colors duration-300',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    <span className="font-display text-[32px] font-light italic leading-none sm:text-[44px] lg:text-[56px]">
                      {tab.label}
                    </span>
                    <span
                      aria-hidden
                      className={cn(
                        'pointer-events-none absolute -bottom-px left-0 h-px bg-foreground transition-all duration-500 ease-out',
                        isActive ? 'w-full' : 'w-0 group-hover/tab:w-1/3',
                      )}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-start gap-2 lg:col-span-4 lg:justify-end">
            <ArrowButton
              direction="prev"
              label="Previous products"
              onClick={() => swiperRef.current?.slidePrev()}
            />
            <ArrowButton
              direction="next"
              label="Next products"
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </motion.div>

        <div
          id={`new-arrivals-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="relative mt-10 lg:mt-14"
        >
          <Swiper
            modules={[Navigation, A11y, Autoplay, FreeMode]}
            onSwiper={(s) => (swiperRef.current = s)}
            slidesPerView={1.3}
            spaceBetween={20}
            speed={800}
            grabCursor
            loop
            autoplay={{ delay: 1500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            a11y={{ enabled: true }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              768: { slidesPerView: 3, spaceBetween: 30 },
              1024: { slidesPerView: 3.5, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="!overflow-hidden"
          >
            {activeProducts.map((product, i) => (
              <SwiperSlide key={`${activeTab}-${product.id}`} className="!h-auto">
                <motion.div
                  custom={i}
                  variants={cardEnter}
                  initial="hidden"
                  animate={inView ? 'show' : 'hidden'}
                  className="h-full"
                >
                  <ProductCard product={product} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  )
}

export default NewArrivals
