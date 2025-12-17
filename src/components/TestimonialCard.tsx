import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
  variant?: 'default' | 'featured';
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  image,
  variant = 'default',
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'relative p-6 lg:p-8 rounded-2xl',
        variant === 'featured'
          ? 'bg-gradient-industrial text-slate-50'
          : 'card-elevated',
        className
      )}
    >
      <Quote
        className={cn(
          'h-8 w-8 mb-4',
          variant === 'featured' ? 'text-teal-400' : 'text-primary'
        )}
      />
      <blockquote
        className={cn(
          'text-lg leading-relaxed mb-6',
          variant === 'featured' ? 'text-slate-200' : 'text-foreground'
        )}
      >
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        {image ? (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div
            className={cn(
              'w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-lg',
              variant === 'featured'
                ? 'bg-teal-600 text-slate-50'
                : 'bg-secondary text-primary'
            )}
          >
            {author.charAt(0)}
          </div>
        )}
        <div>
          <div
            className={cn(
              'font-semibold',
              variant === 'featured' ? 'text-slate-50' : 'text-foreground'
            )}
          >
            {author}
          </div>
          <div
            className={cn(
              'text-sm',
              variant === 'featured' ? 'text-slate-400' : 'text-muted-foreground'
            )}
          >
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  );
}
