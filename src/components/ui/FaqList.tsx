import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '../../types/content'

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question} className="faq-item">
          <summary><span className="faq-item__number">{String(index + 1).padStart(2, '0')}</span><span>{item.question}</span><ChevronDown aria-hidden="true" /></summary>
          <div className="faq-item__answer"><p>{item.answer}</p></div>
        </details>
      ))}
    </div>
  )
}
