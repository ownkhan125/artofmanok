import Container from '@/components/ui/container'
import ShopCatalog from '@/components/shop/shop-catalog'
import { ALL_PRODUCTS } from '@/constants/site'

export const metadata = {
  title: 'Shop',
  description:
    'Every piece in the studio — journals, leather notebooks, stickers, calendars and more.',
}

const ShopPage = () => {
  return (
    <>
      <section className="bg-background">
        <Container>
          <div className="py-12 text-center md:py-16 lg:py-20">
            <h1 className="text-[32px] font-normal tracking-tight text-foreground sm:text-[36px] md:text-[42px]">
              Shop
            </h1>
          </div>
        </Container>
      </section>

      <ShopCatalog products={ALL_PRODUCTS} currentSlug="all" />
    </>
  )
}

export default ShopPage
