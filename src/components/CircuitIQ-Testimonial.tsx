import { Quote } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';
import circuitiqTeam from '@/assets/circuitiq-team.png';

export function CircuitIQTestimonial() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={circuitiqTeam} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'hsla(220, 25%, 8%, 0.8)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="liquid-glass-strong glass-shimmer rounded-3xl p-10 md:p-14 text-center">
              <Quote className="w-10 h-10 mx-auto mb-8 opacity-30" style={{ color: 'hsl(168, 100%, 35%)' }} />
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-white/80 mb-10">
                Building a startup is lonely. NORCAT's community pulled me in, but the expert support-from mentorship to
                capital access-is what's kept me here. The value is real.
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'hsl(168 100% 35% / 0.15)', border: '1px solid hsl(168 100% 35% / 0.3)' }}>
                  <span className="text-xl font-bold" style={{ color: 'hsl(168, 100%, 35%)' }}>LB</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">Luke Begley</p>
                  <p className="text-white/35 text-sm font-light">Founder & CEO, CircuitIQ</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
