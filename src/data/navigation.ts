import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'Acasă', href: '/' },
  {
    label: 'Petreceri',
    href: '/petreceri-copii/',
    children: [
      { label: 'Prezentare', href: '/petreceri-copii/', description: 'Descoperă experiența de petrecere' },
      { label: 'Pachete & Rezervare', href: '/petreceri-copii/pachete/', description: 'Alege pachetul potrivit' },
    ],
  },
  {
    label: 'Playground',
    href: '/playground/',
    children: [
      { label: 'Prezentare', href: '/playground/', description: 'Intră în joc' },
      { label: 'Activități', href: '/playground/activitati/', description: 'XR, VR, simulatoare și mai mult' },
      { label: 'Program & Tarife', href: '/playground/tarife-program/', description: 'Orar și prețuri' },
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
    label: 'Arena Mobilă',
    href: '/arena-mobila/',
    children: [
      { label: 'Prezentare', href: '/arena-mobila/', description: 'Aducem experiența la tine' },
      { label: 'Școli', href: '/arena-mobila/scoli/', description: 'Activități educaționale itinerante' },
      { label: 'Evenimente & Festivaluri', href: '/arena-mobila/evenimente/', description: 'Atracție interactivă' },
      { label: 'Petreceri Private', href: '/arena-mobila/petreceri-private/', description: 'La locația ta' },
      { label: 'Solicită Ofertă', href: '/arena-mobila/solicita-oferta/', description: 'Formular de solicitare' },
    ],
  },
  { label: 'Despre noi', href: '/despre-noi/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerQuickLinks: NavItem[] = [
  { label: 'Acasă', href: '/' },
  { label: 'Petreceri copii', href: '/petreceri-copii/' },
  { label: 'Playground', href: '/playground/' },
  { label: 'Afterschool', href: '/afterschool/' },
  { label: 'Arena Mobilă', href: '/arena-mobila/' },
  { label: 'Despre noi', href: '/despre-noi/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Rezervă acum', href: '/rezerva/' },
];
