import type { PriceItem, Offer } from '@/types';

export const playgroundPricing: PriceItem[] = [
  { id: 'ora-copil', label: 'Acces Playground', price: 45, unit: 'lei / oră / copil' },
  { id: 'pachet-2h', label: 'Pachet 2 ore', price: 79, unit: 'lei / copil', note: 'Economisești 11 lei' },
  { id: 'xr-vr-sesiune', label: 'Sesiune XR sau VR', price: 25, unit: 'lei / sesiune' },
  { id: 'simulator-sesiune', label: 'Simulator auto / zbor', price: 20, unit: 'lei / sesiune' },
  { id: 'abonament-lunar', label: 'Abonament lunar', price: 299, unit: 'lei / lună', note: 'Acces nelimitat weekend' },
];

export const playgroundOffers: Offer[] = [
  {
    id: 'frati',
    title: 'Reducere frați',
    description: '10% reducere pentru al doilea copil din aceeași familie, la aceeași rezervare.',
    conditions: 'Valabil doar la rezervări pe loc, în aceeași sesiune.',
  },
  {
    id: 'grup-scoala',
    title: 'Grupuri organizate',
    description: 'Tarif special pentru grupuri de minimum 10 copii (clase, tabere, grupe de prieteni).',
    conditions: 'Necesită rezervare cu minimum 3 zile înainte.',
  },
];
