export const BUSINESS = {
  name: 'Vincere Media Works',
  tagline: 'Media that wins.',
  email: 'andrewjamesmartinez91@gmail.com',
  website: 'https://jimmythegod100.github.io/vincere-media-works-web/',
  instagram: 'https://instagram.com/vinceremediaworks',
};

export const SERVICES = [
  {
    id: 'video',
    icon: 'videocam' as const,
    title: 'Video Production & Editing',
    description: 'Music videos, promos, reels, and cinematic edits with pro color and sound sync.',
    items: ['Lyric videos', 'Promo cuts', 'Social reels', 'Color grading'],
  },
  {
    id: 'brand',
    icon: 'diamond' as const,
    title: 'Brand Identity & Logos',
    description: 'Bold marks and visual systems that look premium on every platform.',
    items: ['Custom logos', 'Brand guides', 'Print assets', 'Social kits'],
  },
  {
    id: 'social',
    icon: 'phone-portrait' as const,
    title: 'Social Media Content',
    description: 'Scroll-stopping content optimized for reach and engagement.',
    items: ['Instagram edits', 'TikTok clips', 'Thumbnails', 'Content batches'],
  },
  {
    id: 'photo',
    icon: 'camera' as const,
    title: 'Photography & Visual Assets',
    description: 'Clean product shots, headshots, and ad-ready imagery.',
    items: ['Product photos', 'Headshots', 'Retouching', 'Ad sets'],
  },
  {
    id: 'web',
    icon: 'globe' as const,
    title: 'Websites & Landing Pages',
    description: 'Fast, mobile-friendly sites that convert visitors into clients.',
    items: ['Portfolio sites', 'Landing pages', 'Contact forms', 'GitHub Pages'],
  },
  {
    id: 'motion',
    icon: 'flash' as const,
    title: 'Motion & Graphics',
    description: 'Animated titles, intros, and motion elements that elevate production value.',
    items: ['Intro sequences', 'Animated logos', 'Lyric overlays', 'Event graphics'],
  },
];

export const PORTFOLIO = [
  {
    id: '1',
    label: 'Video',
    title: 'Cinematic Lyric Video',
    description: 'Synced lyrics, color-graded footage, and motion titles for streaming platforms.',
  },
  {
    id: '2',
    label: 'Brand',
    title: 'Red & Black Identity',
    description: 'Bold logo systems with high contrast for media and entertainment brands.',
  },
  {
    id: '3',
    label: 'Social',
    title: 'Short-Form Content Pack',
    description: 'Batch-edited reels with hooks, captions, and platform-native aspect ratios.',
  },
];

export const PROCESS = [
  { step: '01', title: 'Tell us your vision', detail: 'Share project type, timeline, budget, and any reference links.' },
  { step: '02', title: 'Get a custom quote', detail: 'We reply within 24–48 hours with scope, price, and delivery date.' },
  { step: '03', title: 'We create & revise', detail: 'You get progress updates and included revision rounds.' },
  { step: '04', title: 'Publish-ready delivery', detail: 'Final files in MP4, PNG, SVG, PDF — ready to post or print.' },
];

export const FAQ = [
  { q: 'How fast is delivery?', a: 'Starter projects: 3–5 days. Standard: 1–2 weeks. Pro: 2–4 weeks.' },
  { q: 'Do you offer revisions?', a: 'Yes — every package includes at least one revision round.' },
  { q: 'Do you work remotely?', a: 'Absolutely. We serve clients nationwide via email and cloud file sharing.' },
];

export const PRICING = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$150+',
    description: 'Single assets and quick turnarounds.',
    features: ['Logo design (1 concept)', 'Single social edit', 'Photo retouch (5 images)', '3–5 day delivery'],
  },
  {
    id: 'popular',
    name: 'Popular',
    price: '$500+',
    description: 'The sweet spot for growing brands.',
    features: ['Full brand kit', 'Video edit up to 3 min', '5–10 social clips', 'Landing page', '2 revision rounds'],
    featured: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$1,500+',
    description: 'Full production for launches and campaigns.',
    features: ['Multi-scene video', 'Complete brand system', 'Monthly content pack', 'Multi-page website'],
  },
];
