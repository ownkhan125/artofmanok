'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'

import Container from '@/components/ui/container'
import { cn } from '@/lib/cn'
import { FAQ_ITEMS } from '@/constants/site'

const sectionVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const FaqItem = ({ item, isOpen, onToggle, index }) => {
  const panelId = `faq-panel-${item.id}`
  const buttonId = `faq-button-${item.id}`

  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      className="border-b border-border/70"
    >
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="group/q flex w-full items-center justify-between gap-6 py-4 text-left text-[16px] font-medium tracking-wide text-foreground transition-colors duration-300 hover:text-foreground/70"
        >
          <span>{item.question}</span>
          <span
            aria-hidden
            className={cn(
              'inline-flex size-6 shrink-0 items-center justify-center text-muted-foreground transition-transform duration-300 ease-out',
              isOpen && 'rotate-180 text-foreground',
            )}
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, ease: 'easeOut' },
            }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-[14px] leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const FaqSection = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.15 })
  const [openId, setOpenId] = useState(null)

  return (
    <section
      ref={sectionRef}
      aria-labelledby="faq-heading"
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
            <span className="text-foreground">08</span>
            <span className="mx-3 inline-block h-px w-6 align-middle bg-foreground/40" />
            The fine print
          </p>
          <h2
            id="faq-heading"
            className="font-display mt-5 font-light italic leading-[1.02] tracking-[-0.01em] text-foreground text-[40px] sm:text-[56px] lg:text-[72px]"
          >
            Frequently asked.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          className="mx-auto mt-10 max-w-3xl border-t border-border/70 lg:mt-14"
        >
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={item.id}
              item={item}
              index={i}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

export default FaqSection
