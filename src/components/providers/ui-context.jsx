'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const UIContext = createContext(null)

export const UIProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const openCart = useCallback(() => {
    setSearchOpen(false)
    setCartOpen(true)
  }, [])
  const closeCart = useCallback(() => setCartOpen(false), [])
  const openSearch = useCallback(() => {
    setCartOpen(false)
    setSearchOpen(true)
  }, [])
  const closeSearch = useCallback(() => setSearchOpen(false), [])

  // Lock body scroll while any overlay is open
  useEffect(() => {
    const anyOpen = cartOpen || searchOpen
    document.body.style.overflow = anyOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [cartOpen, searchOpen])

  // ESC closes whichever is open
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setCartOpen(false)
        setSearchOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <UIContext.Provider
      value={{ cartOpen, searchOpen, openCart, closeCart, openSearch, closeSearch }}
    >
      {children}
    </UIContext.Provider>
  )
}

export const useUI = () => {
  const ctx = useContext(UIContext)
  if (!ctx) throw new Error('useUI must be used within <UIProvider>')
  return ctx
}
