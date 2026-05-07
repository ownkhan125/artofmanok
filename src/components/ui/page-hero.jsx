import Link from 'next/link'

import Container from '@/components/ui/container'

const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumb = [],
  align = 'left',
}) => {
  const isCenter = align === 'center'

  return (
    <section className="bg-paper">
      <Container>
        <div
          className={`py-14 md:py-20 lg:py-24 ${
            isCenter ? 'text-center' : 'text-left'
          }`}
        >
          {breadcrumb.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className={`mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground ${
                isCenter ? 'justify-center' : ''
              }`}
            >
              {breadcrumb.map((crumb, i) => {
                const isLast = i === breadcrumb.length - 1
                return (
                  <span key={`${crumb.href || ''}-${i}`} className="inline-flex items-center gap-2">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-foreground"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'text-foreground/80' : ''}>
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && (
                      <span aria-hidden className="text-muted-foreground/60">
                        /
                      </span>
                    )}
                  </span>
                )
              })}
            </nav>
          )}

          {eyebrow && (
            <p
              className={`text-[11px] uppercase tracking-[0.32em] text-muted-foreground ${
                isCenter ? 'mx-auto' : ''
              }`}
            >
              {eyebrow}
            </p>
          )}

          <h1
            className={`mt-4 font-display text-[36px] leading-[1.05] tracking-tight text-foreground sm:text-[48px] md:text-[60px] lg:text-[72px] ${
              isCenter ? 'mx-auto max-w-3xl' : 'max-w-3xl'
            }`}
          >
            <span className="italic font-light">{title}</span>
          </h1>

          {description && (
            <p
              className={`mt-6 max-w-xl text-[14px] leading-[1.7] text-muted-foreground md:text-[15px] ${
                isCenter ? 'mx-auto' : ''
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
      <div className="h-px w-full bg-border/70" />
    </section>
  )
}

export default PageHero
