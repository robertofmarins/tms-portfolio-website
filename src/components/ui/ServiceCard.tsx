import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../types/content'
import { Link } from '../../lib/router'

export function ServiceCard({ service, featured = false }: { service: Service; featured?: boolean }) {
  const Icon = service.icon
  return (
    <article className={`service-card ${featured ? 'service-card--featured' : ''}`}>
      <div className="service-card__top"><span className="service-card__icon"><Icon aria-hidden="true" /></span><span className="service-card__number">0{service.slug === 'assistencia-tecnica' ? 5 : ['instalacoes-eletricas', 'instalacoes-hidraulicas', 'instalacoes-de-gas', 'combate-a-incendio'].indexOf(service.slug) + 1}</span></div>
      <h3>{service.title}</h3>
      <p>{service.shortDescription}</p>
      <ul>{service.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
      <Link className="text-link" to={`/servicos/${service.slug}`}>Ver detalhes <ArrowUpRight aria-hidden="true" size={18} /></Link>
    </article>
  )
}
