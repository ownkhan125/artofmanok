'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'aom_cart_v1'

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      /* ignore */
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* ignore */
    }
  }, [items, hydrated])

  const addItem = useCallback((product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i,
        )
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          title: product.title,
          image: product.image,
          alt: product.alt,
          price: product.price,
          originalPrice: product.originalPrice,
          href: product.href,
          qty,
        },
      ]
    })
  }, [])

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const setQty = useCallback((id, qty) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const itemCount = items.reduce((n, i) => n + i.qty, 0)
    const subtotal = items.reduce((n, i) => n + i.price * i.qty, 0)
    return {
      items,
      itemCount,
      subtotal,
      hydrated,
      addItem,
      removeItem,
      setQty,
      clear,
    }
  }, [items, hydrated, addItem, removeItem, setQty, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within <CartProvider>')
  return ctx
}
