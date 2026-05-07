import Link from 'next/link'

import { GridIcon, HomeIcon, UserIcon, BagIcon } from '@/components/ui/icons'

const ITEMS = [
  { href: '/', label: 'Home', Icon: HomeIcon },
  { href: '/shop', label: 'Shop', Icon: GridIcon },
  { href: '/account', label: 'Account', Icon: UserIcon },
  { href: '/cart', label: 'Cart', Icon: BagIcon },
]

const MobileBottomNav = () => {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
        {ITEMS.map(({ href, label, Icon }) => (
          <li key={href} className="flex-1">
            <Link
              href={href}
              className="flex flex-col items-center justify-center gap-1 py-2.5 text-foreground transition-opacity hover:opacity-70"
            >
              <Icon className="size-5" />
              <span className="text-[10px] tracking-wide">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileBottomNav
