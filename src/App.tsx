import { SiteLayout } from './components/layout/SiteLayout'
import { getProjectBySlug } from './data/projects'
import { getServiceBySlug } from './data/services'
import { useRouter } from './lib/router'
import { CompanyPage } from './pages/CompanyPage'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { ServicesPage } from './pages/ServicesPage'

function App() {
  const { pathname } = useRouter()
  const segments = pathname.split('/').filter(Boolean)

  let page
  if (pathname === '/') page = <HomePage />
  else if (pathname === '/empresa') page = <CompanyPage />
  else if (pathname === '/servicos') page = <ServicesPage />
  else if (segments[0] === 'servicos' && segments.length === 2) {
    const service = getServiceBySlug(decodeURIComponent(segments[1]))
    page = service ? <ServiceDetailPage service={service} /> : <NotFoundPage />
  } else if (pathname === '/projetos') page = <ProjectsPage />
  else if (segments[0] === 'projetos' && segments.length === 2) {
    const project = getProjectBySlug(decodeURIComponent(segments[1]))
    page = project ? <ProjectDetailPage project={project} /> : <NotFoundPage />
  } else if (pathname === '/contato') page = <ContactPage />
  else if (pathname === '/politica-de-privacidade') page = <PrivacyPage />
  else page = <NotFoundPage />

  return (
    <SiteLayout>{page}</SiteLayout>
  )
}

export default App
