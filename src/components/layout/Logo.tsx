import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

export function Logo({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn('flex items-center gap-2 font-display font-extrabold text-xl sm:text-2xl', className)} aria-label="Arena Play - acasă">
      <span
        className={cn(
          'flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-playground text-white'
        )}
      >
        AP
      </span>
      <span className={dark ? 'text-white' : 'text-ink-900'}>
        Arena<span className="text-brand-500">Play</span>
      </span>
    </Link>
  );
}
