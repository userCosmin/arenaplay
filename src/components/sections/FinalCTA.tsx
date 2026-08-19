import { PartyPopper, Gamepad2, GraduationCap, Truck } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

const ctas = [
  { label: 'Rezervă Loc de joacă', href: '/loc-de-joaca/tarife-program/', icon: Gamepad2, accent: 'playground' as const, variant: 'primary' as const, className: '' },
  { label: 'Rezervă petrecere', href: '/petreceri-vr/pachete/', icon: PartyPopper, accent: 'petreceri' as const, variant: 'primary' as const, className: '' },
  {
    label: 'Solicită Arena VR mobilă',
    href: '/arena-vr-mobila/solicita-oferta/',
    icon: Truck,
    accent: 'arenamobila' as const,
    variant: 'white' as const,
    className: 'border-2 border-ink-900',
  },
  {
    label: 'Solicită informații Afterschool',
    href: '/afterschool/inscrieri/',
    icon: GraduationCap,
    accent: 'afterschool' as const,
    variant: 'white' as const,
    className: '',
  },
];

/** Homepage closing section — four distinct, service-specific CTAs. */
export function FinalCTA() {
  return (
    <Section className="bg-gradient-to-br from-ink-950 to-ink-900">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-display-md font-extrabold text-white">Gata să începem?</h2>
        <p className="mt-4 text-lg text-white/70">Alege traseul potrivit familiei tale — durează mai puțin de un minut.</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {ctas.map((cta) => (
          <Button
            key={cta.href}
            to={cta.href}
            accent={cta.accent}
            variant={cta.variant}
            size="lg"
            icon={<cta.icon className="h-5 w-5" />}
            iconPosition="left"
            fullWidth
            className={cta.className}
          >
            {cta.label}
          </Button>
        ))}
      </div>
    </Section>
  );
}
