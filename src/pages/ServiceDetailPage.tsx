import { ArrowRight, Building2, Check, CircleAlert, Layers3, MessageCircle } from 'lucide-react'
import { ContactCta } from '../components/ui/ContactCta'
import { Container } from '../components/ui/Container'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { services } from '../data/services'
import { defaultWhatsAppUrl } from '../lib/whatsapp'
import { Link } from '../lib/router'
import { PageMeta } from '../lib/seo'
import type { Service } from '../types/content'

export function ServiceDetailPage({ service }: { service: Service }) {
  const Icon = service.icon
  const currentIndex = services.findIndex((item) => item.slug === service.slug)
  const related = services[(currentIndex + 1) % services.length]

  return (
    <>
      <PageMeta title={service.title} description={`${service.shortDescription} Conheça as soluções da Ágape Instalações.`} image={service.image} />
      <PageHero eyebrow="Serviço" title={service.title} description={service.shortDescription} breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Serviços', to: '/servicos' }, { label: service.shortTitle }]} image={service.image} imageAlt={service.imageAlt} />
      <section className="section service-detail-intro">
        <Container className="service-detail-intro__grid">
          <aside className="service-side-card"><span><Icon aria-hidden="true" /></span><p>Precisa avaliar este sistema?</p><a className="button button--primary" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer">Falar no WhatsApp <MessageCircle aria-hidden="true" /></a></aside>
          <div className="rich-copy rich-copy--large"><p>{service.description}</p><p>O escopo final é definido após o entendimento da necessidade, das condições existentes e das interfaces com outras disciplinas.</p><div className="service-feature-list">{service.features.map((feature) => <div key={feature}><Check aria-hidden="true" /><span>{feature}</span></div>)}</div></div>
        </Container>
      </section>
      <section className="section service-problems">
        <Container>
          <SectionHeading eyebrow="Problemas que ajudamos a resolver" title="Situações que pedem diagnóstico, organização e execução técnica." />
          <div className="problem-grid">{service.problems.map((problem, index) => <article key={problem}><CircleAlert aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span><h3>{problem}</h3></article>)}</div>
        </Container>
      </section>
      <section className="section service-solutions">
        <Container className="service-solutions__grid">
          <div><SectionHeading eyebrow="Principais soluções" title="Um escopo adaptável à realidade de cada empreendimento." description="A lista abaixo organiza as frentes mais comuns e deve ser confirmada para cada contratação." /><ul>{service.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul></div>
          <div className="service-solutions__media"><ImageWithFallback src={service.image} alt={service.imageAlt} width="900" height="1050" loading="lazy" /></div>
        </Container>
      </section>
      <section className="section building-types">
        <Container className="building-types__grid"><div><Building2 aria-hidden="true" /><h2>Tipos de empreendimento</h2><p>Atuação configurada para diferentes usos e escalas de instalação.</p></div><div className="building-tags">{service.buildingTypes.map((type) => <span key={type}>{type}</span>)}</div></Container>
      </section>
      <section className="section detail-differentials"><Container><SectionHeading eyebrow="Diferenciais de execução" title="Organização que se traduz em menos interferências." /><div className="detail-differentials__grid">{service.differentials.map((item, index) => <article key={item}><Layers3 aria-hidden="true" /><span>0{index + 1}</span><h3>{item}</h3></article>)}</div></Container></section>
      {related && <section className="related-service"><Container className="related-service__inner"><div><p className="eyebrow">Serviço relacionado</p><h2>{related.title}</h2><p>{related.shortDescription}</p></div><Link className="button button--secondary" to={`/servicos/${related.slug}`}>Conhecer serviço <ArrowRight aria-hidden="true" /></Link></Container></section>}
      <ContactCta title={`Vamos conversar sobre ${service.shortTitle.toLowerCase()}?`} description="Compartilhe o contexto, a cidade e o momento do empreendimento para iniciarmos uma avaliação do escopo." />
    </>
  )
}
