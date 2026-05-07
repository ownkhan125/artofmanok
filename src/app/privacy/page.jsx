import Link from 'next/link'

import Container from '@/components/ui/container'
import PageHero from '@/components/ui/page-hero'
import { PRIVACY_TEXT, CONTACT_INFO } from '@/constants/site'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Art of Mano K collects, uses and protects your personal information.',
}

const PrivacyPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={'Privacy\nPolicy.'}
        description="A short, plain-English summary of what we collect and how we use it."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="bg-background">
        <Container>
          <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <aside className="lg:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                On this page
              </p>
              <ul className="mt-5 space-y-3 text-[13px] tracking-wide text-muted-foreground">
                {PRIVACY_TEXT.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#sec-${i}`}
                      className="transition-colors hover:text-foreground"
                    >
                      {String(i + 1).padStart(2, '0')} — {s.heading}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-border/70 pt-6 text-[12px] uppercase tracking-[0.22em]">
                <Link
                  href="/terms"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms & Conditions →
                </Link>
              </div>
            </aside>

            <article className="space-y-12 lg:col-span-9">
              {PRIVACY_TEXT.map((sec, i) => (
                <section key={sec.heading} id={`sec-${i}`} className="scroll-mt-28">
                  <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-3 font-display text-[26px] italic font-light leading-tight text-foreground md:text-[32px]">
                    {sec.heading}
                  </h2>
                  <p className="mt-5 text-[14px] leading-[1.85] text-muted-foreground md:text-[15px]">
                    {sec.body}
                  </p>
                </section>
              ))}

              <section className="border-t border-border/70 pt-8 text-[13px] text-muted-foreground">
                Questions about your data? Email{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-foreground underline-offset-4 hover:underline"
                >
                  {CONTACT_INFO.email}
                </a>
                .
              </section>
            </article>
          </div>
        </Container>
      </section>
    </>
  )
}

export default PrivacyPage
