'use client'

import { useState } from 'react'
import Link from 'next/link'

import Container from '@/components/ui/container'
import PageHero from '@/components/ui/page-hero'

const AccountPage = () => {
  const [tab, setTab] = useState('login')

  return (
    <>
      <PageHero
        eyebrow="Account"
        title={'My\nAccount.'}
        description="Sign in to track orders, manage your details, and check out faster next time."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'My Account' },
        ]}
      />

      <section className="bg-background">
        <Container>
          <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <aside className="lg:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                Welcome back
              </p>
              <h2 className="mt-4 font-display text-[28px] italic font-light leading-tight text-foreground md:text-[36px]">
                Pretty things, packaged with love.
              </h2>
              <p className="mt-6 text-[14px] leading-[1.7] text-muted-foreground">
                Have a question about an order? Reply to your WhatsApp confirmation, or email us at{' '}
                <a
                  href="mailto:artofmanok@gmail.com"
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  artofmanok@gmail.com
                </a>
                .
              </p>

              <div className="mt-10 flex flex-col gap-3 text-[12px] uppercase tracking-[0.22em]">
                <Link href="/shop" className="text-muted-foreground transition-colors hover:text-foreground">
                  Continue shopping →
                </Link>
                <Link href="/faq" className="text-muted-foreground transition-colors hover:text-foreground">
                  Read our FAQ →
                </Link>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <div className="-mx-2 mb-8 flex items-center gap-6 border-b border-border/70">
                {[
                  { id: 'login', label: 'Login' },
                  { id: 'register', label: 'Register' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`relative -mb-px pb-3 text-[12px] uppercase tracking-[0.22em] transition-colors ${
                      tab === t.id
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {t.label}
                    <span
                      className={`absolute -bottom-px left-0 h-px bg-foreground transition-all duration-300 ${
                        tab === t.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid gap-5"
                aria-label={tab === 'login' ? 'Login form' : 'Register form'}
              >
                {tab === 'register' && (
                  <p className="text-[14px] leading-[1.7] text-muted-foreground">
                    Sign up for early sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.
                  </p>
                )}
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    Email address *
                  </span>
                  <input
                    type="email"
                    required
                    className="mt-3 h-12 w-full rounded-full border border-border/70 bg-background px-5 text-[14px] tracking-wide text-foreground transition-colors focus:border-foreground focus:outline-none"
                    placeholder="you@studio.com"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    Password *
                  </span>
                  <input
                    type="password"
                    required
                    className="mt-3 h-12 w-full rounded-full border border-border/70 bg-background px-5 text-[14px] tracking-wide text-foreground transition-colors focus:border-foreground focus:outline-none"
                    placeholder="••••••••"
                  />
                </label>

                {tab === 'login' && (
                  <label className="inline-flex items-center gap-3 text-[13px] text-muted-foreground">
                    <input type="checkbox" className="size-4 rounded border-border/70" />
                    Remember me
                  </label>
                )}

                {tab === 'register' && (
                  <p className="text-[13px] leading-[1.7] text-muted-foreground">
                    Your personal data will be used to support your experience throughout this website, manage access to your account, and for other purposes described in our{' '}
                    <Link href="/privacy" className="text-foreground underline-offset-4 hover:underline">
                      privacy policy
                    </Link>
                    .
                  </p>
                )}

                <button
                  type="submit"
                  className="group/cta mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-[12px] font-medium uppercase tracking-[0.22em] text-background transition-colors duration-300 hover:bg-foreground/90"
                >
                  {tab === 'login' ? 'Log in' : 'Register'}
                  <span aria-hidden>→</span>
                </button>

                <div className="mt-2 text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                  {tab === 'login' ? (
                    <>
                      <button type="button" className="transition-colors hover:text-foreground">
                        Lost your password?
                      </button>
                      <span className="mx-3">·</span>
                      <button
                        type="button"
                        onClick={() => setTab('register')}
                        className="transition-colors hover:text-foreground"
                      >
                        New customer? Create your account
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setTab('login')}
                      className="transition-colors hover:text-foreground"
                    >
                      Already have an account? Log in here
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default AccountPage
