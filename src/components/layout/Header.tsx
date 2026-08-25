import { useEffect, useState } from 'react'
import { ArrowUpRight, MessageCircle, Menu, X } from 'lucide-react'
import { company } from '../../data/company'
import { defaultWhatsAppUrl } from '../../lib/whatsapp'
import { Link, useRouter } from '../../lib/router'
import { BrandMark } from '../ui/BrandMark'
import { Container } from '../ui/Container'

const navigation = [
  { label: 'Início', href: '/' },
  { label: 'Empresa', href: '/empresa' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Contato', href: '/contato' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.body.classList.add('menu-is-open')
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('menu-is-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>
      <Container className="header-inner">
        <Link className="brand-link" to="/" aria-label={`${company.name} — página inicial`}>
          <BrandMark />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return <Link key={item.href} to={item.href} className={active ? 'is-active' : ''} aria-current={active ? 'page' : undefined}>{item.label}</Link>
          })}
        </nav>
        <Link className="button button--primary header-cta" to="/contato">
          Solicitar orçamento <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
      <div id="mobile-navigation" className={`mobile-panel ${menuOpen ? 'mobile-panel--open' : ''}`}>
        <Container>
          <nav aria-label="Navegação móvel">
            {navigation.map((item, index) => <Link key={item.href} to={item.href}><span>0{index + 1}</span>{item.label}</Link>)}
          </nav>
          <div className="mobile-panel__actions">
            <a className="button button--secondary" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} /> WhatsApp</a>
            <Link className="button button--primary" to="/contato">Solicitar orçamento <ArrowUpRight aria-hidden="true" size={18} /></Link>
          </div>
        </Container>
      </div>
    </header>
  )
}
