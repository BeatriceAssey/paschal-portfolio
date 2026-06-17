export interface Project {
  id: string
  title: string
  category: string
  client: string
  duration: string
  date: string
  thumbnail: string
  videoUrl?: string
  challenge: string
  concept: string
  production: string
  postProduction: string
  results: string
  gallery: string[]
  tools: string[]
}

export const projects: Project[] = [
  {
    id: 'aerial-showreel',
    title: 'Aerial Perspectives',
    category: 'Drone Reel',
    client: 'PCinematics',
    duration: '0:45',
    date: '2025-01',
    thumbnail: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800',
    videoUrl: '/videos/drone.mp4',
    challenge: 'Showcase breathtaking aerial cinematography.',
    concept: 'Cinematic drone movements over diverse landscapes.',
    production: 'DJI Mavic 3, natural light, 4K 60fps.',
    postProduction: 'Color graded in DaVinci Resolve.',
    results: 'Used as the hero reel for the website.',
    gallery: [],
    tools: ['DJI Mavic 3', 'DaVinci Resolve'],
  },
  {
    id: 'mountain-film',
    title: 'Summit Stories',
    category: 'Adventure',
    client: 'Mountain Explorer Co.',
    duration: '1:30',
    date: '2024-11',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
    videoUrl: '/videos/mountain.mp4',
    challenge: 'Capture the raw beauty of mountain expeditions.',
    concept: 'Slow-motion trekking shots, sweeping peak reveals.',
    production: 'Sony FX6, gimbal, lightweight rigs.',
    postProduction: 'Film emulation LUTs, ambient sound design.',
    results: 'Shared by National Geographic Travel on Instagram.',
    gallery: [],
    tools: ['Sony FX6', 'DJI RS3', 'Final Cut Pro'],
  },
  {
    id: 'urban-drone',
    title: 'City Above',
    category: 'Drone Reel',
    client: 'PCinematics',
    duration: '0:50',
    date: '2024-12',
    thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800',
    videoUrl: '/videos/dronee.mp4',
    challenge: 'Show a modern city from a cinematic bird’s-eye view.',
    concept: 'Hyperlapse, orbit shots, and rooftop reveals.',
    production: 'DJI Air 2S, evening golden hour.',
    postProduction: 'Speed ramps, color pop grade.',
    results: 'Featured on a local tourism campaign.',
    gallery: [],
    tools: ['DJI Air 2S', 'Premiere Pro'],
  },
  {
    id: 'brand-film',
    title: 'Infinite Horizons',
    category: 'Commercial',
    client: 'Luxury Safari Co.',
    duration: '0:60',
    date: '2024-01',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    videoUrl: '/videos/train.mp4',   // ← now uses your train footage
    challenge: 'Reimagine the safari experience for high-end travelers.',
    concept: 'Visual poem using slow-motion wildlife and golden hour landscapes.',
    production: 'Canon C70 rig, gimbal work, natural light only.',
    postProduction: 'Custom LUTs, subtle film grain, Dolby Atmos mix.',
    results: 'Increased booking inquiries by 40% in one month.',
    gallery: [],
    tools: ['Canon C70', 'DJI RS3', 'Final Cut Pro'],
  },
]
