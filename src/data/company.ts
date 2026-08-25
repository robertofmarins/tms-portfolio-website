export const company = {
  name: 'Ágape Instalações',
  shortName: 'Ágape',
  positioning: 'Engenharia, instalações prediais e assistência técnica',
  // TODO CLIENTE: substituir todos os dados de contato pelos dados reais.
  phone: '+55 21 99999-9999',
  whatsapp: '5521999999999',
  email: 'contato@agapeinstalacoes.com.br',
  address: 'Endereço comercial — Cidade/UF',
  serviceArea: 'Cidade e região',
  businessHours: 'Segunda a sexta, das 8h às 18h',
  whatsappMessage: 'Olá, Ágape Instalações. Gostaria de conversar sobre um projeto.',
  brand: {
    // TODO CLIENTE: alterar para '/brand/agape-logo.png' quando o arquivo oficial for fornecido.
    logoPath: null as string | null,
    // TODO CLIENTE: alterar para '/brand/agape-simbolo.png' quando o símbolo oficial for fornecido.
    symbolPath: null as string | null,
  },
  // TODO CLIENTE: substituir os indicadores abaixo pelos números reais.
  stats: [
    { value: '12+', label: 'anos de experiência' },
    { value: '320+', label: 'serviços realizados' },
    { value: '180+', label: 'clientes atendidos' },
    { value: '5', label: 'especialidades técnicas' },
  ],
  // TODO CLIENTE: validar e substituir missão, visão e valores institucionais.
  mission: 'Entregar soluções em instalações prediais com planejamento, responsabilidade e atenção a cada etapa do empreendimento.',
  vision: 'Ser reconhecida pela confiança técnica, organização e continuidade no atendimento aos clientes.',
  values: ['Segurança', 'Compromisso', 'Transparência', 'Qualidade', 'Responsabilidade', 'Evolução técnica'],
} as const

export const sectors = ['Residencial', 'Condomínios', 'Comercial', 'Corporativo', 'Industrial', 'Logística', 'Varejo'] as const

export const processSteps = [
  { number: '01', title: 'Entendimento', description: 'Análise da necessidade, do ambiente e do escopo técnico.' },
  { number: '02', title: 'Planejamento', description: 'Definição de soluções, recursos, interfaces e etapas.' },
  { number: '03', title: 'Execução', description: 'Implementação organizada conforme o planejamento acordado.' },
  { number: '04', title: 'Verificação', description: 'Testes, ajustes e conferências antes da conclusão.' },
  { number: '05', title: 'Entrega e suporte', description: 'Finalização documentada e continuidade no atendimento.' },
] as const

export const differentiators = [
  { title: 'Planejamento que antecipa conflitos', description: 'Organizamos escopo, etapas e interfaces para reduzir retrabalho, incompatibilidades e interrupções durante a execução.' },
  { title: 'Soluções integradas', description: 'Coordenamos diferentes especialidades para que os sistemas trabalhem em conjunto e a obra avance com mais clareza.' },
  { title: 'Acompanhamento próximo', description: 'Mantemos comunicação objetiva do início à entrega, com atenção às decisões que impactam prazo e operação.' },
  { title: 'Assistência após a execução', description: 'Permanecemos disponíveis para ajustes, adequações e manutenção dos sistemas implantados.' },
] as const
