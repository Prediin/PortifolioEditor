export const profile = {
  name: 'Pedro Luis Bezerra Lima',
  role: 'Editor de vídeo',
  email: 'daxstudios.comissions@gmail.com',
  whatsappDisplay: '+55 (89) 99987-7756',
  whatsappNumber: '5589999877756',
  instagram: '@predoarts1389',
  instagramUrl: 'https://www.instagram.com/predoarts1389/',
  intro:
    'Eu transformo material bruto em vídeo com ritmo, intenção e personalidade. Minha edição busca segurar atenção sem atropelar a história: timing de humor quando precisa ser divertido, respiro e construção quando precisa ser cinematográfico, cortes e motion quando a mensagem precisa chegar rápido. O objetivo é simples: fazer cada segundo trabalhar a favor do conteúdo e da pessoa que está assistindo.',
}

export const skills = [
  { name: 'CapCut Pro', level: 100, platform: 'Celular' },
  { name: 'Adobe Premiere Pro', level: 80, platform: 'PC' },
  { name: 'Alight Motion', level: 80, platform: 'Celular' },
  { name: 'Adobe After Effects', level: 30, platform: 'PC' },
]

export const services = [
  {
    index: '01',
    title: 'YouTube long-form',
    text: 'Gameplay, review, conteúdo documentado e vídeos com construção narrativa para manter ritmo e retenção.',
  },
  {
    index: '02',
    title: 'Short-form vertical',
    text: 'Reels e TikToks rápidos, objetivos e pensados para entregar a ideia antes do swipe.',
  },
  {
    index: '03',
    title: 'Comercial & produto',
    text: 'Vídeos de divulgação e reviews comerciais com foco em clareza, desejo e apresentação do produto.',
  },
  {
    index: '04',
    title: 'Motion & edits',
    text: 'Animações, sincronia musical, tipografia e motion design para dar energia e identidade ao conteúdo.',
  },
]

const youtube = (id) => ({
  provider: 'youtube',
  videoId: id,
  embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`,
  thumbnail: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
})

const instagram = (code) => ({
  provider: 'instagram',
  videoId: code,
  embedUrl: `https://www.instagram.com/reel/${code}/embed/`,
})

const tiktok = (id) => ({
  provider: 'tiktok',
  videoId: id,
  embedUrl: `https://www.tiktok.com/player/v1/${id}?controls=1&description=0&music_info=0&rel=0`,
})

export const projects = [
  {
    id: 'silksong-ato-1',
    kind: 'client',
    format: 'long',
    featured: true,
    title: 'A TORTURANTE e INCRÍVEL experiência de SILKSONG ATO I',
    client: 'Louco de Café',
    profileInitials: 'LC',
    profileImage: null,
    description:
      'Gameplay em formato de review documentada, com edição dinâmica e humor para acompanhar a experiência de Hollow Knight: Silksong.',
    software: 'Adobe Premiere Pro',
    tags: ['Gameplay', 'Review', 'Comédia', 'Long-form'],
    url: 'https://youtu.be/DWtCXisrvkg?is=AFmXWDkI6CTDem-G',
    ...youtube('DWtCXisrvkg'),
  },
  {
    id: 'disciplina-bleidson',
    kind: 'client',
    format: 'long',
    featured: true,
    title: 'Pare de amar o que você faz: Encontre a verdadeira disciplina',
    client: 'Bleidson Pereira',
    profileInitials: 'BP',
    profileImage: null,
    description:
      'Vídeo motivacional e cinematográfico construído para conduzir emoção, reforçar ideias e manter o espectador conectado à mensagem.',
    software: 'Adobe Premiere Pro',
    tags: ['Motivacional', 'Cinematográfico', 'Narrativa', 'Long-form'],
    url: 'https://www.youtube.com/watch?v=ndQXOhQYFTw',
    ...youtube('ndQXOhQYFTw'),
  },
  {
    id: 'worldcel-reparo',
    kind: 'client',
    format: 'short',
    featured: true,
    title: 'Imprevistos acontecem... Mas a World Cel resolve pra você! 📱🪛',
    client: '@worldcel.co',
    clientUrl: 'https://www.instagram.com/worldcel.co_/',
    profileInitials: 'WC',
    profileImage: null,
    description:
      'Motion design curto com animações e narração feita por mim para divulgar o serviço de conserto de aparelhos telefônicos da empresa.',
    software: 'CapCut Pro',
    tags: ['Motion', 'Narração', 'Comercial', 'Reels'],
    url: 'https://www.instagram.com/reel/DJzKXoeu-lc/?igsi=NTc4MTIwNjQ2YQ==',
    localFile: 'media/worldcel-reparo.mp4',
    ...instagram('DJzKXoeu-lc'),
  },
  {
    id: 'worldcel-redmi',
    kind: 'client',
    format: 'short',
    featured: false,
    title: 'Redmi Note 14 Pro REVIEW',
    client: '@worldcel.co',
    clientUrl: 'https://www.instagram.com/worldcel.co_/',
    profileInitials: 'WC',
    profileImage: null,
    description:
      'Review comercial do dispositivo, apresentando especificações e funções gerais em um formato rápido e direto.',
    software: 'CapCut Pro',
    tags: ['Produto', 'Review', 'Comercial', 'Reels'],
    url: 'https://www.instagram.com/reel/DLCt3JGuRqT/?igsi=NTc4MTIwNjQ2YQ==',
    localFile: 'media/worldcel-redmi-note-14-pro.mp4',
    ...instagram('DLCt3JGuRqT'),
  },
  {
    id: 'worldcel-laser',
    kind: 'client',
    format: 'short',
    featured: false,
    title: 'Aqui quem manda é o cliente 😂',
    client: '@worldcel.co',
    clientUrl: 'https://www.instagram.com/worldcel.co_/',
    profileInitials: 'WC',
    profileImage: null,
    description:
      'Vídeo de divulgação do serviço de gravação a laser para garrafas, com linguagem leve e foco comercial.',
    software: 'CapCut Pro',
    tags: ['Divulgação', 'Humor', 'Comercial', 'Reels'],
    url: 'https://www.instagram.com/reel/DMiBebsOtWw/?igsi=eTA3OG4yMTE0dXU4',
    localFile: 'media/worldcel-gravacao-laser.mp4',
    ...instagram('DMiBebsOtWw'),
  },
  {
    id: 'overwatch-overbuxa',
    kind: 'personal',
    format: 'long',
    featured: true,
    title: 'OVERBUXA COM DOIS LERDO KKKKKKK | Overwatch 2',
    client: 'Predo',
    clientUrl: 'https://www.youtube.com/@Predin._./videos',
    profileInitials: 'P',
    profileImage: null,
    description: 'Gameplay engraçada de Overwatch 2 com foco em timing de comédia e ritmo.',
    software: 'Adobe Premiere Pro',
    tags: ['Gameplay', 'Comédia', 'YouTube', 'Autoral'],
    url: 'https://youtu.be/R806aBIVFFI',
    ...youtube('R806aBIVFFI'),
  },
  {
    id: 'indie-cross-1',
    kind: 'personal',
    format: 'long',
    featured: false,
    title: "O ENCONTRO DOS MELHORES JOGOS INDIE!!! | Friday Night Funkin' Indie Cross (Parte 1)",
    client: 'Predo',
    clientUrl: 'https://www.youtube.com/@Predin._./videos',
    profileInitials: 'P',
    profileImage: null,
    description:
      "Gameplay comentada do mod Indie Cross de Friday Night Funkin', combinando cortes, reação, humor e ritmo musical.",
    software: 'Adobe Premiere Pro',
    tags: ['Gameplay', 'Música', 'YouTube', 'Autoral'],
    url: 'https://youtu.be/KfHhanIVhzg',
    ...youtube('KfHhanIVhzg'),
  },
  {
    id: 'indie-cross-2',
    kind: 'personal',
    format: 'long',
    featured: false,
    title: "MÚSICAS EXTRAS E O PESADELO!!! | Friday Night Funkin' Indie Cross (Parte 2)",
    client: 'Predo',
    clientUrl: 'https://www.youtube.com/@Predin._./videos',
    profileInitials: 'P',
    profileImage: null,
    description:
      "Continuação da gameplay comentada de Indie Cross, mantendo ritmo, humor e sincronia com a proposta musical do jogo.",
    software: 'Adobe Premiere Pro',
    tags: ['Gameplay', 'Música', 'YouTube', 'Autoral'],
    url: 'https://youtu.be/OJq87P0SzwQ',
    ...youtube('OJq87P0SzwQ'),
  },
]

const brawlShortLinks = [
  'https://vt.tiktok.com/ZSVWSmaEJ/',
  'https://vt.tiktok.com/ZSVWSS8Ad/',
  'https://vt.tiktok.com/ZSVWSjHta/',
  'https://vt.tiktok.com/ZSVWSkUEs/',
  'https://vt.tiktok.com/ZSVWSaqc2/',
  'https://vt.tiktok.com/ZSVWSrQ2H/',
  'https://vt.tiktok.com/ZSVWSaCkr/',
]

export const brawlShorts = brawlShortLinks.map((url, index) => ({
  id: `brawl-news-${index + 1}`,
  title: `Brawl Stars — short #${String(index + 1).padStart(2, '0')}`,
  client: '@predo._.0',
  profileUrl: 'https://www.tiktok.com/@predo._.0',
  description: 'Vídeo curto direcionado a notícias ou conteúdo de Brawl Stars.',
  software: 'CapCut Pro',
  provider: 'tiktok-short-link',
  url,
  localFile: `media/brawl-news-${String(index + 1).padStart(2, '0')}.mp4`,
}))

const editIds = [
  '7609062580006538516',
  '7571114098990025992',
  '7518750945799343416',
  '7515176039287491846',
  '7452371192326999302',
  '7438560253148499255',
  '7472883936260001079',
  '7391521948854947078',
]

export const motionEdits = editIds.map((videoId, index) => ({
  id: `lgf-edit-${index + 1}`,
  title: `Brawl Stars motion edit #${String(index + 1).padStart(2, '0')}`,
  client: '@lgf.predo',
  profileUrl: 'https://www.tiktok.com/@lgf.predo',
  description: 'Edit musical e ritmada para Brawl Stars, com foco em sincronia, impacto e motion.',
  software: 'Alight Motion',
  url: `https://www.tiktok.com/@lgf.predo/video/${videoId}`,
  localFile: `media/lgf-edit-${String(index + 1).padStart(2, '0')}.mp4`,
  // TikTok does not expose a public unauthenticated view-count endpoint suitable for this static site.
  // Fill this manually when you want the live portfolio to show an exact number.
  viewCount: null,
  ...tiktok(videoId),
}))

export const filters = [
  { id: 'all', label: 'Todos' },
  { id: 'client', label: 'Para clientes' },
  { id: 'personal', label: 'Autorais' },
  { id: 'long', label: 'Long-form' },
  { id: 'short', label: 'Short-form' },
]
