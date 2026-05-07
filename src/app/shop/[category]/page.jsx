import Link from 'next/link'
import { notFound } from 'next/navigation'

import Container from '@/components/ui/container'
import ShopCatalog from '@/components/shop/shop-catalog'
import {
  SHOP_CATEGORIES,
  findCategory,
  productsByCategory,
} from '@/constants/site'

export const generateStaticParams = () =>
  SHOP_CATEGORIES.filter((c) => c.slug !== 'all').map((c) => ({
    category: c.slug,
  }))

export async function generateMetadata({ params }) {
  const { category } = await params
  const cat = findCategory(category)
  if (!cat) return {}
  return {
    title: cat.title,
    description: cat.description,
  }
}

const ShopCategoryPage = async ({ params }) => {
  const { category } = await params
  const cat = findCategory(category)
  if (!cat) notFound()

  const products = productsByCategory(cat.slug)

  return (
    <>
      <section className="bg-background">
        <Container>
          <div className="py-12 text-center md:py-16 lg:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
            >
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
              <span aria-hidden className="text-muted-foreground/60">/</span>
              <Link href="/shop" className="transition-colors hover:text-foreground">
                Shop
              </Link>
              <span aria-hidden className="text-muted-foreground/60">/</span>
              <span className="text-foreground/80">{cat.label}</span>
            </nav>
            <h1 className="text-[32px] font-normal tracking-tight text-foreground sm:text-[36px] md:text-[42px]">
              {cat.title}
            </h1>
          </div>
        </Container>
      </section>

      <ShopCatalog products={products} currentSlug={cat.slug} />
    </>
  )
}

export default ShopCategoryPage
