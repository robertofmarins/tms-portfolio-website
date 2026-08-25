import { company } from '../../data/company'

interface BrandMarkProps { inverse?: boolean }

export function BrandMark({ inverse = false }: BrandMarkProps) {
  if (company.brand.logoPath) {
    return <img className="brand-mark__image" src={company.brand.logoPath} alt={company.name} width="190" height="58" />
  }

  return (
    <span className={`brand-mark ${inverse ? 'brand-mark--inverse' : ''}`} aria-label={company.name}>
      <span className="brand-mark__name">Ágape</span>
      <span className="brand-mark__descriptor">Instalações</span>
    </span>
  )
}
