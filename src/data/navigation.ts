import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Acasă', href: '/' },
  {
    label: 'Loc de joacă',
    href: '/loc-de-joaca/',
    children: [
      { label: 'Prezentare', href: '/loc-de-joaca/', description: 'Intră în joc' },
      { label: 'Activități', href: '/loc-de-joaca/activitati/', description: 'XR, VR, simulatoare și mai mult' },
      { label: 'Program & Tarife', href: '/loc-de-joaca/tarife-program/', description: 'Orar și prețuri' },
    ],
  },
  {
    label: 'Petreceri',
    href: '/petreceri-copii/',
    children: [
      { label: 'Prezentare', href: '/petreceri-copii/', description: 'Descoperă experiența de petrecere' },
      { label: 'Pachete & Rezervare', href: '/petreceri-copii/pachete/', description: 'Alege pachetul potrivit' },
    ],
  },
  {
    label: 'Afterschool',
    href: '/afterschool/',
    children: [
      { label: 'Prezentare', href: '/afterschool/', description: 'După școală începe următorul nivel' },
      { label: 'Program & Curriculum', href: '/afterschool/program/', description: 'Cum arată o zi la Afterschool' },
      { label: 'Înscrieri', href: '/afterschool/inscrieri/', description: 'Solicită un loc' },
    ],
  },
  {
    label: 'Arena XR',
    href: '/arena-xr/',
    children: [
      { label: 'Prezentare', href: '/arena-xr/', description: 'Aducem experiența la tine' },
      { label: 'Școli', href: '/arena-xr/scoli/', description: 'Activități educaționale itinerante' },
      { label: 'Evenimente & Festivaluri', href: '/arena-xr/evenimente/', description: 'Atracție interactivă' },
      { label: 'Petreceri Private', href: '/arena-xr/petreceri-private/', description: 'La locația ta' },
      { label: 'Solicită Ofertă', href: '/arena-xr/solicita-oferta/', description: 'Formular de solicitare' },
    ],
  },
  { label: 'Despre noi', href: '/despre-noi/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Acasă', href: '/' },
  { label: 'Loc de joacă', href: '/loc-de-joaca/' },
  { label: 'Petreceri copii', href: '/petreceri-copii/' },
  { label: 'Afterschool', href: '/afterschool/' },
  { label: 'Arena XR', href: '/arena-xr/' },
  { label: 'Despre noi', href: '/despre-noi/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Rezervă acum', href: '/rezerva/' },
];
