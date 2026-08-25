import { Container } from './Container'
import { Breadcrumb } from './Breadcrumb'
import { ImageWithFallback } from './ImageWithFallback'

interface PageHeroProps {
  eyebrow: string
  title: string
  description: string
  breadcrumbs: Array<{ label: string; to?: string }>
  image?: string
  imageAlt?: string
}

export function PageHero({ eyebrow, title, description, breadcrumbs, image, imageAlt = '' }: PageHeroProps) {
  return (
    <section className={`page-hero ${image ? 'page-hero--with-media' : ''}`}>
      <Container className="page-hero__grid">
        <div className="page-hero__content">
          <Breadcrumb items={breadcrumbs} />
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {image && <div className="page-hero__media"><ImageWithFallback src={image} alt={imageAlt} width="1100" height="900" /></div>}
      </Container>
    </section>
  )
}
