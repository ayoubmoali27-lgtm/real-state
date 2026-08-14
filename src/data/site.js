// Centralized data so the headshot/agent and listing info stay in sync across pages.

export const agents = [
  {
    slug: 'elena-marchetti',
    name: 'Elena Marchetti',
    role: 'Senior Partner',
    tagline: 'Senior Partner — European Architectural Heritage',
    photo: '/assets/agent.jpg',
    sales: '$2B+ career sales',
    region: 'Mayfair, London',
    bio: 'Specializing in European architectural heritage and ultra-prime listings with over $2B in career sales. Elena brings two decades of discretion to the world\u2019s most private residences, from Tuscan estates to Belgravia townhouses.',
    specialties: ['Heritage Estates', 'European Listings', 'Private Discretion', 'Cross-Border Acquisitions'],
    languages: ['English', 'Italian', 'French'],
  },
  {
    slug: 'julian-vance',
    name: 'Julian Vance',
    role: 'Senior Partner',
    tagline: 'European Architectural Heritage',
    photo: null,
    sales: '$2B+ career sales',
    region: 'Paris, France',
    bio: 'A specialist in European architectural heritage, Julian curates ultra-prime listings with discretion and an architect\u2019s eye for provenance.',
    specialties: ['Heritage Estates', 'Architectural Provenance'],
    languages: ['English', 'French'],
  },
  {
    slug: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Estate Specialist',
    tagline: 'Historic North American Estates',
    photo: null,
    sales: 'Top 1% Global',
    region: 'Greenwich, CT',
    bio: 'Dedicated to the discreet brokerage of historic North American estates and modern mountain retreats.',
    specialties: ['Historic Estates', 'Mountain Retreats'],
    languages: ['English'],
  },
  {
    slug: 'naomi-chen',
    name: 'Naomi Chen',
    role: 'Global Director',
    tagline: 'Asia-Pacific Portfolio',
    photo: null,
    sales: '$1.5B+ career sales',
    region: 'Singapore',
    bio: 'Leads the Asia-Pacific portfolio, with deep expertise in urban penthouses and waterfront estates from Hong Kong to Sydney.',
    specialties: ['Penthouses', 'Waterfront', 'Asia-Pacific'],
    languages: ['English', 'Mandarin', 'Cantonese'],
  },
]

export const featuredAgent = agents[0]

export const listings = [
  {
    id: 'obsidian-retreat',
    name: 'The Obsidian Retreat',
    location: 'St. Moritz, Switzerland',
    price: '$24,500,000',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=80',
    description:
      'An architectural masterpiece carved into the granite slopes, offering unparalleled privacy and panoramic alpine views.',
    details:
      'Featuring a private heli-pad, a subterranean wine cellar holding 3,000 bottles, and a wellness suite with an authentic Finnish sauna.',
    beds: 7,
    baths: 9,
    sqft: '18,400',
    type: 'Modernist',
  },
  {
    id: 'villa-palladiana',
    name: 'Villa Palladiana',
    location: 'Lake Como, Italy',
    price: '$18,200,000',
    image: 'https://images.unsplash.com/photo-1613553497126-a44624272024?auto=format&fit=crop&w=2000&q=80',
    description:
      'Historic preservation meets contemporary luxury in this waterfront estate with a private 16th-century dock.',
    details:
      'A limestone marvel set on 4 acres of manicured Italian gardens, blending Renaissance proportions with smart-home integration.',
    beds: 9,
    baths: 11,
    acres: '4.5',
    type: 'Neoclassical',
  },
  {
    id: 'zenith-skyloft',
    name: 'The Zenith Skyloft',
    location: 'Tokyo, Japan',
    price: '$32,000,000',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=80',
    description: 'A minimalist glass penthouse overlooking the Tokyo skyline, complete with private sky pool.',
    details:
      'Floor-to-ceiling glass walls, a private sky pool on the 88th floor, and a curated art collection included.',
    beds: 4,
    baths: 5,
    floor: '88',
    type: 'Penthouse',
  },
]

export const searchResults = [
  {
    id: 'obsidian-sky',
    name: 'The Obsidian Sky',
    location: 'Beverly Hills, California',
    price: '$32,500,000',
    badge: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
    beds: 6,
    baths: 8,
    sqft: '14,200',
  },
  {
    id: 'villa-doro',
    name: "Villa d'Oro",
    location: 'Positano, Italy',
    price: '$18,750,000',
    badge: 'Off-Market',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    beds: 9,
    baths: 11,
    acres: '4.5',
  },
  {
    id: 'summit-triplex',
    name: 'Summit Triplex',
    location: 'New York, NY',
    price: '$45,000,000',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    beds: 4,
    baths: 5,
    floor: '88',
  },
  {
    id: 'aman-sanctuary',
    name: 'Aman Sanctuary',
    location: 'Ubud, Bali',
    price: '$12,200,000',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80',
    beds: 5,
    baths: 6,
    sqft: '8,500',
  },
  {
    id: 'cobalt-cove',
    name: 'Cobalt Cove',
    location: 'Mykonos, Greece',
    price: '$22,000,000',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1600&q=80',
    beds: 7,
    baths: 8,
    sqft: '11,200',
  },
  {
    id: 'mira-loma',
    name: 'Mira Loma Estate',
    location: 'Beverly Hills, California',
    price: '$58,000,000',
    badge: 'Quiet Listing',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    beds: 8,
    baths: 12,
    sqft: '24,000',
  },
]

export const categories = [
  { name: 'Modernist', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Historic Estates', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Beachfront', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80' },
  { name: 'Penthouses', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80' },
]

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Search', path: '/search' },
  { label: 'Listings', path: '/listings' },
  { label: 'Calculator', path: '/calculator' },
  { label: 'Agents', path: `/agents/${featuredAgent.slug}` },
]
