import { ArrowRight, Layers3, Wrench } from 'lucide-react'
import { ContactCta } from '../components/ui/ContactCta'
import { Container } from '../components/ui/Container'
import { PageHero } from '../components/ui/PageHero'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { imagery } from '../data/imagery'
import { services } from '../data/services'
import { Link } from '../lib/router'
import { PageMeta } from '../lib/seo'

export function ServicesPage() {
  return (
    <>
      <PageMeta title="Serviços" description="Instalações elétricas, hidráulicas, gás, combate a incêndio, manutenção e assistência técnica para obras e empreendimentos." />
      <PageHero eyebrow="Serviços" title="Soluções completas para sistemas prediais." description="Da implantação à manutenção, diferentes especialidades coordenadas para atender cada fase do empreendimento." breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Serviços' }]} image={imagery.electrician} imageAlt="Execução em quadro elétrico — imagem temporária de acervo" />
      <section className="section services-page-section">
        <Container>
          <SectionHeading eyebrow="Especialidades técnicas" title="Escolha o serviço que mais se aproxima da sua necessidade." description="Cada escopo começa por um entendimento do ambiente, das interfaces e do resultado esperado." />
          <div className="services-grid services-grid--page">{services.map((service, index) => <ServiceCard key={service.slug} service={service} featured={index === 4} />)}</div>
        </Container>
      </section>
      <section className="integrated-section">
        <Container className="integrated-grid">
          <div><span className="section-icon"><Layers3 aria-hidden="true" /></span><h2>Quando as especialidades conversam, a obra avança melhor.</h2></div>
          <div><p>Projetos com múltiplas frentes exigem coordenação de trajetos, acessos, sequências e pontos de interface. A Ágape estrutura esse trabalho para reduzir conflitos durante a execução.</p><ul><li>Leitura integrada do escopo</li><li>Planejamento das interfaces</li><li>Execução por etapas</li><li>Verificação antes da entrega</li></ul><Link className="button button--light" to="/contato">Conversar sobre o escopo <ArrowRight aria-hidden="true" /></Link></div>
        </Container>
      </section>
      <section className="section maintenance-callout"><Container className="maintenance-callout__inner"><Wrench aria-hidden="true" /><div><p className="eyebrow">Manutenção e assistência</p><h2>Precisa resolver uma instalação que já existe?</h2><p>Diagnóstico, ajustes, adequações e manutenção para preservar a continuidade da operação.</p></div><Link className="button button--secondary" to="/servicos/assistencia-tecnica">Ver assistência técnica <ArrowRight aria-hidden="true" /></Link></Container></section>
      <ContactCta title="Qual sistema precisa funcionar melhor?" />
    </>
  )
}
