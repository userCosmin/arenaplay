import { Section } from '@/components/ui/Section';
import { cn } from '@/utils/cn';

export interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  steps: Step[];
  accentClass?: string;
  className?: string;
}

export function HowItWorks({ title = 'Cum funcționează', steps, accentClass = 'bg-brand-500', className }: HowItWorksProps) {
  return (
    <Section className={cn('bg-white', className)}>
      <h2 className="mb-12 font-display text-display-md font-extrabold text-ink-900">{title}</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="relative">
            <span className={cn('mb-4 flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-bold text-white', accentClass)}>
              {index + 1}
            </span>
            <h3 className="font-display text-lg font-bold text-ink-900">{step.title}</h3>
            <p className="mt-2 text-ink-500">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
