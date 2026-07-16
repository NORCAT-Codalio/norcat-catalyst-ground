import { motion } from 'framer-motion';
import {
  Users,
  FileText,
  Building2,
  DollarSign,
  Target,
  Lightbulb,
  Scale,
  Globe,
  Briefcase,
  PresentationIcon,
  UserPlus,
  TrendingUp,
} from 'lucide-react';

const supportItems = [
  { icon: PresentationIcon, label: 'Build my pitch deck' },
  { icon: Users, label: 'Find a co-founder' },
  { icon: UserPlus, label: 'Hire my first employee' },
  { icon: Building2, label: 'Register my business' },
  { icon: DollarSign, label: 'Raise funding' },
  { icon: Target, label: 'Find product-market fit' },
  { icon: FileText, label: 'Draft investor documents' },
  { icon: Globe, label: 'Expand internationally' },
  { icon: Lightbulb, label: 'Validate my idea' },
  { icon: Scale, label: 'Legal & IP strategy' },
  { icon: Briefcase, label: 'Connect with mentors' },
  { icon: TrendingUp, label: 'Scale my operations' },
];

export function VentureHero() {
  return (
    <section className="relative pt-20 pb-14 overflow-hidden bg-gradient-hero">
      {/* Background effects consistent with brand */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-5"
        >
          Become a Client
        </motion.p>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight"
        >
          Your venture's{' '}
          <span className="text-gradient-teal">unfair advantage.</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg mb-10 max-w-2xl mx-auto"
        >
          Whatever you're building, wherever you're building it — we help you scale.
        </motion.p>

        {/* Scrolling Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="overflow-hidden"
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee gap-4">
              {[...supportItems, ...supportItems].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-background/80 backdrop-blur-sm shadow-sm"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground/80 whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
