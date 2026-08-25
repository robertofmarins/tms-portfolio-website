import type { ReactNode } from 'react'
import { StructuredData } from '../../lib/seo'
import { Footer } from './Footer'
import { Header } from './Header'
import { WhatsAppActions } from './WhatsAppActions'

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <StructuredData />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
      <WhatsAppActions />
    </div>
  )
}
