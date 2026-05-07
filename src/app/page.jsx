import Hero from '@/components/home/hero'
import MarqueeStrip from '@/components/home/marquee-strip'
import ShopByCategory from '@/components/home/shop-by-category'
import ClassicBanner from '@/components/home/classic-banner'
import ClassicCollection from '@/components/home/classic-collection'
import NewArrivals from '@/components/home/new-arrivals'
import ShopBundles from '@/components/home/shop-bundles'
import PromoBanner from '@/components/home/promo-banner'
import HappyClients from '@/components/home/happy-clients'
import FaqSection from '@/components/home/faq-section'

const HomePage = () => {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ShopByCategory />
      <ClassicBanner />
      <ClassicCollection />
      <NewArrivals />
      <ShopBundles />
      <PromoBanner />
      <HappyClients />
      <FaqSection />
    </>
  )
}

export default HomePage
