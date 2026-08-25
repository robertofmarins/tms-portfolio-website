import type { LucideIcon } from 'lucide-react'

export type ProjectFilter = 'Elétrica' | 'Hidráulica' | 'Gás' | 'Incêndio' | 'Manutenção'

export interface Service {
  slug: string
  title: string
  shortTitle: string
  shortDescription: string
  description: string
  icon: LucideIcon
  features: string[]
  problems: string[]
  buildingTypes: string[]
  differentials: string[]
  image: string
  imageAlt: string
}

export interface Project {
  slug: string
  title: string
  segment: string
  location: string
  year: string
  filters: ProjectFilter[]
  services: string[]
  description: string
  scope: string
  challenge: string
  solution: string
  coverImage: string
  coverAlt: string
  gallery: Array<{ src: string; alt: string }>
}

export interface FaqItem {
  question: string
  answer: string
}
