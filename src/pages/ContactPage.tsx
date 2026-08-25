import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { Container } from '../components/ui/Container'
import { PageHero } from '../components/ui/PageHero'
import { company } from '../data/company'
import { imagery } from '../data/imagery'
import { services } from '../data/services'
import { Link } from '../lib/router'
import { PageMeta } from '../lib/seo'
import { createWhatsAppUrl, defaultWhatsAppUrl } from '../lib/whatsapp'

interface QuoteFormData {
  name: string
  organization: string
  phone: string
  email: string
  service: string
  city: string
  message: string
  consent: boolean
}

const initialForm: QuoteFormData = { name: '', organization: '', phone: '', email: '', service: '', city: '', message: '', consent: false }

export function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({})
  const [readyMessage, setReadyMessage] = useState('')
  const [statusTone, setStatusTone] = useState<'idle' | 'error' | 'success'>('idle')

  const setField = <K extends keyof QuoteFormData>(field: K, value: QuoteFormData[K]) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setReadyMessage('')
    setStatusTone('idle')
  }

  const validate = () => {
    const nextErrors: Partial<Record<keyof QuoteFormData, string>> = {}
    if (form.name.trim().length < 2) nextErrors.name = 'Informe seu nome.'
    if (form.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Informe um telefone ou WhatsApp válido.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Informe um e-mail válido.'
    if (!form.service) nextErrors.service = 'Selecione o serviço desejado.'
    if (form.city.trim().length < 2) nextErrors.city = 'Informe a cidade.'
    if (form.message.trim().length < 10) nextErrors.message = 'Descreva brevemente a sua necessidade.'
    if (!form.consent) nextErrors.consent = 'É necessário concordar com o uso dos dados para o contato.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      setReadyMessage('Revise os campos destacados antes de continuar.')
      setStatusTone('error')
      return
    }
    const message = [
      `Olá, ${company.name}.`, '', 'Gostaria de solicitar um orçamento.', '',
      `Nome: ${form.name}`,
      `Empresa ou condomínio: ${form.organization || 'Não informado'}`,
      `Cidade: ${form.city}`,
      `Serviço: ${form.service}`,
      `Telefone: ${form.phone}`,
      `E-mail: ${form.email}`,
      `Mensagem: ${form.message}`,
    ].join('\n')
    setReadyMessage('Mensagem organizada. O WhatsApp será aberto para você confirmar o envio.')
    setStatusTone('success')
    window.open(createWhatsAppUrl(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageMeta title="Contato" description="Solicite um orçamento para instalações prediais, manutenção e assistência técnica com a Ágape Instalações." />
      <PageHero eyebrow="Contato" title="Conte o que seu projeto precisa." description="Compartilhe as primeiras informações. Organizamos a mensagem e abrimos o WhatsApp para você confirmar o envio." breadcrumbs={[{ label: 'Início', to: '/' }, { label: 'Contato' }]} image={imagery.pipeInspection} imageAlt="Inspeção técnica em obra — imagem temporária de acervo" />
      <section className="section contact-page">
        <Container className="contact-layout">
          <aside className="contact-info">
            <div><p className="eyebrow">Canais diretos</p><h2>Fale com a Ágape do jeito mais simples.</h2><p>Os dados abaixo são provisórios e devem ser substituídos pelas informações oficiais do cliente.</p></div>
            <div className="contact-cards">
              <a href={defaultWhatsAppUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span><small>WhatsApp</small><strong>{company.phone}</strong></span><ArrowUpRight aria-hidden="true" /></a>
              <a href={`tel:${company.phone.replace(/\D/g, '')}`}><Phone aria-hidden="true" /><span><small>Telefone</small><strong>{company.phone}</strong></span></a>
              <a href={`mailto:${company.email}`}><Mail aria-hidden="true" /><span><small>E-mail</small><strong>{company.email}</strong></span></a>
              <div><Clock aria-hidden="true" /><span><small>Atendimento</small><strong>{company.businessHours}</strong></span></div>
              <div><MapPin aria-hidden="true" /><span><small>Região atendida</small><strong>{company.serviceArea}</strong></span></div>
            </div>
          </aside>

          <div className="quote-form-wrap">
            <div className="quote-form__header"><span>Solicitação de orçamento</span><p>Preencha os campos obrigatórios. Nenhum dado é enviado a um servidor.</p></div>
            <form className="quote-form" onSubmit={handleSubmit} noValidate>
              <div className="field"><label htmlFor="name">Nome *</label><input id="name" name="name" value={form.name} onChange={(event) => setField('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} autoComplete="name" />{errors.name && <span id="name-error" className="field-error">{errors.name}</span>}</div>
              <div className="field"><label htmlFor="organization">Empresa ou condomínio</label><input id="organization" name="organization" value={form.organization} onChange={(event) => setField('organization', event.target.value)} autoComplete="organization" /></div>
              <div className="field"><label htmlFor="phone">Telefone/WhatsApp *</label><input id="phone" name="phone" type="tel" value={form.phone} onChange={(event) => setField('phone', event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} autoComplete="tel" placeholder="(00) 00000-0000" />{errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}</div>
              <div className="field"><label htmlFor="email">E-mail *</label><input id="email" name="email" type="email" value={form.email} onChange={(event) => setField('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} autoComplete="email" />{errors.email && <span id="email-error" className="field-error">{errors.email}</span>}</div>
              <div className="field"><label htmlFor="service">Serviço desejado *</label><select id="service" name="service" value={form.service} onChange={(event) => setField('service', event.target.value)} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? 'service-error' : undefined}><option value="">Selecione uma opção</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}</select>{errors.service && <span id="service-error" className="field-error">{errors.service}</span>}</div>
              <div className="field"><label htmlFor="city">Cidade *</label><input id="city" name="city" value={form.city} onChange={(event) => setField('city', event.target.value)} aria-invalid={Boolean(errors.city)} aria-describedby={errors.city ? 'city-error' : undefined} autoComplete="address-level2" />{errors.city && <span id="city-error" className="field-error">{errors.city}</span>}</div>
              <div className="field field--full"><label htmlFor="message">Mensagem *</label><textarea id="message" name="message" rows={5} value={form.message} onChange={(event) => setField('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} placeholder="Conte brevemente sobre o local, a etapa da obra e o que precisa ser executado." />{errors.message && <span id="message-error" className="field-error">{errors.message}</span>}</div>
              <div className="consent-field field--full"><input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={(event) => setField('consent', event.target.checked)} aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? 'consent-error' : undefined} /><label htmlFor="consent">Concordo com o uso destes dados exclusivamente para retorno sobre minha solicitação, conforme a <Link to="/politica-de-privacidade">Política de Privacidade</Link>. *</label>{errors.consent && <span id="consent-error" className="field-error">{errors.consent}</span>}</div>
              {readyMessage && <div className={`form-status field--full form-status--${statusTone}`} role="status">{readyMessage}</div>}
              <div className="quote-form__footer field--full"><p>Ao continuar, você revisa e envia a mensagem diretamente pelo WhatsApp.</p><button className="button button--primary button--large" type="submit">Organizar mensagem e abrir WhatsApp <MessageCircle aria-hidden="true" /></button></div>
            </form>
          </div>
        </Container>
      </section>
    </>
  )
}
