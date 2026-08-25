import { ArrowLeft, Compass } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Link } from '../lib/router'
import { PageMeta } from '../lib/seo'

export function NotFoundPage() {
  return (
    <section className="not-found"><PageMeta title="Página não encontrada" description="A página solicitada não foi encontrada no site da Ágape Instalações." image={null} /><Container className="not-found__inner"><Compass aria-hidden="true" /><span>Erro 404</span><h1>Página não encontrada</h1><p>O endereço pode ter mudado ou não existe. Volte ao início para continuar navegando.</p><Link className="button button--primary button--large" to="/"><ArrowLeft aria-hidden="true" />Voltar para o início</Link></Container></section>
  )
}
