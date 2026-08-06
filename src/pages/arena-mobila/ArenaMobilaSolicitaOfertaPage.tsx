import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/seo/SEO';
import { PageHero } from '@/components/sections/PageHero';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArenaMobilaRequestForm } from '@/components/forms/ArenaMobilaRequestForm';

export default function ArenaMobilaSolicitaOfertaPage() {
  const breadcrumbs = [
    { label: 'Arena Mobilă', href: '/arena-mobila/' },
    { label: 'Solicită Ofertă', href: '/arena-mobila/solicita-oferta/' },
  ];

  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('tip');
  const defaultType = (['scoala', 'eveniment', 'privat'] as const).find((t) => t === typeParam);

  return (
    <>
      <SEO
        title="Solicită Ofertă Arena Mobilă"
        description="Completează formularul pentru a solicita o ofertă Arena Mobilă — pentru școală, eveniment sau petrecere privată."
        path="/arena-mobila/solicita-oferta/"
      />
      <PageHero
        eyebrow="Solicită Ofertă"
        title="Spune-ne despre evenimentul tău"
        subtitle="Formular rapid — suficient pentru a califica cererea, fără informații inutile."
        accent="arenamobila"
        breadcrumbs={breadcrumbs}
      />

      <Section className="bg-white">
        <div className="mx-auto max-w-2xl">
          <Card>
            <ArenaMobilaRequestForm defaultType={defaultType} />
          </Card>
        </div>
      </Section>
    </>
  );
}
