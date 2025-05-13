// Mock data for reciters
export const RECITERS = [
  {
    id: '1',
    slug: 'tejani-brothers',
    name: 'Tejani Brothers',
    albums: 18,
    description: 'The Tejani Brothers are a renowned group of reciters known for their melodious voices and spiritual recitations.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#7f3934'
  },
  {
    id: '2',
    slug: 'nadeem-sarwar',
    name: 'Nadeem Sarwar',
    albums: 38,
    description: 'Nadeem Sarwar is one of the most famous and respected reciters in the world, known for his powerful voice and emotional recitations.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#4c3a8d'
  },
  {
    id: '3',
    slug: 'mir-hasan-mir',
    name: 'Mir Hasan Mir',
    albums: 20,
    description: 'Mir Hasan Mir is renowned for his unique style and poetic expressions that resonate with audiences around the world.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#41593c'
  },
  {
    id: '4',
    slug: 'irfan-haider',
    name: 'Irfan Haider',
    albums: 22,
    description: 'Irfan Haider is known for his innovative approach to traditional recitations and his contemporary style.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#5d4a3e'
  },
  {
    id: '5',
    slug: 'farhan-ali-waris',
    name: 'Farhan Ali Waris',
    albums: 23,
    description: 'Farhan Ali Waris has captivated audiences worldwide with his melodious voice and heartfelt recitations.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#664d2e'
  },
  {
    id: '6',
    slug: 'hassan-sadiq',
    name: 'Hassan Sadiq',
    albums: 15,
    description: 'Hassan Sadiq is among the most recognized voices in the world of nawhas, with a distinct style that has inspired many.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#7e3450'
  },
  // Additional reciters for the full list page
  {
    id: '7',
    slug: 'ali-shanawar',
    name: 'Ali Shanawar',
    albums: 12,
    description: 'Ali Shanawar has inspired a new generation with his modern approach to traditional nawhas.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#365d59'
  },
  {
    id: '8',
    slug: 'messum-abbas',
    name: 'Messum Abbas',
    albums: 19,
    description: 'Messum Abbas is known for his unique voice and devotional style that has earned him fans worldwide.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#4a437e'
  },
  {
    id: '9',
    slug: 'syed-shabbir-hassan',
    name: 'Syed Shabbir Hassan',
    albums: 8,
    description: 'Syed Shabbir Hassan brings a fresh perspective to traditional nawhas with his distinctive voice.',
    imageUrl: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    backgroundColor: '#7a3e54'
  }
];

// Reciter lookup by slug
export const RECITERS_BY_SLUG = RECITERS.reduce((acc, reciter) => {
  acc[reciter.slug] = reciter;
  return acc;
}, {} as Record<string, typeof RECITERS[0]>);

// Mock album data
export const ALBUMS = [
  { id: '1', title: 'Album 1', year: 2023, tracks: 12 },
  { id: '2', title: 'Album 2', year: 2022, tracks: 10 },
  { id: '3', title: 'Album 3', year: 2021, tracks: 8 },
  { id: '4', title: 'Album 4', year: 2020, tracks: 14 },
]; 