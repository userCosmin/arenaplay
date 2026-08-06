import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink-950 pt-28">
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,46,147,0.35),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(0,87,255,0.35),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(0,194,178,0.3),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-ink-950/40" aria-hidden="true" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            Locul unde joaca devine învățare
          </span>
          <h1 className="text-balance font-display text-display-xl font-extrabold text-white">
            DISTRACȚIE. EXPERIENȚE. EDUCAȚIE.
          </h1>
          <p className="mt-6 text-balance text-lg sm:text-xl font-medium text-white/85">
            Petreceri <span aria-hidden="true">•</span> Playground <span aria-hidden="true">•</span> Afterschool{' '}
            <span aria-hidden="true">•</span> Arena Mobilă
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" to="/rezerva/" icon={<ArrowRight className="h-5 w-5" />}>
              Alege serviciul
            </Button>
            <Button size="lg" variant="outline" accent="ink" className="!border-white !text-white hover:!bg-white/10" to="/contact/">
              Contact
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
