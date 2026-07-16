import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ArrowRight, Cpu, Layers, DollarSign, TrendingUp, Rocket, CheckCircle, Compass } from 'lucide-react';
import signatureLines from '@/assets/signature-lines.png';
import norcatHalfLogo from '@/assets/norcat-half-logo.png.asset.json';
import citPlaceholder from '@/assets/cit-loopx-wide.jpg.asset.json';
import core5Placeholder from '@/assets/core5-ev-charging.png.asset.json';
import featuredCit from '@/assets/featured-cit-photo.png';
import featuredIap from '@/assets/featured-iap-photo.png';
import featuredRaii from '@/assets/featured-raii-photo.png';
import featuredScf from '@/assets/featured-scf-photo.png';
import featuredCore5 from '@/assets/featured-core5-photo.png';
import ociLogo from '@/assets/logos/oci-logo.png';
import ontarioLogo from '@/assets/logos/ontario-logo-wordmark.png';
import ovinLogo from '@/assets/logos/ovin-logo.png';
import noaLogo from '@/assets/logos/northern-ontario-angels.png';

const NAVY = '#001A4D';
const BLUE = '#003DA5';
const TEAL = '#00B398';
const PAPER = '#F2F3F6';
const FONT = "'Open Sans', system-ui, sans-serif";

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
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

type ProgramTab = {
  key: string;
  shortName: string;
  name: string;
  eyebrow: string;
  description: string;
  benefits: string[];
  href: string;
  image: string;
  partners: { logo: string; alt: string; height?: number }[];
};

const programTabs: ProgramTab[] = [
  {
    key: 'CIT',
    shortName: 'CIT',
    name: 'Critical Industrial Technologies (CIT)',
    eyebrow: 'Featured Program',
    description: 'Supporting SMEs in developing and adopting advanced mining and industrial technologies through access to the NORCAT Underground Centre.',
    benefits: [
      'Non-dilutive project funding',
      'Access to world-class testing and validation facilities',
      'Connections to industry and innovation partners',
    ],
    href: '/mining/critical-industrial-tech',
    image: featuredCit,
    partners: [
      { logo: ociLogo, alt: 'Ontario Centre of Innovation', height: 36 },
      { logo: ontarioLogo, alt: 'Ontario', height: 28 },
    ],
  },
  {
    key: 'IAP',
    shortName: 'IAP',
    name: 'Innovation Acceleration Program',
    eyebrow: 'Non-dilutive Funding',
    description: 'Non-dilutive funding to accelerate market entry for high-growth ventures across Northern Ontario.',
    benefits: [
      'Up to $100K in non-dilutive capital',
      'Dedicated venture growth coaching',
      'Market validation and pilot matchmaking',
    ],
    href: '/funding/innovation-acceleration-program',
    image: featuredIap,
    partners: [
      { logo: ontarioLogo, alt: 'Ontario', height: 28 },
      { logo: noaLogo, alt: 'Northern Ontario Angels', height: 32 },
    ],
  },
  {
    key: 'RAII',
    shortName: 'RAII',
    name: 'Regional Artificial Intelligence Program',
    eyebrow: 'AI Ventures',
    description: 'Capital, compute, and support for AI-driven ventures scaling out of Northern Ontario.',
    benefits: [
      'AI compute credits and infrastructure access',
      'Technical and commercialization mentorship',
      'Connections to enterprise AI buyers',
    ],
    href: '/funding/regional-ai-program',
    image: featuredRaii,
    partners: [
      { logo: ontarioLogo, alt: 'Ontario', height: 28 },
    ],
  },
  {
    key: 'SCF',
    shortName: 'SCF',
    name: 'Sudbury Catalyst Fund',
    eyebrow: 'Seed Capital',
    description: '$3M early-stage fund co-investing up to $250K alongside qualified angel investors.',
    benefits: [
      'Co-investment up to $250K per deal',
      'Angel syndication and due diligence support',
      'Direct pathway to follow-on capital',
    ],
    href: '/funding/sudbury-catalyst-fund',
    image: featuredScf,
    partners: [
      { logo: noaLogo, alt: 'Northern Ontario Angels', height: 32 },
      { logo: ontarioLogo, alt: 'Ontario', height: 28 },
    ],
  },
  {
    key: 'Core5',
    shortName: 'Core5',
    name: 'Core5',
    eyebrow: 'BEV / EV Ventures',
    description: 'The OVIN Northern Regional Technology Development Site supporting SMEs across the full EV value chain.',
    benefits: [
      'Startup & SME funding support',
      'Access to R&D and testing facilities',
      'Buyer / builder matchmaking',
    ],
    href: '/mining/core5',
    image: featuredCore5,
    partners: [
      { logo: ovinLogo, alt: 'OVIN', height: 32 },
      { logo: ontarioLogo, alt: 'Ontario', height: 28 },
    ],
  },
];

const impactStats = [
  { number: '$92M', label: 'Capital Invested', sub: 'Deployed across the ecosystem' },
  { number: '187', label: 'Active Companies', sub: 'Funded and supported ventures' },
  { number: '2,000+', label: 'Jobs Created', sub: 'Across Ontario innovation economy' },
  { number: '$48M', label: 'Export Revenue', sub: 'Generated by portfolio ventures' },
];

const Funding = () => {
  const [activeTab, setActiveTab] = useState('CIT');
  const activeProgram = programTabs.find((p) => p.key === activeTab) || programTabs[0];

  return (
    <Layout>
      <div style={{ background: NAVY, color: 'white', fontFamily: FONT }}>

        {/* HERO */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center pt-8 pb-8 md:pt-12 md:pb-12">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 50%, ${TEAL} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none bg-center bg-no-repeat bg-cover"
               style={{ backgroundImage: `url(${norcatHalfLogo.url})`, opacity: 0.15 }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 10%, rgba(0,179,152,0.18), transparent 45%), radial-gradient(circle at 80% 90%, rgba(47,111,214,0.18), transparent 50%)`,
          }} />
          <img src={signatureLines} alt="" aria-hidden="true"
               className="absolute top-0 right-0 w-auto h-1/3 object-contain object-right-top opacity-70 pointer-events-none select-none mix-blend-overlay" />

          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl xl:max-w-4xl">
              <Eyebrow><DollarSign className="w-3.5 h-3.5" />Capital & Funding Programs</Eyebrow>
              <Display className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.5rem]">
                Funding for<br /><span style={{ color: TEAL }}>Northern Innovators.</span>
              </Display>
              <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Non-dilutive grants, seed capital, and dedicated programs for mining, industrial, and EV ventures scaling out of Ontario. One front door to the region's most active funding streams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/apply"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                      style={{ background: TEAL, color: NAVY }}>
                  Become a Client <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/programs/capital-navigation"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border border-white/25 text-white hover:bg-white/10">
                  Explore Capital Navigation <Compass className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAMS OVERVIEW */}
        <section className="py-20 md:py-28" style={{ background: PAPER, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-20">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-6" style={{ color: TEAL }}>Funding Programs</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.95]" style={{ letterSpacing: '-0.02em' }}>
                Choose your <span style={{ color: TEAL }}>capital path.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg" style={{ color: 'rgba(0,26,77,0.72)' }}>
                Five flagship pathways designed for different stages, sectors, and outcomes. Each one is a direct link to the team, funding, and support you need.
              </p>
            </div>

            {/* Program Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {programTabs.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setActiveTab(p.key)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === p.key
                      ? 'text-white shadow-md'
                      : 'bg-white text-[#001A4D] border border-black/10 hover:border-teal-400 hover:text-teal-600'
                  }`}
                  style={activeTab === p.key ? { background: TEAL } : undefined}
                >
                  {p.shortName}
                </button>
              ))}
            </div>

            {/* Featured Program Card */}
            <div className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-lg">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 sm:h-80 lg:h-auto min-h-[320px] lg:min-h-[480px]">
                  <img
                    src={activeProgram.image}
                    alt={activeProgram.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: TEAL }}>
                    {activeProgram.eyebrow}
                  </p>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[0.95] mb-4" style={{ color: NAVY, letterSpacing: '-0.02em' }}>
                    {activeProgram.name}
                  </h3>
                  <div className="w-16 h-1.5 mb-6" style={{ background: TEAL }} />
                  <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'rgba(0,26,77,0.72)' }}>
                    {activeProgram.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {activeProgram.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(0,26,77,0.85)' }}>
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: `${TEAL}15`, color: TEAL }}>
                          <CheckCircle className="w-3.5 h-3.5" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={activeProgram.href}
                    className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full font-semibold text-sm text-white transition-all hover:opacity-90"
                    style={{ background: TEAL }}
                  >
                    View This Program <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="mt-8 pt-6 border-t border-black/10">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: 'rgba(0,26,77,0.5)' }}>
                      Delivered in partnership with
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                      {activeProgram.partners.map((partner) => (
                        <img
                          key={partner.alt}
                          src={partner.logo}
                          alt={partner.alt}
                          className="object-contain"
                          style={{ height: partner.height || 32, maxWidth: 140 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* INDUSTRY TRACKS */}
        <section className="pt-10 pb-16 md:pt-14 md:pb-24" style={{ background: `linear-gradient(180deg, ${PAPER} 0%, white 100%)`, color: NAVY }}>
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-14 md:mb-16">
              <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-6" style={{ color: TEAL }}>Industry Tracks</p>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-[0.95]" style={{ letterSpacing: '-0.02em' }}>
                Built for <span style={{ color: TEAL }}>Ontario's sectors.</span>
              </h2>
              <p className="mt-4 text-base md:text-lg" style={{ color: 'rgba(0,26,77,0.72)' }}>
                Sector-specific funding and facilities for mining, industrial, and battery-electric ventures scaling across the North.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* CIT Card */}
              <div className="group relative rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-52 overflow-hidden">
                  <img src={citPlaceholder.url} alt="Critical Industrial Technologies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative px-6 pb-8 pt-0 -mt-7 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg mb-5 z-10" style={{ background: TEAL, color: 'white' }}>
                    <Cpu className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#001A4D] mb-2">Critical Industrial Technologies</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: TEAL }}>Ontario mining & industrial tough-tech</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(0,26,77,0.72)' }}>
                    Build, test, and validate hard-tech for the mining and industrial sector with access to funding, facilities, and buyers.
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {['Non-dilutive project funding', 'Real-world testing in the Underground Centre', 'Direct pathways to mining OEMs'].map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(0,26,77,0.8)' }}>
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: TEAL }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/mining/critical-industrial-tech"
                        className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm self-start border hover:bg-[#00B398] hover:text-white transition-colors"
                        style={{ borderColor: TEAL, color: TEAL }}>
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Core5 Card */}
              <div className="group relative rounded-2xl overflow-hidden border border-black/5 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-48 sm:h-56 md:h-52 overflow-hidden">
                  <img src={core5Placeholder.url} alt="Core5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="relative px-6 pb-8 pt-0 -mt-7 flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg mb-5 z-10" style={{ background: TEAL, color: 'white' }}>
                    <Layers className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-[#001A4D] mb-2">Core5</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: TEAL }}>BEV / EV ventures across Northern Ontario</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(0,26,77,0.72)' }}>
                    The OVIN Northern Regional Technology Development Site supporting SMEs across the full EV value chain.
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {['Startup & SME funding support', 'Access to R&D and testing facilities', 'Buyer / builder matchmaking'].map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: 'rgba(0,26,77,0.8)' }}>
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: TEAL }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link to="/mining/core5"
                        className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm self-start border hover:bg-[#00B398] hover:text-white transition-colors"
                        style={{ borderColor: TEAL, color: TEAL }}>
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT STATS */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 100%)` }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, rgba(0,179,152,0.18), transparent 40%), radial-gradient(circle at 90% 80%, rgba(47,111,214,0.22), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-10">
            <div className="max-w-3xl mb-20">
              <Eyebrow><TrendingUp className="w-3.5 h-3.5" />Funding Impact</Eyebrow>
              <Display className="text-3xl md:text-5xl">
                Capital that <span style={{ color: TEAL }}>compounds.</span>
              </Display>
              <p className="mt-5 text-base md:text-lg max-w-2xl" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Real numbers from a track record of building, funding, and scaling ventures in Northern Ontario.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {impactStats.map((s) => (
                <div key={s.label} className="rounded-2xl p-6 md:p-8 border border-white/10" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: TEAL, letterSpacing: '-0.02em' }}>{s.number}</div>
                  <div className="text-sm md:text-base font-semibold text-white mb-1">{s.label}</div>
                  <div className="text-xs md:text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: PAPER, color: NAVY }}>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(0,179,152,0.10), transparent 45%), radial-gradient(circle at 80% 80%, rgba(47,111,214,0.10), transparent 45%)`,
          }} />
          <div className="relative mx-auto w-full max-w-5xl px-5 sm:px-6 md:px-10 text-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase mb-5"
               style={{ fontFamily: FONT, color: TEAL }}>
              <span className="size-1.5 rounded-full inline-block" style={{ background: TEAL }} />
              <Rocket className="w-3.5 h-3.5" />Ready to raise?
            </p>
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-3xl md:text-5xl lg:text-6xl"
                style={{ fontFamily: FONT, color: NAVY, letterSpacing: '-0.02em' }}>
              Let's find your <span style={{ color: TEAL }}>capital fit.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-2xl mx-auto" style={{ color: 'rgba(0,26,77,0.72)' }}>
              Become a client to unlock program eligibility, or work directly with our Capital Navigation team to map your funding path.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/apply"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                    style={{ background: TEAL, color: 'white' }}>
                Become a Client <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/programs/capital-navigation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border text-white hover:bg-white/10"
                    style={{ borderColor: NAVY, color: NAVY, background: 'transparent' }}>
                Explore Capital Navigation <Compass className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Funding;
