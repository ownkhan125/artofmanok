import { Albert_Sans, Fraunces } from 'next/font/google'

import AnnouncementBar from '@/components/layout/announcement-bar'
import Nav from '@/components/layout/nav'
import Footer from '@/components/layout/footer'
import MobileBottomNav from '@/components/layout/mobile-bottom-nav'
import SiteProviders from '@/components/providers/site-providers'

import { SITE_CONFIG } from '@/constants/site'

import './globals.css'

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={`${albertSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteProviders>
          <AnnouncementBar />
          <Nav />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <MobileBottomNav />
        </SiteProviders>
      </body>
    </html>
  )
}

export default RootLayout
