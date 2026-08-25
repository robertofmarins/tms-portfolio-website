import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow: string
  title: ReactNode
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, light = false, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}
