import { ArrowLeft, Calendar, Check, MapPin, Shapes } from 'lucide-react'
import { ContactCta } from '../components/ui/ContactCta'
import { Container } from '../components/ui/Container'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'
import { Link } from '../lib/router'
import { PageMeta } from '../lib/seo'
import type { Project } from '../types/content'

export function ProjectDetailPage({ project }: { project: Project }) {
  const related = projects.find((item) => item.slug !== project.slug && item.filters.some((filter) => project.filters.includes(filter)))
  return (
    <>
      <PageMeta title={project.title} description={project.description} image={project.coverImage} />
      <PageHero eyebrow="Projeto ilustrativo" title={project.title} description={project.description} breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Projetos', to: '/projetos' }, { label: project.segment }]} image={project.coverImage} imageAlt={project.coverAlt} />
      <section className="project-facts"><Container className="project-facts__grid"><div><MapPin aria-hidden="true" /><span>Local</span><strong>{project.location}</strong></div><div><Calendar aria-hidden="true" /><span>Ano</span><strong>{project.year}</strong></div><div><Shapes aria-hidden="true" /><span>Segmento</span><strong>{project.segment}</strong></div><div><Check aria-hidden="true" /><span>Serviços</span><strong>{project.services.join(' + ')}</strong></div></Container></section>
      <section className="section project-story"><Container className="project-story__grid"><div><SectionHeading eyebrow="Escopo" title="O que o projeto precisava entregar" /><p>{project.scope}</p></div><div className="story-pair"><article><span>01</span><h2>Desafio</h2><p>{project.challenge}</p></article><article><span>02</span><h2>Solução</h2><p>{project.solution}</p></article></div></Container></section>
      <section className="section project-gallery"><Container><SectionHeading eyebrow="Galeria" title="Registros visuais do escopo" description="Imagens temporárias para definir o padrão de apresentação do portfólio real." /><div className="project-gallery__grid">{project.gallery.map((image, index) => <figure key={`${image.src}-${index}`}><ImageWithFallback src={image.src} alt={image.alt} width="1200" height="900" loading="lazy" /><figcaption>Imagem ilustrativa temporária — substituir por registro da obra</figcaption></figure>)}</div></Container></section>
      {related && <section className="next-project"><Container className="next-project__inner"><Link className="text-link" to="/projetos"><ArrowLeft aria-hidden="true" />Voltar aos projetos</Link><div><p className="eyebrow">Projeto relacionado</p><h2>{related.title}</h2><Link className="button button--secondary" to={`/projetos/${related.slug}`}>Ver projeto</Link></div></Container></section>}
      <ContactCta title="Vamos avaliar o seu projeto?" description="Envie o tipo de instalação, a cidade e o momento atual do empreendimento para iniciarmos o entendimento." />
    </>
  )
}
