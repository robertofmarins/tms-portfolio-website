import { ArrowDownRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { company } from '../data/company'
import { imagery } from '../data/imagery'
import { Link } from '../lib/router'
import { PageMeta } from '../lib/seo'
import {
  AboutPreview,
  AssistanceSection,
  FaqSection,
  ProcessSection,
  ProjectsPreview,
  QualitySection,
  SectorsSection,
  ServicesPreview,
  WhyAgape,
} from '../components/home/HomeSections'
import { ContactCta } from '../components/ui/ContactCta'

const trustPoints = ['Soluções sob medida', 'Atendimento técnico', 'Execução e manutenção']

export function HomePage() {
  return (
    <>
      <PageMeta title="Ágape Instalações | Engenharia e Instalações Prediais" description="Instalações elétricas, hidráulicas, gás, sistemas de combate a incêndio, manutenção e assistência técnica para obras e empreendimentos." />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media" aria-hidden="true"><img src={imagery.hero} alt="" width="2000" height="1333" fetchPriority="high" /></div>
        <div className="hero__scrim" />
        <Container className="hero__content">
          <p className="eyebrow eyebrow--light">{company.positioning}</p>
          <h1 id="hero-title">Engenharia e instalações que fazem cada projeto funcionar.</h1>
          <p className="hero__lead">Soluções completas em instalações elétricas, hidráulicas, gás, sistemas de combate a incêndio e assistência técnica para obras e empreendimentos.</p>
          <div className="hero__actions">
            <Link className="button button--primary button--large" to="/contato">Solicitar orçamento <ArrowUpRight aria-hidden="true" size={20} /></Link>
            <Link className="button button--ghost button--large" to="/servicos">Conhecer nossos serviços <ArrowDownRight aria-hidden="true" size={20} /></Link>
          </div>
          <ul className="hero__trust" aria-label="Diferenciais de atendimento">
            {trustPoints.map((point) => <li key={point}><CheckCircle2 aria-hidden="true" size={17} />{point}</li>)}
          </ul>
        </Container>
        <div className="hero__index" aria-hidden="true"><span>01</span><i /></div>
      </section>
      <section className="stats" aria-label="Indicadores da Ágape Instalações">
        <Container className="stats__grid">
          {company.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </Container>
      </section>
      <ServicesPreview />
      <WhyAgape />
      <ProjectsPreview />
      <SectorsSection />
      <ProcessSection />
      <AssistanceSection />
      <QualitySection />
      <AboutPreview />
      <FaqSection />
      <ContactCta />
    </>
  )
}
