import Image from 'next/image'

import Container from '@/components/ui/container'
import { ABOUT_PAGE } from '@/constants/site'

export const metadata = {
  title: 'About Us',
  description:
    'Art of Mano K is a creative stationery studio founded by Mahruna Khattak in Islamabad.',
}

const AboutPage = () => {
  return (
    <>
      <section className="bg-background">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center md:py-24 lg:py-28">
            <h1 className="font-display text-[34px] font-light italic leading-[1.1] tracking-tight text-foreground sm:text-[42px] md:text-[52px] lg:text-[60px]">
              {ABOUT_PAGE.hero.title}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[14px] leading-[1.85] text-muted-foreground md:mt-9 md:text-[15px]">
              {ABOUT_PAGE.hero.intro}
            </p>
          </div>
        </Container>
      </section>

      {ABOUT_PAGE.blocks.map((block, idx) => (
        <section
          key={block.id}
          className={`bg-background ${idx === 0 ? 'border-t border-border/70' : ''}`}
        >
          <Container>
            <div className="grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
              <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-muted lg:order-1">
                <Image
                  src={block.image}
                  alt={block.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center lg:order-2 lg:pl-4">
                <h2 className="font-display text-[28px] font-light italic leading-[1.1] tracking-tight text-foreground sm:text-[32px] md:text-[40px] lg:text-[44px]">
                  {block.heading}
                </h2>
                <p className="mt-6 max-w-xl text-[14px] leading-[1.85] text-muted-foreground md:mt-8 md:text-[15px]">
                  {block.body}
                </p>
              </div>
            </div>
          </Container>
        </section>
      ))}
    </>
  )
}

export default AboutPage
