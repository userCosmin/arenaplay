import { School, PartyPopper, CalendarHeart, Truck, ClipboardList, Wrench, Users2 } from 'lucide-react';
import { SEO } from '@/components/seo/SEO';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Gallery } from '@/components/sections/Gallery';

const routes = [
  {
    title: 'Școli',
    description: 'Activități educaționale itinerante, demonstrații XR și evenimente școlare tematice.',
    href: '/arena-xr/scoli/',
    icon: School,
  },
  {
    title: 'Evenimente & Festivaluri',
    description: 'Atracție interactivă pentru evenimente cu flux mare de public: festivaluri, activări de brand.',
    href: '/arena-xr/evenimente/',
    icon: CalendarHeart,
  },
  {
    title: 'Petreceri Private',
    description: 'Aducem experiența Arena Play direct la locația ta, pentru petreceri și evenimente private.',
    href: '/arena-xr/petreceri-private/',
    icon: PartyPopper,
  },
];

export default function ArenaMobilaPage() {
  return (
    <>
      <SEO
        title="Arena XR — Aducem experiența la tine"
        description="Arena XR se deplasează la școli, evenimente, festivaluri și petreceri private. Solicită o ofertă personalizată pentru locația ta."
        path="/arena-xr/"
      />
      <PageHero
        eyebrow="Arena XR"
        title="ARENA XR"
        subtitle="Noi aducem experiența la tine."
        accent="arenamobila"
        breadcrumbs={[{ label: 'Arena XR', href: '/arena-xr/' }]}
      >
        <Button to="/arena-xr/solicita-oferta/" accent="arenamobila" size="lg" icon={<Truck className="h-5 w-5" />} iconPosition="left">
          Solicită Arena XR
        </Button>
      </PageHero>

      <Section className="bg-white">
        <h2 className="mb-10 font-display text-display-md font-extrabold text-ink-900">Cele trei trasee</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {routes.map((route) => (
            <a
              key={route.href}
              href={route.href}
              className="group flex flex-col rounded-3xl bg-arenamobila/5 p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-arenamobila text-white">
                <route.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold text-ink-900">{route.title}</h3>
              <p className="mt-2 flex-1 text-sm text-ink-600">{route.description}</p>
              <span className="mt-4 text-sm font-semibold text-arenamobila-dark">Detalii →</span>
            </a>
          ))}
        </div>
      </Section>

      <HowItWorks
        title="Cum funcționează"
        accentClass="bg-arenamobila"
        steps={[
          { title: 'Solicitare', description: 'Ne trimiți detaliile despre locație, dată și tip de eveniment.' },
          { title: 'Configurare', description: 'Stabilim împreună activitățile potrivite și logistica necesară.' },
          { title: 'Transport & instalare', description: 'Echipa Arena Play se deplasează și instalează totul la locația ta.' },
          { title: 'Coordonare', description: 'Coordonăm evenimentul de la un capăt la altul, pentru o experiență fără griji.' },
        ]}
      />

      <Section className="bg-white">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <ClipboardList className="mt-1 h-6 w-6 shrink-0 text-arenamobila-dark" aria-hidden="true" />
            <p className="text-ink-600">Prețul depinde de locație, durată și format — de aceea folosim CTA „Solicită ofertă”.</p>
          </div>
          <div className="flex items-start gap-3">
            <Wrench className="mt-1 h-6 w-6 shrink-0 text-arenamobila-dark" aria-hidden="true" />
            <p className="text-ink-600">Echipamentele sunt adaptate pentru transport și instalare rapidă, oriunde este necesar.</p>
          </div>
          <div className="flex items-start gap-3">
            <Users2 className="mt-1 h-6 w-6 shrink-0 text-arenamobila-dark" aria-hidden="true" />
            <p className="text-ink-600">Ne adaptăm la numărul de participanți, de la grupe mici la evenimente ample.</p>
          </div>
        </div>
      </Section>

      <Gallery category="arena-mobila" title="Galerie Arena XR" />
    </>
  );
}
