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

// Track type definition
export interface Track {
  id: string;
  title: string;
  slug: string;
  hasLyrics?: boolean;
  hasAudio?: boolean;
  videoUrl?: string;
  lyrics?: string;
}

// Album type definition
export interface Album {
  id: string;
  title: string;
  slug: string;
  year: number;
  reciterId: string;
  coverArt?: string;
  tracks: Track[];
}

// Mock album data with tracks
export const ALBUMS: Album[] = [
  { 
    id: '1', 
    title: 'Hussain Zindabad', 
    slug: 'hussain-zindabad',
    year: 2022, 
    reciterId: '1', 
    coverArt: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    tracks: [
      { id: '1-1', title: 'Ayam E Aza Alvida', slug: 'ayam-e-aza-alvida', hasLyrics: true, hasAudio: true, videoUrl: 'https://www.youtube.com/watch?v=example1' },
      { id: '1-2', title: 'Bhai Abbas', slug: 'bhai-abbas', hasLyrics: true, hasAudio: true, videoUrl: 'https://www.youtube.com/watch?v=example2' },
      { id: '1-3', title: 'Farsh E Aza', slug: 'farsh-e-aza', hasLyrics: true, hasAudio: true, videoUrl: 'https://www.youtube.com/watch?v=example3' },
      { id: '1-4', title: 'Hussain Dil Na Torna', slug: 'hussain-dil-na-torna', hasLyrics: true, hasAudio: true },
      { id: '1-5', title: 'Hussain Is My Leader', slug: 'hussain-is-my-leader', hasLyrics: true, hasAudio: true },
      { id: '1-6', title: 'Hussain Zindabad', slug: 'hussain-zindabad', hasLyrics: true, hasAudio: true },
      { id: '1-7', title: 'Yad Kiya Hai Baba', slug: 'yad-kiya-hai-baba', hasLyrics: true, hasAudio: true },
      { id: '1-8', title: 'Ye Arz e Karbala Hai', slug: 'ye-arz-e-karbala-hai', hasLyrics: true, hasAudio: true }
    ] 
  },
  { 
    id: '2', 
    title: 'Karbala Ki Kahani', 
    slug: 'karbala-ki-kahani',
    year: 2021, 
    reciterId: '1', 
    coverArt: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    tracks: [
      { id: '2-1', title: 'Karbala Ki Kahani', slug: 'karbala-ki-kahani', hasLyrics: true, hasAudio: true },
      { id: '2-2', title: 'Main Hussain Hoon', slug: 'main-hussain-hoon', hasLyrics: true, hasAudio: true },
      { id: '2-3', title: 'Sakina Ki Jholi', slug: 'sakina-ki-jholi', hasLyrics: false, hasAudio: true },
      { id: '2-4', title: 'Abbas Alamdar', slug: 'abbas-alamdar', hasLyrics: true, hasAudio: true }
    ] 
  },
  { 
    id: '3', 
    title: 'Moula Ali', 
    slug: 'moula-ali',
    year: 2020, 
    reciterId: '2', 
    coverArt: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    tracks: [
      { id: '3-1', title: 'Moula Ali', slug: 'moula-ali', hasLyrics: true, hasAudio: true },
      { id: '3-2', title: 'Ya Ali Madad', slug: 'ya-ali-madad', hasLyrics: true, hasAudio: true },
      { id: '3-3', title: 'Haider Ka Rutba', slug: 'haider-ka-rutba', hasLyrics: true, hasAudio: true }
    ] 
  },
  { 
    id: '4', 
    title: 'Ya Hussain', 
    slug: 'ya-hussain',
    year: 2019, 
    reciterId: '3', 
    coverArt: 'https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png',
    tracks: [
      { id: '4-1', title: 'Ya Hussain', slug: 'ya-hussain', hasLyrics: true, hasAudio: true },
      { id: '4-2', title: 'Sher-e-Khuda', slug: 'sher-e-khuda', hasLyrics: true, hasAudio: true },
      { id: '4-3', title: 'Mera Imam', slug: 'mera-imam', hasLyrics: true, hasAudio: true },
      { id: '4-4', title: 'Karbala Ka Safar', slug: 'karbala-ka-safar', hasLyrics: true, hasAudio: true }
    ] 
  }
]; 

// Get albums by reciter ID
export const getAlbumsByReciterId = (reciterId: string): Album[] => {
  return ALBUMS.filter(album => album.reciterId === reciterId);
};

// Find album by reciter slug and album slug
export const findAlbumBySlug = (reciterSlug: string, albumSlug: string): Album | undefined => {
  const reciter = RECITERS_BY_SLUG[reciterSlug];
  if (!reciter) return undefined;
  
  return ALBUMS.find(album => 
    album.reciterId === reciter.id && album.slug === albumSlug
  );
};

// Find track by reciter slug, album slug, and track slug
export const findTrackBySlug = (reciterSlug: string, albumSlug: string, trackSlug: string): { 
  track: Track | undefined, 
  album: Album | undefined,
  reciter: typeof RECITERS[0] | undefined
} => {
  const reciter = RECITERS_BY_SLUG[reciterSlug];
  if (!reciter) return { track: undefined, album: undefined, reciter: undefined };
  
  const album = ALBUMS.find(album => 
    album.reciterId === reciter.id && album.slug === albumSlug
  );
  if (!album) return { track: undefined, album: undefined, reciter };
  
  const track = album.tracks.find(track => track.slug === trackSlug);
  
  return { track, album, reciter };
}; 