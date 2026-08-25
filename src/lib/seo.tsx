import { useEffect } from 'react'
import { company } from '../data/company'

interface PageMetaProps {
  title: string
  description: string
  image?: string | null
}

function setMeta(selector: string, attribute: 'name' | 'property', value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`${selector}[${attribute}="${value}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, value)
    document.head.appendChild(element)
  }
  element.content = content
}

export function PageMeta({ title, description, image = '/og.png' }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = title.includes(company.name) ? title : `${title} | ${company.name}`
    const absoluteImage = image ? new URL(image, window.location.origin).href : ''
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = new URL(window.location.pathname, window.location.origin).href
    document.title = fullTitle
    setMeta('meta', 'name', 'description', description)
    setMeta('meta', 'property', 'og:title', fullTitle)
    setMeta('meta', 'property', 'og:description', description)
    setMeta('meta', 'name', 'twitter:title', fullTitle)
    setMeta('meta', 'name', 'twitter:description', description)
    if (absoluteImage) {
      setMeta('meta', 'property', 'og:image', absoluteImage)
      setMeta('meta', 'name', 'twitter:image', absoluteImage)
    } else {
      document.head.querySelector('meta[property="og:image"]')?.remove()
      document.head.querySelector('meta[name="twitter:image"]')?.remove()
    }
  }, [title, description, image])

  return null
}

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    description: company.positioning,
    telephone: company.phone,
    email: company.email,
    address: company.address,
    areaServed: company.serviceArea,
    url: window.location.origin,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
