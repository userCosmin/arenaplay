import type { PartyPackage } from '@/types';

export const partyPackages: PartyPackage[] = [
  {
    id: 'basic',
    name: 'Pachet Basic',
    price: 599,
    priceUnit: 'lei / petrecere',
    duration: '2 ore',
    kids: 'până la 10 copii',
    includes: [
      'Spațiu privat rezervat',
      'Acces activități Playground',
      'Animator pentru 2 ore',
      'Decor tematic simplu',
    ],
  },
  {
    id: 'plus',
    name: 'Pachet Plus',
    price: 899,
    priceUnit: 'lei / petrecere',
    duration: '3 ore',
    kids: 'până la 15 copii',
    featured: true,
    includes: [
      'Spațiu privat rezervat',
      'Acces nelimitat Playground + XR/VR',
      'Animator + facepainting',
      'Decor tematic personalizat',
      'Tort și candy bar simplu',
    ],
  },
  {
    id: 'premium',
    name: 'Pachet Premium',
    price: 1299,
    priceUnit: 'lei / petrecere',
    duration: '4 ore',
    kids: 'până la 20 copii',
    includes: [
      'Spațiu privat rezervat, exclusivitate',
      'Acces nelimitat toate activitățile',
      '2 animatori + facepainting + mascotă',
      'Decor tematic premium',
      'Tort, candy bar și meniu pentru copii',
      'Sesiune foto a evenimentului',
    ],
  },
];
