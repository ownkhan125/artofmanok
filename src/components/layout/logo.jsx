import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/cn'
import { SITE_CONFIG } from '@/constants/site'

const Logo = ({ className = '', priority = false }) => {
  return (
    <Link
      href="/"
      aria-label={`${SITE_CONFIG.name} — ${SITE_CONFIG.fullName}`}
      className={cn(
        'inline-flex select-none items-center leading-none transition-opacity hover:opacity-80',
        className,
      )}
    >
      <Image
        src="/assets/images/logo.png"
        alt={SITE_CONFIG.fullName}
        width={300}
        height={68}
        priority={priority}
        sizes="(min-width: 640px) 176px, 144px"
        className="h-8 w-auto sm:h-10"
      />
    </Link>
  )
}

export default Logo
