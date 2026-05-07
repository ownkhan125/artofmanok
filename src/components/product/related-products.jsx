import Container from '@/components/ui/container'
import ProductCard from '@/components/home/product-card'

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) return null

  return (
    <section className="bg-paper">
      <Container>
        <div className="py-16 md:py-20 lg:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                Related — you may also like
              </p>
              <h2 className="mt-4 font-display text-[28px] italic font-light leading-tight text-foreground md:text-[36px]">
                Pieces from the same shelf.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:mt-14 lg:grid-cols-4 lg:gap-x-8">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default RelatedProducts
