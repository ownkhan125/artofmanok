import { notFound } from 'next/navigation'

import Container from '@/components/ui/container'
import ProductDetail from '@/components/product/product-detail'
import RelatedProducts from '@/components/product/related-products'
import {
  ALL_PRODUCTS,
  findProductBySlug,
  productsByCategory,
} from '@/constants/site'

export const generateStaticParams = () =>
  ALL_PRODUCTS.map((p) => ({ slug: p.slug }))

export async function generateMetadata({ params }) {
  const { slug } = await params
  const product = findProductBySlug(slug)
  if (!product) return {}
  return {
    title: product.title,
    description:
      product.description ||
      `${product.title} — hand-finished stationery from the Art of Mano K studio.`,
  }
}

const ProductPage = async ({ params }) => {
  const { slug } = await params
  const product = findProductBySlug(slug)
  if (!product) notFound()

  const related = (
    product.category
      ? productsByCategory(product.category)
      : ALL_PRODUCTS
  )
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4)

  return (
    <>
      <Container>
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground"
        >
          <a href="/" className="transition-colors hover:text-foreground">
            Home
          </a>
          <span aria-hidden className="text-muted-foreground/60">/</span>
          <a href="/shop" className="transition-colors hover:text-foreground">
            Shop
          </a>
          <span aria-hidden className="text-muted-foreground/60">/</span>
          <span className="text-foreground/80">{product.title}</span>
        </nav>
      </Container>

      <ProductDetail product={product} />
      <RelatedProducts products={related} />
    </>
  )
}

export default ProductPage
