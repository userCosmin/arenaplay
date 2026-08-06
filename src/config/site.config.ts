/**
 * ============================================================================
 * ARENA PLAY — CENTRAL SITE CONFIGURATION
 * ============================================================================
 * This is the SINGLE SOURCE OF TRUTH for business/contact information used
 * across SEO metadata, structured data (JSON-LD), header/footer, floating
 * contact buttons, and forms.
 *
 * ⚠️ PLACEHOLDER DATA: Every value below is a realistic placeholder so the
 * project builds and runs immediately. Replace with real business data
 * before going live — search the codebase for other config in /src/data
 * for prices, hours, packages, etc. Nothing else needs to change; every
 * component reads from here.
 * ============================================================================
 */

export const siteConfig = {
  brand: {
    name: 'Arena Play',
    legalName: 'Arena Play SRL',
    tagline: 'Distracție. Experiențe. Educație.',
    description:
      'Arena Play este locul unde distracția întâlnește educația: petreceri pentru copii, playground cu tehnologie XR/VR, afterschool și Arena Mobilă — experiența Arena Play adusă la tine.',
    foundingYear: '2021',
  },

  url: {
    production: 'https://www.arenaplay.ro',
    domain: 'arenaplay.ro',
  },

  contact: {
    phoneDisplay: '+40 7XX XXX XXX',
    phoneE164: '+407XXXXXXXX',
    whatsappNumber: '407XXXXXXXX',
    whatsappDefaultMessage: 'Bună! Aș vrea informații despre Arena Play.',
    email: 'contact@arenaplay.ro',
    reservationsEmail: 'rezervari@arenaplay.ro',
  },

  address: {
    streetAddress: 'Str. Exemplu nr. 10',
    locality: 'București',
    region: 'București',
    postalCode: '0X0000',
    country: 'RO',
    countryName: 'România',
    full: 'Str. Exemplu nr. 10, Sector 1, București, România',
    googleMapsUrl: 'https://maps.google.com/?q=Arena+Play+Bucuresti',
    googleMapsEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.9!2d26.0!3d44.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI3JzAwLjAiTiAyNsKwMDAnMDAuMCJF!5e0!3m2!1sro!2sro!4v0000000000000',
    geo: {
      latitude: 44.4268,
      longitude: 26.1025,
    },
  },

  social: {
    facebook: 'https://facebook.com/arenaplay',
    instagram: 'https://instagram.com/arenaplay',
    tiktok: 'https://tiktok.com/@arenaplay',
    youtube: 'https://youtube.com/@arenaplay',
  },

  openingHours: {
    playground: [
      { days: 'Sâmbătă – Duminică', hours: '13:30 – 21:30' },
      { days: 'Luni – Vineri', hours: 'Doar cu rezervare' },
    ],
    afterschool: [{ days: 'Luni – Vineri', hours: '12:00 – 18:00' }],
    structuredData: [
      { dayOfWeek: ['Saturday', 'Sunday'], opens: '13:30', closes: '21:30' },
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '12:00', closes: '18:00' },
    ],
  },

  analytics: {
    ga4Id: import.meta.env.VITE_GA4_ID ?? '',
    gtmId: import.meta.env.VITE_GTM_ID ?? '',
    fbPixelId: import.meta.env.VITE_FB_PIXEL_ID ?? '',
    clarityId: import.meta.env.VITE_CLARITY_ID ?? '',
  },

  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL ?? '',
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function whatsappUrl(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
}

export function telUrl(): string {
  return `tel:${siteConfig.contact.phoneE164}`;
}

export function mailUrl(subject?: string): string {
  return subject
    ? `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${siteConfig.contact.email}`;
}
