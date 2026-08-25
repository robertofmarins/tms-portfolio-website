import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../../data/company'
import { services } from '../../data/services'
import { defaultWhatsAppUrl } from '../../lib/whatsapp'
import { Link } from '../../lib/router'
import { BrandMark } from '../ui/BrandMark'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand"><Link to="/" aria-label="Voltar ao início"><BrandMark inverse /></Link><p>Soluções técnicas em instalações para obras, empresas, condomínios e empreendimentos.</p></div>
          <div><h2>Navegação</h2><nav aria-label="Navegação do rodapé"><Link to="/empresa">Empresa</Link><Link to="/servicos">Serviços</Link><Link to="/projetos">Projetos</Link><Link to="/contato">Contato</Link></nav></div>
          <div><h2>Serviços</h2><nav aria-label="Serviços no rodapé">{services.map((service) => <Link key={service.slug} to={`/servicos/${service.slug}`}>{service.shortTitle}</Link>)}</nav></div>
          <div className="footer-contact"><h2>Contato</h2><a href={`tel:${company.phone.replace(/\D/g, '')}`}><Phone aria-hidden="true" />{company.phone}</a><a href={defaultWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />WhatsApp</a><a href={`mailto:${company.email}`}><Mail aria-hidden="true" />{company.email}</a><span><MapPin aria-hidden="true" />{company.serviceArea}</span></div>
        </div>
        <div className="footer-bottom"><p>© {new Date().getFullYear()} {company.name}. Todos os direitos reservados.</p><Link to="/politica-de-privacidade">Política de Privacidade</Link><span>Dados de contato provisórios</span></div>
      </Container>
    </footer>
  )
}
