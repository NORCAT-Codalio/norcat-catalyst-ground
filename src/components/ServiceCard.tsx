import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  variant?: 'default' | 'teal' | 'dark';
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  variant = 'default',
  className,
}: ServiceCardProps) {
  const variants = {
    default: 'card-elevated hover:border-teal-200',
    teal: 'card-teal',
    dark: 'card-dark',
  };

  const iconBgVariants = {
    default: 'bg-secondary text-primary',
    teal: 'bg-teal-100 text-teal-700',
    dark: 'bg-teal-900 text-teal-300',
  };

  const titleVariants = {
    default: 'text-foreground',
    teal: 'text-foreground',
    dark: 'text-slate-50',
  };

  const descVariants = {
    default: 'text-muted-foreground',
    teal: 'text-muted-foreground',
    dark: 'text-slate-400',
  };

  return (
    <div className={cn(variants[variant], 'p-6 lg:p-8', className)}>
      <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-5', iconBgVariants[variant])}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className={cn('headline-sm mb-3', titleVariants[variant])}>{title}</h3>
      <p className={cn('body-md mb-4', descVariants[variant])}>{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li
              key={index}
              className={cn('flex items-start gap-2 text-sm', descVariants[variant])}
            >
              <span className="text-primary mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
