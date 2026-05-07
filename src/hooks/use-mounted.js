'use client'

import { useEffect, useState } from 'react'

/**
 * Returns true once the component has mounted on the client.
 * Useful for guarding against hydration mismatches.
 *
 * @returns {boolean}
 */
export const useMounted = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
