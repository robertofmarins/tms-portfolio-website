import { company } from '../data/company'

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`
}

export const defaultWhatsAppUrl = createWhatsAppUrl(company.whatsappMessage)
