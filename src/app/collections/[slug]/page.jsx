import { notFound } from 'next/navigation'

import PageHero from '@/components/ui/page-hero'
import CatalogGrid from '@/components/shop/catalog-grid'
import {
  COLLECTIONS,
  findCollection,
  productsByCollection,
  ALL_PRODUCTS,
} from '@/constants/site'

export const generateStaticParams = () =>
  COLLECTIONS.map((c) => ({ slug: c.slug }))

export async function generateMetadata({ params }) {
  const { slug } = await params
  const col = findCollection(slug)
  if (!col) return {}
  return {
    title: col.title,
    description: col.description,
  }
}

const CollectionPage = async ({ params }) => {
  const { slug } = await params
  const col = findCollection(slug)
  if (!col) notFound()

  let products = productsByCollection(col.slug)
  if (products.length === 0) products = ALL_PRODUCTS.slice(0, 8)

  return (
    <>
      <PageHero
        eyebrow="Collection"
        title={col.title}
        description={col.description}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Collections' },
          { label: col.label },
        ]}
      />
      <CatalogGrid products={products} currentSlug={null} showCategoryRail={false} />
    </>
  )
}

export default CollectionPage
