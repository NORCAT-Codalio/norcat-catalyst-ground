import { Sparkles } from 'lucide-react';

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  dark?: boolean;
}

export const SectionEyebrow = ({ children, className = '', icon, dark = true }: SectionEyebrowProps) => {
  return (
    <div
      className={`
        inline-flex items-center gap-2.5
        px-4 py-2 rounded-full
        text-xs font-semibold uppercase tracking-[0.2em]
        border border-white/20
        shadow-[0_4px_20px_rgba(0,179,152,0.25)]
        backdrop-blur-md
        ${className}
      `}
      style={{
        background: 'linear-gradient(135deg, rgba(0,179,152,0.85) 0%, rgba(0,139,120,0.9) 100%)',
        color: '#ffffff',
      }}
    >
      {icon ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : (
        <Sparkles className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={2.5} />
      )}
      <span className="whitespace-nowrap">{children}</span>
    </div>
  );
};

export default SectionEyebrow;
