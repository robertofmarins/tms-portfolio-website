import { ArrowRight, ArrowUpRight, Check, ClipboardCheck, FileCheck2, HardHat, MessageCircle, ShieldCheck, Wrench } from 'lucide-react'
import { company, differentiators, processSteps, sectors } from '../../data/company'
import { faqItems } from '../../data/faq'
import { imagery } from '../../data/imagery'
import { projects } from '../../data/projects'
import { services } from '../../data/services'
import { defaultWhatsAppUrl } from '../../lib/whatsapp'
import { Link } from '../../lib/router'
import { Container } from '../ui/Container'
import { FaqList } from '../ui/FaqList'
import { ImageWithFallback } from '../ui/ImageWithFallback'
import { ProjectCard } from '../ui/ProjectCard'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from '../ui/ServiceCard'

export function ServicesPreview() {
  return (
    <section className="section services-section">
      <Container>
        <div className="section-intro-row">
          <SectionHeading eyebrow="Especialidades" title="Soluções completas em instalações" description="Da implantação à manutenção, a Ágape oferece soluções técnicas para diferentes etapas e necessidades de cada empreendimento." />
          <Link className="text-link text-link--large" to="/servicos">Conhecer todos os serviços <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="services-grid">{services.map((service, index) => <ServiceCard key={service.slug} service={service} featured={index === 0} />)}</div>
      </Container>
    </section>
  )
}

export function WhyAgape() {
  return (
    <section className="section why-section">
      <Container className="why-grid">
        <div className="why-media">
          <ImageWithFallback src={imagery.pipeInspection} alt="Inspeção de infraestrutura predial — imagem temporária de acervo" width="900" height="1100" loading="lazy" />
          <div className="why-media__note"><HardHat aria-hidden="true" /><span>Visão integrada da execução à manutenção</span></div>
        </div>
        <div className="why-content">
          <SectionHeading eyebrow="Por que a Ágape" title="Decisões técnicas que protegem o andamento da obra." description="Uma boa instalação começa antes da execução. Ela exige leitura de contexto, organização das interfaces e continuidade no acompanhamento." />
          <div className="differentials-list">
            {differentiators.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></article>)}
          </div>
          <Link className="button button--dark" to="/empresa">Conhecer a empresa <ArrowRight aria-hidden="true" size={18} /></Link>
        </div>
      </Container>
    </section>
  )
}

export function ProjectsPreview() {
  return (
    <section className="section projects-preview">
      <Container>
        <div className="section-intro-row">
          <SectionHeading eyebrow="Portfólio" title="Projetos que mostram como trabalhamos" description="Uma estrutura pronta para receber os casos reais da Ágape, com escopo, desafios e soluções de cada empreendimento." />
          <Link className="text-link text-link--large" to="/projetos">Ver todos os projetos <ArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="provisional-note"><FileCheck2 aria-hidden="true" /><p><strong>Conteúdo ilustrativo:</strong> nomes, locais e escopos serão substituídos pelo portfólio real da empresa.</p></div>
        <div className="projects-grid">{projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} priority={index === 0} />)}</div>
      </Container>
    </section>
  )
}

export function SectorsSection() {
  return (
    <section className="sectors-section">
      <Container className="sectors-layout">
        <div><p className="eyebrow">Setores atendidos</p><h2>Experiência para diferentes tipos de empreendimento.</h2></div>
        <div className="sectors-list">{sectors.map((sector, index) => <div key={sector}><span>{String(index + 1).padStart(2, '0')}</span><strong>{sector}</strong><i /></div>)}</div>
      </Container>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="section process-section">
      <Container>
        <SectionHeading eyebrow="Como trabalhamos" title="Um processo claro do entendimento à entrega" description="Cada etapa organiza decisões, reduz incertezas e mantém o cliente próximo do andamento do trabalho." />
        <ol className="process-timeline">{processSteps.map((step) => <li key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol>
      </Container>
    </section>
  )
}

export function AssistanceSection() {
  return (
    <section className="assistance-section">
      <Container className="assistance-grid">
        <div className="assistance-content">
          <span className="section-icon"><Wrench aria-hidden="true" /></span>
          <p className="eyebrow">Assistência técnica</p>
          <h2>Sua instalação precisa continuar funcionando depois da entrega.</h2>
          <p>A Ágape também atua em manutenção, adequações e assistência técnica para sistemas existentes, ajudando empresas, condomínios e empreendimentos a manter suas instalações seguras e operacionais.</p>
          <a className="button button--light button--large" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer">Solicitar atendimento técnico <MessageCircle aria-hidden="true" size={19} /></a>
        </div>
        <div className="assistance-media"><ImageWithFallback src={imagery.maintenance} alt="Manutenção em infraestrutura — imagem temporária de acervo" width="1000" height="900" loading="lazy" /></div>
      </Container>
    </section>
  )
}

const qualityPoints = [
  { icon: ClipboardCheck, title: 'Planejamento técnico' },
  { icon: HardHat, title: 'Organização da execução' },
  { icon: ShieldCheck, title: 'Verificação e qualidade' },
  { icon: FileCheck2, title: 'Registro das etapas' },
]

export function QualitySection() {
  return (
    <section className="section quality-section">
      <Container className="quality-grid">
        <div><SectionHeading eyebrow="Qualidade e segurança" title="Técnica, segurança e responsabilidade em cada etapa." description="Uma instalação bem executada precisa entregar mais do que funcionamento: deve proporcionar confiança, organização e facilidade de manutenção durante sua vida útil." /></div>
        <div className="quality-points">{qualityPoints.map(({ icon: Icon, title }) => <article key={title}><Icon aria-hidden="true" /><h3>{title}</h3><p>Critérios incorporados ao acompanhamento e às decisões de cada frente de trabalho.</p></article>)}</div>
      </Container>
    </section>
  )
}

export function AboutPreview() {
  return (
    <section className="section about-preview">
      <Container className="about-preview__grid">
        <div className="about-preview__title"><p className="eyebrow">Sobre a Ágape</p><h2>Experiência técnica que acompanha cada etapa da sua obra.</h2></div>
        <div className="about-preview__copy"><p>A {company.name} atua com soluções técnicas para sistemas prediais, unindo planejamento, execução e assistência para atender obras e empreendimentos de diferentes portes.</p><ul>{['Planejamento antes de executar', 'Acompanhamento das interfaces', 'Testes e verificação', 'Assistência para a continuidade'].map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul><Link className="text-link text-link--large" to="/empresa">Conhecer nossa forma de trabalhar <ArrowUpRight aria-hidden="true" /></Link></div>
      </Container>
    </section>
  )
}

export function FaqSection() {
  return (
    <section className="section faq-section">
      <Container className="faq-layout"><div className="faq-intro"><SectionHeading eyebrow="Dúvidas frequentes" title="Informações para começar uma conversa mais objetiva." description="Se a sua necessidade não estiver aqui, envie uma mensagem. O primeiro entendimento ajuda a direcionar a proposta." /><Link className="button button--secondary" to="/contato">Falar com a Ágape <ArrowRight aria-hidden="true" size={18} /></Link></div><FaqList items={faqItems} /></Container>
    </section>
  )
}
