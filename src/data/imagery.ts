const pexels = (id: string, width = 1600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`

export const imagery = {
  // TODO CLIENTE: substituir todas as imagens temporárias por fotografias reais da Ágape.
  hero: 'https://images.unsplash.com/photo-1769695832195-dfe7e9f36980?auto=format&fit=crop&w=2000&q=84',
  electrician: pexels('27928762'),
  fireSystem: pexels('37352142'),
  pipeInspection: pexels('29931974'),
  infrastructure: pexels('38146883'),
  maintenance: pexels('12880833'),
  pipeTeam: pexels('36772540'),
} as const
