import { imagery } from './imagery'
import type { Project, ProjectFilter } from '../types/content'

// TODO CLIENTE: todos os projetos abaixo são fictícios e devem ser substituídos pelo portfólio real.
export const projects: Project[] = [
  {
    slug: 'retrofit-edificio-corporativo',
    title: 'Retrofit de Instalações — Edifício Corporativo',
    segment: 'Corporativo', location: 'Cidade/UF', year: '2026', filters: ['Elétrica', 'Hidráulica'],
    services: ['Instalações elétricas', 'Instalações hidráulicas'],
    description: 'Modernização coordenada de sistemas prediais em edifício corporativo em operação.',
    scope: 'Reorganização de infraestrutura, novos circuitos, adequação de pontos hidráulicos e execução por pavimentos.',
    challenge: 'Compatibilizar as novas instalações com a estrutura existente e reduzir interferências na rotina do empreendimento.',
    solution: 'Planejamento por etapas, mapeamento de interferências e execução setorizada com verificações a cada entrega.',
    coverImage: imagery.electrician, coverAlt: 'Profissional em quadro elétrico — imagem ilustrativa temporária',
    gallery: [{ src: imagery.electrician, alt: 'Execução elétrica — imagem ilustrativa temporária' }, { src: imagery.pipeInspection, alt: 'Inspeção de infraestrutura — imagem ilustrativa temporária' }],
  },
  {
    slug: 'combate-incendio-galpao-logistico',
    title: 'Sistema de Combate a Incêndio — Galpão Logístico',
    segment: 'Logístico', location: 'Cidade/UF', year: '2026', filters: ['Incêndio'],
    services: ['Infraestrutura de incêndio', 'Tubulações e componentes'],
    description: 'Implantação de infraestrutura para proteção de um novo centro de distribuição.',
    scope: 'Rede de tubulações, pontos de hidrantes, componentes de distribuição e suporte à etapa de testes.',
    challenge: 'Executar uma rede extensa em paralelo às demais frentes de implantação do galpão.',
    solution: 'Sequenciamento por eixos, coordenação dos acessos e conferência contínua dos trechos executados.',
    coverImage: imagery.fireSystem, coverAlt: 'Tubulações de combate a incêndio — imagem ilustrativa temporária',
    gallery: [{ src: imagery.fireSystem, alt: 'Rede de incêndio — imagem ilustrativa temporária' }, { src: imagery.pipeTeam, alt: 'Equipe em infraestrutura — imagem ilustrativa temporária' }],
  },
  {
    slug: 'adequacao-gas-condominio',
    title: 'Adequação de Rede de Gás — Condomínio Residencial',
    segment: 'Residencial', location: 'Cidade/UF', year: '2025', filters: ['Gás'],
    services: ['Rede de gás', 'Adequações e manutenção'],
    description: 'Reorganização de trechos e pontos de uma rede existente para novo uso dos ambientes.',
    scope: 'Levantamento da rede existente, revisão de trajetos e adequação dos pontos previstos no escopo.',
    challenge: 'Intervir em áreas ocupadas com acesso limitado e necessidade de programação por blocos.',
    solution: 'Execução setorizada, comunicação prévia das intervenções e conferência dos trechos antes da liberação.',
    coverImage: imagery.infrastructure, coverAlt: 'Infraestrutura em execução — imagem ilustrativa temporária',
    gallery: [{ src: imagery.infrastructure, alt: 'Instalação de rede — imagem ilustrativa temporária' }, { src: imagery.pipeInspection, alt: 'Inspeção de tubulação — imagem ilustrativa temporária' }],
  },
  {
    slug: 'instalacoes-empreendimento-comercial',
    title: 'Instalações Prediais — Empreendimento Comercial',
    segment: 'Comercial', location: 'Cidade/UF', year: '2025', filters: ['Elétrica', 'Hidráulica', 'Incêndio'],
    services: ['Elétrica', 'Hidráulica', 'Combate a incêndio'],
    description: 'Execução integrada de instalações para a implantação de um empreendimento comercial.',
    scope: 'Infraestrutura elétrica, redes hidrossanitárias e frentes de combate a incêndio coordenadas com a obra civil.',
    challenge: 'Manter diferentes especialidades sincronizadas com um cronograma de implantação enxuto.',
    solution: 'Planejamento semanal, liberação por áreas e acompanhamento das interfaces entre as disciplinas.',
    coverImage: imagery.pipeTeam, coverAlt: 'Equipe trabalhando em tubulações — imagem ilustrativa temporária',
    gallery: [{ src: imagery.pipeTeam, alt: 'Trabalho em infraestrutura — imagem ilustrativa temporária' }, { src: imagery.electrician, alt: 'Instalação elétrica — imagem ilustrativa temporária' }],
  },
  {
    slug: 'manutencao-centro-empresarial',
    title: 'Plano de Manutenção — Centro Empresarial',
    segment: 'Corporativo', location: 'Cidade/UF', year: '2025', filters: ['Manutenção', 'Elétrica', 'Hidráulica'],
    services: ['Manutenção preventiva', 'Diagnóstico técnico'],
    description: 'Estruturação de uma rotina preventiva para instalações críticas de um centro empresarial.',
    scope: 'Inspeção inicial, priorização de intervenções, manutenção de componentes e acompanhamento periódico.',
    challenge: 'Reduzir ocorrências sem comprometer o funcionamento diário dos espaços.',
    solution: 'Plano por criticidade, janelas programadas e histórico das intervenções realizadas.',
    coverImage: imagery.maintenance, coverAlt: 'Manutenção de infraestrutura — imagem ilustrativa temporária',
    gallery: [{ src: imagery.maintenance, alt: 'Equipe de manutenção — imagem ilustrativa temporária' }, { src: imagery.electrician, alt: 'Verificação elétrica — imagem ilustrativa temporária' }],
  },
  {
    slug: 'rede-hidraulica-varejo',
    title: 'Adequação Hidráulica — Unidade de Varejo',
    segment: 'Varejo', location: 'Cidade/UF', year: '2024', filters: ['Hidráulica', 'Manutenção'],
    services: ['Rede hidrossanitária', 'Adequação de pontos'],
    description: 'Adequação de redes e pontos para a atualização do layout de uma unidade em operação.',
    scope: 'Mudança de pontos, revisão de trechos, execução de novos ramais e suporte à retomada da operação.',
    challenge: 'Concentrar a intervenção em uma janela curta e preservar áreas fora do escopo.',
    solution: 'Preparação prévia, separação de frentes e verificação final antes da reabertura.',
    coverImage: imagery.pipeInspection, coverAlt: 'Inspeção de tubulação — imagem ilustrativa temporária',
    gallery: [{ src: imagery.pipeInspection, alt: 'Infraestrutura hidráulica — imagem ilustrativa temporária' }, { src: imagery.infrastructure, alt: 'Obra de infraestrutura — imagem ilustrativa temporária' }],
  },
]

export const projectFilters: Array<'Todos' | ProjectFilter> = ['Todos', 'Elétrica', 'Hidráulica', 'Gás', 'Incêndio', 'Manutenção']

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
