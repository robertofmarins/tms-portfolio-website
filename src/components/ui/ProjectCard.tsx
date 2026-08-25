import { ArrowUpRight, MapPin } from 'lucide-react'
import type { Project } from '../../types/content'
import { Link } from '../../lib/router'
import { ImageWithFallback } from './ImageWithFallback'

export function ProjectCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="project-card">
      <Link className="project-card__media" to={`/projetos/${project.slug}`} aria-label={`Ver projeto: ${project.title}`}>
        <ImageWithFallback src={project.coverImage} alt={project.coverAlt} width="800" height="600" loading={priority ? 'eager' : 'lazy'} />
        <span className="project-card__year">{project.year}</span>
        <span className="project-card__arrow"><ArrowUpRight aria-hidden="true" /></span>
      </Link>
      <div className="project-card__body">
        <div className="project-card__meta"><span>{project.segment}</span><span><MapPin aria-hidden="true" size={14} />{project.location}</span></div>
        <h3><Link to={`/projetos/${project.slug}`}>{project.title}</Link></h3>
        <p>{project.description}</p>
        <div className="tag-row">{project.services.map((service) => <span key={service}>{service}</span>)}</div>
      </div>
    </article>
  )
}
