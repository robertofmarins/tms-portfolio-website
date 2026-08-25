import { Filter, FolderOpen } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ContactCta } from '../components/ui/ContactCta'
import { Container } from '../components/ui/Container'
import { PageHero } from '../components/ui/PageHero'
import { ProjectCard } from '../components/ui/ProjectCard'
import { SectionHeading } from '../components/ui/SectionHeading'
import { imagery } from '../data/imagery'
import { projectFilters, projects } from '../data/projects'
import { PageMeta } from '../lib/seo'
import type { ProjectFilter } from '../types/content'

type FilterValue = 'Todos' | ProjectFilter

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('Todos')
  const filteredProjects = useMemo(() => activeFilter === 'Todos' ? projects : projects.filter((project) => project.filters.includes(activeFilter)), [activeFilter])

  return (
    <>
      <PageMeta title="Projetos" description="Conheça a estrutura de portfólio da Ágape Instalações para projetos elétricos, hidráulicos, gás, incêndio e manutenção." />
      <PageHero eyebrow="Projetos" title="Escopo, desafios e soluções em cada entrega." description="Um portfólio organizado para apresentar a experiência técnica da Ágape em diferentes especialidades e segmentos." breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Projetos' }]} image={imagery.fireSystem} imageAlt="Infraestrutura de combate a incêndio — imagem temporária de acervo" />
      <section className="section projects-page">
        <Container>
          <div className="section-intro-row"><SectionHeading eyebrow="Portfólio ilustrativo" title="Explore por especialidade" description="Os projetos abaixo são fictícios e estruturam a interface até a entrada dos casos reais da empresa." /><div className="filter-label"><Filter aria-hidden="true" />Filtrar projetos</div></div>
          <div className="project-filters" role="group" aria-label="Filtrar projetos por especialidade">{projectFilters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? 'is-active' : ''} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div>
          {filteredProjects.length > 0 ? <div className="projects-grid projects-grid--page">{filteredProjects.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index < 2} />)}</div> : <div className="empty-state"><FolderOpen aria-hidden="true" /><h2>Nenhum projeto encontrado</h2><p>Não há projetos cadastrados neste filtro. Selecione outra especialidade.</p><button className="button button--secondary" type="button" onClick={() => setActiveFilter('Todos')}>Ver todos</button></div>}
        </Container>
      </section>
      <ContactCta title="Tem um desafio parecido no seu empreendimento?" />
    </>
  )
}
