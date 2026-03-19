import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Play, BarChart3, Quote } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ScrollReveal } from '@/components/ScrollReveal';
import EcosystemDashboard from '@/components/dashboard/EcosystemDashboard';
import { StoryModal, storyData } from '@/components/StoryModal';
import signatureLines from '@/assets/signature-lines.png';
import linesTeal from '@/assets/lines-teal.png';

const successStories = [
  {
    company: 'MineTech Robotics',
    outcome: 'Series A Closed',
    amount: '$12M',
    description: 'Autonomous underground vehicles now deployed at 5 mining sites globally.',
  },
  {
    company: 'SubSurface AI',
    outcome: 'Acquisition',
    amount: '$45M',
    description: 'AI geological analysis platform acquired by major mining software company.',
  },
  {
    company: 'VentFlow Systems',
    outcome: 'Partnership',
    amount: 'Global OEM',
    description: 'Smart ventilation technology licensed by leading mining equipment manufacturer.',
  },
];


export default function Impact() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <Layout>
      <div style={{ background: 'hsl(220 15% 92%)' }} className="min-h-screen">

        {/* ───── HERO ───── */}
        <section className="relative pt-40 pb-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          {/* Subtle teal orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 80%, 0.4) 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, hsla(220, 15%, 85%, 0.3) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
            <img src={linesTeal} alt="" aria-hidden="true" className="absolute top-0 right-0 opacity-[0.12] pointer-events-none" style={{ width: '60%' }} />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-6" style={{
                  background: 'linear-gradient(145deg, hsla(168, 25%, 85%, 0.5) 0%, hsla(168, 20%, 80%, 0.25) 100%)',
                  border: '1.5px solid hsla(168, 30%, 90%, 0.5)',
                  color: 'hsl(168, 40%, 30%)',
                  boxShadow: 'inset 0 2px 4px 0 hsla(168, 30%, 95%, 0.4), inset 0 -2px 4px 0 hsla(168, 20%, 50%, 0.08), 0 4px 12px hsla(168, 20%, 30%, 0.12), 0 1px 3px hsla(0, 0%, 0%, 0.06)',
                }}>
                  <BarChart3 className="w-3.5 h-3.5" />
                  Greater Sudbury Innovation Ecosystem
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                  Real-Time{' '}
                  <span className="text-5xl md:text-6xl lg:text-7xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontStyle: 'italic' }}>
                    Impact Dashboard
                  </span>
                </h1>
                <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl" style={{ color: 'hsl(220, 20%, 10%)' }}>
                  Explore the growth, innovation, and economic impact of Greater Sudbury's 
                  thriving startup ecosystem through interactive data visualization.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ───── MAIN DASHBOARD ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, hsl(168 100% 35% / 0.08) 0%, transparent 60%)' }} />
          <img src={linesTeal} alt="" className="absolute bottom-0 right-0 w-[1000px] opacity-[0.15] pointer-events-none" style={{ transform: 'scaleY(-1)' }} />
          
          <div className="container mx-auto px-6 relative z-10">
            <EcosystemDashboard />
          </div>
        </section>

        {/* ───── SUCCESS STORIES ───── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'hsl(220 15% 92%)' }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full" style={{ background: 'radial-gradient(circle, hsl(220 10% 80% / 0.3) 0%, transparent 70%)' }} />
            <img src={signatureLines} alt="" className="absolute top-0 right-0 w-[400px] opacity-[0.07]" style={{ filter: 'sepia(1) saturate(3) hue-rotate(120deg) brightness(0.8)' }} />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-14">
                <span className="glass-frosted-btn-teal inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.15em] uppercase mb-5">
                  Portfolio Highlights
                </span>
                <h2 className="text-3xl md:text-4xl leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 500, color: 'hsl(220, 15%, 20%)' }}>
                  Recent <span className="text-4xl md:text-5xl" style={{ color: 'hsl(168, 100%, 28%)', fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontStyle: 'italic' }}>Wins</span>
                </h2>
                <p className="font-light" style={{ color: 'hsl(220, 20%, 10%)' }}>
                  Celebrating the achievements of our portfolio companies. Click to explore each story.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story, index) => (
                <ScrollReveal key={story.company} delay={index * 100}>
                  <button 
                    onClick={() => setSelectedStory(story.company)}
                    className="w-full text-left rounded-[20px] p-7 h-full group cursor-pointer hover:scale-[1.03] transition-transform duration-300"
                    style={{
                      background: 'linear-gradient(165deg, hsla(168, 25%, 78%, 0.3) 0%, hsla(168, 20%, 75%, 0.18) 50%, hsla(168, 15%, 82%, 0.1) 100%)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderTop: '1px solid hsla(168, 30%, 90%, 0.5)',
                      borderLeft: '1px solid hsla(168, 25%, 85%, 0.35)',
                      borderRight: '0.5px solid hsla(168, 20%, 75%, 0.15)',
                      borderBottom: '0.5px solid hsla(168, 15%, 65%, 0.1)',
                      boxShadow: 'inset 0 1px 1px 0 hsla(168, 30%, 95%, 0.25), inset 0 0 20px 0 hsla(168, 25%, 85%, 0.08), 0 8px 32px hsla(168, 20%, 30%, 0.1), 0 2px 8px hsla(0, 0%, 0%, 0.03)',
                    }}
                  >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4" style={{
                      background: 'hsl(168 100% 35% / 0.1)',
                      color: 'hsl(168, 100%, 28%)',
                      border: '0.5px solid hsl(168 100% 35% / 0.15)',
                    }}>
                      <TrendingUp className="h-3.5 w-3.5" />
                      {story.outcome}
                    </div>
                    <div className="text-4xl font-black mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>
                      {story.amount}
                    </div>
                    <div className="font-bold text-lg mb-2" style={{ color: 'hsl(220, 15%, 20%)' }}>{story.company}</div>
                    <p className="text-sm font-light mb-4" style={{ color: 'hsl(220, 15%, 40%)' }}>{story.description}</p>
                    
                    {/* Play indicator */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'hsl(168, 100%, 28%)' }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'hsl(168 100% 35% / 0.1)', border: '0.5px solid hsl(168 100% 35% / 0.2)' }}>
                        <Play className="h-4 w-4 fill-current" />
                      </div>
                      <span className="text-sm font-medium">View Story</span>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Story Modal */}
        <StoryModal 
          story={selectedStory ? storyData[selectedStory] : null}
          open={!!selectedStory}
          onClose={() => setSelectedStory(null)}
        />

        {/* ───── CTA ───── */}
        <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(168 100% 28%) 0%, hsl(168 80% 22%) 100%)' }}>
          <img 
            src={signatureLines} 
            alt="" 
            aria-hidden="true"
            className="absolute top-0 right-0 h-1/2 w-auto object-contain object-right opacity-50 pointer-events-none select-none mix-blend-overlay"
            style={{ transform: 'scaleX(-1)' }}
          />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                Be Part of Our{' '}
                <span style={{ color: 'hsla(0, 0%, 100%, 0.85)' }}>Next Chapter</span>
              </h2>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10 text-white/60">
                Join the founders who are building the future of mining and industrial 
                technology. Your success could be our next headline.
              </p>
              <Link 
                to="/apply" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(145deg, hsla(0, 0%, 100%, 0.2) 0%, hsla(0, 0%, 100%, 0.1) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  color: 'white',
                  border: '0.5px solid hsla(0, 0%, 100%, 0.35)',
                  boxShadow: 'inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4), inset 0 -1px 0 0 hsla(0, 0%, 0%, 0.1), 0 4px 16px hsla(168, 100%, 20%, 0.3), 0 8px 32px hsla(168, 100%, 20%, 0.15)',
                }}
              >
                Apply for Venture Growth Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </div>
    </Layout>
  );
}
