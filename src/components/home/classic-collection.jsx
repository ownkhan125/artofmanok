'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'

import { CLASSIC_SHOWCASES } from '@/constants/site'

const showcaseVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const ClassicCollection = () => {
  return (
    <section aria-label="Classic collection showcase" className="bg-cream">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {CLASSIC_SHOWCASES.map((s, i) => (
          <motion.div
            key={s.href}
            custom={i}
            variants={showcaseVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Link
              href={s.href}
              className="group relative block overflow-hidden bg-muted"
              aria-label={`${s.alt} — ${s.cta}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[5/4] lg:aspect-[16/11]">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0,0,0.44,1.18)] group-hover:scale-[1.06]"
                />
              </div>
              <span className="pointer-events-none absolute bottom-8 left-8 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-white sm:bottom-10 sm:left-10">
                <span className="relative pb-1">
                  {s.cta}
                  <span className="absolute -bottom-px left-0 h-px w-full origin-left bg-white transition-transform duration-500 ease-out group-hover:scale-x-50" />
                </span>
                <svg viewBox="0 0 24 24" className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ClassicCollection
