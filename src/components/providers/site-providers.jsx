'use client'

import CartDrawer from '@/components/cart/cart-drawer'
import SearchModal from '@/components/search/search-modal'

import { CartProvider } from './cart-context'
import { UIProvider } from './ui-context'

const SiteProviders = ({ children }) => {
  return (
    <UIProvider>
      <CartProvider>
        {children}
        <SearchModal />
        <CartDrawer />
      </CartProvider>
    </UIProvider>
  )
}

export default SiteProviders
