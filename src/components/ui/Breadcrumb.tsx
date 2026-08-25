import { ChevronRight } from 'lucide-react'
import { Link } from '../../lib/router'

interface BreadcrumbItem { label: string; to?: string }

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumb" aria-label="Navegação estrutural">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            {index < items.length - 1 && <ChevronRight aria-hidden="true" size={14} />}
          </li>
        ))}
      </ol>
    </nav>
  )
}
