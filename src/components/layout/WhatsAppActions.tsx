import { FileText, MessageCircle } from 'lucide-react'
import { defaultWhatsAppUrl } from '../../lib/whatsapp'
import { Link } from '../../lib/router'

export function WhatsAppActions() {
  return (
    <>
      <a className="floating-whatsapp" href={defaultWhatsAppUrl} target="_blank" rel="noreferrer" aria-label="Conversar com a Ágape no WhatsApp"><MessageCircle aria-hidden="true" /><span>WhatsApp</span></a>
      <div className="mobile-action-bar" aria-label="Ações rápidas">
        <a href={defaultWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span>WhatsApp</span></a>
        <Link to="/contato"><FileText aria-hidden="true" /><span>Solicitar orçamento</span></Link>
      </div>
    </>
  )
}
