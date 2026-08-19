import { SEO } from '@/components/seo/SEO';
import { JsonLd } from '@/components/seo/JsonLd';
import { localBusinessSchema, organizationSchema } from '@/utils/structuredData';
import { Hero } from '@/components/sections/Hero';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { WhatAreYouLookingFor } from '@/components/sections/WhatAreYouLookingFor';
import { Testimonials } from '@/components/sections/Testimonials';
import { Gallery } from '@/components/sections/Gallery';
import { LocationHours } from '@/components/sections/LocationHours';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Arena Play — Petreceri, Loc de joacă, Afterschool & Arena VR mobilă"
        description="Distracție, experiențe și educație într-un singur loc: petreceri pentru copii, loc de joacă cu XR/VR, afterschool și Arena VR mobilă adusă la tine."
        path="/"
      />
      <JsonLd data={[localBusinessSchema(), organizationSchema()]} />
      <Hero />
      <ServiceCards />
      <WhatAreYouLookingFor />
      <Testimonials />
      <Gallery title="Momente Arena Play" />
      <LocationHours />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
