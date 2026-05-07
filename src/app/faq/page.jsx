'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

import Container from '@/components/ui/container'
import { ChevronDownIcon } from '@/components/ui/icons'
import {
  FAQ_ITEMS,
  FAQ_GROUPS,
  FAQ_SUPPORT,
  CONTACT_INFO,
} from '@/constants/site'

const FaqPage = () => {
  const [openId, setOpenId] = useState(null)

  return (
    <>
      <section className="bg-background">
        <Container>
          <div className="mx-auto max-w-4xl py-16 text-center md:py-24 lg:py-28">
            <h1 className="font-display text-[34px] font-light italic leading-[1.05] tracking-tight text-foreground sm:text-[44px] md:text-[56px] lg:text-[64px]">
              FAQ / Terms &amp; Conditions
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container>
          <div className="mx-auto max-w-4xl pb-12 md:pb-20">
            {FAQ_GROUPS.map((group, groupIdx) => {
              const items = FAQ_ITEMS.filter((it) => it.group === group.id)
              if (items.length === 0) return null
              return (
                <div
                  key={group.id}
                  className={groupIdx === 0 ? '' : 'mt-10 md:mt-14'}
                >
                  <p className="px-1 text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                    {String(groupIdx + 1).padStart(2, '0')} — {group.label}
                  </p>
                  <ul className="mt-5 border-t border-border/70">
                    {items.map((item) => {
                      const isOpen = openId === item.id
                      return (
                        <li key={item.id} className="border-b border-border/70">
                          <button
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${item.id}`}
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            className="group/item flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                          >
                            <span className="text-[15px] font-normal tracking-tight text-foreground md:text-[17px]">
                              {item.question}
                            </span>
                            <ChevronDownIcon
                              className={`size-4 shrink-0 text-foreground/70 transition-transform duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key="panel"
                                id={`faq-panel-${item.id}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.32,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden"
                              >
                                <div className="pb-7 pr-2 text-[14px] leading-[1.85] text-muted-foreground md:text-[15px]">
                                  {item.answer.split('\n').map((line, idx) => (
                                    <p
                                      key={idx}
                                      className={idx === 0 ? '' : 'mt-3'}
                                    >
                                      {line}
                                    </p>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-background pb-16 md:pb-24">
        <Container>
          <div className="mx-auto max-w-4xl rounded-sm bg-paper px-6 py-12 md:px-12 md:py-16">
            <h2 className="font-display text-[28px] font-light italic leading-tight text-foreground md:text-[36px]">
              {FAQ_SUPPORT.heading}
            </h2>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.85] text-muted-foreground md:text-[15px]">
              {FAQ_SUPPORT.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={FAQ_SUPPORT.primary.href}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/90"
              >
                {FAQ_SUPPORT.primary.label}
                <span aria-hidden>→</span>
              </a>
              <Link
                href={FAQ_SUPPORT.secondary.href}
                className="group/cta inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.22em] text-foreground"
              >
                <span className="relative pb-1">
                  {FAQ_SUPPORT.secondary.label}
                  <span className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-100 bg-foreground transition-transform duration-500 ease-out group-hover/cta:scale-x-50" />
                </span>
                <span aria-hidden>↗</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/70 pt-6 text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>WhatsApp via your order confirmation</span>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-foreground transition-opacity hover:opacity-70"
              >
                {CONTACT_INFO.email}
              </a>
              <span>{CONTACT_INFO.basedIn}</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default FaqPage
