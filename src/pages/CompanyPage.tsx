import { ArrowRight, Check, Eye, Flag, ShieldCheck } from 'lucide-react'
import { ContactCta } from '../components/ui/ContactCta'
import { Container } from '../components/ui/Container'
import { ImageWithFallback } from '../components/ui/ImageWithFallback'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { company, processSteps } from '../data/company'
import { imagery } from '../data/imagery'
import { Link } from '../lib/router'
import { PageMeta } from '../lib/seo'

export function CompanyPage() {
  return (
    <>
      <PageMeta title="Empresa" description="Conheça a Ágape Instalações, sua forma de trabalhar e o compromisso com planejamento, execução e assistência técnica." />
      <PageHero eyebrow="Empresa" title="Experiência técnica que acompanha cada etapa da sua obra." description="Planejamento, execução e assistência conectados para entregar instalações organizadas e preparadas para a continuidade." breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Empresa' }]} image={imagery.hero} imageAlt="Infraestrutura técnica predial — imagem temporária de acervo" />

      <section className="section company-intro">
        <Container className="company-intro__grid">
          <SectionHeading eyebrow="Quem somos" title="Instalações tratadas como parte estratégica do empreendimento." />
          <div className="rich-copy"><p>A {company.name} atua com soluções técnicas para sistemas prediais, unindo planejamento, execução e assistência para atender obras e empreendimentos de diferentes portes.</p><p>Nossa forma de trabalhar considera as interfaces entre especialidades, o contexto de uso e a manutenção futura — fatores que ajudam a reduzir imprevistos e preservar a operação.</p><Link className="text-link text-link--large" to="/servicos">Conhecer nossas especialidades <ArrowRight aria-hidden="true" /></Link></div>
        </Container>
      </section>

      <section className="company-stats" aria-label="Indicadores provisórios da empresa"><Container className="company-stats__grid">{company.stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</Container></section>

      <section className="section work-method">
        <Container>
          <SectionHeading eyebrow="Nossa forma de trabalhar" title="Clareza em cada etapa, do primeiro levantamento à assistência." description="Um método simples de entender e preparado para ser ajustado à escala e às necessidades de cada contrato." />
          <ol className="method-grid">{processSteps.map((step) => <li key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.description}</p></div></li>)}</ol>
        </Container>
      </section>

      <section className="section purpose-section">
        <Container className="purpose-grid">
          <div className="purpose-media"><ImageWithFallback src={imagery.pipeTeam} alt="Equipe trabalhando em infraestrutura — imagem temporária de acervo" width="1000" height="900" loading="lazy" /></div>
          <div className="purpose-content">
            <SectionHeading eyebrow="Direção institucional" title="Responsabilidade técnica traduzida em decisões objetivas." />
            <article><Flag aria-hidden="true" /><div><h3>Missão</h3><p>{company.mission}</p><small>Conteúdo institucional provisório</small></div></article>
            <article><Eye aria-hidden="true" /><div><h3>Visão</h3><p>{company.vision}</p><small>Conteúdo institucional provisório</small></div></article>
          </div>
        </Container>
      </section>

      <section className="section values-section">
        <Container>
          <div className="section-intro-row"><SectionHeading eyebrow="Valores" title="Princípios que orientam a relação com a obra e com o cliente." /><ShieldCheck aria-hidden="true" className="values-section__icon" /></div>
          <div className="values-grid">{company.values.map((value, index) => <div key={value}><span>{String(index + 1).padStart(2, '0')}</span><strong>{value}</strong><Check aria-hidden="true" /></div>)}</div>
        </Container>
      </section>
      <ContactCta />
    </>
  )
}
