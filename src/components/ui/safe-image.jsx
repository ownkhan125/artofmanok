'use client'

import Image from 'next/image'
import { useState } from 'react'
import PropTypes from 'prop-types'

import { cn } from '@/lib/cn'

const PlaceholderArt = () => (
  <svg
    viewBox="0 0 64 64"
    className="size-12"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="8" y="14" width="48" height="38" rx="3" />
    <circle cx="22" cy="26" r="3" />
    <path d="m8 44 14-12 12 11 9-7 13 12" />
  </svg>
)

const SafeImage = ({
  src,
  alt = '',
  className,
  fallbackClassName,
  fallbackLabel = 'Image coming soon',
  ...rest
}) => {
  const [errored, setErrored] = useState(false)
  const showFallback = !src || errored

  if (showFallback) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel}
        className={cn(
          'absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted to-muted/60 text-muted-foreground/45',
          fallbackClassName,
        )}
      >
        <PlaceholderArt />
        <span className="text-[10px] uppercase tracking-[0.22em]">
          {fallbackLabel}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
      {...rest}
    />
  )
}

SafeImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallbackClassName: PropTypes.string,
  fallbackLabel: PropTypes.string,
}

export default SafeImage
