import { motion } from 'framer-motion';
import { PartyPopper, Gamepad2, GraduationCap, Truck, ArrowRight } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { cn } from '@/utils/cn';

const iconMap = { PartyPopper, Gamepad2, GraduationCap, Truck };

const cardGradients: Record<string, string> = {
  petreceri: 'from-petreceri/25 via-petreceri/10 to-white',
  playground: 'from-playground/25 via-playground/10 to-white',
  afterschool: 'from-white to-white',
  arenamobila: 'from-white to-white',
};

const cardBorders: Record<string, string> = {
  arenamobila: 'border-2 border-ink-900',
};

const iconColors: Record<string, string> = {
  petreceri: 'bg-petreceri text-white',
  playground: 'bg-playground text-white',
  afterschool: 'bg-afterschool text-white',
  arenamobila: 'bg-arenamobila text-white',
};

/** The four primary service cards — core routing hub of the whole site. */
export function ServiceCards() {
  return (
    <Section id="servicii" className="bg-white">
      <div className="mb-12 max-w-2xl">
        <h2 className="font-heading text-display-md font-extrabold text-ink-900">Alege experiența Arena Play</h2>
        <p className="mt-4 text-lg text-ink-500">Patru trasee clare, pentru fiecare nevoie a familiei tale.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={cn('group flex flex-col rounded-3xl bg-gradient-to-b p-6 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-lift', cardGradients[service.accent], cardBorders[service.accent])}
            >
              <span className={cn('mb-5 flex h-12 w-12 items-center justify-center rounded-2xl', iconColors[service.accent])}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-bold text-ink-900">{service.shortLabel}</h3>
              <p className="mt-1 text-sm font-semibold text-ink-500">{service.tagline}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{service.description}</p>
              <Button
                to={service.href}
                variant="ghost"
                size="sm"
                className="mt-5 !px-0 justify-start text-ink-900"
                icon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              >
                Detalii
              </Button>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
