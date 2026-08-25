import { ArrowRight, MessageCircle } from 'lucide-react'
import { defaultWhatsAppUrl } from '../../lib/whatsapp'
import { Link } from '../../lib/router'
import { Container } from './Container'

interface ContactCtaProps { title?: string; description?: string }

export function ContactCta({ title = 'Vamos conversar sobre seu projeto?', description = 'Conte o que sua obra ou instalação precisa. A partir dessas informações, organizamos o primeiro entendimento do escopo.' }: ContactCtaProps) {
  return (
    <section className="contact-cta">
      <Container className="contact-cta__inner">
        <div><p className="eyebrow">Próximo passo</p><h2>{title}</h2><p>{description}</p></div>
        <div className="contact-cta__actions">
          <Link className="button button--light button--large" to="/contato">Solicitar orçamento <ArrowRight aria-hidden="true" size={19} /></Link>
          <a className="button button--outline-light button--large" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={19} />Falar no WhatsApp</a>
        </div>
      </Container>
    </section>
  )
}
