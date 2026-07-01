import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Play, BarChart3 } from 'lucide-react';
import { Layout } from '@/components/Layout';
import EcosystemDashboard from '@/components/dashboard/EcosystemDashboard';
import { StoryModal, storyData } from '@/components/StoryModal';


import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';

// ── Brand tokens (mirrors About) ──
const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FG_MUTED = 'rgba(255,255,255,0.72)';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5 ${className}`}
     style={{ fontFamily: FONT, color: TEAL }}>
    <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
    {children}
  </p>
);

const Display = ({ children, className = '', as: As = 'h2' as any }: any) => (
  <As className={`font-black uppercase leading-[0.95] tracking-tight text-white ${className}`}
     style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
    {children}
  </As>
);

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

const impactStats = [
  { number: '187', label: 'Active Companies' },
  { number: '$92M', label: 'Capital Invested' },
  { number: '2,000+', label: 'Jobs Created' },
  { number: '127', label: 'Partnerships' },
  { number: '$48M', label: 'Export Revenue' },
];

export default function Impact() {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* ───── HERO ───── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div
            className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow className="text-lg">
                <BarChart3 className="w-3.5 h-3.5" />
                Greater Sudbury Innovation Ecosystem
              </Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                News &<br /><span style={{ color: TEAL }}>Insight.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Explore the growth, innovation, and economic impact of Greater Sudbury's thriving startup ecosystem through interactive data visualization.
              </p>
            </div>
          </div>
        </section>




        {/* ───── IMPACT STATS ───── */}
        <section className="py-10 md:py-12" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {impactStats.map((s) => (
                <div key={s.label} className="pl-4" style={{ borderLeft: `2px solid ${TEAL}` }}>
                  <p className="font-black text-3xl md:text-4xl" style={{ fontFamily: FONT, color: NAVY }}>{s.number}</p>
                  <p className="text-xs mt-1 font-bold uppercase tracking-[0.16em]" style={{ color: '#5b6478' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── DASHBOARD (light) ───── */}
        <section className="py-20 md:py-28" style={{ background: '#f4f6fa', color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
                 style={{ fontFamily: FONT, color: TEAL }}>
                <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
                Ecosystem Metrics
              </p>
              <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
                  style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                The Numbers <span style={{ color: TEAL }}>Behind the North.</span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#475068' }}>
                A live look at the founders, capital, and partnerships shaping Greater Sudbury's innovation economy.
              </p>
            </div>
            <EcosystemDashboard />
          </div>
        </section>

        {/* ───── SUCCESS STORIES (dark gradient) ───── */}
        <section className="py-20 md:py-28 relative overflow-hidden"
                 style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 15% 20%, rgba(0,179,152,0.22), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.08), transparent 45%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-60 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-2xl mb-12 md:mb-16">
              <Eyebrow>Portfolio Highlights</Eyebrow>
              <Display className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Recent <span style={{ color: TEAL }}>Wins.</span>
              </Display>
              <p className="mt-6 text-base sm:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Celebrating the achievements of our portfolio companies. Click to explore each story.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <button
                  key={story.company}
                  onClick={() => setSelectedStory(story.company)}
                  className="w-full text-left rounded-2xl p-7 h-full group cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                  }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.14em] mb-5"
                       style={{ background: 'rgba(0,179,152,0.18)', color: TEAL, border: '1px solid rgba(0,179,152,0.35)' }}>
                    <TrendingUp className="h-3.5 w-3.5" />
                    {story.outcome}
                  </div>
                  <p className="font-black text-4xl md:text-5xl mb-3 text-white" style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
                    {story.amount}
                  </p>
                  <h3 className="font-black uppercase text-lg md:text-xl mb-2 text-white"
                      style={{ fontFamily: FONT, letterSpacing: '-0.01em' }}>
                    {story.company}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: FG_MUTED }}>{story.description}</p>

                  <div className="flex items-center gap-2 text-sm font-bold" style={{ color: TEAL }}>
                    <span className="inline-flex items-center justify-center size-7 rounded-full"
                          style={{ background: 'rgba(0,179,152,0.18)', border: '1px solid rgba(0,179,152,0.35)' }}>
                      <Play className="h-3 w-3 fill-current" />
                    </span>
                    View Story
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <StoryModal
          story={selectedStory ? storyData[selectedStory] : null}
          open={!!selectedStory}
          onClose={() => setSelectedStory(null)}
        />

        {/* ───── CTA (light paper) ───── */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
               style={{ fontFamily: FONT, color: TEAL }}>
              <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
              Join the Ecosystem
            </p>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6"
                style={{ fontFamily: FONT, letterSpacing: '-0.02em' }}>
              Be Part of Our<br /><span style={{ color: TEAL }}>Next Chapter.</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#475068' }}>
              Join the founders who are building the future of mining and industrial technology. Your success could be our next headline.
            </p>
            <Link to="/apply"
                  className="group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full text-sm font-bold transition-transform hover:scale-[1.02]"
                  style={{ background: TEAL, color: NAVY, fontFamily: FONT }}>
              Validate my Idea
              <span className="inline-flex items-center justify-center size-9 rounded-full" style={{ background: NAVY, color: 'white' }}>
                <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </section>

      </div>
    </Layout>
  );
}
